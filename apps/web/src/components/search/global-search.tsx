"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import { designTokens } from "@/lib/design/tokens";

export function GlobalSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <form
      role="search"
      className="group relative flex w-full items-center gap-3 rounded-full border border-[var(--border-soft)]/60 bg-[var(--color-surface-glass)] px-6 py-2 backdrop-blur-xl"
      onSubmit={(event) => {
        event.preventDefault();
        if (query.trim().length > 0) {
          router.push(`/search?q=${encodeURIComponent(query.trim())}`);
        }
      }}
    >
      <motion.span
        aria-hidden
        animate={{ scale: isFocused ? 1.06 : 1, opacity: isFocused ? 1 : 0.85 }}
        className="relative inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-soft)]/60 bg-gradient-to-br from-[var(--color-accent-primary)]/30 via-[var(--color-accent-secondary)]/20 to-transparent"
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
      >
        <motion.span
          animate={{ opacity: isFocused ? 1 : 0.7, scale: isFocused ? 1 : 0.92 }}
          className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-secondary)]"
        />
      </motion.span>
      <input
        aria-label="Search across news, comparisons, learning tracks, and models"
        data-hotkey-target="global-search"
        className="flex-1 bg-transparent text-[15px] text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:outline-none"
        placeholder="Search the AI landscape"
        value={query}
        onBlur={() => setIsFocused(false)}
        onChange={(event) => setQuery(event.target.value)}
        onFocus={() => setIsFocused(true)}
      />
      <kbd className="hidden rounded-md border border-[var(--border-soft)]/60 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.32em] text-[var(--color-foreground)]/70 sm:block">
        Enter
      </kbd>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full border border-transparent"
        animate={{ borderColor: isFocused ? "rgba(237, 181, 95, 0.28)" : "rgba(237, 181, 95, 0)" }}
        transition={{
          duration: designTokens.motion.duration.hover / 1000,
          ease: designTokens.motion.easing.standard,
        }}
      />
    </form>
  );
}
