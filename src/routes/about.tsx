import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CalendarCheck,
  Play,
  Home,
  Clock,
  Phone,
  MapPin,
  Building,
  DoorOpen,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { business, whatsappUrl } from "@/lib/business";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About The Property - Movie Shooting House Vadapalani",
      },
      {
        name: "description",
        content:
          "2-floor movie shooting house in 4/5 Varghese Avenue, Ashok Nagar, Vadapalani, Chennai. Empty big entrance, 2 BHK on each floor, suitable for middle class to rich house setups.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <div className="border-b border-border bg-card py-14">
        <SectionHeading
          title="About The Shooting House"
          subtitle="2-floor independent house in Vadapalani / Ashok Nagar, Chennai, available for film, TV serial, and web series shoots."
        />
      </div>

      {/* Property Overview */}
      <section className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-14 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-xl bg-muted shadow-md">
          <img
            src="/property/exterior-facade.jpeg"
            alt="Shooting House Exterior Facade"
            width={1200}
            height={800}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
            Ashok Nagar · Vadapalani, Chennai
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground">
            2-Floor Independent House
          </h2>
          <div className="mt-4 space-y-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            <p>
              Located at <strong className="text-foreground">4/5 Varghese Avenue, Ashok Nagar, Vadapalani, Chennai</strong>,
              this independent house is situated in the prime cinema production district of Chennai.
            </p>
            <p>
              The property features a <strong className="text-foreground">2-floor structure</strong> with
              an <strong className="text-foreground">empty big entrance</strong> providing generous room for camera placement,
              equipment offloading, vehicle entry, and exterior sequences.
            </p>
            <p>
              Each floor is designed as a <strong className="text-foreground">2 BHK layout</strong>, allowing productions to shoot across
              multiple rooms, halls, and kitchens without having to shift companies.
            </p>
            <p>
              The interior architecture is highly versatile, making it <strong className="text-foreground">suitable for middle class to rich house setups</strong> for
              feature films, television serials, OTT series, and advertisement commercials.
            </p>
            <p>
              The house has a proven production track record, having been chosen as the filming location for
              popular Tamil projects including the acclaimed web series <strong className="text-foreground">Parimala & Co</strong> as well
              as multiple feature films and OTT productions.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/"
              hash="video-tour"
              className="inline-flex items-center gap-1.5 rounded-md bg-amber-500 px-4 py-2 text-xs font-bold text-black hover:bg-amber-400"
            >
              <Play className="h-3.5 w-3.5 fill-black" /> Watch Video Tour
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-xs font-semibold text-foreground hover:bg-muted"
            >
              <Home className="h-3.5 w-3.5 text-amber-500" /> View Spaces
            </Link>
          </div>
        </div>
      </section>

      {/* Key Highlights Grid */}
      <section className="border-y border-border bg-card py-12">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-border bg-background p-4">
              <Building className="h-5 w-5 text-amber-500" />
              <h3 className="mt-2 text-sm font-bold text-foreground">2 Floors</h3>
              <p className="mt-1 text-xs text-muted-foreground">Ground floor plus first floor independent structure.</p>
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <DoorOpen className="h-5 w-5 text-amber-500" />
              <h3 className="mt-2 text-sm font-bold text-foreground">Empty Big Entrance</h3>
              <p className="mt-1 text-xs text-muted-foreground">Spacious front entrance area for camera & crew ease.</p>
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <Home className="h-5 w-5 text-amber-500" />
              <h3 className="mt-2 text-sm font-bold text-foreground">2 BHK Each Floor</h3>
              <p className="mt-1 text-xs text-muted-foreground">Dual 2 BHK floor layouts for multi-scene shoots.</p>
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <Sparkles className="h-5 w-5 text-amber-500" />
              <h3 className="mt-2 text-sm font-bold text-foreground">Middle Class to Rich</h3>
              <p className="mt-1 text-xs text-muted-foreground">Easily adaptable for diverse economic story setups.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contacts */}
      <section className="py-14">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <SectionHeading
            title="Location & Recce Contact"
            subtitle="Walkthrough visits by appointment."
          />

          <div className="mt-8 rounded-xl border border-border bg-card p-6 text-xs text-muted-foreground">
            <p className="flex items-center justify-center gap-2 text-sm font-semibold text-foreground">
              <MapPin className="h-4 w-4 text-amber-500" />
              4/5 Varghese Avenue, Ashok Nagar, Vadapalani, Chennai.
            </p>
            <p className="mt-3">
              Contact Numbers:{" "}
              <a href="tel:7010833853" className="font-bold text-amber-500 hover:underline">
                70108 33853
              </a>
              {" · "}
              <a href="tel:883504143" className="font-bold text-amber-500 hover:underline">
                883504143
              </a>
            </p>
            <p className="mt-2">
              Email:{" "}
              <a href={`mailto:${business.email}`} className="font-bold text-amber-500 hover:underline">
                {business.email}
              </a>
            </p>
          </div>

          {/* Embedded Google Map */}
          <div className="mt-6 overflow-hidden rounded-xl border border-border bg-muted shadow-md">
            <iframe
              src={business.mapsEmbedUrl}
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Google Maps Location - 4/5 Varghese Avenue, Ashok Nagar, Vadapalani, Chennai"
              className="w-full"
            />
          </div>

          <div className="mt-8 flex justify-center gap-3">
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-muted"
            >
              <MapPin className="h-4 w-4 text-amber-500" /> Open in Google Maps
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-5 py-2.5 text-xs font-bold text-black hover:bg-amber-400"
            >
              <CalendarCheck className="h-4 w-4" /> Book a Recce Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
