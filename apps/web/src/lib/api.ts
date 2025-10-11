import {
  comparisonConfigSchema,
  learnTrackSchema,
  modelDirectoryEntrySchema,
  modelProfileSchema,
  newsArticleDetailSchema,
  newsPayloadSchema,
} from "@ai-helper/types";
import type {
  ComparisonConfig,
  LearnTrack,
  ModelDirectoryEntry,
  ModelProfile,
  NewsArticleDetail,
  NewsPayload,
} from "@ai-helper/types";

import { comparisonConfig as fallbackComparisonConfig, modelProfiles as fallbackModelProfiles } from "@/data/comparison-config";
import { learnTracks as fallbackLearnTracks } from "@/data/learn-tracks";
import { modelDirectory as fallbackModelDirectory } from "@/data/models";
import { newsSources, placeholderNews, weeklyDigest } from "@/data/news";

function resolveApiBaseUrl() {
  if (typeof window !== "undefined") {
    const clientUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!clientUrl) {
      throw new Error(
        "NEXT_PUBLIC_API_URL must be set to call the AI Helper API from the browser.",
      );
    }
    return clientUrl;
  }

  const serverUrl =
    process.env.AI_HELPER_API_URL ??
    process.env.NEXT_PUBLIC_API_URL ??
    process.env.API_BASE_URL;

  if (!serverUrl) {
    throw new Error(
      "API base URL is not configured. Set AI_HELPER_API_URL (or NEXT_PUBLIC_API_URL) before invoking the data layer.",
    );
  }

  return serverUrl;
}

function buildStaticNewsPayload(): NewsPayload {
  const digest = weeklyDigest ? weeklyDigest : null;
  const articles = placeholderNews.map((article) => ({
    ...article,
    githubRepo: article.githubRepo ?? undefined,
    heroImage: article.heroImage ?? undefined,
  }));

  return newsPayloadSchema.parse({
    sources: newsSources,
    articles,
    digest,
  });
}

function buildStaticComparisonConfig(): ComparisonConfig {
  return comparisonConfigSchema.parse(fallbackComparisonConfig);
}

function buildStaticModelProfiles(): ModelProfile[] {
  return fallbackModelProfiles.map((profile) => modelProfileSchema.parse(profile));
}

function buildStaticLearnTracks(): LearnTrack[] {
  return fallbackLearnTracks.map((track) => learnTrackSchema.parse(track));
}

function buildStaticModelDirectory(): ModelDirectoryEntry[] {
  return fallbackModelDirectory.map((entry) => modelDirectoryEntrySchema.parse(entry));
}

type PricingAccumulator = {
  currency: string;
  input?: number;
  output?: number;
  flatRate?: number;
};

async function requestJson(path: string, revalidateSeconds: number | undefined): Promise<unknown> {
  const baseUrl = resolveApiBaseUrl();
  const endpoint = `${baseUrl}${path}`;
  const options: RequestInit & { next?: { revalidate?: number } } = {};
  if (revalidateSeconds !== undefined) {
    options.next = { revalidate: revalidateSeconds };
  } else {
    options.cache = "no-store";
  }
  const response = await fetch(endpoint, options);
  if (!response.ok) {
    throw new Error(`Request to ${endpoint} failed with status ${response.status}`);
  }
  return response.json();
}

async function fetchLiveNewsFallback(): Promise<NewsPayload | null> {
  try {
    if (typeof window === "undefined") {
      const liveNewsModule = await import("./live-news");
      return await liveNewsModule.buildLiveNewsPayload();
    }

    const response = await fetch("/api/news/live", {
      cache: "no-store",
    });
    if (!response.ok) {
      return null;
    }
    const data = await response.json();
    return newsPayloadSchema.parse(data);
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        `[fetchLiveNewsFallback] Unable to load live news: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    }
    return null;
  }
}

export async function fetchNewsPayload(revalidateSeconds = 60): Promise<NewsPayload> {
  try {
    const data = await requestJson("/news", revalidateSeconds);
    return newsPayloadSchema.parse(data);
  } catch (error) {
    const livePayload = await fetchLiveNewsFallback();
    if (livePayload) {
      return livePayload;
    }

    if (process.env.NODE_ENV !== "production") {
      console.warn(
        `[fetchNewsPayload] Falling back to static dataset: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      );
    }
    return buildStaticNewsPayload();
  }
}

export async function fetchNewsArticleDetail(
  slug: string,
  revalidateSeconds = 60,
): Promise<NewsArticleDetail> {
  try {
    const data = await requestJson(`/news/${slug}`, revalidateSeconds);
    return newsArticleDetailSchema.parse(data);
  } catch (error) {
    const livePayload = await fetchLiveNewsFallback();
    if (livePayload) {
      const article = livePayload.articles.find((item) => item.slug === slug);
      if (article) {
        const source = livePayload.sources.find((item) => item.id === article.sourceId) ?? null;
        const related = livePayload.articles.filter((item) => item.slug !== slug).slice(0, 6);
        return newsArticleDetailSchema.parse({
          article,
          source,
          related,
        });
      }
    }

    if (process.env.NODE_ENV !== "production") {
      console.warn(
        `[fetchNewsArticleDetail] Falling back to static dataset: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      );
    }
    const fallback = buildStaticNewsPayload();
    const article = fallback.articles.find((item) => item.slug === slug);
    if (!article) {
      throw error instanceof Error ? error : new Error("Article not found");
    }
    const source = fallback.sources.find((item) => item.id === article.sourceId) ?? null;
    const related = fallback.articles.filter((item) => item.slug !== slug).slice(0, 6);
    return newsArticleDetailSchema.parse({
      article,
      source,
      related,
    });
  }
}

export async function fetchComparisonConfig(revalidateSeconds = 3600): Promise<ComparisonConfig> {
  try {
    const data = await requestJson("/comparisons/config", revalidateSeconds);
    return comparisonConfigSchema.parse(data);
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        `[fetchComparisonConfig] Falling back to static dataset: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      );
    }
    return buildStaticComparisonConfig();
  }
}

export async function fetchComparisonModels(revalidateSeconds = 3600): Promise<ModelProfile[]> {
  try {
    const data = await requestJson("/comparisons/models", revalidateSeconds);
    return Array.isArray(data) ? data.map((item) => modelProfileSchema.parse(item)) : buildStaticModelProfiles();
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        `[fetchComparisonModels] Falling back to static dataset: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      );
    }
    return buildStaticModelProfiles();
  }
}

export async function fetchLearnTracks(revalidateSeconds = 3600): Promise<LearnTrack[]> {
  try {
    const data = await requestJson("/learn/tracks", revalidateSeconds);
    return Array.isArray(data) ? data.map((item) => learnTrackSchema.parse(item)) : buildStaticLearnTracks();
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        `[fetchLearnTracks] Falling back to static dataset: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      );
    }
    return buildStaticLearnTracks();
  }
}

export async function fetchModelDirectory(revalidateSeconds = 3600): Promise<ModelDirectoryEntry[]> {
  try {
    const data = await requestJson("/comparisons/models", revalidateSeconds);
    if (!Array.isArray(data)) {
      return buildStaticModelDirectory();
    }
    return data.map((item) => {
      const pricing = item.pricing.reduce(
        (acc: PricingAccumulator, tier: { tier: string; pricePerMillion: number; currency?: string }) => {
          const currency = tier.currency ?? acc.currency;
          acc.currency = currency;
          if (tier.tier === "input") acc.input = tier.pricePerMillion;
          if (tier.tier === "output") acc.output = tier.pricePerMillion;
          if (tier.tier === "requests") acc.flatRate = tier.pricePerMillion;
          return acc;
        },
        { currency: "USD" } as PricingAccumulator,
      );

      return modelDirectoryEntrySchema.parse({
        id: item.id,
        name: item.name,
        provider: item.provider,
        releaseDate: item.releaseDate,
        contextWindow: item.contextWindow,
        pricing,
        licensing:
          item.license === "open-source"
            ? "open-source"
            : item.license === "proprietary"
            ? "proprietary"
            : "mixed",
        deployment: item.availability,
        website: item.website ?? item.sources[0] ?? "https://example.com",
        tags: item.context.modalities,
        sourceUrls: item.sources,
      });
    });
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        `[fetchModelDirectory] Falling back to static dataset: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      );
    }
    return buildStaticModelDirectory();
  }
}

