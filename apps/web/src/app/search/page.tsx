import Link from "next/link";

import type { SearchGroup, SearchResponse } from "@/lib/search";
import { searchContent } from "@/lib/search";

async function fetchSearch(query: string): Promise<SearchResponse> {
  try {
    const apiBase =
      process.env.AI_HELPER_API_URL ??
      process.env.NEXT_PUBLIC_API_URL ??
      process.env.API_BASE_URL;

    if (!apiBase) {
      throw new Error("API base URL is not configured");
    }

    const url = new URL("/search", apiBase);
    url.searchParams.set("q", query);
    const response = await fetch(url.toString(), {
      next: { revalidate: 30 },
    });
    if (!response.ok) {
      throw new Error(`Search request failed: ${response.status}`);
    }
    return (await response.json()) as SearchResponse;
  } catch (error) {
    console.warn("Falling back to local search", error);
    return searchContent(query);
  }
}

interface SearchPageProps {
  searchParams: { q?: string };
}

const GROUP_DESCRIPTIONS = {
  news: "Latest launches, research notes, and product updates from top labs.",
  comparisons: "Benchmarks and model profiles to help you choose the right LLM.",
  learn: "Curated tracks with hands-on modules and capstone projects.",
  models: "Directory of flagship models with pricing and deployment details.",
} as const;

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q?.trim() ?? "";
  const hasQuery = query.length > 0;

  if (!hasQuery) {
    return (
      <section className="flex flex-col gap-8">
        <header className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold text-[var(--color-foreground)]">Search the Infera hub</h1>
          <p className="max-w-2xl text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base">
            Start typing in the header search to explore news, benchmark comparisons, learning tracks, and the model directory.
          </p>
        </header>
        <div className="rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/45 p-8 text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base shadow-[var(--shadow-soft)]">
          <p>Try queries like &quot;RAG&quot;, &quot;Claude pricing&quot;, or &quot;open-source models&quot; to jump into curated content instantly.</p>
        </div>
      </section>
    );
  }

  const results = await fetchSearch(query);
  const total = results.total;

  return (
    <section className="flex flex-col gap-10">
      <header className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-[0.4em] text-[var(--color-muted)]">Search</span>
        <h1 className="text-3xl font-semibold text-[var(--color-foreground)]">Results for &ldquo;{query}&rdquo;</h1>
        <p className="max-w-2xl text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base">
          {total > 0
            ? `${total} matches across news, comparisons, learning tracks, and models.`
            : "No direct matches yet. Check the tabs or refine your query."}
        </p>
      </header>

      <div className="flex flex-col gap-8">
        {results.groups.map((group: SearchGroup) => {
          const hasResults = group.results.length > 0;
          return (
            <section key={group.category} className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-[var(--color-foreground)]">
                    {group.label}
                    {hasResults ? (
                      <span className="ml-3 text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base">{group.results.length}</span>
                    ) : null}
                  </h2>
                  <p className="text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base">{GROUP_DESCRIPTIONS[group.category]}</p>
                </div>
                <Link
                  href={group.category === "news" ? "/news" : group.category === "learn" ? "/learn" : group.category === "models" ? "/models" : "/comparisons"}
                  className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-muted)] transition hover:text-[var(--color-foreground)]"
                >
                  View tab
                </Link>
              </div>

              {hasResults ? (
                <ul className="grid gap-4 lg:grid-cols-2">
                  {group.results.map((item) => {
                    const isExternal = Boolean(item.isExternal);
                    return (
                      <li key={item.id}>
                        <article className="flex h-full flex-col gap-4 rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/45 p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-depth)]">
                          <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em]">
                            <span className="rounded-full bg-white/10 px-3 py-1 text-[var(--color-foreground)]/70">{item.badge ?? group.label}</span>
                            {item.meta ? <span className="text-[var(--color-muted)]">{item.meta}</span> : null}
                          </div>
                          <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
                            <Link
                              href={item.href}
                              className="transition hover:text-[var(--color-accent-secondary)]"
                              target={isExternal ? "_blank" : undefined}
                              rel={isExternal ? "noreferrer" : undefined}
                            >
                              {item.title}
                            </Link>
                          </h3>
                          <p className="text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base">{item.description}</p>
                          <div className="mt-auto text-xs text-[var(--color-muted)]">
                            <Link
                              href={item.href}
                              className="font-medium text-[var(--color-accent-secondary)] hover:text-[var(--color-foreground)]"
                              target={isExternal ? "_blank" : undefined}
                              rel={isExternal ? "noreferrer" : undefined}
                            >
                              {isExternal ? "Open source link" : "View details"}
                            </Link>
                          </div>
                        </article>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <div className="rounded-[var(--radius-xl)] border border-dashed border-[var(--border-soft)]/50 bg-[var(--color-surface)]/45 p-6 text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base">
                  <p>No matches yet. Try a different keyword or explore the tab directly.</p>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </section>
  );
}


