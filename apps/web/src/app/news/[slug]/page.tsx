import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { fetchNewsArticleDetail } from "@/lib/api";
import { designTokens } from "@/lib/design/tokens";
import { formatFullDate, formatNumber, formatSignedNumber } from "@/lib/format";

export const dynamic = "force-dynamic";

interface PageProps {
  params: { slug: string };
}

async function loadDetail(slug: string) {
  try {
    return await fetchNewsArticleDetail(slug, 60);
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const detail = await loadDetail(params.slug);
  if (!detail) {
    return {
      title: "News article not found",
    };
  }
  return {
    title: `${detail.article.title} | News | Infera`,
    description: detail.article.summary,
  };
}

export default async function NewsArticlePage({ params }: PageProps) {
  const detail = await loadDetail(params.slug);
  if (!detail) {
    notFound();
  }
  const { article, source, related } = detail;

  const gradientColors = source?.gradient ?? designTokens.gradients.digest;
  const gradientBackground = `linear-gradient(135deg, ${gradientColors.join(", ")})`;
  const overlay = `radial-gradient(180% 120% at 0% 0%, ${gradientColors[0]}, transparent 80%), radial-gradient(160% 120% at 100% 0%, ${gradientColors[gradientColors.length - 1]}, transparent 70%)`;
  const heroBackground = article.heroImage
    ? `${overlay}, linear-gradient(160deg, rgba(15,23,42,0.85), rgba(15,23,42,0.6)), url(${article.heroImage})`
    : `linear-gradient(135deg, ${gradientColors[0]}, ${gradientColors[gradientColors.length - 1]})`;
  const bodyParagraphs = article.content.length ? article.content : [article.summary];
  const keyPoints = bodyParagraphs.slice(0, Math.min(4, bodyParagraphs.length));

  return (
    <section className="flex flex-col gap-14">
      <Link
        href="/news"
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)] transition hover:text-[var(--color-foreground)]"
      >
        <span aria-hidden>&lt;</span>
        Back to News
      </Link>

      <article className="overflow-hidden rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/55 shadow-[var(--shadow-soft)]">
        <div
          className="relative"
          style={{
            background: heroBackground,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(15,23,42,0.65)] to-[rgba(15,23,42,0.9)]" />
          <div className="relative flex flex-col gap-6 p-10 text-white sm:p-14">
            <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-white/75">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 font-semibold">
                {source?.name ?? "Official Source"}
              </span>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">
                Published {formatFullDate(article.publishedAt)}
              </span>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">
                Score {article.score.toFixed(1)}
              </span>
            </div>
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">{article.title}</h1>
            <p className="max-w-3xl text-base text-white/80 sm:text-lg">{article.summary}</p>
            <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.32em] text-white/70">
              {article.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/20 bg-white/10 px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-3 text-sm text-white/80 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] underline-offset-4 transition hover:underline"
              >
                Read official release
                <span aria-hidden>&gt;</span>
              </Link>
              {article.githubRepo ? (
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.32em]">
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">
                    {article.githubRepo.fullName}
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">
                    {formatNumber(article.githubRepo.stars)} stars ({formatSignedNumber(article.githubRepo.deltaStars)})
                  </span>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="grid gap-8 border-t border-[var(--border-soft)]/50 bg-[var(--color-surface)]/80 p-10 sm:p-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6 text-[var(--color-muted)]">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-[var(--color-foreground)]">Key Developments</h2>
              <p className="text-sm leading-relaxed sm:text-base">
                We aggregate the official release, highlight the essential updates, and keep the narrative anchored in
                verifiable sources.
              </p>
            </div>
            <ul className="space-y-4">
              {bodyParagraphs.map((paragraph, index) => (
                <li key={index} className="rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface-elevated)]/40 px-6 py-6 text-sm leading-relaxed sm:text-base">
                  {paragraph}
                </li>
              ))}
            </ul>
          </div>

          <aside className="flex flex-col gap-8">
            <div className="rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/60 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]/75">
                Snapshot
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-[var(--color-foreground)]/85">
                <li className="rounded-lg border border-[var(--border-soft)]/50 bg-[var(--color-surface-elevated)]/40 p-3">
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]/70">
                    Source
                  </span>
                  <span>{source?.name ?? "Official channel"}</span>
                </li>
                <li className="rounded-lg border border-[var(--border-soft)]/50 bg-[var(--color-surface-elevated)]/40 p-3">
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]/70">
                    Published
                  </span>
                  <span>{formatFullDate(article.publishedAt)}</span>
                </li>
                <li className="rounded-lg border border-[var(--border-soft)]/50 bg-[var(--color-surface-elevated)]/40 p-3">
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]/70">
                    Tags
                  </span>
                  <span>{article.tags.join(", ") || "General"}</span>
                </li>
              </ul>
            </div>

            <div className="rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/60 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]/75">
                Highlights
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--color-muted)]">
                {keyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </article>

      {related.length ? (
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-[var(--color-foreground)]">Related Coverage</h2>
            <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]/75">
              {related.length} Stories
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {related.slice(0, 4).map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.slug}`}
                className="group relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-soft)]/55 bg-[var(--color-surface)]/45 px-6 py-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-depth)]"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-70"
                  style={{ background: gradientBackground }}
                />
                <div className="relative flex flex-col gap-3">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]/75">
                    {formatFullDate(item.publishedAt)}
                  </span>
                  <h3 className="text-lg font-semibold text-[var(--color-foreground)]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">{item.summary}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-foreground)]">
                    Read more <span aria-hidden>&gt;</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </section>
  );
}
