import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  CalendarCheck,
  Film,
  Play,
  Home,
  Clock,
} from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Lightbox } from "@/components/site/Lightbox";
import { VideoTour } from "@/components/site/VideoTour";
import { business, propertySpaces, propertyGallery, whatsappUrl } from "@/lib/business";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Movie Shooting House Rental - Chennai",
      },
      {
        name: "description",
        content:
          "Private movie shooting house available for feature films, OTT web series, television serials, and commercial shoots in Chennai.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {/* Cinematic Hero with Real Exterior Facade */}
      <section className="relative min-h-[520px] overflow-hidden bg-black py-20 lg:min-h-[580px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/property/exterior-facade.jpeg"
            alt="Shooting House Exterior Facade"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/70 to-black/85" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-black/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-400 backdrop-blur-md">
            <Film className="h-3.5 w-3.5 text-amber-400" />
            <span>{t("heroBadge")}</span>
          </div>

          <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            {t("heroTitle")}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-relaxed text-zinc-300 sm:text-base">
            {t("heroSubtitle")}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#video-tour"
              className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-black shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-amber-400"
            >
              <Play className="h-4 w-4 fill-black" />
              {t("watchVideo")}
            </a>
            <a
              href="#property-spaces"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-black/60 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-md transition-colors hover:border-amber-400 hover:bg-black/80"
            >
              <Home className="h-4 w-4 text-amber-400" />
              {t("viewOurWork")}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-amber-500/60 bg-amber-500/10 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-amber-300 backdrop-blur-md transition-all hover:bg-amber-500 hover:text-black"
            >
              <CalendarCheck className="h-4 w-4" />
              {t("bookRecce")}
            </Link>
          </div>
        </div>
      </section>

      {/* Property Video Tour Section */}
      <section id="video-tour" className="scroll-mt-20 border-b border-border bg-card/40 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            title="Property Video Tour"
            subtitle="Watch the complete walkthrough video of the house."
          />
          <div className="mt-10">
            <VideoTour />
          </div>
        </div>
      </section>

      {/* Property Spaces (Only Real Photos) */}
      <section id="property-spaces" className="scroll-mt-20 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            title="Property Spaces"
            subtitle="Explore the areas available for filming inside this property."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {propertySpaces.map((space, idx) => (
              <Reveal key={space.id} delay={idx * 70}>
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-xl">
                  <div className="relative h-56 w-full overflow-hidden bg-muted">
                    <img
                      src={space.image}
                      alt={space.title}
                      width={1200}
                      height={800}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-bold text-foreground group-hover:text-amber-500 transition-colors">
                      {space.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {space.description}
                    </p>

                    <div className="mt-auto pt-4 border-t border-border mt-4 flex items-center justify-between">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-500 hover:text-amber-400"
                      >
                        Book Recce <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Shooting Shifts (Clean & Honest) */}
      <section className="border-t border-border bg-card/40 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            title="Shooting Shifts"
            subtitle="Flexible timings for your shoot schedule."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <span className="rounded bg-amber-500/10 px-2 py-0.5 text-xs font-bold uppercase text-amber-500">
                Day Shift
              </span>
              <h3 className="mt-3 font-display text-xl font-bold text-foreground">
                06:00 AM – 06:00 PM
              </h3>
              <p className="mt-2 text-xs text-muted-foreground">
                12-hour daytime shooting block for daylight indoor and outdoor sequences.
              </p>
            </div>

            <div className="relative rounded-lg border-2 border-amber-500 bg-card p-6 shadow-md">
              <span className="rounded bg-amber-500/10 px-2 py-0.5 text-xs font-bold uppercase text-amber-500">
                Night Shift
              </span>
              <h3 className="mt-3 font-display text-xl font-bold text-foreground">
                06:00 PM – 06:00 AM
              </h3>
              <p className="mt-2 text-xs text-muted-foreground">
                12-hour overnight shooting block for night interior and mood sequences.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <span className="rounded bg-amber-500/10 px-2 py-0.5 text-xs font-bold uppercase text-amber-500">
                Full 24-Hour / Multi-Day
              </span>
              <h3 className="mt-3 font-display text-xl font-bold text-foreground">
                Full 24-Hour Block
              </h3>
              <p className="mt-2 text-xs text-muted-foreground">
                Continuous shooting schedule or multi-day consecutive dates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Photo Gallery Strip */}
      <section className="border-t border-border bg-card py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            title="Property Photos"
            subtitle="Click on any photo to open full-screen view."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {propertyGallery.map((photo, i) => (
              <div
                key={photo.id}
                onClick={() => setOpenIndex(i)}
                className="group relative h-52 cursor-pointer overflow-hidden rounded-md border border-border bg-muted"
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-3">
                  <p className="text-xs font-bold text-white">{photo.title}</p>
                  <p className="text-[10px] text-amber-400">{photo.place}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-background transition-colors hover:bg-amber-500 hover:text-black"
            >
              Browse Complete Photo Gallery <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Recce CTA Banner */}
      <section className="mx-4 my-12 rounded-xl border border-amber-500/40 bg-gradient-to-r from-amber-500/10 via-card to-amber-500/10 p-8 text-center sm:p-12 md:mx-auto md:max-w-6xl">
        <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
          Interested in Shooting Here?
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
          Call or message us to schedule an in-person recce and check date availability for your project.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-amber-400"
          >
            <CalendarCheck className="h-4 w-4" /> Book a Recce Visit
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-amber-500"
          >
            WhatsApp Location Manager
          </a>
        </div>
      </section>

      {/* Lightbox for gallery view */}
      {openIndex !== null && (
        <Lightbox
          photos={propertyGallery}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={(newIdx) => setOpenIndex(newIdx)}
        />
      )}
    </div>
  );
}
