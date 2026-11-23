import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Home, Building, Phone } from "lucide-react";
import { business } from "@/lib/business";

export const Route = createFileRoute("/404")({
  head: () => ({
    meta: [
      {
        title: "404 - Page Not Found | Vadapalani Shooting House Chennai",
      },
      {
        name: "robots",
        content: "noindex, follow",
      },
      {
        name: "description",
        content:
          "The requested film shooting location page or room specification does not exist at Vadapalani Shooting House, Chennai.",
      },
    ],
  }),
  component: NotFoundPage,
});

function NotFoundPage() {
  return (
    <div className="flex min-h-[75vh] flex-col items-center justify-center px-4 py-20 text-center">
      <div className="max-w-lg rounded-2xl border border-border bg-card p-8 shadow-md sm:p-12">
        <span className="rounded-full bg-amber-500/10 px-3 py-1 font-mono text-xs font-bold text-amber-500">
          404 ERROR
        </span>
        <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Scene Not Found
        </h1>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
          The shooting floor, room view, or URL you requested does not exist or has been relocated
          within Vadapalani Shooting House.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-sm transition-all hover:opacity-90"
          >
            <Home className="h-4 w-4" /> Back to Home
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-5 py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted hover:text-primary"
          >
            <Building className="h-4 w-4 text-amber-500" /> View Property Spaces
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-md bg-amber-500 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-amber-400"
          >
            <Phone className="h-4 w-4" /> Contact Manager
          </Link>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-xs text-muted-foreground">
          <p className="font-medium text-foreground">{business.name}</p>
          <p className="mt-1">
            4/5 Varghese Avenue, Ashok Nagar, Vadapalani, Chennai · {business.phonePrimaryDisplay}
          </p>
        </div>
      </div>
    </div>
  );
}
