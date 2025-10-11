module.exports = [
"[project]/AI HELPER/apps/web/src/components/system/error-boundary.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorBoundary",
    ()=>ErrorBoundary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const defaultFallback = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
    className: "rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/40 p-6 text-sm text-[var(--color-muted)]",
    children: [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-base font-semibold text-[var(--color-foreground)]",
            children: "Content temporarily unavailable"
        }, void 0, false, {
            fileName: "[project]/AI HELPER/apps/web/src/components/system/error-boundary.tsx",
            lineNumber: 16,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 leading-relaxed",
            children: "We couldn't render this section right now. Please refresh or try again in a few moments."
        }, void 0, false, {
            fileName: "[project]/AI HELPER/apps/web/src/components/system/error-boundary.tsx",
            lineNumber: 17,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    ]
}, void 0, true, {
    fileName: "[project]/AI HELPER/apps/web/src/components/system/error-boundary.tsx",
    lineNumber: 15,
    columnNumber: 3
}, ("TURBOPACK compile-time value", void 0));
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Component"] {
    state = {
        hasError: false
    };
    static getDerivedStateFromError() {
        return {
            hasError: true
        };
    }
    componentDidCatch(error, info) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.error("[ErrorBoundary]", error, info.componentStack);
        }
    }
    render() {
        if (this.state.hasError) {
            return this.props.fallback ?? defaultFallback;
        }
        return this.props.children;
    }
}
}),
"[project]/AI HELPER/apps/web/src/lib/analytics/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "analytics",
    ()=>analytics,
    "useAnalytics",
    ()=>useAnalytics
]);
class AnalyticsClient {
    track(event, payload) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.info("[analytics]", event, payload ?? {});
        }
    // Hook for future analytics provider wiring.
    }
    page(name, payload) {
        this.track(`page:${name}`, payload);
    }
}
const analyticsInstance = new AnalyticsClient();
function useAnalytics() {
    return analyticsInstance;
}
const analytics = analyticsInstance;
}),
"[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComparisonExperience",
    ()=>ComparisonExperience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/recharts/es6/cartesian/Bar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/recharts/es6/chart/BarChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/recharts/es6/component/LabelList.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/recharts/es6/component/Cell.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/lib/format.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$system$2f$error$2d$boundary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/components/system/error-boundary.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$analytics$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/lib/analytics/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/lib/design/tokens.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const MIN_SELECTION = 2;
const MAX_SELECTION = 4;
const INPUT_SHARE = 0.6;
const OUTPUT_SHARE = 1 - INPUT_SHARE;
const CHART_COLORS = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["designTokens"].chartPalette);
const TAB_ITEMS = [
    {
        id: "overview",
        label: "Overview"
    },
    {
        id: "charts",
        label: "Charts"
    },
    {
        id: "pricing",
        label: "Pricing"
    },
    {
        id: "summary",
        label: "Summary"
    }
];
const TAB_MOTIFS = {
    overview: {
        gradient: "radial-gradient(140% 120% at 10% -20%, rgba(37, 99, 235, 0.28), transparent 60%), radial-gradient(120% 120% at 92% 0%, rgba(6, 182, 212, 0.24), transparent 55%)",
        accent: "linear-gradient(135deg, rgba(148, 163, 184, 0.18), rgba(15, 23, 42, 0))",
        vignette: "radial-gradient(120% 120% at 50% 90%, rgba(15, 23, 42, 0.55), transparent 65%)"
    },
    charts: {
        gradient: "radial-gradient(120% 120% at 0% 0%, rgba(139, 92, 246, 0.32), transparent 60%), radial-gradient(120% 120% at 95% 25%, rgba(37, 99, 235, 0.26), transparent 56%)",
        accent: "linear-gradient(150deg, rgba(14, 165, 233, 0.2), rgba(15, 23, 42, 0))",
        vignette: "radial-gradient(120% 110% at 50% 100%, rgba(8, 13, 26, 0.58), transparent 60%)"
    },
    pricing: {
        gradient: "radial-gradient(130% 120% at 5% 5%, rgba(16, 185, 129, 0.28), transparent 58%), radial-gradient(120% 120% at 102% -10%, rgba(245, 158, 11, 0.22), transparent 64%)",
        accent: "linear-gradient(130deg, rgba(255, 255, 255, 0.18), rgba(30, 41, 59, 0))",
        vignette: "radial-gradient(120% 115% at 50% 96%, rgba(10, 12, 20, 0.52), transparent 62%)"
    },
    summary: {
        gradient: "radial-gradient(115% 120% at 0% 15%, rgba(6, 182, 212, 0.28), transparent 52%), radial-gradient(130% 120% at 100% 20%, rgba(37, 99, 235, 0.26), transparent 64%)",
        accent: "linear-gradient(160deg, rgba(148, 163, 184, 0.24), rgba(15, 23, 42, 0))",
        vignette: "radial-gradient(120% 110% at 50% 100%, rgba(8, 13, 26, 0.55), transparent 60%)"
    }
};
const PROGRESS_RADIUS = 26;
const PROGRESS_CIRCUMFERENCE = 2 * Math.PI * PROGRESS_RADIUS;
function getBenchmarkScore(model, benchmarkId) {
    return model.benchmarks.find((entry)=>entry.benchmarkId === benchmarkId);
}
function formatSourceLabel(url) {
    try {
        return new URL(url).hostname.replace(/^www\./, "");
    } catch  {
        return url;
    }
}
function computePricingRows(models, usageMillions) {
    return models.map((model)=>{
        const tiers = Object.fromEntries(model.pricing.map((tier)=>[
                tier.tier,
                tier
            ]));
        const currency = tiers.input?.currency ?? tiers.output?.currency ?? tiers.requests?.currency ?? "USD";
        const inputCost = tiers.input ? usageMillions * INPUT_SHARE * tiers.input.pricePerMillion : 0;
        const outputCost = tiers.output ? usageMillions * OUTPUT_SHARE * tiers.output.pricePerMillion : 0;
        const requestCost = tiers.requests ? usageMillions * tiers.requests.pricePerMillion : 0;
        return {
            id: model.id,
            name: model.name,
            provider: model.provider,
            currency,
            inputRate: tiers.input?.pricePerMillion,
            outputRate: tiers.output?.pricePerMillion,
            requestRate: tiers.requests?.pricePerMillion,
            estimatedMonthly: inputCost + outputCost + requestCost
        };
    });
}
function calcAverageNormalized(model, benchmarks) {
    if (!benchmarks.length) return null;
    const values = [];
    benchmarks.forEach((benchmark)=>{
        const score = getBenchmarkScore(model, benchmark.id);
        if (typeof score?.normalizedScore === "number") {
            values.push(score.normalizedScore * 100);
        } else if (typeof score?.score === "number" && benchmark.unit === "%") {
            values.push(score.score);
        }
    });
    if (!values.length) return null;
    const average = values.reduce((sum, value)=>sum + value, 0) / values.length;
    return average;
}
function ComparisonExperience({ config, models }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$analytics$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnalytics"])();
    const tabParam = searchParams.get("tab");
    const [selectedIds, setSelectedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        const modelsFromUrl = searchParams.get("models");
        if (modelsFromUrl) {
            const validIds = modelsFromUrl.split(",").filter((id)=>models.some((m)=>m.id === id));
            if (validIds.length >= MIN_SELECTION) {
                return validIds;
            }
        }
        return config.defaultModelIds;
    });
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(tabParam && TAB_ITEMS.some((item)=>item.id === tabParam) ? tabParam : "charts");
    const [usageMillions, setUsageMillions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(10);
    const [isHydrated, setIsHydrated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeBenchmarkId, setActiveBenchmarkId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>config.benchmarks[0]?.id ?? "");
    const [scoreMode, setScoreMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("normalized");
    const reduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsHydrated(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        analytics.track("comparisons_model_selection", {
            modelIds: selectedIds
        });
    }, [
        analytics,
        selectedIds
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isHydrated) return;
        const params = new URLSearchParams(searchParams);
        const modelsParam = selectedIds.join(",");
        if (params.get("models") === modelsParam) {
            return;
        }
        params.set("models", modelsParam);
        router.push(`${pathname}?${params.toString()}`, {
            scroll: false
        });
    }, [
        isHydrated,
        selectedIds,
        pathname,
        router,
        searchParams
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        analytics.track("comparisons_tab_change", {
            tab: activeTab
        });
    }, [
        analytics,
        activeTab
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isHydrated) return;
        if (searchParams.get("tab") === activeTab) {
            return;
        }
        const params = new URLSearchParams(searchParams);
        params.set("tab", activeTab);
        router.replace(`${pathname}?${params.toString()}`, {
            scroll: false
        });
    }, [
        activeTab,
        isHydrated,
        pathname,
        router,
        searchParams
    ]);
    const benchmarks = config.benchmarks;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!benchmarks.length) return;
        if (!benchmarks.some((benchmark)=>benchmark.id === activeBenchmarkId)) {
            setActiveBenchmarkId(benchmarks[0].id);
        }
    }, [
        benchmarks,
        activeBenchmarkId
    ]);
    const selectedModels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return selectedIds.map((id)=>models.find((model)=>model.id === id)).filter((model)=>Boolean(model));
    }, [
        selectedIds,
        models
    ]);
    const pricingRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>computePricingRows(selectedModels, usageMillions), [
        selectedModels,
        usageMillions
    ]);
    const normalizedScores = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>selectedModels.map((model)=>({
                model,
                average: calcAverageNormalized(model, benchmarks)
            })), [
        selectedModels,
        benchmarks
    ]);
    const normalizedScoresSorted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>normalizedScores.filter((entry)=>typeof entry.average === "number").sort((a, b)=>b.average - a.average), [
        normalizedScores
    ]);
    const benchmarkLeaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return benchmarks.map((benchmark)=>{
            const ordered = selectedModels.map((model)=>{
                const score = getBenchmarkScore(model, benchmark.id);
                const rawScore = typeof score?.score === "number" ? score.score : null;
                const normalized = typeof score?.normalizedScore === "number" ? score.normalizedScore : typeof rawScore === "number" && benchmark.unit === "%" ? rawScore / 100 : null;
                return {
                    model,
                    score: rawScore,
                    normalized
                };
            }).filter((entry)=>typeof entry.normalized === "number").sort((a, b)=>(b.normalized ?? -Infinity) - (a.normalized ?? -Infinity));
            return {
                benchmark,
                leader: ordered[0] ?? null,
                runnerUp: ordered[1] ?? null
            };
        });
    }, [
        benchmarks,
        selectedModels
    ]);
    const averageLeaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return selectedModels.map((model)=>({
                model,
                average: calcAverageNormalized(model, benchmarks)
            })).filter((entry)=>typeof entry.average === "number").sort((a, b)=>b.average - a.average);
    }, [
        selectedModels,
        benchmarks
    ]);
    const lowestCost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return [
            ...pricingRows
        ].sort((a, b)=>a.estimatedMonthly - b.estimatedMonthly)[0];
    }, [
        pricingRows
    ]);
    const tabPanelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>reduceMotion ? {
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: 1,
                transition: {
                    duration: 0.0001
                }
            },
            exit: {
                opacity: 0,
                transition: {
                    duration: 0.0001
                }
            }
        } : {
            hidden: {
                opacity: 0,
                y: 36,
                scale: 0.98,
                filter: "blur(18px)"
            },
            visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                transition: {
                    duration: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["designTokens"].motion.duration.medium / 1000,
                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["designTokens"].motion.easing.entrance
                }
            },
            exit: {
                opacity: 0,
                y: -28,
                scale: 0.985,
                filter: "blur(10px)",
                transition: {
                    duration: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["designTokens"].motion.duration.fast / 1000,
                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["designTokens"].motion.easing.exit
                }
            }
        }, [
        reduceMotion
    ]);
    const listItemVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>reduceMotion ? {
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: 1,
                transition: {
                    duration: 0.0001
                }
            }
        } : {
            hidden: {
                opacity: 0,
                y: 14
            },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["designTokens"].motion.duration.fast / 1000,
                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["designTokens"].motion.easing.standard
                }
            }
        }, [
        reduceMotion
    ]);
    const progressStrokeTransition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>reduceMotion ? {
            duration: 0.0001
        } : {
            duration: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["designTokens"].motion.duration.medium / 1000,
            ease: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["designTokens"].motion.easing.standard
        }, [
        reduceMotion
    ]);
    const tabHighlightTransition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>reduceMotion ? {
            duration: 0.0001
        } : {
            type: "spring",
            stiffness: 420,
            damping: 34,
            mass: 0.6
        }, [
        reduceMotion
    ]);
    const activeTabMotif = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>TAB_MOTIFS[activeTab], [
        activeTab
    ]);
    const listContainerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["designTokens"].motion.stagger.card,
                delayChildren: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["designTokens"].motion.stagger.card
            }
        }
    };
    function toggleModel(modelId) {
        setSelectedIds((current)=>{
            const isActive = current.includes(modelId);
            if (isActive) {
                if (current.length <= MIN_SELECTION) return current;
                return current.filter((id)=>id !== modelId);
            }
            if (current.length >= MAX_SELECTION) return current;
            return [
                ...current,
                modelId
            ];
        });
    }
    const getModelColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((modelId)=>{
        const index = selectedIds.indexOf(modelId);
        return CHART_COLORS[index % CHART_COLORS.length] ?? "#2563EB";
    }, [
        selectedIds
    ]);
    const activeBenchmark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!benchmarks.length) return null;
        return benchmarks.find((benchmark)=>benchmark.id === activeBenchmarkId) ?? benchmarks[0];
    }, [
        benchmarks,
        activeBenchmarkId
    ]);
    const comparisonRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!activeBenchmark) return [];
        const rows = selectedModels.map((model)=>{
            const score = getBenchmarkScore(model, activeBenchmark.id);
            const normalized = typeof score?.normalizedScore === "number" ? score.normalizedScore * 100 : null;
            const raw = typeof score?.score === "number" ? score.score : null;
            const value = scoreMode === "normalized" ? normalized : raw;
            if (value === null) {
                return null;
            }
            const formatted = scoreMode === "normalized" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPercent"])(value) : activeBenchmark.unit === "%" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPercent"])(value) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDecimal"])(value, activeBenchmark.unit === "score" ? 2 : 1);
            return {
                modelId: model.id,
                name: model.name,
                provider: model.provider,
                value,
                formatted,
                color: getModelColor(model.id)
            };
        }).filter((row)=>row !== null).sort((a, b)=>b.value - a.value);
        return rows;
    }, [
        activeBenchmark,
        scoreMode,
        selectedModels,
        getModelColor
    ]);
    const comparisonMaxValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>comparisonRows.reduce((max, row)=>Math.max(max, row.value), 0), [
        comparisonRows
    ]);
    const tabPanel = (()=>{
        switch(activeTab){
            case "overview":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 xl:grid-cols-[1.2fr_1fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-medium text-[var(--color-foreground)]",
                                    children: "Benchmark Coverage"
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 440,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 grid gap-4 text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base",
                                    children: benchmarks.map((benchmark)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl bg-white/10 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between text-xs uppercase tracking-[0.3em] text-[var(--color-foreground)]/70",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: benchmark.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                            lineNumber: 445,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: benchmark.higherIsBetter ? "Higher is better" : "Lower is better"
                                                        }, void 0, false, {
                                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                            lineNumber: 446,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 444,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-2 text-[15px] leading-relaxed sm:text-base",
                                                    children: benchmark.description
                                                }, void 0, false, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 448,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, benchmark.id, true, {
                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 443,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 441,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                            lineNumber: 439,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-medium text-[var(--color-foreground)]",
                                    children: "Roadmap Highlights"
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 454,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base",
                                    children: "Upcoming phases expand coverage with MT-Bench, BBH, additional providers (Meta, Mistral), and introduce interactive prompt testing."
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 455,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 grid gap-2 text-xs text-[var(--color-foreground)]/70",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full bg-white/10 px-3 py-1",
                                            children: "MT-Bench pipeline"
                                        }, void 0, false, {
                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 459,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full bg-white/10 px-3 py-1",
                                            children: "GitHub + Arxiv scrapers"
                                        }, void 0, false, {
                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 460,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full bg-white/10 px-3 py-1",
                                            children: "Playground prompt tester"
                                        }, void 0, false, {
                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 461,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 458,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                            lineNumber: 453,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                    lineNumber: 438,
                    columnNumber: 11
                }, this);
            case "charts":
                {
                    if (!isHydrated) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-6 xl:grid-cols-[320px_1fr]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-40 rounded-[var(--radius-xl)] border border-[var(--border-soft)]/50 bg-[var(--color-surface)]/40 animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 472,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-48 rounded-[var(--radius-xl)] border border-[var(--border-soft)]/50 bg-[var(--color-surface)]/40 animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 473,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 471,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden flex-col gap-6 xl:flex",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-[500px] rounded-[var(--radius-xl)] border border-[var(--border-soft)]/50 bg-[var(--color-surface)]/40 animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 476,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-[380px] rounded-[var(--radius-xl)] border border-[var(--border-soft)]/50 bg-[var(--color-surface)]/40 animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 477,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 475,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 470,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 xl:hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-[420px] w-[85vw] shrink-0 rounded-[var(--radius-xl)] border border-[var(--border-soft)]/50 bg-[var(--color-surface)]/40 animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 481,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-[360px] w-[85vw] shrink-0 rounded-[var(--radius-xl)] border border-[var(--border-soft)]/50 bg-[var(--color-surface)]/40 animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 482,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 480,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                            lineNumber: 469,
                            columnNumber: 13
                        }, this);
                    }
                    const chartHasData = comparisonRows.length > 0;
                    const chartUnit = scoreMode === "normalized" ? "%" : activeBenchmark?.unit ?? "";
                    const tooltipFormatter = (value)=>scoreMode === "normalized" || chartUnit === "%" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPercent"])(Number(value)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDecimal"])(Number(value), chartUnit === "score" ? 2 : 1);
                    const chartDescription = scoreMode === "normalized" ? "Normalized benchmark scores rescaled to 0–100 for a quick read of relative performance." : `Raw ${chartUnit || ""} benchmark values sourced from provider scorecards and public leaderboards.`;
                    const yAxisMax = scoreMode === "normalized" ? 100 : Math.max(chartUnit === "%" ? 100 : 0, comparisonMaxValue > 0 ? Math.ceil(comparisonMaxValue / 5) * 5 : 10);
                    const renderChartCard = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)] p-6 shadow-[var(--shadow-depth)]/60",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: benchmarks.map((benchmark)=>{
                                                const isActive = benchmark.id === activeBenchmarkId;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setActiveBenchmarkId(benchmark.id),
                                                    "aria-pressed": isActive,
                                                    className: `rounded-full border px-3 py-1 text-xs font-semibold transition ${isActive ? "border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-foreground)]" : "border-[var(--border-soft)] text-[var(--color-muted)] hover:text-[var(--color-foreground)]"}`,
                                                    children: benchmark.name
                                                }, benchmark.id, false, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 513,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 509,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                "normalized",
                                                "raw"
                                            ].map((mode)=>{
                                                const isActive = scoreMode === mode;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setScoreMode(mode),
                                                    "aria-pressed": isActive,
                                                    className: `rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] transition ${isActive ? "border-[var(--color-foreground)] text-[var(--color-foreground)]" : "border-[var(--border-soft)] text-[var(--color-muted)] hover:text-[var(--color-foreground)]"}`,
                                                    children: mode === "normalized" ? "Normalized" : "Raw"
                                                }, mode, false, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 533,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 529,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 508,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-sm text-[var(--color-muted)]",
                                    children: chartDescription
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 551,
                                    columnNumber: 13
                                }, this),
                                chartHasData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 h-[360px] w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                                            data: comparisonRows,
                                            layout: "vertical",
                                            margin: {
                                                top: 24,
                                                right: 24,
                                                left: 0,
                                                bottom: 16
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                    horizontal: false,
                                                    strokeDasharray: "4 6",
                                                    stroke: "rgba(255,255,255,0.08)"
                                                }, void 0, false, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 561,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                                                    type: "number",
                                                    domain: [
                                                        0,
                                                        yAxisMax
                                                    ],
                                                    stroke: "rgba(255,255,255,0.35)",
                                                    tick: {
                                                        fill: "rgba(255,255,255,0.65)",
                                                        fontSize: 12
                                                    },
                                                    tickFormatter: (value)=>scoreMode === "normalized" || chartUnit === "%" ? `${Math.round(Number(value))}` : (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDecimal"])(Number(value), chartUnit === "score" ? 2 : 1)
                                                }, void 0, false, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 562,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                                                    type: "category",
                                                    dataKey: "name",
                                                    width: 160,
                                                    stroke: "rgba(255,255,255,0.65)",
                                                    tick: {
                                                        fill: "rgba(255,255,255,0.85)",
                                                        fontSize: 12
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 573,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                    cursor: {
                                                        fill: "rgba(148,163,184,0.08)"
                                                    },
                                                    formatter: (value)=>typeof value === "number" ? tooltipFormatter(value) : value,
                                                    labelStyle: {
                                                        fontSize: 12,
                                                        color: "rgba(255,255,255,0.75)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 580,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                                                    dataKey: "value",
                                                    name: activeBenchmark?.name ?? "Benchmark",
                                                    radius: [
                                                        0,
                                                        12,
                                                        12,
                                                        0
                                                    ],
                                                    children: [
                                                        comparisonRows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cell"], {
                                                                fill: row.color
                                                            }, row.modelId, false, {
                                                                fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                lineNumber: 589,
                                                                columnNumber: 25
                                                            }, this)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LabelList"], {
                                                            dataKey: "formatted",
                                                            position: "right",
                                                            content: ({ x, y, width, height, value })=>{
                                                                if (typeof x !== "number" || typeof y !== "number" || typeof width !== "number" || typeof height !== "number") {
                                                                    return null;
                                                                }
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                    x: x + width + 12,
                                                                    y: y + height / 2,
                                                                    fill: "var(--color-foreground)",
                                                                    fontSize: 13,
                                                                    fontWeight: 500,
                                                                    textAnchor: "start",
                                                                    dominantBaseline: "middle",
                                                                    children: value
                                                                }, void 0, false, {
                                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                    lineNumber: 604,
                                                                    columnNumber: 29
                                                                }, void 0);
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                            lineNumber: 591,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 587,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 556,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                        lineNumber: 555,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 554,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 rounded-[var(--radius-lg)] border border-dashed border-[var(--border-soft)]/60 bg-[var(--color-surface)]/40 p-6 text-sm text-[var(--color-muted)]",
                                    children: "We don't yet have published results for this benchmark and set of models. Try another benchmark or adjust the selection."
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 623,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                            lineNumber: 507,
                            columnNumber: 11
                        }, this);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$system$2f$error$2d$boundary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorBoundary"], {
                        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-[var(--radius-xl)] border border-dashed border-[var(--border-soft)]/60 bg-[var(--color-surface)]/40 p-6 text-sm text-[var(--color-muted)]",
                            children: "Unable to render comparison charts right now. Please retry in a moment."
                        }, void 0, false, {
                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                            lineNumber: 633,
                            columnNumber: 15
                        }, void 0),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-6 xl:grid-cols-[320px_1fr]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                                    className: "rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-medium text-[var(--color-foreground)]",
                                                            children: "Selected Models"
                                                        }, void 0, false, {
                                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                            lineNumber: 642,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-2 text-sm text-[var(--color-muted)]",
                                                            children: "Color-coded roster with normalized averages to orient the charts."
                                                        }, void 0, false, {
                                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                            lineNumber: 643,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-4 flex flex-col gap-3",
                                                            children: normalizedScoresSorted.map(({ model, average }, index)=>{
                                                                const color = getModelColor(model.id);
                                                                const clamped = Math.min(Math.max(average, 0), 100);
                                                                const progressRatio = clamped / 100;
                                                                const sanitizedId = model.id.replace(/[^a-zA-Z0-9-]/g, "");
                                                                const gradientId = `comparison-progress-${sanitizedId}`;
                                                                const strokeDashoffset = PROGRESS_CIRCUMFERENCE * (1 - progressRatio);
                                                                const rank = index + 1;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "group relative overflow-hidden rounded-[var(--radius-xl)] border border-white/10 bg-[var(--color-surface)]/75 p-5 shadow-[var(--shadow-soft)]/35 backdrop-blur-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "pointer-events-none absolute inset-0 opacity-70",
                                                                            style: {
                                                                                background: "radial-gradient(120% 140% at 0% 0%, rgba(255,255,255,0.12), transparent 55%)"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                            lineNumber: 660,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "pointer-events-none absolute inset-0 opacity-40 mix-blend-screen transition-opacity duration-300 group-hover:opacity-65",
                                                                            style: {
                                                                                background: "radial-gradient(120% 160% at 100% 100%, rgba(37,99,235,0.32), transparent 62%)"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                            lineNumber: 666,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "relative flex items-center gap-5",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex-1 space-y-3",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-center justify-between gap-3",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "flex items-center gap-2 text-sm font-medium text-[var(--color-foreground)]",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "h-2.5 w-2.5 rounded-full shadow-[0_0_18px_rgba(37,99,235,0.72)] transition-transform duration-300 group-hover:scale-110",
                                                                                                            style: {
                                                                                                                background: color
                                                                                                            }
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                                                            lineNumber: 676,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        model.name
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                                                    lineNumber: 675,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "text-[11px] uppercase tracking-[0.32em] text-[var(--color-muted)]/70",
                                                                                                    children: model.provider
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                                                    lineNumber: 682,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                                            lineNumber: 674,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "space-y-1",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "text-[11px] uppercase tracking-[0.32em] text-[var(--color-muted)]/70",
                                                                                                    children: "Normalized benchmark average"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                                                    lineNumber: 687,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "flex items-end gap-2",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "text-3xl font-semibold leading-none tracking-tight text-[var(--color-foreground)]",
                                                                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPercent"])(average)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                                                            lineNumber: 691,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "pb-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]/70",
                                                                                                            children: "score"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                                                            lineNumber: 694,
                                                                                                            columnNumber: 37
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                                                    lineNumber: 690,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                                            lineNumber: 686,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-center justify-between text-xs text-[var(--color-muted)]/80",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: [
                                                                                                        "Context ",
                                                                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatNumber"])(model.context.maxTokens ?? model.contextWindow),
                                                                                                        " tokens"
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                                                    lineNumber: 700,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: [
                                                                                                        "Modalities ",
                                                                                                        model.context.modalities.length
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                                                    lineNumber: 701,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                                            lineNumber: 699,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                                    lineNumber: 673,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "relative flex h-20 w-20 items-center justify-center",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                            width: "80",
                                                                                            height: "80",
                                                                                            viewBox: "0 0 80 80",
                                                                                            className: "h-20 w-20",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                                                        id: gradientId,
                                                                                                        x1: "0%",
                                                                                                        y1: "0%",
                                                                                                        x2: "100%",
                                                                                                        y2: "100%",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                                                offset: "0%",
                                                                                                                stopColor: color,
                                                                                                                stopOpacity: 0.95
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                                                                lineNumber: 713,
                                                                                                                columnNumber: 39
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                                                offset: "100%",
                                                                                                                stopColor: "rgba(255,255,255,0.8)"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                                                                lineNumber: 714,
                                                                                                                columnNumber: 39
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                                                        lineNumber: 712,
                                                                                                        columnNumber: 37
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                                                    lineNumber: 711,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                                    cx: "40",
                                                                                                    cy: "40",
                                                                                                    r: PROGRESS_RADIUS,
                                                                                                    stroke: "rgba(255,255,255,0.12)",
                                                                                                    strokeWidth: "4",
                                                                                                    fill: "transparent"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                                                    lineNumber: 717,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].circle, {
                                                                                                    cx: "40",
                                                                                                    cy: "40",
                                                                                                    r: PROGRESS_RADIUS,
                                                                                                    stroke: `url(#${gradientId})`,
                                                                                                    strokeWidth: "4",
                                                                                                    strokeLinecap: "round",
                                                                                                    fill: "transparent",
                                                                                                    strokeDasharray: PROGRESS_CIRCUMFERENCE,
                                                                                                    strokeDashoffset: PROGRESS_CIRCUMFERENCE,
                                                                                                    animate: {
                                                                                                        strokeDashoffset
                                                                                                    },
                                                                                                    transition: progressStrokeTransition
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                                                    lineNumber: 725,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                                    cx: "40",
                                                                                                    cy: "40",
                                                                                                    r: PROGRESS_RADIUS - 1,
                                                                                                    stroke: "rgba(255,255,255,0.18)",
                                                                                                    strokeWidth: "1",
                                                                                                    fill: "transparent",
                                                                                                    opacity: 0.4
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                                                    lineNumber: 738,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                                            lineNumber: 705,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "absolute text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]/80",
                                                                                            children: [
                                                                                                "#",
                                                                                                rank
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                                            lineNumber: 748,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                                    lineNumber: 704,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                            lineNumber: 672,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, model.id, true, {
                                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                    lineNumber: 656,
                                                                    columnNumber: 27
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                            lineNumber: 646,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 641,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                                    className: "rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-medium text-[var(--color-foreground)]",
                                                            children: "Benchmarks in View"
                                                        }, void 0, false, {
                                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                            lineNumber: 760,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-2 text-sm text-[var(--color-muted)]",
                                                            children: "Quick reference for what each test measures."
                                                        }, void 0, false, {
                                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                            lineNumber: 761,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-4 flex flex-col gap-3",
                                                            children: benchmarks.map((benchmark)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "rounded-2xl border border-[var(--border-soft)]/50 bg-[var(--color-surface)]/70 p-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center justify-between text-sm text-[var(--color-foreground)]",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: benchmark.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                                    lineNumber: 766,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-xs uppercase tracking-[0.3em] text-[var(--color-foreground)]/60",
                                                                                    children: benchmark.unit ?? "Score"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                                    lineNumber: 767,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                            lineNumber: 765,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mt-1 text-xs leading-relaxed text-[var(--color-muted)]",
                                                                            children: benchmark.description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                            lineNumber: 769,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, benchmark.id, true, {
                                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                    lineNumber: 764,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                            lineNumber: 762,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 759,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 640,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden xl:block",
                                            children: renderChartCard()
                                        }, void 0, false, {
                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 776,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 639,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "xl:hidden",
                                    children: renderChartCard()
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 779,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                            lineNumber: 638,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                        lineNumber: 631,
                        columnNumber: 11
                    }, this);
                }
            case "pricing":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 xl:grid-cols-[320px_1fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-medium text-[var(--color-foreground)]",
                                    children: "Usage Assumptions"
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 790,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base",
                                    children: "Estimate spend based on millions of tokens processed per month (60% input / 40% output split by default)."
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 791,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 flex flex-col gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex flex-col gap-2 text-base text-[var(--color-foreground)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]",
                                                    children: "Monthly tokens"
                                                }, void 0, false, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 796,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: 1,
                                                    max: 100,
                                                    step: 1,
                                                    value: usageMillions,
                                                    onChange: (event)=>setUsageMillions(Number(event.target.value)),
                                                    className: "w-full accent-[var(--color-accent-secondary)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 797,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[15px] leading-relaxed text-[var(--color-foreground)]/80 sm:text-base",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatNumber"])(usageMillions),
                                                        "M tokens / month"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 806,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 795,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-[var(--color-muted)]",
                                            children: "Adjust the slider to reflect your workload. We assume 60% input tokens and 40% output tokens when both tiers are available."
                                        }, void 0, false, {
                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 810,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 794,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                            lineNumber: 789,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)] shadow-[var(--shadow-soft)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-b border-[var(--border-soft)]/50 px-6 py-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-medium text-[var(--color-foreground)]",
                                        children: "Estimated Monthly Spend"
                                    }, void 0, false, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                        lineNumber: 817,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 816,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "min-w-full divide-y divide-white/10 text-left text-[15px] leading-relaxed text-[var(--color-foreground)]/80 sm:text-base",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "bg-white/10 text-xs uppercase tracking-[0.3em] text-[var(--color-foreground)]/60",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-6 py-3",
                                                            children: "Model"
                                                        }, void 0, false, {
                                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                            lineNumber: 823,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-6 py-3",
                                                            children: "Input / 1M"
                                                        }, void 0, false, {
                                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                            lineNumber: 824,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-6 py-3",
                                                            children: "Output / 1M"
                                                        }, void 0, false, {
                                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                            lineNumber: 825,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-6 py-3",
                                                            children: "Requests / 1M"
                                                        }, void 0, false, {
                                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                            lineNumber: 826,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-6 py-3 text-right",
                                                            children: "Est. monthly"
                                                        }, void 0, false, {
                                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                            lineNumber: 827,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 822,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                lineNumber: 821,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "divide-y divide-white/10",
                                                children: pricingRows.map((row)=>{
                                                    const formatRate = (rate)=>{
                                                        if (typeof rate !== "number") return "-";
                                                        const hasFraction = Math.abs(rate % 1) > 0 || rate < 10;
                                                        const digits = hasFraction ? 2 : 0;
                                                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(rate, row.currency, {
                                                            minimumFractionDigits: digits,
                                                            maximumFractionDigits: digits
                                                        });
                                                    };
                                                    const monthlyDigits = row.estimatedMonthly < 100 ? 2 : 0;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[var(--color-foreground)]",
                                                                            children: row.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                            lineNumber: 847,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs uppercase tracking-[0.3em] text-[var(--color-foreground)]/60",
                                                                            children: row.provider
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                            lineNumber: 848,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                    lineNumber: 846,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                lineNumber: 845,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4",
                                                                children: formatRate(row.inputRate)
                                                            }, void 0, false, {
                                                                fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                lineNumber: 851,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4",
                                                                children: formatRate(row.outputRate)
                                                            }, void 0, false, {
                                                                fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                lineNumber: 852,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4",
                                                                children: formatRate(row.requestRate)
                                                            }, void 0, false, {
                                                                fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                lineNumber: 853,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4 text-right font-semibold text-[var(--color-foreground)]",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(row.estimatedMonthly, row.currency, {
                                                                    minimumFractionDigits: monthlyDigits,
                                                                    maximumFractionDigits: monthlyDigits
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                lineNumber: 854,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, row.id, true, {
                                                        fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                        lineNumber: 844,
                                                        columnNumber: 25
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                lineNumber: 830,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                        lineNumber: 820,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 819,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                            lineNumber: 815,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                    lineNumber: 788,
                    columnNumber: 11
                }, this);
            case "summary":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 xl:grid-cols-[1.2fr_1fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-medium text-[var(--color-foreground)]",
                                    children: "Editorial TL;DR"
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 873,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 space-y-4 text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base",
                                    children: [
                                        averageLeaders[0] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[var(--color-foreground)]",
                                                    children: averageLeaders[0].model.name
                                                }, void 0, false, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 877,
                                                    columnNumber: 21
                                                }, this),
                                                " leads the pack with an average benchmark score of ",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[var(--color-foreground)]",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPercent"])(averageLeaders[0].average)
                                                }, void 0, false, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 880,
                                                    columnNumber: 21
                                                }, this),
                                                " across the four headline tests.",
                                                " ",
                                                averageLeaders[1] ? `${averageLeaders[1].model.name} trails by ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDecimal"])(averageLeaders[0].average - averageLeaders[1].average)} points.` : ""
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 876,
                                            columnNumber: 19
                                        }, this) : null,
                                        benchmarkLeaders.map(({ benchmark, leader, runnerUp })=>leader && typeof leader.score === "number" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "On ",
                                                    benchmark.name,
                                                    ", ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--color-foreground)]",
                                                        children: leader.model.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                        lineNumber: 890,
                                                        columnNumber: 44
                                                    }, this),
                                                    " posts ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDecimal"])(leader.score),
                                                    benchmark.unit ?? "%",
                                                    runnerUp && typeof runnerUp.score === "number" ? ` edging ${runnerUp.model.name} by ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDecimal"])(leader.score - runnerUp.score)} points.` : " and sets the pace."
                                                ]
                                            }, benchmark.id, true, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                lineNumber: 889,
                                                columnNumber: 21
                                            }, this) : null),
                                        lowestCost ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "For the assumed workload of ",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatNumber"])(usageMillions),
                                                "M tokens, ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[var(--color-foreground)]",
                                                    children: lowestCost.name
                                                }, void 0, false, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 900,
                                                    columnNumber: 88
                                                }, this),
                                                " delivers the lowest monthly spend at ",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[var(--color-foreground)]",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(lowestCost.estimatedMonthly, lowestCost.currency)
                                                }, void 0, false, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 903,
                                                    columnNumber: 21
                                                }, this),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 899,
                                            columnNumber: 19
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 874,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                            lineNumber: 872,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-medium text-[var(--color-foreground)]",
                                    children: "Context Window & Notes"
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 909,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 space-y-4 text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base",
                                    children: selectedModels.map((model)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl bg-white/10 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between text-xs uppercase tracking-[0.3em] text-[var(--color-foreground)]/70",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: model.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                            lineNumber: 914,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatNumber"])(model.context.maxTokens ?? model.contextWindow),
                                                                " tokens"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                            lineNumber: 915,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 913,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-2 text-[15px] leading-relaxed text-[var(--color-foreground)]/80 sm:text-base",
                                                    children: [
                                                        "Modalities: ",
                                                        model.context.modalities.join(", ")
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 917,
                                                    columnNumber: 21
                                                }, this),
                                                model.context.notes ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-xs",
                                                    children: model.context.notes
                                                }, void 0, false, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 920,
                                                    columnNumber: 44
                                                }, this) : null
                                            ]
                                        }, model.id, true, {
                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 912,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 910,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                            lineNumber: 908,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                    lineNumber: 871,
                    columnNumber: 11
                }, this);
            default:
                return null;
        }
    })();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative overflow-hidden rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/55 bg-[var(--color-surface)]/55 p-8 shadow-[var(--shadow-ambient)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 opacity-80 blur-3xl",
                        style: {
                            background: "radial-gradient(140% 120% at 0% 0%, rgba(37,99,235,0.25), transparent 60%), radial-gradient(120% 120% at 92% 0%, rgba(6,182,212,0.2), transparent 55%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                        lineNumber: 935,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 opacity-60",
                        style: {
                            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(15, 23, 42, 0))"
                        }
                    }, void 0, false, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                        lineNumber: 942,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay",
                        style: {
                            background: "radial-gradient(120% 120% at 50% 110%, rgba(8, 13, 26, 0.5), transparent 60%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                        lineNumber: 948,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                className: "flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] uppercase tracking-[0.38em] text-[var(--color-muted)]/80",
                                        children: "Select models"
                                    }, void 0, false, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                        lineNumber: 957,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-[28px]",
                                        children: "Compare up to four flagship models"
                                    }, void 0, false, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                        lineNumber: 960,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "max-w-2xl text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base",
                                        children: [
                                            "Pick between ",
                                            MIN_SELECTION,
                                            " and ",
                                            MAX_SELECTION,
                                            " models to visualize benchmarks, pricing, and generate an editorial summary with magazine-grade polish."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                        lineNumber: 963,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                lineNumber: 956,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "mt-6 grid gap-3 md:grid-cols-2",
                                variants: listContainerVariants,
                                initial: "hidden",
                                animate: "visible",
                                children: models.map((model)=>{
                                    const isActive = selectedIds.includes(model.id);
                                    const disableAdd = !isActive && selectedIds.length >= MAX_SELECTION;
                                    const color = getModelColor(model.id);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                        type: "button",
                                        onClick: ()=>toggleModel(model.id),
                                        "aria-pressed": isActive,
                                        disabled: disableAdd,
                                        className: `group relative overflow-hidden rounded-[var(--radius-xl)] border px-4 py-5 text-left transition ${isActive ? "border-white/20 text-[var(--color-foreground)] shadow-[var(--shadow-soft)]" : "border-[var(--border-soft)]/50 text-[var(--color-muted)] hover:border-white/25 hover:text-[var(--color-foreground)]"} ${disableAdd ? "cursor-not-allowed opacity-50" : "backdrop-blur-sm"}`,
                                        style: {
                                            background: isActive ? "linear-gradient(135deg, rgba(255,255,255,0.16), rgba(37, 99, 235, 0.16))" : "linear-gradient(135deg, rgba(15, 23, 42, 0.55), rgba(15, 23, 42, 0.3))"
                                        },
                                        layout: true,
                                        "data-hotkey-target": "comparison-model-option",
                                        whileHover: !disableAdd && !reduceMotion ? {
                                            y: -4,
                                            boxShadow: "var(--shadow-depth)"
                                        } : undefined,
                                        whileTap: !disableAdd && !reduceMotion ? {
                                            scale: 0.985
                                        } : undefined,
                                        transition: {
                                            type: "spring",
                                            stiffness: 320,
                                            damping: 28
                                        },
                                        variants: listItemVariants,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-80 group-aria-[pressed=true]:opacity-90",
                                                style: {
                                                    background: "radial-gradient(110% 110% at 50% 0%, rgba(255,255,255,0.12), transparent 65%)"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                lineNumber: 1007,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-60",
                                                style: {
                                                    background: "radial-gradient(140% 140% at 50% 100%, rgba(37, 99, 235, 0.28), transparent 70%)"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                lineNumber: 1014,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative flex items-center justify-between text-[11px] uppercase tracking-[0.3em]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "h-2 w-2 rounded-full shadow-[0_0_16px_rgba(37,99,235,0.6)]",
                                                                style: {
                                                                    background: color
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                lineNumber: 1023,
                                                                columnNumber: 23
                                                            }, this),
                                                            model.provider
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                        lineNumber: 1022,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-[var(--color-muted)]/80",
                                                        children: new Date(model.releaseDate).getFullYear()
                                                    }, void 0, false, {
                                                        fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                        lineNumber: 1026,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                lineNumber: 1021,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-lg font-semibold tracking-tight",
                                                children: model.name
                                            }, void 0, false, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                lineNumber: 1030,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-[var(--color-muted)]",
                                                children: [
                                                    "Context ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatNumber"])(model.contextWindow),
                                                    " tokens - Availability ",
                                                    model.availability
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                lineNumber: 1031,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, model.id, true, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                        lineNumber: 978,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                lineNumber: 967,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                        lineNumber: 955,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                lineNumber: 934,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LayoutGroup"], {
                        id: "comparison-tabs",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            role: "tablist",
                            "aria-label": "Comparison views",
                            className: "relative flex flex-wrap items-center gap-2 rounded-full border border-[var(--border-soft)]/50 bg-[var(--color-surface-glass)] px-1 py-1",
                            children: TAB_ITEMS.map((tab)=>{
                                const isActive = activeTab === tab.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                    type: "button",
                                    role: "tab",
                                    layout: "position",
                                    "aria-selected": isActive,
                                    className: `relative overflow-hidden rounded-full px-6 py-2 text-[13px] font-semibold uppercase tracking-[0.32em] transition-[color,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)] ${isActive ? "text-[var(--color-background)]" : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"}`,
                                    onClick: ()=>setActiveTab(tab.id),
                                    whileHover: reduceMotion ? undefined : {
                                        scale: 1.015,
                                        transition: {
                                            duration: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["designTokens"].motion.duration.hover / 1000,
                                            ease: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["designTokens"].motion.easing.standard
                                        }
                                    },
                                    whileTap: reduceMotion ? undefined : {
                                        scale: 0.985,
                                        transition: {
                                            duration: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["designTokens"].motion.duration.micro / 1000,
                                            ease: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["designTokens"].motion.easing.exit
                                        }
                                    },
                                    children: [
                                        isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                            layoutId: "comparison-tab-indicator",
                                            transition: tabHighlightTransition,
                                            className: "absolute inset-0 rounded-full border border-white/60 shadow-[0_18px_48px_rgba(15,23,42,0.26)]",
                                            style: {
                                                background: "linear-gradient(135deg, rgba(255,255,255,0.96), rgba(229,231,235,0.94))",
                                                backdropFilter: "blur(6px)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 1067,
                                            columnNumber: 21
                                        }, this) : null,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative z-10",
                                            children: tab.label
                                        }, void 0, false, {
                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 1077,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, tab.id, true, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 1051,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                            lineNumber: 1043,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                        lineNumber: 1042,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: tabPanel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            layout: true,
                            initial: "hidden",
                            animate: "visible",
                            exit: "exit",
                            variants: tabPanelVariants,
                            className: "relative w-full overflow-hidden rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/45 bg-[var(--color-surface)]/60 shadow-[var(--shadow-soft)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pointer-events-none absolute inset-0 opacity-80 transition-opacity duration-300",
                                    style: {
                                        background: activeTabMotif.gradient
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 1095,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pointer-events-none absolute inset-0 opacity-70 mix-blend-overlay transition-opacity duration-500",
                                    style: {
                                        background: activeTabMotif.accent
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 1099,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pointer-events-none absolute inset-0 opacity-70",
                                    style: {
                                        background: activeTabMotif.vignette
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 1103,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 p-6 sm:p-8",
                                    children: tabPanel
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 1107,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, activeTab, true, {
                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                            lineNumber: 1086,
                            columnNumber: 13
                        }, this) : null
                    }, void 0, false, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                        lineNumber: 1084,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                lineNumber: 1041,
                columnNumber: 7
            }, this),
            selectedModels.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/40 p-8 shadow-[var(--shadow-soft)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]/75",
                                        children: "Source Notebook"
                                    }, void 0, false, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                        lineNumber: 1117,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-[var(--color-foreground)]",
                                        children: "Evidence trail for the current comparison"
                                    }, void 0, false, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                        lineNumber: 1118,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                lineNumber: 1116,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "max-w-xl text-xs leading-relaxed text-[var(--color-muted)]/80 sm:text-sm",
                                children: "Every card links to the official provider post, pricing announcement, or documentation confirming the figures above."
                            }, void 0, false, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                lineNumber: 1120,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                        lineNumber: 1115,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4",
                        children: selectedModels.map((model)=>{
                            const sources = Array.from(new Set(model.sources));
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "flex h-full flex-col gap-4 rounded-[var(--radius-xl)] border border-[var(--border-soft)]/50 bg-[var(--color-surface-elevated)]/40 p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]/70",
                                                children: model.provider
                                            }, void 0, false, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                lineNumber: 1133,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-semibold text-[var(--color-foreground)]",
                                                children: model.name
                                            }, void 0, false, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                lineNumber: 1136,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                        lineNumber: 1132,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "flex flex-col gap-2 text-sm leading-relaxed text-[var(--color-foreground)]/85",
                                        children: sources.map((source)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: source,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    title: source,
                                                    className: "inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)]/60 bg-[var(--color-background)]/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-foreground)]/85 transition hover:bg-white hover:text-[var(--color-background)]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "h-1.5 w-1.5 rounded-full bg-[var(--color-foreground)]/60",
                                                            "aria-hidden": true
                                                        }, void 0, false, {
                                                            fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                            lineNumber: 1148,
                                                            columnNumber: 27
                                                        }, this),
                                                        formatSourceLabel(source)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 1141,
                                                    columnNumber: 25
                                                }, this)
                                            }, source, false, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                lineNumber: 1140,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                        lineNumber: 1138,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, model.id, true, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                                lineNumber: 1128,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                        lineNumber: 1124,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
                lineNumber: 1114,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/AI HELPER/apps/web/src/components/comparisons/comparison-experience.tsx",
        lineNumber: 933,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=AI%20HELPER_apps_web_src_9a374213._.js.map