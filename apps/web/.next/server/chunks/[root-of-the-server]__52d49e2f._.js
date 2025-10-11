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
"[project]/AI HELPER/packages/types/src/schemas/news.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/zod/v3/external.js [app-route] (ecmascript) <export * as z>");
;
const newsSourceSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    url: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url(),
    gradient: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].tuple([
        __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    ]),
    weight: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0)
});
const newsArticleSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    slug: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    sourceId: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    url: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url(),
    summary: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    tags: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).default([]),
    publishedAt: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().datetime(),
    githubRepo: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        fullName: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        stars: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0),
        deltaStars: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int()
    }).optional(),
    heroImage: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional(),
    score: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    content: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).default([])
});
const weeklyDigestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    weekOf: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().date(),
    headline: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    summary: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    articleIds: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).max(10)
});
const newsPayloadSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    sources: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(newsSourceSchema),
    articles: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(newsArticleSchema),
    digest: weeklyDigestSchema.nullable()
});
const newsArticleDetailSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    article: newsArticleSchema,
    source: newsSourceSchema.nullable(),
    related: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(newsArticleSchema)
});
}),
"[project]/AI HELPER/packages/types/src/schemas/comparisons.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/zod/v3/external.js [app-route] (ecmascript) <export * as z>");
;
const benchmarkSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    higherIsBetter: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    unit: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable()
});
const pricingTierSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    tier: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "input",
        "output",
        "requests"
    ]),
    pricePerMillion: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nonnegative(),
    currency: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("USD")
});
const benchmarkScoreSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    benchmarkId: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    score: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
    normalizedScore: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
    source: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().nullable()
});
const modelContextSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    maxTokens: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive().nullable(),
    modalities: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).default([
        "text"
    ]),
    notes: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable()
});
const modelProfileSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    provider: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    releaseDate: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    contextWindow: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive(),
    license: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    availability: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "api",
        "self-host",
        "hybrid"
    ]),
    benchmarks: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(benchmarkScoreSchema),
    pricing: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(pricingTierSchema),
    context: modelContextSchema,
    website: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().nullable(),
    summary: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    sources: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url()).min(1)
});
const comparisonConfigSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    defaultModelIds: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).min(2).max(4),
    benchmarks: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(benchmarkSchema)
});
}),
"[project]/AI HELPER/packages/types/src/schemas/learn.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/zod/v3/external.js [app-route] (ecmascript) <export * as z>");
;
const learnResourceSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    url: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url(),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "article",
        "video",
        "docs",
        "github",
        "exercise"
    ]),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const learnModuleSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    objective: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    resources: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(learnResourceSchema).min(1).max(5),
    task: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const capstoneSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    brief: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    deliverable: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const badgeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const learnTrackSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    level: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "beginner",
        "intermediate",
        "advanced"
    ]),
    timeEstimateHours: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive(),
    outcome: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    modules: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(learnModuleSchema).min(3),
    capstone: capstoneSchema,
    badge: badgeSchema
});
}),
"[project]/AI HELPER/packages/types/src/schemas/models.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "modelDirectoryEntrySchema",
    ()=>modelDirectoryEntrySchema,
    "modelFilterSchema",
    ()=>modelFilterSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/zod/v3/external.js [app-route] (ecmascript) <export * as z>");
;
const modelDirectoryEntrySchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    provider: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    releaseDate: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().date(),
    contextWindow: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive(),
    pricing: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        currency: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("USD"),
        input: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nonnegative().optional(),
        output: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nonnegative().optional(),
        flatRate: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nonnegative().optional()
    }),
    licensing: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "proprietary",
        "open-source",
        "mixed"
    ]),
    deployment: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "api",
        "self-host",
        "hybrid"
    ]),
    website: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url(),
    tags: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).default([]),
    sourceUrls: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url()).min(1)
});
const modelFilterSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    providers: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
    license: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "proprietary",
        "open-source",
        "mixed"
    ])).optional(),
    deployment: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "api",
        "self-host",
        "hybrid"
    ])).optional()
});
}),
"[project]/AI HELPER/packages/types/src/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$news$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/packages/types/src/schemas/news.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$comparisons$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/packages/types/src/schemas/comparisons.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$learn$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/packages/types/src/schemas/learn.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$models$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/packages/types/src/schemas/models.ts [app-route] (ecmascript)");
;
;
;
;
}),
"[project]/AI HELPER/apps/web/src/data/news.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
        weight: 0.96
    },
    {
        id: "deepmind",
        name: "Google DeepMind",
        url: "https://blog.google/technology/google-deepmind/",
        gradient: [
            "#2563EB",
            "#FBBF24"
        ],
        weight: 0.94
    },
    {
        id: "xai",
        name: "xAI",
        url: "https://x.ai/blog",
        gradient: [
            "#0F172A",
            "#2563EB"
        ],
        weight: 0.9
    },
    {
        id: "perplexity",
        name: "Perplexity",
        url: "https://www.perplexity.ai/blog",
        gradient: [
            "#0EA5E9",
            "#F97316"
        ],
        weight: 0.88
    },
    {
        id: "meta",
        name: "Meta AI",
        url: "https://ai.meta.com/blog",
        gradient: [
            "#A47CFB",
            "#F0A7AE"
        ],
        weight: 0.84
    },
    {
        id: "mistral",
        name: "Mistral AI",
        url: "https://mistral.ai/news",
        gradient: [
            "#EDB55F",
            "#5FD1E3"
        ],
        weight: 0.82
    },
    {
        id: "huggingface",
        name: "Hugging Face",
        url: "https://huggingface.co/blog",
        gradient: [
            "#5CC4A2",
            "#8E9FF9"
        ],
        weight: 0.8
    },
    {
        id: "microsoft",
        name: "Microsoft AI",
        url: "https://blogs.microsoft.com/ai/",
        gradient: [
            "#2A3A70",
            "#5FD1E3"
        ],
        weight: 0.78
    },
    {
        id: "stability",
        name: "Stability AI",
        url: "https://stability.ai/news",
        gradient: [
            "#EDB55F",
            "#E667A8"
        ],
        weight: 0.74
    }
];
const placeholderNews = [
    {
        id: "2025-09-openai-gpt5",
        title: "OpenAI launches GPT-5 with unified realtime intelligence",
        slug: "openai-gpt-5-launch",
        sourceId: "openai",
        url: "https://openai.com/blog/introducing-gpt-5",
        summary: "GPT-5 arrives with a one-million token context window, hybrid symbolic-neural reasoning, and agent-native APIs for assistants.",
        tags: [
            "gpt-5",
            "multimodal",
            "agents"
        ],
        publishedAt: "2025-09-12T15:30:00Z",
        githubRepo: undefined,
        heroImage: "https://openai.com/content/images/gpt-5-card.jpg",
        score: 98,
        content: [
            "GPT-5 introduces dynamic context folding, giving teams a million-token working memory with low-latency streaming.",
            "OpenAI's new Agent API orchestrates assistants that handle tool routing, background jobs, and realtime collaboration across channels.",
            "Pricing tiers include dedicated throughput for enterprise copilots plus on-device student editions."
        ]
    },
    {
        id: "2025-08-anthropic-claude-4-2-sonnet",
        title: "Anthropic unveils Claude 4.2 Sonnet for regulated automations",
        slug: "anthropic-claude-4-2-sonnet",
        sourceId: "anthropic",
        url: "https://www.anthropic.com/news/claude-4-2-sonnet",
        summary: "Claude 4.2 Sonnet adds evidence tracing, 320K context, and compliance-grade workflow auditing for enterprises.",
        tags: [
            "claude",
            "enterprise",
            "compliance"
        ],
        publishedAt: "2025-08-21T17:00:00Z",
        githubRepo: undefined,
        heroImage: "https://www.anthropic.com/assets/claude-4-2-card.jpg",
        score: 95,
        content: [
            "Anthropic shipped Policy Trace so reviewers can replay tool calls, prompts, and guardrails across long automations.",
            "The upgraded Claude Workbench delivers low-latency 320K context navigation with multi-user editing.",
            "New pricing bundles pair Claude 4.2 with Anthropic's retrieval and knowledge graph services."
        ]
    },
    {
        id: "2025-07-gemini-2-5-pro",
        title: "Google DeepMind ships Gemini 2.5 Pro with live video reasoning",
        slug: "google-gemini-2-5-pro",
        sourceId: "deepmind",
        url: "https://deepmind.google/announcements/gemini-2-5-pro",
        summary: "Gemini 2.5 Pro interprets streaming video, schedules multi-agent plans, and integrates across Workspace automations.",
        tags: [
            "gemini",
            "multimodal",
            "workspace"
        ],
        publishedAt: "2025-07-30T14:00:00Z",
        githubRepo: undefined,
        heroImage: "https://deepmind.google/static/gemini-2-5-card.jpg",
        score: 94,
        content: [
            "Gemini 2.5 Pro introduces cross-modal retrieval spanning video, audio, and documents in a million-token buffer.",
            "Developers gain new Flow Studio templates for combining Gemini with Vertex AI Agent Builder and AppSheet.",
            "Safety updates include contextual watermarking and partner-verifiable audit logs."
        ]
    },
    {
        id: "2025-06-xai-grok-4",
        title: "xAI releases Grok 4 with open alignment data",
        slug: "xai-grok-4-release",
        sourceId: "xai",
        url: "https://x.ai/blog/grok-4",
        summary: "Grok 4 expands xAI's MoE architecture, shipping multilingual reasoning, grounded citations, and a public safety tuning dataset.",
        tags: [
            "grok",
            "xai",
            "alignment"
        ],
        publishedAt: "2025-06-26T19:45:00Z",
        githubRepo: undefined,
        heroImage: "https://x.ai/assets/grok-4-card.jpg",
        score: 92,
        content: [
            "Grok 4 adds an Open Alignment initiative sharing red-team traces and safety benchmarks with researchers.",
            "Developers can deploy Grok 4 via xAI's API or self-host the compact Grok Lite variant for on-prem workloads.",
            "New reasoning kernels improve maths, planning, and guarded tool execution across devops workflows."
        ]
    },
    {
        id: "2025-05-perplexity-sonar-ultra",
        title: "Perplexity debuts Sonar Ultra with autonomous research agents",
        slug: "perplexity-sonar-ultra",
        sourceId: "perplexity",
        url: "https://www.perplexity.ai/blog/sonar-ultra",
        summary: "Sonar Ultra layers multi-agent browsing, fact graphs, and live dashboards over Perplexity's hybrid search stack.",
        tags: [
            "perplexity",
            "research",
            "agents"
        ],
        publishedAt: "2025-05-28T13:15:00Z",
        githubRepo: undefined,
        heroImage: "https://assets.perplexity.ai/sonar-ultra-card.jpg",
        score: 90,
        content: [
            "Perplexity launched Sonar Ultra for analysts who need autonomous research with verifiable citations.",
            "The release adds fact graph visualisations, Slack alerts, and follow-up query automation.",
            "Enterprise plans bundle governance dashboards and redactable research notebooks."
        ]
    },
    {
        id: "2025-05-microsoft-phi-4",
        title: "Microsoft introduces Phi-4 for Copilot+ PCs and Azure Edge",
        slug: "microsoft-phi-4",
        sourceId: "microsoft",
        url: "https://blogs.microsoft.com/ai/introducing-phi-4",
        summary: "Phi-4 blends efficient transformers with neural radiance caching, powering next-gen on-device copilots and edge inference.",
        tags: [
            "microsoft",
            "phi-4",
            "edge"
        ],
        publishedAt: "2025-05-09T16:10:00Z",
        githubRepo: {
            fullName: "microsoft/phi-4-spec",
            stars: 12800,
            deltaStars: 920
        },
        heroImage: "https://blogs.microsoft.com/wp-content/uploads/2025/05/phi-4-card.jpg",
        score: 88,
        content: [
            "Phi-4 ships with quantisation profiles for Copilot+ PCs, Azure Sphere, and HoloLens 3 reference designs.",
            "Microsoft released Responsible AI evaluation packs and open-sourced its safety harness for edge deployments.",
            "A new Phi Playground helps developers fuse sensor data and LLM reasoning for industrial inspection workflows."
        ]
    },
    {
        id: "2025-04-meta-llama4",
        title: "Meta open-sources Llama 4 120B with streaming adapters",
        slug: "meta-llama-4-120b",
        sourceId: "meta",
        url: "https://ai.meta.com/blog/llama-4/",
        summary: "Llama 4 120B Instruct arrives with fast adapters, mixture routing, and a Responsible Use license for commercial teams.",
        tags: [
            "meta",
            "open-source",
            "llama4"
        ],
        publishedAt: "2025-04-18T12:00:00Z",
        githubRepo: {
            fullName: "meta-llama/llama4",
            stars: 58000,
            deltaStars: 4100
        },
        heroImage: "https://ai.meta.com/static/llama4-card.jpg",
        score: 87,
        content: [
            "Meta launched Llama 4 with a new streaming adapter system that lowers latency on commodity GPUs.",
            "Instruction-tuned checkpoints cover multilingual chat, code, and scientific reasoning tasks.",
            "The release includes Llama Guard 4 alignment artifacts and partner audits for transparency."
        ]
    },
    {
        id: "2025-04-mistral-next",
        title: "Mistral announces Mistral Next 12x24B for retrieval-native apps",
        slug: "mistral-next-12x24b",
        sourceId: "mistral",
        url: "https://mistral.ai/news/mistral-next-12x24b",
        summary: "Mistral Next leverages a MoE architecture optimised for retrieval-augmented generation and multi-agent routing.",
        tags: [
            "mistral",
            "moe",
            "rag"
        ],
        publishedAt: "2025-04-02T10:00:00Z",
        githubRepo: undefined,
        heroImage: "https://mistral.ai/images/mistral-next-card.jpg",
        score: 86,
        content: [
            "Mistral Next 12x24B improves expert sparsity for lower latency while matching dense model accuracy.",
            "The company introduced Retrieval Profiles to tune grounding behaviour across proprietary knowledge bases.",
            "Partners can deploy via managed endpoints, on-prem clusters, or NVIDIA DGX Cloud."
        ]
    },
    {
        id: "2025-03-huggingface-cascade",
        title: "Hugging Face and AWS release Cascade for open multimodal alignment",
        slug: "huggingface-cascade",
        sourceId: "huggingface",
        url: "https://huggingface.co/blog/cascade",
        summary: "Cascade is a family of open multimodal models trained on curated audio, video, and document corpora with transparent licensing.",
        tags: [
            "huggingface",
            "multimodal",
            "open"
        ],
        publishedAt: "2025-03-19T11:20:00Z",
        githubRepo: {
            fullName: "huggingface/cascade",
            stars: 9200,
            deltaStars: 680
        },
        heroImage: "https://huggingface.co/blog/assets/cascade/cascade-card.jpg",
        score: 84,
        content: [
            "Cascade models focus on open evaluation and auditable data pipelines with dataset cards for every modality.",
            "AWS and Hugging Face provide deployment recipes on Bedrock, SageMaker, and serverless inference.",
            "The project ships with evaluation scripts covering DocVQA, VideoQA, and audio captioning benchmarks."
        ]
    },
    {
        id: "2025-02-stability-sd4",
        title: "Stability AI previews Stable Diffusion 4 with neural render fusion",
        slug: "stability-stable-diffusion-4",
        sourceId: "stability",
        url: "https://stability.ai/news/stable-diffusion-4",
        summary: "Stable Diffusion 4 combines diffusion transformers and neural radiance caching for higher fidelity controllable imagery.",
        tags: [
            "stability",
            "image",
            "open-source"
        ],
        publishedAt: "2025-02-12T09:30:00Z",
        githubRepo: undefined,
        heroImage: "https://stability.ai/images/sd4-card.jpg",
        score: 82,
        content: [
            "Stable Diffusion 4 adds dual-path rendering for crisp typography, photoreal faces, and cinematic lighting controls.",
            "Stability introduced a creator license allowing commercial use with attribution-based incentives.",
            "Partners can join the Studio Alpha program for direct feedback loops and dataset contributions."
        ]
    }
];
const weeklyDigest = {
    weekOf: "2025-09-15",
    headline: "Weekly Digest | GPT-5, Claude 4.2, and Gemini 2.5 headline a breakthrough week",
    summary: "OpenAI, Anthropic, and Google DeepMind launched new flagship models while xAI and Perplexity rolled out agent upgrades.",
    articleIds: [
        "2025-09-openai-gpt5",
        "2025-08-anthropic-claude-4-2-sonnet",
        "2025-07-gemini-2-5-pro",
        "2025-06-xai-grok-4",
        "2025-05-perplexity-sonar-ultra"
    ]
};
}),
"[project]/AI HELPER/apps/web/src/lib/live-news.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildLiveNewsPayload",
    ()=>buildLiveNewsPayload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$rss$2d$parser$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/rss-parser/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/AI HELPER/packages/types/src/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$news$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/packages/types/src/schemas/news.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$news$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/data/news.ts [app-route] (ecmascript)");
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
const parser = new __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$rss$2d$parser$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]({
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
                const tags = Array.isArray(item.categories) ? item.categories.map((tag)=>typeof tag === "string" ? tag : tag?.toString() ?? "").filter(Boolean).slice(0, 6) : [];
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
        sources: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$news$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["newsSources"],
        articles: finalArticles,
        digest
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$news$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["newsPayloadSchema"].parse(payload);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__52d49e2f._.js.map