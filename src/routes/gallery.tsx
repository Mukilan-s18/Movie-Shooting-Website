import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { Video, Maximize2 } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Lightbox } from "@/components/site/Lightbox";
import { fallbackPhotos, fetchPhotos, photoCategories } from "@/lib/photos";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      {
        title: "Property Photo Gallery - Cinewood Movie Shooting Villa, Chennai",
      },
      {
        name: "description",
        content:
          "High-resolution photos of Cinewood Film Shooting Villa in Chennai: double-height living hall, master bedroom suite, island kitchen, lawn, and skyline terrace.",
      },
      {
        property: "og:title",
        content: "Cinewood Villa - Movie Shooting House Photo Gallery",
      },
      {
        property: "og:description",
        content:
          "High-resolution photos and video previews of our private film shooting villa in Chennai.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const { data: photos = fallbackPhotos } = useQuery({
    queryKey: ["photos"],
    queryFn: fetchPhotos,
    initialData: fallbackPhotos,
  });

  const categories = useMemo(() => ["All", ...photoCategories], []);
  const [active, setActive] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const shown = photos.filter((g) => active === "All" || g.category === active);

  return (
    <div>
      <div className="border-b border-border bg-card py-14">
        <SectionHeading
          title="Location & Sets Gallery"
          subtitle="Explore high-definition photos and angles of all ready-to-shoot floors. Click on any image to open full-screen view."
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => {
                setActive(c);
                setOpenIndex(null);
              }}
              className={`rounded-md border px-4 py-2 text-xs font-semibold transition-all ${
                active === c
                  ? "border-amber-500 bg-amber-500 text-black shadow-sm"
                  : "border-border text-foreground hover:border-amber-500/60 hover:text-amber-500"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((g, i) => (
            <Reveal key={g.id || i} delay={(i % 3) * 80}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group relative block w-full overflow-hidden rounded-lg border border-border bg-card text-left shadow-sm transition-all hover:border-amber-500/50 hover:shadow-xl"
              >
                {g.media_type === "video" ? (
                  <div className="relative h-64 w-full overflow-hidden">
                    <video
                      src={g.image}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      muted
                      playsInline
                    />
                    <div className="absolute right-3 top-3 rounded-full bg-black/80 p-2 text-amber-400 backdrop-blur">
                      <Video className="h-4 w-4" />
                    </div>
                  </div>
                ) : (
                  <div className="relative h-64 w-full overflow-hidden bg-muted">
                    <img
                      src={g.image}
                      alt={`${g.title} - ${g.place}`}
                      width={1200}
                      height={800}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute right-3 top-3 rounded-full bg-black/70 p-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Maximize2 className="h-4 w-4" />
                    </div>
                  </div>
                )}

                <div className="p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500">
                    {g.category}
                  </span>
                  <h3 className="mt-1 font-display text-base font-bold text-foreground">
                    {g.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">{g.place}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {shown.length === 0 && (
          <div className="py-20 text-center text-muted-foreground">
            No locations found in this category.
          </div>
        )}
      </div>

      {openIndex !== null && (
        <Lightbox
          photos={shown}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={(newIdx) => setOpenIndex(newIdx)}
        />
      )}
    </div>
  );
}
