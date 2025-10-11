"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import type { SearchResult } from "@/lib/search";
import { searchContent } from "@/lib/search";
import { useFeatureFlag } from "@/context/feature-flags";
import { designTokens } from "@/lib/design/tokens";

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

type CommandItem = SearchResult & { categoryLabel: string };

const defaultCommands: CommandItem[] = [
  {
    id: "nav-news",
    title: "Browse AI newsroom",
    description: "Editorial updates, digest, and curated launch coverage.",
    href: "/news",
    score: 1,
    badge: "News",
    categoryLabel: "Navigation",
  },
  {
    id: "nav-comparisons",
    title: "Compare leading LLMs",
    description: "Benchmark radar, pricing estimators, and sourcing trails.",
    href: "/comparisons",
    score: 1,
    badge: "Comparisons",
    categoryLabel: "Navigation",
  },
  {
    id: "nav-learn",
    title: "Open learning tracks",
    description: "Curated modules with capstones and badge incentives.",
    href: "/learn",
    score: 1,
    badge: "Learn",
    categoryLabel: "Navigation",
  },
  {
    id: "nav-models",
    title: "Explore model directory",
    description: "Filters for provider, licensing, and deployment posture.",
    href: "/models",
    score: 1,
    badge: "Models",
    categoryLabel: "Navigation",
  },
];

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const enabled = useFeatureFlag("commandPalette");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const results = useMemo<CommandItem[]>(() => {
    if (!enabled) {
      return [];
    }
    if (!query.trim()) {
      return defaultCommands;
    }

    const search = searchContent(query, 6);
    return search.groups.flatMap((group) =>
      group.results.slice(0, 5).map((result) => ({
        ...result,
        categoryLabel: group.label,
      })),
    );
  }, [enabled, query]);

  const handleSelect = useCallback(
    (item: CommandItem) => {
      onClose();
      router.push(item.href);
    },
    [onClose, router],
  );

  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      const id = window.setTimeout(() => {
        inputRef.current?.focus();
      }, 10);
      return () => window.clearTimeout(id);
    }
    return undefined;
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
      if (!results.length) {
        return;
      }
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((index) => Math.min(index + 1, results.length - 1));
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex((index) => Math.max(index - 1, 0));
      } else if (event.key === "Enter") {
        event.preventDefault();
        const selected = results[activeIndex];
        if (selected) {
          handleSelect(selected);
        }
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, results, activeIndex, onClose, router, handleSelect]);

  if (!enabled) {
    return null;
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-start justify-center bg-black/60 px-4 py-20 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: designTokens.motion.duration.page / 1000,
            ease: designTokens.motion.easing.entrance,
          }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            className="relative w-full max-w-2xl overflow-hidden rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/50 bg-[var(--color-surface)]/85 shadow-[var(--shadow-depth)] backdrop-blur-3xl"
            initial={{ scale: 0.96, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.98, opacity: 0, y: 16, transition: { duration: designTokens.motion.duration.fast / 1000, ease: designTokens.motion.easing.exit } }}
            transition={{
              duration: designTokens.motion.duration.page / 1000,
              ease: designTokens.motion.easing.entrance,
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
          >
            <span
              className="pointer-events-none absolute inset-0 opacity-80"
              style={{
                background:
                  "radial-gradient(100% 140% at 10% -10%, rgba(37,99,235,0.32), transparent 60%), radial-gradient(120% 120% at 90% 0%, rgba(6,182,212,0.28), transparent 58%)",
              }}
            />
            <span
              className="pointer-events-none absolute inset-0 opacity-55 mix-blend-screen"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.22), rgba(15,23,42,0))",
              }}
            />
            <span
              className="pointer-events-none absolute inset-0 opacity-35"
              style={{
                background:
                  "radial-gradient(120% 120% at 50% 105%, rgba(8,13,26,0.55), transparent 70%)",
              }}
            />
            <div className="relative z-10">
              <div className="flex items-center gap-3 border-b border-white/10 px-6 py-4 backdrop-blur-sm">
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-muted)]/80">Search</span>
                <input
                  ref={inputRef}
                  data-command-input
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setActiveIndex(0);
                  }}
                  placeholder="Jump to news, models, tracks, or benchmarks"
                  className="flex-1 bg-transparent text-base text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:outline-none"
                />
                <kbd className="rounded-md border border-white/20 bg-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.3em] text-[var(--color-foreground)]/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
                  Esc
                </kbd>
              </div>

              <div className="max-h-[420px] overflow-y-auto px-2 py-4">
                {results.length ? (
                  <ul className="flex flex-col gap-2">
                    {results.map((item, index) => {
                      const isActive = index === activeIndex;
                      return (
                        <li key={`${item.categoryLabel}-${item.id}`}>
                          <button
                            type="button"
                            onClick={() => handleSelect(item)}
                            className={`group relative flex w-full flex-col gap-1 overflow-hidden rounded-[var(--radius-xl)] border px-4 py-3 text-left transition ${
                              isActive
                                ? "border-white/35 text-[var(--color-foreground)] shadow-[var(--shadow-soft)]"
                                : "border-[var(--border-soft)]/50 text-[var(--color-foreground)]/90 hover:border-white/25 hover:text-[var(--color-foreground)]"
                            }`}
                            style={{
                              background: isActive
                                ? "linear-gradient(135deg, rgba(255,255,255,0.16), rgba(37,99,235,0.18))"
                                : "linear-gradient(135deg, rgba(15,23,42,0.6), rgba(15,23,42,0.4))",
                            }}
                          >
                            <span
                              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-65 group-focus-visible:opacity-75"
                              style={{
                                background:
                                  "radial-gradient(120% 140% at 12% 8%, rgba(255,255,255,0.2), transparent 65%)",
                              }}
                            />
                            <span
                              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-60 group-focus-visible:opacity-70"
                              style={{
                                background:
                                  "radial-gradient(140% 160% at 88% 96%, rgba(37,99,235,0.3), transparent 72%)",
                              }}
                            />
                            <div className="relative flex items-center justify-between gap-3 text-xs uppercase tracking-[0.32em] text-[var(--color-muted)]/80">
                              <span>{item.categoryLabel}</span>
                              <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
                                {item.badge ?? "Shortcut"}
                              </span>
                            </div>
                            <div className="relative z-10">
                              <span className="block text-sm font-semibold text-[var(--color-foreground)]">{item.title}</span>
                              {item.description ? (
                                <span className="block text-xs text-[var(--color-muted)]/85">{item.description}</span>
                              ) : null}
                              {item.meta ? (
                                <span className="mt-1 block text-[11px] text-[var(--color-muted)]/60">{item.meta}</span>
                              ) : null}
                            </div>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <div className="rounded-[var(--radius-xl)] border border-dashed border-[var(--border-soft)]/50 bg-[var(--color-surface)]/50 px-4 py-10 text-center text-sm text-[var(--color-muted)]">
                    No matches yet. Try searching for a model, benchmark, or track.
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
