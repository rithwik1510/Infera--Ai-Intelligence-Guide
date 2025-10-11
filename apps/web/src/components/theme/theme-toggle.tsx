"use client";

import { motion } from "framer-motion";

import { useThemeMode } from "./theme-controller";

export function ThemeToggle() {
  const { mode, toggle } = useThemeMode();
  const isDark = mode === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-[var(--border-soft)]/70 bg-[var(--color-surface-glass)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.36em] text-[var(--color-muted)]/80 transition-colors duration-200 hover:text-[var(--color-foreground)]"
    >
      <span
        className="relative inline-flex h-6 w-12 items-center justify-between rounded-full border border-[var(--border-soft)]/70 px-1 text-[var(--color-muted)]"
        style={{ background: "var(--color-surface-elevated)" }}
      >
        <span className="flex h-4 w-4 items-center justify-center text-[0px]">
          <svg
            aria-hidden="true"
            className={`h-3.5 w-3.5 text-[var(--accent-secondary)] transition-opacity duration-200 ${
              isDark ? "opacity-20" : "opacity-90"
            }`}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 4.25a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1Zm0 12a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1Zm7.75-4.75a1 1 0 0 1-1 1h-1.5a1 1 0 1 1 0-2h1.5a1 1 0 0 1 1 1ZM7.75 12a1 1 0 0 1-1 1h-1.5a1 1 0 0 1 0-2h1.5a1 1 0 0 1 1 1ZM18.01 6.98a1 1 0 0 1 0 1.41l-1.06 1.06a1 1 0 1 1-1.41-1.41l1.06-1.06a1 1 0 0 1 1.41 0ZM8.46 16.53a1 1 0 0 1 0 1.41l-1.06 1.06a1 1 0 0 1-1.41-1.41l1.06-1.06a1 1 0 0 1 1.41 0ZM6.98 5.99a1 1 0 0 1 1.41 0l1.06 1.06A1 1 0 1 1 8.05 8.46L6.99 7.4a1 1 0 0 1 0-1.41ZM17.53 15.54a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 1 1-1.41 1.41l-1.06-1.06a1 1 0 0 1 0-1.41ZM12 7.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Z" />
          </svg>
        </span>
        <span className="flex h-4 w-4 items-center justify-center text-[0px]">
          <svg
            aria-hidden="true"
            className={`h-3.5 w-3.5 text-[var(--accent-primary)] transition-opacity duration-200 ${
              isDark ? "opacity-90" : "opacity-20"
            }`}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M21 12.79A9 9 0 0 1 11.21 3a7 7 0 1 0 9.79 9.79Z" />
          </svg>
        </span>
        <motion.span
          aria-hidden
          animate={{ x: isDark ? 0 : 20 }}
          initial={false}
          transition={{ type: "spring", stiffness: 360, damping: 28 }}
          className="absolute left-1 top-1 h-4 w-4 rounded-full bg-gradient-to-br from-[var(--color-accent-secondary)] to-[var(--color-accent-primary)] shadow-[var(--shadow-glow)]"
        />
      </span>
      <motion.span
        key={mode}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.22 }}
        className="min-w-[3.5rem] text-center"
      >
        {isDark ? "Dusk" : "Dawn"}
      </motion.span>
    </button>
  );
}
