module.exports = [
"[project]/AI HELPER/apps/web/.next-internal/server/app/comparisons/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/AI HELPER/apps/web/src/app/favicon.ico.mjs { IMAGE => \"[project]/AI HELPER/apps/web/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/AI HELPER/apps/web/src/app/favicon.ico.mjs { IMAGE => \"[project]/AI HELPER/apps/web/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/AI HELPER/apps/web/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/AI HELPER/apps/web/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx'\n\nExpected ',', got '<lexing error: Error { error: (14351..14351, ExpectedUnicodeEscape) }>'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/AI HELPER/packages/types/src/schemas/news.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
;
const newsSourceSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    url: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url(),
    gradient: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].tuple([
        __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    ]),
    weight: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0)
});
const newsArticleSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    slug: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    sourceId: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    url: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url(),
    summary: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    tags: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).default([]),
    publishedAt: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().datetime(),
    githubRepo: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        fullName: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        stars: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0),
        deltaStars: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int()
    }).optional(),
    heroImage: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional(),
    score: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    content: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).default([])
});
const weeklyDigestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    weekOf: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().date(),
    headline: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    summary: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    articleIds: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).max(10)
});
const newsPayloadSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    sources: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(newsSourceSchema),
    articles: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(newsArticleSchema),
    digest: weeklyDigestSchema.nullable()
});
const newsArticleDetailSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    article: newsArticleSchema,
    source: newsSourceSchema.nullable(),
    related: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(newsArticleSchema)
});
}),
"[project]/AI HELPER/packages/types/src/schemas/comparisons.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
;
const benchmarkSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    higherIsBetter: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    unit: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable()
});
const pricingTierSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    tier: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "input",
        "output",
        "requests"
    ]),
    pricePerMillion: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nonnegative(),
    currency: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("USD")
});
const benchmarkScoreSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    benchmarkId: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    score: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
    normalizedScore: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
    source: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().nullable()
});
const modelContextSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    maxTokens: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive().nullable(),
    modalities: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).default([
        "text"
    ]),
    notes: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable()
});
const modelProfileSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    provider: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    releaseDate: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    contextWindow: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive(),
    license: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    availability: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "api",
        "self-host",
        "hybrid"
    ]),
    benchmarks: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(benchmarkScoreSchema),
    pricing: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(pricingTierSchema),
    context: modelContextSchema,
    website: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().nullable(),
    summary: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    sources: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url()).min(1)
});
const comparisonConfigSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    defaultModelIds: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).min(2).max(4),
    benchmarks: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(benchmarkSchema)
});
}),
"[project]/AI HELPER/packages/types/src/schemas/learn.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
;
const learnResourceSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    url: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url(),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "article",
        "video",
        "docs",
        "github",
        "exercise"
    ]),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const learnModuleSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    objective: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    resources: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(learnResourceSchema).min(1).max(5),
    task: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const capstoneSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    brief: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    deliverable: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const badgeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const learnTrackSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    level: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "beginner",
        "intermediate",
        "advanced"
    ]),
    timeEstimateHours: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive(),
    outcome: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    modules: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(learnModuleSchema).min(3),
    capstone: capstoneSchema,
    badge: badgeSchema
});
}),
"[project]/AI HELPER/packages/types/src/schemas/models.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "modelDirectoryEntrySchema",
    ()=>modelDirectoryEntrySchema,
    "modelFilterSchema",
    ()=>modelFilterSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
;
const modelDirectoryEntrySchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    provider: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    releaseDate: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().date(),
    contextWindow: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive(),
    pricing: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        currency: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("USD"),
        input: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nonnegative().optional(),
        output: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nonnegative().optional(),
        flatRate: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nonnegative().optional()
    }),
    licensing: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "proprietary",
        "open-source",
        "mixed"
    ]),
    deployment: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "api",
        "self-host",
        "hybrid"
    ]),
    website: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url(),
    tags: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).default([]),
    sourceUrls: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url()).min(1)
});
const modelFilterSchema = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    providers: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
    license: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "proprietary",
        "open-source",
        "mixed"
    ])).optional(),
    deployment: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "api",
        "self-host",
        "hybrid"
    ])).optional()
});
}),
"[project]/AI HELPER/packages/types/src/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$news$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/packages/types/src/schemas/news.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$comparisons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/packages/types/src/schemas/comparisons.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$learn$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/packages/types/src/schemas/learn.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/packages/types/src/schemas/models.ts [app-rsc] (ecmascript)");
;
;
;
;
}),
"[project]/AI HELPER/apps/web/src/data/comparison-config.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/AI HELPER/apps/web/src/data/learn-tracks.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/AI HELPER/apps/web/src/data/models.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/AI HELPER/apps/web/src/data/news.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/AI HELPER/apps/web/src/lib/api.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/AI HELPER/packages/types/src/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$comparisons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/packages/types/src/schemas/comparisons.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$learn$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/packages/types/src/schemas/learn.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/packages/types/src/schemas/models.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$news$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/packages/types/src/schemas/news.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$comparison$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/data/comparison-config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$learn$2d$tracks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/data/learn-tracks.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/data/models.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$news$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/data/news.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const DEFAULT_API_BASE_URL = "http://localhost:8000";
function resolveApiBaseUrl() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return process.env.NEXT_PUBLIC_API_URL ?? process.env.AI_HELPER_API_URL ?? process.env.API_BASE_URL ?? DEFAULT_API_BASE_URL;
}
function buildStaticNewsPayload() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$news$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["newsPayloadSchema"].parse({
        sources: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$news$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["newsSources"],
        articles: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$news$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["placeholderNews"].map((article)=>({
                ...article,
                githubRepo: article.githubRepo ?? undefined,
                heroImage: article.heroImage ?? undefined
            })),
        digest: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$news$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["weeklyDigest"] ?? null
    });
}
function buildStaticComparisonConfig() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$comparisons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["comparisonConfigSchema"].parse(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$comparison$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["comparisonConfig"]);
}
function buildStaticModelProfiles() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$comparison$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["modelProfiles"].map((profile)=>__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$comparisons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["modelProfileSchema"].parse(profile));
}
function buildStaticLearnTracks() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$learn$2d$tracks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["learnTracks"].map((track)=>__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$learn$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["learnTrackSchema"].parse(track));
}
function buildStaticModelDirectory() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["modelDirectory"].map((entry)=>__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["modelDirectoryEntrySchema"].parse(entry));
}
async function requestJson(path, revalidateSeconds) {
    const baseUrl = resolveApiBaseUrl();
    const endpoint = `${baseUrl}${path}`;
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
        throw new Error(`Request to ${endpoint} failed with status ${response.status}`);
    }
    return response.json();
}
async function fetchNewsPayload(revalidateSeconds = 60) {
    try {
        const data = await requestJson("/news", revalidateSeconds);
        return __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$news$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["newsPayloadSchema"].parse(data);
    } catch (error) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn(`[fetchNewsPayload] Falling back to static dataset: ${error instanceof Error ? error.message : "Unknown error"}`);
        }
        return buildStaticNewsPayload();
    }
}
async function fetchNewsArticleDetail(slug, revalidateSeconds = 60) {
    try {
        const data = await requestJson(`/news/${slug}`, revalidateSeconds);
        return __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$news$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["newsArticleDetailSchema"].parse(data);
    } catch (error) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn(`[fetchNewsArticleDetail] Falling back to static dataset: ${error instanceof Error ? error.message : "Unknown error"}`);
        }
        const fallback = buildStaticNewsPayload();
        const article = fallback.articles.find((item)=>item.slug === slug);
        if (!article) {
            throw error instanceof Error ? error : new Error("Article not found");
        }
        const source = fallback.sources.find((item)=>item.id === article.sourceId) ?? null;
        const related = fallback.articles.filter((item)=>item.slug !== slug).slice(0, 6);
        return __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$news$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["newsArticleDetailSchema"].parse({
            article,
            source,
            related
        });
    }
}
async function fetchComparisonConfig(revalidateSeconds = 3600) {
    try {
        const data = await requestJson("/comparisons/config", revalidateSeconds);
        return __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$comparisons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["comparisonConfigSchema"].parse(data);
    } catch (error) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn(`[fetchComparisonConfig] Falling back to static dataset: ${error instanceof Error ? error.message : "Unknown error"}`);
        }
        return buildStaticComparisonConfig();
    }
}
async function fetchComparisonModels(revalidateSeconds = 3600) {
    try {
        const data = await requestJson("/comparisons/models", revalidateSeconds);
        return Array.isArray(data) ? data.map((item)=>__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$comparisons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["modelProfileSchema"].parse(item)) : buildStaticModelProfiles();
    } catch (error) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn(`[fetchComparisonModels] Falling back to static dataset: ${error instanceof Error ? error.message : "Unknown error"}`);
        }
        return buildStaticModelProfiles();
    }
}
async function fetchLearnTracks(revalidateSeconds = 3600) {
    try {
        const data = await requestJson("/learn/tracks", revalidateSeconds);
        return Array.isArray(data) ? data.map((item)=>__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$learn$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["learnTrackSchema"].parse(item)) : buildStaticLearnTracks();
    } catch (error) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn(`[fetchLearnTracks] Falling back to static dataset: ${error instanceof Error ? error.message : "Unknown error"}`);
        }
        return buildStaticLearnTracks();
    }
}
async function fetchModelDirectory(revalidateSeconds = 3600) {
    try {
        const data = await requestJson("/comparisons/models", revalidateSeconds);
        if (!Array.isArray(data)) {
            return buildStaticModelDirectory();
        }
        return data.map((item)=>{
            const pricing = item.pricing.reduce((acc, tier)=>{
                const currency = tier.currency ?? acc.currency;
                acc.currency = currency;
                if (tier.tier === "input") acc.input = tier.pricePerMillion;
                if (tier.tier === "output") acc.output = tier.pricePerMillion;
                if (tier.tier === "requests") acc.flatRate = tier.pricePerMillion;
                return acc;
            }, {
                currency: "USD"
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$packages$2f$types$2f$src$2f$schemas$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["modelDirectoryEntrySchema"].parse({
                id: item.id,
                name: item.name,
                provider: item.provider,
                releaseDate: item.releaseDate,
                contextWindow: item.contextWindow,
                pricing,
                licensing: item.license === "open-source" ? "open-source" : item.license === "proprietary" ? "proprietary" : "mixed",
                deployment: item.availability,
                website: item.website ?? item.sources[0] ?? "https://example.com",
                tags: item.context.modalities,
                sourceUrls: item.sources
            });
        });
    } catch (error) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn(`[fetchModelDirectory] Falling back to static dataset: ${error instanceof Error ? error.message : "Unknown error"}`);
        }
        return buildStaticModelDirectory();
    }
}
}),
"[project]/AI HELPER/apps/web/src/app/comparisons/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ComparisonsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$comparisons$2f$comparison$2d$experience$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/lib/api.ts [app-rsc] (ecmascript)");
;
;
;
;
async function ComparisonsPage() {
    const [config, models] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchComparisonConfig"])(600),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchComparisonModels"])(600)
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex flex-col gap-14",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-semibold uppercase tracking-[0.42em] text-[var(--color-muted)]/80",
                        children: "Model Benchmarks"
                    }, void 0, false, {
                        fileName: "[project]/AI HELPER/apps/web/src/app/comparisons/page.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-semibold text-[var(--color-foreground)] sm:text-[42px]",
                                children: "LLM Benchmark Studio"
                            }, void 0, false, {
                                fileName: "[project]/AI HELPER/apps/web/src/app/comparisons/page.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "max-w-3xl text-base text-[var(--color-muted)] sm:text-lg",
                                children: [
                                    "Select up to four flagship models, track how they land on MMLU, GSM8K, HumanEval, and HellaSwag, and estimate run-rate pricing with a single slider. The experience mirrors the editorial spec from ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-[var(--color-foreground)]",
                                        children: "Agents.md.docx"
                                    }, void 0, false, {
                                        fileName: "[project]/AI HELPER/apps/web/src/app/comparisons/page.tsx",
                                        lineNumber: 18,
                                        columnNumber: 209
                                    }, this),
                                    " so product, research, and finance stay aligned."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AI HELPER/apps/web/src/app/comparisons/page.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/AI HELPER/apps/web/src/app/comparisons/page.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/AI HELPER/apps/web/src/app/comparisons/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/50 p-10 text-center text-sm text-[var(--color-muted)]",
                    children: "Preparing comparison studio…"
                }, void 0, false, {
                    fileName: "[project]/AI HELPER/apps/web/src/app/comparisons/page.tsx",
                    lineNumber: 25,
                    columnNumber: 11
                }, void 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$comparisons$2f$comparison$2d$experience$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ComparisonExperience"], {
                    config: config,
                    models: models
                }, void 0, false, {
                    fileName: "[project]/AI HELPER/apps/web/src/app/comparisons/page.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/AI HELPER/apps/web/src/app/comparisons/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/AI HELPER/apps/web/src/app/comparisons/page.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/AI HELPER/apps/web/src/app/comparisons/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/AI HELPER/apps/web/src/app/comparisons/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b79b408c._.js.map