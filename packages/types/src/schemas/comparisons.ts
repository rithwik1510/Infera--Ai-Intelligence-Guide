
import { z } from "zod";

export const benchmarkSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  higherIsBetter: z.boolean(),
  unit: z.string().nullable(),
});

export type Benchmark = z.infer<typeof benchmarkSchema>;

export const pricingTierSchema = z.object({
  tier: z.enum(["input", "output", "requests"]),
  pricePerMillion: z.number().nonnegative(),
  currency: z.string().default("USD"),
});

export type PricingTier = z.infer<typeof pricingTierSchema>;

export const benchmarkScoreSchema = z.object({
  benchmarkId: z.string(),
  score: z.number().nullable(),
  normalizedScore: z.number().nullable(),
  source: z.string().url().nullable(),
});

export type BenchmarkScore = z.infer<typeof benchmarkScoreSchema>;

export const modelContextSchema = z.object({
  maxTokens: z.number().int().positive().nullable(),
  modalities: z.array(z.string()).default(["text"]),
  notes: z.string().nullable(),
});

export type ModelContext = z.infer<typeof modelContextSchema>;

export const modelProfileSchema = z.object({
  id: z.string(),
  name: z.string(),
  provider: z.string(),
  releaseDate: z.string(),
  contextWindow: z.number().int().positive(),
  license: z.string(),
  availability: z.enum(["api", "self-host", "hybrid"]),
  benchmarks: z.array(benchmarkScoreSchema),
  pricing: z.array(pricingTierSchema),
  context: modelContextSchema,
  website: z.string().url().nullable(),
  summary: z.string().nullable(),
  sources: z.array(z.string().url()).min(1),
});

export type ModelProfile = z.infer<typeof modelProfileSchema>;

export const comparisonConfigSchema = z.object({
  defaultModelIds: z.array(z.string()).min(2).max(4),
  benchmarks: z.array(benchmarkSchema),
});

export type ComparisonConfig = z.infer<typeof comparisonConfigSchema>;
