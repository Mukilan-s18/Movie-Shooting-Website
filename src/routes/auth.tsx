import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Lock, Loader2, ShieldCheck, User } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Logo } from "@/components/site/Logo";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Studio Manager Login - Cinewood Studios" },
      {
        name: "description",
        content: "Private login for Cinewood Film Studios to manage location shooting photos and enquiries.",
      },
      { property: "og:title", content: "Studio Manager Login - Cinewood Studios" },
      { property: "og:description", content: "Private login to manage movie sets and gallery." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  // Already signed in? Go straight to the dashboard.
  useEffect(() => {
    void (async () => {
      const { data } = await supabase.auth.getUser();
      if (data.user) await navigate({ to: "/admin", replace: true });
    })();
  }, [navigate]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      toast.error("Please enter a username and password");
      return;
    }
    setBusy(true);

    const formattedEmail = `${username.trim().toLowerCase()}@cinewood.com`;

    try {
      // 1. Try to sign in normally
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: formattedEmail,
        password,
      });

      if (signInError) {
        // If the credentials are wrong, it could be because the user doesn't exist yet!
        if (signInError.message.includes("Invalid login credentials")) {
          // Let's attempt to register them seamlessly
          const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
            email: formattedEmail,
            password,
          });

          if (signUpError) throw signUpError;
          if (!signUpData.session) {
            throw new Error("Email confirmations are still required by Supabase.");
          }

          // Registration succeeded. Claim the absolute owner role.
          const { data: claimed } = await supabase.rpc("claim_first_admin");
          if (!claimed) {
            await supabase.auth.signOut();
            throw new Error("An owner already exists! You are not authorized.");
          }

          toast.success("Welcome! You are now the gallery owner.");
          await navigate({ to: "/admin", replace: true });
          return;
        }
        throw signInError; // Throw any other errors
      }

      // 2. Existing user signed in successfully. Verify they are actually the admin.
      const { data: isAdmin } = await supabase.rpc("is_admin");
      if (!isAdmin) {
        await supabase.auth.signOut();
        throw new Error("You are not authorized. Only the owner can access this.");
      }

      toast.success(`Welcome back, ${username.trim()}!`);
      await navigate({ to: "/admin", replace: true });
      
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-4 py-16">
      <Logo />
      <div className="mt-8 w-full">
        <SectionHeading
          title="Owner Login"
          subtitle="This private area is only for the business owner."
        />
      </div>

      <form
        onSubmit={onSubmit}
        className="mt-8 w-full space-y-4 rounded-sm border border-border bg-card p-6 shadow-sm"
      >
        <div>
          <label htmlFor="username" className="text-sm font-semibold text-secondary">
            Username
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              id="username"
              type="text"
              autoComplete="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 w-full rounded-sm border border-input bg-background py-2 pl-10 pr-3 text-sm outline-none focus:border-primary"
              placeholder="Enter your username"
            />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="text-sm font-semibold text-secondary">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-sm border border-input bg-background py-2 pl-10 pr-3 text-sm outline-none focus:border-primary"
              placeholder="Enter your password"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={busy}
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-60"
        >
          {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          {busy ? "Authenticating…" : "Secure Sign In"}
        </button>
      </form>

      <p className="mt-5 inline-flex items-center gap-2 text-xs text-muted-foreground">
        <ShieldCheck className="h-3.5 w-3.5" />
        Bank-grade database security enabled.
      </p>
    </div>
  );
}
