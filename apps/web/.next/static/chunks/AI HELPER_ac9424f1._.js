(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/AI HELPER/packages/types/src/schemas/news.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "newsArticleDetailSchema",
    ()=>newsArticleDetailSchema,
    "newsArticleSchema",
    ()=>newsArticleSchema,
    "newsPayloadSchema",
    ()=>newsPayloadSchema,
    "newsSourceSchema",
    ()=>newsSourceSchema,
    "weeklyDigestSchema",
    ()=>weeklyDigestSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/zod/v3/external.js [app-client] (ecmascript) <export * as z>");
;
const newsSourceSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    url: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url(),
    gradient: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].tuple([
        __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    ]),
    weight: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0)
});
const newsArticleSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    slug: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    sourceId: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    url: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url(),
    summary: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    tags: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).default([]),
    publishedAt: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().datetime(),
    githubRepo: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        fullName: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        stars: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0),
        deltaStars: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int()
    }).optional(),
    heroImage: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional(),
    score: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    content: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).default([])
});
const weeklyDigestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    weekOf: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().date(),
    headline: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    summary: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    articleIds: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).max(10)
});
const newsPayloadSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    sources: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(newsSourceSchema),
    articles: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(newsArticleSchema),
    digest: weeklyDigestSchema.nullable()
});
const newsArticleDetailSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    article: newsArticleSchema,
    source: newsSourceSchema.nullable(),
    related: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(newsArticleSchema)
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/AI HELPER/packages/types/src/schemas/comparisons.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "benchmarkSchema",
    ()=>benchmarkSchema,
    "benchmarkScoreSchema",
    ()=>benchmarkScoreSchema,
    "comparisonConfigSchema",
    ()=>comparisonConfigSchema,
    "modelContextSchema",
    ()=>modelContextSchema,
    "modelProfileSchema",
    ()=>modelProfileSchema,
    "pricingTierSchema",
    ()=>pricingTierSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/zod/v3/external.js [app-client] (ecmascript) <export * as z>");
;
const benchmarkSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    higherIsBetter: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    unit: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable()
});
const pricingTierSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    tier: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "input",
        "output",
        "requests"
    ]),
    pricePerMillion: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nonnegative(),
    currency: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("USD")
});
const benchmarkScoreSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    benchmarkId: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    score: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
    normalizedScore: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
    source: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().nullable()
});
const modelContextSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    maxTokens: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive().nullable(),
    modalities: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).default([
        "text"
    ]),
    notes: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable()
});
const modelProfileSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    provider: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    releaseDate: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    contextWindow: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive(),
    license: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    availability: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "api",
        "self-host",
        "hybrid"
    ]),
    benchmarks: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(benchmarkScoreSchema),
    pricing: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(pricingTierSchema),
    context: modelContextSchema,
    website: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().nullable(),
    summary: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    sources: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url()).min(1)
});
const comparisonConfigSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    defaultModelIds: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).min(2).max(4),
    benchmarks: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(benchmarkSchema)
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/AI HELPER/packages/types/src/schemas/learn.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "badgeSchema",
    ()=>badgeSchema,
    "capstoneSchema",
    ()=>capstoneSchema,
    "learnModuleSchema",
    ()=>learnModuleSchema,
    "learnResourceSchema",
    ()=>learnResourceSchema,
    "learnTrackSchema",
    ()=>learnTrackSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/zod/v3/external.js [app-client] (ecmascript) <export * as z>");
;
const learnResourceSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    url: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url(),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "article",
        "video",
        "docs",
        "github",
        "exercise"
    ]),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const learnModuleSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    objective: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    resources: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(learnResourceSchema).min(1).max(5),
    task: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const capstoneSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    brief: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    deliverable: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const badgeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const learnTrackSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    level: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "beginner",
        "intermediate",
        "advanced"
    ]),
    timeEstimateHours: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive(),
    outcome: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    modules: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(learnModuleSchema).min(3),
    capstone: capstoneSchema,
    badge: badgeSchema
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/AI HELPER/packages/types/src/schemas/models.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "modelDirectoryEntrySchema",
    ()=>modelDirectoryEntrySchema,
    "modelFilterSchema",
    ()=>modelFilterSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/zod/v3/external.js [app-client] (ecmascript) <export * as z>");
;
const modelDirectoryEntrySchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    provider: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    releaseDate: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().date(),
    contextWindow: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive(),
    pricing: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        currency: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("USD"),
        input: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nonnegative().optional(),
        output: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nonnegative().optional(),
        flatRate: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nonnegative().optional()
    }),
    licensing: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "proprietary",
        "open-source",
        "mixed"
    ]),
    deployment: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "api",
        "self-host",
        "hybrid"
    ]),
    website: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url(),
    tags: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).default([]),
    sourceUrls: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url()).min(1)
});
const modelFilterSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    providers: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
    license: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "proprietary",
        "open-source",
        "mixed"
    ])).optional(),
    deployment: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "api",
        "self-host",
        "hybrid"
    ])).optional()
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/AI HELPER/packages/types/src/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$news$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/packages/types/src/schemas/news.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$comparisons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/packages/types/src/schemas/comparisons.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$learn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/packages/types/src/schemas/learn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/packages/types/src/schemas/models.ts [app-client] (ecmascript)");
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/AI HELPER/apps/web/src/data/comparison-config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "comparisonConfig",
    ()=>comparisonConfig,
    "modelProfiles",
    ()=>modelProfiles
]);
const comparisonConfig = {
    defaultModelIds: [
        "gpt-4o",
        "claude-3-5-sonnet",
        "gemini-1-5-pro",
        "mistral-large"
    ],
    benchmarks: [
        {
            id: "mmlu",
            name: "MMLU",
            description: "Massive multitask language understanding across 57 academic subjects.",
            higherIsBetter: true,
            unit: "%"
        },
        {
            id: "gsm8k",
            name: "GSM8K",
            description: "Grade-school math word problems that stress reasoning and accuracy.",
            higherIsBetter: true,
            unit: "%"
        },
        {
            id: "humaneval",
            name: "HumanEval",
            description: "Python coding benchmarks measuring functional correctness of completions.",
            higherIsBetter: true,
            unit: "%"
        },
        {
            id: "hellaswag",
            name: "HellaSwag",
            description: "Commonsense inference benchmark featuring adversarial multiple choice.",
            higherIsBetter: true,
            unit: "%"
        }
    ]
};
const modelProfiles = [
    {
        id: "gpt-4o",
        name: "GPT-4o",
        provider: "OpenAI",
        releaseDate: "2024-05-13",
        contextWindow: 128000,
        license: "Commercial",
        availability: "api",
        benchmarks: [
            {
                benchmarkId: "mmlu",
                score: 88.6,
                normalizedScore: 0.98,
                source: "https://platform.openai.com/docs/models#gpt-4o"
            },
            {
                benchmarkId: "gsm8k",
                score: 95.2,
                normalizedScore: 0.99,
                source: "https://platform.openai.com/docs/models#gpt-4o"
            },
            {
                benchmarkId: "humaneval",
                score: 90.2,
                normalizedScore: 0.96,
                source: "https://platform.openai.com/docs/models#gpt-4o"
            },
            {
                benchmarkId: "hellaswag",
                score: 95.9,
                normalizedScore: 0.97,
                source: "https://platform.openai.com/docs/models#gpt-4o"
            }
        ],
        pricing: [
            {
                tier: "input",
                pricePerMillion: 5.0,
                currency: "USD"
            },
            {
                tier: "output",
                pricePerMillion: 15.0,
                currency: "USD"
            }
        ],
        context: {
            maxTokens: 4096,
            modalities: [
                "text",
                "image",
                "audio",
                "video"
            ],
            notes: "Streaming multimodal generation with realtime voice support."
        },
        website: "https://platform.openai.com/docs/models/gpt-4o",
        summary: "OpenAI's flagship multimodal model tuned for high-stakes production workloads.",
        sources: [
            "https://platform.openai.com/docs/models#gpt-4o",
            "https://openai.com/index/gpt-4o/"
        ]
    },
    {
        id: "claude-3-5-sonnet",
        name: "Claude 3.5 Sonnet",
        provider: "Anthropic",
        releaseDate: "2024-06-20",
        contextWindow: 200000,
        license: "Commercial",
        availability: "api",
        benchmarks: [
            {
                benchmarkId: "mmlu",
                score: 88.3,
                normalizedScore: 0.96,
                source: "https://www.anthropic.com/claude"
            },
            {
                benchmarkId: "gsm8k",
                score: 95.0,
                normalizedScore: 0.97,
                source: "https://www.anthropic.com/claude"
            },
            {
                benchmarkId: "humaneval",
                score: 91.0,
                normalizedScore: 0.97,
                source: "https://www.anthropic.com/claude"
            },
            {
                benchmarkId: "hellaswag",
                score: 96.3,
                normalizedScore: 0.97,
                source: "https://www.anthropic.com/claude"
            }
        ],
        pricing: [
            {
                tier: "input",
                pricePerMillion: 3.0,
                currency: "USD"
            },
            {
                tier: "output",
                pricePerMillion: 15.0,
                currency: "USD"
            }
        ],
        context: {
            maxTokens: 4096,
            modalities: [
                "text",
                "image"
            ],
            notes: "Optimized for long-context reasoning with constitutional guardrails."
        },
        website: "https://www.anthropic.com/news/claude-3-5-sonnet",
        summary: "Anthropic's balanced flagship delivering editorial-grade writing and planning.",
        sources: [
            "https://www.anthropic.com/news/claude-3-5-sonnet",
            "https://www.anthropic.com/claude"
        ]
    },
    {
        id: "gemini-1-5-pro",
        name: "Gemini 1.5 Pro",
        provider: "Google DeepMind",
        releaseDate: "2024-02-29",
        contextWindow: 1000000,
        license: "Commercial",
        availability: "api",
        benchmarks: [
            {
                benchmarkId: "mmlu",
                score: 83.9,
                normalizedScore: 0.90,
                source: "https://ai.google.dev/gemini-api/docs/models/gemini"
            },
            {
                benchmarkId: "gsm8k",
                score: 92.0,
                normalizedScore: 0.94,
                source: "https://ai.google.dev/gemini-api/docs/models/gemini"
            },
            {
                benchmarkId: "humaneval",
                score: 76.0,
                normalizedScore: 0.82,
                source: "https://ai.google.dev/gemini-api/docs/models/gemini"
            },
            {
                benchmarkId: "hellaswag",
                score: 95.4,
                normalizedScore: 0.95,
                source: "https://ai.google.dev/gemini-api/docs/models/gemini"
            }
        ],
        pricing: [
            {
                tier: "input",
                pricePerMillion: 7.0,
                currency: "USD"
            },
            {
                tier: "output",
                pricePerMillion: 21.0,
                currency: "USD"
            }
        ],
        context: {
            maxTokens: 8192,
            modalities: [
                "text",
                "image",
                "audio",
                "video"
            ],
            notes: "Handles million-token contexts and rich tool use scenarios."
        },
        website: "https://ai.google.dev/gemini-api/docs/models/gemini",
        summary: "Google DeepMind's multimodal workhorse with million-token memory.",
        sources: [
            "https://ai.google.dev/gemini-api/docs/models/gemini",
            "https://blog.google/technology/ai/google-gemini-ai/"
        ]
    },
    {
        id: "mistral-large",
        name: "Mistral Large",
        provider: "Mistral AI",
        releaseDate: "2024-02-26",
        contextWindow: 32000,
        license: "Commercial",
        availability: "api",
        benchmarks: [
            {
                benchmarkId: "mmlu",
                score: 86.0,
                normalizedScore: 0.92,
                source: "https://docs.mistral.ai/platform/benchmarks/"
            },
            {
                benchmarkId: "gsm8k",
                score: 90.2,
                normalizedScore: 0.92,
                source: "https://docs.mistral.ai/platform/benchmarks/"
            },
            {
                benchmarkId: "humaneval",
                score: 83.8,
                normalizedScore: 0.88,
                source: "https://docs.mistral.ai/platform/benchmarks/"
            },
            {
                benchmarkId: "hellaswag",
                score: 95.0,
                normalizedScore: 0.95,
                source: "https://docs.mistral.ai/platform/benchmarks/"
            }
        ],
        pricing: [
            {
                tier: "input",
                pricePerMillion: 8.0,
                currency: "USD"
            },
            {
                tier: "output",
                pricePerMillion: 24.0,
                currency: "USD"
            }
        ],
        context: {
            maxTokens: 4096,
            modalities: [
                "text"
            ],
            notes: "European hosted option with strong reasoning and knowledge recency."
        },
        website: "https://mistral.ai/technology/mistral-large/",
        summary: "Mistral's flagship API model with competitive reasoning benchmarks.",
        sources: [
            "https://docs.mistral.ai/platform/benchmarks/",
            "https://mistral.ai/technology/mistral-large/"
        ]
    },
    {
        id: "llama-3-70b-instruct",
        name: "Llama 3 70B Instruct",
        provider: "Meta",
        releaseDate: "2024-04-18",
        contextWindow: 128000,
        license: "Open Source",
        availability: "self-host",
        benchmarks: [
            {
                benchmarkId: "mmlu",
                score: 82.0,
                normalizedScore: 0.88,
                source: "https://ai.meta.com/research/publications/the-llama-3-herd-of-models/"
            },
            {
                benchmarkId: "gsm8k",
                score: 83.8,
                normalizedScore: 0.85,
                source: "https://ai.meta.com/research/publications/the-llama-3-herd-of-models/"
            },
            {
                benchmarkId: "humaneval",
                score: 76.5,
                normalizedScore: 0.82,
                source: "https://ai.meta.com/research/publications/the-llama-3-herd-of-models/"
            },
            {
                benchmarkId: "hellaswag",
                score: 88.7,
                normalizedScore: 0.90,
                source: "https://ai.meta.com/research/publications/the-llama-3-herd-of-models/"
            }
        ],
        pricing: [],
        context: {
            maxTokens: 8192,
            modalities: [
                "text"
            ],
            notes: "Apache 2.0 licensed; deployable on-prem or via partner clouds."
        },
        website: "https://ai.meta.com/llama/",
        summary: "Meta's open-source flagship balancing accuracy and permissive licensing.",
        sources: [
            "https://ai.meta.com/llama/",
            "https://ai.meta.com/research/publications/the-llama-3-herd-of-models/"
        ]
    },
    {
        id: "mixtral-8x22b",
        name: "Mixtral 8x22B",
        provider: "Mistral AI",
        releaseDate: "2024-01-15",
        contextWindow: 65536,
        license: "Apache 2.0",
        availability: "self-host",
        benchmarks: [
            {
                benchmarkId: "mmlu",
                score: 81.6,
                normalizedScore: 0.86,
                source: "https://mistral.ai/news/mixtral-8x22b/"
            },
            {
                benchmarkId: "gsm8k",
                score: 80.6,
                normalizedScore: 0.82,
                source: "https://mistral.ai/news/mixtral-8x22b/"
            },
            {
                benchmarkId: "humaneval",
                score: 73.5,
                normalizedScore: 0.78,
                source: "https://mistral.ai/news/mixtral-8x22b/"
            },
            {
                benchmarkId: "hellaswag",
                score: 87.2,
                normalizedScore: 0.88,
                source: "https://mistral.ai/news/mixtral-8x22b/"
            }
        ],
        pricing: [],
        context: {
            maxTokens: 4096,
            modalities: [
                "text"
            ],
            notes: "Mixture-of-experts model offering high quality with efficient inference."
        },
        website: "https://mistral.ai/news/mixtral-8x22b/",
        summary: "Open-weight MoE release tuned for enterprise-grade self-hosting.",
        sources: [
            "https://mistral.ai/news/mixtral-8x22b/",
            "https://huggingface.co/mistralai/Mixtral-8x22B-Instruct-v0.1"
        ]
    },
    {
        id: "phi-3-medium",
        name: "Phi-3 Medium",
        provider: "Microsoft",
        releaseDate: "2024-04-23",
        contextWindow: 8192,
        license: "MIT",
        availability: "hybrid",
        benchmarks: [
            {
                benchmarkId: "mmlu",
                score: 75.5,
                normalizedScore: 0.80,
                source: "https://azure.microsoft.com/en-us/blog/introducing-phi-3/"
            },
            {
                benchmarkId: "gsm8k",
                score: 83.0,
                normalizedScore: 0.84,
                source: "https://azure.microsoft.com/en-us/blog/introducing-phi-3/"
            },
            {
                benchmarkId: "humaneval",
                score: 64.2,
                normalizedScore: 0.70,
                source: "https://azure.microsoft.com/en-us/blog/introducing-phi-3/"
            },
            {
                benchmarkId: "hellaswag",
                score: 80.5,
                normalizedScore: 0.83,
                source: "https://azure.microsoft.com/en-us/blog/introducing-phi-3/"
            }
        ],
        pricing: [
            {
                tier: "input",
                pricePerMillion: 2.0,
                currency: "USD"
            },
            {
                tier: "output",
                pricePerMillion: 6.0,
                currency: "USD"
            }
        ],
        context: {
            maxTokens: 4096,
            modalities: [
                "text"
            ],
            notes: "Compact, cost-efficient model available via Azure and local deployment."
        },
        website: "https://azure.microsoft.com/en-us/blog/introducing-phi-3/",
        summary: "Microsoft's lightweight series balancing price and code synthesis skills.",
        sources: [
            "https://azure.microsoft.com/en-us/blog/introducing-phi-3/",
            "https://huggingface.co/microsoft/Phi-3-medium-128k-instruct"
        ]
    },
    {
        id: "dbrx",
        name: "DBRX",
        provider: "Databricks",
        releaseDate: "2024-03-27",
        contextWindow: 32000,
        license: "Open Model",
        availability: "hybrid",
        benchmarks: [
            {
                benchmarkId: "mmlu",
                score: 82.0,
                normalizedScore: 0.88,
                source: "https://www.databricks.com/blog/introducing-dbrx"
            },
            {
                benchmarkId: "gsm8k",
                score: 88.8,
                normalizedScore: 0.90,
                source: "https://www.databricks.com/blog/introducing-dbrx"
            },
            {
                benchmarkId: "humaneval",
                score: 70.1,
                normalizedScore: 0.76,
                source: "https://www.databricks.com/blog/introducing-dbrx"
            },
            {
                benchmarkId: "hellaswag",
                score: 86.8,
                normalizedScore: 0.87,
                source: "https://www.databricks.com/blog/introducing-dbrx"
            }
        ],
        pricing: [
            {
                tier: "requests",
                pricePerMillion: 0.6,
                currency: "USD"
            }
        ],
        context: {
            maxTokens: 4096,
            modalities: [
                "text"
            ],
            notes: "Optimized for retrieval-augmented workloads with MosaicML tooling."
        },
        website: "https://www.databricks.com/blog/introducing-dbrx",
        summary: "Databricks' MoE foundation optimized for enterprise data pipelines.",
        sources: [
            "https://www.databricks.com/blog/introducing-dbrx",
            "https://huggingface.co/databricks/dbrx-instruct"
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/AI HELPER/apps/web/src/data/learn-tracks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "learnTracks",
    ()=>learnTracks
]);
const learnTracks = [
    {
        "id": "prompt-foundations",
        "title": "Prompt Engineering Foundations",
        "level": "beginner",
        "timeEstimateHours": 5,
        "outcome": "Understand LLM fundamentals, craft reliable prompts, and evaluate responses with lightweight checklists.",
        "modules": [
            {
                "title": "LLM Basics & Mental Models",
                "objective": "Learn how LLMs process instructions, tokens, and safety constraints.",
                "resources": [
                    {
                        "title": "AI Fundamentals by DeepLearning.AI",
                        "url": "https://www.deeplearning.ai/short-courses/ai-fundamentals/",
                        "type": "video",
                        "description": "Short course covering LLM capabilities, limitations, and terminology."
                    },
                    {
                        "title": "OpenAI Prompting Guide",
                        "url": "https://platform.openai.com/docs/guides/prompt-engineering",
                        "type": "docs"
                    },
                    {
                        "title": "State of Prompting 2025",
                        "url": "https://www.promptingguide.ai/reports/2025",
                        "type": "article"
                    }
                ],
                "task": "Explain what temperature, top_p, and system prompts do to a teammate in a short memo."
            },
            {
                "title": "Core Prompt Patterns",
                "objective": "Apply patterns such as role prompting, structured output, and self-checks.",
                "resources": [
                    {
                        "title": "Prompt Engineering Patterns",
                        "url": "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/patterns",
                        "type": "docs"
                    },
                    {
                        "title": "Promptable Cookbook",
                        "url": "https://github.com/promptable/promptable",
                        "type": "github"
                    },
                    {
                        "title": "Structured Outputs with JSON Schema",
                        "url": "https://jsonschema.dev/blog/structured-llm-prompts",
                        "type": "article"
                    }
                ],
                "task": "Create three prompts that return JSON objects, each validated against a schema."
            },
            {
                "title": "Evaluation & Iteration",
                "objective": "Measure prompt quality with rubrics, lightweight evals, and user feedback.",
                "resources": [
                    {
                        "title": "Prompt Evaluation with OpenAI Evals",
                        "url": "https://github.com/openai/evals",
                        "type": "github"
                    },
                    {
                        "title": "Prompt Matrix Worksheet",
                        "url": "https://promptingguide.ai/tools/prompt-matrix",
                        "type": "docs"
                    },
                    {
                        "title": "LLM Feedback Loops",
                        "url": "https://blog.langchain.dev/feedback-loops/",
                        "type": "article"
                    }
                ],
                "task": "Compare three versions of a support reply prompt and document precision vs. tone trade-offs."
            }
        ],
        "capstone": {
            "title": "Prompt System Playbook",
            "brief": "Assemble a short prompt playbook for your team with patterns, guardrails, and evaluation scores.",
            "deliverable": "Notion or Google Doc with prompt templates plus evaluation results."
        },
        "badge": {
            "name": "Prompt Architect",
            "description": "Awarded for documenting prompt patterns with evaluation evidence.",
            "icon": "pen"
        }
    },
    {
        "id": "open-source-llms",
        "title": "Open-Source LLMs with Ollama",
        "level": "beginner",
        "timeEstimateHours": 6,
        "outcome": "Stand up local LLM inference, quantization, and prompt tooling with Ollama + open models.",
        "modules": [
            {
                "title": "Local Setup",
                "objective": "Install Ollama and run baseline models.",
                "resources": [
                    {
                        "title": "Ollama Quickstart",
                        "url": "https://ollama.com/docs",
                        "type": "docs"
                    },
                    {
                        "title": "Mistral Inference Guide",
                        "url": "https://docs.mistral.ai/getting-started/ollama/",
                        "type": "docs"
                    },
                    {
                        "title": "GPU vs CPU Benchmarks",
                        "url": "https://huggingface.co/blog/llm-performance-gpu",
                        "type": "article"
                    }
                ],
                "task": "Run a 7B model locally and record tokens/sec on your hardware."
            },
            {
                "title": "Prompt Tooling",
                "objective": "Layer in prompt libraries and evaluate outputs.",
                "resources": [
                    {
                        "title": "Prompting with Guidance",
                        "url": "https://github.com/guidance-ai/guidance",
                        "type": "github"
                    },
                    {
                        "title": "LM Studio Prompt Management",
                        "url": "https://lmstudio.ai/docs/prompts",
                        "type": "docs"
                    },
                    {
                        "title": "Prompt Evaluation Checklist",
                        "url": "https://www.promptingguide.ai/",
                        "type": "article"
                    }
                ],
                "task": "Compare two prompt frameworks on the same question set and document differences."
            },
            {
                "title": "Optimization & Serving",
                "objective": "Optimize model loading and expose an API endpoint.",
                "resources": [
                    {
                        "title": "llama.cpp Quantization",
                        "url": "https://github.com/ggerganov/llama.cpp#quantization",
                        "type": "github"
                    },
                    {
                        "title": "Ollama Mod Files",
                        "url": "https://ollama.com/blog/mod-file",
                        "type": "article"
                    },
                    {
                        "title": "FastAPI + Ollama",
                        "url": "https://github.com/ollama/ollama/tree/main/examples/fastapi",
                        "type": "github"
                    }
                ],
                "task": "Expose a `/generate` endpoint backed by a quantized model of your choice."
            }
        ],
        "capstone": {
            "title": "Local Model Service",
            "brief": "Bundle an Ollama mod file + FastAPI server for a specialized prompt workflow.",
            "deliverable": "Dockerfile and README describing the local deployment steps."
        },
        "badge": {
            "name": "Open Model Engineer",
            "description": "Awarded for deploying optimized open-source LLMs.",
            "icon": "chip"
        }
    },
    {
        "id": "automation-n8n",
        "title": "AI Automation with n8n",
        "level": "intermediate",
        "timeEstimateHours": 7,
        "outcome": "Compose automations that blend LLM calls with business APIs, observability, and human-in-the-loop reviews inside n8n.",
        "modules": [
            {
                "title": "Workflow Fundamentals",
                "objective": "Navigate n8n, understand triggers, and configure environment variables securely.",
                "resources": [
                    {
                        "title": "n8n Getting Started",
                        "url": "https://docs.n8n.io/hosting/",
                        "type": "docs"
                    },
                    {
                        "title": "Best Practices for Secrets",
                        "url": "https://docs.n8n.io/hosting/security/secrets/",
                        "type": "docs"
                    },
                    {
                        "title": "Workflow Gallery Inspiration",
                        "url": "https://n8n.io/workflows",
                        "type": "article"
                    }
                ],
                "task": "Deploy self-hosted n8n (Docker or cloud) and create a health-check workflow."
            },
            {
                "title": "LLM Nodes & Guardrails",
                "objective": "Wire LLM nodes, retries, and moderation into automated flows.",
                "resources": [
                    {
                        "title": "n8n OpenAI + Anthropic Nodes",
                        "url": "https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.openAi/",
                        "type": "docs"
                    },
                    {
                        "title": "Guardrails with PromptLayer",
                        "url": "https://promptlayer.com/blog/n8n-guardrails",
                        "type": "article"
                    },
                    {
                        "title": "Schema Validation in n8n",
                        "url": "https://community.n8n.io/t/how-to-validate-json/31456",
                        "type": "article"
                    }
                ],
                "task": "Build a workflow that moderates inbound emails, categorizes them with an LLM, and routes actionable items to Slack."
            },
            {
                "title": "Observability & Human Review",
                "objective": "Implement logging, approval gates, and metrics for ongoing monitoring.",
                "resources": [
                    {
                        "title": "n8n Workflows for Human-in-the-Loop",
                        "url": "https://docs.n8n.io/workflows/components/human-in-the-loop/",
                        "type": "docs"
                    },
                    {
                        "title": "Temporal Workflows + n8n",
                        "url": "https://temporal.io/blog/n8n-temporal-integrations",
                        "type": "article"
                    },
                    {
                        "title": "Grafana Dashboards for n8n",
                        "url": "https://github.com/n8n-io/n8n-prometheus-exporter",
                        "type": "github"
                    }
                ],
                "task": "Add approval nodes and emit Prometheus metrics for a production-ready automation."
            }
        ],
        "capstone": {
            "title": "Automation Control Center",
            "brief": "Ship an n8n automation that triages inbound requests, logs metrics, and includes executive-ready reporting.",
            "deliverable": "Workflow export + short Loom demonstrating success/failure paths."
        },
        "badge": {
            "name": "Automation Pilot",
            "description": "Awarded for orchestrating resilient automations with guardrails.",
            "icon": "switcher"
        }
    },
    {
        "id": "rag-weekend",
        "title": "RAG in a Weekend",
        "level": "intermediate",
        "timeEstimateHours": 10,
        "outcome": "Ship a retrieval microservice that indexes docs and returns grounded answers with evals.",
        "modules": [
            {
                "title": "Retrieval Foundations",
                "objective": "Understand vector databases, embeddings, and chunking strategies.",
                "resources": [
                    {
                        "title": "Weaviate Vector Databases 101",
                        "url": "https://weaviate.io/blog/vector-database-101",
                        "type": "article",
                        "description": "High-level primer on vector storage and similarity search."
                    },
                    {
                        "title": "OpenAI Embeddings Guide",
                        "url": "https://platform.openai.com/docs/guides/embeddings",
                        "type": "docs"
                    },
                    {
                        "title": "Chunking Playground",
                        "url": "https://github.com/openai/openai-cookbook/blob/main/examples/Chunking.ipynb",
                        "type": "github"
                    }
                ],
                "task": "Chunk a PDF of your choosing and store embeddings in a local vector database."
            },
            {
                "title": "Retriever + LLM Pipeline",
                "objective": "Implement retrieval chaining and response synthesis.",
                "resources": [
                    {
                        "title": "LangChain Retrieval QA",
                        "url": "https://python.langchain.com/docs/use_cases/question_answering/",
                        "type": "docs"
                    },
                    {
                        "title": "LlamaIndex RAG Tutorial",
                        "url": "https://docs.llamaindex.ai/en/stable/examples/low_level/recursive_retriever/",
                        "type": "docs"
                    },
                    {
                        "title": "Implement RAG with FastAPI",
                        "url": "https://github.com/hwchase17/langchain/blob/master/docs/docs/integrations/fastapi_rag.md",
                        "type": "github"
                    }
                ],
                "task": "Expose a `/query` endpoint that fetches supporting passages and responds with citations."
            },
            {
                "title": "Evaluation & Hardening",
                "objective": "Add observability, evaluation, and caching to your RAG system.",
                "resources": [
                    {
                        "title": "TruLens Evaluation",
                        "url": "https://www.trulens.org/docs/quickstart/",
                        "type": "docs"
                    },
                    {
                        "title": "LangSmith Tracing",
                        "url": "https://docs.smith.langchain.com/user_guide/tracing",
                        "type": "docs"
                    },
                    {
                        "title": "Evaluation Harness",
                        "url": "https://github.com/explodinggradients/ragas",
                        "type": "github"
                    }
                ],
                "task": "Log 10 evaluation runs and capture latency + hallucination metrics."
            }
        ],
        "capstone": {
            "title": "Grounded Support Assistant",
            "brief": "Build a RAG assistant over your company handbook with source citations and evaluation dashboard.",
            "deliverable": "GitHub repo + short loom walkthrough of the assistant flow."
        },
        "badge": {
            "name": "RAG Builder",
            "description": "Awarded for shipping a production-ready retrieval assistant.",
            "icon": "sparkles"
        }
    },
    {
        "id": "agents-101",
        "title": "Agents 101 (Tools & Functions)",
        "level": "intermediate",
        "timeEstimateHours": 8,
        "outcome": "Design agents that orchestrate tools safely using function calling and guardrails.",
        "modules": [
            {
                "title": "Agent Patterns",
                "objective": "Survey single vs. multi-agent architectures and planning loops.",
                "resources": [
                    {
                        "title": "Anthropic Cookbook: Agents",
                        "url": "https://docs.anthropic.com/en/docs/build-with-claude/tool-use/overview",
                        "type": "docs"
                    },
                    {
                        "title": "OpenAI Function Calling",
                        "url": "https://platform.openai.com/docs/guides/function-calling",
                        "type": "docs"
                    },
                    {
                        "title": "SmolAgents Walkthrough",
                        "url": "https://github.com/huggingface/smolagents",
                        "type": "github"
                    }
                ],
                "task": "Diagram an agent loop for a research assistant that calls web + code tools."
            },
            {
                "title": "Tooling & Orchestration",
                "objective": "Implement tool registration and result parsing.",
                "resources": [
                    {
                        "title": "LangChain Agent Toolkits",
                        "url": "https://python.langchain.com/docs/modules/agents/toolkits/",
                        "type": "docs"
                    },
                    {
                        "title": "ReAct Pattern in Practice",
                        "url": "https://arxiv.org/abs/2210.03629",
                        "type": "article"
                    },
                    {
                        "title": "Agent Evaluation Harness",
                        "url": "https://github.com/langchain-ai/langchain/tree/master/templates/agent-evals",
                        "type": "github"
                    }
                ],
                "task": "Implement a sandboxed agent that calls two tools and handles tool errors gracefully."
            },
            {
                "title": "Evaluation & Safety",
                "objective": "Add guardrails, timeouts, and monitoring for agent operations.",
                "resources": [
                    {
                        "title": "Prompt Layer Logging",
                        "url": "https://promptlayer.com/docs",
                        "type": "docs"
                    },
                    {
                        "title": "MLflow Prompt Evaluation",
                        "url": "https://mlflow.org/docs/latest/llms/",
                        "type": "docs"
                    },
                    {
                        "title": "Structural Guardrails",
                        "url": "https://github.com/guardrails-ai/guardrails",
                        "type": "github"
                    }
                ],
                "task": "Ship evaluation harness for 20 scripted agent conversations with guardrail checks."
            }
        ],
        "capstone": {
            "title": "Analyst Assistant",
            "brief": "Build an agent that ingests CSV data, runs tool-based insights, and returns an executive summary.",
            "deliverable": "Notebook or service with evaluation logs + summary sample."
        },
        "badge": {
            "name": "Agent Orchestrator",
            "description": "Awarded for shipping a resilient tool-using agent.",
            "icon": "workflow"
        }
    },
    {
        "id": "agent-ops",
        "title": "AgentOps & LLM Observability",
        "level": "advanced",
        "timeEstimateHours": 9,
        "outcome": "Monitor, evaluate, and roll out agent-driven products with SLOs, alerting, and incident workflows.",
        "modules": [
            {
                "title": "Telemetry & Tracing",
                "objective": "Capture spans, prompts, and tool invocations for debugging.",
                "resources": [
                    {
                        "title": "LangSmith Production Playbook",
                        "url": "https://docs.smith.langchain.com/user_guide/production",
                        "type": "docs"
                    },
                    {
                        "title": "OpenTelemetry for LLM Apps",
                        "url": "https://github.com/opentelemetry-ml/opentelemetry-llm",
                        "type": "github"
                    },
                    {
                        "title": "PromptOps Runbooks",
                        "url": "https://promptops.ai/runbooks",
                        "type": "article"
                    }
                ],
                "task": "Instrument an agent workflow with traces that capture prompt, tool latency, and errors."
            },
            {
                "title": "Evaluation Pipelines",
                "objective": "Automate regression suites and safety checks for releases.",
                "resources": [
                    {
                        "title": "DeepEval Cookbook",
                        "url": "https://github.com/confident-ai/deepeval",
                        "type": "github"
                    },
                    {
                        "title": "Testing Structured Outputs",
                        "url": "https://docs.arize.com/phoenix/docs/llm-evaluations",
                        "type": "docs"
                    },
                    {
                        "title": "Risk Scenario Playbooks",
                        "url": "https://github.com/langchain-ai/agent-risk-scenarios",
                        "type": "github"
                    }
                ],
                "task": "Automate nightly evals with pass/fail thresholds and alerting to Slack/Teams."
            },
            {
                "title": "Rollouts & Incident Response",
                "objective": "Plan gradual rollouts, fallbacks, and live incident recovery.",
                "resources": [
                    {
                        "title": "Canary Releases for LLMs",
                        "url": "https://blog.honeycomb.io/canary-llm",
                        "type": "article"
                    },
                    {
                        "title": "Incident Templates for Agent Teams",
                        "url": "https://github.com/ai-incident-response/templates",
                        "type": "github"
                    },
                    {
                        "title": "PagerDuty x LLM Alerts",
                        "url": "https://support.pagerduty.com/docs/aiops",
                        "type": "docs"
                    }
                ],
                "task": "Design and document a rollout plan with rollback paths and incident command checklist."
            }
        ],
        "capstone": {
            "title": "Agent Reliability Dashboard",
            "brief": "Deliver a monitoring pack with dashboards, alerts, and weekly health reports for an agent product.",
            "deliverable": "Grafana/Looker screenshots + incident documentation pack."
        },
        "badge": {
            "name": "Reliability Lead",
            "description": "Awarded for operationalizing agent monitoring with incident playbooks.",
            "icon": "pulse"
        }
    },
    {
        "id": "multimodal-labs",
        "title": "Multimodal Creation Studio",
        "level": "advanced",
        "timeEstimateHours": 8,
        "outcome": "Prototype end-to-end multimodal experiences spanning image, audio, and video synthesis with alignment controls.",
        "modules": [
            {
                "title": "Image & Video Foundations",
                "objective": "Work with diffusion, temporal attention, and control nets.",
                "resources": [
                    {
                        "title": "Stable Video Diffusion",
                        "url": "https://github.com/Stability-AI/stable-video-diffusion",
                        "type": "github"
                    },
                    {
                        "title": "ComfyUI Advanced Nodes",
                        "url": "https://comfyui.org/docs/advanced-nodes",
                        "type": "docs"
                    },
                    {
                        "title": "Temporal Attention Explained",
                        "url": "https://arxiv.org/abs/2401.01234",
                        "type": "article"
                    }
                ],
                "task": "Generate a storyboard with reference frames and export to MP4."
            },
            {
                "title": "Audio & Voice Layers",
                "objective": "Blend speech synthesis, Foley, and soundtrack generation.",
                "resources": [
                    {
                        "title": "Meta AudioCraft",
                        "url": "https://github.com/facebookresearch/audiocraft",
                        "type": "github"
                    },
                    {
                        "title": "ElevenLabs Voice Lab",
                        "url": "https://elevenlabs.io/docs/voice-lab",
                        "type": "docs"
                    },
                    {
                        "title": "Suno Studio Workflow",
                        "url": "https://help.suno.ai/hc/en-us/articles/13986121412115-Workflow",
                        "type": "article"
                    }
                ],
                "task": "Design a 30-second trailer with scripted narration and matched soundtrack."
            },
            {
                "title": "Safety & Distribution",
                "objective": "Apply watermarking, metadata, and usage governance.",
                "resources": [
                    {
                        "title": "Content Authenticity Initiative",
                        "url": "https://contentauthenticity.org/standards",
                        "type": "article"
                    },
                    {
                        "title": "Adobe Firefly Usage Guidelines",
                        "url": "https://helpx.adobe.com/firefly/using/guidelines.html",
                        "type": "docs"
                    },
                    {
                        "title": "Metadata Watermarking",
                        "url": "https://github.com/contentauth/c2pa",
                        "type": "github"
                    }
                ],
                "task": "Export assets with provenance metadata and watermark verification report."
            }
        ],
        "capstone": {
            "title": "Multimodal Launch Kit",
            "brief": "Produce a 60-second campaign video with companion assets and a compliance checklist.",
            "deliverable": "Asset bundle + checklist covering rights, metadata, and export settings."
        },
        "badge": {
            "name": "Creative Director",
            "description": "Awarded for shipping an aligned multimodal experience.",
            "icon": "palette"
        }
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/AI HELPER/apps/web/src/data/models.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "modelDirectory",
    ()=>modelDirectory
]);
const modelDirectory = [
    {
        id: "gpt-4o",
        name: "GPT-4o",
        provider: "OpenAI",
        releaseDate: "2024-05-13",
        contextWindow: 128000,
        pricing: {
            currency: "USD",
            input: 5,
            output: 15
        },
        licensing: "proprietary",
        deployment: "api",
        website: "https://platform.openai.com/docs/models/gpt-4o",
        tags: [
            "multimodal",
            "flagship",
            "realtime"
        ],
        sourceUrls: [
            "https://platform.openai.com/docs/models#gpt-4o",
            "https://openai.com/index/gpt-4o/"
        ]
    },
    {
        id: "gpt-4o-mini",
        name: "GPT-4o mini",
        provider: "OpenAI",
        releaseDate: "2024-06-18",
        contextWindow: 128000,
        pricing: {
            currency: "USD",
            input: 0.6,
            output: 2.4
        },
        licensing: "proprietary",
        deployment: "api",
        website: "https://platform.openai.com/docs/models/gpt-4o-mini",
        tags: [
            "cost-efficient",
            "multimodal",
            "realtime"
        ],
        sourceUrls: [
            "https://platform.openai.com/docs/models#gpt-4o-mini"
        ]
    },
    {
        id: "claude-3-5-sonnet",
        name: "Claude 3.5 Sonnet",
        provider: "Anthropic",
        releaseDate: "2024-06-20",
        contextWindow: 200000,
        pricing: {
            currency: "USD",
            input: 3,
            output: 15
        },
        licensing: "proprietary",
        deployment: "api",
        website: "https://www.anthropic.com/news/claude-3-5-sonnet",
        tags: [
            "long-context",
            "balanced",
            "enterprise"
        ],
        sourceUrls: [
            "https://www.anthropic.com/news/claude-3-5-sonnet",
            "https://www.anthropic.com/claude"
        ]
    },
    {
        id: "claude-3-5-haiku",
        name: "Claude 3.5 Haiku",
        provider: "Anthropic",
        releaseDate: "2024-07-31",
        contextWindow: 200000,
        pricing: {
            currency: "USD",
            input: 1,
            output: 5
        },
        licensing: "proprietary",
        deployment: "api",
        website: "https://www.anthropic.com/news/claude-3-5-haiku",
        tags: [
            "realtime",
            "cost-efficient"
        ],
        sourceUrls: [
            "https://www.anthropic.com/news/claude-3-5-haiku"
        ]
    },
    {
        id: "gemini-1-5-pro",
        name: "Gemini 1.5 Pro",
        provider: "Google DeepMind",
        releaseDate: "2024-02-29",
        contextWindow: 1000000,
        pricing: {
            currency: "USD",
            input: 7,
            output: 21
        },
        licensing: "proprietary",
        deployment: "api",
        website: "https://ai.google.dev/gemini-api/docs/models/gemini",
        tags: [
            "multimodal",
            "million-token",
            "google"
        ],
        sourceUrls: [
            "https://ai.google.dev/gemini-api/docs/models/gemini"
        ]
    },
    {
        id: "gemini-1-5-flash",
        name: "Gemini 1.5 Flash",
        provider: "Google DeepMind",
        releaseDate: "2024-05-14",
        contextWindow: 1000000,
        pricing: {
            currency: "USD",
            input: 0.35,
            output: 1.05
        },
        licensing: "proprietary",
        deployment: "api",
        website: "https://ai.google.dev/gemini-api/docs/models/gemini",
        tags: [
            "fast",
            "low-latency",
            "multimodal"
        ],
        sourceUrls: [
            "https://ai.google.dev/gemini-api/docs/models/gemini",
            "https://blog.google/technology/ai/google-gemini-api-updates/"
        ]
    },
    {
        id: "llama-3-70b-instruct",
        name: "Llama 3 70B Instruct",
        provider: "Meta",
        releaseDate: "2024-04-18",
        contextWindow: 128000,
        pricing: {
            currency: "USD",
            flatRate: 0
        },
        licensing: "open-source",
        deployment: "self-host",
        website: "https://ai.meta.com/llama/",
        tags: [
            "open-weight",
            "instruct",
            "meta"
        ],
        sourceUrls: [
            "https://ai.meta.com/llama/",
            "https://ai.meta.com/research/publications/the-llama-3-herd-of-models/"
        ]
    },
    {
        id: "mistral-large",
        name: "Mistral Large",
        provider: "Mistral AI",
        releaseDate: "2024-02-26",
        contextWindow: 32000,
        pricing: {
            currency: "USD",
            input: 8,
            output: 24
        },
        licensing: "proprietary",
        deployment: "api",
        website: "https://mistral.ai/technology/mistral-large/",
        tags: [
            "europe",
            "balanced",
            "api"
        ],
        sourceUrls: [
            "https://docs.mistral.ai/platform/pricing/",
            "https://docs.mistral.ai/platform/benchmarks/"
        ]
    },
    {
        id: "mixtral-8x22b",
        name: "Mixtral 8x22B",
        provider: "Mistral AI",
        releaseDate: "2024-01-15",
        contextWindow: 65536,
        pricing: {
            currency: "USD",
            flatRate: 0
        },
        licensing: "open-source",
        deployment: "self-host",
        website: "https://mistral.ai/news/mixtral-8x22b/",
        tags: [
            "moe",
            "open-weight",
            "high-quality"
        ],
        sourceUrls: [
            "https://mistral.ai/news/mixtral-8x22b/",
            "https://huggingface.co/mistralai/Mixtral-8x22B-Instruct-v0.1"
        ]
    },
    {
        id: "phi-3-medium",
        name: "Phi-3 Medium",
        provider: "Microsoft",
        releaseDate: "2024-04-23",
        contextWindow: 8192,
        pricing: {
            currency: "USD",
            input: 2,
            output: 6
        },
        licensing: "mixed",
        deployment: "hybrid",
        website: "https://azure.microsoft.com/en-us/blog/introducing-phi-3/",
        tags: [
            "compact",
            "azure",
            "code"
        ],
        sourceUrls: [
            "https://azure.microsoft.com/en-us/blog/introducing-phi-3/",
            "https://huggingface.co/microsoft/Phi-3-medium-128k-instruct"
        ]
    },
    {
        id: "dbrx",
        name: "DBRX",
        provider: "Databricks",
        releaseDate: "2024-03-27",
        contextWindow: 32000,
        pricing: {
            currency: "USD",
            flatRate: 0.6
        },
        licensing: "mixed",
        deployment: "hybrid",
        website: "https://www.databricks.com/blog/introducing-dbrx",
        tags: [
            "moe",
            "databricks",
            "rag"
        ],
        sourceUrls: [
            "https://www.databricks.com/blog/introducing-dbrx",
            "https://huggingface.co/databricks/dbrx-instruct"
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/AI HELPER/apps/web/src/data/news.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "newsSources",
    ()=>newsSources,
    "placeholderNews",
    ()=>placeholderNews,
    "weeklyDigest",
    ()=>weeklyDigest
]);
const newsSources = [
    {
        id: "openai",
        name: "OpenAI",
        url: "https://openai.com/blog",
        gradient: [
            "#06B6D4",
            "#10B981"
        ],
        weight: 1
    },
    {
        id: "anthropic",
        name: "Anthropic",
        url: "https://www.anthropic.com/news",
        gradient: [
            "#8B5CF6",
            "#F59E0B"
        ],
        weight: 0.95
    },
    {
        id: "deepmind",
        name: "Google DeepMind",
        url: "https://blog.google/technology/google-deepmind/",
        gradient: [
            "#2563EB",
            "#FBBF24"
        ],
        weight: 0.9
    },
    {
        id: "xai",
        name: "xAI",
        url: "https://x.ai/blog",
        gradient: [
            "#0F172A",
            "#2563EB"
        ],
        weight: 0.85
    },
    {
        id: "meta",
        name: "Meta AI",
        url: "https://ai.meta.com/blog",
        gradient: [
            "#A47CFB",
            "#F0A7AE"
        ],
        weight: 0.82
    },
    {
        id: "mistral",
        name: "Mistral AI",
        url: "https://mistral.ai/news",
        gradient: [
            "#EDB55F",
            "#5FD1E3"
        ],
        weight: 0.8
    },
    {
        id: "huggingface",
        name: "Hugging Face",
        url: "https://huggingface.co/blog",
        gradient: [
            "#5CC4A2",
            "#8E9FF9"
        ],
        weight: 0.78
    },
    {
        id: "microsoft",
        name: "Microsoft AI",
        url: "https://blogs.microsoft.com/ai/",
        gradient: [
            "#2A3A70",
            "#5FD1E3"
        ],
        weight: 0.76
    },
    {
        id: "stability",
        name: "Stability AI",
        url: "https://stability.ai/news",
        gradient: [
            "#EDB55F",
            "#E667A8"
        ],
        weight: 0.7
    }
];
const placeholderNews = [
    {
        id: "2024-05-openai-gpt4o",
        title: "OpenAI unveils GPT-4o with native multimodal support",
        slug: "openai-gpt4o-multimodal",
        sourceId: "openai",
        url: "https://openai.com/index/introducing-gpt-4o",
        summary: "GPT-4o blends text, vision, and audio with real-time latency and lower pricing tiers for developers.",
        tags: [
            "multimodal",
            "product"
        ],
        publishedAt: "2024-05-13T16:00:00Z",
        githubRepo: undefined,
        heroImage: "https://cdn.openai.com/gpt-4o-open-graph.jpg",
        score: 92.0,
        content: [
            "OpenAI introduced GPT-4o, a flagship model that natively understands and generates text, images, and audio.",
            "The release coincided with price reductions for the GPT-4 family and a new streaming speech API.",
            "Developers can migrate from GPT-4 Turbo with minimal changes thanks to API compatibility."
        ]
    },
    {
        id: "2024-07-claude-35-sonnet",
        title: "Anthropic releases Claude 3.5 Sonnet for enterprise assistants",
        slug: "anthropic-claude-3-5-sonnet",
        sourceId: "anthropic",
        url: "https://www.anthropic.com/news/claude-3-5-sonnet",
        summary: "Claude 3.5 Sonnet delivers higher reasoning quality with 200K context windows and tool use upgrades.",
        tags: [
            "enterprise",
            "agents"
        ],
        publishedAt: "2024-07-11T15:00:00Z",
        githubRepo: undefined,
        heroImage: "https://images.anthropic.com/claude-3-5-sonnet-card.jpg",
        score: 89.0,
        content: [
            "Anthropic's Claude 3.5 Sonnet brings improved structured reasoning and JSON-mode guardrails.",
            "The model powers the Claude.ai console and supports the updated Workspaces automation flow.",
            "Pricing remains cost-effective at $3 per million input tokens, positioning Sonnet as the default tier."
        ]
    },
    {
        id: "2024-05-gemini-15-pro",
        title: "Google makes Gemini 1.5 Pro generally available on Vertex AI",
        slug: "google-gemini-1-5-pro-ga",
        sourceId: "deepmind",
        url: "https://blog.google/technology/google-deepmind/google-gemini-updates-io-2024/",
        summary: "Gemini 1.5 Pro reaches GA with a 1M token context window and expanded audio/video inputs.",
        tags: [
            "multimodal",
            "platform"
        ],
        publishedAt: "2024-05-14T17:30:00Z",
        githubRepo: undefined,
        heroImage: "https://storage.googleapis.com/gweb-cloudblog-publish/images/gemini-15.width-1200.jpg",
        score: 87.0,
        content: [
            "Google announced general availability for Gemini 1.5 Pro alongside Vertex AI Gen App Builder updates.",
            "The release adds streaming audio input, video frame comprehension, and new safety classifiers.",
            "Pricing and quotas were published for both the standard and flash variants on the Gemini API."
        ]
    },
    {
        id: "2024-04-xai-grok15",
        title: "xAI debuts Grok-1.5 with improved reasoning and math",
        slug: "xai-grok-1-5",
        sourceId: "xai",
        url: "https://x.ai/blog/grok-1.5",
        summary: "Grok-1.5 expands context to 128K tokens and improves STEM benchmarks for the X platform assistant.",
        tags: [
            "update",
            "reasoning"
        ],
        publishedAt: "2024-04-12T10:00:00Z",
        githubRepo: undefined,
        heroImage: "https://x.ai/images/grok-1-5-card.jpg",
        score: 82.0,
        content: [
            "xAI upgraded Grok with a larger context window, better math reasoning, and inline image support.",
            "The model is rolling out to X Premium+ subscribers and powering the experimental Grok API.",
            "xAI highlighted competitive GSM8K and MATH scores versus previous Grok versions."
        ]
    },
    {
        id: "2024-04-meta-llama3",
        title: "Meta open-sources Llama 3 with 8B and 70B instruction checkpoints",
        slug: "meta-llama-3-release",
        sourceId: "meta",
        url: "https://ai.meta.com/blog/meta-llama-3/",
        summary: "Llama 3 adds multilingual capabilities, a new tokenizer, and strong open benchmarks.",
        tags: [
            "open-source",
            "release"
        ],
        publishedAt: "2024-04-18T14:00:00Z",
        githubRepo: {
            fullName: "meta-llama/llama3",
            stars: 47000,
            deltaStars: 2800
        },
        heroImage: "https://ai.meta.com/static/llama3-card.jpg",
        score: 88.0,
        content: [
            "Meta released Llama 3 8B and 70B models with an Apache 2.0-compatible community license.",
            "Upgrades include a new tokenizer, instruction tuning improvements, and better safety tooling.",
            "The weights are available on Hugging Face and AWS, with integrations for popular serving stacks."
        ]
    },
    {
        id: "2024-02-mistral-large",
        title: "Mistral launches Mistral Large on Azure and API partners",
        slug: "mistral-large-launch",
        sourceId: "mistral",
        url: "https://mistral.ai/news/mistral-large/",
        summary: "Mistral Large anchors the French startup's paid API with multilingual strength and reasoning gains.",
        tags: [
            "platform",
            "multilingual"
        ],
        publishedAt: "2024-02-26T08:00:00Z",
        githubRepo: undefined,
        heroImage: "https://mistral.ai/images/mistral-large-card.jpg",
        score: 84.0,
        content: [
            "Mistral detailed partnerships with Azure, Snowflake, and Databricks for managed access to Mistral Large.",
            "The dense transformer supports 32K context windows and strong results on MMLU and ARC benchmarks.",
            "Pricing starts at $0.008 per 1K input tokens via the native Mistral platform."
        ]
    },
    {
        id: "2024-06-hf-idefics2",
        title: "Hugging Face and AWS launch IDEFICS2 multimodal model",
        slug: "huggingface-idefics2",
        sourceId: "huggingface",
        url: "https://huggingface.co/blog/idefics-2",
        summary: "IDEFICS2 delivers improved image understanding and grounding capabilities for open research.",
        tags: [
            "multimodal",
            "open-source"
        ],
        publishedAt: "2024-06-26T12:00:00Z",
        githubRepo: {
            fullName: "huggingface/idefics2",
            stars: 1900,
            deltaStars: 240
        },
        heroImage: "https://huggingface.co/blog/assets/idefics-2/idefics2-card.jpg",
        score: 80.0,
        content: [
            "Hugging Face released IDEFICS2 with instruction tuning for better captioning and VQA performance.",
            "The project ships with open evaluation notebooks, dataset cards, and AWS deployment recipes.",
            "Benchmarks show gains on DocVQA, TextCaps, and MMMU compared with the first IDEFICS release."
        ]
    },
    {
        id: "2024-04-microsoft-phi3",
        title: "Microsoft introduces Phi-3 for on-device and edge AI",
        slug: "microsoft-phi-3",
        sourceId: "microsoft",
        url: "https://blogs.microsoft.com/ai/introducing-phi-3/",
        summary: "Phi-3 brings compact 4B, 8B, and 14B models with strong instruction following to Azure AI Studio.",
        tags: [
            "edge",
            "open-weight"
        ],
        publishedAt: "2024-04-23T13:30:00Z",
        githubRepo: {
            fullName: "microsoft/Phi-3CookBook",
            stars: 5600,
            deltaStars: 410
        },
        heroImage: "https://blogs.microsoft.com/wp-content/uploads/prod/sites/3/2024/04/phi3-card.jpg",
        score: 81.0,
        content: [
            "Microsoft positioned Phi-3 as a family of lightweight models optimised for phones, PCs, and IoT devices.",
            "The models are available through Azure AI Studio, Hugging Face, and NVIDIA NIM containers.",
            "Benchmarks showcase competitive performance relative to larger 7B and 13B-class models."
        ]
    },
    {
        id: "2024-05-anthropic-workflows",
        title: "Anthropic introduces Claude Workflows and Projects",
        slug: "anthropic-claude-workflows",
        sourceId: "anthropic",
        url: "https://www.anthropic.com/news/claude-workflows",
        summary: "Claude Workflows and Projects bring reusable automations and shared contexts to Anthropic's enterprise suite.",
        tags: [
            "enterprise",
            "workflows"
        ],
        publishedAt: "2024-05-01T15:00:00Z",
        githubRepo: undefined,
        heroImage: undefined,
        score: 83.0,
        content: [
            "Anthropic launched Claude Workflows so teams can compose multi-step automations that mix tool calls, prompts, and guardrails.",
            "Projects provide shared long-term memory for assistants, allowing analysts to reuse data sources and instructions across workflows.",
            "The features are rolling out to Claude for Teams and Enterprise customers alongside new admin governance controls."
        ]
    },
    {
        id: "2024-02-stable-diffusion-3",
        title: "Stability AI previews Stable Diffusion 3 with improved coherence",
        slug: "stability-stable-diffusion-3",
        sourceId: "stability",
        url: "https://stability.ai/news/stable-diffusion-3",
        summary: "SD3 introduces a multi-teacher architecture for higher fidelity text-to-image generation.",
        tags: [
            "multimodal",
            "image"
        ],
        publishedAt: "2024-02-22T09:00:00Z",
        githubRepo: undefined,
        heroImage: "https://stability.ai/images/sd3-card.jpg",
        score: 78.0,
        content: [
            "Stability AI shared early access to Stable Diffusion 3 with better text rendering and image quality.",
            "The model stack features a diffusion transformer pipeline trained on licensed and public domain data.",
            "Developers can join a waitlist ahead of a wider open release later in 2024."
        ]
    }
];
const weeklyDigest = {
    weekOf: "2024-07-15",
    headline: "Weekly Digest | Claude 3.5 Sonnet and GPT-4o mini ship",
    summary: "OpenAI's cost-cutting GPT-4o mini and Anthropic's Claude 3.5 Sonnet headline a week of enterprise model refreshes.",
    articleIds: [
        "2024-05-openai-gpt4o",
        "2024-07-claude-35-sonnet",
        "2024-05-gemini-15-pro",
        "2024-04-meta-llama3",
        "2024-04-microsoft-phi3"
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/AI HELPER/apps/web/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchComparisonConfig",
    ()=>fetchComparisonConfig,
    "fetchComparisonModels",
    ()=>fetchComparisonModels,
    "fetchLearnTracks",
    ()=>fetchLearnTracks,
    "fetchModelDirectory",
    ()=>fetchModelDirectory,
    "fetchNewsArticleDetail",
    ()=>fetchNewsArticleDetail,
    "fetchNewsPayload",
    ()=>fetchNewsPayload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/AI HELPER/packages/types/src/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$comparisons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/packages/types/src/schemas/comparisons.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$learn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/packages/types/src/schemas/learn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/packages/types/src/schemas/models.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$news$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/packages/types/src/schemas/news.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$comparison$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/data/comparison-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$learn$2d$tracks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/data/learn-tracks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/data/models.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$news$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/data/news.ts [app-client] (ecmascript)");
;
;
;
;
;
const DEFAULT_API_BASE_URL = "http://localhost:8000";
function resolveApiBaseUrl() {
    if ("TURBOPACK compile-time truthy", 1) {
        var _process_env_NEXT_PUBLIC_API_URL;
        return (_process_env_NEXT_PUBLIC_API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL) !== null && _process_env_NEXT_PUBLIC_API_URL !== void 0 ? _process_env_NEXT_PUBLIC_API_URL : DEFAULT_API_BASE_URL;
    }
    //TURBOPACK unreachable
    ;
    var _process_env_NEXT_PUBLIC_API_URL1, _ref, _ref1;
}
function buildStaticNewsPayload() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$news$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newsPayloadSchema"].parse({
        sources: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$news$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newsSources"],
        articles: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$news$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["placeholderNews"].map((article)=>{
            var _article_githubRepo, _article_heroImage;
            return {
                ...article,
                githubRepo: (_article_githubRepo = article.githubRepo) !== null && _article_githubRepo !== void 0 ? _article_githubRepo : undefined,
                heroImage: (_article_heroImage = article.heroImage) !== null && _article_heroImage !== void 0 ? _article_heroImage : undefined
            };
        }),
        digest: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$news$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weeklyDigest"] !== null && __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$news$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weeklyDigest"] !== void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$news$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weeklyDigest"] : null
    });
}
function buildStaticComparisonConfig() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$comparisons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["comparisonConfigSchema"].parse(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$comparison$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["comparisonConfig"]);
}
function buildStaticModelProfiles() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$comparison$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modelProfiles"].map((profile)=>__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$comparisons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modelProfileSchema"].parse(profile));
}
function buildStaticLearnTracks() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$learn$2d$tracks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["learnTracks"].map((track)=>__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$learn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["learnTrackSchema"].parse(track));
}
function buildStaticModelDirectory() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modelDirectory"].map((entry)=>__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modelDirectoryEntrySchema"].parse(entry));
}
async function requestJson(path, revalidateSeconds) {
    const baseUrl = resolveApiBaseUrl();
    const endpoint = "".concat(baseUrl).concat(path);
    const options = {
        cache: "no-store"
    };
    if (revalidateSeconds !== undefined) {
        options.next = {
            revalidate: revalidateSeconds
        };
    }
    const response = await fetch(endpoint, options);
    if (!response.ok) {
        throw new Error("Request to ".concat(endpoint, " failed with status ").concat(response.status));
    }
    return response.json();
}
async function fetchNewsPayload() {
    let revalidateSeconds = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 60;
    try {
        const data = await requestJson("/news", revalidateSeconds);
        return __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$news$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newsPayloadSchema"].parse(data);
    } catch (error) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn("[fetchNewsPayload] Falling back to static dataset: ".concat(error instanceof Error ? error.message : "Unknown error"));
        }
        return buildStaticNewsPayload();
    }
}
async function fetchNewsArticleDetail(slug) {
    let revalidateSeconds = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 60;
    try {
        const data = await requestJson("/news/".concat(slug), revalidateSeconds);
        return __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$news$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newsArticleDetailSchema"].parse(data);
    } catch (error) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn("[fetchNewsArticleDetail] Falling back to static dataset: ".concat(error instanceof Error ? error.message : "Unknown error"));
        }
        const fallback = buildStaticNewsPayload();
        const article = fallback.articles.find((item)=>item.slug === slug);
        if (!article) {
            throw error instanceof Error ? error : new Error("Article not found");
        }
        var _fallback_sources_find;
        const source = (_fallback_sources_find = fallback.sources.find((item)=>item.id === article.sourceId)) !== null && _fallback_sources_find !== void 0 ? _fallback_sources_find : null;
        const related = fallback.articles.filter((item)=>item.slug !== slug).slice(0, 6);
        return __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$news$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newsArticleDetailSchema"].parse({
            article,
            source,
            related
        });
    }
}
async function fetchComparisonConfig() {
    let revalidateSeconds = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 3600;
    try {
        const data = await requestJson("/comparisons/config", revalidateSeconds);
        return __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$comparisons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["comparisonConfigSchema"].parse(data);
    } catch (error) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn("[fetchComparisonConfig] Falling back to static dataset: ".concat(error instanceof Error ? error.message : "Unknown error"));
        }
        return buildStaticComparisonConfig();
    }
}
async function fetchComparisonModels() {
    let revalidateSeconds = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 3600;
    try {
        const data = await requestJson("/comparisons/models", revalidateSeconds);
        return Array.isArray(data) ? data.map((item)=>__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$comparisons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modelProfileSchema"].parse(item)) : buildStaticModelProfiles();
    } catch (error) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn("[fetchComparisonModels] Falling back to static dataset: ".concat(error instanceof Error ? error.message : "Unknown error"));
        }
        return buildStaticModelProfiles();
    }
}
async function fetchLearnTracks() {
    let revalidateSeconds = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 3600;
    try {
        const data = await requestJson("/learn/tracks", revalidateSeconds);
        return Array.isArray(data) ? data.map((item)=>__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$learn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["learnTrackSchema"].parse(item)) : buildStaticLearnTracks();
    } catch (error) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn("[fetchLearnTracks] Falling back to static dataset: ".concat(error instanceof Error ? error.message : "Unknown error"));
        }
        return buildStaticLearnTracks();
    }
}
async function fetchModelDirectory() {
    let revalidateSeconds = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 3600;
    try {
        const data = await requestJson("/comparisons/models", revalidateSeconds);
        if (!Array.isArray(data)) {
            return buildStaticModelDirectory();
        }
        return data.map((item)=>{
            const pricing = item.pricing.reduce((acc, tier)=>{
                var _tier_currency;
                const currency = (_tier_currency = tier.currency) !== null && _tier_currency !== void 0 ? _tier_currency : acc.currency;
                acc.currency = currency;
                if (tier.tier === "input") acc.input = tier.pricePerMillion;
                if (tier.tier === "output") acc.output = tier.pricePerMillion;
                if (tier.tier === "requests") acc.flatRate = tier.pricePerMillion;
                return acc;
            }, {
                currency: "USD"
            });
            var _item_website, _ref;
            return __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modelDirectoryEntrySchema"].parse({
                id: item.id,
                name: item.name,
                provider: item.provider,
                releaseDate: item.releaseDate,
                contextWindow: item.contextWindow,
                pricing,
                licensing: item.license === "open-source" ? "open-source" : item.license === "proprietary" ? "proprietary" : "mixed",
                deployment: item.availability,
                website: (_ref = (_item_website = item.website) !== null && _item_website !== void 0 ? _item_website : item.sources[0]) !== null && _ref !== void 0 ? _ref : "https://example.com",
                tags: item.context.modalities,
                sourceUrls: item.sources
            });
        });
    } catch (error) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn("[fetchModelDirectory] Falling back to static dataset: ".concat(error instanceof Error ? error.message : "Unknown error"));
        }
        return buildStaticModelDirectory();
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/AI HELPER/apps/web/src/lib/design/tokens.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "designTokens",
    ()=>designTokens
]);
const designTokens = {
    mode: {
        dark: {
            background: "#0F172A",
            backgroundAlt: "#111D33",
            surface: "#1E293B",
            surfaceMuted: "#19253A",
            surfaceElevated: "#24324F",
            outlineSoft: "rgba(148, 163, 184, 0.16)",
            outlineStrong: "rgba(148, 163, 184, 0.28)",
            textPrimary: "#E2E8F0",
            textMuted: "#94A3B8"
        },
        light: {
            background: "#F9FAFB",
            backgroundAlt: "#F1F5F9",
            surface: "#FFFFFF",
            surfaceMuted: "#F1F5F9",
            surfaceElevated: "#E2E8F0",
            outlineSoft: "rgba(15, 23, 42, 0.08)",
            outlineStrong: "rgba(15, 23, 42, 0.16)",
            textPrimary: "#0F172A",
            textMuted: "#334155"
        }
    },
    accent: {
        primary: "#2563EB",
        primaryDeep: "#1E3A8A",
        secondary: "#06B6D4",
        tertiary: "#8B5CF6",
        quaternary: "#F59E0B",
        green: "#10B981"
    },
    chartPalette: {
        modelA: "#2563EB",
        modelB: "#F59E0B",
        modelC: "#8B5CF6",
        modelD: "#10B981"
    },
    gradients: {
        hero: [
            "#0F172A",
            "#1E293B"
        ],
        aurora: [
            "#2563EB",
            "#06B6D4"
        ],
        horizon: [
            "#1E3A8A",
            "#2563EB"
        ],
        ember: [
            "#8B5CF6",
            "#F59E0B"
        ],
        digest: [
            "#2563EB",
            "#06B6D4",
            "#10B981"
        ],
        openai: [
            "#06B6D4",
            "#10B981"
        ],
        anthropic: [
            "#8B5CF6",
            "#F59E0B"
        ],
        deepmind: [
            "#2563EB",
            "#06B6D4"
        ],
        xai: [
            "#0F172A",
            "#2563EB"
        ]
    },
    typography: {
        display: "'Playfair Display', 'Fraunces', serif",
        heading: "'Playfair Display', 'Fraunces', serif",
        body: "'Manrope', 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        mono: "'Geist Mono', 'IBM Plex Mono', monospace"
    },
    radius: {
        lg: "1.25rem",
        xl: "1.75rem",
        xxl: "2.5rem"
    },
    shadow: {
        ambient: "0 45px 120px rgba(8, 14, 30, 0.55)",
        soft: "0 24px 60px rgba(15, 23, 42, 0.35)",
        depth: "0 32px 80px rgba(15, 23, 42, 0.5)",
        glow: "0 0 40px rgba(37, 99, 235, 0.32)"
    },
    motion: {
        duration: {
            micro: 120,
            fast: 180,
            medium: 280,
            slow: 420
        },
        easing: {
            standard: "cubic-bezier(0.21, 0.45, 0.1, 0.99)",
            entrance: "cubic-bezier(0.12, 0.74, 0.24, 1)",
            exit: "cubic-bezier(0.16, 0.01, 0.3, 1)"
        }
    },
    texture: {
        grainOpacity: 0.08
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/AI HELPER/apps/web/src/lib/format.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatCurrency",
    ()=>formatCurrency,
    "formatDecimal",
    ()=>formatDecimal,
    "formatFullDate",
    ()=>formatFullDate,
    "formatMonthYear",
    ()=>formatMonthYear,
    "formatNumber",
    ()=>formatNumber,
    "formatPercent",
    ()=>formatPercent,
    "formatSignedNumber",
    ()=>formatSignedNumber
]);
const numberFormatter = new Intl.NumberFormat("en-US");
const monthYearFormatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC"
});
const fullDateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
});
function formatNumber(value) {
    if (value === undefined || value === null) {
        return "";
    }
    return numberFormatter.format(value);
}
function formatSignedNumber(value) {
    const formatted = numberFormatter.format(Math.abs(value));
    if (value > 0) {
        return "+".concat(formatted);
    }
    if (value < 0) {
        return "-".concat(formatted);
    }
    return formatted;
}
function formatMonthYear(value) {
    const date = value instanceof Date ? value : new Date(value);
    return monthYearFormatter.format(date);
}
function formatFullDate(value) {
    const date = value instanceof Date ? value : new Date(value);
    return fullDateFormatter.format(date);
}
const decimalFormatters = new Map();
function getDecimalFormatter(fractionDigits) {
    if (!decimalFormatters.has(fractionDigits)) {
        decimalFormatters.set(fractionDigits, new Intl.NumberFormat("en-US", {
            minimumFractionDigits: fractionDigits,
            maximumFractionDigits: fractionDigits
        }));
    }
    return decimalFormatters.get(fractionDigits);
}
function formatDecimal(value) {
    let fractionDigits = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    return getDecimalFormatter(fractionDigits).format(value);
}
function formatPercent(value) {
    let fractionDigits = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    return "".concat(formatDecimal(value, fractionDigits), "%");
}
const currencyFormatters = new Map();
function getCurrencyFormatter(currency, minimumFractionDigits, maximumFractionDigits) {
    const key = "".concat(currency, "-").concat(minimumFractionDigits, "-").concat(maximumFractionDigits);
    if (!currencyFormatters.has(key)) {
        currencyFormatters.set(key, new Intl.NumberFormat("en-US", {
            style: "currency",
            currency,
            minimumFractionDigits,
            maximumFractionDigits
        }));
    }
    return currencyFormatters.get(key);
}
function formatCurrency(value) {
    let currency = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "USD", options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var _options_minimumFractionDigits;
    const minimumFractionDigits = (_options_minimumFractionDigits = options.minimumFractionDigits) !== null && _options_minimumFractionDigits !== void 0 ? _options_minimumFractionDigits : value < 10 && value % 1 !== 0 ? 2 : 0;
    var _options_maximumFractionDigits;
    const maximumFractionDigits = (_options_maximumFractionDigits = options.maximumFractionDigits) !== null && _options_maximumFractionDigits !== void 0 ? _options_maximumFractionDigits : minimumFractionDigits;
    return getCurrencyFormatter(currency, minimumFractionDigits, maximumFractionDigits).format(value);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewsroomFeed",
    ()=>NewsroomFeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/lib/design/tokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/lib/format.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const DEFAULT_REFRESH_INTERVAL = 2 * 60 * 1000; // 2 minutes
function NewsroomFeed(param) {
    let { initial, refreshIntervalMs = DEFAULT_REFRESH_INTERVAL } = param;
    _s();
    const [payload, setPayload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial);
    const [lastUpdated, setLastUpdated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [isRefreshing, setIsRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const sourceLookup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NewsroomFeed.useMemo[sourceLookup]": ()=>new Map(payload.sources.map({
                "NewsroomFeed.useMemo[sourceLookup]": (source)=>[
                        source.id,
                        source
                    ]
            }["NewsroomFeed.useMemo[sourceLookup]"]))
    }["NewsroomFeed.useMemo[sourceLookup]"], [
        payload.sources
    ]);
    const getGradient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NewsroomFeed.useCallback[getGradient]": (sourceId)=>{
            const source = sourceId ? sourceLookup.get(sourceId) : undefined;
            var _source_gradient;
            const gradient = (_source_gradient = source === null || source === void 0 ? void 0 : source.gradient) !== null && _source_gradient !== void 0 ? _source_gradient : __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].gradients.digest;
            return "linear-gradient(140deg, ".concat(gradient.join(", "), ")");
        }
    }["NewsroomFeed.useCallback[getGradient]"], [
        sourceLookup
    ]);
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NewsroomFeed.useCallback[refresh]": async function() {
            let showSpinner = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
            if (showSpinner) {
                setIsRefreshing(true);
            }
            try {
                var _nextPayload_articles_, _payload_articles_;
                const nextPayload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchNewsPayload"])(30);
                const nextLatestId = (_nextPayload_articles_ = nextPayload.articles[0]) === null || _nextPayload_articles_ === void 0 ? void 0 : _nextPayload_articles_.id;
                const currentLatestId = (_payload_articles_ = payload.articles[0]) === null || _payload_articles_ === void 0 ? void 0 : _payload_articles_.id;
                if (nextLatestId && nextLatestId !== currentLatestId) {
                    setPayload(nextPayload);
                    setLastUpdated(new Date());
                } else if (!nextLatestId) {
                    setPayload(nextPayload);
                    setLastUpdated(new Date());
                }
                setError(null);
            } catch (err) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("[NewsroomFeed] refresh failed", err);
                }
                setError(err instanceof Error ? err.message : "Unable to refresh feed");
            } finally{
                if (showSpinner) {
                    setIsRefreshing(false);
                }
            }
        }
    }["NewsroomFeed.useCallback[refresh]"], [
        payload.articles
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewsroomFeed.useEffect": ()=>{
            if (refreshIntervalMs <= 0) return;
            const id = setInterval({
                "NewsroomFeed.useEffect.id": ()=>{
                    void refresh(false);
                }
            }["NewsroomFeed.useEffect.id"], refreshIntervalMs);
            return ({
                "NewsroomFeed.useEffect": ()=>clearInterval(id)
            })["NewsroomFeed.useEffect"];
        }
    }["NewsroomFeed.useEffect"], [
        refresh,
        refreshIntervalMs
    ]);
    const { digest, articles, sources } = payload;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex flex-col gap-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex flex-col gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                initial: {
                                    opacity: 0,
                                    y: 4
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                className: "inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/40 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.42em] text-[var(--color-muted)]/85",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex h-2 w-2 animate-pulse rounded-full bg-[var(--accent-secondary)]",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this),
                                    "Live Signal Deck"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs uppercase tracking-[0.32em] text-[var(--color-muted)]/70",
                                children: [
                                    "Updated ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatFullDate"])(lastUpdated)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-semibold text-[var(--color-foreground)] sm:text-[42px]",
                                children: "AI Newsroom Briefings"
                            }, void 0, false, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "max-w-3xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg",
                                children: "Trusted coverage from official AI labs and ecosystem partners. We ingest verified RSS feeds, score launches, and package rapid-fire summaries so you can stay in the product without doomscrolling."
                            }, void 0, false, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>refresh(),
                                className: "inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)]/70 bg-[var(--color-surface)]/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]/80 transition hover:text-[var(--color-foreground)]",
                                disabled: isRefreshing,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-2 w-2 rounded-full ".concat(isRefreshing ? "bg-[var(--accent-secondary)] animate-ping" : "bg-[var(--accent-secondary)]")
                                    }, void 0, false, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    "Refresh"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-[var(--accent-quaternary)]",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            digest ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-8 lg:grid-cols-[1.35fr_1fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "relative overflow-hidden rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/50 px-12 py-10 shadow-[var(--shadow-soft)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "aria-hidden": true,
                                className: "absolute inset-0 opacity-80",
                                style: {
                                    background: "linear-gradient(140deg, ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].gradients.digest.join(", "), ")")
                                }
                            }, void 0, false, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex h-full flex-col gap-6 text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between text-[11px] uppercase tracking-[0.4em] text-white/70",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Weekly Digest"
                                            }, void 0, false, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    digest.articleIds.length,
                                                    " STORIES"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-3xl font-semibold leading-tight",
                                                children: digest.headline
                                            }, void 0, false, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-base text-white/80",
                                                children: digest.summary
                                            }, void 0, false, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                                lineNumber: 137,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-auto flex flex-wrap gap-3 text-[11px] text-white/80",
                                        children: digest.articleIds.map((articleId)=>{
                                            const article = articles.find((item)=>item.id === articleId);
                                            if (!article) return null;
                                            const source = sourceLookup.get(article.sourceId);
                                            var _source_name;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full border border-white/25 bg-white/10 px-3 py-1",
                                                children: (_source_name = source === null || source === void 0 ? void 0 : source.name) !== null && _source_name !== void 0 ? _source_name : "Unknown"
                                            }, articleId, false, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                                lineNumber: 145,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-white/65",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex h-2 w-2 rounded-full bg-white/80",
                                                "aria-hidden": true
                                            }, void 0, false, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, this),
                                            "Auto-built every Sunday 18:00 UTC"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "flex h-full flex-col gap-6 rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/40 px-10 py-8 shadow-[var(--shadow-soft)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs uppercase tracking-[0.38em] text-[var(--color-muted)]/75",
                                        children: "Ingestion Approach"
                                    }, void 0, false, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold text-[var(--color-foreground)]",
                                        children: "Cron-staged, QA-reviewed"
                                    }, void 0, false, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm leading-relaxed text-[var(--color-muted)]",
                                        children: "Thirty-minute RSS pulls, structured summaries, and delta scoring for GitHub repos keep this feed aligned with primary sources. Prometheus-backed metrics and alerting ensure reliability."
                                    }, void 0, false, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-[var(--radius-xl)] border border-[var(--border-soft)]/50 bg-[var(--color-surface-elevated)]/40 p-6 text-sm text-[var(--color-muted)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]/80",
                                        children: "Source Mix"
                                    }, void 0, false, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-4 space-y-2",
                                        children: sources.slice(0, 4).map((source)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: source.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--color-muted)]/70",
                                                        children: [
                                                            "Weight ",
                                                            source.weight.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, source.id, true, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                                lineNumber: 173,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                lineNumber: 123,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 md:grid-cols-2",
                children: articles.map((article)=>{
                    const source = sourceLookup.get(article.sourceId);
                    var _source_name;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "group relative overflow-hidden rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/55 bg-[var(--color-surface)]/40 p-6 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-depth)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "aria-hidden": true,
                                className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-80",
                                style: {
                                    background: getGradient(article.sourceId)
                                }
                            }, void 0, false, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                lineNumber: 192,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex h-full flex-col gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]/80",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: (_source_name = source === null || source === void 0 ? void 0 : source.name) !== null && _source_name !== void 0 ? _source_name : "Unknown Source"
                                            }, void 0, false, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                                lineNumber: 199,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatFullDate"])(new Date(article.publishedAt))
                                            }, void 0, false, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                                lineNumber: 200,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                        lineNumber: 198,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-semibold leading-snug text-[var(--color-foreground)]",
                                        children: article.title
                                    }, void 0, false, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                        lineNumber: 202,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm leading-relaxed text-[var(--color-muted)]",
                                        children: article.summary
                                    }, void 0, false, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                        lineNumber: 203,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.32em] text-[var(--color-muted)]/80",
                                        children: [
                                            article.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full border border-[var(--border-soft)]/60 bg-white/5 px-3 py-1 text-white/80",
                                                    children: tag
                                                }, tag, false, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 21
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white/80",
                                                children: [
                                                    "Score ",
                                                    article.score.toFixed(1)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                                lineNumber: 210,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                        lineNumber: 204,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-auto flex flex-col gap-3 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between",
                                        children: [
                                            article.githubRepo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex flex-col sm:flex-row sm:items-center sm:gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-[var(--color-foreground)]/90",
                                                        children: article.githubRepo.fullName
                                                    }, void 0, false, {
                                                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--color-muted)]/75",
                                                        children: [
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(article.githubRepo.stars),
                                                            " stars (",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatSignedNumber"])(article.githubRepo.deltaStars),
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                                lineNumber: 216,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[var(--color-muted)]/70",
                                                children: "Official release only"
                                            }, void 0, false, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                                lineNumber: 225,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/news/".concat(article.slug),
                                                className: "inline-flex items-center gap-2 text-sm font-medium text-[var(--color-foreground)] transition-colors duration-200 hover:text-white",
                                                children: [
                                                    "Deep dive",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "aria-hidden": true,
                                                        className: "text-lg",
                                                        children: ">"
                                                    }, void 0, false, {
                                                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                                lineNumber: 227,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                        lineNumber: 214,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                lineNumber: 197,
                                columnNumber: 15
                            }, this)
                        ]
                    }, article.id, true, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                        lineNumber: 188,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_s(NewsroomFeed, "EziGxXe/lMoM++YiLI4TJ4DJWVk=");
_c = NewsroomFeed;
var _c;
__turbopack_context__.k.register(_c, "NewsroomFeed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=AI%20HELPER_ac9424f1._.js.map