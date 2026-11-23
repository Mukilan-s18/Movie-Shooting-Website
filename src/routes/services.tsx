import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CalendarCheck,
  Play,
  Building,
  DoorOpen,
  Home,
  Sparkles,
  MapPin,
  Phone,
} from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { business, propertySpaces, whatsappUrl } from "@/lib/business";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title: "Property Spaces - 2-Floor Shooting House in Vadapalani",
      },
      {
        name: "description",
        content:
          "2-floor movie shooting house in 4/5 Varghese Avenue, Ashok Nagar, Vadapalani, Chennai. Empty big entrance, 2 BHK on each floor, suitable for middle class to rich house setups.",
      },
      { property: "og:title", content: "Property Spaces - 2-Floor Shooting House in Vadapalani" },
      { property: "og:url", content: "https://vadapalanishootinghouse.com/services" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://vadapalanishootinghouse.com/services",
      },
    ],
  }),
  component: PropertySpacesPage,
});

function PropertySpacesPage() {
  return (
    <div>
      {/* Header banner */}
      <div className="border-b border-border bg-muted py-14">
        <SectionHeading
          title="Property Spaces & Layout"
          subtitle="2-floor independent house with an empty big entrance and 2 BHK layout on each floor in Vadapalani, Chennai."
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14">
        {/* Quick Property Overview Card */}
        <div className="mb-12 rounded-xl border border-amber-500/40 bg-card p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
            <div>
              <span className="rounded bg-amber-500/10 px-2 py-0.5 text-xs font-bold uppercase text-amber-500">
                Independent House
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold text-foreground">
                {business.name}
              </h2>
              <p className="mt-1 text-xs text-muted-foreground flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-amber-500" />
                {business.addressLines.join(" ")}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
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
            <div className="rounded border border-border/60 bg-background p-3">
              <Building className="h-4 w-4 text-amber-500" />
              <strong className="block mt-1 text-foreground">2 Floors</strong>
              <span className="text-muted-foreground">Ground + 1st Floor</span>
            </div>
            <div className="rounded border border-border/60 bg-background p-3">
              <DoorOpen className="h-4 w-4 text-amber-500" />
              <strong className="block mt-1 text-foreground">Empty Big Entrance</strong>
              <span className="text-muted-foreground">Spacious Frontage</span>
            </div>
            <div className="rounded border border-border/60 bg-background p-3">
              <Home className="h-4 w-4 text-amber-500" />
              <strong className="block mt-1 text-foreground">2 BHK Each Floor</strong>
              <span className="text-muted-foreground">Independent Units</span>
            </div>
            <div className="rounded border border-border/60 bg-background p-3">
              <Sparkles className="h-4 w-4 text-amber-500" />
              <strong className="block mt-1 text-foreground">Middle Class to Rich</strong>
              <span className="text-muted-foreground">Versatile Setups</span>
            </div>
          </div>

          <div className="mt-4 rounded-md border border-border bg-card p-3 text-xs text-muted-foreground flex flex-wrap items-center justify-between gap-3">
            <span>
              <strong className="text-primary uppercase tracking-wider text-[11px]">
                Camera-Tested Track Record:
              </strong>{" "}
              Filming location for the feature films{" "}
              <strong className="text-foreground">Tourist Family</strong> (starring M. Sasikumar
              &amp; Simran) and <strong className="text-foreground">Parimala &amp; Co</strong>,
              alongside the JioHotstar web series{" "}
              <strong className="text-foreground">Brothers and Sisters</strong>.
            </span>
            <Link to="/gallery" className="shrink-0 font-bold text-primary hover:underline">
              View Reference Stills →
            </Link>
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
                {space.subtitle && (
                  <span className="text-xs font-semibold text-amber-500 mt-1">
                    {space.subtitle}
                  </span>
                )}
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
                    href="tel:8838504143"
                    className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
                  >
                    <Phone className="h-3.5 w-3.5 text-amber-500" /> Call: 88385 04143
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 rounded-xl border border-border bg-muted p-8 text-center shadow-sm sm:p-12">
          <h3 className="font-display text-2xl font-bold text-primary sm:text-3xl">
            Schedule a Recce Walkthrough
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
            Address: 4/5 Varghese Avenue, Ashok Nagar, Vadapalani, Chennai.
            <br />
            Contact: <strong>88385 04143</strong> / <strong>70108 33853</strong>
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:opacity-90"
            >
              <CalendarCheck className="h-4 w-4" /> Book Recce
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
