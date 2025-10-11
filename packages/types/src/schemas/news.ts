import { z } from "zod";

export const newsSourceSchema = z.object({
  id: z.string(),
  name: z.string(),
  url: z.string().url(),
  gradient: z.tuple([z.string(), z.string()]),
  weight: z.number().min(0),
});

export type NewsSource = z.infer<typeof newsSourceSchema>;

export const newsArticleSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  sourceId: z.string(),
  url: z.string().url(),
  summary: z.string(),
  tags: z.array(z.string()).default([]),
  publishedAt: z.string().datetime(),
  githubRepo: z
    .object({
      fullName: z.string(),
      stars: z.number().int().min(0),
      deltaStars: z.number().int(),
    })
    .optional(),
  heroImage: z.string().url().optional(),
  score: z.number(),
  content: z.array(z.string()).default([]),
});

export type NewsArticle = z.infer<typeof newsArticleSchema>;

export const weeklyDigestSchema = z.object({
  weekOf: z.string().date(),
  headline: z.string(),
  summary: z.string(),
  articleIds: z.array(z.string()).max(10),
});

export type WeeklyDigest = z.infer<typeof weeklyDigestSchema>;

export const newsPayloadSchema = z.object({
  sources: z.array(newsSourceSchema),
  articles: z.array(newsArticleSchema),
  digest: weeklyDigestSchema.nullable(),
});

export type NewsPayload = z.infer<typeof newsPayloadSchema>;

export const newsArticleDetailSchema = z.object({
  article: newsArticleSchema,
  source: newsSourceSchema.nullable(),
  related: z.array(newsArticleSchema),
});

export type NewsArticleDetail = z.infer<typeof newsArticleDetailSchema>;
