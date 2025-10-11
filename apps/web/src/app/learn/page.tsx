import Link from "next/link";

import type { LearnTrack } from "@ai-helper/types";

import { fetchLearnTracks } from "@/lib/api";
import { designTokens } from "@/lib/design/tokens";
import { ProgressRing } from "@/components/learn/progress-ring";

const gradientCycle = [
  designTokens.gradients.aurora,
  designTokens.gradients.horizon,
  designTokens.gradients.ember,
  designTokens.gradients.digest,
];

const LEVEL_LABEL: Record<LearnTrack["level"], string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

export default async function LearnPage() {
  const tracks = await fetchLearnTracks(1800);
  const totalHours = tracks.reduce((sum, track) => sum + track.timeEstimateHours, 0);
  const totalModules = tracks.reduce((sum, track) => sum + track.modules.length, 0);
  const maxHours = tracks.length ? Math.max(...tracks.map((track) => track.timeEstimateHours)) : 1;
  const maxModules = tracks.length ? Math.max(...tracks.map((track) => track.modules.length)) : 1;

  return (
    <section className="flex flex-col gap-16">
      <header className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.42em] text-[var(--color-muted)]/80">
            Learning Studio
          </span>
          <h1 className="text-4xl font-semibold text-[var(--color-foreground)] sm:text-[42px]">
            Curated Tracks for Builder Teams
          </h1>
        </div>
        <p className="max-w-3xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
          Seven research-backed programs covering prompts, RAG, agents, reliability and multimodal craft. Each track pairs
          battle-tested resources, applied tasks, and a capstone deliverable so your team ships production-grade AI faster.
        </p>
        <div className="flex flex-wrap gap-4 text-sm uppercase tracking-[0.32em] text-[var(--color-muted)]/80">
          <span className="rounded-full border border-[var(--border-soft)]/60 px-4 py-1 text-[var(--color-foreground)]/80">
            {tracks.length} Tracks
          </span>
          <span className="rounded-full border border-[var(--border-soft)]/60 px-4 py-1 text-[var(--color-foreground)]/80">
            {totalModules} Modules
          </span>
          <span className="rounded-full border border-[var(--border-soft)]/60 px-4 py-1 text-[var(--color-foreground)]/80">
            {totalHours}+ Hours of Practice
          </span>
        </div>
      </header>

      <div className="grid gap-8">
        {tracks.map((track, index) => {
          const gradient = gradientCycle[index % gradientCycle.length];
          const hoursWeight = track.timeEstimateHours / maxHours;
          const modulesWeight = track.modules.length / maxModules;
          const depthScore = Math.round(hoursWeight * 60 + modulesWeight * 40);
          const ringCaption = `${track.timeEstimateHours} hrs • ${track.modules.length} modules`;

          return (
            <article
              key={track.id}
              className="group relative overflow-hidden rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/55 bg-[var(--color-surface)]/45 px-8 py-10 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-depth)]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-80 transition-opacity duration-300 group-hover:opacity-95"
                style={{
                  background: `radial-gradient(130% 120% at 0% 0%, ${gradient[0]}, transparent 65%), radial-gradient(120% 150% at 100% 0%, ${
                    gradient[gradient.length - 1]
                  }, transparent 68%)`,
                }}
              />

              <div className="relative flex h-full flex-col gap-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
                  <ProgressRing value={depthScore} label="Depth" caption={ringCaption} gradient={gradient} />
                  <div className="flex flex-1 flex-col gap-6">
                    <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/80">
                      <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1">
                        {LEVEL_LABEL[track.level]}
                      </span>
                      <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1">
                        {track.timeEstimateHours} Hrs
                      </span>
                      <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1">
                        {track.modules.length} Modules
                      </span>
                      <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1">
                        Badge: {track.badge.name}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h2 className="text-[26px] font-semibold leading-tight text-white sm:text-[30px]">{track.title}</h2>
                      <p className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">{track.outcome}</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
                  <div className="space-y-4 rounded-[var(--radius-xl)] border border-white/20 bg-white/5 px-6 py-6 text-white/85">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/70">
                      Signature Modules
                    </p>
                    <ul className="space-y-4">
                      {track.modules.slice(0, 2).map((module) => (
                        <li key={module.title} className="rounded-[var(--radius-xl)] border border-white/15 bg-white/5 p-4">
                          <span className="block text-sm font-semibold text-white">{module.title}</span>
                          <p className="mt-1 text-xs leading-relaxed text-white/80">{module.objective}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <aside className="rounded-[var(--radius-xl)] border border-white/20 bg-white/10 px-6 py-6 text-white/85">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/70">Capstone</p>
                    <h3 className="mt-2 text-lg font-semibold text-white">{track.capstone.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">{track.capstone.brief}</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/70">
                      Deliverable: {track.capstone.deliverable}
                    </p>
                  </aside>
                </div>

                <div className="mt-auto flex flex-col gap-3 border-t border-white/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-2xl text-xs leading-relaxed text-white/75 sm:text-sm">{track.badge.description}</p>
                  <Link
                    href={`/learn/${track.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white transition hover:border-white hover:bg-white/10"
                  >
                    View track
                    <span aria-hidden className="text-sm">&gt;</span>
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

