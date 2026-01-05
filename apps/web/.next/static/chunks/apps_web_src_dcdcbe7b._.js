(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/lib/analytics/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "analytics",
    ()=>analytics,
    "useAnalytics",
    ()=>useAnalytics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
class AnalyticsClient {
    track(event, payload) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.info("[analytics]", event, payload !== null && payload !== void 0 ? payload : {});
        }
    // Hook for future analytics provider wiring.
    }
    page(name, payload) {
        this.track("page:".concat(name), payload);
    }
}
const analyticsInstance = new AnalyticsClient();
function useAnalytics() {
    return analyticsInstance;
}
const analytics = analyticsInstance;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/comparisons/comparison-experience.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComparisonExperience",
    ()=>ComparisonExperience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/LabelList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column.js [app-client] (ecmascript) <export default as BarChart2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analytics$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/analytics/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/design/tokens.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
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
const CHART_COLORS = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].chartPalette);
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
    } catch (e) {
        return url;
    }
}
function computePricingRows(models, usageMillions) {
    return models.map((model)=>{
        var _tiers_input, _tiers_output, _tiers_requests, _tiers_input1, _tiers_output1, _tiers_requests1;
        const tiers = Object.fromEntries(model.pricing.map((tier)=>[
                tier.tier,
                tier
            ]));
        var _tiers_input_currency, _ref, _ref1;
        const currency = (_ref1 = (_ref = (_tiers_input_currency = (_tiers_input = tiers.input) === null || _tiers_input === void 0 ? void 0 : _tiers_input.currency) !== null && _tiers_input_currency !== void 0 ? _tiers_input_currency : (_tiers_output = tiers.output) === null || _tiers_output === void 0 ? void 0 : _tiers_output.currency) !== null && _ref !== void 0 ? _ref : (_tiers_requests = tiers.requests) === null || _tiers_requests === void 0 ? void 0 : _tiers_requests.currency) !== null && _ref1 !== void 0 ? _ref1 : "USD";
        const inputCost = tiers.input ? usageMillions * INPUT_SHARE * tiers.input.pricePerMillion : 0;
        const outputCost = tiers.output ? usageMillions * OUTPUT_SHARE * tiers.output.pricePerMillion : 0;
        const requestCost = tiers.requests ? usageMillions * tiers.requests.pricePerMillion : 0;
        return {
            id: model.id,
            name: model.name,
            provider: model.provider,
            currency,
            inputRate: (_tiers_input1 = tiers.input) === null || _tiers_input1 === void 0 ? void 0 : _tiers_input1.pricePerMillion,
            outputRate: (_tiers_output1 = tiers.output) === null || _tiers_output1 === void 0 ? void 0 : _tiers_output1.pricePerMillion,
            requestRate: (_tiers_requests1 = tiers.requests) === null || _tiers_requests1 === void 0 ? void 0 : _tiers_requests1.pricePerMillion,
            estimatedMonthly: inputCost + outputCost + requestCost
        };
    });
}
function calcAverageNormalized(model, benchmarks) {
    if (!benchmarks.length) return null;
    const values = [];
    benchmarks.forEach((benchmark)=>{
        const score = getBenchmarkScore(model, benchmark.id);
        if (typeof (score === null || score === void 0 ? void 0 : score.normalizedScore) === "number") {
            values.push(score.normalizedScore * 100);
        } else if (typeof (score === null || score === void 0 ? void 0 : score.score) === "number" && benchmark.unit === "%") {
            values.push(score.score);
        }
    });
    if (!values.length) return null;
    const average = values.reduce((sum, value)=>sum + value, 0) / values.length;
    return average;
}
// Compact Benchmark Selector Component
function BenchmarkSelector(param) {
    let { benchmarks, activeId, onChange } = param;
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const activeBenchmark = benchmarks.find((b)=>b.id === activeId) || benchmarks[0];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BenchmarkSelector.useEffect": ()=>{
            const handleClickOutside = {
                "BenchmarkSelector.useEffect.handleClickOutside": (e)=>{
                    if (containerRef.current && !containerRef.current.contains(e.target)) {
                        setIsOpen(false);
                    }
                }
            }["BenchmarkSelector.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "BenchmarkSelector.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["BenchmarkSelector.useEffect"];
        }
    }["BenchmarkSelector.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        ref: containerRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setIsOpen(!isOpen),
                className: "flex items-center gap-2 rounded-lg border border-[var(--border-soft)]/50 bg-[var(--color-surface)]/50 px-4 py-2.5 text-sm font-medium text-[var(--color-foreground)] transition-colors hover:bg-[var(--color-surface-elevated)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-primary)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[var(--color-muted)] text-xs uppercase tracking-wider",
                        children: "Benchmark:"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "min-w-[120px] text-left",
                        children: activeBenchmark === null || activeBenchmark === void 0 ? void 0 : activeBenchmark.name
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: "h-4 w-4 text-[var(--color-muted)] transition-transform duration-200 ".concat(isOpen ? "rotate-180" : "")
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 8,
                        scale: 0.95
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        y: 8,
                        scale: 0.95
                    },
                    transition: {
                        duration: 0.15,
                        ease: "easeOut"
                    },
                    className: "absolute left-0 top-full z-50 mt-2 max-h-[300px] w-[280px] overflow-y-auto rounded-xl border border-[var(--border-soft)] bg-[var(--color-surface-elevated)] p-1 shadow-2xl backdrop-blur-xl",
                    children: benchmarks.map((benchmark)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                onChange(benchmark.id);
                                setIsOpen(false);
                            },
                            className: "flex w-full flex-col gap-1 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-[var(--color-surface-highlight)] ".concat(activeId === benchmark.id ? "bg-[var(--color-surface-highlight-strong)]" : ""),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium ".concat(activeId === benchmark.id ? "text-[var(--color-accent-primary)]" : "text-[var(--color-foreground)]"),
                                            children: benchmark.name
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 204,
                                            columnNumber: 19
                                        }, this),
                                        activeId === benchmark.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "h-3.5 w-3.5 text-[var(--color-accent-primary)]"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 207,
                                            columnNumber: 49
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 203,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-[var(--color-muted)] line-clamp-1",
                                    children: benchmark.description
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 209,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, benchmark.id, true, {
                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                            lineNumber: 194,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                    lineNumber: 186,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
        lineNumber: 173,
        columnNumber: 5
    }, this);
}
_s(BenchmarkSelector, "S+VxyoOAGV/pXeK+kYNNNH3d2q4=");
_c = BenchmarkSelector;
function ComparisonExperience(param) {
    let { config, models } = param;
    _s1();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analytics$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"])();
    const tabParam = searchParams.get("tab");
    const [selectedIds, setSelectedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ComparisonExperience.useState": ()=>{
            const modelsFromUrl = searchParams.get("models");
            if (modelsFromUrl) {
                const validIds = modelsFromUrl.split(",").filter({
                    "ComparisonExperience.useState.validIds": (id)=>models.some({
                            "ComparisonExperience.useState.validIds": (m)=>m.id === id
                        }["ComparisonExperience.useState.validIds"])
                }["ComparisonExperience.useState.validIds"]);
                if (validIds.length >= MIN_SELECTION) {
                    return validIds;
                }
            }
            return config.defaultModelIds;
        }
    }["ComparisonExperience.useState"]);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(tabParam && TAB_ITEMS.some({
        "ComparisonExperience.useState": (item)=>item.id === tabParam
    }["ComparisonExperience.useState"]) ? tabParam : "charts");
    const [usageMillions, setUsageMillions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
    const [isHydrated, setIsHydrated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeBenchmarkId, setActiveBenchmarkId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ComparisonExperience.useState": ()=>{
            var _config_benchmarks_;
            var _config_benchmarks__id;
            return (_config_benchmarks__id = (_config_benchmarks_ = config.benchmarks[0]) === null || _config_benchmarks_ === void 0 ? void 0 : _config_benchmarks_.id) !== null && _config_benchmarks__id !== void 0 ? _config_benchmarks__id : "";
        }
    }["ComparisonExperience.useState"]);
    const [scoreMode, setScoreMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("normalized");
    const reduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ComparisonExperience.useEffect": ()=>{
            setIsHydrated(true);
        }
    }["ComparisonExperience.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ComparisonExperience.useEffect": ()=>{
            analytics.track("comparisons_model_selection", {
                modelIds: selectedIds
            });
        }
    }["ComparisonExperience.useEffect"], [
        analytics,
        selectedIds
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ComparisonExperience.useEffect": ()=>{
            if (!isHydrated) return;
            const params = new URLSearchParams(searchParams);
            const modelsParam = selectedIds.join(",");
            if (params.get("models") === modelsParam) {
                return;
            }
            params.set("models", modelsParam);
            router.push("".concat(pathname, "?").concat(params.toString()), {
                scroll: false
            });
        }
    }["ComparisonExperience.useEffect"], [
        isHydrated,
        selectedIds,
        pathname,
        router,
        searchParams
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ComparisonExperience.useEffect": ()=>{
            analytics.track("comparisons_tab_change", {
                tab: activeTab
            });
        }
    }["ComparisonExperience.useEffect"], [
        analytics,
        activeTab
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ComparisonExperience.useEffect": ()=>{
            if (!isHydrated) return;
            if (searchParams.get("tab") === activeTab) {
                return;
            }
            const params = new URLSearchParams(searchParams);
            params.set("tab", activeTab);
            router.replace("".concat(pathname, "?").concat(params.toString()), {
                scroll: false
            });
        }
    }["ComparisonExperience.useEffect"], [
        activeTab,
        isHydrated,
        pathname,
        router,
        searchParams
    ]);
    const benchmarks = config.benchmarks;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ComparisonExperience.useEffect": ()=>{
            if (!benchmarks.length) return;
            if (!benchmarks.some({
                "ComparisonExperience.useEffect": (benchmark)=>benchmark.id === activeBenchmarkId
            }["ComparisonExperience.useEffect"])) {
                setActiveBenchmarkId(benchmarks[0].id);
            }
        }
    }["ComparisonExperience.useEffect"], [
        benchmarks,
        activeBenchmarkId
    ]);
    const selectedModels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ComparisonExperience.useMemo[selectedModels]": ()=>{
            return selectedIds.map({
                "ComparisonExperience.useMemo[selectedModels]": (id)=>models.find({
                        "ComparisonExperience.useMemo[selectedModels]": (model)=>model.id === id
                    }["ComparisonExperience.useMemo[selectedModels]"])
            }["ComparisonExperience.useMemo[selectedModels]"]).filter({
                "ComparisonExperience.useMemo[selectedModels]": (model)=>Boolean(model)
            }["ComparisonExperience.useMemo[selectedModels]"]);
        }
    }["ComparisonExperience.useMemo[selectedModels]"], [
        selectedIds,
        models
    ]);
    const pricingRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ComparisonExperience.useMemo[pricingRows]": ()=>computePricingRows(selectedModels, usageMillions)
    }["ComparisonExperience.useMemo[pricingRows]"], [
        selectedModels,
        usageMillions
    ]);
    const normalizedScores = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ComparisonExperience.useMemo[normalizedScores]": ()=>selectedModels.map({
                "ComparisonExperience.useMemo[normalizedScores]": (model)=>({
                        model,
                        average: calcAverageNormalized(model, benchmarks)
                    })
            }["ComparisonExperience.useMemo[normalizedScores]"])
    }["ComparisonExperience.useMemo[normalizedScores]"], [
        selectedModels,
        benchmarks
    ]);
    const normalizedScoresSorted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ComparisonExperience.useMemo[normalizedScoresSorted]": ()=>normalizedScores.filter({
                "ComparisonExperience.useMemo[normalizedScoresSorted]": (entry)=>typeof entry.average === "number"
            }["ComparisonExperience.useMemo[normalizedScoresSorted]"]).sort({
                "ComparisonExperience.useMemo[normalizedScoresSorted]": (a, b)=>b.average - a.average
            }["ComparisonExperience.useMemo[normalizedScoresSorted]"])
    }["ComparisonExperience.useMemo[normalizedScoresSorted]"], [
        normalizedScores
    ]);
    const benchmarkLeaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ComparisonExperience.useMemo[benchmarkLeaders]": ()=>{
            return benchmarks.map({
                "ComparisonExperience.useMemo[benchmarkLeaders]": (benchmark)=>{
                    const ordered = selectedModels.map({
                        "ComparisonExperience.useMemo[benchmarkLeaders].ordered": (model)=>{
                            const score = getBenchmarkScore(model, benchmark.id);
                            const rawScore = typeof (score === null || score === void 0 ? void 0 : score.score) === "number" ? score.score : null;
                            const normalized = typeof (score === null || score === void 0 ? void 0 : score.normalizedScore) === "number" ? score.normalizedScore : typeof rawScore === "number" && benchmark.unit === "%" ? rawScore / 100 : null;
                            return {
                                model,
                                score: rawScore,
                                normalized
                            };
                        }
                    }["ComparisonExperience.useMemo[benchmarkLeaders].ordered"]).filter({
                        "ComparisonExperience.useMemo[benchmarkLeaders].ordered": (entry)=>typeof entry.normalized === "number"
                    }["ComparisonExperience.useMemo[benchmarkLeaders].ordered"]).sort({
                        "ComparisonExperience.useMemo[benchmarkLeaders].ordered": (a, b)=>{
                            var _b_normalized, _a_normalized;
                            return ((_b_normalized = b.normalized) !== null && _b_normalized !== void 0 ? _b_normalized : -Infinity) - ((_a_normalized = a.normalized) !== null && _a_normalized !== void 0 ? _a_normalized : -Infinity);
                        }
                    }["ComparisonExperience.useMemo[benchmarkLeaders].ordered"]);
                    var _ordered_, _ordered_1;
                    return {
                        benchmark,
                        leader: (_ordered_ = ordered[0]) !== null && _ordered_ !== void 0 ? _ordered_ : null,
                        runnerUp: (_ordered_1 = ordered[1]) !== null && _ordered_1 !== void 0 ? _ordered_1 : null
                    };
                }
            }["ComparisonExperience.useMemo[benchmarkLeaders]"]);
        }
    }["ComparisonExperience.useMemo[benchmarkLeaders]"], [
        benchmarks,
        selectedModels
    ]);
    const averageLeaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ComparisonExperience.useMemo[averageLeaders]": ()=>{
            return selectedModels.map({
                "ComparisonExperience.useMemo[averageLeaders]": (model)=>({
                        model,
                        average: calcAverageNormalized(model, benchmarks)
                    })
            }["ComparisonExperience.useMemo[averageLeaders]"]).filter({
                "ComparisonExperience.useMemo[averageLeaders]": (entry)=>typeof entry.average === "number"
            }["ComparisonExperience.useMemo[averageLeaders]"]).sort({
                "ComparisonExperience.useMemo[averageLeaders]": (a, b)=>b.average - a.average
            }["ComparisonExperience.useMemo[averageLeaders]"]);
        }
    }["ComparisonExperience.useMemo[averageLeaders]"], [
        selectedModels,
        benchmarks
    ]);
    const lowestCost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ComparisonExperience.useMemo[lowestCost]": ()=>{
            return [
                ...pricingRows
            ].sort({
                "ComparisonExperience.useMemo[lowestCost]": (a, b)=>a.estimatedMonthly - b.estimatedMonthly
            }["ComparisonExperience.useMemo[lowestCost]"])[0];
        }
    }["ComparisonExperience.useMemo[lowestCost]"], [
        pricingRows
    ]);
    const tabPanelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ComparisonExperience.useMemo[tabPanelVariants]": ()=>reduceMotion ? {
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
                        duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].motion.duration.medium / 1000,
                        ease: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].motion.easing.entrance
                    }
                },
                exit: {
                    opacity: 0,
                    y: -28,
                    scale: 0.985,
                    filter: "blur(10px)",
                    transition: {
                        duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].motion.duration.fast / 1000,
                        ease: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].motion.easing.exit
                    }
                }
            }
    }["ComparisonExperience.useMemo[tabPanelVariants]"], [
        reduceMotion
    ]);
    const listItemVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ComparisonExperience.useMemo[listItemVariants]": ()=>reduceMotion ? {
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
                        duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].motion.duration.fast / 1000,
                        ease: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].motion.easing.standard
                    }
                }
            }
    }["ComparisonExperience.useMemo[listItemVariants]"], [
        reduceMotion
    ]);
    const progressStrokeTransition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ComparisonExperience.useMemo[progressStrokeTransition]": ()=>reduceMotion ? {
                duration: 0.0001
            } : {
                duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].motion.duration.medium / 1000,
                ease: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].motion.easing.standard
            }
    }["ComparisonExperience.useMemo[progressStrokeTransition]"], [
        reduceMotion
    ]);
    const tabHighlightTransition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ComparisonExperience.useMemo[tabHighlightTransition]": ()=>reduceMotion ? {
                duration: 0.0001
            } : {
                type: "spring",
                stiffness: 420,
                damping: 34,
                mass: 0.6
            }
    }["ComparisonExperience.useMemo[tabHighlightTransition]"], [
        reduceMotion
    ]);
    const activeTabMotif = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ComparisonExperience.useMemo[activeTabMotif]": ()=>TAB_MOTIFS[activeTab]
    }["ComparisonExperience.useMemo[activeTabMotif]"], [
        activeTab
    ]);
    const listContainerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].motion.stagger.card,
                delayChildren: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].motion.stagger.card
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
    const getModelColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ComparisonExperience.useCallback[getModelColor]": (modelId)=>{
            const index = selectedIds.indexOf(modelId);
            var _CHART_COLORS_;
            return (_CHART_COLORS_ = CHART_COLORS[index % CHART_COLORS.length]) !== null && _CHART_COLORS_ !== void 0 ? _CHART_COLORS_ : "#2563EB";
        }
    }["ComparisonExperience.useCallback[getModelColor]"], [
        selectedIds
    ]);
    const activeBenchmark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ComparisonExperience.useMemo[activeBenchmark]": ()=>{
            if (!benchmarks.length) return null;
            var _benchmarks_find;
            return (_benchmarks_find = benchmarks.find({
                "ComparisonExperience.useMemo[activeBenchmark]": (benchmark)=>benchmark.id === activeBenchmarkId
            }["ComparisonExperience.useMemo[activeBenchmark]"])) !== null && _benchmarks_find !== void 0 ? _benchmarks_find : benchmarks[0];
        }
    }["ComparisonExperience.useMemo[activeBenchmark]"], [
        benchmarks,
        activeBenchmarkId
    ]);
    const comparisonRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ComparisonExperience.useMemo[comparisonRows]": ()=>{
            if (!activeBenchmark) return [];
            return selectedModels.reduce({
                "ComparisonExperience.useMemo[comparisonRows]": (acc, model)=>{
                    const score = getBenchmarkScore(model, activeBenchmark.id);
                    const normalized = typeof (score === null || score === void 0 ? void 0 : score.normalizedScore) === "number" ? score.normalizedScore * 100 : null;
                    const raw = typeof (score === null || score === void 0 ? void 0 : score.score) === "number" ? score.score : null;
                    const value = scoreMode === "normalized" ? normalized : raw;
                    if (value !== null) {
                        acc.push({
                            modelId: model.id,
                            name: model.name,
                            provider: model.provider,
                            value,
                            formatted: scoreMode === "normalized" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPercent"])(value) : activeBenchmark.unit === "%" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPercent"])(value) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDecimal"])(value, activeBenchmark.unit === "score" ? 2 : 1),
                            color: getModelColor(model.id)
                        });
                    }
                    return acc;
                }
            }["ComparisonExperience.useMemo[comparisonRows]"], []).sort({
                "ComparisonExperience.useMemo[comparisonRows]": (a, b)=>b.value - a.value
            }["ComparisonExperience.useMemo[comparisonRows]"]);
        }
    }["ComparisonExperience.useMemo[comparisonRows]"], [
        activeBenchmark,
        scoreMode,
        selectedModels,
        getModelColor
    ]);
    const comparisonMaxValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ComparisonExperience.useMemo[comparisonMaxValue]": ()=>comparisonRows.reduce({
                "ComparisonExperience.useMemo[comparisonMaxValue]": (max, row)=>Math.max(max, row.value)
            }["ComparisonExperience.useMemo[comparisonMaxValue]"], 0)
    }["ComparisonExperience.useMemo[comparisonMaxValue]"], [
        comparisonRows
    ]);
    // New Render Component for Chart with Restructured Layout
    const renderChartLayout = ()=>{
        const chartHasData = comparisonRows.length > 0;
        var _activeBenchmark_unit;
        const chartUnit = scoreMode === "normalized" ? "%" : (_activeBenchmark_unit = activeBenchmark === null || activeBenchmark === void 0 ? void 0 : activeBenchmark.unit) !== null && _activeBenchmark_unit !== void 0 ? _activeBenchmark_unit : "";
        const tooltipFormatter = (value)=>scoreMode === "normalized" || chartUnit === "%" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPercent"])(Number(value)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDecimal"])(Number(value), chartUnit === "score" ? 2 : 1);
        const yAxisMax = scoreMode === "normalized" ? 100 : Math.max(chartUnit === "%" ? 100 : 0, comparisonMaxValue > 0 ? Math.ceil(comparisonMaxValue / 5) * 5 : 10);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center justify-between gap-4 rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/80 p-4 shadow-[var(--shadow-soft)] backdrop-blur-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BenchmarkSelector, {
                                    benchmarks: benchmarks,
                                    activeId: activeBenchmarkId,
                                    onChange: setActiveBenchmarkId
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 525,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-6 w-px bg-[var(--border-soft)]"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 530,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        "normalized",
                                        "raw"
                                    ].map((mode)=>{
                                        const isActive = scoreMode === mode;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setScoreMode(mode),
                                            "aria-pressed": isActive,
                                            className: "rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ".concat(isActive ? "bg-[var(--color-foreground)] text-[var(--color-background)]" : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"),
                                            children: mode
                                        }, mode, false, {
                                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 535,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 531,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                            lineNumber: 524,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-[var(--color-muted)] italic max-w-sm text-right hidden lg:block",
                            children: scoreMode === "normalized" ? "Rescaled 0-100 for easy comparison" : "Raw benchmark unit: ".concat(chartUnit)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                            lineNumber: 552,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                    lineNumber: 523,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
                    children: normalizedScoresSorted.map((param, index)=>{
                        let { model, average } = param;
                        const color = getModelColor(model.id);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-soft)]/50 bg-[var(--color-surface)]/40 p-3 transition-transform hover:-translate-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute left-0 top-0 h-full w-1",
                                    style: {
                                        background: color
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 565,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--color-muted)]",
                                                    children: model.provider
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 568,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-bold text-[var(--color-foreground)] line-clamp-1",
                                                    children: model.name
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 569,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mt-1 flex items-center gap-1 text-[10px] text-[var(--color-muted)]/80",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart2$3e$__["BarChart2"], {
                                                            className: "h-3 w-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                            lineNumber: 571,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Rank #",
                                                        index + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 570,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 567,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-end",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-lg font-bold text-[var(--color-foreground)]",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPercent"])(average)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 576,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] uppercase tracking-wider text-[var(--color-muted)]",
                                                    children: "Avg"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 577,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 575,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 566,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, model.id, true, {
                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                            lineNumber: 564,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                    lineNumber: 560,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/80 p-6 shadow-[var(--shadow-depth)]",
                    children: chartHasData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[450px] w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                            width: "100%",
                            height: "100%",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                data: comparisonRows,
                                layout: "vertical",
                                margin: {
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 5
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                        horizontal: false,
                                        strokeOpacity: 0.1
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                        lineNumber: 595,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                        type: "number",
                                        domain: [
                                            0,
                                            yAxisMax
                                        ],
                                        stroke: "currentColor",
                                        strokeOpacity: 0.3,
                                        tick: {
                                            fill: "currentColor",
                                            opacity: 0.6,
                                            fontSize: 11
                                        },
                                        tickFormatter: (value)=>scoreMode === "normalized" || chartUnit === "%" ? "".concat(Math.round(Number(value))) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDecimal"])(Number(value), chartUnit === "score" ? 2 : 1)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                        lineNumber: 596,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                        type: "category",
                                        dataKey: "name",
                                        width: 180,
                                        stroke: "none",
                                        tick: {
                                            fill: "currentColor",
                                            opacity: 0.9,
                                            fontSize: 13,
                                            fontWeight: 500
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                        lineNumber: 608,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        cursor: {
                                            fill: "rgba(120,120,120,0.1)"
                                        },
                                        contentStyle: {
                                            backgroundColor: "var(--color-surface-elevated)",
                                            borderColor: "var(--border-soft)",
                                            borderRadius: "12px",
                                            boxShadow: "var(--shadow-soft)"
                                        },
                                        itemStyle: {
                                            color: "var(--color-foreground)"
                                        },
                                        formatter: (value)=>typeof value === "number" ? tooltipFormatter(value) : value
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                        lineNumber: 615,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                        dataKey: "value",
                                        radius: [
                                            0,
                                            6,
                                            6,
                                            0
                                        ],
                                        barSize: 32,
                                        children: [
                                            comparisonRows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                    fill: row.color
                                                }, row.modelId, false, {
                                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 630,
                                                    columnNumber: 23
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabelList"], {
                                                dataKey: "formatted",
                                                position: "right",
                                                style: {
                                                    fill: "var(--color-foreground)",
                                                    fontSize: 12,
                                                    fontWeight: 600,
                                                    opacity: 0.8
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                lineNumber: 632,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                        lineNumber: 628,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                lineNumber: 590,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                            lineNumber: 589,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                        lineNumber: 588,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-64 items-center justify-center rounded-lg border border-dashed border-[var(--border-soft)] bg-white/5 p-8 text-center text-[var(--color-muted)]",
                        children: "No data available for this configuration."
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                        lineNumber: 642,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                    lineNumber: 586,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
            lineNumber: 521,
            columnNumber: 7
        }, this);
    };
    const tabPanel = (()=>{
        switch(activeTab){
            case "overview":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 xl:grid-cols-[1.2fr_1fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-medium text-[var(--color-foreground)]",
                                    children: "Benchmark Coverage"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 657,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 grid gap-4 text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base",
                                    children: benchmarks.map((benchmark)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl bg-white/10 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between text-xs uppercase tracking-[0.3em] text-[var(--color-foreground)]/70",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: benchmark.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                            lineNumber: 662,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: benchmark.higherIsBetter ? "Higher is better" : "Lower is better"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                            lineNumber: 663,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 661,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-2 text-[15px] leading-relaxed sm:text-base",
                                                    children: benchmark.description
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 665,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, benchmark.id, true, {
                                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 660,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 658,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                            lineNumber: 656,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-medium text-[var(--color-foreground)]",
                                    children: "Roadmap Highlights"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 671,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base",
                                    children: "Upcoming phases expand coverage with MT-Bench, BBH, additional providers (Meta, Mistral), and introduce interactive prompt testing."
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 672,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 grid gap-2 text-xs text-[var(--color-foreground)]/70",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full bg-white/10 px-3 py-1",
                                            children: "MT-Bench pipeline"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 676,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full bg-white/10 px-3 py-1",
                                            children: "GitHub + Arxiv scrapers"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 677,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full bg-white/10 px-3 py-1",
                                            children: "Playground prompt tester"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 678,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 675,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                            lineNumber: 670,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                    lineNumber: 655,
                    columnNumber: 11
                }, this);
            case "charts":
                {
                    if (!isHydrated) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-6 animate-pulse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-20 w-full rounded-xl bg-[var(--color-surface)]/40"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 687,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-4 gap-4",
                                    children: [
                                        1,
                                        2,
                                        3,
                                        4
                                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-24 rounded-xl bg-[var(--color-surface)]/40"
                                        }, i, false, {
                                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 689,
                                            columnNumber: 40
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 688,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[400px] w-full rounded-xl bg-[var(--color-surface)]/40"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 691,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                            lineNumber: 686,
                            columnNumber: 13
                        }, this);
                    }
                    return renderChartLayout(); // Use new layout
                }
            case "pricing":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 xl:grid-cols-[320px_1fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-medium text-[var(--color-foreground)]",
                                    children: "Usage Assumptions"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 701,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base",
                                    children: "Estimate spend based on millions of tokens processed per month (60% input / 40% output split by default)."
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 702,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 flex flex-col gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex flex-col gap-2 text-base text-[var(--color-foreground)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]",
                                                    children: "Monthly tokens"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 707,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: 1,
                                                    max: 100,
                                                    step: 1,
                                                    value: usageMillions,
                                                    onChange: (event)=>setUsageMillions(Number(event.target.value)),
                                                    className: "w-full accent-[var(--color-accent-secondary)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 708,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[15px] leading-relaxed text-[var(--color-foreground)]/80 sm:text-base",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(usageMillions),
                                                        "M tokens / month"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 717,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 706,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-[var(--color-muted)]",
                                            children: "Adjust the slider to reflect your workload. We assume 60% input tokens and 40% output tokens when both tiers are available."
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 721,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 705,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                            lineNumber: 700,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)] shadow-[var(--shadow-soft)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-b border-[var(--border-soft)]/50 px-6 py-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-medium text-[var(--color-foreground)]",
                                        children: "Estimated Monthly Spend"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                        lineNumber: 728,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 727,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "min-w-full divide-y divide-white/10 text-left text-[15px] leading-relaxed text-[var(--color-foreground)]/80 sm:text-base",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "bg-white/10 text-xs uppercase tracking-[0.3em] text-[var(--color-foreground)]/60",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-6 py-3",
                                                            children: "Model"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                            lineNumber: 734,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-6 py-3",
                                                            children: "Input / 1M"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                            lineNumber: 735,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-6 py-3",
                                                            children: "Output / 1M"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                            lineNumber: 736,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-6 py-3",
                                                            children: "Requests / 1M"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                            lineNumber: 737,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-6 py-3 text-right",
                                                            children: "Est. monthly"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                            lineNumber: 738,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 733,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                lineNumber: 732,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "divide-y divide-white/10",
                                                children: pricingRows.map((row)=>{
                                                    const formatRate = (rate)=>{
                                                        if (typeof rate !== "number") return "-";
                                                        const hasFraction = Math.abs(rate % 1) > 0 || rate < 10;
                                                        const digits = hasFraction ? 2 : 0;
                                                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(rate, row.currency, {
                                                            minimumFractionDigits: digits,
                                                            maximumFractionDigits: digits
                                                        });
                                                    };
                                                    const monthlyDigits = row.estimatedMonthly < 100 ? 2 : 0;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[var(--color-foreground)]",
                                                                            children: row.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                            lineNumber: 758,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs uppercase tracking-[0.3em] text-[var(--color-foreground)]/60",
                                                                            children: row.provider
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                            lineNumber: 759,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                    lineNumber: 757,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                lineNumber: 756,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4",
                                                                children: formatRate(row.inputRate)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                lineNumber: 762,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4",
                                                                children: formatRate(row.outputRate)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                lineNumber: 763,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4",
                                                                children: formatRate(row.requestRate)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                lineNumber: 764,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4 text-right font-semibold text-[var(--color-foreground)]",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(row.estimatedMonthly, row.currency, {
                                                                    minimumFractionDigits: monthlyDigits,
                                                                    maximumFractionDigits: monthlyDigits
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                lineNumber: 765,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, row.id, true, {
                                                        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                        lineNumber: 755,
                                                        columnNumber: 25
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                lineNumber: 741,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                        lineNumber: 731,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 730,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                            lineNumber: 726,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                    lineNumber: 699,
                    columnNumber: 11
                }, this);
            case "summary":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 xl:grid-cols-[1.2fr_1fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-medium text-[var(--color-foreground)]",
                                    children: "Editorial TL;DR"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 784,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 space-y-4 text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base",
                                    children: [
                                        averageLeaders[0] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[var(--color-foreground)]",
                                                    children: averageLeaders[0].model.name
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 788,
                                                    columnNumber: 21
                                                }, this),
                                                " leads the pack with an average benchmark score of ",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[var(--color-foreground)]",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPercent"])(averageLeaders[0].average)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 791,
                                                    columnNumber: 21
                                                }, this),
                                                " across the four headline tests.",
                                                " ",
                                                averageLeaders[1] ? "".concat(averageLeaders[1].model.name, " trails by ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDecimal"])(averageLeaders[0].average - averageLeaders[1].average), " points.") : ""
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 787,
                                            columnNumber: 19
                                        }, this) : null,
                                        benchmarkLeaders.map((param)=>{
                                            let { benchmark, leader, runnerUp } = param;
                                            var _benchmark_unit;
                                            return leader && typeof leader.score === "number" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "On ",
                                                    benchmark.name,
                                                    ", ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--color-foreground)]",
                                                        children: leader.model.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                        lineNumber: 801,
                                                        columnNumber: 44
                                                    }, this),
                                                    " posts ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDecimal"])(leader.score),
                                                    (_benchmark_unit = benchmark.unit) !== null && _benchmark_unit !== void 0 ? _benchmark_unit : "%",
                                                    runnerUp && typeof runnerUp.score === "number" ? " edging ".concat(runnerUp.model.name, " by ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDecimal"])(leader.score - runnerUp.score), " points.") : " and sets the pace."
                                                ]
                                            }, benchmark.id, true, {
                                                fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                lineNumber: 800,
                                                columnNumber: 21
                                            }, this) : null;
                                        }),
                                        lowestCost ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "For the assumed workload of ",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(usageMillions),
                                                "M tokens, ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[var(--color-foreground)]",
                                                    children: lowestCost.name
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 811,
                                                    columnNumber: 88
                                                }, this),
                                                " delivers the lowest monthly spend at ",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[var(--color-foreground)]",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(lowestCost.estimatedMonthly, lowestCost.currency)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 814,
                                                    columnNumber: 21
                                                }, this),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 810,
                                            columnNumber: 19
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 785,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                            lineNumber: 783,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-medium text-[var(--color-foreground)]",
                                    children: "Context Window & Notes"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 820,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 space-y-4 text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base",
                                    children: selectedModels.map((model)=>{
                                        var _model_context_maxTokens;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl bg-white/10 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between text-xs uppercase tracking-[0.3em] text-[var(--color-foreground)]/70",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: model.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                            lineNumber: 825,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])((_model_context_maxTokens = model.context.maxTokens) !== null && _model_context_maxTokens !== void 0 ? _model_context_maxTokens : model.contextWindow),
                                                                " tokens"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                            lineNumber: 826,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 824,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-2 text-[15px] leading-relaxed text-[var(--color-foreground)]/80 sm:text-base",
                                                    children: [
                                                        "Modalities: ",
                                                        model.context.modalities.join(", ")
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 828,
                                                    columnNumber: 21
                                                }, this),
                                                model.context.notes ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-xs",
                                                    children: model.context.notes
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 831,
                                                    columnNumber: 44
                                                }, this) : null
                                            ]
                                        }, model.id, true, {
                                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 823,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 821,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                            lineNumber: 819,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                    lineNumber: 782,
                    columnNumber: 11
                }, this);
            default:
                return null;
        }
    })();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative overflow-hidden rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/55 bg-[var(--color-surface)]/55 p-8 shadow-[var(--shadow-ambient)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 opacity-80 blur-3xl",
                        style: {
                            background: "radial-gradient(140% 120% at 0% 0%, rgba(37,99,235,0.25), transparent 60%), radial-gradient(120% 120% at 92% 0%, rgba(6,182,212,0.2), transparent 55%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                        lineNumber: 846,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 opacity-60",
                        style: {
                            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(15, 23, 42, 0))"
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                        lineNumber: 853,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay",
                        style: {
                            background: "radial-gradient(120% 120% at 50% 110%, rgba(8, 13, 26, 0.5), transparent 60%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                        lineNumber: 859,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                className: "flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] uppercase tracking-[0.38em] text-[var(--color-muted)]/80",
                                        children: "Select models"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                        lineNumber: 868,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-[28px]",
                                        children: "Compare up to four flagship models"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                        lineNumber: 871,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "max-w-2xl text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base",
                                        children: [
                                            "Pick between ",
                                            MIN_SELECTION,
                                            " and ",
                                            MAX_SELECTION,
                                            " models to visualize benchmarks, pricing, and generate an editorial summary with magazine-grade polish."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                        lineNumber: 874,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                lineNumber: 867,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "mt-6 grid gap-3 md:grid-cols-2",
                                variants: listContainerVariants,
                                initial: "hidden",
                                animate: "visible",
                                children: models.map((model)=>{
                                    const isActive = selectedIds.includes(model.id);
                                    const disableAdd = !isActive && selectedIds.length >= MAX_SELECTION;
                                    const color = getModelColor(model.id);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        type: "button",
                                        onClick: ()=>toggleModel(model.id),
                                        "aria-pressed": isActive,
                                        disabled: disableAdd,
                                        className: "group relative overflow-hidden rounded-[var(--radius-xl)] border px-4 py-5 text-left transition ".concat(isActive ? "border-white/20 text-[var(--color-foreground)] shadow-[var(--shadow-soft)]" : "border-[var(--border-soft)]/50 text-[var(--color-muted)] hover:border-white/25 hover:text-[var(--color-foreground)]", " ").concat(disableAdd ? "cursor-not-allowed opacity-50" : "backdrop-blur-sm"),
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-80 group-aria-[pressed=true]:opacity-90",
                                                style: {
                                                    background: "radial-gradient(110% 110% at 50% 0%, rgba(255,255,255,0.12), transparent 65%)"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                lineNumber: 917,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-60",
                                                style: {
                                                    background: "radial-gradient(140% 140% at 50% 100%, rgba(37, 99, 235, 0.28), transparent 70%)"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                lineNumber: 924,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative flex items-center justify-between text-[11px] uppercase tracking-[0.3em]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "h-2 w-2 rounded-full shadow-[0_0_16px_rgba(37,99,235,0.6)]",
                                                                style: {
                                                                    background: color
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                                lineNumber: 933,
                                                                columnNumber: 23
                                                            }, this),
                                                            model.provider
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                        lineNumber: 932,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-[var(--color-muted)]/80",
                                                        children: new Date(model.releaseDate).getFullYear()
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                        lineNumber: 936,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                lineNumber: 931,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-lg font-semibold tracking-tight",
                                                children: model.name
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                lineNumber: 940,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-[var(--color-muted)]",
                                                children: [
                                                    "Context ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(model.contextWindow),
                                                    " tokens - Availability ",
                                                    model.availability
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                lineNumber: 941,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, model.id, true, {
                                        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                        lineNumber: 889,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                lineNumber: 878,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                        lineNumber: 866,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                lineNumber: 845,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutGroup"], {
                        id: "comparison-tabs",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            role: "tablist",
                            "aria-label": "Comparison views",
                            className: "relative flex flex-wrap items-center gap-2 rounded-full border border-[var(--border-soft)]/50 bg-[var(--color-surface-glass)] px-1 py-1",
                            children: TAB_ITEMS.map((tab)=>{
                                const isActive = activeTab === tab.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    type: "button",
                                    role: "tab",
                                    layout: "position",
                                    "aria-selected": isActive,
                                    className: "relative overflow-hidden rounded-full px-6 py-2 text-[13px] font-semibold uppercase tracking-[0.32em] transition-[color,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)] ".concat(isActive ? "text-[var(--color-background)]" : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"),
                                    onClick: ()=>setActiveTab(tab.id),
                                    whileHover: reduceMotion ? undefined : {
                                        scale: 1.015,
                                        transition: {
                                            duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].motion.duration.hover / 1000,
                                            ease: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].motion.easing.standard
                                        }
                                    },
                                    whileTap: reduceMotion ? undefined : {
                                        scale: 0.985,
                                        transition: {
                                            duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].motion.duration.micro / 1000,
                                            ease: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].motion.easing.exit
                                        }
                                    },
                                    children: [
                                        isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            layoutId: "comparison-tab-indicator",
                                            transition: tabHighlightTransition,
                                            className: "absolute inset-0 rounded-full border border-white/60 shadow-[0_18px_48px_rgba(15,23,42,0.26)]",
                                            style: {
                                                background: "linear-gradient(135deg, rgba(255,255,255,0.96), rgba(229,231,235,0.94))",
                                                backdropFilter: "blur(6px)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 976,
                                            columnNumber: 21
                                        }, this) : null,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative z-10",
                                            children: tab.label
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                            lineNumber: 986,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, tab.id, true, {
                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 961,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                            lineNumber: 953,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                        lineNumber: 952,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: tabPanel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            layout: true,
                            initial: "hidden",
                            animate: "visible",
                            exit: "exit",
                            variants: tabPanelVariants,
                            className: "relative w-full overflow-hidden rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/45 bg-[var(--color-surface)]/60 shadow-[var(--shadow-soft)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pointer-events-none absolute inset-0 opacity-80 transition-opacity duration-300",
                                    style: {
                                        background: activeTabMotif.gradient
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 1004,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pointer-events-none absolute inset-0 opacity-70 mix-blend-overlay transition-opacity duration-500",
                                    style: {
                                        background: activeTabMotif.accent
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 1008,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pointer-events-none absolute inset-0 opacity-70",
                                    style: {
                                        background: activeTabMotif.vignette
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 1012,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 p-6 sm:p-8",
                                    children: tabPanel
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                    lineNumber: 1016,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, activeTab, true, {
                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                            lineNumber: 995,
                            columnNumber: 13
                        }, this) : null
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                        lineNumber: 993,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                lineNumber: 951,
                columnNumber: 7
            }, this),
            selectedModels.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/40 p-8 shadow-[var(--shadow-soft)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]/75",
                                        children: "Source Notebook"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                        lineNumber: 1026,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-[var(--color-foreground)]",
                                        children: "Evidence trail for the current comparison"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                        lineNumber: 1027,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                lineNumber: 1025,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "max-w-xl text-xs leading-relaxed text-[var(--color-muted)]/80 sm:text-sm",
                                children: "Every card links to the official provider post, pricing announcement, or documentation confirming the figures above."
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                lineNumber: 1029,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                        lineNumber: 1024,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4",
                        children: selectedModels.map((model)=>{
                            const sources = Array.from(new Set(model.sources));
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "flex h-full flex-col gap-4 rounded-[var(--radius-xl)] border border-[var(--border-soft)]/50 bg-[var(--color-surface-elevated)]/40 p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]/70",
                                                children: model.provider
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                lineNumber: 1042,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-semibold text-[var(--color-foreground)]",
                                                children: model.name
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                lineNumber: 1045,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                        lineNumber: 1041,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "flex flex-col gap-2 text-sm leading-relaxed text-[var(--color-foreground)]/85",
                                        children: sources.map((source)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: source,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    title: source,
                                                    className: "inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)]/60 bg-[var(--color-background)]/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-foreground)]/85 transition hover:bg-white hover:text-[var(--color-background)]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "h-1.5 w-1.5 rounded-full bg-[var(--color-foreground)]/60",
                                                            "aria-hidden": true
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                            lineNumber: 1057,
                                                            columnNumber: 27
                                                        }, this),
                                                        formatSourceLabel(source)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                    lineNumber: 1050,
                                                    columnNumber: 25
                                                }, this)
                                            }, source, false, {
                                                fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                                lineNumber: 1049,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                        lineNumber: 1047,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, model.id, true, {
                                fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                                lineNumber: 1037,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                        lineNumber: 1033,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
                lineNumber: 1023,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/comparisons/comparison-experience.tsx",
        lineNumber: 844,
        columnNumber: 5
    }, this);
}
_s1(ComparisonExperience, "8iN7XW0X6uMdJy8sOEXT3/ALbP4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$analytics$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c1 = ComparisonExperience;
var _c, _c1;
__turbopack_context__.k.register(_c, "BenchmarkSelector");
__turbopack_context__.k.register(_c1, "ComparisonExperience");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_dcdcbe7b._.js.map