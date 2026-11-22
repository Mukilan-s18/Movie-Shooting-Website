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
  CheckCircle2,
  Play,
  Home,
} from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { Lightbox } from "@/components/site/Lightbox";
import { Testimonials } from "@/components/site/Testimonials";
import { VideoTour } from "@/components/site/VideoTour";
import { business, propertySpaces, whatsappUrl } from "@/lib/business";
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
    streetAddress: "Plot No. 18, Golden Beach Road, Injambakkam, ECR",
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
        title: "Cinewood Film Shooting Villa - Single Property Movie House in Chennai",
      },
      {
        name: "description",
        content:
          "Exclusive 7,500 sq.ft. movie shooting villa in Chennai on ECR. Double-height living hall, master suite, island kitchen, lawn, skyline terrace, 100 KVA generator, and AC vanity green room.",
      },
      {
        property: "og:title",
        content: "Cinewood Film Shooting Villa - Single Property Movie House in Chennai",
      },
      {
        property: "og:description",
        content:
          "Private luxury film shooting bungalow in Chennai for movies, web series, and commercials.",
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

  return (
    <div>
      {/* Cinematic Hero */}
      <section className="relative min-h-[580px] overflow-hidden bg-black py-20 lg:min-h-[640px] flex items-center">
        {/* Background Property Image */}
        <div className="absolute inset-0">
          <img
            src="/property/hero.jpg"
            alt="Cinewood Shooting Villa"
            className="h-full w-full object-cover opacity-35 animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/70 to-black/85" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 text-center">
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
              <Truck className="h-4 w-4 text-amber-400" /> 15+ Production Vans Parking
            </span>
            <span className="h-1 w-1 rounded-full bg-zinc-600" />
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-amber-400" /> Private Gated Compound
            </span>
          </div>
        </div>
      </section>

      {/* Production Specs Bar (Fixed: no NaN) */}
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
              <CountUp end={7500} suffix=" sq.ft." />
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Total Property Plot
            </p>
          </div>
          <div className="border-r border-border/60 last:border-0">
            <p className="font-display text-3xl font-black text-amber-500 md:text-4xl">
              <CountUp end={100} suffix=" KVA" />
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Silent Genset Backup
            </p>
          </div>
          <div>
            <p className="font-display text-3xl font-black text-amber-500 md:text-4xl">
              <CountUp end={15} suffix="+ Vans" />
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Gated Compound Parking
            </p>
          </div>
        </div>
      </section>

      {/* Video Tour Section */}
      <section id="video-tour" className="scroll-mt-20 border-b border-border bg-card/50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            title="Property Video Tour"
            subtitle="Watch a complete video walkthrough of the house, living areas, bedroom suites, kitchen, garden, and open terrace."
          />
          <div className="mt-10">
            <VideoTour />
          </div>
        </div>
      </section>

      {/* Spaces Inside This Property */}
      <section id="property-spaces" className="scroll-mt-20 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            title="Spaces Inside This Property"
            subtitle="Detailed look at the interior and exterior shooting zones inside this private two-storey villa."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {propertySpaces.map((space, idx) => (
              <Reveal key={space.id} delay={idx * 70}>
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-xl">
                  {/* Property Image */}
                  <div className="relative h-60 w-full overflow-hidden bg-muted">
                    <img
                      src={space.image}
                      alt={space.title}
                      width={1200}
                      height={800}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-3 top-3 rounded bg-black/80 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-400 backdrop-blur">
                      {space.area}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-bold text-foreground group-hover:text-amber-500 transition-colors">
                      {space.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {space.description}
                    </p>

                    <div className="mt-4 rounded bg-muted/60 p-2.5 text-[11px]">
                      <span className="font-semibold text-foreground">Ceiling Clearance:</span>{" "}
                      <span className="text-muted-foreground">{space.ceiling}</span>
                      <br />
                      <span className="font-semibold text-foreground">Best For:</span>{" "}
                      <span className="text-muted-foreground">{space.suitableScenes}</span>
                    </div>

                    <ul className="mt-4 space-y-1 text-[11px] text-muted-foreground">
                      {space.features.slice(0, 2).map((f) => (
                        <li key={f} className="flex items-center gap-1.5">
                          <CheckCircle2 className="h-3 w-3 text-amber-500 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

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
                        All Room Specs
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
              View Complete Property Floor Plan & Dimensions <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Film-Friendly Infrastructure */}
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
                title: "Luxury Star Vanity Suite",
                desc: "Air-conditioned green room equipped with 5500K daylight-balanced vanity mirrors, private attached washrooms, and wardrobe hanging racks for lead artists.",
              },
              {
                icon: Users,
                title: "Crew Catering & Dining Space",
                desc: "Dedicated shaded dining area with washing counters and prep pantry to comfortably serve lunch and dinner for production crews.",
              },
              {
                icon: Truck,
                title: "15+ Production Vans & Equipment Bay",
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

      {/* Flexible Shooting Shifts */}
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
                12-hour daytime shooting block. Ideal for natural light living hall sequences, lawn,
                and dining scenes.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-foreground">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" /> 100 KVA Generator Included
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" /> Air-Conditioned Green Room
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
                12-hour overnight shooting block. Perfect for mood lighting, night bedroom sequences,
                and terrace sunset/night tracks.
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
                without dismantling your art department setups.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-foreground">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" /> Set Dressed Overnights Allowed
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" /> Full House & Vanity Suite Access
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" /> Discounted Multi-Day Packages
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Property Photo Gallery Strip */}
      <section className="border-t border-border bg-card py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            title="Property Photo Gallery"
            subtitle="Click any photo for a full-screen high-resolution view of the shooting villa."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {photos.map((photo, i) => (
              <div
                key={photo.id || i}
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
              Browse Complete Photo Gallery <ArrowRight className="h-3.5 w-3.5" />
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

      {/* Recce CTA Banner */}
      <section className="mx-4 my-12 rounded-xl border border-amber-500/40 bg-gradient-to-r from-amber-500/10 via-card to-amber-500/10 p-8 text-center sm:p-12 md:mx-auto md:max-w-6xl">
        <h2 className="font-display text-2xl font-black text-foreground sm:text-3xl md:text-4xl">
          Schedule a Walkthrough of This Property
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
          Call or message our Location Manager to book an in-person recce, inspect the electrical
          distribution panels, and check date availability for your production.
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
          photos={photos}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={(newIdx) => setOpenIndex(newIdx)}
        />
      )}
    </div>
  );
}
