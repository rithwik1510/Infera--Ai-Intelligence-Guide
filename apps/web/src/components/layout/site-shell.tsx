"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";

import { FeatureFlagProvider, useFeatureFlag } from "@/context/feature-flags";
import { CommandPalette } from "@/components/navigation/command-palette";
import { SiteHeader } from "./site-header";

interface SiteShellProps {
  children: ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <FeatureFlagProvider>
      <ShellFrame>{children}</ShellFrame>
    </FeatureFlagProvider>
  );
}

function ShellFrame({ children }: SiteShellProps) {
  const pathname = usePathname();
  const commandPaletteEnabled = useFeatureFlag("commandPalette");
  const [isCommandOpen, setCommandOpen] = useState(false);

  const focusGlobalSearch = useCallback(() => {
    const input = document.querySelector<HTMLInputElement>('[data-hotkey-target="global-search"]');
    if (input) {
      input.focus();
      input.select();
    }
  }, []);

  const handleDirectionalNavigation = useCallback(
    (key: "ArrowLeft" | "ArrowRight") => {
      const direction = key === "ArrowRight" ? 1 : -1;

      if (pathname.startsWith("/news")) {
        const cards = Array.from(document.querySelectorAll<HTMLElement>('[data-hotkey-target="news-card"]'));
        if (!cards.length) return;
        const activeIndex = cards.findIndex((card) => card === document.activeElement || card.contains(document.activeElement));
        const nextIndex =
          activeIndex === -1
            ? direction === 1
              ? 0
              : cards.length - 1
            : (activeIndex + direction + cards.length) % cards.length;
        const target = cards[nextIndex];
        target.focus();
        target.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        return;
      }

      if (pathname.startsWith("/comparisons")) {
        const options = Array.from(
          document.querySelectorAll<HTMLElement>('[data-hotkey-target="comparison-model-option"]'),
        ).filter((element) => !element.hasAttribute("disabled"));
        if (!options.length) return;
        const activeIndex = options.findIndex((option) => option === document.activeElement);
        const nextIndex =
          activeIndex === -1
            ? direction === 1
              ? 0
              : options.length - 1
            : (activeIndex + direction + options.length) % options.length;
        const target = options[nextIndex];
        target.focus();
        target.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    },
    [pathname],
  );

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.defaultPrevented) return;
      const target = event.target as HTMLElement | null;
      const isTypingContext =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.getAttribute("contenteditable") === "true");

      if (event.key === "/" && !event.metaKey && !event.ctrlKey && !isTypingContext) {
        event.preventDefault();
        focusGlobalSearch();
        return;
      }

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        if (commandPaletteEnabled) {
          event.preventDefault();
          setCommandOpen(true);
        }
        return;
      }

      if ((event.key === "ArrowRight" || event.key === "ArrowLeft") && !event.metaKey && !event.ctrlKey) {
        if (!isTypingContext) {
          handleDirectionalNavigation(event.key as "ArrowLeft" | "ArrowRight");
        }
        return;
      }

      if (event.key === "Escape" && isCommandOpen) {
        setCommandOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [commandPaletteEnabled, focusGlobalSearch, handleDirectionalNavigation, isCommandOpen]);
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--color-background)] text-[var(--color-foreground)]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Dynamic background handled by globals.css mesh-flow and body gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--bg-gradient-base),_transparent_90%)]" />
      </div>

      <div className="relative flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <div className="mx-auto w-full max-w-[1800px] px-6 pb-24 pt-20 sm:px-10 md:px-14 lg:px-16 xl:px-20">
            {children}
          </div>
        </main>
        <footer className="relative border-t border-[var(--border-soft)]/60 bg-[var(--color-background)]/80 py-16 text-sm text-[var(--color-muted)]">
          <div className="mx-auto flex w-full max-w-[1800px] flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 md:px-14 lg:px-16 xl:px-20">
            <p className="font-medium uppercase tracking-[0.28em] text-[var(--color-muted)]/80">Infera Intelligence Almanac</p>
            <p className="max-w-xl text-left text-xs leading-relaxed text-[var(--color-muted)]/80 sm:text-right">
              Crafted to the Agents playbook - curated intelligence, benchmarks, and learning pipelines with automation-readable foundations.
            </p>
          </div>
        </footer>
      </div>

      {commandPaletteEnabled ? <CommandPalette open={isCommandOpen} onClose={() => setCommandOpen(false)} /> : null}
    </div>
  );
}
