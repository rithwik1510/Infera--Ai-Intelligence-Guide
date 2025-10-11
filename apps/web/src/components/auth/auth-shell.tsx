"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface AuthShellProps {
  eyebrow: string;
  title: string;
  description: string;
  highlights?: string[];
  hint?: string;
  children: ReactNode;
}

export function AuthShell({ eyebrow, title, description, highlights = [], hint, children }: AuthShellProps) {
  return (
    <section className="relative overflow-hidden rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/55 bg-[var(--color-surface)]/55 px-6 py-12 shadow-[var(--shadow-soft)] sm:px-10 lg:px-14">
      <div
        className="pointer-events-none absolute inset-0 opacity-80 blur-3xl"
        style={{
          background:
            "radial-gradient(110% 100% at 10% -10%, rgba(37,99,235,0.32), transparent 65%), radial-gradient(110% 100% at 95% 0%, rgba(6,182,212,0.26), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-45"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(15,23,42,0))",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          background:
            "radial-gradient(120% 140% at 50% 105%, rgba(8,13,26,0.6), transparent 70%)",
        }}
      />

      <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.21, 0.45, 0.1, 0.99] }}
          className="flex flex-col gap-5"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.38em] text-[var(--color-muted)]/80">
            {eyebrow}
          </span>
          <h1 className="text-3xl font-semibold leading-tight text-[var(--color-foreground)] sm:text-4xl">
            {title}
          </h1>
          <p className="max-w-xl text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base">
            {description}
          </p>
          {highlights.length ? (
            <ul className="space-y-3 text-sm text-[var(--color-muted)]/85">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-accent-secondary)] shadow-[0_0_12px_rgba(6,182,212,0.4)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
          {hint ? (
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]/70">{hint}</p>
          ) : null}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex w-full flex-col gap-4 rounded-[var(--radius-xl)] border border-white/12 bg-white/10 px-8 py-10 text-left shadow-[var(--shadow-soft)]/40 backdrop-blur-2xl sm:px-10"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(135% 120% at 0% 0%, rgba(255,255,255,0.24), transparent 60%), radial-gradient(120% 130% at 100% 0%, rgba(37,99,235,0.22), transparent 70%)",
            }}
          />
          <div className="relative z-10">{children}</div>
        </motion.div>
      </div>
    </section>
  );
}
