"use client";

import { useMemo, useState } from "react";
import type { ModelDirectoryEntry } from "@ai-helper/types";

import { designTokens } from "@/lib/design/tokens";
import { formatMonthYear, formatNumber } from "@/lib/format";

type FilterSet = {
  providers: Set<string>;
  licenses: Set<string>;
  deployments: Set<string>;
};

const EMPTY_FILTERS: FilterSet = {
  providers: new Set(),
  licenses: new Set(),
  deployments: new Set(),
};

const providerGradients: Record<string, readonly string[]> = {
  OpenAI: designTokens.gradients.aurora,
  Anthropic: designTokens.gradients.ember,
  "Google DeepMind": designTokens.gradients.horizon,
  "Mistral AI": designTokens.gradients.hero,
  Meta: designTokens.gradients.deepmind,
  Microsoft: designTokens.gradients.digest,
  Databricks: designTokens.gradients.xai,
  "Amazon AWS": designTokens.gradients.horizon,
  NVIDIA: designTokens.gradients.aurora,
};

function toCurrency(value: number | undefined, currency = "USD") {
  if (value === undefined) return null;
  return new Intl.NumberFormat("en", { style: "currency", currency }).format(value);
}

function toggle(set: Set<string>, value: string): Set<string> {
  const next = new Set(set);
  if (next.has(value)) {
    next.delete(value);
  } else {
    next.add(value);
  }
  return next;
}

interface ModelDirectoryBoardProps {
  models: ModelDirectoryEntry[];
}

export function ModelDirectoryBoard({ models }: ModelDirectoryBoardProps) {
  const [filters, setFilters] = useState<FilterSet>(EMPTY_FILTERS);

  const providers = useMemo(
    () => Array.from(new Set(models.map((model) => model.provider))).sort(),
    [models],
  );
  const licenses = useMemo(
    () => Array.from(new Set(models.map((model) => model.licensing))).sort(),
    [models],
  );
  const deployments = useMemo(
    () => Array.from(new Set(models.map((model) => model.deployment))).sort(),
    [models],
  );

  const filteredModels = useMemo(() => {
    return models.filter((model) => {
      const providerMatch = filters.providers.size === 0 || filters.providers.has(model.provider);
      const licenseMatch = filters.licenses.size === 0 || filters.licenses.has(model.licensing);
      const deploymentMatch = filters.deployments.size === 0 || filters.deployments.has(model.deployment);
      return providerMatch && licenseMatch && deploymentMatch;
    });
  }, [models, filters]);

  const clearFilters = () => setFilters(EMPTY_FILTERS);
  const activeCount = filters.providers.size + filters.licenses.size + filters.deployments.size;

  return (
    <section className="flex flex-col gap-14">
      <header className="flex flex-col gap-4">
        <span className="text-xs font-semibold uppercase tracking-[0.42em] text-[var(--color-muted)]/80">Model Directory</span>
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold text-[var(--color-foreground)] sm:text-[42px]">
            Production Intelligence Cards
          </h1>
          <p className="max-w-3xl text-base text-[var(--color-muted)] sm:text-lg">
            Filter by provider, licensing posture, or deployment footprint to build a shortlist quickly. Every card mirrors the
            magazine-grade layout defined in the product spec so sourcing, engineering, and procurement stay on the same page.
          </p>
        </div>
      </header>

      <aside className="rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/45 px-8 py-10 shadow-[var(--shadow-soft)]">
        <div className="flex flex-col gap-6">
          <FilterGroup
            title="Provider"
            options={providers}
            selected={filters.providers}
            onToggle={(value) => setFilters((prev) => ({ ...prev, providers: toggle(prev.providers, value) }))}
          />
          <FilterGroup
            title="License"
            options={licenses}
            selected={filters.licenses}
            onToggle={(value) => setFilters((prev) => ({ ...prev, licenses: toggle(prev.licenses, value) }))}
          />
          <FilterGroup
            title="Deployment"
            options={deployments}
            selected={filters.deployments}
            onToggle={(value) => setFilters((prev) => ({ ...prev, deployments: toggle(prev.deployments, value) }))}
          />
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]/80">
            <span>
              {activeCount > 0 ? `${activeCount} active filter${activeCount > 1 ? "s" : ""}` : "Showing all models"}
            </span>
            {activeCount > 0 ? (
              <button
                type="button"
                onClick={clearFilters}
                className="rounded-full border border-[var(--border-soft)]/60 px-4 py-1 text-xs font-semibold text-[var(--color-foreground)]/80 transition hover:text-[var(--color-foreground)]"
              >
                Clear
              </button>
            ) : null}
          </div>
        </div>
      </aside>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredModels.map((model) => {
          const gradient = providerGradients[model.provider] ?? designTokens.gradients.hero;
          const inputPrice = toCurrency(model.pricing.input, model.pricing.currency);
          const outputPrice = toCurrency(model.pricing.output, model.pricing.currency);
          const flatRate = toCurrency(model.pricing.flatRate, model.pricing.currency);

          return (
            <article
              key={model.id}
              className="group relative flex h-full flex-col gap-6 overflow-hidden rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/45 px-8 py-10 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-depth)]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-65 transition duration-300 group-hover:opacity-90"
                style={{
                  background: `radial-gradient(120% 120% at 0% 0%, ${gradient[0]}, transparent 70%), radial-gradient(120% 120% at 100% 100%, ${gradient[gradient.length - 1]}, transparent 70%)`,
                }}
              />
              <div className="relative flex flex-col gap-6">
                <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]/80">
                  <span>{model.provider}</span>
                  <span>{formatMonthYear(model.releaseDate)}</span>
                </div>
                <h2 className="text-[22px] font-semibold text-[var(--color-foreground)]">{model.name}</h2>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                  Context {formatNumber(model.contextWindow)} tokens | {model.licensing} | {model.deployment}
                </p>
                <div className="text-sm text-[var(--color-foreground)]/85">
                  {inputPrice ? <p>Input: {inputPrice} per 1M tokens</p> : null}
                  {outputPrice ? <p>Output: {outputPrice} per 1M tokens</p> : null}
                  {flatRate ? <p>Requests: {flatRate} per 1M</p> : null}
                </div>
                <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/80">
                  {model.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/20 bg-white/10 px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={model.website}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] text-white/80 transition hover:text-white"
                >
                  Visit model page
                  <span aria-hidden className="text-sm">&gt;</span>
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

interface FilterGroupProps {
  title: string;
  options: string[];
  selected: Set<string>;
  onToggle: (value: string) => void;
}

function FilterGroup({ title, options, selected, onToggle }: FilterGroupProps) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--color-foreground)]">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const active = selected.has(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => onToggle(option)}
              className={`rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] transition ${
                active
                  ? "border-[var(--color-accent-secondary)]/60 bg-[var(--color-accent-secondary)]/20 text-white"
                  : "border-[var(--border-soft)]/60 text-[var(--color-muted)]/80 hover:border-[var(--color-accent-secondary)]/50 hover:text-[var(--color-foreground)]"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

