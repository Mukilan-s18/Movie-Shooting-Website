import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  CalendarCheck,
  Film,
  Play,
  Home,
  MapPin,
  Phone,
  CheckCircle2,
  Building,
  DoorOpen,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Lightbox } from "@/components/site/Lightbox";
import { VideoTour } from "@/components/site/VideoTour";
import { GoogleMapEmbed } from "@/components/site/GoogleMapEmbed";
import {
  business,
  propertySpaces,
  propertyGallery,
  movieReferences,
  allGalleryMedia,
  whatsappUrl,
} from "@/lib/business";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Vadapalani Shooting House - Ashok Nagar, Chennai",
      },
      {
        name: "description",
        content:
          "2-floor movie shooting house in 4/5 Varghese Avenue, Ashok Nagar, Vadapalani, Chennai. Empty big entrance, 2 BHK on each floor, suitable for middle class to rich house setups.",
      },
      { property: "og:title", content: "Vadapalani Shooting House - Ashok Nagar, Chennai" },
      { property: "og:url", content: "https://vadapalanishootinghouse.in/" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://vadapalanishootinghouse.in/",
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
      {/* Cinematic Hero with Real Filming Stills */}
      <section className="relative min-h-[580px] overflow-hidden bg-black py-20 lg:min-h-[660px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/property/hero-bg.jpg"
            alt="Tourist Family Movie Filming Location - Vadapalani Shooting House"
            className="h-full w-full object-cover object-center"
          />
          {/* High transparency gradient: keeps the film cast and house clear and bright while ensuring text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 via-50% to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/50 bg-black/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-400 backdrop-blur-md shadow-lg">
              <MapPin className="h-3.5 w-3.5 text-amber-400" />
              <span>4/5 Varghese Avenue, Ashok Nagar, Vadapalani</span>
            </div>

            <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white [text-shadow:_0_3px_14px_rgba(0,0,0,0.9)] sm:text-5xl md:text-6xl leading-[1.1]">
              {t("heroTitle")}
            </h1>

            <p className="mt-5 max-w-lg text-sm font-medium leading-relaxed text-white [text-shadow:_0_2px_8px_rgba(0,0,0,0.9)] sm:text-base">
              {t("heroSubtitle")}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-start gap-4">
              <a
                href="#video-tour"
                className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-black shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-xl"
              >
                <Play className="h-4 w-4 fill-black" />
                {t("watchVideo")}
              </a>
              <a
                href="#property-spaces"
                className="group inline-flex items-center gap-2 rounded-md border border-white/30 bg-black/70 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-500 hover:bg-amber-500 hover:text-black hover:shadow-xl"
              >
                <Home className="h-4 w-4 text-amber-400 transition-colors duration-300 group-hover:text-black" />
                {t("viewOurWork")}
              </a>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-md border border-amber-500/60 bg-amber-500/20 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-amber-300 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-500 hover:bg-amber-500 hover:text-black hover:shadow-xl"
              >
                <CalendarCheck className="h-4 w-4 transition-colors duration-300 group-hover:text-black" />
                {t("bookRecce")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Real Property Specs Bar */}
      <section className="border-b border-border bg-card py-6">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 text-center md:grid-cols-4">
          <div className="border-r border-border/60 last:border-0 p-2">
            <Building className="mx-auto h-5 w-5 text-amber-500" />
            <p className="mt-2 font-display text-lg font-bold text-foreground md:text-xl">
              2 Floors
            </p>
            <p className="text-xs text-muted-foreground">Ground + 1st Floor</p>
          </div>
          <div className="border-r border-border/60 last:border-0 p-2">
            <DoorOpen className="mx-auto h-5 w-5 text-amber-500" />
            <p className="mt-2 font-display text-lg font-bold text-foreground md:text-xl">
              Empty Big Entrance
            </p>
            <p className="text-xs text-muted-foreground">Spacious Frontage & Gate</p>
          </div>
          <div className="border-r border-border/60 last:border-0 p-2">
            <Home className="mx-auto h-5 w-5 text-amber-500" />
            <p className="mt-2 font-display text-lg font-bold text-foreground md:text-xl">
              2 BHK Each Floor
            </p>
            <p className="text-xs text-muted-foreground">Independent Living Layouts</p>
          </div>
          <div className="p-2">
            <Sparkles className="mx-auto h-5 w-5 text-amber-500" />
            <p className="mt-2 font-display text-lg font-bold text-foreground md:text-xl">
              Middle Class to Rich
            </p>
            <p className="text-xs text-muted-foreground">Versatile House Setups</p>
          </div>
        </div>
      </section>

      {/* Property Video Tour Section */}
      <section id="video-tour" className="scroll-mt-20 border-b border-border bg-card/40 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            title="Property Video Tour"
            subtitle="Watch the complete walkthrough video of the 2-floor house."
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
            subtitle="Spacious layout suitable for middle class to rich household scenes."
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
                    {space.subtitle && (
                      <span className="text-[11px] font-semibold text-amber-500">
                        {space.subtitle}
                      </span>
                    )}
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {space.description}
                    </p>

                    <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
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

      {/* Location Callout Banner & Google Map */}
      <section className="border-y border-border bg-card py-14">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-xl border border-amber-500/30 bg-background p-6 shadow-sm">
            <div>
              <span className="rounded bg-amber-500/10 px-2 py-0.5 text-xs font-bold uppercase text-amber-500">
                Prime Film Hub Location
              </span>
              <h3 className="mt-2 font-display text-xl font-bold text-foreground">
                4/5 Varghese Avenue, Ashok Nagar, Vadapalani, Chennai
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Conveniently located in Vadapalani / Ashok Nagar, Chennai's primary film production
                district.
              </p>
              <div className="mt-3 flex flex-wrap gap-4 text-xs">
                <span>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:8838504143" className="text-amber-500 hover:underline">
                    88385 04143
                  </a>
                  {" · "}
                  <a href="tel:7010833853" className="text-amber-500 hover:underline">
                    70108 33853
                  </a>
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-xs font-semibold text-foreground hover:bg-muted"
              >
                <MapPin className="h-4 w-4 text-amber-500" /> Open in Maps
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-4 py-2.5 text-xs font-bold text-black hover:bg-amber-400"
              >
                <CalendarCheck className="h-4 w-4" /> Book Recce
              </Link>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="mt-6">
            <GoogleMapEmbed height={420} />
          </div>
        </div>
      </section>

      {/* Featured in Movies & Web Series */}
      <section className="border-t border-border bg-card/40 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            title="Featured in Movies & Web Series"
            subtitle="Actual Tamil feature films and web series shot on location at our house, including Tourist Family, Parimala & Co, and Brothers and Sisters."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {movieReferences.slice(0, 6).map((item, idx) => (
              <Reveal key={item.id} delay={idx * 70}>
                <div
                  onClick={() => {
                    const foundIndex = allGalleryMedia.findIndex((g) => g.id === item.id);
                    if (foundIndex !== -1) setOpenIndex(foundIndex);
                  }}
                  className="group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-xl"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-black">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-3 top-3 rounded bg-gradient-to-r from-amber-500 to-orange-500 px-2.5 py-0.5 text-[10px] font-extrabold uppercase text-black shadow-md">
                      Filmed Here
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-display text-base font-bold text-foreground group-hover:text-amber-500 transition-colors">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground">{item.place}</p>
                    <span className="mt-2 inline-block text-[11px] font-medium text-amber-500/90">
                      {item.note}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-black shadow-md transition-all hover:from-amber-400 hover:to-amber-500"
            >
              View All 9 Reference Images in Gallery <ArrowRight className="h-4 w-4" />
            </Link>
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

      {/* Film Production FAQ Section (matches FAQPage Schema for Google Rich Snippets) */}
      <section className="border-t border-border bg-background py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            title="Film Production FAQ"
            subtitle="Essential logistics, permissions, and booking details for directors and line producers."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                q: "Can we do night shoots at Vadapalani Shooting House?",
                a: "Yes, overnight and continuous 24-hour shoot schedules are permitted with prior coordination. The independent 2-floor structure and spacious front entrance allow quiet indoor night filming and low-impact exterior lighting without disturbance.",
              },
              {
                q: "What are the parking permissions on Varghese Avenue?",
                a: "The property features a wide, empty front entrance area accommodating generator vans (up to 125 KVA), camera equipment trucks, and crew vehicles. Additional unit vehicles and vanity vans can be parked along the wide, quiet residential stretch of Varghese Avenue.",
              },
              {
                q: "Is advance recce walkthrough free?",
                a: "Yes, in-person location recce walkthroughs for directors, cinematographers, art directors, and line producers are completely complimentary. Call 88385 04143 or 70108 33853 or message directly on WhatsApp to coordinate recce timing.",
              },
              {
                q: "Where is Vadapalani Shooting House located in Chennai?",
                a: "The shooting house is located at 4/5 Varghese Avenue, Ashok Nagar, Vadapalani, Chennai, within Chennai's central cinema production zone close to major editing suites and studios.",
              },
              {
                q: "Which Tamil films and series were filmed here?",
                a: "The house was the verified filming location for the Tamil feature film Tourist Family (starring M. Sasikumar and Simran), the Tamil film Parimala & Co, and the JioHotstar web series Brothers and Sisters.",
              },
              {
                q: "What are the property layout specifications?",
                a: "The property is an independent 2-floor house featuring a wide empty front entrance area for crew vehicles and camera equipment, with 2 BHK floor plans on each floor suitable for middle-class to rich home setups.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-border/80 bg-card p-6 shadow-sm transition-all hover:border-amber-500/50"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                    <HelpCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-foreground">{faq.q}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recce CTA Banner */}
      <section className="mx-4 my-12 rounded-xl border border-border bg-muted p-8 text-center sm:p-12 md:mx-auto md:max-w-6xl shadow-sm">
        <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">
          Interested in Shooting Here?
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
          Call <strong>88385 04143</strong> / <strong>70108 33853</strong> to schedule an in-person
          recce at 4/5 Varghese Avenue, Ashok Nagar, Vadapalani.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:opacity-90"
          >
            <CalendarCheck className="h-4 w-4" /> Book a Recce Visit
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            WhatsApp for Recce
          </a>
        </div>
      </section>

      {/* Lightbox for gallery view */}
      {openIndex !== null && (
        <Lightbox
          photos={allGalleryMedia}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={(newIdx) => setOpenIndex(newIdx)}
        />
      )}
    </div>
  );
}
