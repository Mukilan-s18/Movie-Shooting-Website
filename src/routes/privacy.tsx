import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Shield, Lock, Eye, FileText, Mail, Phone, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { business } from "@/lib/business";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      {
        title: "Privacy Policy - Vadapalani Shooting House Chennai",
      },
      {
        name: "description",
        content:
          "Privacy policy for Vadapalani Shooting House film location rentals, booking enquiries, and crew data handling at 4/5 Varghese Avenue, Ashok Nagar, Vadapalani, Chennai.",
      },
      { property: "og:title", content: "Privacy Policy - Vadapalani Shooting House" },
      { property: "og:url", content: "https://vadapalanishootinghouse.in/privacy" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://vadapalanishootinghouse.in/privacy",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div>
      <div className="border-b border-border bg-muted py-14">
        <SectionHeading
          title="Privacy Policy"
          subtitle="How we handle your production booking information, enquiry details, and film crew confidentiality."
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
              Legal & Privacy
            </span>
            <h1 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">
              Privacy & Crew Data Protection
            </h1>
            <p className="mt-2 text-xs text-muted-foreground">
              Last Updated: November 2026 | Vadapalani Shooting House (Ashok Nagar, Chennai)
            </p>
          </div>

          <section className="space-y-3 border-t border-border pt-6">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
              <Shield className="h-4 w-4 text-gold" /> 1. Information We Collect
            </h2>
            <p className="text-xs leading-relaxed text-muted-foreground">
              When you submit a recce enquiry or book a shooting schedule through our website, phone
              lines, or WhatsApp, we collect only the necessary project details required to verify
              date availability and coordinate access:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-muted-foreground">
              <li>Contact Person Name and Production Banner or Company name.</li>
              <li>Phone number and WhatsApp contact for shoot coordination.</li>
              <li>Optional email address for invoice and contract transmission.</li>
              <li>
                Shoot format (Feature Film, Web Series, TV Serial, Commercial) and proposed dates.
              </li>
              <li>
                Specific property spaces required (Ground Floor, 1st Floor, Entrance Frontage).
              </li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-border pt-6">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
              <Lock className="h-4 w-4 text-gold" /> 2. Film Production Confidentiality
            </h2>
            <p className="text-xs leading-relaxed text-muted-foreground">
              We understand the sensitive nature of unreleased film projects, casting secrecy,
              script plotlines, and commercial campaigns:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-muted-foreground">
              <li>
                We never publish behind-the-scenes photography or disclose shoot dates of ongoing
                productions without explicit prior consent from the line producer or director.
              </li>
              <li>
                Cast call sheets, crew lists, and equipment lists shared with property management
                are treated as strictly confidential.
              </li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-border pt-6">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
              <Eye className="h-4 w-4 text-gold" /> 3. On-Site Security & Premises Monitoring
            </h2>
            <p className="text-xs leading-relaxed text-muted-foreground">
              For security, generator van parking safety, and asset protection, exterior entry gates
              and perimeter perimeters are monitored via closed-circuit security cameras. Private
              indoor living rooms, bedrooms, changing rooms, and makeup areas are never monitored or
              recorded.
            </p>
          </section>

          <section className="space-y-3 border-t border-border pt-6">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
              <FileText className="h-4 w-4 text-gold" /> 4. Data Retention & Third Parties
            </h2>
            <p className="text-xs leading-relaxed text-muted-foreground">
              We do not sell, rent, or trade your contact details with any third-party marketing
              companies. Booking records are retained solely for tax compliance, accounting, and
              repeat booking verification under applicable Indian laws.
            </p>
          </section>

          <section className="space-y-3 border-t border-border pt-6">
            <h2 className="font-display text-lg font-bold text-foreground">
              5. Contacting Property Management
            </h2>
            <p className="text-xs text-muted-foreground">
              If you have any questions regarding your booking data or confidentiality terms, please
              reach out directly:
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
