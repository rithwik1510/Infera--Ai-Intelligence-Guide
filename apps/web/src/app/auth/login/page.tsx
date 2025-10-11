
'use client';

import { useState } from "react";
import Link from "next/link";

import { useAuth } from "@/context/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthShell } from "@/components/auth/auth-shell";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useAuth();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await login(email, password);
  };

  return (
    <AuthShell
      eyebrow="Welcome back"
      title="Sign in to Infera"
      description="Pick up where you left off with benchmark lineups, saved digests, and your personalized comparison canvas."
      highlights={[
        "⌘K / Ctrl K opens the command palette anywhere in Infera.",
        "Sessions resume with your last comparison state intact.",
        "Nightly digests recap any launch and pricing shifts you follow.",
      ]}
      hint="Hint: SSO and hardware key support arrive in the next release."
    >
      <div className="space-y-6">
        <header className="space-y-2">
          <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">Login</h2>
          <p className="text-sm leading-relaxed text-[var(--color-muted)]/85">
            Access your personalized Infera dashboard.
          </p>
        </header>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@infera.ai"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              disabled={isLoading}
              autoComplete="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              disabled={isLoading}
              autoComplete="current-password"
            />
          </div>
          {error ? <p className="text-sm font-medium text-red-400">{error}</p> : null}
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Signing in…" : "Login"}
          </Button>
        </form>
        <p className="text-xs text-[var(--color-muted)]/80">
          Need an account?{" "}
          <Link href="/auth/register" className="font-semibold text-[var(--color-foreground)] underline-offset-4 hover:underline">
            Create one here.
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}
