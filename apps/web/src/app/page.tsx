import Link from "next/link";

import { designTokens } from "@/lib/design/tokens";

const featureSections = [
  {
    id: "news",
    label: "Newswire",
    title: "Signal-dense daily briefings",
    description:
      "Curated RSS ingestion synthesised into editorial capsules with digest art direction, momentum scoring, and provenance you can trust.",
    gradient: designTokens.gradients.hero,
    href: "/news",
  },
  {
    id: "comparisons",
    label: "Comparative Lab",
    title: "Benchmarks that read like insight",
    description:
      "Interactive radar and pricing scenography with analyst commentary, multi-model recall, and motion-driven storytelling.",
    gradient: designTokens.gradients.aurora,
    href: "/comparisons",
  },
  {
    id: "learn",
    label: "Learning Studio",
    title: "Tracks designed for retention",
    description:
      "Cadenced modules, capstones, and badgeable wins - tuned quarterly for freshness and practice-first learning.",
    gradient: designTokens.gradients.ember,
    href: "/learn",
  },
  {
    id: "models",
    label: "Model Directory",
    title: "Production intelligence at a glance",
    description:
      "Licensing posture, context windows, and deployment notes surfaced in a cinematic card grid with precision filters.",
    gradient: designTokens.gradients.horizon,
    href: "/models",
  },
];

const hallmarks = [
  {
    title: "Automation cadence",
    copy: "30-minute ingest jobs with resilient fallbacks and observability ensure the briefings stay live-grade.",
  },
  {
    title: "Editorial craft",
    copy: "In-house art direction, layered typography, and magazine pacing make data feel storied.",
  },
  {
    title: "Second-brain ready",
    copy: "Schemas, search, and benchmarks are structured for dev workflows, not just dashboards.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <section className="grid gap-12 lg:grid-cols-[1.25fr_0.9fr] lg:items-end">
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border-soft)]/70 bg-[var(--color-surface-glass)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-muted)]/80">
            Issue 01 / Infera Intelligence Almanac
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-[1.08] text-[var(--color-foreground)] sm:text-5xl lg:text-6xl">
              A studio-grade hub for <span className="text-[var(--color-accent-primary)]">AI fluency</span> - news, benchmarks, and craft learning in one ritual.
            </h1>
            <p className="max-w-2xl text-base text-[var(--color-muted)] sm:text-lg">
              Infera operates as your editorial nerve center: current signals, comparative intelligence, and guided practice - staged with cinematic UI, tuned ingestion, and a tone you can brief executives with.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {hallmarks.map((item) => (
              <div
                key={item.title}
                className="rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/55 px-6 py-6 shadow-[var(--shadow-soft)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]/70">{item.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
        <aside className="relative overflow-hidden rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/45 px-8 py-10 shadow-[var(--shadow-depth)]">
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{ background: `linear-gradient(135deg, ${designTokens.gradients.aurora.join(", ")})` }}
          />
          <div className="relative flex h-full flex-col justify-between gap-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-muted)]/75">Automation Highlights</p>
              <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
                Autonomous ingestion with observability and editorial QA.
              </h2>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                RSS pipelines with dedupe, vector-ready summaries, and weekly digest generation. Structured logging, Prometheus metrics, and Meilisearch indexing keep distribution sharp.
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm text-[var(--color-muted)]">
              <span className="inline-flex h-2 w-2 rounded-full bg-[var(--color-accent-secondary)] shadow-[var(--shadow-glow)]" />
              Scheduler heartbeat every 30 minutes - opt-in interval controls
            </div>
          </div>
        </aside>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {featureSections.map((section, index) => (
          <article
            key={section.id}
            className="group relative overflow-hidden rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/50 bg-[var(--color-surface)]/40 px-8 py-10 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-depth)]"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-65 transition duration-300 group-hover:opacity-90"
              style={{
                background: `radial-gradient(120% 120% at 0% 0%, ${section.gradient[0]}, transparent 70%), radial-gradient(120% 120% at 100% 100%, ${section.gradient[section.gradient.length - 1]}, transparent 70%)`,
              }}
            />
            <div className="relative flex h-full flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.36em] text-[var(--color-muted)]/80">
                  {section.label}
                </span>
                <span className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-muted)]/70">{`${index + 1}`.padStart(2, "0")}</span>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold leading-tight text-[var(--color-foreground)]">{section.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">{section.description}</p>
              </div>
              <div className="mt-auto">
                <Link
                  href={section.href}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)]/60 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/80 transition-colors duration-200 hover:text-white"
                >
                  Enter {section.label}
                  <span aria-hidden className="text-lg">&gt;</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="relative overflow-hidden rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/35 px-10 py-12 shadow-[var(--shadow-soft)]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-65"
            style={{
              background: `linear-gradient(165deg, ${designTokens.gradients.deepmind[0]}, transparent 55%), radial-gradient(90% 90% at 100% 0%, ${designTokens.gradients.deepmind[1]}, transparent 70%)`,
            }}
          />
          <div className="relative flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-[0.36em] text-[var(--color-muted)]/75">Process</span>
            <h3 className="text-[26px] font-semibold leading-tight text-[var(--color-foreground)]">
              Designed like a magazine, engineered like a platform.
            </h3>
            <p className="text-sm leading-relaxed text-[var(--color-muted)]">
              From component polish to automation resilience, Infera treats design, data, and developer ergonomics as a single quality bar. Every tab inherits a shared palette, motion spec, and narrative tone, making the product feel like a thoughtful publication rather than a stitched dashboard.
            </p>
            <ul className="mt-2 space-y-3 text-sm text-[var(--color-muted)]">
              <li>- Framer Motion choreography for hovers, entrances, and summary reveals.</li>
              <li>- Search, learn, and model taxonomies aligned for cross-linking and personalization.</li>
              <li>- Observability-first ingestion so fresh data lands with confidence.</li>
            </ul>
          </div>
        </article>
        <article className="flex flex-col gap-6 rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/50 bg-[var(--color-surface)]/45 px-10 py-12 shadow-[var(--shadow-soft)]">
          <span className="text-xs font-semibold uppercase tracking-[0.36em] text-[var(--color-muted)]/75">Launch Checklist</span>
          <div className="flex flex-col gap-4 text-sm text-[var(--color-muted)]">
            <p>- Align visual language across tabs with bespoke gradient art and tonality.</p>
            <p>- Finalize ingestion QA and expand to GitHub/Arxiv feeds for next-phase breadth.</p>
            <p>- Extend comparisons with MT-Bench and persona overlays to enrich storytelling.</p>
            <p>- Package the weekly digest as a shareable PDF and email template for executive-ready distribution.</p>
          </div>
          <div className="mt-auto text-xs uppercase tracking-[0.36em] text-[var(--color-muted)]/65">
            Phase One - MVP Complete - Growth Iteration In Progress
          </div>
        </article>
      </section>
    </div>
  );
}
