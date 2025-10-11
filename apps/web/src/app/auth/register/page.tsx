
'use client';
'use client';

import { useState } from "react";
import Link from "next/link";

import { useAuth } from "@/context/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthShell } from "@/components/auth/auth-shell";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, isLoading, error } = useAuth();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await register(email, password);
  };

  return (
    <AuthShell
      eyebrow="Create your account"
      title="Join the Infera intelligence loop"
      description="Lock in your comparison lineup, curate news sources you trust, and sync personalised learning tracks."
      highlights={[
        "Tailor weekly digest drops with the providers and topics you follow.",
        "Save multiple benchmark presets for quick model-switching during reviews.",
        "Dark and light modes stay in sync across sessions and devices.",
      ]}
      hint="Fun fact: “Infera” nods to inference—the heart of every great model."
    >
      <div className="space-y-6">
        <header className="space-y-2">
          <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">Create account</h2>
          <p className="text-sm leading-relaxed text-[var(--color-muted)]/85">
            Join Infera to get started.
          </p>
        </header>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@studio.co"
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
              autoComplete="new-password"
            />
          </div>
          {error ? <p className="text-sm font-medium text-red-400">{error}</p> : null}
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Almost there…" : "Create account"}
          </Button>
        </form>
        <p className="text-xs text-[var(--color-muted)]/80">
          Already set up?{" "}
          <Link href="/auth/login" className="font-semibold text-[var(--color-foreground)] underline-offset-4 hover:underline">
            Sign in instead.
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}
