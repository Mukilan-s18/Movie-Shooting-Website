import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Loader2, LogOut, ShieldAlert, Trash2, Upload, MessageCircle, Image as ImageIcon, Video, Star, Plus } from "lucide-react";
import imageCompression from "browser-image-compression";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { SectionHeading } from "@/components/site/SectionHeading";
import { fetchPhotos, photoCategories } from "@/lib/photos";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Manage Sets & Gallery - Cinewood Studios" },
      { name: "description", content: "Location manager tools to upload and manage film shooting sets." },
      { property: "og:title", content: "Manage Sets & Gallery - Cinewood Studios" },
      { property: "og:description", content: "Studio manager tools for the film location photo gallery." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

const MAX_MB = 8;

function AdminPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [username, setUsername] = useState<string>("");
  const [busy, setBusy] = useState(false);
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const [category, setCategory] = useState(photoCategories[0]!);
  const [file, setFile] = useState<File | null>(null);
  const [activeTab, setActiveTab] = useState<"gallery" | "messages" | "testimonials">("gallery");

  const [draggedId, setDraggedId] = useState<string | null>(null);

  // New Testimonial State
  const [tName, setTName] = useState("");
  const [tPlace, setTPlace] = useState("");
  const [tText, setTText] = useState("");
  const [tRating, setTRating] = useState(5);

  const { data: messages = [], isLoading: loadingMessages } = useQuery({
    queryKey: ["messages"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("contact_messages")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
    enabled: isAdmin === true && activeTab === "messages",
  });

  const { data: testimonials = [], isLoading: loadingTestimonials } = useQuery({
    queryKey: ["admin_testimonials"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
    enabled: isAdmin === true && activeTab === "testimonials",
  });

  const { data: photos = [], isLoading } = useQuery({
    queryKey: ["photos"],
    queryFn: fetchPhotos,
    enabled: isAdmin === true,
  });

  useEffect(() => {
    void (async () => {
      const { data: userData } = await supabase.auth.getUser();
      // Extract the username part from the formatted email
      const email = userData.user?.email || "";
      setUsername(email.split("@")[0] || "");
      
      const { data } = await supabase.rpc("is_admin");
      setIsAdmin(Boolean(data));
    })();
  }, []);

  async function signOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    await navigate({ to: "/auth", replace: true });
  }

  async function onUpload(e: React.FormEvent) {
    e.preventDefault();
    if (!file) {
      toast.error("Choose a media file first");
      return;
    }
    const isVideo = file.type.startsWith("video/");
    const isImage = file.type.startsWith("image/");
    if (!isImage && !isVideo) {
      toast.error("Only images and videos are allowed");
      return;
    }
    if (file.size > MAX_MB * 1024 * 1024) {
      toast.error(`Photo must be smaller than ${MAX_MB} MB`);
      return;
    }
    setBusy(true);
    let uploadedPath: string | null = null;
    let finalFile = file;

    try {
      if (isImage) {
        finalFile = await imageCompression(file, {
          maxSizeMB: 1,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        });
      }

      const ext = (finalFile.name.split(".").pop() ?? (isVideo ? "mp4" : "jpg")).toLowerCase().replace(/[^a-z0-9]/g, "");
      const path = `${crypto.randomUUID()}.${ext || (isVideo ? "mp4" : "jpg")}`;
      const { error: upErr } = await supabase.storage
        .from("gallery")
        .upload(path, finalFile, { contentType: finalFile.type, upsert: false });
      if (upErr) throw upErr;
      uploadedPath = path;
      const { error } = await supabase
        .from("photos")
        .insert({ 
          title: title.trim(), 
          place: place.trim(), 
          category, 
          image_path: path,
          media_type: isVideo ? "video" : "image"
        });
      if (error) throw error;
      toast.success(isVideo ? "Video added to the gallery" : "Photo added to the gallery");
      setTitle("");
      setPlace("");
      setFile(null);
      const input = document.getElementById("photo-file") as HTMLInputElement | null;
      if (input) input.value = "";
      await queryClient.invalidateQueries({ queryKey: ["photos"] });
    } catch (err) {
      // Roll back the orphaned file if the database row failed.
      if (uploadedPath) await supabase.storage.from("gallery").remove([uploadedPath]);
      toast.error(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setBusy(false);
    }
  }

  async function onDelete(id: string, path?: string) {
    if (!path) {
      toast.error("This is a sample photo and cannot be deleted");
      return;
    }
    if (!window.confirm("Delete this photo from the website?")) return;
    try {
      const { error } = await supabase.from("photos").delete().eq("id", id);
      if (error) throw error;
      await supabase.storage.from("gallery").remove([path]);
      toast.success("Item deleted");
      await queryClient.invalidateQueries({ queryKey: ["photos"] });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Delete failed");
    }
  }

  async function handleDrop(targetId: string) {
    if (!draggedId || draggedId === targetId) return;
    const dragged = photos.find((p) => p.id === draggedId);
    const target = photos.find((p) => p.id === targetId);
    if (!dragged || !target) return;
    try {
      const draggedOrder = dragged.sort_order ?? 0;
      const targetOrder = target.sort_order ?? 0;
      await supabase.from("photos").update({ sort_order: targetOrder }).eq("id", dragged.id);
      await supabase.from("photos").update({ sort_order: draggedOrder }).eq("id", target.id);
      await queryClient.invalidateQueries({ queryKey: ["photos"] });
      toast.success("Photos reordered");
    } catch (err) {
      toast.error("Failed to reorder");
    }
    setDraggedId(null);
  }

  async function onAddTestimonial(e: React.FormEvent) {
    e.preventDefault();
    if (!tName || !tText || !tPlace) return;
    setBusy(true);
    try {
      const { error } = await supabase.from("testimonials").insert({
        name: tName.trim(),
        place: tPlace.trim(),
        text: tText.trim(),
        rating: tRating,
      });
      if (error) throw error;
      toast.success("Testimonial added");
      setTName("");
      setTPlace("");
      setTText("");
      setTRating(5);
      await queryClient.invalidateQueries({ queryKey: ["admin_testimonials"] });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to add testimonial");
    } finally {
      setBusy(false);
    }
  }

  if (isAdmin === null) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center gap-2 text-muted-foreground">
        <Loader2 className="h-5 w-5 animate-spin" /> Checking your access…
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <ShieldAlert className="mx-auto h-10 w-10 text-destructive" />
        <h1 className="mt-4 font-display text-2xl font-semibold text-primary">Access denied</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {username} is not the owner account, so gallery management is not available.
        </p>
        <button
          type="button"
          onClick={signOut}
          className="mt-6 inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-sm font-semibold text-secondary hover:border-primary hover:text-primary"
        >
          <LogOut className="h-4 w-4" /> Sign out
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-14">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <SectionHeading
          title="Manage Gallery"
          subtitle="Add or remove the decoration photos shown on your website."
        />
        <button
          type="button"
          onClick={signOut}
          className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-sm font-semibold text-secondary hover:border-primary hover:text-primary"
        >
          <LogOut className="h-4 w-4" /> Sign out
        </button>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">Signed in as {username}</p>

      <div className="mt-6 flex border-b border-border">
        <button
          className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold transition-colors ${activeTab === "gallery" ? "border-b-2 border-primary text-primary" : "text-muted-foreground hover:text-primary"}`}
          onClick={() => setActiveTab("gallery")}
        >
          <ImageIcon className="h-4 w-4" /> Gallery
        </button>
        <button
          className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold transition-colors ${activeTab === "messages" ? "border-b-2 border-primary text-primary" : "text-muted-foreground hover:text-primary"}`}
          onClick={() => setActiveTab("messages")}
        >
          <MessageCircle className="h-4 w-4" /> Enquiries
        </button>
      </div>

      {activeTab === "gallery" && (
        <>
          <form
        onSubmit={onUpload}
        className="mt-8 grid gap-4 rounded-sm border border-border bg-card p-6 sm:grid-cols-2"
      >
        <div>
          <label htmlFor="title" className="text-sm font-semibold text-secondary">Title</label>
          <input
            id="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Muhurtham Stage"
            className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="place" className="text-sm font-semibold text-secondary">Place</label>
          <input
            id="place"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            placeholder="Nerkundram, Chennai"
            className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="category" className="text-sm font-semibold text-secondary">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          >
            {photoCategories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="photo-file" className="text-sm font-semibold text-secondary">
            Media (max {MAX_MB} MB)
          </label>
          <input
            id="photo-file"
            type="file"
            accept="image/*,video/*"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm"
          />
        </div>
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={busy}
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-60"
          >
            {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
            {busy ? "Uploading…" : "Add Photo"}
          </button>
        </div>
      </form>

      <h2 className="mt-12 font-display text-2xl font-semibold text-primary">Current Photos (Drag to Reorder)</h2>
      {isLoading ? (
        <p className="mt-4 text-sm text-muted-foreground">Loading…</p>
      ) : (
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((p) => (
            <figure
              key={p.id}
              draggable
              onDragStart={() => setDraggedId(p.id)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(p.id)}
              className="relative overflow-hidden rounded-sm border border-border bg-card cursor-grab active:cursor-grabbing"
            >
              {p.media_type === "video" ? (
                <div className="relative h-44 w-full bg-black">
                  <video src={p.image} className="h-full w-full object-cover" muted playsInline />
                  <div className="absolute right-2 top-2 rounded-full bg-background/80 p-1 text-foreground backdrop-blur">
                    <Video className="h-3 w-3" />
                  </div>
                </div>
              ) : (
                <img src={p.image} alt={p.title} loading="lazy" className="h-44 w-full object-cover" />
              )}
              <figcaption className="flex items-center justify-between gap-2 p-3">
                <span>
                  <span className="block font-display text-base font-semibold text-primary">{p.title}</span>
                  <span className="text-xs text-muted-foreground">{p.place || p.category}</span>
                </span>
                <button
                  type="button"
                  aria-label={`Delete ${p.title}`}
                  onClick={() => onDelete(p.id, p.path)}
                  className="rounded-sm border border-border p-2 text-destructive hover:bg-destructive/10"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
      </>
      )}

      {activeTab === "messages" && (
        <div className="mt-8">
          <h2 className="font-display text-2xl font-semibold text-primary">Enquiries</h2>
          {loadingMessages ? (
            <p className="mt-4 text-sm text-muted-foreground">Loading…</p>
          ) : messages.length === 0 ? (
            <p className="mt-4 text-sm text-muted-foreground">No enquiries yet.</p>
          ) : (
            <div className="mt-5 grid gap-4">
              {messages.map((m: any) => (
                <div key={m.id} className="rounded-sm border border-border bg-card p-4 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-primary">{m.name}</h3>
                      <div className="mt-1 space-x-4 text-sm text-muted-foreground">
                        <span>{m.phone}</span>
                        {m.date && <span>Date: {m.date}</span>}
                        <span>{new Date(m.created_at).toLocaleDateString()}</span>
                      </div>
                      <p className="mt-3 whitespace-pre-wrap text-sm text-secondary">{m.message}</p>
                    </div>
                    <button
                      onClick={async () => {
                        if (!window.confirm("Delete this message?")) return;
                        await supabase.from("contact_messages").delete().eq("id", m.id);
                        await queryClient.invalidateQueries({ queryKey: ["messages"] });
                        toast.success("Message deleted");
                      }}
                      className="rounded-sm border border-border p-2 text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === "testimonials" && (
        <div className="mt-8">
          <h2 className="font-display text-2xl font-semibold text-primary">Manage Testimonials</h2>
          <form
            onSubmit={onAddTestimonial}
            className="mt-5 grid gap-4 rounded-sm border border-border bg-card p-6 sm:grid-cols-2"
          >
            <div>
              <label className="text-sm font-semibold text-secondary">Name</label>
              <input
                required
                value={tName}
                onChange={(e) => setTName(e.target.value)}
                placeholder="Ramesh & Family"
                className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-secondary">Place</label>
              <input
                required
                value={tPlace}
                onChange={(e) => setTPlace(e.target.value)}
                placeholder="Nerkundram"
                className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-semibold text-secondary">Review Text</label>
              <textarea
                required
                value={tText}
                onChange={(e) => setTText(e.target.value)}
                rows={3}
                className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={busy}
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-60"
              >
                {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
                {busy ? "Adding…" : "Add Testimonial"}
              </button>
            </div>
          </form>

          {loadingTestimonials ? (
            <p className="mt-4 text-sm text-muted-foreground">Loading…</p>
          ) : testimonials.length === 0 ? (
            <p className="mt-4 text-sm text-muted-foreground">No testimonials yet.</p>
          ) : (
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t: any) => (
                <div key={t.id} className="rounded-sm border border-border bg-card p-4 shadow-sm relative">
                  <div className="flex items-center gap-1 text-gold">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} className="h-3 w-3 fill-current" />
                    ))}
                  </div>
                  <p className="mt-2 text-sm text-secondary italic">"{t.text}"</p>
                  <p className="mt-3 font-semibold text-primary text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.place}</p>
                  <button
                    onClick={async () => {
                      if (!window.confirm("Delete this testimonial?")) return;
                      await supabase.from("testimonials").delete().eq("id", t.id);
                      await queryClient.invalidateQueries({ queryKey: ["admin_testimonials"] });
                      toast.success("Testimonial deleted");
                    }}
                    className="absolute right-2 top-2 rounded-sm border border-border p-1.5 text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
