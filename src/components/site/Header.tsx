import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone, X, CalendarCheck, Play } from "lucide-react";
import { Logo } from "./Logo";
import { business } from "@/lib/business";
import { useI18n, type TranslationKey } from "@/lib/i18n";

const linkKeys = [
  { to: "/", key: "home" },
  { to: "/services", key: "services" },
  { to: "/gallery", key: "gallery" },
  { to: "/about", key: "about" },
  { to: "/contact", key: "contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5">
        <Link to="/" onClick={() => setOpen(false)} aria-label={business.name} className="shrink-0">
          <Logo compact />
        </Link>

        <nav className="hidden items-center gap-3 lg:gap-4 xl:gap-5 lg:flex shrink-0">
          {linkKeys.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary font-bold" }}
              className="text-xs font-semibold uppercase tracking-wider text-foreground/80 whitespace-nowrap transition-colors hover:text-primary"
            >
              {t(l.key as TranslationKey)}
            </Link>
          ))}

          <a
            href="/#video-tour"
            className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary whitespace-nowrap transition-colors hover:text-primary/80"
          >
            <Play className="h-2.5 w-2.5 fill-primary" /> Video Tour
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded bg-primary px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-sm whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95"
          >
            <CalendarCheck className="h-3.5 w-3.5" />
            Book Recce
          </Link>

          <a
            href="tel:7010833853"
            className="hidden xl:inline-flex items-center gap-1.5 text-xs font-bold text-foreground whitespace-nowrap transition-colors hover:text-primary"
          >
            <Phone className="h-3.5 w-3.5 text-gold" />
            70108 33853
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="rounded border border-border p-2 text-foreground"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border bg-card px-4 py-3 lg:hidden">
          {linkKeys.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary font-bold" }}
              className="block border-b border-border/60 py-3 text-sm font-semibold uppercase tracking-wide text-foreground/80 last:border-0"
            >
              {t(l.key as TranslationKey)}
            </Link>
          ))}
          <a
            href="/#video-tour"
            onClick={() => setOpen(false)}
            className="block border-b border-border/60 py-3 text-sm font-bold uppercase tracking-wide text-primary"
          >
            Video Tour
          </a>
          <div className="mt-3 flex flex-col gap-2 pt-2">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded bg-primary py-2.5 text-sm font-bold text-primary-foreground"
            >
              <CalendarCheck className="h-4 w-4" />
              Book Location Recce
            </Link>
            <a
              href={`tel:${business.phonePrimary}`}
              className="flex items-center justify-center gap-2 rounded border border-border py-2 text-sm font-semibold text-foreground"
            >
              <Phone className="h-4 w-4 text-gold" />
              Call: {business.phonePrimaryDisplay} / {business.phoneSecondaryDisplay}
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
