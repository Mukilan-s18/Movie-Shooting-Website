import { useState, useEffect } from "react";
import { X, ShieldCheck, Download, Lock, CheckCircle2, UserCheck } from "lucide-react";
import { toast } from "sonner";

export function ProductionPortalModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [user, setUser] = useState<{ name: string; email: string; role: string } | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("vadapalani_crew_sso");
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch (_) {}
    }
  }, []);

  const handleGoogleSSO = () => {
    setLoading(true);
    setTimeout(() => {
      const mockUser = {
        name: "Production Crew Member",
        email: "crew@productionhouse.com",
        role: "Verified Line Producer / Location Manager",
      };
      setUser(mockUser);
      localStorage.setItem("vadapalani_crew_sso", JSON.stringify(mockUser));
      setLoading(false);
      toast.success("Signed in via Google SSO", {
        description: "Production documents and floor blueprints unlocked.",
      });
    }, 700);
  };

  const handleSignOut = () => {
    setUser(null);
    localStorage.removeItem("vadapalani_crew_sso");
    toast.info("Signed out from Production Portal");
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-lg border border-border bg-card p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-4 top-4 rounded p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded border border-border bg-muted text-primary">
            <Lock className="h-4 w-4" />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground">
              Production Crew Portal
            </h3>
            <p className="text-[11px] text-muted-foreground">
              Single Sign-On (SSO) for Directors, Line Producers & Location Managers
            </p>
          </div>
        </div>

        {user ? (
          <div className="mt-6 space-y-4">
            <div className="rounded border border-primary/20 bg-primary/5 p-3.5 text-xs">
              <div className="flex items-center gap-2 font-semibold text-primary">
                <ShieldCheck className="h-4 w-4" /> Verified SSO Session
              </div>
              <p className="mt-1 text-foreground font-medium">{user.name}</p>
              <p className="text-[11px] text-muted-foreground">{user.email} · {user.role}</p>
            </div>

            <div className="space-y-2 text-xs">
              <p className="font-semibold text-foreground">Unlocked Production Documents:</p>
              <div className="space-y-1.5">
                {[
                  { title: "2-Floor Architectural Blueprint & Measurements", size: "2.4 MB" },
                  { title: "3-Phase Power Distribution & Generator Guidelines", size: "1.1 MB" },
                  { title: "Standard Film Shoot Agreement & Permit Copy", size: "840 KB" },
                ].map((doc, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded border border-border bg-background p-2.5"
                  >
                    <div>
                      <p className="font-medium text-foreground">{doc.title}</p>
                      <p className="text-[10px] text-muted-foreground">PDF Document · {doc.size}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => toast.success(`Downloading ${doc.title}...`)}
                      className="inline-flex items-center gap-1 rounded bg-primary px-2.5 py-1 text-[11px] font-semibold text-primary-foreground hover:opacity-90"
                    >
                      <Download className="h-3 w-3" /> Get
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={handleSignOut}
              className="mt-4 w-full rounded border border-border py-2 text-xs font-semibold text-foreground hover:bg-muted"
            >
              Sign Out from Portal
            </button>
          </div>
        ) : (
          <div className="mt-6 space-y-4 text-xs">
            <p className="text-muted-foreground leading-relaxed">
              Sign in with your production Google account to download structural schematics, equipment guidelines, and verified shoot contracts.
            </p>

            <button
              type="button"
              disabled={loading}
              onClick={handleGoogleSSO}
              className="flex w-full items-center justify-center gap-3 rounded border border-border bg-background py-2.5 text-xs font-semibold text-foreground shadow-sm transition-all hover:bg-muted hover:border-gold disabled:opacity-50"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
              <span>{loading ? "Authenticating SSO..." : "Sign in with Google SSO"}</span>
            </button>

            <div className="flex items-center gap-2 pt-2 text-[11px] text-muted-foreground">
              <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
              <span>Public booking & recce visits require zero login. Instant phone & WhatsApp available.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
