import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clapperboard, Clock } from "lucide-react";
import { business } from "@/lib/business";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-20 border-t-2 border-amber-500/40 bg-card text-card-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo compact />
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            Private movie shooting house in Chennai available for feature films, web series,
            television serials, and commercial shoots.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-amber-500">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-xs">
            {[
              { to: "/services", label: "Property Spaces" },
              { to: "/gallery", label: "Photo Gallery" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Book Shoot / Recce" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-muted-foreground transition-colors hover:text-amber-500"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-amber-500">
            Shooting Shifts
          </h4>
          <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
            <li className="flex items-start gap-1.5">
              <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-500" />
              <span>
                <strong className="text-foreground">Day Shift:</strong> 06:00 AM – 06:00 PM
              </span>
            </li>
            <li className="flex items-start gap-1.5">
              <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-500" />
              <span>
                <strong className="text-foreground">Night Shift:</strong> 06:00 PM – 06:00 AM
              </span>
            </li>
            <li className="flex items-start gap-1.5">
              <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-500" />
              <span>
                <strong className="text-foreground">Full Day:</strong> Continuous schedule
              </span>
            </li>
            <li className="flex items-start gap-1.5">
              <Clapperboard className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-500" />
              <span>
                <strong className="text-foreground">Location Recce:</strong> By appointment
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-amber-500">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-xs text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
              <span>{business.addressLines.join(" ")}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
              <span>
                <a
                  href={`tel:+91${business.phonePrimary}`}
                  className="font-medium text-foreground hover:text-amber-500"
                >
                  {business.phonePrimaryDisplay}
                </a>
                {" · "}
                <a
                  href={`tel:+91${business.phoneSecondary}`}
                  className="font-medium text-foreground hover:text-amber-500"
                >
                  {business.phoneSecondaryDisplay}
                </a>
              </span>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
              <a href={`mailto:${business.email}`} className="break-all hover:text-amber-500">
                {business.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-4 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {business.name}. All rights reserved.
      </div>
    </footer>
  );
}
