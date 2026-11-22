import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Cookie,
  ShieldCheck,
  CheckCircle2,
  Settings,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { business } from "@/lib/business";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      {
        title: "Cookie Policy - Vadapalani Shooting House Chennai",
      },
      {
        name: "description",
        content:
          "Cookie and storage policy for Vadapalani Shooting House website. We use zero third-party advertising cookies and respect visitor privacy.",
      },
      { property: "og:title", content: "Cookie Policy - Vadapalani Shooting House" },
      { property: "og:url", content: "https://vadapalanishootinghouse.com/cookies" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://vadapalanishootinghouse.com/cookies",
      },
    ],
  }),
  component: CookiePolicyPage,
});

function CookiePolicyPage() {
  return (
    <div>
      <div className="border-b border-border bg-muted py-14">
        <SectionHeading
          title="Cookie Policy"
          subtitle="Transparent disclosure on how our website uses browser cookies and local storage."
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
              Privacy & Compliance
            </span>
            <h1 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">
              Cookie & Web Storage Policy
            </h1>
            <p className="mt-2 text-xs text-muted-foreground">
              Last Updated: November 2026 | Vadapalani Shooting House, Chennai
            </p>
          </div>

          <section className="space-y-3 border-t border-border pt-6">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
              <Cookie className="h-4 w-4 text-gold" /> 1. Overview
            </h2>
            <p className="text-xs leading-relaxed text-muted-foreground">
              This Cookie Policy explains how Vadapalani Shooting House uses browser cookies and
              HTML5 local storage technologies when you visit our website.
            </p>
          </section>

          <section className="space-y-3 border-t border-border pt-6">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
              <ShieldCheck className="h-4 w-4 text-gold" /> 2. Zero Invasive Advertising Trackers
            </h2>
            <div className="rounded border border-primary/20 bg-primary/5 p-4 text-xs text-foreground">
              <div className="flex items-center gap-2 font-bold text-primary">
                <CheckCircle2 className="h-4 w-4" /> Clean, Ad-Free Browsing Guarantee
              </div>
              <p className="mt-1 text-muted-foreground leading-relaxed">
                We do not sell advertising space, do not use cross-site behavioral tracking cookies
                (such as Facebook Pixel or ad retargeting networks), and do not profile your web
                browsing habits.
              </p>
            </div>
          </section>

          <section className="space-y-3 border-t border-border pt-6">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
              <Settings className="h-4 w-4 text-gold" /> 3. What Storage We Use
            </h2>
            <div className="space-y-3 text-xs text-muted-foreground">
              <div className="rounded border border-border bg-background p-3.5">
                <p className="font-semibold text-foreground">
                  Essential Application Storage (localStorage)
                </p>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  Used solely to maintain authenticated session tokens when verified film crew log
                  in to the Production Crew Portal (Google SSO) to download architectural blueprints
                  and technical specifications.
                </p>
              </div>
              <div className="rounded border border-border bg-background p-3.5">
                <p className="font-semibold text-foreground">Cloudflare & Security Tokens</p>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  Cloudflare may set security cookies (such as bot management tokens) strictly
                  necessary to prevent distributed denial-of-service (DDoS) abuse and protect server
                  integrity.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3 border-t border-border pt-6">
            <h2 className="font-display text-lg font-bold text-foreground">
              4. Managing Cookies in Your Browser
            </h2>
            <p className="text-xs leading-relaxed text-muted-foreground">
              You can control and disable cookies directly in your browser settings (Safari, Chrome,
              Firefox, Microsoft Edge). Disabling cookies will not affect your ability to view
              property photos, watch video tours, or submit booking enquiries via WhatsApp.
            </p>
          </section>

          <section className="space-y-3 border-t border-border pt-6">
            <h2 className="font-display text-lg font-bold text-foreground">
              5. Questions Regarding Cookies
            </h2>
            <p className="text-xs text-muted-foreground">
              For any privacy or technical compliance queries, contact our administrative office:
            </p>
            <div className="mt-3 rounded border border-border bg-background p-4 text-xs text-muted-foreground space-y-1.5">
              <p className="font-semibold text-foreground">{business.name}</p>
              <p className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-gold" /> {business.addressLines.join(", ")}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-gold" /> 70108 33853 / 883504143
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
