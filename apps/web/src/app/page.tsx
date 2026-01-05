"use client";

import Link from "next/link";
import { TrendingUp, Sparkles, BookOpen, Database, BarChart3, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { designTokens } from "@/lib/design/tokens";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ParticleOrb } from "@/components/visuals/particle-orb";
import { KonamiListener } from "@/components/visuals/konami-listener";

const featureSections = [
  {
    id: "news",
    label: "Newswire",
    title: "Daily Briefings",
    icon: TrendingUp,
    gradient: designTokens.gradients.hero,
    href: "/news",
  },
  {
    id: "comparisons",
    label: "Lab",
    title: "Benchmarks",
    icon: BarChart3,
    gradient: designTokens.gradients.aurora,
    href: "/comparisons",
  },
  {
    id: "learn",
    label: "Studio",
    title: "Learning Tracks",
    icon: BookOpen,
    gradient: designTokens.gradients.ember,
    href: "/learn",
  },
  {
    id: "models",
    label: "Directory",
    title: "Model Specs",
    icon: Database,
    gradient: designTokens.gradients.horizon,
    href: "/models",
  },
];

export default function Home() {
  const handleHeroClick = () => {
    // Basic "interaction" - could expound to particle burst later
    const el = document.getElementById("hero-title");
    if (el) {
      el.animate(
        [
          { transform: "scale(1)" },
          { transform: "scale(1.05)" },
          { transform: "scale(1)" },
        ],
        { duration: 300, easing: "cubic-bezier(0.18, 0.89, 0.32, 1.28)" }
      );
    }
  };

  return (
    <div className="relative flex flex-col gap-24 pb-20">
      <KonamiListener />

      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] flex-col items-center justify-center text-center px-6">
        <ParticleOrb />

        <div className="relative z-10 flex flex-col items-center gap-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)]/50 bg-[var(--color-surface-glass)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-muted)] shadow-sm backdrop-blur-md"
          >
            <Sparkles className="h-3 w-3 text-[var(--accent-primary)]" />
            <span>Issue 01 is Live</span>
          </motion.div>

          <h1
            id="hero-title"
            onClick={handleHeroClick}
            className="cursor-pointer select-none text-6xl font-display font-semibold tracking-tighter text-[var(--color-foreground)] sm:text-7xl md:text-8xl lg:text-9xl transition-colors hover:text-[var(--accent-primary)]/90"
          >
            Infera.
          </h1>

          <p className="max-w-xl text-lg text-[var(--color-muted)] sm:text-xl font-light leading-relaxed">
            The studio-grade hub for <span className="font-medium text-[var(--color-foreground)] border-b border-[var(--accent-secondary)]/30">AI fluency</span>.
            <br className="hidden sm:block" />
            News, benchmarks, and craft learning in one ritual.
          </p>

          <div className="flex gap-4 mt-4">
            <Link href="/news" className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-[var(--color-foreground)] px-8 font-medium text-[var(--color-background)] transition-all duration-300 hover:bg-[var(--accent-primary)] hover:scale-105 active:scale-95">
              <span className="mr-2">Start Reading</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Navigation Grid */}
      <section className="mx-auto w-full max-w-[1400px] px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featureSections.map((section, index) => (
            <Link key={section.id} href={section.href} className="group outline-none">
              <SpotlightCard className="h-full border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/40 p-1 transition-all duration-500 hover:bg-[var(--color-surface)]/80">
                <div className="relative flex h-full flex-col items-center justify-center gap-4 rounded-[var(--radius-lg)] p-8 text-center overflow-hidden">
                  {/* Gradient Blob Background */}
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-20"
                    style={{ background: `radial-gradient(circle at center, ${section.gradient[0]}, transparent 70%)` }}
                  />

                  <div className="relative z-10 rounded-2xl bg-[var(--color-surface-highlight)] p-4 shadow-inner ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <section.icon className="h-8 w-8 text-[var(--color-foreground)]" />
                  </div>

                  <div className="relative z-10 space-y-1">
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-muted)]">{section.label}</div>
                    <div className="text-xl font-medium text-[var(--color-foreground)]">{section.title}</div>
                  </div>
                </div>
              </SpotlightCard>
            </Link>
          ))}
        </div>
      </section>

      {/* Condensed Footer / Manifesto */}
      <section className="mx-auto max-w-2xl px-6 text-center">
        <div className="rounded-3xl border border-[var(--border-soft)]/40 bg-[var(--color-surface-glass)] p-8 backdrop-blur-sm">
          <Sparkles className="mx-auto h-5 w-5 text-[var(--color-muted)] mb-4" />
          <p className="text-sm font-medium leading-loose text-[var(--color-muted)]">
            Designed like a magazine, engineered like a platform.
            <span className="opacity-50 mx-2">•</span>
            Every tab inherits a shared palette, motion spec, and narrative tone.
          </p>
        </div>
      </section>
    </div>
  );
}
