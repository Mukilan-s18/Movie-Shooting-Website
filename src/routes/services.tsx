import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CalendarCheck,
  Play,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { business, propertySpaces, whatsappUrl } from "@/lib/business";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title: "Property Spaces - Movie Shooting House Rental",
      },
      {
        name: "description",
        content:
          "Available property spaces for movie and web series shoots: Exterior Facade, Living Hall, Dining Hall, and Kitchen.",
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
          title="Property Spaces"
          subtitle="Explore the areas available for filming at this property."
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14">
        {/* Quick Property Overview Card */}
        <div className="mb-12 rounded-xl border border-amber-500/40 bg-card p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="rounded bg-amber-500/10 px-2 py-0.5 text-xs font-bold uppercase text-amber-500">
                Private Property
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold text-foreground">
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
        </div>

        {/* Property Spaces List */}
        <div className="space-y-10">
          {propertySpaces.map((space, index) => (
            <article
              key={space.id}
              className={`flex flex-col gap-8 rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-amber-500/40 lg:flex-row lg:items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Real Image */}
              <div className="relative h-72 w-full overflow-hidden rounded-lg bg-muted lg:h-80 lg:w-1/2">
                <img
                  src={space.image}
                  alt={space.title}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="flex flex-col lg:w-1/2">
                <h3 className="font-display text-2xl font-bold text-foreground">{space.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {space.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-4 py-2 text-xs font-bold uppercase text-black transition-colors hover:bg-amber-400"
                  >
                    <CalendarCheck className="h-3.5 w-3.5" /> Book Recce for This Space
                  </Link>
                  <a
                    href={`tel:+91${business.phonePrimary}`}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
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
          <h3 className="font-display text-2xl font-bold text-foreground">
            Schedule a Recce Walkthrough
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            Contact us to arrange an in-person visit to inspect lighting, power points, and camera angles.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-md bg-amber-500 px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-amber-400"
            >
              Book Recce
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:border-amber-500"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
