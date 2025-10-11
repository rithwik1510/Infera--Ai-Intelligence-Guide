import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { designTokens } from "@/lib/design/tokens";
import { learnTracks } from "@/data/learn-tracks";

const TRACK_LOOKUP = new Map(learnTracks.map((track) => [track.id, track]));

type LearnTrack = (typeof learnTracks)[number];
type LearnResource = LearnTrack["modules"][number]["resources"][number];

const LEVEL_LABEL: Record<LearnTrack["level"], string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

const RESOURCE_LABEL: Record<LearnResource["type"], string> = {
  article: "Article",
  video: "Video",
  docs: "Docs",
  github: "GitHub",
  exercise: "Exercise",
};

const gradientCycle = [
  designTokens.gradients.aurora,
  designTokens.gradients.ember,
  designTokens.gradients.horizon,
];

interface PageProps {
  params: { trackId: string };
}

export function generateStaticParams() {
  return learnTracks.map((track) => ({ trackId: track.id }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const track = TRACK_LOOKUP.get(params.trackId);

  if (!track) {
    return {
      title: "Learn track not found",
    };
  }

  return {
    title: `${track.title} | Learn | Infera`,
    description: track.outcome,
  };
}

export default function LearnTrackDetailPage({ params }: PageProps) {
  const track = TRACK_LOOKUP.get(params.trackId);

  if (!track) {
    notFound();
  }

  const trackIndex = learnTracks.findIndex((entry) => entry.id === track.id);
  const gradient = gradientCycle[trackIndex % gradientCycle.length];

  return (
    <section className="flex flex-col gap-14">
      <div>
        <Link
          href="/learn"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
        >
          <span aria-hidden>&lt;</span>
          Back to Learn
        </Link>
      </div>

      <header className="relative overflow-hidden rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/45 px-12 py-10 shadow-[var(--shadow-soft)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-75"
          style={{
            background: `radial-gradient(120% 120% at 0% 0%, ${gradient[0]}, transparent 70%), radial-gradient(120% 120% at 100% 0%, ${gradient[gradient.length - 1]}, transparent 70%)`,
          }}
        />
        <div className="relative flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/75">
            <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1">
              {LEVEL_LABEL[track.level] ?? track.level}
            </span>
            <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1">{track.timeEstimateHours} hrs</span>
            <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1">Badge: {track.badge.name}</span>
          </div>
          <div className="space-y-3">
            <h1 className="text-[34px] font-semibold leading-tight text-[var(--color-foreground)] sm:text-[38px]">{track.title}</h1>
            <p className="max-w-3xl text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">{track.outcome}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-4 text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
              <p>{track.badge.description}</p>
              <p>
                Deliverable: <span className="text-[var(--color-foreground)]">{track.capstone.deliverable}</span>
              </p>
            </div>
            <aside className="rounded-[var(--radius-xl)] border border-white/25 bg-white/10 px-6 py-6 text-sm leading-relaxed text-white/85 sm:text-base">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/70">Capstone</p>
              <h2 className="mt-2 text-xl font-semibold text-[var(--color-foreground)]">{track.capstone.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">{track.capstone.brief}</p>
            </aside>
          </div>
        </div>
      </header>

      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-[var(--color-foreground)]">Modules</h2>
          <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]/80">
            {track.modules.length} modules
          </span>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {track.modules.map((module, index) => (
            <article
              key={module.title}
              className="relative flex h-full flex-col gap-6 overflow-hidden rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/45 px-8 py-10 shadow-[var(--shadow-soft)]"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]/80">
                  <span>Module {String(index + 1).padStart(2, "0")}</span>
                  <span>{module.resources.length} resources</span>
                </div>
                <h3 className="text-[22px] font-semibold text-[var(--color-foreground)]">{module.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">{module.objective}</p>
              </div>

              <ul className="flex flex-col gap-4 text-sm leading-relaxed text-[var(--color-foreground)]/80">
                {module.resources.map((resource) => (
                  <li key={resource.url} className="rounded-[var(--radius-xl)] border border-[var(--border-soft)]/50 bg-[var(--color-surface-elevated)]/35 p-4">
                    <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]/75">
                      <span>{RESOURCE_LABEL[resource.type] ?? resource.type}</span>
                      <span>{new URL(resource.url).hostname}</span>
                    </div>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 block text-sm font-semibold text-[var(--color-foreground)] transition-colors hover:text-white"
                    >
                      {resource.title}
                    </a>
                    {resource.description ? (
                      <p className="mt-1 text-xs text-[var(--color-muted)]/80">{resource.description}</p>
                    ) : null}
                  </li>
                ))}
              </ul>

              <div className="mt-auto rounded-[var(--radius-xl)] border border-[var(--border-soft)]/50 bg-[var(--color-surface-elevated)]/35 p-4 text-sm leading-relaxed text-[var(--color-foreground)]/85">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]/75">Practice</p>
                <p className="mt-2 text-sm leading-relaxed">{module.task}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
