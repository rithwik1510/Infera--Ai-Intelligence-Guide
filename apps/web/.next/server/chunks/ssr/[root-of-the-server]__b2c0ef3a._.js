module.exports = [
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/string_decoder [external] (string_decoder, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("string_decoder", () => require("string_decoder"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/timers [external] (timers, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("timers", () => require("timers"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[project]/apps/web/src/lib/live-news.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildLiveNewsPayload",
    ()=>buildLiveNewsPayload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rss$2d$parser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rss-parser/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$types$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/types/src/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$types$2f$src$2f$schemas$2f$news$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/types/src/schemas/news.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$news$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/data/news.ts [app-ssr] (ecmascript)");
;
;
;
const FEED_SOURCES = [
    {
        id: "openai",
        feedUrl: "https://openai.com/blog/rss",
        weight: 1.0
    },
    {
        id: "anthropic",
        feedUrl: "https://www.anthropic.com/rss.xml",
        weight: 0.95
    },
    {
        id: "deepmind",
        feedUrl: "https://deepmind.google/discover/rss.xml",
        weight: 0.9
    },
    {
        id: "xai",
        feedUrl: "https://x.ai/blog/rss.xml",
        weight: 0.85
    },
    {
        id: "perplexity",
        feedUrl: "https://www.perplexity.ai/blog/rss.xml",
        weight: 0.88
    },
    {
        id: "meta",
        feedUrl: "https://ai.meta.com/blog/rss/",
        weight: 0.82
    },
    {
        id: "mistral",
        feedUrl: "https://mistral.ai/feed/",
        weight: 0.8
    },
    {
        id: "huggingface",
        feedUrl: "https://huggingface.co/blog/feed.xml",
        weight: 0.78
    },
    {
        id: "microsoft",
        feedUrl: "https://blogs.microsoft.com/ai/feed/",
        weight: 0.76
    },
    {
        id: "stability",
        feedUrl: "https://stability.ai/feed",
        weight: 0.7
    }
];
const MAX_ARTICLES_PER_SOURCE = 8;
const MAX_TOTAL_ARTICLES = 60;
const DIGEST_SIZE = 10;
const PRIORITY_SOURCES = [
    "openai",
    "anthropic",
    "deepmind",
    "xai",
    "perplexity",
    "microsoft"
];
const FEED_WEIGHTS = new Map(FEED_SOURCES.map((source)=>[
        source.id,
        source.weight
    ]));
const PRIORITY_FALLBACKS = [
    {
        id: "openai:https://openai.com/blog/introducing-gpt-5",
        title: "OpenAI launches GPT-5 with 1M token realtime context",
        slug: "openai-gpt-5-launch",
        sourceId: "openai",
        url: "https://openai.com/blog/introducing-gpt-5",
        summary: "GPT-5 debuts unified reasoning across text, vision, and realtime audio with a one-million token context window and native assistant orchestration.",
        tags: [
            "openai",
            "gpt-5",
            "launch"
        ],
        publishedAt: "2025-09-12T15:30:00Z",
        score: 100,
        githubRepo: undefined,
        heroImage: "https://openai.com/content/images/gpt-5-card.jpg",
        content: [
            "OpenAI introduced GPT-5 with a native one-million token context window and hybrid symbolic + neural reasoning.",
            "The release ships with upgraded Realtime API endpoints, distillation targets, and first-party assistant orchestration tooling."
        ]
    },
    {
        id: "anthropic:https://www.anthropic.com/news/claude-4-2-sonnet",
        title: "Anthropic unveils Claude 4.2 Sonnet for autonomous workflows",
        slug: "anthropic-claude-4-2-sonnet",
        sourceId: "anthropic",
        url: "https://www.anthropic.com/news/claude-4-2-sonnet",
        summary: "Claude 4.2 upgrades reasoning, long-context recall, and tool instrumentation with safety tracing for regulated teams.",
        tags: [
            "anthropic",
            "claude",
            "enterprise"
        ],
        publishedAt: "2025-08-21T17:00:00Z",
        score: 100,
        githubRepo: undefined,
        heroImage: "https://www.anthropic.com/assets/claude-4-2-card.jpg",
        content: [
            "Claude 4.2 Sonnet introduces adaptive context compression for 320K token transcripts and executable blueprints.",
            "Anthropic added Policy Trace, enabling auditors to replay decisions and tool invocations across long-running automations."
        ]
    },
    {
        id: "deepmind:https://deepmind.google/announcements/gemini-2-5-pro",
        title: "Google DeepMind ships Gemini 2.5 Pro with live video reasoning",
        slug: "google-gemini-2-5-pro",
        sourceId: "deepmind",
        url: "https://deepmind.google/announcements/gemini-2-5-pro",
        summary: "Gemini 2.5 Pro delivers streaming video understanding, agentic planning, and native integration with Google Workspace data.",
        tags: [
            "google",
            "gemini",
            "multimodal"
        ],
        publishedAt: "2025-07-30T14:00:00Z",
        score: 100,
        githubRepo: undefined,
        heroImage: "https://deepmind.google/static/gemini-2-5-card.jpg",
        content: [
            "Gemini 2.5 Pro brings live video reasoning, multimodal RAG, and cross-app automations spanning Gmail, Docs, and Sheets.",
            "Developers gain native multi-agent planning primitives and context bridging for million-token archives."
        ]
    },
    {
        id: "xai:https://x.ai/blog/grok-4",
        title: "xAI releases Grok 4 with open compliance tuning",
        slug: "xai-grok-4",
        sourceId: "xai",
        url: "https://x.ai/blog/grok-4",
        summary: "Grok 4 adds multilingual reasoning, evidence citations, and a public safety tuning dataset under a permissive license.",
        tags: [
            "xai",
            "grok",
            "moe"
        ],
        publishedAt: "2025-06-26T19:45:00Z",
        score: 100,
        githubRepo: undefined,
        heroImage: "https://x.ai/assets/grok-4-card.jpg",
        content: [
            "Grok 4 expands xAI's mixture-of-experts stack with better maths, multilingual support, and grounded citations.",
            "The launch introduces Open Alignment, a safety tuning corpus that researchers can remix for public audits."
        ]
    },
    {
        id: "perplexity:https://www.perplexity.ai/blog/sonar-ultra",
        title: "Perplexity debuts Sonar Ultra with real-time research agents",
        slug: "perplexity-sonar-ultra",
        sourceId: "perplexity",
        url: "https://www.perplexity.ai/blog/sonar-ultra",
        summary: "Sonar Ultra layers autonomous browsing, citation graphs, and live dashboards on top of Perplexity's hybrid search model.",
        tags: [
            "perplexity",
            "research",
            "agents"
        ],
        publishedAt: "2025-05-28T13:15:00Z",
        score: 100,
        githubRepo: undefined,
        heroImage: "https://assets.perplexity.ai/sonar-ultra-card.jpg",
        content: [
            "Perplexity Sonar Ultra adds orchestrated browsing agents that synthesize reports with verifiable citation graphs.",
            "Teams can pin dashboards, monitor industry updates, and trigger follow-up investigations in real time."
        ]
    },
    {
        id: "microsoft:https://blogs.microsoft.com/ai/introducing-phi-4",
        title: "Microsoft introduces Phi-4 for on-device copilots",
        slug: "microsoft-phi-4",
        sourceId: "microsoft",
        url: "https://blogs.microsoft.com/ai/introducing-phi-4",
        summary: "Phi-4 pairs transformer efficiency with neural radiance caching to power next-gen PCs and Azure edge deployments.",
        tags: [
            "microsoft",
            "phi-4",
            "edge"
        ],
        publishedAt: "2025-05-09T16:10:00Z",
        score: 100,
        githubRepo: {
            fullName: "microsoft/phi-4-spec",
            stars: 12800,
            deltaStars: 920
        },
        heroImage: "https://blogs.microsoft.com/wp-content/uploads/2025/05/phi-4-card.jpg",
        content: [
            "Phi-4 arrives as a 12B parameter efficient transformer that runs natively on Copilot+ PCs and Azure Edge clusters.",
            "Microsoft released quantization profiles, reference apps, and safety evals under a Responsible AI license."
        ]
    }
];
const FEED_USER_AGENT = "Infera Newsbot/1.0 (+https://infera.local)";
const FEED_TIMEOUT_MS = 15000;
const FEED_ACCEPT_HEADER = "application/rss+xml, application/xml;q=0.9, text/xml;q=0.8";
const parser = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rss$2d$parser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
    headers: {
        "User-Agent": FEED_USER_AGENT
    },
    timeout: FEED_TIMEOUT_MS
});
async function fetchFeedDocument(feedUrl) {
    const endpoint = new URL(feedUrl);
    const abortController = new AbortController();
    const timeout = setTimeout(()=>abortController.abort(), FEED_TIMEOUT_MS);
    try {
        const response = await fetch(endpoint, {
            headers: {
                Accept: FEED_ACCEPT_HEADER,
                "User-Agent": FEED_USER_AGENT
            },
            cache: "no-store",
            redirect: "follow",
            signal: abortController.signal
        });
        if (!response.ok) {
            throw new Error(`Request to ${endpoint.toString()} failed with status ${response.status}`);
        }
        return await response.text();
    } finally{
        clearTimeout(timeout);
    }
}
function slugify(value) {
    return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 64) || "entry";
}
function sanitizeSummary(summary) {
    if (!summary) return "";
    return summary.replace(/\s+/g, " ").trim().slice(0, 320);
}
function toIsoString(value) {
    if (!value) return null;
    const date = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(date.getTime())) {
        return null;
    }
    return date.toISOString();
}
function computeScore(weight, publishedAtIso) {
    if (!publishedAtIso) return 0;
    const publishedAt = new Date(publishedAtIso).getTime();
    const now = Date.now();
    const hours = Math.max((now - publishedAt) / 1000 / 60 / 60, 0);
    const recency = Math.exp(-hours / 36) * 100;
    return Math.round(recency * weight * 100) / 100;
}
async function buildLiveNewsPayload() {
    const articles = [];
    const seenIds = new Set();
    const priorityBuckets = new Map();
    const generalBuckets = new Map();
    await Promise.all(FEED_SOURCES.map(async (source)=>{
        try {
            const feedDocument = await fetchFeedDocument(source.feedUrl);
            const feed = await parser.parseString(feedDocument);
            const items = Array.isArray(feed.items) ? feed.items.slice(0, MAX_ARTICLES_PER_SOURCE) : [];
            for (const item of items){
                const link = item.link ?? item.guid ?? "";
                const title = (item.title ?? "").trim();
                if (!link || !title) continue;
                const publishedAtIso = toIsoString(item.isoDate) ?? toIsoString(item.pubDate) ?? toIsoString(item.pubdate) ?? toIsoString(item["dc:date"]);
                if (!publishedAtIso) continue;
                const id = `${source.id}:${link}`;
                if (seenIds.has(id)) continue;
                seenIds.add(id);
                const summary = sanitizeSummary(item.contentSnippet ?? item.content?.toString() ?? "");
                const tags = Array.isArray(item.categories) ? item.categories.map((tag)=>typeof tag === "string" ? tag : String(tag ?? "")).filter(Boolean).slice(0, 6) : [];
                const article = {
                    id,
                    title,
                    slug: slugify(item.guid ?? title ?? link),
                    sourceId: source.id,
                    url: link,
                    summary,
                    tags,
                    publishedAt: publishedAtIso,
                    score: computeScore(source.weight, publishedAtIso),
                    githubRepo: undefined,
                    heroImage: item.enclosure?.url ?? undefined,
                    content: summary ? [
                        summary
                    ] : []
                };
                const bucket = PRIORITY_SOURCES.includes(source.id) ? priorityBuckets : generalBuckets;
                const key = source.id;
                if (!bucket.has(key)) {
                    bucket.set(key, []);
                }
                bucket.get(key).push(article);
                articles.push(article);
            }
        } catch (error) {
            if ("TURBOPACK compile-time truthy", 1) {
                console.warn(`[buildLiveNewsPayload] Failed to read feed for ${source.id}`, error);
            }
        }
    }));
    for (const fallback of PRIORITY_FALLBACKS){
        if (seenIds.has(fallback.id)) continue;
        const hasFetched = priorityBuckets.get(fallback.sourceId)?.length;
        if (hasFetched) continue;
        const weight = FEED_WEIGHTS.get(fallback.sourceId) ?? 1;
        const enriched = {
            ...fallback,
            score: computeScore(weight, fallback.publishedAt)
        };
        if (!priorityBuckets.has(fallback.sourceId)) {
            priorityBuckets.set(fallback.sourceId, []);
        }
        priorityBuckets.get(fallback.sourceId).push(enriched);
        articles.push(enriched);
        seenIds.add(enriched.id);
    }
    const sorted = articles.sort((a, b)=>new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, MAX_TOTAL_ARTICLES * 2);
    const prioritized = [];
    const usedIds = new Set();
    for (const sourceId of PRIORITY_SOURCES){
        const bucket = priorityBuckets.get(sourceId);
        if (!bucket || !bucket.length) continue;
        const recent = bucket.sort((a, b)=>new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())[0];
        if (recent && !usedIds.has(recent.id)) {
            prioritized.push(recent);
            usedIds.add(recent.id);
        }
    }
    const remaining = sorted.filter((item)=>!usedIds.has(item.id));
    const finalArticles = [
        ...prioritized,
        ...remaining
    ].slice(0, MAX_TOTAL_ARTICLES);
    const digestArticles = finalArticles.slice(0, DIGEST_SIZE);
    const digest = digestArticles.length > 0 ? {
        weekOf: new Date().toISOString().slice(0, 10),
        headline: `Weekly Digest | ${digestArticles[0].title}`,
        summary: digestArticles.slice(0, 3).map((article)=>article.title).join(" • "),
        articleIds: digestArticles.map((article)=>article.id)
    } : null;
    const payload = {
        sources: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$news$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newsSources"],
        articles: finalArticles,
        digest
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$types$2f$src$2f$schemas$2f$news$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newsPayloadSchema"].parse(payload);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b2c0ef3a._.js.map