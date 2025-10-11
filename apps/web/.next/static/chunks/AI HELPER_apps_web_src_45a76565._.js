(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/AI HELPER/apps/web/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/AI HELPER/apps/web/src/lib/api.ts'\n\nUnexpected token `)`. Expected identifier, string literal, numeric literal or [ for the computed key");
e.code = 'MODULE_UNPARSABLE';
throw e;
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
const articleListVariants = {
    hidden: {
        opacity: 0,
        y: 16
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.08,
            delayChildren: 0.1
        }
    }
};
const articleItemVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        }
    }
};
function NewsroomFeed(param) {
    let { initial, refreshIntervalMs = DEFAULT_REFRESH_INTERVAL } = param;
    _s();
    const [payload, setPayload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial);
    const [lastUpdated, setLastUpdated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "NewsroomFeed.useState": ()=>{
            var _initial_articles_;
            var _initial_articles__publishedAt;
            return new Date((_initial_articles__publishedAt = (_initial_articles_ = initial.articles[0]) === null || _initial_articles_ === void 0 ? void 0 : _initial_articles_.publishedAt) !== null && _initial_articles__publishedAt !== void 0 ? _initial_articles__publishedAt : Date.now());
        }
    }["NewsroomFeed.useState"]);
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
                const nextPayload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchNewsPayload"])(30);
                const hasChanged = nextPayload.articles.length !== payload.articles.length || nextPayload.articles.some({
                    "NewsroomFeed.useCallback[refresh]": (article, index)=>{
                        var _payload_articles_index;
                        return article.id !== ((_payload_articles_index = payload.articles[index]) === null || _payload_articles_index === void 0 ? void 0 : _payload_articles_index.id);
                    }
                }["NewsroomFeed.useCallback[refresh]"]);
                if (hasChanged) {
                    var _nextPayload_articles_;
                    setPayload(nextPayload);
                    const publishedAt = (_nextPayload_articles_ = nextPayload.articles[0]) === null || _nextPayload_articles_ === void 0 ? void 0 : _nextPayload_articles_.publishedAt;
                    setLastUpdated(new Date(publishedAt !== null && publishedAt !== void 0 ? publishedAt : Date.now()));
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
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this),
                                    "Live Signal Deck"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                lineNumber: 106,
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
                                lineNumber: 114,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                        lineNumber: 105,
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
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "max-w-3xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg",
                                children: "Trusted coverage from official AI labs and ecosystem partners. We ingest verified RSS feeds, score launches, and package rapid-fire summaries so you can stay in the product without doomscrolling."
                            }, void 0, false, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                        lineNumber: 118,
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
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this),
                                    "Refresh"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-[var(--accent-quaternary)]",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                lineNumber: 104,
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
                                lineNumber: 150,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "aria-hidden": true,
                                className: "pointer-events-none absolute inset-0 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mesh-flow absolute -inset-10 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                lineNumber: 155,
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
                                                lineNumber: 160,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    digest.articleIds.length,
                                                    " STORIES"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                                lineNumber: 161,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                        lineNumber: 159,
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
                                                lineNumber: 164,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-base text-white/80",
                                                children: digest.summary
                                            }, void 0, false, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                                lineNumber: 165,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                        lineNumber: 163,
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
                                                lineNumber: 173,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                        lineNumber: 167,
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
                                                lineNumber: 180,
                                                columnNumber: 17
                                            }, this),
                                            "Auto-built every Sunday 18:00 UTC"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                        lineNumber: 149,
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
                                        lineNumber: 188,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold text-[var(--color-foreground)]",
                                        children: "Cron-staged, QA-reviewed"
                                    }, void 0, false, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                        lineNumber: 191,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm leading-relaxed text-[var(--color-muted)]",
                                        children: "Thirty-minute RSS pulls, structured summaries, and delta scoring for GitHub repos keep this feed aligned with primary sources. Prometheus-backed metrics and alerting ensure reliability."
                                    }, void 0, false, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                lineNumber: 187,
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
                                        lineNumber: 198,
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
                                                        lineNumber: 202,
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
                                                        lineNumber: 203,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, source.id, true, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                                lineNumber: 201,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                        lineNumber: 199,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                lineNumber: 148,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "grid gap-6 md:grid-cols-2",
                variants: articleListVariants,
                initial: "hidden",
                animate: "visible",
                children: articles.map((article)=>{
                    const source = sourceLookup.get(article.sourceId);
                    var _source_name;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
                        className: "group relative overflow-hidden rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/55 bg-[var(--color-surface)]/40 p-6 shadow-[var(--shadow-soft)] outline-none transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-depth)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent-secondary)]/60",
                        tabIndex: 0,
                        "data-hotkey-target": "news-card",
                        variants: articleItemVariants,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "aria-hidden": true,
                                className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-80",
                                style: {
                                    background: getGradient(article.sourceId)
                                }
                            }, void 0, false, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                lineNumber: 228,
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
                                                lineNumber: 235,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatFullDate"])(new Date(article.publishedAt))
                                            }, void 0, false, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                                lineNumber: 236,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                        lineNumber: 234,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-semibold leading-snug text-[var(--color-foreground)]",
                                        children: article.title
                                    }, void 0, false, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                        lineNumber: 238,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm leading-relaxed text-[var(--color-muted)]",
                                        children: article.summary
                                    }, void 0, false, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                        lineNumber: 239,
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
                                                    lineNumber: 242,
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
                                                lineNumber: 246,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                        lineNumber: 240,
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
                                                        lineNumber: 253,
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
                                                        lineNumber: 256,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                                lineNumber: 252,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[var(--color-muted)]/70",
                                                children: "Official release only"
                                            }, void 0, false, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                                lineNumber: 261,
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
                                                        lineNumber: 268,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                                lineNumber: 263,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                        lineNumber: 250,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                                lineNumber: 233,
                                columnNumber: 15
                            }, this)
                        ]
                    }, article.id, true, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                        lineNumber: 221,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/AI HELPER/apps/web/src/components/news/newsroom-feed.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_s(NewsroomFeed, "GsNcLk9z9nbY5i9BrFPlY2WFSwQ=");
_c = NewsroomFeed;
var _c;
__turbopack_context__.k.register(_c, "NewsroomFeed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=AI%20HELPER_apps_web_src_45a76565._.js.map