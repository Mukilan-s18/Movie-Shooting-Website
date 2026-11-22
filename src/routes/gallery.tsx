import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Maximize2, Play } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Lightbox } from "@/components/site/Lightbox";
import { VideoTour } from "@/components/site/VideoTour";
import { propertyGallery } from "@/lib/business";
import { photoCategories } from "@/lib/photos";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      {
        title: "Photo & Video Gallery - Movie Shooting House",
      },
      {
        name: "description",
        content:
          "Complete video tour walkthrough and photos of the movie shooting house in Vadapalani, Chennai: Empty Big Entrance, Living Hall, Dining Hall, and Kitchen.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const categories = useMemo(() => ["All", ...photoCategories], []);
  const [active, setActive] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const shown = propertyGallery.filter(
    (g) => active === "All" || g.category === active,
  );

  return (
    <div>
      <div className="border-b border-border bg-card py-14">
        <SectionHeading
          title="Property Photos & Video Tour"
          subtitle="Watch the walkthrough video tour and view photos of the shooting house."
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
              className={`inline-flex items-center gap-1.5 rounded-md border px-4 py-2 text-xs font-semibold transition-all ${
                active === c
                  ? "border-amber-500 bg-amber-500 text-black shadow-sm"
                  : "border-border text-foreground hover:border-amber-500/60 hover:text-amber-500"
              }`}
            >
              {c === "Video Tour" && <Play className="h-3 w-3 fill-current" />}
              {c}
            </button>
          ))}
        </div>

        {/* Video Tour Section in Gallery */}
        {(active === "All" || active === "Video Tour") && (
          <div className="mt-10 rounded-xl border border-amber-500/30 bg-card p-6 shadow-md">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
              <div>
                <span className="rounded bg-amber-500/10 px-2 py-0.5 text-xs font-bold uppercase text-amber-500">
                  Walkthrough Video
                </span>
                <h3 className="mt-1 font-display text-xl font-bold text-foreground">
                  Complete Property Video Tour
                </h3>
              </div>
            </div>
            <VideoTour />
          </div>
        )}

        {/* Gallery Grid */}
        {active !== "Video Tour" && shown.length > 0 && (
          <div className="mt-12">
            {active === "All" && (
              <h3 className="mb-6 font-display text-lg font-bold text-foreground">
                Property Spaces Photos
              </h3>
            )}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {shown.map((g, i) => (
                <Reveal key={g.id || i} delay={(i % 4) * 80}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(i)}
                    className="group relative block w-full overflow-hidden rounded-lg border border-border bg-card text-left shadow-sm transition-all hover:border-amber-500/50 hover:shadow-xl"
                  >
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
