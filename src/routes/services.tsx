import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Zap,
  VolumeX,
  CheckCircle2,
  CalendarCheck,
  Truck,
  Play,
  ArrowRight,
  Maximize2,
  Home,
} from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { business, propertySpaces, whatsappUrl } from "@/lib/business";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title: "The Property: Spaces & Dimensions - Cinewood Shooting Villa",
      },
      {
        name: "description",
        content:
          "Complete floor plan and specifications for Cinewood Movie Shooting Villa in Chennai: 7,500 sq.ft. plot, double-height living hall, master suite, open kitchen, lawn, and skyline terrace.",
      },
      {
        property: "og:title",
        content: "The Property: Spaces & Specifications - Cinewood Shooting Villa",
      },
      {
        property: "og:description",
        content:
          "Single property movie shooting house in Chennai with complete room dimensions and specs.",
      },
    ],
  }),
  component: PropertySpacesPage,
});

function PropertySpacesPage() {
  return (
    <div>
      {/* Header banner */}
      <div className="border-b border-border bg-card py-14">
        <SectionHeading
          title="The Property: Spaces & Floor Plan"
          subtitle="A single, private 7,500 sq.ft. luxury shooting villa with versatile indoor and outdoor shooting zones designed for seamless cinema production."
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14">
        {/* Quick Property Overview Card */}
        <div className="mb-14 rounded-xl border border-amber-500/40 bg-card p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
            <div>
              <span className="rounded bg-amber-500/10 px-2 py-0.5 text-xs font-bold uppercase text-amber-500">
                Single Private Property
              </span>
              <h2 className="mt-2 font-display text-2xl font-black text-foreground">
                {business.name}
              </h2>
              <p className="text-xs text-muted-foreground">{business.addressLines.join(" ")}</p>
            </div>
            <div className="flex gap-3">
              <Link
                to="/"
                hash="video-tour"
                className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-4 py-2 text-xs font-bold text-black hover:bg-amber-400"
              >
                <Play className="h-3.5 w-3.5 fill-black" /> Watch Video Tour
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-xs font-semibold text-foreground hover:bg-muted"
              >
                <CalendarCheck className="h-3.5 w-3.5 text-amber-500" /> Book Recce
              </Link>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 text-xs sm:grid-cols-4">
            <div>
              <span className="text-muted-foreground">Total Plot Area</span>
              <p className="mt-0.5 font-bold text-foreground">{business.propertySpecs.plotArea}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Built-Up Area</span>
              <p className="mt-0.5 font-bold text-foreground">
                {business.propertySpecs.builtUpArea}
              </p>
            </div>
            <div>
              <span className="text-muted-foreground">Power Backup</span>
              <p className="mt-0.5 font-bold text-foreground">
                {business.propertySpecs.powerBackup}
              </p>
            </div>
            <div>
              <span className="text-muted-foreground">Gated Parking</span>
              <p className="mt-0.5 font-bold text-foreground">{business.propertySpecs.parking}</p>
            </div>
          </div>
        </div>

        {/* Property Spaces List */}
        <div className="space-y-12">
          {propertySpaces.map((space, index) => (
            <article
              key={space.id}
              className={`flex flex-col gap-8 rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-amber-500/40 lg:flex-row lg:items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-72 w-full overflow-hidden rounded-lg bg-muted lg:h-80 lg:w-1/2">
                <img
                  src={space.image}
                  alt={space.title}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded bg-black/80 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-400 backdrop-blur">
                  {space.area}
                </span>
              </div>

              {/* Details & Specs */}
              <div className="flex flex-col lg:w-1/2">
                <h3 className="font-display text-2xl font-black text-foreground">{space.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {space.description}
                </p>

                <div className="mt-4 rounded-lg border border-border bg-background p-3 text-xs">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-muted-foreground">Ceiling Clearance:</span>
                      <strong className="block text-foreground">{space.ceiling}</strong>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Floor Area:</span>
                      <strong className="block text-foreground">{space.area}</strong>
                    </div>
                  </div>
                  <div className="mt-2 border-t border-border pt-2">
                    <span className="text-muted-foreground">Ideal For:</span>
                    <p className="font-medium text-foreground">{space.suitableScenes}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-500">
                    Production Advantages:
                  </span>
                  <ul className="mt-2 grid grid-cols-1 gap-1.5 text-xs text-muted-foreground sm:grid-cols-2">
                    {space.features.map((f) => (
                      <li key={f} className="flex items-start gap-1.5">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-500" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-4 py-2.5 text-xs font-bold uppercase text-black transition-colors hover:bg-amber-400"
                  >
                    <CalendarCheck className="h-3.5 w-3.5" /> Book Recce for This Space
                  </Link>
                  <a
                    href={`tel:+91${business.phonePrimary}`}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
                  >
                    Call Manager: {business.phonePrimaryDisplay}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 rounded-xl border border-amber-500/40 bg-gradient-to-r from-amber-500/10 via-card to-amber-500/10 p-8 text-center">
          <h3 className="font-display text-2xl font-black text-foreground">
            Want to Inspect This Property in Person?
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            We schedule in-person technical recce visits for directors, DPs, and art directors to
            inspect angles, electrical load drops, and natural lighting.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-md bg-amber-500 px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-amber-400"
            >
              Schedule a Recce Visit
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:border-amber-500"
            >
              WhatsApp Location Coordinator
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
