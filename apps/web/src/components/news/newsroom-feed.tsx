"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { NewsPayload } from "@ai-helper/types";
import { motion } from "framer-motion";

import { fetchNewsPayload } from "@/lib/api";
import { designTokens } from "@/lib/design/tokens";
import { formatFullDate, formatNumber, formatSignedNumber } from "@/lib/format";

type NewsroomFeedProps = {
  initial: NewsPayload;
  refreshIntervalMs?: number;
};

const DEFAULT_REFRESH_INTERVAL = 2 * 60 * 1000; // 2 minutes

const articleListVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const articleItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function NewsroomFeed({ initial, refreshIntervalMs = DEFAULT_REFRESH_INTERVAL }: NewsroomFeedProps) {
  const [payload, setPayload] = useState(initial);
  const [lastUpdated, setLastUpdated] = useState<Date>(() => new Date(initial.articles[0]?.publishedAt ?? Date.now()));
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sourceLookup = useMemo(
    () => new Map(payload.sources.map((source) => [source.id, source])),
    [payload.sources],
  );

  const getGradient = useCallback((sourceId: string | undefined) => {
    const source = sourceId ? sourceLookup.get(sourceId) : undefined;
    const gradient = source?.gradient ?? designTokens.gradients.digest;
    return `linear-gradient(140deg, ${gradient.join(", ")})`;
  }, [sourceLookup]);

  const refresh = useCallback(
    async (showSpinner = true) => {
      if (showSpinner) {
        setIsRefreshing(true);
      }
      try {
        const nextPayload = await fetchNewsPayload(30);
        const hasChanged =
          nextPayload.articles.length !== payload.articles.length ||
          nextPayload.articles.some((article, index) => article.id !== payload.articles[index]?.id);

        if (hasChanged) {
          setPayload(nextPayload);
          const publishedAt = nextPayload.articles[0]?.publishedAt;
          setLastUpdated(new Date(publishedAt ?? Date.now()));
        }
        setError(null);
      } catch (err) {
        if (process.env.NODE_ENV !== "production") {
          console.warn("[NewsroomFeed] refresh failed", err);
        }
        setError(err instanceof Error ? err.message : "Unable to refresh feed");
      } finally {
        if (showSpinner) {
          setIsRefreshing(false);
        }
      }
    },
    [payload.articles],
  );

  useEffect(() => {
    if (refreshIntervalMs <= 0) return;
    const id = setInterval(() => {
      void refresh(false);
    }, refreshIntervalMs);
    return () => clearInterval(id);
  }, [refresh, refreshIntervalMs]);

  const { digest, articles, sources } = payload;

  return (
    <section className="flex flex-col gap-16">
      <header className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-3">
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/40 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.42em] text-[var(--color-muted)]/85"
          >
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-[var(--accent-secondary)]" aria-hidden />
            Live Signal Deck
          </motion.span>
          <span className="text-xs uppercase tracking-[0.32em] text-[var(--color-muted)]/70">
            Updated {formatFullDate(lastUpdated)}
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-semibold text-[var(--color-foreground)] sm:text-[42px]">
            AI Newsroom Briefings
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
            Trusted coverage from official AI labs and ecosystem partners. We ingest verified RSS feeds, score launches,
            and package rapid-fire summaries so you can stay in the product without doomscrolling.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => refresh()}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)]/70 bg-[var(--color-surface)]/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]/80 transition hover:text-[var(--color-foreground)]"
            disabled={isRefreshing}
          >
            <span
              className={`h-2 w-2 rounded-full ${isRefreshing ? "bg-[var(--accent-secondary)] animate-ping" : "bg-[var(--accent-secondary)]"}`}
            />
            Refresh
          </button>
          {error ? (
            <span className="text-xs text-[var(--accent-quaternary)]">
              {error}
            </span>
          ) : null}
        </div>
      </header>

      {digest ? (
        <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr]">
          <article className="relative overflow-hidden rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/50 px-12 py-10 shadow-[var(--shadow-soft)]">
            <div
              aria-hidden
              className="absolute inset-0 opacity-80"
              style={{ background: `linear-gradient(140deg, ${designTokens.gradients.digest.join(", ")})` }}
            />
            <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="mesh-flow absolute -inset-10 rounded-full" />
            </div>
            <div className="relative flex h-full flex-col gap-6 text-white">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.4em] text-white/70">
                <span>Weekly Digest</span>
                <span>{digest.articleIds.length} STORIES</span>
              </div>
              <div className="space-y-3">
                <h2 className="text-3xl font-semibold leading-tight">{digest.headline}</h2>
                <p className="text-base text-white/80">{digest.summary}</p>
              </div>
              <div className="mt-auto flex flex-wrap gap-3 text-[11px] text-white/80">
                {digest.articleIds.map((articleId) => {
                  const article = articles.find((item) => item.id === articleId);
                  if (!article) return null;
                  const source = sourceLookup.get(article.sourceId);
                  return (
                    <span key={articleId} className="rounded-full border border-white/25 bg-white/10 px-3 py-1">
                      {source?.name ?? "Unknown"}
                    </span>
                  );
                })}
              </div>
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-white/65">
                <span className="inline-flex h-2 w-2 rounded-full bg-white/80" aria-hidden />
                Auto-built every Sunday 18:00 UTC
              </div>
            </div>
          </article>

          <aside className="flex h-full flex-col gap-6 rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/40 px-10 py-8 shadow-[var(--shadow-soft)]">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.38em] text-[var(--color-muted)]/75">
                Ingestion Approach
              </span>
              <h3 className="text-xl font-semibold text-[var(--color-foreground)]">Cron-staged, QA-reviewed</h3>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                Thirty-minute RSS pulls, structured summaries, and delta scoring for GitHub repos keep this feed aligned
                with primary sources. Prometheus-backed metrics and alerting ensure reliability.
              </p>
            </div>
            <div className="rounded-[var(--radius-xl)] border border-[var(--border-soft)]/50 bg-[var(--color-surface-elevated)]/40 p-6 text-sm text-[var(--color-muted)]">
              <p className="font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]/80">Source Mix</p>
              <ul className="mt-4 space-y-2">
                {sources.slice(0, 4).map((source) => (
                  <li key={source.id} className="flex items-center justify-between">
                    <span>{source.name}</span>
                    <span className="text-[var(--color-muted)]/70">Weight {source.weight.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      ) : null}

      <motion.div
        className="grid gap-6 md:grid-cols-2"
        variants={articleListVariants}
        initial="hidden"
        animate="visible"
      >
        {articles.map((article) => {
          const source = sourceLookup.get(article.sourceId);
          return (
            <motion.article
              key={article.id}
              className="group relative overflow-hidden rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/55 bg-[var(--color-surface)]/40 p-6 shadow-[var(--shadow-soft)] outline-none transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-depth)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent-secondary)]/60"
              tabIndex={0}
              data-hotkey-target="news-card"
              variants={articleItemVariants}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-80"
                style={{ background: getGradient(article.sourceId) }}
              />
              <div className="relative flex h-full flex-col gap-6">
                <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]/80">
                  <span>{source?.name ?? "Unknown Source"}</span>
                  <span>{formatFullDate(new Date(article.publishedAt))}</span>
                </div>
                <h3 className="text-2xl font-semibold leading-snug text-[var(--color-foreground)]">{article.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">{article.summary}</p>
                <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.32em] text-[var(--color-muted)]/80">
                  {article.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[var(--border-soft)]/60 bg-white/5 px-3 py-1 text-white/80">
                      {tag}
                    </span>
                  ))}
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white/80">
                    Score {article.score.toFixed(1)}
                  </span>
                </div>
                <div className="mt-auto flex flex-col gap-3 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
                  {article.githubRepo ? (
                    <span className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                      <span className="font-medium text-[var(--color-foreground)]/90">
                        {article.githubRepo.fullName}
                      </span>
                      <span className="text-[var(--color-muted)]/75">
                        {formatNumber(article.githubRepo.stars)} stars ({formatSignedNumber(article.githubRepo.deltaStars)})
                      </span>
                    </span>
                  ) : (
                    <span className="text-[var(--color-muted)]/70">Official release only</span>
                  )}
                  <Link
                    href={`/news/${article.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-foreground)] transition-colors duration-200 hover:text-white"
                  >
                    Deep dive
                    <span aria-hidden className="text-lg">&gt;</span>
                  </Link>
                </div>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}

