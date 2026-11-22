import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Clapperboard,
  ShieldCheck,
  Zap,
  VolumeX,
  Truck,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  CalendarCheck,
} from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { business, images } from "@/lib/business";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About & Technical Specs - Cinewood Film Shooting House, Chennai",
      },
      {
        name: "description",
        content:
          "Cinewood Film Studios & Shooting House in Chennai. Technical specifications: 100 KVA silent generator, sync-sound acoustic isolation, 16ft ceiling clearance, 50+ van parking on ECR.",
      },
      {
        property: "og:title",
        content: "About Cinewood Studios - Chennai's Premier Movie Shooting House",
      },
      {
        property: "og:description",
        content:
          "Technical specs, floor area, power details, and connectivity of Cinewood Film Shooting House in Chennai.",
      },
    ],
  }),
  component: AboutPage,
});

const connectivity = [
  { place: "Chennai International Airport (MAA)", time: "25 mins", distance: "18 km" },
  { place: "Vadapalani & Kodambakkam Studios", time: "35 mins", distance: "22 km" },
  { place: "Prasad Film Labs & Sound Studios", time: "30 mins", distance: "20 km" },
  { place: "ECR Beach & Star Resorts", time: "5 mins", distance: "2 km" },
  { place: "OMR IT Highway & Hotels", time: "10 mins", distance: "5 km" },
  { place: "Koyambedu Central Hub", time: "40 mins", distance: "24 km" },
];

function AboutPage() {
  return (
    <div>
      <div className="border-b border-border bg-card py-14">
        <SectionHeading
          title="About Cinewood Studios"
          subtitle={`${business.name} · Managed by ${business.owner}. Built by film technicians for film crews.`}
        />
      </div>

      {/* Story & Philosophy */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-xl bg-muted shadow-md">
          <img
            src={images.chettinadCourtyard}
            alt="Chettinad central courtyard at Cinewood Studios"
            width={1200}
            height={800}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
            Filmmaking Infrastructure
          </span>
          <h2 className="mt-2 font-display text-3xl font-black text-foreground">
            Zero Delays. Ready-to-Shoot Sets.
          </h2>
          <div className="mt-4 space-y-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            <p>
              Founded and managed by industry production veterans,{" "}
              <strong className="text-foreground">{business.name}</strong> was created to eliminate
              the high costs and logistical headaches of traditional outdoor shooting.
            </p>
            <p>
              Instead of losing valuable call-sheet hours shifting entire camera companies between
              distant locations, our 15,000+ sq.ft. facility houses a traditional Chettinad courtyard
              mansion, an ultra-modern luxury villa, a permanent police station with lockup, a
              judicial courtroom, corporate suites, and hospital sets under one unified gated
              compound.
            </p>
            <p>
              Equipped with a dedicated 100 KVA silent Caterpillar generator, heavy-duty 3-phase
              power lines, sync-sound acoustic isolation, and star vanity suites, we provide an
              uninterrupted production environment for feature films, OTT web series, TV
              commercials, and television serials.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Specifications Sheet */}
      <section className="border-y border-border bg-card py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            title="Technical Specifications"
            subtitle="Engineered to meet the exact electrical, acoustic, and rigging requirements of modern digital cinema cameras."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-background p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">
                Power & Electrical Grid
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                <li>• 100 KVA acoustic silent Caterpillar Genset</li>
                <li>• 3-Phase 63A & 32A distribution boxes on all floors</li>
                <li>• Industrial Camlock drops for heavy lighting</li>
                <li>• Dedicated earth pits tested for sensitive audio</li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-background p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                <VolumeX className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">
                Acoustics & Sound Isolation
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                <li>• Double-glazed laminated soundproof window glass</li>
                <li>• Heavy compound sound barrier walls</li>
                <li>• Ultra-quiet ductless inverter air-conditioning</li>
                <li>• Sync-sound certified for high-gain boom mics</li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-background p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                <Clapperboard className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">
                Ceiling & Lighting Rigging
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                <li>• 12 to 16 ft high interior ceiling clearances</li>
                <li>• Load-tested structural ceiling anchor points</li>
                <li>• Easy installation for soft-boxes, sky panels, grids</li>
                <li>• High-clearance double doors for dolly tracks</li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-background p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">
                Star Vanity & Green Rooms
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                <li>• 4 Private air-conditioned artist suites</li>
                <li>• 5500K daylight-balanced vanity makeup mirrors</li>
                <li>• Private attached sanitary washrooms & shower</li>
                <li>• Wardrobe steamer & costume hanging racks</li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-background p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                <Truck className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">
                Parking & Loading Bay
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                <li>• 50+ Vehicle capacity inside secured gates</li>
                <li>• Wide gates accommodating 407 & generator trucks</li>
                <li>• Dedicated equipment offload ramp to all floors</li>
                <li>• Safe overnight parking for camera vanity vans</li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-background p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">
                Safety & Shoot Clearances
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                <li>• Single-window local police & authority NOC support</li>
                <li>• Certified fire extinguishers on every floor</li>
                <li>• Smoke & haze machine permitted with prior intimation</li>
                <li>• 24/7 CCTV surveillance & on-site security guards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Connectivity & Proximity */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            title="Location & Proximity"
            subtitle="Conveniently situated along the scenic East Coast Road (ECR) in Injambakkam, Chennai."
          />

          <div className="mt-10 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-border bg-muted/60 text-foreground">
                  <tr>
                    <th className="px-6 py-4 font-bold uppercase tracking-wider">Destination</th>
                    <th className="px-6 py-4 font-bold uppercase tracking-wider">Travel Time</th>
                    <th className="px-6 py-4 font-bold uppercase tracking-wider">Distance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {connectivity.map((c) => (
                    <tr key={c.place} className="hover:bg-muted/30">
                      <td className="px-6 py-4 font-medium text-foreground">{c.place}</td>
                      <td className="px-6 py-4 font-bold text-amber-500">{c.time}</td>
                      <td className="px-6 py-4 text-muted-foreground">{c.distance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 rounded-xl border border-border bg-card p-6 text-center">
            <p className="text-xs text-muted-foreground">
              Location Address: {business.addressLines.join(" ")}
            </p>
            <div className="mt-4 flex justify-center gap-3">
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-xs font-semibold text-foreground hover:bg-muted"
              >
                <MapPin className="h-3.5 w-3.5 text-amber-500" /> Open in Google Maps
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 rounded-md bg-amber-500 px-4 py-2 text-xs font-bold text-black hover:bg-amber-400"
              >
                <CalendarCheck className="h-3.5 w-3.5" /> Book Location Recce
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
