"use client";

import Link from "next/link";

import { useAuth } from "@/context/auth-context";

export default function SettingsPage() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-4 rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/40 p-8 text-[var(--color-muted)]">
        <div className="h-6 w-32 animate-pulse rounded-full bg-white/10" />
        <div className="h-4 w-full animate-pulse rounded-full bg-white/5" />
        <div className="h-4 w-full animate-pulse rounded-full bg-white/5" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-4 rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/40 p-8 text-[var(--color-muted)]">
        <h1 className="text-2xl font-semibold text-[var(--color-foreground)]">Sign in to manage settings</h1>
        <p className="text-sm leading-relaxed">
          You need an Infera account to configure notification cadence, saved comparisons, and workspace preferences.
        </p>
        <div className="flex gap-3">
          <Link
            href="/auth/login"
            className="inline-flex items-center justify-center rounded-full border border-[var(--border-soft)]/60 px-5 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-foreground)] transition hover:bg-white/10"
          >
            Login
          </Link>
          <Link
            href="/auth/register"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent-primary)] px-5 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-white transition hover:opacity-90"
          >
            Register
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
      <header className="rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/40 p-8 shadow-[var(--shadow-soft)]">
        <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]/75">Infera Account</span>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-foreground)]">Workspace preferences</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)]">
          Manage your default comparison models, digest cadence, and notification fallbacks. Additional personalization
          controls arrive with the next release—hang tight.
        </p>
      </header>
      <section className="grid gap-6 rounded-[var(--radius-xl)] border border-dashed border-[var(--border-soft)]/60 bg-[var(--color-surface)]/20 p-8 text-sm text-[var(--color-muted)]">
        <p>We&apos;re finalizing the settings surface. Soon you&apos;ll be able to:</p>
        <ul className="space-y-3">
          <li>- Pin default model lineups and benchmark weightings.</li>
          <li>- Adjust live news polling cadence and digest recap format.</li>
          <li>- Configure workspace hand-off integrations for Slack and email.</li>
        </ul>
        <p>
          Need something ahead of schedule? Reach us at{" "}
          <a className="underline decoration-dotted underline-offset-4" href="mailto:hello@infera.ai">
            hello@infera.ai
          </a>{" "}
          and we&apos;ll fast-track it.
        </p>
      </section>
    </div>
  );
}
