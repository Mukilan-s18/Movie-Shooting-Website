import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Cookie, X } from "lucide-react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const choice = localStorage.getItem("vadapalani_cookie_consent");
      if (!choice) {
        // Show after 1.5 seconds delay so page content settles first
        const t = setTimeout(() => setVisible(true), 1500);
        return () => clearTimeout(t);
      }
    } catch {
      return undefined;
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem("vadapalani_cookie_consent", "accepted");
    } catch {
      return undefined;
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Cookie consent banner"
      className="fixed bottom-16 inset-x-4 z-50 mx-auto max-w-xl animate-in fade-in slide-in-from-bottom-3 duration-300 md:bottom-6"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-lg border border-border bg-card p-4 shadow-2xl backdrop-blur-md">
        <div className="flex items-start gap-3">
          <Cookie className="h-5 w-5 text-gold shrink-0 mt-0.5" />
          <div className="text-xs text-foreground">
            <p className="font-semibold">Essential Storage & Privacy Notice</p>
            <p className="mt-0.5 text-muted-foreground text-[11px] leading-relaxed">
              We use essential storage for production SSO logins and zero advertising tracking
              cookies. Read our{" "}
              <Link to="/cookies" className="text-primary underline hover:text-gold">
                Cookie Policy
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-primary underline hover:text-gold">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end">
          <button
            type="button"
            onClick={accept}
            className="rounded bg-primary px-3.5 py-1.5 text-xs font-bold text-primary-foreground shadow-sm transition-all hover:opacity-90"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => setVisible(false)}
            aria-label="Dismiss cookie notice"
            className="rounded border border-border p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
