import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CalendarCheck,
  Play,
  Home,
  Clock,
  Phone,
  MessageCircle,
} from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { business, whatsappUrl } from "@/lib/business";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About The Property - Movie Shooting House Rental",
      },
      {
        name: "description",
        content:
          "Private movie shooting house available for movies, television serials, OTT series, and commercial filming.",
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
          title="About The Property"
          subtitle="Private residential property available for film, OTT, and commercial shoots."
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
            Private Shooting House
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground">
            A Dedicated Space for Filming
          </h2>
          <div className="mt-4 space-y-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            <p>
              This private house is made available for film crews, television serials, web series,
              and advertisement shoots.
            </p>
            <p>
              The property features a distinct exterior facade, a spacious living hall, a dedicated
              dining area, and a functional kitchen, offering clean angles and ample space for cast
              and crew movements.
            </p>
            <p>
              Location recce visits are welcome by prior appointment so directors, cinematographers,
              and production managers can inspect the property in person.
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

      {/* Shift Timings */}
      <section className="border-t border-border bg-card/40 py-14">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading
            title="Shift Timings"
            subtitle="Standard booking shift slots."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-5 text-center">
              <Clock className="mx-auto h-5 w-5 text-amber-500" />
              <h3 className="mt-2 text-sm font-bold text-foreground">Day Shift</h3>
              <p className="mt-1 text-xs text-muted-foreground">06:00 AM – 06:00 PM</p>
            </div>

            <div className="rounded-lg border border-border bg-card p-5 text-center">
              <Clock className="mx-auto h-5 w-5 text-amber-500" />
              <h3 className="mt-2 text-sm font-bold text-foreground">Night Shift</h3>
              <p className="mt-1 text-xs text-muted-foreground">06:00 PM – 06:00 AM</p>
            </div>

            <div className="rounded-lg border border-border bg-card p-5 text-center">
              <Clock className="mx-auto h-5 w-5 text-amber-500" />
              <h3 className="mt-2 text-sm font-bold text-foreground">24-Hour Block</h3>
              <p className="mt-1 text-xs text-muted-foreground">Continuous Schedule</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-md bg-amber-500 px-6 py-3 text-xs font-bold uppercase text-black hover:bg-amber-400"
            >
              <CalendarCheck className="h-4 w-4" /> Book a Recce Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
