"use client";

import { useCallback, useEffect, useMemo, useState, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { Bar, BarChart, CartesianGrid, LabelList, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ChevronDown, BarChart2, Check } from "lucide-react";

import type { ComparisonConfig, ModelProfile } from "@ai-helper/types";

import { formatCurrency, formatDecimal, formatNumber, formatPercent } from "@/lib/format";
import { ErrorBoundary } from "@/components/system/error-boundary";
import { useAnalytics } from "@/lib/analytics";
import { designTokens } from "@/lib/design/tokens";

const MIN_SELECTION = 2;
const MAX_SELECTION = 4;
const INPUT_SHARE = 0.6;
const OUTPUT_SHARE = 1 - INPUT_SHARE;
const CHART_COLORS = Object.values(designTokens.chartPalette);

const TAB_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "charts", label: "Charts" },
  { id: "pricing", label: "Pricing" },
  { id: "summary", label: "Summary" },
] as const;

type TabId = (typeof TAB_ITEMS)[number]["id"];

const TAB_MOTIFS: Record<
  TabId,
  {
    gradient: string;
    accent: string;
    vignette: string;
  }
> = {
  overview: {
    gradient: "radial-gradient(140% 120% at 10% -20%, rgba(37, 99, 235, 0.28), transparent 60%), radial-gradient(120% 120% at 92% 0%, rgba(6, 182, 212, 0.24), transparent 55%)",
    accent: "linear-gradient(135deg, rgba(148, 163, 184, 0.18), rgba(15, 23, 42, 0))",
    vignette: "radial-gradient(120% 120% at 50% 90%, rgba(15, 23, 42, 0.55), transparent 65%)",
  },
  charts: {
    gradient: "radial-gradient(120% 120% at 0% 0%, rgba(139, 92, 246, 0.32), transparent 60%), radial-gradient(120% 120% at 95% 25%, rgba(37, 99, 235, 0.26), transparent 56%)",
    accent: "linear-gradient(150deg, rgba(14, 165, 233, 0.2), rgba(15, 23, 42, 0))",
    vignette: "radial-gradient(120% 110% at 50% 100%, rgba(8, 13, 26, 0.58), transparent 60%)",
  },
  pricing: {
    gradient: "radial-gradient(130% 120% at 5% 5%, rgba(16, 185, 129, 0.28), transparent 58%), radial-gradient(120% 120% at 102% -10%, rgba(245, 158, 11, 0.22), transparent 64%)",
    accent: "linear-gradient(130deg, rgba(255, 255, 255, 0.18), rgba(30, 41, 59, 0))",
    vignette: "radial-gradient(120% 115% at 50% 96%, rgba(10, 12, 20, 0.52), transparent 62%)",
  },
  summary: {
    gradient: "radial-gradient(115% 120% at 0% 15%, rgba(6, 182, 212, 0.28), transparent 52%), radial-gradient(130% 120% at 100% 20%, rgba(37, 99, 235, 0.26), transparent 64%)",
    accent: "linear-gradient(160deg, rgba(148, 163, 184, 0.24), rgba(15, 23, 42, 0))",
    vignette: "radial-gradient(120% 110% at 50% 100%, rgba(8, 13, 26, 0.55), transparent 60%)",
  },
} as const;

const PROGRESS_RADIUS = 26;
const PROGRESS_CIRCUMFERENCE = 2 * Math.PI * PROGRESS_RADIUS;
type ComparisonModel = ModelProfile;
type BenchmarkConfig = ComparisonConfig["benchmarks"][number];

type NormalizedScoreEntry = {
  model: ComparisonModel;
  average: number | null;
};

interface ComparisonExperienceProps {
  config: ComparisonConfig;
  models: ModelProfile[];
}

type BenchmarkChartRow = {
  modelId: string;
  name: string;
  provider: string;
  value: number;
  formatted: string;
  color: string;
};

interface PricingRow {
  id: string;
  name: string;
  provider: string;
  currency: string;
  inputRate?: number;
  outputRate?: number;
  requestRate?: number;
  estimatedMonthly: number;
}

function getBenchmarkScore(model: ComparisonModel, benchmarkId: string) {
  return model.benchmarks.find((entry) => entry.benchmarkId === benchmarkId);
}

function formatSourceLabel(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}
function computePricingRows(models: ComparisonModel[], usageMillions: number): PricingRow[] {
  return models.map((model) => {
    const tiers = Object.fromEntries(model.pricing.map((tier) => [tier.tier, tier]));
    const currency = tiers.input?.currency ?? tiers.output?.currency ?? tiers.requests?.currency ?? "USD";

    const inputCost = tiers.input ? usageMillions * INPUT_SHARE * tiers.input.pricePerMillion : 0;
    const outputCost = tiers.output ? usageMillions * OUTPUT_SHARE * tiers.output.pricePerMillion : 0;
    const requestCost = tiers.requests ? usageMillions * tiers.requests.pricePerMillion : 0;

    return {
      id: model.id,
      name: model.name,
      provider: model.provider,
      currency,
      inputRate: tiers.input?.pricePerMillion,
      outputRate: tiers.output?.pricePerMillion,
      requestRate: tiers.requests?.pricePerMillion,
      estimatedMonthly: inputCost + outputCost + requestCost,
    };
  });
}

function calcAverageNormalized(model: ComparisonModel, benchmarks: BenchmarkConfig[]) {
  if (!benchmarks.length) return null;
  const values: number[] = [];

  benchmarks.forEach((benchmark) => {
    const score = getBenchmarkScore(model, benchmark.id);
    if (typeof score?.normalizedScore === "number") {
      values.push(score.normalizedScore * 100);
    } else if (typeof score?.score === "number" && benchmark.unit === "%") {
      values.push(score.score);
    }
  });

  if (!values.length) return null;
  const average = values.reduce((sum, value) => sum + value, 0) / values.length;
  return average;
}

// Compact Benchmark Selector Component
function BenchmarkSelector({
  benchmarks,
  activeId,
  onChange
}: {
  benchmarks: BenchmarkConfig[];
  activeId: string;
  onChange: (id: string) => void
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeBenchmark = benchmarks.find(b => b.id === activeId) || benchmarks[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg border border-[var(--border-soft)]/50 bg-[var(--color-surface)]/50 px-4 py-2.5 text-sm font-medium text-[var(--color-foreground)] transition-colors hover:bg-[var(--color-surface-elevated)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-primary)]"
      >
        <span className="text-[var(--color-muted)] text-xs uppercase tracking-wider">Benchmark:</span>
        <span className="min-w-[120px] text-left">{activeBenchmark?.name}</span>
        <ChevronDown className={`h-4 w-4 text-[var(--color-muted)] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute left-0 top-full z-50 mt-2 max-h-[300px] w-[280px] overflow-y-auto rounded-xl border border-[var(--border-soft)] bg-[var(--color-surface-elevated)] p-1 shadow-2xl backdrop-blur-xl"
          >
            {benchmarks.map((benchmark) => (
              <button
                key={benchmark.id}
                onClick={() => {
                  onChange(benchmark.id);
                  setIsOpen(false);
                }}
                className={`flex w-full flex-col gap-1 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-[var(--color-surface-highlight)] ${activeId === benchmark.id ? "bg-[var(--color-surface-highlight-strong)]" : ""
                  }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${activeId === benchmark.id ? "text-[var(--color-accent-primary)]" : "text-[var(--color-foreground)]"}`}>
                    {benchmark.name}
                  </span>
                  {activeId === benchmark.id && <Check className="h-3.5 w-3.5 text-[var(--color-accent-primary)]" />}
                </div>
                <span className="text-xs text-[var(--color-muted)] line-clamp-1">{benchmark.description}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ComparisonExperience({ config, models }: ComparisonExperienceProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const analytics = useAnalytics();

  const tabParam = searchParams.get("tab");

  const [selectedIds, setSelectedIds] = useState<string[]>(() => {
    const modelsFromUrl = searchParams.get("models");
    if (modelsFromUrl) {
      const validIds = modelsFromUrl.split(",").filter((id) => models.some((m) => m.id === id));
      if (validIds.length >= MIN_SELECTION) {
        return validIds;
      }
    }
    return config.defaultModelIds;
  });

  const [activeTab, setActiveTab] = useState<TabId>(
    tabParam && TAB_ITEMS.some((item) => item.id === tabParam) ? (tabParam as TabId) : "charts",
  );
  const [usageMillions, setUsageMillions] = useState(10);
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeBenchmarkId, setActiveBenchmarkId] = useState<string>(() => config.benchmarks[0]?.id ?? "");
  const [scoreMode, setScoreMode] = useState<"normalized" | "raw">("normalized");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    analytics.track("comparisons_model_selection", { modelIds: selectedIds });
  }, [analytics, selectedIds]);

  useEffect(() => {
    if (!isHydrated) return;
    const params = new URLSearchParams(searchParams);
    const modelsParam = selectedIds.join(",");
    if (params.get("models") === modelsParam) {
      return;
    }
    params.set("models", modelsParam);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, [isHydrated, selectedIds, pathname, router, searchParams]);

  useEffect(() => {
    analytics.track("comparisons_tab_change", { tab: activeTab });
  }, [analytics, activeTab]);

  useEffect(() => {
    if (!isHydrated) return;
    if (searchParams.get("tab") === activeTab) {
      return;
    }
    const params = new URLSearchParams(searchParams);
    params.set("tab", activeTab);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [activeTab, isHydrated, pathname, router, searchParams]);

  const benchmarks = config.benchmarks;

  useEffect(() => {
    if (!benchmarks.length) return;
    if (!benchmarks.some((benchmark) => benchmark.id === activeBenchmarkId)) {
      setActiveBenchmarkId(benchmarks[0].id);
    }
  }, [benchmarks, activeBenchmarkId]);

  const selectedModels = useMemo(() => {
    return selectedIds
      .map((id) => models.find((model) => model.id === id))
      .filter((model): model is ComparisonModel => Boolean(model));
  }, [selectedIds, models]);

  const pricingRows = useMemo(() => computePricingRows(selectedModels, usageMillions), [selectedModels, usageMillions]);

  const normalizedScores = useMemo<NormalizedScoreEntry[]>(
    () =>
      selectedModels.map((model) => ({
        model,
        average: calcAverageNormalized(model, benchmarks),
      })),
    [selectedModels, benchmarks]
  );

  const normalizedScoresSorted = useMemo(
    () =>
      normalizedScores
        .filter((entry): entry is { model: ComparisonModel; average: number } => typeof entry.average === "number")
        .sort((a, b) => b.average - a.average),
    [normalizedScores]
  );
  const benchmarkLeaders = useMemo(() => {
    return benchmarks.map((benchmark) => {
      const ordered = selectedModels
        .map((model) => {
          const score = getBenchmarkScore(model, benchmark.id);
          const rawScore = typeof score?.score === "number" ? score.score : null;
          const normalized =
            typeof score?.normalizedScore === "number"
              ? score.normalizedScore
              : typeof rawScore === "number" && benchmark.unit === "%"
                ? rawScore / 100
                : null;
          return {
            model,
            score: rawScore,
            normalized,
          };
        })
        .filter((entry) => typeof entry.normalized === "number")
        .sort((a, b) => (b.normalized ?? -Infinity) - (a.normalized ?? -Infinity));

      return {
        benchmark,
        leader: ordered[0] ?? null,
        runnerUp: ordered[1] ?? null,
      };
    });
  }, [benchmarks, selectedModels]);

  const averageLeaders = useMemo(() => {
    return selectedModels
      .map((model) => ({ model, average: calcAverageNormalized(model, benchmarks) }))
      .filter((entry): entry is { model: ComparisonModel; average: number } => typeof entry.average === "number")
      .sort((a, b) => b.average - a.average);
  }, [selectedModels, benchmarks]);

  const lowestCost = useMemo(() => {
    return [...pricingRows].sort((a, b) => a.estimatedMonthly - b.estimatedMonthly)[0];
  }, [pricingRows]);

  const tabPanelVariants = useMemo(
    () =>
      reduceMotion
        ? {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.0001 } },
          exit: { opacity: 0, transition: { duration: 0.0001 } },
        }
        : {
          hidden: { opacity: 0, y: 36, scale: 0.98, filter: "blur(18px)" },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
              duration: designTokens.motion.duration.medium / 1000,
              ease: designTokens.motion.easing.entrance,
            },
          },
          exit: {
            opacity: 0,
            y: -28,
            scale: 0.985,
            filter: "blur(10px)",
            transition: {
              duration: designTokens.motion.duration.fast / 1000,
              ease: designTokens.motion.easing.exit,
            },
          },
        },
    [reduceMotion]
  );

  const listItemVariants = useMemo(
    () =>
      reduceMotion
        ? {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.0001 } },
        }
        : {
          hidden: { opacity: 0, y: 14 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: designTokens.motion.duration.fast / 1000,
              ease: designTokens.motion.easing.standard,
            },
          },
        },
    [reduceMotion]
  );

  const progressStrokeTransition = useMemo(
    () =>
      reduceMotion
        ? { duration: 0.0001 }
        : {
          duration: designTokens.motion.duration.medium / 1000,
          ease: designTokens.motion.easing.standard,
        },
    [reduceMotion]
  );

  const tabHighlightTransition = useMemo(
    () =>
      reduceMotion
        ? { duration: 0.0001 }
        : {
          type: "spring",
          stiffness: 420,
          damping: 34,
          mass: 0.6,
        },
    [reduceMotion]
  );

  const activeTabMotif = useMemo(() => TAB_MOTIFS[activeTab], [activeTab]);

  const listContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: designTokens.motion.stagger.card,
        delayChildren: designTokens.motion.stagger.card,
      },
    },
  };

  function toggleModel(modelId: string) {
    setSelectedIds((current) => {
      const isActive = current.includes(modelId);
      if (isActive) {
        if (current.length <= MIN_SELECTION) return current;
        return current.filter((id) => id !== modelId);
      }

      if (current.length >= MAX_SELECTION) return current;
      return [...current, modelId];
    });
  }

  const getModelColor = useCallback(
    (modelId: string) => {
      const index = selectedIds.indexOf(modelId);
      return CHART_COLORS[index % CHART_COLORS.length] ?? "#2563EB";
    },
    [selectedIds]
  );

  const activeBenchmark = useMemo(() => {
    if (!benchmarks.length) return null;
    return benchmarks.find((benchmark) => benchmark.id === activeBenchmarkId) ?? benchmarks[0];
  }, [benchmarks, activeBenchmarkId]);

  const comparisonRows = useMemo<BenchmarkChartRow[]>(() => {
    if (!activeBenchmark) return [];

    return selectedModels.reduce<BenchmarkChartRow[]>((acc, model) => {
      const score = getBenchmarkScore(model, activeBenchmark.id);
      const normalized =
        typeof score?.normalizedScore === "number" ? score.normalizedScore * 100 : null;
      const raw = typeof score?.score === "number" ? score.score : null;
      const value = scoreMode === "normalized" ? normalized : raw;

      if (value !== null) {
        acc.push({
          modelId: model.id,
          name: model.name,
          provider: model.provider,
          value,
          formatted:
            scoreMode === "normalized"
              ? formatPercent(value)
              : activeBenchmark.unit === "%"
                ? formatPercent(value)
                : formatDecimal(value, activeBenchmark.unit === "score" ? 2 : 1),
          color: getModelColor(model.id),
        });
      }
      return acc;
    }, []).sort((a, b) => b.value - a.value);
  }, [activeBenchmark, scoreMode, selectedModels, getModelColor]);

  const comparisonMaxValue = useMemo(
    () => comparisonRows.reduce((max, row) => Math.max(max, row.value), 0),
    [comparisonRows]
  );

  // New Render Component for Chart with Restructured Layout
  const renderChartLayout = () => {
    const chartHasData = comparisonRows.length > 0;
    const chartUnit = scoreMode === "normalized" ? "%" : activeBenchmark?.unit ?? "";
    const tooltipFormatter = (value: number) =>
      scoreMode === "normalized" || chartUnit === "%"
        ? formatPercent(Number(value))
        : formatDecimal(Number(value), chartUnit === "score" ? 2 : 1);
    const yAxisMax =
      scoreMode === "normalized"
        ? 100
        : Math.max(
          chartUnit === "%" ? 100 : 0,
          comparisonMaxValue > 0 ? Math.ceil(comparisonMaxValue / 5) * 5 : 10,
        );

    return (
      <div className="flex flex-col gap-6">
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/80 p-4 shadow-[var(--shadow-soft)] backdrop-blur-md">
          <div className="flex items-center gap-4">
            <BenchmarkSelector
              benchmarks={benchmarks}
              activeId={activeBenchmarkId}
              onChange={setActiveBenchmarkId}
            />
            <div className="h-6 w-px bg-[var(--border-soft)]" />
            <div className="flex items-center gap-1">
              {(["normalized", "raw"] as const).map((mode) => {
                const isActive = scoreMode === mode;
                return (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setScoreMode(mode)}
                    aria-pressed={isActive}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${isActive
                      ? "bg-[var(--color-foreground)] text-[var(--color-background)]"
                      : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
                      }`}
                  >
                    {mode}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="text-xs text-[var(--color-muted)] italic max-w-sm text-right hidden lg:block">
            {scoreMode === "normalized"
              ? "Rescaled 0-100 for easy comparison"
              : `Raw benchmark unit: ${chartUnit}`}
          </div>
        </div>

        {/* Horizontal Leaderboard Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {normalizedScoresSorted.map(({ model, average }, index) => {
            const color = getModelColor(model.id);
            return (
              <div key={model.id} className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-soft)]/50 bg-[var(--color-surface)]/40 p-3 transition-transform hover:-translate-y-1">
                <div className="absolute left-0 top-0 h-full w-1" style={{ background: color }} />
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--color-muted)]">{model.provider}</span>
                    <span className="text-sm font-bold text-[var(--color-foreground)] line-clamp-1">{model.name}</span>
                    <span className="mt-1 flex items-center gap-1 text-[10px] text-[var(--color-muted)]/80">
                      <BarChart2 className="h-3 w-3" />
                      Rank #{index + 1}
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-lg font-bold text-[var(--color-foreground)]">{formatPercent(average)}</span>
                    <span className="text-[9px] uppercase tracking-wider text-[var(--color-muted)]">Avg</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Main Chart Area */}
        <div className="rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/80 p-6 shadow-[var(--shadow-depth)]">
          {chartHasData ? (
            <div className="h-[450px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={comparisonRows}
                  layout="vertical"
                  margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
                >
                  <CartesianGrid horizontal={false} strokeOpacity={0.1} />
                  <XAxis
                    type="number"
                    domain={[0, yAxisMax]}
                    stroke="currentColor"
                    strokeOpacity={0.3}
                    tick={{ fill: "currentColor", opacity: 0.6, fontSize: 11 }}
                    tickFormatter={(value) =>
                      scoreMode === "normalized" || chartUnit === "%"
                        ? `${Math.round(Number(value))}`
                        : formatDecimal(Number(value), chartUnit === "score" ? 2 : 1)
                    }
                  />
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={180}
                    stroke="none"
                    tick={{ fill: "currentColor", opacity: 0.9, fontSize: 13, fontWeight: 500 }}
                  />
                  <Tooltip
                    cursor={{ fill: "rgba(120,120,120,0.1)" }}
                    contentStyle={{
                      backgroundColor: "var(--color-surface-elevated)",
                      borderColor: "var(--border-soft)",
                      borderRadius: "12px",
                      boxShadow: "var(--shadow-soft)"
                    }}
                    itemStyle={{ color: "var(--color-foreground)" }}
                    formatter={(value: number | string) =>
                      typeof value === "number" ? tooltipFormatter(value) : value
                    }
                  />
                  <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={32}>
                    {comparisonRows.map((row) => (
                      <Cell key={row.modelId} fill={row.color} />
                    ))}
                    <LabelList
                      dataKey="formatted"
                      position="right"
                      style={{ fill: "var(--color-foreground)", fontSize: 12, fontWeight: 600, opacity: 0.8 }}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="flex h-64 items-center justify-center rounded-lg border border-dashed border-[var(--border-soft)] bg-white/5 p-8 text-center text-[var(--color-muted)]">
              No data available for this configuration.
            </div>
          )}
        </div>
      </div>
    );
  };

  const tabPanel = (() => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="grid gap-6 xl:grid-cols-[1.2fr_1fr]">
            <div className="rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]">
              <h3 className="text-lg font-medium text-[var(--color-foreground)]">Benchmark Coverage</h3>
              <div className="mt-4 grid gap-4 text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base">
                {benchmarks.map((benchmark) => (
                  <div key={benchmark.id} className="rounded-2xl bg-white/10 p-4">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-[var(--color-foreground)]/70">
                      <span>{benchmark.name}</span>
                      <span>{benchmark.higherIsBetter ? "Higher is better" : "Lower is better"}</span>
                    </div>
                    <p className="mt-2 text-[15px] leading-relaxed sm:text-base">{benchmark.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <aside className="rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]">
              <h3 className="text-lg font-medium text-[var(--color-foreground)]">Roadmap Highlights</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base">
                Upcoming phases expand coverage with MT-Bench, BBH, additional providers (Meta, Mistral), and introduce interactive prompt testing.
              </p>
              <div className="mt-4 grid gap-2 text-xs text-[var(--color-foreground)]/70">
                <span className="rounded-full bg-white/10 px-3 py-1">MT-Bench pipeline</span>
                <span className="rounded-full bg-white/10 px-3 py-1">GitHub + Arxiv scrapers</span>
                <span className="rounded-full bg-white/10 px-3 py-1">Playground prompt tester</span>
              </div>
            </aside>
          </div>
        );
      case "charts": {
        if (!isHydrated) {
          return (
            <div className="flex flex-col gap-6 animate-pulse">
              <div className="h-20 w-full rounded-xl bg-[var(--color-surface)]/40" />
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map(i => <div key={i} className="h-24 rounded-xl bg-[var(--color-surface)]/40" />)}
              </div>
              <div className="h-[400px] w-full rounded-xl bg-[var(--color-surface)]/40" />
            </div>
          );
        }
        return renderChartLayout(); // Use new layout
      }
      case "pricing":
        return (
          <div className="grid gap-6 xl:grid-cols-[320px_1fr]">
            <div className="rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]">
              <h3 className="text-lg font-medium text-[var(--color-foreground)]">Usage Assumptions</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base">
                Estimate spend based on millions of tokens processed per month (60% input / 40% output split by default).
              </p>
              <div className="mt-6 flex flex-col gap-4">
                <label className="flex flex-col gap-2 text-base text-[var(--color-foreground)]">
                  <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">Monthly tokens</span>
                  <input
                    type="range"
                    min={1}
                    max={100}
                    step={1}
                    value={usageMillions}
                    onChange={(event) => setUsageMillions(Number(event.target.value))}
                    className="w-full accent-[var(--color-accent-secondary)]"
                  />
                  <span className="text-[15px] leading-relaxed text-[var(--color-foreground)]/80 sm:text-base">
                    {formatNumber(usageMillions)}M tokens / month
                  </span>
                </label>
                <p className="text-xs text-[var(--color-muted)]">
                  Adjust the slider to reflect your workload. We assume 60% input tokens and 40% output tokens when both tiers are available.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)] shadow-[var(--shadow-soft)]">
              <div className="border-b border-[var(--border-soft)]/50 px-6 py-4">
                <h3 className="text-lg font-medium text-[var(--color-foreground)]">Estimated Monthly Spend</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-white/10 text-left text-[15px] leading-relaxed text-[var(--color-foreground)]/80 sm:text-base">
                  <thead className="bg-white/10 text-xs uppercase tracking-[0.3em] text-[var(--color-foreground)]/60">
                    <tr>
                      <th className="px-6 py-3">Model</th>
                      <th className="px-6 py-3">Input / 1M</th>
                      <th className="px-6 py-3">Output / 1M</th>
                      <th className="px-6 py-3">Requests / 1M</th>
                      <th className="px-6 py-3 text-right">Est. monthly</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {pricingRows.map((row) => {
                      const formatRate = (rate?: number) => {
                        if (typeof rate !== "number") return "-";
                        const hasFraction = Math.abs(rate % 1) > 0 || rate < 10;
                        const digits = hasFraction ? 2 : 0;
                        return formatCurrency(rate, row.currency, {
                          minimumFractionDigits: digits,
                          maximumFractionDigits: digits,
                        });
                      };
                      const monthlyDigits = row.estimatedMonthly < 100 ? 2 : 0;

                      return (
                        <tr key={row.id}>
                          <td className="px-6 py-4">
                            <div className="flex flex-col">
                              <span className="text-[var(--color-foreground)]">{row.name}</span>
                              <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-foreground)]/60">{row.provider}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">{formatRate(row.inputRate)}</td>
                          <td className="px-6 py-4">{formatRate(row.outputRate)}</td>
                          <td className="px-6 py-4">{formatRate(row.requestRate)}</td>
                          <td className="px-6 py-4 text-right font-semibold text-[var(--color-foreground)]">
                            {formatCurrency(row.estimatedMonthly, row.currency, {
                              minimumFractionDigits: monthlyDigits,
                              maximumFractionDigits: monthlyDigits,
                            })}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case "summary":
        return (
          <div className="grid gap-6 xl:grid-cols-[1.2fr_1fr]">
            <article className="rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]">
              <h3 className="text-lg font-medium text-[var(--color-foreground)]">Editorial TL;DR</h3>
              <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base">
                {averageLeaders[0] ? (
                  <p>
                    <span className="text-[var(--color-foreground)]">{averageLeaders[0].model.name}</span> leads the pack with an average benchmark score of {
                      " "
                    }
                    <span className="text-[var(--color-foreground)]">{formatPercent(averageLeaders[0].average)}</span> across the four headline tests.
                    {" "}
                    {averageLeaders[1]
                      ? `${averageLeaders[1].model.name} trails by ${formatDecimal(averageLeaders[0].average - averageLeaders[1].average)} points.`
                      : ""}
                  </p>
                ) : null}
                {benchmarkLeaders.map(({ benchmark, leader, runnerUp }) =>
                  leader && typeof leader.score === "number" ? (
                    <p key={benchmark.id}>
                      On {benchmark.name}, <span className="text-[var(--color-foreground)]">{leader.model.name}</span> posts {formatDecimal(leader.score)}
                      {benchmark.unit ?? "%"}
                      {runnerUp && typeof runnerUp.score === "number"
                        ? ` edging ${runnerUp.model.name} by ${formatDecimal(leader.score - runnerUp.score)} points.`
                        : " and sets the pace."}
                    </p>
                  ) : null
                )}
                {lowestCost ? (
                  <p>
                    For the assumed workload of {formatNumber(usageMillions)}M tokens, <span className="text-[var(--color-foreground)]">{lowestCost.name}</span> delivers the lowest monthly spend at {
                      " "
                    }
                    <span className="text-[var(--color-foreground)]">{formatCurrency(lowestCost.estimatedMonthly, lowestCost.currency)}</span>.
                  </p>
                ) : null}
              </div>
            </article>
            <aside className="rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]">
              <h3 className="text-lg font-medium text-[var(--color-foreground)]">Context Window & Notes</h3>
              <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base">
                {selectedModels.map((model) => (
                  <div key={model.id} className="rounded-2xl bg-white/10 p-4">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-[var(--color-foreground)]/70">
                      <span>{model.name}</span>
                      <span>{formatNumber(model.context.maxTokens ?? model.contextWindow)} tokens</span>
                    </div>
                    <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-foreground)]/80 sm:text-base">
                      Modalities: {model.context.modalities.join(", ")}
                    </p>
                    {model.context.notes ? <p className="mt-1 text-xs">{model.context.notes}</p> : null}
                  </div>
                ))}
              </div>
            </aside>
          </div>
        );
      default:
        return null;
    }
  })();

  return (
    <div className="flex flex-col gap-8">
      <section className="relative overflow-hidden rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/55 bg-[var(--color-surface)]/55 p-8 shadow-[var(--shadow-ambient)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-80 blur-3xl"
          style={{
            background:
              "radial-gradient(140% 120% at 0% 0%, rgba(37,99,235,0.25), transparent 60%), radial-gradient(120% 120% at 92% 0%, rgba(6,182,212,0.2), transparent 55%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(15, 23, 42, 0))",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            background:
              "radial-gradient(120% 120% at 50% 110%, rgba(8, 13, 26, 0.5), transparent 60%)",
          }}
        />
        <div className="relative z-10">
          <header className="flex flex-col gap-3">
            <span className="text-[11px] uppercase tracking-[0.38em] text-[var(--color-muted)]/80">
              Select models
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-[28px]">
              Compare up to four flagship models
            </h2>
            <p className="max-w-2xl text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base">
              Pick between {MIN_SELECTION} and {MAX_SELECTION} models to visualize benchmarks, pricing, and generate an editorial summary with magazine-grade polish.
            </p>
          </header>
          <motion.div
            className="mt-6 grid gap-3 md:grid-cols-2"
            variants={listContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {models.map((model) => {
              const isActive = selectedIds.includes(model.id);
              const disableAdd = !isActive && selectedIds.length >= MAX_SELECTION;
              const color = getModelColor(model.id);
              return (
                <motion.button
                  key={model.id}
                  type="button"
                  onClick={() => toggleModel(model.id)}
                  aria-pressed={isActive}
                  disabled={disableAdd}
                  className={`group relative overflow-hidden rounded-[var(--radius-xl)] border px-4 py-5 text-left transition ${isActive
                    ? "border-white/20 text-[var(--color-foreground)] shadow-[var(--shadow-soft)]"
                    : "border-[var(--border-soft)]/50 text-[var(--color-muted)] hover:border-white/25 hover:text-[var(--color-foreground)]"
                    } ${disableAdd ? "cursor-not-allowed opacity-50" : "backdrop-blur-sm"}`}
                  style={{
                    background: isActive
                      ? "linear-gradient(135deg, rgba(255,255,255,0.16), rgba(37, 99, 235, 0.16))"
                      : "linear-gradient(135deg, rgba(15, 23, 42, 0.55), rgba(15, 23, 42, 0.3))",
                  }}
                  layout
                  data-hotkey-target="comparison-model-option"
                  whileHover={
                    !disableAdd && !reduceMotion
                      ? { y: -4, boxShadow: "var(--shadow-depth)" }
                      : undefined
                  }
                  whileTap={
                    !disableAdd && !reduceMotion ? { scale: 0.985 } : undefined
                  }
                  transition={{ type: "spring", stiffness: 320, damping: 28 }}
                  variants={listItemVariants}
                >
                  <span
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-80 group-aria-[pressed=true]:opacity-90"
                    style={{
                      background:
                        "radial-gradient(110% 110% at 50% 0%, rgba(255,255,255,0.12), transparent 65%)",
                    }}
                  />
                  <span
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-60"
                    style={{
                      background:
                        "radial-gradient(140% 140% at 50% 100%, rgba(37, 99, 235, 0.28), transparent 70%)",
                    }}
                  />
                  <div className="relative flex items-center justify-between text-[11px] uppercase tracking-[0.3em]">
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full shadow-[0_0_16px_rgba(37,99,235,0.6)]" style={{ background: color }} />
                      {model.provider}
                    </span>
                    <span className="font-medium text-[var(--color-muted)]/80">
                      {new Date(model.releaseDate).getFullYear()}
                    </span>
                  </div>
                  <p className="mt-3 text-lg font-semibold tracking-tight">{model.name}</p>
                  <p className="text-xs text-[var(--color-muted)]">
                    Context {formatNumber(model.contextWindow)} tokens - Availability {model.availability}
                  </p>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <LayoutGroup id="comparison-tabs">
          <div
            role="tablist"
            aria-label="Comparison views"
            className="relative flex flex-wrap items-center gap-2 rounded-full border border-[var(--border-soft)]/50 bg-[var(--color-surface-glass)] px-1 py-1"
          >
            {TAB_ITEMS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  type="button"
                  role="tab"
                  layout="position"
                  aria-selected={isActive}
                  className={`relative overflow-hidden rounded-full px-6 py-2 text-[13px] font-semibold uppercase tracking-[0.32em] transition-[color,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)] ${isActive
                    ? "text-[var(--color-background)]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
                    }`}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={reduceMotion ? undefined : { scale: 1.015, transition: { duration: designTokens.motion.duration.hover / 1000, ease: designTokens.motion.easing.standard } }}
                  whileTap={reduceMotion ? undefined : { scale: 0.985, transition: { duration: designTokens.motion.duration.micro / 1000, ease: designTokens.motion.easing.exit } }}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="comparison-tab-indicator"
                      transition={tabHighlightTransition}
                      className="absolute inset-0 rounded-full border border-white/60 shadow-[0_18px_48px_rgba(15,23,42,0.26)]"
                      style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.96), rgba(229,231,235,0.94))",
                        backdropFilter: "blur(6px)",
                      }}
                    />
                  ) : null}
                  <span className="relative z-10">{tab.label}</span>
                </motion.button>
              );
            })}
          </div>
        </LayoutGroup>

        <AnimatePresence mode="wait">
          {tabPanel ? (
            <motion.div
              key={activeTab}
              layout
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={tabPanelVariants}
              className="relative w-full overflow-hidden rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/45 bg-[var(--color-surface)]/60 shadow-[var(--shadow-soft)]"
            >
              <span
                className="pointer-events-none absolute inset-0 opacity-80 transition-opacity duration-300"
                style={{ background: activeTabMotif.gradient }}
              />
              <span
                className="pointer-events-none absolute inset-0 opacity-70 mix-blend-overlay transition-opacity duration-500"
                style={{ background: activeTabMotif.accent }}
              />
              <span
                className="pointer-events-none absolute inset-0 opacity-70"
                style={{ background: activeTabMotif.vignette }}
              />
              <div className="relative z-10 p-6 sm:p-8">{tabPanel}</div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </section>

      {selectedModels.length ? (
        <section className="rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/40 p-8 shadow-[var(--shadow-soft)]">
          <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]/75">Source Notebook</span>
              <h3 className="text-lg font-semibold text-[var(--color-foreground)]">Evidence trail for the current comparison</h3>
            </div>
            <p className="max-w-xl text-xs leading-relaxed text-[var(--color-muted)]/80 sm:text-sm">
              Every card links to the official provider post, pricing announcement, or documentation confirming the figures above.
            </p>
          </header>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {selectedModels.map((model) => {
              const sources = Array.from(new Set(model.sources));
              return (
                <article
                  key={model.id}
                  className="flex h-full flex-col gap-4 rounded-[var(--radius-xl)] border border-[var(--border-soft)]/50 bg-[var(--color-surface-elevated)]/40 p-4"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]/70">
                      {model.provider}
                    </span>
                    <h4 className="text-sm font-semibold text-[var(--color-foreground)]">{model.name}</h4>
                  </div>
                  <ul className="flex flex-col gap-2 text-sm leading-relaxed text-[var(--color-foreground)]/85">
                    {sources.map((source) => (
                      <li key={source}>
                        <a
                          href={source}
                          target="_blank"
                          rel="noreferrer"
                          title={source}
                          className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)]/60 bg-[var(--color-background)]/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-foreground)]/85 transition hover:bg-white hover:text-[var(--color-background)]"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-foreground)]/60" aria-hidden />
                          {formatSourceLabel(source)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>
      ) : null}
    </div>
  );
}
