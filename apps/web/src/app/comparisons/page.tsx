import { Suspense } from "react";

import { ComparisonExperience } from "@/components/comparisons/comparison-experience";
import { fetchComparisonConfig, fetchComparisonModels } from "@/lib/api";

export default async function ComparisonsPage() {
  const [config, models] = await Promise.all([
    fetchComparisonConfig(600),
    fetchComparisonModels(600),
  ]);
  return (
    <section className="flex flex-col gap-14">
      <header className="flex flex-col gap-4">
        <span className="text-xs font-semibold uppercase tracking-[0.42em] text-[var(--color-muted)]/80">Model Benchmarks</span>
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold text-[var(--color-foreground)] sm:text-[42px]">LLM Benchmark Studio</h1>
          <p className="max-w-3xl text-base text-[var(--color-muted)] sm:text-lg">
            Select up to four flagship models, track how they land on MMLU, GSM8K, HumanEval, and HellaSwag, and estimate run-rate pricing with a single slider. The experience mirrors the editorial spec from <span className="font-semibold text-[var(--color-foreground)]">Agents.md.docx</span> so product, research, and finance stay aligned.
          </p>
        </div>
      </header>

      <Suspense
        fallback={
          <div className="rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/50 p-10 text-center text-sm text-[var(--color-muted)]">
            Preparing comparison studio…
          </div>
        }
      >
        <ComparisonExperience config={config} models={models} />
      </Suspense>
    </section>
  );
}
