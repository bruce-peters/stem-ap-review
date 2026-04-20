import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { BookOpen, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

type Mode = "signin" | "signup";

export default function AuthPage() {
  const { signIn, signUp } = useAuth();
  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  function switchMode(m: Mode) {
    setMode(m);
    setError(null);
    setSuccess(null);
    setPassword("");
    setConfirm("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (mode === "signup") {
      if (password !== confirm) {
        setError("Passwords do not match.");
        return;
      }
      if (password.length < 6) {
        setError("Password must be at least 6 characters.");
        return;
      }
    }

    setLoading(true);
    const { error } =
      mode === "signup"
        ? await signUp(email, password)
        : await signIn(email, password);
    setLoading(false);

    if (error) {
      setError(error);
    } else if (mode === "signup") {
      setSuccess("Account created! Check your email to confirm, then sign in.");
      switchMode("signin");
    }
    // on successful signIn the AuthProvider listener will update user state automatically
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo / brand */}
        <div className="flex flex-col items-center gap-2 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">AP Study</h1>
          <p className="text-sm text-muted-foreground">
            {mode === "signin" ? "Sign in to sync your progress" : "Create an account to get started"}
          </p>
        </div>

        {/* Card */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-lg">
          {/* Tab switcher */}
          <div className="flex rounded-lg bg-muted p-1 mb-6">
            {(["signin", "signup"] as Mode[]).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => switchMode(m)}
                className={cn(
                  "flex-1 rounded-md py-1.5 text-sm font-medium transition-colors",
                  mode === m
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {m === "signin" ? "Sign in" : "Sign up"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Email
              </label>
              <input
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-border bg-muted/40 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPw ? "text" : "password"}
                  required
                  autoComplete={mode === "signup" ? "new-password" : "current-password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-md border border-border bg-muted/40 px-3 py-2 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button
                  type="button"
                  tabIndex={-1}
                  onClick={() => setShowPw((v) => !v)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Confirm password (sign up only) */}
            {mode === "signup" && (
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Confirm Password
                </label>
                <input
                  type={showPw ? "text" : "password"}
                  required
                  autoComplete="new-password"
                  placeholder="••••••••"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  className="w-full rounded-md border border-border bg-muted/40 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            )}

            {error && (
              <p className="text-xs text-red-400 bg-red-950/30 border border-red-900/50 rounded-md px-3 py-2">
                {error}
              </p>
            )}
            {success && (
              <p className="text-xs text-green-400 bg-green-950/30 border border-green-900/50 rounded-md px-3 py-2">
                {success}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-1 w-full rounded-md bg-primary px-3 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-60 transition-colors"
            >
              {loading
                ? mode === "signin"
                  ? "Signing in…"
                  : "Creating account…"
                : mode === "signin"
                ? "Sign in"
                : "Create account"}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-4">
          {mode === "signin" ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => switchMode(mode === "signin" ? "signup" : "signin")}
            className="text-primary hover:underline"
          >
            {mode === "signin" ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  );
}
