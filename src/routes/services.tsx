import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Clapperboard,
  Zap,
  VolumeX,
  Maximize2,
  CheckCircle2,
  CalendarCheck,
  ShieldCheck,
  Truck,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { business, services, whatsappUrl } from "@/lib/business";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title: "Movie Shooting Sets & Spaces - Cinewood Film Studios, Chennai",
      },
      {
        name: "description",
        content:
          "Explore standing sets in Chennai: Heritage Chettinad Mansion, Modern Luxury Villa, Police Station, Courtroom, Boardroom, Hospital Ward, and Skyline Terrace. 100 KVA generator & sync-sound acoustic isolation.",
      },
      {
        property: "og:title",
        content: "Movie Shooting Sets & Production Floors - Cinewood Studios",
      },
      {
        property: "og:description",
        content:
          "Ready-to-shoot film standing sets in Chennai with full production infrastructure.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div>
      {/* Header banner */}
      <div className="border-b border-border bg-card py-14">
        <SectionHeading
          title="Standing Sets & Shooting Spaces"
          subtitle="Explore fully-rigged film locations designed to cut company-shift delays and maximize your production's shooting efficiency."
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14">
        {/* Sets catalog */}
        <div className="space-y-12">
          {services.map((set, index) => (
            <article
              key={set.title}
              className={`flex flex-col gap-8 rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-amber-500/40 lg:flex-row lg:items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-72 w-full overflow-hidden rounded-lg bg-muted lg:h-80 lg:w-1/2">
                <img
                  src={set.image}
                  alt={set.title}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded bg-black/80 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-400 backdrop-blur">
                  {set.category}
                </span>
              </div>

              {/* Details & Specs */}
              <div className="flex flex-col lg:w-1/2">
                <h2 className="font-display text-2xl font-black text-foreground">{set.title}</h2>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {set.description}
                </p>

                {/* Technical Specs Grid */}
                <div className="mt-5 grid grid-cols-2 gap-3 rounded-lg border border-border/80 bg-background/60 p-3.5 text-xs">
                  <div>
                    <span className="block text-[11px] font-medium text-muted-foreground">
                      Floor Area
                    </span>
                    <strong className="text-foreground">{set.specs.area}</strong>
                  </div>
                  <div>
                    <span className="block text-[11px] font-medium text-muted-foreground">
                      Ceiling Clearance
                    </span>
                    <strong className="text-foreground">{set.specs.ceiling}</strong>
                  </div>
                  <div>
                    <span className="block text-[11px] font-medium text-muted-foreground">
                      Power Rating
                    </span>
                    <strong className="text-foreground">{set.specs.power}</strong>
                  </div>
                  <div>
                    <span className="block text-[11px] font-medium text-muted-foreground">
                      Acoustic Sound
                    </span>
                    <strong className="text-foreground">{set.specs.sound}</strong>
                  </div>
                </div>

                <div className="mt-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-500">
                    Recommended For:
                  </span>
                  <p className="text-xs font-medium text-foreground">{set.suitableFor}</p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-4 py-2.5 text-xs font-bold uppercase text-black transition-colors hover:bg-amber-400"
                  >
                    <CalendarCheck className="h-3.5 w-3.5" /> Book Recce for this Set
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

        {/* Included Amenities Banner */}
        <div className="mt-16 rounded-xl border border-border bg-card p-8">
          <h3 className="font-display text-xl font-black text-foreground">
            Standard Inclusions with Every Booking
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            All shooting packages include base production amenities at no extra hidden charge.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-3 rounded-lg border border-border/60 bg-background p-4 text-xs">
              <Zap className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
              <div>
                <p className="font-bold text-foreground">100 KVA Genset</p>
                <p className="text-muted-foreground">Acoustic Caterpillar power backup</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-border/60 bg-background p-4 text-xs">
              <VolumeX className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
              <div>
                <p className="font-bold text-foreground">Sync-Sound Proofed</p>
                <p className="text-muted-foreground">Isolated acoustic windows & quiet AC</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-border/60 bg-background p-4 text-xs">
              <Clapperboard className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
              <div>
                <p className="font-bold text-foreground">Vanity Green Rooms</p>
                <p className="text-muted-foreground">Air-conditioned with daylight mirrors</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-border/60 bg-background p-4 text-xs">
              <Truck className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
              <div>
                <p className="font-bold text-foreground">50+ Van Parking</p>
                <p className="text-muted-foreground">Gated compound with loading ramp</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 rounded-xl border border-amber-500/40 bg-gradient-to-r from-amber-500/10 via-card to-amber-500/10 p-8 text-center">
          <h3 className="font-display text-2xl font-black text-foreground">
            Need a Custom Set Configuration or Multi-Day Schedule?
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            Talk to our location coordinator. We accommodate art department pre-rigging, painting,
            and customized set dressing prior to shoot days.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-md bg-amber-500 px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-amber-400"
            >
              Enquire Availability
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
