import { z } from "zod";

export const modelDirectoryEntrySchema = z.object({
  id: z.string(),
  name: z.string(),
  provider: z.string(),
  releaseDate: z.string().date(),
  contextWindow: z.number().int().positive(),
  pricing: z.object({
    currency: z.string().default("USD"),
    input: z.number().nonnegative().optional(),
    output: z.number().nonnegative().optional(),
    flatRate: z.number().nonnegative().optional(),
  }),
  licensing: z.enum(["proprietary", "open-source", "mixed"]),
  deployment: z.enum(["api", "self-host", "hybrid"]),
  website: z.string().url(),
  tags: z.array(z.string()).default([]),
  sourceUrls: z.array(z.string().url()).min(1),
});

export type ModelDirectoryEntry = z.infer<typeof modelDirectoryEntrySchema>;

export const modelFilterSchema = z.object({
  providers: z.array(z.string()).optional(),
  license: z.array(z.enum(["proprietary", "open-source", "mixed"])).optional(),
  deployment: z.array(z.enum(["api", "self-host", "hybrid"])).optional(),
});

export type ModelFilter = z.infer<typeof modelFilterSchema>;
