import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  FileCheck,
  AlertTriangle,
  Zap,
  Clock,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { business } from "@/lib/business";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      {
        title: "Terms of Service - Vadapalani Shooting House Chennai",
      },
      {
        name: "description",
        content:
          "Rental terms and conditions for film shooting house booking, recce protocol, generator guidelines, and production rules at 4/5 Varghese Avenue, Ashok Nagar, Vadapalani, Chennai.",
      },
      { property: "og:title", content: "Terms of Service - Vadapalani Shooting House" },
      { property: "og:url", content: "https://vadapalanishootinghouse.in/terms" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://vadapalanishootinghouse.in/terms",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div>
      <div className="border-b border-border bg-muted py-14">
        <SectionHeading
          title="Terms of Service"
          subtitle="Location rental policies, shooting guidelines, generator regulations, and booking terms."
        />
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-gold"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
        </Link>

        <article className="mt-8 space-y-8 rounded-xl border border-border bg-card p-6 shadow-sm md:p-10">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-gold">
              Production Agreement
            </span>
            <h1 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">
              Location Rental Terms & Conditions
            </h1>
            <p className="mt-2 text-xs text-muted-foreground">
              Applicable to all feature films, OTT web series, TV serials, and commercial shoots at
              4/5 Varghese Avenue, Ashok Nagar, Vadapalani, Chennai.
            </p>
          </div>

          <section className="space-y-3 border-t border-border pt-6">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
              <FileCheck className="h-4 w-4 text-gold" /> 1. Booking & Recce Procedures
            </h2>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Location recces (walkthrough visits) must be pre-arranged with the property manager.
              Recces are provided free of charge for verified directors, line producers, and art
              directors.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-muted-foreground">
              <li>
                Shoot dates are formally confirmed only upon receipt of the agreed booking advance.
              </li>
              <li>
                A signed call sheet and production agreement must be delivered before equipment
                load-in.
              </li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-border pt-6">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
              <Zap className="h-4 w-4 text-gold" /> 2. Power, Lighting & Generator Van Rules
            </h2>
            <p className="text-xs leading-relaxed text-muted-foreground">
              The property is equipped with commercial 3-phase 63A power. For heavy production
              lighting setups exceeding domestic electrical limits:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-muted-foreground">
              <li>
                Generator vans (DG vans) must be parked in the designated empty wide entrance
                frontage.
              </li>
              <li>
                Heavy power cables must be neatly ramped and rubber-matted across doorways for crew
                safety.
              </li>
              <li>
                Sound generator units must maintain acoustic baffling per Chennai municipal
                guidelines.
              </li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-border pt-6">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
              <AlertTriangle className="h-4 w-4 text-gold" /> 3. Art Department & Property Care
            </h2>
            <p className="text-xs leading-relaxed text-muted-foreground">
              The house is designed to be highly versatile for middle class to rich household
              scenes. Art departments are permitted to set dress and paint accents provided:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-muted-foreground">
              <li>No structural alterations or unapproved wall demolition are performed.</li>
              <li>
                Tape, wall hooks, and set modifications must be restored to original status upon
                shoot wrap.
              </li>
              <li>
                Any accidental damage to fixtures or doors must be reimbursed or repaired promptly
                by production.
              </li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-border pt-6">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
              <Clock className="h-4 w-4 text-gold" /> 4. Shoot Timings & Residential Discipline
            </h2>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Located on Varghese Avenue, Ashok Nagar / Vadapalani, the property is in a peaceful
              residential pocket. Production units must maintain professional conduct:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-muted-foreground">
              <li>
                Exterior loud speakers and high-decibel music playback after 10:00 PM require indoor
                sound containment.
              </li>
              <li>Crew vehicles must park without obstructing neighboring driveways.</li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-border pt-6">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
              <ShieldCheck className="h-4 w-4 text-gold" /> 5. Postponement & Cancellation
            </h2>
            <p className="text-xs leading-relaxed text-muted-foreground">
              In the event of weather disruption, actor schedule conflicts, or unforeseen production
              delays, management accommodates rescheduling to alternative available dates without
              forfeiture when notified at least 48 hours in advance.
            </p>
          </section>

          <section className="space-y-3 border-t border-border pt-6">
            <h2 className="font-display text-lg font-bold text-foreground">
              6. Direct Management Inquiries
            </h2>
            <p className="text-xs text-muted-foreground">
              For complete contractual templates or customized production arrangements, contact:
            </p>
            <div className="mt-3 rounded border border-border bg-background p-4 text-xs text-muted-foreground space-y-1.5">
              <p className="font-semibold text-foreground">{business.name}</p>
              <p className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-gold" /> {business.addressLines.join(", ")}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-gold" /> 88385 04143 / 70108 33853
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-gold" /> {business.email}
              </p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
