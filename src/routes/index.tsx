import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  ArrowRight,
  Clapperboard,
  Zap,
  VolumeX,
  Sparkles,
  ShieldCheck,
  CalendarCheck,
  Film,
  Truck,
  Users,
  Maximize2,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { HeroSlideshow } from "@/components/site/HeroSlideshow";
import { Lightbox } from "@/components/site/Lightbox";
import { Testimonials } from "@/components/site/Testimonials";
import { business, services, whatsappUrl } from "@/lib/business";
import { fallbackPhotos, fetchPhotos } from "@/lib/photos";
import { useI18n } from "@/lib/i18n";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MovieStudio",
  name: business.name,
  description: business.tagline,
  telephone: [`+91${business.phonePrimary}`, `+91${business.phoneSecondary}`],
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 18 & 20, Golden Beach Road, Injambakkam, ECR",
    addressLocality: "Chennai",
    postalCode: "600115",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  areaServed: "Chennai",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Cinewood Film Studios & Shooting House - Chennai",
      },
      {
        name: "description",
        content:
          "Rent premium movie shooting houses, Chettinad heritage mansions, modern luxury villas, police station and courtroom sets in Chennai. 100 KVA silent generator, 4 AC vanity suites, 50+ van parking.",
      },
      {
        property: "og:title",
        content: "Cinewood Studios - Movie Shooting House & Standing Sets in Chennai",
      },
      {
        property: "og:description",
        content:
          "Multi-set film shooting bungalow and studios in Chennai for feature films, web series & commercials.",
      },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const { data: photos = fallbackPhotos } = useQuery({
    queryKey: ["photos"],
    queryFn: fetchPhotos,
    initialData: fallbackPhotos,
  });

  const latestPhotos = photos.slice(0, 8);

  return (
    <div>
      {/* Cinematic Hero */}
      <section className="relative h-[82vh] min-h-[520px] overflow-hidden">
        <HeroSlideshow photos={photos} />
        {/* Dark film-grade overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/60 to-black/80" />

        <div className="absolute inset-0 z-10 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-black/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-400 backdrop-blur-md">
              <Film className="h-3.5 w-3.5 text-amber-400" />
              <span>{t("heroBadge")}</span>
            </div>

            <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {t("heroTitle")}
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-sm font-medium leading-relaxed text-zinc-300 sm:text-base md:text-lg">
              {t("heroSubtitle")}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-black shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-amber-400"
              >
                <Clapperboard className="h-4 w-4" />
                {t("viewOurWork")}
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-amber-500/60 bg-black/50 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-md transition-all hover:border-amber-400 hover:bg-black/70"
              >
                <CalendarCheck className="h-4 w-4 text-amber-400" />
                {t("bookRecce")}
              </Link>
            </div>

            {/* Quick feature pills */}
            <div className="mt-10 hidden flex-wrap items-center justify-center gap-6 text-xs font-medium text-zinc-300 md:flex">
              <span className="flex items-center gap-1.5">
                <Zap className="h-4 w-4 text-amber-400" /> 100 KVA Silent Generator
              </span>
              <span className="h-1 w-1 rounded-full bg-zinc-600" />
              <span className="flex items-center gap-1.5">
                <VolumeX className="h-4 w-4 text-amber-400" /> Sync-Sound Approved
              </span>
              <span className="h-1 w-1 rounded-full bg-zinc-600" />
              <span className="flex items-center gap-1.5">
                <Truck className="h-4 w-4 text-amber-400" /> 50+ Crew Van Parking
              </span>
              <span className="h-1 w-1 rounded-full bg-zinc-600" />
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-amber-400" /> Single-Window Shooting NOC
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Production Specs Bar */}
      <section className="border-b border-border bg-card py-6">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 text-center md:grid-cols-4">
          <div className="border-r border-border/60 last:border-0">
            <p className="font-display text-3xl font-black text-amber-500 md:text-4xl">
              <CountUp end={65} suffix="+" />
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Films & Web Series Shot
            </p>
          </div>
          <div className="border-r border-border/60 last:border-0">
            <p className="font-display text-3xl font-black text-amber-500 md:text-4xl">
              <CountUp end={15000} suffix=" sq.ft." />
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Usable Shoot Footprint
            </p>
          </div>
          <div className="border-r border-border/60 last:border-0">
            <p className="font-display text-3xl font-black text-amber-500 md:text-4xl">
              <CountUp end={8} suffix="+ Standing Sets" />
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Pre-Rigged & Ready
            </p>
          </div>
          <div>
            <p className="font-display text-3xl font-black text-amber-500 md:text-4xl">
              <CountUp end={100} suffix=" KVA" />
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Silent Genset Backup
            </p>
          </div>
        </div>
      </section>

      {/* Featured Sets & Spaces Showcase */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            title="Standing Sets & Shooting Spaces"
            subtitle="Explore our diverse range of fully-dressed, ready-to-shoot locations designed specifically for film, OTT, and commercial productions."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, idx) => (
              <Reveal key={s.title} delay={idx * 80}>
                <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-xl">
                  <div className="relative h-60 w-full overflow-hidden bg-muted">
                    <img
                      src={s.image}
                      alt={s.title}
                      width={1200}
                      height={800}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-3 top-3 rounded bg-black/80 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-400 backdrop-blur">
                      {s.category}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-bold text-foreground group-hover:text-amber-500 transition-colors">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-2 rounded bg-muted/60 p-2.5 text-[11px]">
                      <div>
                        <span className="text-muted-foreground">Area:</span>{" "}
                        <strong className="text-foreground">{s.specs.area}</strong>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Ceiling:</span>{" "}
                        <strong className="text-foreground">{s.specs.ceiling}</strong>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Power:</span>{" "}
                        <strong className="text-foreground">{s.specs.power}</strong>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Audio:</span>{" "}
                        <strong className="text-foreground">{s.specs.sound}</strong>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-500 hover:text-amber-400"
                      >
                        Book Recce <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <Link
                        to="/services"
                        className="text-[11px] font-medium text-muted-foreground hover:text-foreground"
                      >
                        View Set Specs
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-md border border-amber-500 bg-amber-500/10 px-6 py-3 text-sm font-bold text-amber-500 transition-colors hover:bg-amber-500 hover:text-black"
            >
              View All 8+ Sets & Detailed Specs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Production Infrastructure Advantages */}
      <section className="border-y border-border bg-card py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            title="Film-Friendly Infrastructure"
            subtitle="Engineered from the ground up to solve the real logistical problems faced by production managers, art directors, and cinematographers."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "100 KVA Silent Genset & Heavy Power",
                desc: "Dedicated 100 KVA acoustic Caterpillar generator with 3-phase 63A distribution panels across all floors so heavy HMIs and Maxi-Brutes run without voltage drops.",
              },
              {
                icon: VolumeX,
                title: "Acoustically Treated for Sync-Sound",
                desc: "Thick double-glazed soundproof glass, isolated road-noise barriers, and silent ducted AC units allow crystal-clear direct dialogue capture on set.",
              },
              {
                icon: Sparkles,
                title: "4 Luxury Star Vanity Suites",
                desc: "Air-conditioned green rooms equipped with 5500K daylight-balanced vanity mirrors, private attached washrooms, and wardrobe hanging racks for lead artists.",
              },
              {
                icon: Users,
                title: "100-Crew Catering & Dining Mess",
                desc: "Dedicated covered dining area with washing counters and prep pantry to comfortably serve lunch and dinner for large film and serial crews.",
              },
              {
                icon: Truck,
                title: "50+ Production Vans & Equipment Bay",
                desc: "Gated private compound with wide entrance gates for large generator lorries, camera vanity vans, and equipment truck offloading ramps.",
              },
              {
                icon: ShieldCheck,
                title: "Single-Window Permits & 24/7 Security",
                desc: "Comprehensive on-site support for local police NOC, fire department compliance, and 24-hour private security personnel on standby.",
              },
            ].map((adv, i) => (
              <Reveal key={adv.title} delay={i * 70}>
                <div className="rounded-lg border border-border bg-background p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                    <adv.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-foreground">
                    {adv.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{adv.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Shooting Shifts & Availability */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            title="Flexible Shooting Shifts"
            subtitle="Book shifts tailored to your call-sheet schedule with hassle-free extensions."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <span className="rounded bg-amber-500/10 px-2 py-0.5 text-xs font-bold uppercase text-amber-500">
                Day Shift
              </span>
              <h3 className="mt-3 font-display text-2xl font-black text-foreground">
                06:00 AM – 06:00 PM
              </h3>
              <p className="mt-2 text-xs text-muted-foreground">
                12-hour daytime shooting block. Ideal for natural light courtyard sequences, modern
                villa poolside, and office scenes.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-foreground">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" /> 100 KVA Generator Included
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" /> 2 Air-Conditioned Green Rooms
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" /> Crew Mess Area Access
                </li>
              </ul>
            </div>

            <div className="relative rounded-lg border-2 border-amber-500 bg-card p-6 shadow-md">
              <div className="absolute -top-3 right-4 rounded-full bg-amber-500 px-3 py-0.5 text-[10px] font-extrabold uppercase text-black">
                Most Popular
              </div>
              <span className="rounded bg-amber-500/10 px-2 py-0.5 text-xs font-bold uppercase text-amber-500">
                Night Shift
              </span>
              <h3 className="mt-3 font-display text-2xl font-black text-foreground">
                06:00 PM – 06:00 AM
              </h3>
              <p className="mt-2 text-xs text-muted-foreground">
                12-hour overnight shooting block. Perfect for thriller scenes, night action, police
                interrogations, and mood lighting.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-foreground">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" /> Unrestricted Night Sound Levels
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" /> Ambient Mood & Sky Terrace
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" /> Overnight Power Engineer Support
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <span className="rounded bg-amber-500/10 px-2 py-0.5 text-xs font-bold uppercase text-amber-500">
                Continuous 24-Hr / Multi-Day
              </span>
              <h3 className="mt-3 font-display text-2xl font-black text-foreground">
                Full 24-Hour Block
              </h3>
              <p className="mt-2 text-xs text-muted-foreground">
                Continuous non-stop shooting schedule. Lock the premises for consecutive days
                without dismantling your art department sets.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-foreground">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" /> Set Dressed Overnights Allowed
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" /> All 4 Vanity Green Rooms Included
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" /> Discounted Multi-Day Packages
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Strip */}
      <section className="border-t border-border bg-card py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            title="Location Gallery"
            subtitle="A glimpse of recent shooting locations and sets dressed across our floors."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {latestPhotos.map((photo, i) => (
              <div
                key={photo.id}
                onClick={() => setOpenIndex(i)}
                className="group relative h-48 cursor-pointer overflow-hidden rounded-md border border-border bg-muted"
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
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
              Browse Complete Gallery <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Filmmaker Reviews */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            title="Filmmaker & Crew Feedback"
            subtitle="Hear from Directors of Photography, Art Directors, and Line Producers who shot their projects with us."
          />
          <Testimonials />
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="mx-4 my-12 rounded-xl border border-amber-500/40 bg-gradient-to-r from-amber-500/10 via-card to-amber-500/10 p-8 text-center sm:p-12 md:mx-auto md:max-w-6xl">
        <h2 className="font-display text-2xl font-black text-foreground sm:text-3xl md:text-4xl">
          Ready to Recce Your Next Film Location?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
          Call or message our Location Manager to schedule an in-person walkthrough, inspect the
          electrical grid, and lock your production dates.
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
          photos={latestPhotos}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={(newIdx) => setOpenIndex(newIdx)}
        />
      )}
    </div>
  );
}
