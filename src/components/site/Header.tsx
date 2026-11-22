import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone, X, Languages, CalendarCheck, Play } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { business } from "@/lib/business";
import { useI18n } from "@/lib/i18n";

const linkKeys = [
  { to: "/", key: "home" },
  { to: "/services", key: "services" },
  { to: "/gallery", key: "gallery" },
  { to: "/about", key: "about" },
  { to: "/contact", key: "contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useI18n();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" onClick={() => setOpen(false)} aria-label={business.name}>
          <Logo compact />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {linkKeys.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-amber-500 font-bold" }}
              className="text-sm font-semibold uppercase tracking-wide text-foreground/80 transition-colors hover:text-amber-500"
            >
              {t(l.key as any)}
            </Link>
          ))}

          <a
            href="/#video-tour"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-amber-500 transition-colors hover:text-amber-400"
          >
            <Play className="h-3 w-3 fill-amber-500" /> Video Tour
          </a>

          <button
            onClick={() => setLang(lang === "en" ? "ta" : "en")}
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-md border border-border px-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
            aria-label="Toggle language"
          >
            <Languages className="h-3.5 w-3.5 text-amber-500" />{" "}
            {lang === "en" ? "தமிழ்" : "English"}
          </button>

          <ThemeToggle />

          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-md bg-amber-500 px-3.5 py-2 text-xs font-bold uppercase tracking-wide text-black shadow-sm transition-opacity hover:opacity-95"
          >
            <CalendarCheck className="h-4 w-4" />
            Book Recce
          </Link>

          <a
            href={`tel:+91${business.phonePrimary}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground transition-colors hover:text-amber-500"
          >
            <Phone className="h-3.5 w-3.5 text-amber-500" />
            {business.phonePrimaryDisplay}
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setLang(lang === "en" ? "ta" : "en")}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border transition-colors hover:bg-muted"
            aria-label="Toggle language"
          >
            <Languages className="h-4 w-4 text-amber-500" />
          </button>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="rounded-md border border-border p-2 text-foreground"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border bg-card px-4 py-3 md:hidden">
          {linkKeys.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-amber-500 font-bold" }}
              className="block border-b border-border/60 py-3 text-sm font-semibold uppercase tracking-wide text-foreground/80 last:border-0"
            >
              {t(l.key as any)}
            </Link>
          ))}
          <a
            href="/#video-tour"
            onClick={() => setOpen(false)}
            className="block border-b border-border/60 py-3 text-sm font-bold uppercase tracking-wide text-amber-500"
          >
            ▶ Video Tour
          </a>
          <div className="mt-3 flex flex-col gap-2 pt-2">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-md bg-amber-500 py-2.5 text-sm font-bold text-black"
            >
              <CalendarCheck className="h-4 w-4" />
              Book Location Recce
            </Link>
            <a
              href={`tel:+91${business.phonePrimary}`}
              className="flex items-center justify-center gap-2 rounded-md border border-border py-2 text-sm font-semibold text-foreground"
            >
              <Phone className="h-4 w-4 text-amber-500" />
              Call Location Manager: {business.phonePrimaryDisplay}
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
