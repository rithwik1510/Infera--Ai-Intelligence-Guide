import { comparisonConfig, modelProfiles } from "@/data/comparison-config";
import { learnTracks } from "@/data/learn-tracks";
import { modelDirectory } from "@/data/models";
import { newsSources, placeholderNews } from "@/data/news";
import { formatFullDate, formatNumber } from "@/lib/format";

export type SearchCategory = "news" | "comparisons" | "learn" | "models";

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  href: string;
  score: number;
  badge?: string;
  meta?: string;
  isExternal?: boolean;
}

export interface SearchGroup {
  category: SearchCategory;
  label: string;
  results: SearchResult[];
}

export interface SearchResponse {
  query: string;
  total: number;
  groups: SearchGroup[];
}

interface TokenizedQuery {
  raw: string;
  tokens: string[];
}

const SOURCE_LOOKUP = Object.fromEntries(newsSources.map((source) => [source.id, source]));

function tokenizeQuery(query: string): TokenizedQuery {
  const normalized = query.trim().toLowerCase();
  const tokens = normalized
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

  return { raw: normalized, tokens: Array.from(new Set(tokens)) };
}

function computeScore(tokens: string[], text: string | undefined, weight: number) {
  if (!text) return 0;
  const lower = text.toLowerCase();
  return tokens.reduce((score, token) => (lower.includes(token) ? score + weight : score), 0);
}

function searchNews(tokens: string[]) {
  if (!tokens.length) return [];

  return placeholderNews
    .map((article) => {
      const contentText = article.content ? article.content.join(" ") : "";
      const score =
        computeScore(tokens, article.title, 5) +
        computeScore(tokens, article.summary, 3) +
        computeScore(tokens, article.tags.join(" "), 2) +
        computeScore(tokens, contentText, 2);

      if (score <= 0) return null;

      const source = SOURCE_LOOKUP[article.sourceId];
      const metaParts = [formatFullDate(article.publishedAt), source?.name ?? article.sourceId].filter(Boolean);

      return {
        result: {
          id: article.id,
          title: article.title,
          description: article.summary,
          href: `/news/${article.slug}`,
          score,
          badge: source?.name ?? article.sourceId,
          meta: metaParts.join(" | ") || undefined,
          isExternal: false,
        },
        publishedAt: article.publishedAt,
      };
    })
    .filter((entry): entry is NonNullable<typeof entry> => entry !== null)
    .sort((a, b) => {
      if (b.result.score !== a.result.score) {
        return b.result.score - a.result.score;
      }
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    })
    .map((entry) => entry.result);
}

function searchComparisons(tokens: string[]) {
  if (!tokens.length) return [];

  const benchmarkMatches = comparisonConfig.benchmarks
    .map((benchmark) => {
      const score = computeScore(tokens, benchmark.name, 4) + computeScore(tokens, benchmark.description, 2);
      if (score <= 0) return null;
      return {
        id: `benchmark-${benchmark.id}`,
        title: benchmark.name,
        description: benchmark.description,
        href: "/comparisons",
        score,
        badge: benchmark.unit ? `${benchmark.unit}` : "Benchmark",
      } satisfies SearchResult;
    })
    .filter(Boolean) as SearchResult[];

  const modelMatches = modelProfiles
    .map((model) => {
      const score =
        computeScore(tokens, model.name, 5) +
        computeScore(tokens, model.provider, 3) +
        computeScore(tokens, model.context.notes ?? "", 2) +
        computeScore(tokens, model.benchmarks.map((entry) => entry.benchmarkId).join(" "), 1);

      if (score <= 0) return null;

      return {
        id: `comparison-model-${model.id}`,
        title: model.name,
        description: `${model.provider} | Context ${formatNumber(model.contextWindow)} tokens`,
        href: "/comparisons",
        score,
        badge: model.provider,
      } satisfies SearchResult;
    })
    .filter(Boolean) as SearchResult[];

  return [...benchmarkMatches, ...modelMatches].sort((a, b) => b.score - a.score);
}

function searchLearn(tokens: string[]) {
  if (!tokens.length) return [];

  const matches = learnTracks
    .map((track) => {
      const moduleTitles = track.modules.map((module) => module.title).join(" ");
      const moduleObjectives = track.modules.map((module) => module.objective).join(" ");
      const score =
        computeScore(tokens, track.title, 5) +
        computeScore(tokens, track.outcome, 3) +
        computeScore(tokens, moduleTitles, 2) +
        computeScore(tokens, moduleObjectives, 1);

      if (score <= 0) return null;

      return {
        id: `learn-${track.id}`,
        title: track.title,
        description: track.outcome,
        href: `/learn/${track.id}`,
        score,
        badge: track.level.toUpperCase(),
      } satisfies SearchResult;
    })
    .filter(Boolean) as SearchResult[];

  return matches.sort((a, b) => b.score - a.score);
}

function searchModels(tokens: string[]) {
  if (!tokens.length) return [];

  const matches = modelDirectory
    .map((model) => {
      const score =
        computeScore(tokens, model.name, 5) +
        computeScore(tokens, model.provider, 3) +
        computeScore(tokens, model.tags.join(" "), 2);

      if (score <= 0) return null;

      return {
        id: `model-${model.id}`,
        title: model.name,
        description: `${model.provider} | ${model.licensing} | ${model.deployment}`,
        href: "/models",
        score,
        badge: model.provider,
      } satisfies SearchResult;
    })
    .filter(Boolean) as SearchResult[];

  return matches.sort((a, b) => b.score - a.score);
}

export function searchContent(query: string, limitPerGroup = 50): SearchResponse {
  const { raw, tokens } = tokenizeQuery(query);

  if (!raw || !tokens.length) {
    return {
      query,
      total: 0,
      groups: [
        { category: "news", label: "News", results: [] },
        { category: "comparisons", label: "Comparisons", results: [] },
        { category: "learn", label: "Learn", results: [] },
        { category: "models", label: "Models", results: [] },
      ],
    };
  }

  const groups: SearchGroup[] = [
    { category: "news", label: "News", results: searchNews(tokens).slice(0, limitPerGroup) },
    { category: "comparisons", label: "Comparisons", results: searchComparisons(tokens).slice(0, limitPerGroup) },
    { category: "learn", label: "Learn", results: searchLearn(tokens).slice(0, limitPerGroup) },
    { category: "models", label: "Models", results: searchModels(tokens).slice(0, limitPerGroup) },
  ];

  const total = groups.reduce((sum, group) => sum + group.results.length, 0);

  return { query, total, groups };
}






