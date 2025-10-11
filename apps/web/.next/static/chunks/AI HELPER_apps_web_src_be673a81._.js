(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModelDirectoryBoard",
    ()=>ModelDirectoryBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/lib/design/tokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/lib/format.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const EMPTY_FILTERS = {
    providers: new Set(),
    licenses: new Set(),
    deployments: new Set()
};
const providerGradients = {
    OpenAI: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].gradients.aurora,
    Anthropic: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].gradients.ember,
    "Google DeepMind": __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].gradients.horizon,
    "Mistral AI": __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].gradients.hero,
    Meta: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].gradients.deepmind,
    Microsoft: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].gradients.digest,
    Databricks: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].gradients.xai,
    "Amazon AWS": __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].gradients.horizon,
    NVIDIA: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].gradients.aurora
};
function toCurrency(value) {
    let currency = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "USD";
    if (value === undefined) return null;
    return new Intl.NumberFormat("en", {
        style: "currency",
        currency
    }).format(value);
}
function toggle(set, value) {
    const next = new Set(set);
    if (next.has(value)) {
        next.delete(value);
    } else {
        next.add(value);
    }
    return next;
}
function ModelDirectoryBoard(param) {
    let { models } = param;
    _s();
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(EMPTY_FILTERS);
    const providers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ModelDirectoryBoard.useMemo[providers]": ()=>Array.from(new Set(models.map({
                "ModelDirectoryBoard.useMemo[providers]": (model)=>model.provider
            }["ModelDirectoryBoard.useMemo[providers]"]))).sort()
    }["ModelDirectoryBoard.useMemo[providers]"], [
        models
    ]);
    const licenses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ModelDirectoryBoard.useMemo[licenses]": ()=>Array.from(new Set(models.map({
                "ModelDirectoryBoard.useMemo[licenses]": (model)=>model.licensing
            }["ModelDirectoryBoard.useMemo[licenses]"]))).sort()
    }["ModelDirectoryBoard.useMemo[licenses]"], [
        models
    ]);
    const deployments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ModelDirectoryBoard.useMemo[deployments]": ()=>Array.from(new Set(models.map({
                "ModelDirectoryBoard.useMemo[deployments]": (model)=>model.deployment
            }["ModelDirectoryBoard.useMemo[deployments]"]))).sort()
    }["ModelDirectoryBoard.useMemo[deployments]"], [
        models
    ]);
    const filteredModels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ModelDirectoryBoard.useMemo[filteredModels]": ()=>{
            return models.filter({
                "ModelDirectoryBoard.useMemo[filteredModels]": (model)=>{
                    const providerMatch = filters.providers.size === 0 || filters.providers.has(model.provider);
                    const licenseMatch = filters.licenses.size === 0 || filters.licenses.has(model.licensing);
                    const deploymentMatch = filters.deployments.size === 0 || filters.deployments.has(model.deployment);
                    return providerMatch && licenseMatch && deploymentMatch;
                }
            }["ModelDirectoryBoard.useMemo[filteredModels]"]);
        }
    }["ModelDirectoryBoard.useMemo[filteredModels]"], [
        models,
        filters
    ]);
    const clearFilters = ()=>setFilters(EMPTY_FILTERS);
    const activeCount = filters.providers.size + filters.licenses.size + filters.deployments.size;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex flex-col gap-14",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-semibold uppercase tracking-[0.42em] text-[var(--color-muted)]/80",
                        children: "Model Directory"
                    }, void 0, false, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-semibold text-[var(--color-foreground)] sm:text-[42px]",
                                children: "Production Intelligence Cards"
                            }, void 0, false, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "max-w-3xl text-base text-[var(--color-muted)] sm:text-lg",
                                children: "Filter by provider, licensing posture, or deployment footprint to build a shortlist quickly. Every card mirrors the magazine-grade layout defined in the product spec so sourcing, engineering, and procurement stay on the same page."
                            }, void 0, false, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/45 px-8 py-10 shadow-[var(--shadow-soft)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterGroup, {
                            title: "Provider",
                            options: providers,
                            selected: filters.providers,
                            onToggle: (value)=>setFilters((prev)=>({
                                        ...prev,
                                        providers: toggle(prev.providers, value)
                                    }))
                        }, void 0, false, {
                            fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterGroup, {
                            title: "License",
                            options: licenses,
                            selected: filters.licenses,
                            onToggle: (value)=>setFilters((prev)=>({
                                        ...prev,
                                        licenses: toggle(prev.licenses, value)
                                    }))
                        }, void 0, false, {
                            fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterGroup, {
                            title: "Deployment",
                            options: deployments,
                            selected: filters.deployments,
                            onToggle: (value)=>setFilters((prev)=>({
                                        ...prev,
                                        deployments: toggle(prev.deployments, value)
                                    }))
                        }, void 0, false, {
                            fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]/80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: activeCount > 0 ? "".concat(activeCount, " active filter").concat(activeCount > 1 ? "s" : "") : "Showing all models"
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                activeCount > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: clearFilters,
                                    className: "rounded-full border border-[var(--border-soft)]/60 px-4 py-1 text-xs font-semibold text-[var(--color-foreground)]/80 transition hover:text-[var(--color-foreground)]",
                                    children: "Clear"
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 md:grid-cols-2",
                children: filteredModels.map((model)=>{
                    var _providerGradients_model_provider;
                    const gradient = (_providerGradients_model_provider = providerGradients[model.provider]) !== null && _providerGradients_model_provider !== void 0 ? _providerGradients_model_provider : __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].gradients.hero;
                    const inputPrice = toCurrency(model.pricing.input, model.pricing.currency);
                    const outputPrice = toCurrency(model.pricing.output, model.pricing.currency);
                    const flatRate = toCurrency(model.pricing.flatRate, model.pricing.currency);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "group relative flex h-full flex-col gap-6 overflow-hidden rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/45 px-8 py-10 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-depth)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "aria-hidden": true,
                                className: "pointer-events-none absolute inset-0 opacity-65 transition duration-300 group-hover:opacity-90",
                                style: {
                                    background: "radial-gradient(120% 120% at 0% 0%, ".concat(gradient[0], ", transparent 70%), radial-gradient(120% 120% at 100% 100%, ").concat(gradient[gradient.length - 1], ", transparent 70%)")
                                }
                            }, void 0, false, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
                                lineNumber: 144,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex flex-col gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]/80",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: model.provider
                                            }, void 0, false, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
                                                lineNumber: 153,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMonthYear"])(model.releaseDate)
                                            }, void 0, false, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
                                                lineNumber: 154,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
                                        lineNumber: 152,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[22px] font-semibold text-[var(--color-foreground)]",
                                        children: model.name
                                    }, void 0, false, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
                                        lineNumber: 156,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm leading-relaxed text-[var(--color-muted)]",
                                        children: [
                                            "Context ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(model.contextWindow),
                                            " tokens | ",
                                            model.licensing,
                                            " | ",
                                            model.deployment
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
                                        lineNumber: 157,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-[var(--color-foreground)]/85",
                                        children: [
                                            inputPrice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "Input: ",
                                                    inputPrice,
                                                    " per 1M tokens"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
                                                lineNumber: 161,
                                                columnNumber: 33
                                            }, this) : null,
                                            outputPrice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "Output: ",
                                                    outputPrice,
                                                    " per 1M tokens"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
                                                lineNumber: 162,
                                                columnNumber: 34
                                            }, this) : null,
                                            flatRate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "Requests: ",
                                                    flatRate,
                                                    " per 1M"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
                                                lineNumber: 163,
                                                columnNumber: 31
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
                                        lineNumber: 160,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/80",
                                        children: model.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full border border-white/20 bg-white/10 px-3 py-1",
                                                children: tag
                                            }, tag, false, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
                                                lineNumber: 167,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
                                        lineNumber: 165,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: model.website,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] text-white/80 transition hover:text-white",
                                        children: [
                                            "Visit model page",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": true,
                                                className: "text-sm",
                                                children: ">"
                                            }, void 0, false, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
                                                lineNumber: 179,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
                                        lineNumber: 172,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
                                lineNumber: 151,
                                columnNumber: 15
                            }, this)
                        ]
                    }, model.id, true, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
                        lineNumber: 140,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_s(ModelDirectoryBoard, "uIZg6yVOtHMfsUWiHe1aUUghkLs=");
_c = ModelDirectoryBoard;
function FilterGroup(param) {
    let { title, options, selected, onToggle } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm font-semibold uppercase tracking-[0.32em] text-[var(--color-foreground)]",
                children: title
            }, void 0, false, {
                fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: options.map((option)=>{
                    const active = selected.has(option);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onToggle(option),
                        className: "rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] transition ".concat(active ? "border-[var(--color-accent-secondary)]/60 bg-[var(--color-accent-secondary)]/20 text-white" : "border-[var(--border-soft)]/60 text-[var(--color-muted)]/80 hover:border-[var(--color-accent-secondary)]/50 hover:text-[var(--color-foreground)]"),
                        children: option
                    }, option, false, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
                        lineNumber: 205,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/AI HELPER/apps/web/src/components/models/model-directory-board.tsx",
        lineNumber: 199,
        columnNumber: 5
    }, this);
}
_c1 = FilterGroup;
var _c, _c1;
__turbopack_context__.k.register(_c, "ModelDirectoryBoard");
__turbopack_context__.k.register(_c1, "FilterGroup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=AI%20HELPER_apps_web_src_be673a81._.js.map