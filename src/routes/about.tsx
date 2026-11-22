import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Zap,
  VolumeX,
  Truck,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  CalendarCheck,
  Play,
  Home,
} from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { business } from "@/lib/business";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About & Technical Specifications - Cinewood Shooting Villa",
      },
      {
        name: "description",
        content:
          "Technical specifications of Cinewood Shooting Villa in Chennai: 7,500 sq.ft. plot, 100 KVA silent Caterpillar generator, sync-sound acoustic insulation, 16ft ceiling, 15+ van parking on ECR.",
      },
      {
        property: "og:title",
        content: "About Cinewood Shooting Villa - Movie House in Chennai",
      },
      {
        property: "og:description",
        content:
          "Single property movie shooting house in Chennai with complete technical specs and floor details.",
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
          title="About The Shooting Villa"
          subtitle={`${business.name} · Managed by ${business.owner}. Built by film technicians for film crews.`}
        />
      </div>

      {/* Property Overview */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-xl bg-muted shadow-md">
          <img
            src="/property/hero.jpg"
            alt="Cinewood Shooting Villa Exterior"
            width={1200}
            height={800}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
            Single Private Property
          </span>
          <h2 className="mt-2 font-display text-3xl font-black text-foreground">
            A Dedicated Film Shooting Villa
          </h2>
          <div className="mt-4 space-y-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            <p>
              <strong className="text-foreground">{business.name}</strong> is an exclusive private
              residence on East Coast Road (ECR), Chennai, dedicated specifically for feature films,
              OTT web series, television serials, and high-end ad commercials.
            </p>
            <p>
              Unlike residential houses with restrictive house rules or noise complaints, this
              property is managed by experienced film location coordinators. The entire 7,500 sq.ft.
              gated compound is your private domain during your shoot dates.
            </p>
            <p>
              From the 16-foot double-height living hall to the open-air skyline terrace and
              manicured garden, every room offers clean camera angles, sync-sound acoustic
              isolation, 100 KVA silent Caterpillar generator backup, and high-load 3-phase power
              connections.
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
              <Home className="h-3.5 w-3.5 text-amber-500" /> View Room Dimensions
            </Link>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="border-y border-border bg-card py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            title="Technical Specifications"
            subtitle="Engineered to meet the exact electrical, acoustic, and rigging requirements of modern digital cinema production."
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
                <li>• 3-Phase 63A & 32A distribution panels on each floor</li>
                <li>• Camlock drops for heavy HMIs and Skypanels</li>
                <li>• Dedicated earth pits tested for zero audio hum</li>
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
                <li>• Thick compound perimeter barrier walls</li>
                <li>• Ultra-quiet ductless inverter air-conditioning</li>
                <li>• Sync-sound certified for high-gain boom mics</li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-background p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">
                Star Vanity Suite
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                <li>• Air-conditioned private green room for lead artists</li>
                <li>• 5500K daylight-balanced vanity makeup mirrors</li>
                <li>• Attached sanitary washroom & shower</li>
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
                <li>• 15+ Vehicles & production vans parking inside gate</li>
                <li>• Wide gates accommodating 407 & equipment trucks</li>
                <li>• Step-free offload ramp directly to ground floor</li>
                <li>• Safe overnight parking for camera vanity vans</li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-background p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">
                Permissions & Support
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                <li>• Single-window local police & authority NOC support</li>
                <li>• Fire extinguishers installed on all levels</li>
                <li>• Smoke & haze machine permitted with prior intimation</li>
                <li>• 24/7 CCTV surveillance & on-site security guards</li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-background p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">
                Flexible Call-Sheet Shifts
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                <li>• Day Shift: 06:00 AM – 06:00 PM (12 hrs)</li>
                <li>• Night Shift: 06:00 PM – 06:00 AM (12 hrs)</li>
                <li>• Full 24-Hour Continuous & Multi-Day blocks</li>
                <li>• Prior art-department setup & pre-rigging allowed</li>
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
