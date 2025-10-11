(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/AI HELPER/apps/web/src/lib/auth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This file will contain the API calls to the backend for authentication.
__turbopack_context__.s([
    "getMe",
    ()=>getMe,
    "login",
    ()=>login,
    "register",
    ()=>register
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
async function assertOk(response, fallbackMessage) {
    if (response.ok) {
        return response;
    }
    // Attempt to surface API-provided detail before using the fallback copy.
    try {
        const payload = await response.json();
        const detail = typeof payload === "object" && payload !== null && "detail" in payload ? String(payload.detail) : null;
        throw new Error(detail !== null && detail !== void 0 ? detail : fallbackMessage);
    } catch (e) {
        throw new Error(fallbackMessage);
    }
}
async function login(email, password) {
    const response = await fetch("".concat(API_URL, "/auth/token"), {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            username: email,
            password
        })
    });
    const safeResponse = await assertOk(response, "Failed to login");
    const payload = await safeResponse.json();
    return payload;
}
async function register(email, password) {
    const response = await fetch("".concat(API_URL, "/users/register"), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    const safeResponse = await assertOk(response, "Failed to register");
    const payload = await safeResponse.json();
    return payload;
}
async function getMe(token) {
    const response = await fetch("".concat(API_URL, "/users/me"), {
        headers: {
            Authorization: "Bearer ".concat(token)
        }
    });
    const safeResponse = await assertOk(response, "Failed to fetch user profile");
    const payload = await safeResponse.json();
    return payload;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/AI HELPER/apps/web/src/context/auth-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/lib/auth.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
// Create the context
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider(param) {
    let { children } = param;
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const initializeAuth = {
                "AuthProvider.useEffect.initializeAuth": async ()=>{
                    const storedToken = localStorage.getItem('authToken');
                    if (storedToken) {
                        try {
                            const profile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMe"])(storedToken);
                            setUser(profile);
                            setToken(storedToken);
                        } catch (e) {
                            // Token is invalid, clear it
                            localStorage.removeItem('authToken');
                            router.push('/auth/login');
                        }
                    }
                    setIsLoading(false);
                }
            }["AuthProvider.useEffect.initializeAuth"];
            initializeAuth();
        }
    }["AuthProvider.useEffect"], [
        router
    ]);
    const login = async (email, password)=>{
        setIsLoading(true);
        setError(null);
        try {
            const { accessToken } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["login"])(email, password);
            localStorage.setItem('authToken', accessToken);
            const profile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMe"])(accessToken);
            setToken(accessToken);
            setUser(profile);
            router.push('/dashboard'); // Redirect to dashboard on successful login
        } catch (error) {
            const message = error instanceof Error ? error.message : 'An error occurred during login.';
            setError(message);
        } finally{
            setIsLoading(false);
        }
    };
    const register = async (email, password)=>{
        setIsLoading(true);
        setError(null);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["register"])(email, password);
            // Redirect to login page after successful registration
            router.push('/auth/login?registered=true');
        } catch (error) {
            const message = error instanceof Error ? error.message : 'An error occurred during registration.';
            setError(message);
        } finally{
            setIsLoading(false);
        }
    };
    const logout = ()=>{
        localStorage.removeItem('authToken');
        setToken(null);
        setUser(null);
        router.push('/auth/login');
    };
    const value = {
        user,
        token,
        login,
        register,
        logout,
        isLoading,
        error
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/AI HELPER/apps/web/src/context/auth-context.tsx",
        lineNumber: 93,
        columnNumber: 10
    }, this);
}
_s(AuthProvider, "W9j8lI288aJb0CeYpcFWh9XxUdM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthProvider;
function useAuth() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/AI HELPER/apps/web/src/context/feature-flags.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeatureFlagProvider",
    ()=>FeatureFlagProvider,
    "useFeatureFlag",
    ()=>useFeatureFlag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const defaultFlags = {
    commandPalette: true,
    optimisticSearch: true
};
const FeatureFlagContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(defaultFlags);
function FeatureFlagProvider(param) {
    let { children, overrides } = param;
    _s();
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FeatureFlagProvider.useMemo[value]": ()=>({
                ...defaultFlags,
                ...overrides !== null && overrides !== void 0 ? overrides : {}
            })
    }["FeatureFlagProvider.useMemo[value]"], [
        overrides
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureFlagContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/AI HELPER/apps/web/src/context/feature-flags.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_s(FeatureFlagProvider, "tPauEVZ6EeuERV9ttvKTwQ7++Gw=");
_c = FeatureFlagProvider;
function useFeatureFlag(key) {
    _s1();
    const flags = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(FeatureFlagContext);
    return flags[key];
}
_s1(useFeatureFlag, "cYNLZ+qBtNkIUuEyN5xDAd53QME=");
var _c;
__turbopack_context__.k.register(_c, "FeatureFlagProvider");
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
"[project]/AI HELPER/apps/web/src/lib/search/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "searchContent",
    ()=>searchContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$comparison$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/data/comparison-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$learn$2d$tracks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/data/learn-tracks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/data/models.ts [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/data/news'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/lib/format.ts [app-client] (ecmascript)");
;
;
;
;
;
const SOURCE_LOOKUP = Object.fromEntries(_c1 = newsSources.map(_c = (source)=>[
        source.id,
        source
    ]));
_c2 = SOURCE_LOOKUP;
function tokenizeQuery(query) {
    const normalized = query.trim().toLowerCase();
    const tokens = normalized.replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);
    return {
        raw: normalized,
        tokens: Array.from(new Set(tokens))
    };
}
function computeScore(tokens, text, weight) {
    if (!text) return 0;
    const lower = text.toLowerCase();
    return tokens.reduce((score, token)=>lower.includes(token) ? score + weight : score, 0);
}
function searchNews(tokens) {
    if (!tokens.length) return [];
    return placeholderNews.map((article)=>{
        const contentText = article.content ? article.content.join(" ") : "";
        const score = computeScore(tokens, article.title, 5) + computeScore(tokens, article.summary, 3) + computeScore(tokens, article.tags.join(" "), 2) + computeScore(tokens, contentText, 2);
        if (score <= 0) return null;
        const source = SOURCE_LOOKUP[article.sourceId];
        var _source_name;
        const metaParts = [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatFullDate"])(article.publishedAt),
            (_source_name = source === null || source === void 0 ? void 0 : source.name) !== null && _source_name !== void 0 ? _source_name : article.sourceId
        ].filter(Boolean);
        var _source_name1;
        return {
            result: {
                id: article.id,
                title: article.title,
                description: article.summary,
                href: "/news/".concat(article.slug),
                score,
                badge: (_source_name1 = source === null || source === void 0 ? void 0 : source.name) !== null && _source_name1 !== void 0 ? _source_name1 : article.sourceId,
                meta: metaParts.join(" | ") || undefined,
                isExternal: false
            },
            publishedAt: article.publishedAt
        };
    }).filter((entry)=>entry !== null).sort((a, b)=>{
        if (b.result.score !== a.result.score) {
            return b.result.score - a.result.score;
        }
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    }).map((entry)=>entry.result);
}
function searchComparisons(tokens) {
    if (!tokens.length) return [];
    const benchmarkMatches = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$comparison$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["comparisonConfig"].benchmarks.map((benchmark)=>{
        const score = computeScore(tokens, benchmark.name, 4) + computeScore(tokens, benchmark.description, 2);
        if (score <= 0) return null;
        return {
            id: "benchmark-".concat(benchmark.id),
            title: benchmark.name,
            description: benchmark.description,
            href: "/comparisons",
            score,
            badge: benchmark.unit ? "".concat(benchmark.unit) : "Benchmark"
        };
    }).filter(Boolean);
    const modelMatches = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$comparison$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modelProfiles"].map((model)=>{
        var _model_context_notes;
        const score = computeScore(tokens, model.name, 5) + computeScore(tokens, model.provider, 3) + computeScore(tokens, (_model_context_notes = model.context.notes) !== null && _model_context_notes !== void 0 ? _model_context_notes : "", 2) + computeScore(tokens, model.benchmarks.map((entry)=>entry.benchmarkId).join(" "), 1);
        if (score <= 0) return null;
        return {
            id: "comparison-model-".concat(model.id),
            title: model.name,
            description: "".concat(model.provider, " | Context ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(model.contextWindow), " tokens"),
            href: "/comparisons",
            score,
            badge: model.provider
        };
    }).filter(Boolean);
    return [
        ...benchmarkMatches,
        ...modelMatches
    ].sort((a, b)=>b.score - a.score);
}
function searchLearn(tokens) {
    if (!tokens.length) return [];
    const matches = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$learn$2d$tracks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["learnTracks"].map((track)=>{
        const moduleTitles = track.modules.map((module)=>module.title).join(" ");
        const moduleObjectives = track.modules.map((module)=>module.objective).join(" ");
        const score = computeScore(tokens, track.title, 5) + computeScore(tokens, track.outcome, 3) + computeScore(tokens, moduleTitles, 2) + computeScore(tokens, moduleObjectives, 1);
        if (score <= 0) return null;
        return {
            id: "learn-".concat(track.id),
            title: track.title,
            description: track.outcome,
            href: "/learn/".concat(track.id),
            score,
            badge: track.level.toUpperCase()
        };
    }).filter(Boolean);
    return matches.sort((a, b)=>b.score - a.score);
}
function searchModels(tokens) {
    if (!tokens.length) return [];
    const matches = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modelDirectory"].map((model)=>{
        const score = computeScore(tokens, model.name, 5) + computeScore(tokens, model.provider, 3) + computeScore(tokens, model.tags.join(" "), 2);
        if (score <= 0) return null;
        return {
            id: "model-".concat(model.id),
            title: model.name,
            description: "".concat(model.provider, " | ").concat(model.licensing, " | ").concat(model.deployment),
            href: "/models",
            score,
            badge: model.provider
        };
    }).filter(Boolean);
    return matches.sort((a, b)=>b.score - a.score);
}
function searchContent(query) {
    let limitPerGroup = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 50;
    const { raw, tokens } = tokenizeQuery(query);
    if (!raw || !tokens.length) {
        return {
            query,
            total: 0,
            groups: [
                {
                    category: "news",
                    label: "News",
                    results: []
                },
                {
                    category: "comparisons",
                    label: "Comparisons",
                    results: []
                },
                {
                    category: "learn",
                    label: "Learn",
                    results: []
                },
                {
                    category: "models",
                    label: "Models",
                    results: []
                }
            ]
        };
    }
    const groups = [
        {
            category: "news",
            label: "News",
            results: searchNews(tokens).slice(0, limitPerGroup)
        },
        {
            category: "comparisons",
            label: "Comparisons",
            results: searchComparisons(tokens).slice(0, limitPerGroup)
        },
        {
            category: "learn",
            label: "Learn",
            results: searchLearn(tokens).slice(0, limitPerGroup)
        },
        {
            category: "models",
            label: "Models",
            results: searchModels(tokens).slice(0, limitPerGroup)
        }
    ];
    const total = groups.reduce((sum, group)=>sum + group.results.length, 0);
    return {
        query,
        total,
        groups
    };
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "SOURCE_LOOKUP$Object.fromEntries$newsSources.map");
__turbopack_context__.k.register(_c1, "SOURCE_LOOKUP$Object.fromEntries");
__turbopack_context__.k.register(_c2, "SOURCE_LOOKUP");
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
            slow: 420,
            page: 350,
            hover: 220
        },
        stagger: {
            card: 0.06,
            element: 0.04
        },
        easing: {
            standard: [
                0.21,
                0.45,
                0.1,
                0.99
            ],
            entrance: [
                0.16,
                1,
                0.3,
                1
            ],
            exit: [
                0.16,
                0.01,
                0.3,
                1
            ]
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
"[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommandPalette",
    ()=>CommandPalette
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$search$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/lib/search/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$context$2f$feature$2d$flags$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/context/feature-flags.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/lib/design/tokens.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const defaultCommands = [
    {
        id: "nav-news",
        title: "Browse AI newsroom",
        description: "Editorial updates, digest, and curated launch coverage.",
        href: "/news",
        score: 1,
        badge: "News",
        categoryLabel: "Navigation"
    },
    {
        id: "nav-comparisons",
        title: "Compare leading LLMs",
        description: "Benchmark radar, pricing estimators, and sourcing trails.",
        href: "/comparisons",
        score: 1,
        badge: "Comparisons",
        categoryLabel: "Navigation"
    },
    {
        id: "nav-learn",
        title: "Open learning tracks",
        description: "Curated modules with capstones and badge incentives.",
        href: "/learn",
        score: 1,
        badge: "Learn",
        categoryLabel: "Navigation"
    },
    {
        id: "nav-models",
        title: "Explore model directory",
        description: "Filters for provider, licensing, and deployment posture.",
        href: "/models",
        score: 1,
        badge: "Models",
        categoryLabel: "Navigation"
    }
];
function CommandPalette(param) {
    let { open, onClose } = param;
    _s();
    const enabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$context$2f$feature$2d$flags$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFeatureFlag"])("commandPalette");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const results = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CommandPalette.useMemo[results]": ()=>{
            if (!enabled) {
                return [];
            }
            if (!query.trim()) {
                return defaultCommands;
            }
            const search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$search$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchContent"])(query, 6);
            return search.groups.flatMap({
                "CommandPalette.useMemo[results]": (group)=>group.results.slice(0, 5).map({
                        "CommandPalette.useMemo[results]": (result)=>({
                                ...result,
                                categoryLabel: group.label
                            })
                    }["CommandPalette.useMemo[results]"])
            }["CommandPalette.useMemo[results]"]);
        }
    }["CommandPalette.useMemo[results]"], [
        enabled,
        query
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommandPalette.useEffect": ()=>{
            if (open) {
                setQuery("");
                setActiveIndex(0);
                const id = window.setTimeout({
                    "CommandPalette.useEffect.id": ()=>{
                        var _inputRef_current;
                        (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
                    }
                }["CommandPalette.useEffect.id"], 10);
                return ({
                    "CommandPalette.useEffect": ()=>window.clearTimeout(id)
                })["CommandPalette.useEffect"];
            }
            return undefined;
        }
    }["CommandPalette.useEffect"], [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommandPalette.useEffect": ()=>{
            if (!open) return undefined;
            const handleKey = {
                "CommandPalette.useEffect.handleKey": (event)=>{
                    if (event.key === "Escape") {
                        event.preventDefault();
                        onClose();
                    }
                    if (!results.length) {
                        return;
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        setActiveIndex({
                            "CommandPalette.useEffect.handleKey": (index)=>Math.min(index + 1, results.length - 1)
                        }["CommandPalette.useEffect.handleKey"]);
                    } else if (event.key === "ArrowUp") {
                        event.preventDefault();
                        setActiveIndex({
                            "CommandPalette.useEffect.handleKey": (index)=>Math.max(index - 1, 0)
                        }["CommandPalette.useEffect.handleKey"]);
                    } else if (event.key === "Enter") {
                        event.preventDefault();
                        const selected = results[activeIndex];
                        if (selected) {
                            handleSelect(selected);
                        }
                    }
                }
            }["CommandPalette.useEffect.handleKey"];
            window.addEventListener("keydown", handleKey);
            return ({
                "CommandPalette.useEffect": ()=>window.removeEventListener("keydown", handleKey)
            })["CommandPalette.useEffect"];
        }
    }["CommandPalette.useEffect"], [
        open,
        results,
        activeIndex,
        onClose,
        router
    ]);
    const handleSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CommandPalette.useCallback[handleSelect]": (item)=>{
            onClose();
            router.push(item.href);
        }
    }["CommandPalette.useCallback[handleSelect]"], [
        onClose,
        router
    ]);
    if (!enabled) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "fixed inset-0 z-[80] flex items-start justify-center bg-black/60 px-4 py-20 backdrop-blur-xl",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].motion.duration.page / 1000,
                ease: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].motion.easing.entrance
            },
            onMouseDown: (event)=>{
                if (event.target === event.currentTarget) {
                    onClose();
                }
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "w-full max-w-2xl overflow-hidden rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)] shadow-[var(--shadow-depth)]",
                initial: {
                    scale: 0.96,
                    opacity: 0,
                    y: 24
                },
                animate: {
                    scale: 1,
                    opacity: 1,
                    y: 0
                },
                exit: {
                    scale: 0.98,
                    opacity: 0,
                    y: 16,
                    transition: {
                        duration: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].motion.duration.fast / 1000,
                        ease: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].motion.easing.exit
                    }
                },
                transition: {
                    duration: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].motion.duration.page / 1000,
                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].motion.easing.entrance
                },
                role: "dialog",
                "aria-modal": "true",
                "aria-label": "Command palette",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 border-b border-[var(--border-soft)]/60 px-6 py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-muted)]/80",
                                children: "Search"
                            }, void 0, false, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                                lineNumber: 166,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: inputRef,
                                "data-command-input": true,
                                value: query,
                                onChange: (event)=>{
                                    setQuery(event.target.value);
                                    setActiveIndex(0);
                                },
                                placeholder: "Jump to news, models, tracks, or benchmarks",
                                className: "flex-1 bg-transparent text-base text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:outline-none"
                            }, void 0, false, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                                lineNumber: 167,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                className: "rounded-md border border-[var(--border-soft)]/60 bg-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.3em] text-[var(--color-foreground)]/70",
                                children: "Esc"
                            }, void 0, false, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                                lineNumber: 178,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                        lineNumber: 165,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-h-[420px] overflow-y-auto px-2 py-4",
                        children: results.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "flex flex-col gap-2",
                            children: results.map((item, index)=>{
                                const isActive = index === activeIndex;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>handleSelect(item),
                                        className: "flex w-full flex-col gap-1 rounded-[var(--radius-xl)] border px-4 py-3 text-left transition ".concat(isActive ? "border-[var(--color-accent-secondary)]/60 bg-[var(--color-accent-secondary)]/15 text-[var(--color-foreground)]" : "border-[var(--border-soft)]/50 text-[var(--color-foreground)]/90 hover:border-[var(--color-accent-secondary)]/40 hover:bg-[var(--color-surface)]/70"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between gap-3 text-xs uppercase tracking-[0.32em] text-[var(--color-muted)]/80",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: item.categoryLabel
                                                    }, void 0, false, {
                                                        fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 29
                                                    }, this),
                                                    item.meta ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: item.meta
                                                    }, void 0, false, {
                                                        fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                                                        lineNumber: 201,
                                                        columnNumber: 42
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                                                lineNumber: 199,
                                                columnNumber: 27
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-semibold text-[var(--color-foreground)]",
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                                                lineNumber: 203,
                                                columnNumber: 27
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm leading-relaxed text-[var(--color-muted)]",
                                                children: item.description
                                            }, void 0, false, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                                                lineNumber: 204,
                                                columnNumber: 27
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                                        lineNumber: 190,
                                        columnNumber: 25
                                    }, this)
                                }, "".concat(item.categoryLabel, "-").concat(item.id), false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                                    lineNumber: 189,
                                    columnNumber: 23
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                            lineNumber: 185,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-[var(--radius-xl)] border border-dashed border-[var(--border-soft)]/50 bg-[var(--color-surface)]/50 px-4 py-10 text-center text-sm text-[var(--color-muted)]",
                            children: "No matches yet. Try searching for a model, benchmark, or track."
                        }, void 0, false, {
                            fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                            lineNumber: 211,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                        lineNumber: 183,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                lineNumber: 152,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
            lineNumber: 137,
            columnNumber: 9
        }, this) : null
    }, void 0, false, {
        fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
_s(CommandPalette, "odurEm8lIR/N4Cbf7+05AQU2t8w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$context$2f$feature$2d$flags$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFeatureFlag"],
        __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CommandPalette;
var _c;
__turbopack_context__.k.register(_c, "CommandPalette");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/AI HELPER/apps/web/src/lib/navigation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "primaryNav",
    ()=>primaryNav
]);
const primaryNav = [
    {
        id: "news",
        label: "News",
        href: "/news"
    },
    {
        id: "comparisons",
        label: "Comparisons",
        href: "/comparisons"
    },
    {
        id: "learn",
        label: "Learn",
        href: "/learn"
    },
    {
        id: "models",
        label: "Models",
        href: "/models"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/AI HELPER/apps/web/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/AI HELPER/apps/web/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 gap-2 px-6 has-[>svg]:px-6",
            sm: "h-8 rounded-md gap-2 px-4 has-[>svg]:px-4",
            lg: "h-12 rounded-md px-8 has-[>svg]:px-8",
            icon: "size-10",
            "icon-sm": "size-8",
            "icon-lg": "size-12"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button(param) {
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/AI HELPER/apps/web/src/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/AI HELPER/apps/web/src/components/search/global-search.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlobalSearch",
    ()=>GlobalSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/lib/design/tokens.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function GlobalSearch() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isFocused, setIsFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        role: "search",
        className: "group relative flex w-full items-center gap-3 rounded-full border border-[var(--border-soft)]/60 bg-[var(--color-surface-glass)] px-6 py-2 backdrop-blur-xl",
        onSubmit: (event)=>{
            event.preventDefault();
            if (query.trim().length > 0) {
                router.push("/search?q=".concat(encodeURIComponent(query.trim())));
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                "aria-hidden": true,
                animate: {
                    scale: isFocused ? 1.06 : 1,
                    opacity: isFocused ? 1 : 0.85
                },
                className: "relative inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-soft)]/60 bg-gradient-to-br from-[var(--color-accent-primary)]/30 via-[var(--color-accent-secondary)]/20 to-transparent",
                transition: {
                    type: "spring",
                    stiffness: 320,
                    damping: 28
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    animate: {
                        opacity: isFocused ? 1 : 0.7,
                        scale: isFocused ? 1 : 0.92
                    },
                    className: "h-1.5 w-1.5 rounded-full bg-[var(--color-accent-secondary)]"
                }, void 0, false, {
                    fileName: "[project]/AI HELPER/apps/web/src/components/search/global-search.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/AI HELPER/apps/web/src/components/search/global-search.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                "aria-label": "Search across news, comparisons, learning tracks, and models",
                "data-hotkey-target": "global-search",
                className: "flex-1 bg-transparent text-[15px] text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:outline-none",
                placeholder: "Search the AI landscape",
                value: query,
                onBlur: ()=>setIsFocused(false),
                onChange: (event)=>setQuery(event.target.value),
                onFocus: ()=>setIsFocused(true)
            }, void 0, false, {
                fileName: "[project]/AI HELPER/apps/web/src/components/search/global-search.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                className: "hidden rounded-md border border-[var(--border-soft)]/60 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.32em] text-[var(--color-foreground)]/70 sm:block",
                children: "Enter"
            }, void 0, false, {
                fileName: "[project]/AI HELPER/apps/web/src/components/search/global-search.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 rounded-full border border-transparent",
                animate: {
                    borderColor: isFocused ? "rgba(237, 181, 95, 0.28)" : "rgba(237, 181, 95, 0)"
                },
                transition: {
                    duration: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].motion.duration.hover / 1000,
                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designTokens"].motion.easing.standard
                }
            }, void 0, false, {
                fileName: "[project]/AI HELPER/apps/web/src/components/search/global-search.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/AI HELPER/apps/web/src/components/search/global-search.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(GlobalSearch, "cLTXix2rBlcLAYJW8PbQ4J/I1Kg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = GlobalSearch;
var _c;
__turbopack_context__.k.register(_c, "GlobalSearch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/AI HELPER/apps/web/src/components/navigation/primary-nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrimaryNav",
    ()=>PrimaryNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PrimaryNav(param) {
    let { items } = param;
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": "Primary",
        className: "w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "relative flex items-center gap-1 overflow-x-auto rounded-full border border-[var(--border-soft)]/70 bg-[var(--color-surface-glass)] px-1 py-1 backdrop-blur-xl",
            children: items.map((item)=>{
                const isActive = pathname === item.href || pathname.startsWith("".concat(item.href, "/"));
                const linkClasses = "relative flex min-w-[120px] items-center justify-center px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] transition-colors duration-200";
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "relative",
                    children: [
                        isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                            layoutId: "nav-active-pill",
                            className: "absolute inset-0 rounded-full border border-[var(--border-soft)]/40 bg-[radial-gradient(125%_160%_at_0%_0%,rgba(37,99,235,0.45),transparent_70%),_radial-gradient(125%_160%_at_100%_0%,rgba(6,182,212,0.35),transparent_70%),_var(--color-surface-elevated)] shadow-[var(--shadow-soft)]",
                            transition: {
                                type: "spring",
                                stiffness: 320,
                                damping: 32,
                                mass: 0.7
                            }
                        }, void 0, false, {
                            fileName: "[project]/AI HELPER/apps/web/src/components/navigation/primary-nav.tsx",
                            lineNumber: 27,
                            columnNumber: 17
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            "aria-current": isActive ? "page" : undefined,
                            className: "".concat(linkClasses, " ").concat(isActive ? "text-[var(--primary-foreground)]" : "text-[var(--color-muted)]/75 hover:text-[var(--color-foreground)]"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative z-10",
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/navigation/primary-nav.tsx",
                                    lineNumber: 42,
                                    columnNumber: 17
                                }, this),
                                isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    layoutId: "nav-active-underline",
                                    className: "absolute -bottom-1 left-1/2 h-1 w-12 -translate-x-1/2 rounded-full bg-[var(--accent-secondary)]",
                                    transition: {
                                        type: "spring",
                                        stiffness: 340,
                                        damping: 30,
                                        mass: 0.8
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/navigation/primary-nav.tsx",
                                    lineNumber: 44,
                                    columnNumber: 19
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AI HELPER/apps/web/src/components/navigation/primary-nav.tsx",
                            lineNumber: 33,
                            columnNumber: 15
                        }, this)
                    ]
                }, item.id, true, {
                    fileName: "[project]/AI HELPER/apps/web/src/components/navigation/primary-nav.tsx",
                    lineNumber: 25,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/AI HELPER/apps/web/src/components/navigation/primary-nav.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/AI HELPER/apps/web/src/components/navigation/primary-nav.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(PrimaryNav, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = PrimaryNav;
var _c;
__turbopack_context__.k.register(_c, "PrimaryNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/AI HELPER/apps/web/src/components/theme/theme-controller.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeHydrator",
    ()=>ThemeHydrator,
    "useThemeMode",
    ()=>useThemeMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const STORAGE_KEY = "ai-helper-theme";
function applyTheme(mode) {
    document.body.dataset.theme = mode;
}
function useThemeMode() {
    _s();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dark");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useThemeMode.useEffect": ()=>{
            const stored = window.localStorage.getItem(STORAGE_KEY);
            if (stored === "light" || stored === "dark") {
                setMode(stored);
                applyTheme(stored);
            } else {
                applyTheme("dark");
            }
        }
    }["useThemeMode.useEffect"], []);
    const toggle = ()=>{
        setMode((prev)=>{
            const next = prev === "dark" ? "light" : "dark";
            window.localStorage.setItem(STORAGE_KEY, next);
            applyTheme(next);
            return next;
        });
    };
    return {
        mode,
        toggle
    };
}
_s(useThemeMode, "ExtUHwukjIlzMvp2ji3ICzoFf5g=");
function ThemeHydrator() {
    _s1();
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeHydrator.useEffect": ()=>{
            const stored = window.localStorage.getItem(STORAGE_KEY);
            if (stored === "light" || stored === "dark") {
                applyTheme(stored);
            } else {
                applyTheme("dark");
            }
            setReady(true);
        }
    }["ThemeHydrator.useEffect"], []);
    if (!ready) {
        return null;
    }
    return null;
}
_s1(ThemeHydrator, "KuazqYXqOk+6VRk8yHVvoClyoeE=");
_c = ThemeHydrator;
var _c;
__turbopack_context__.k.register(_c, "ThemeHydrator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/AI HELPER/apps/web/src/components/theme/theme-toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$theme$2f$theme$2d$controller$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/components/theme/theme-controller.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ThemeToggle() {
    _s();
    const { mode, toggle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$theme$2f$theme$2d$controller$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeMode"])();
    const isDark = mode === "dark";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: toggle,
        "aria-label": "Switch to ".concat(isDark ? "light" : "dark", " mode"),
        className: "relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-[var(--border-soft)]/70 bg-[var(--color-surface-glass)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.36em] text-[var(--color-muted)]/80 transition-colors duration-200 hover:text-[var(--color-foreground)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "relative inline-flex h-6 w-12 items-center justify-between rounded-full border border-[var(--border-soft)]/70 px-1 text-[var(--color-muted)]",
                style: {
                    background: "var(--color-surface-elevated)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex h-4 w-4 items-center justify-center text-[0px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            "aria-hidden": "true",
                            className: "h-3.5 w-3.5 text-[var(--accent-secondary)] transition-opacity duration-200 ".concat(isDark ? "opacity-20" : "opacity-90"),
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12 4.25a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1Zm0 12a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1Zm7.75-4.75a1 1 0 0 1-1 1h-1.5a1 1 0 1 1 0-2h1.5a1 1 0 0 1 1 1ZM7.75 12a1 1 0 0 1-1 1h-1.5a1 1 0 0 1 0-2h1.5a1 1 0 0 1 1 1ZM18.01 6.98a1 1 0 0 1 0 1.41l-1.06 1.06a1 1 0 1 1-1.41-1.41l1.06-1.06a1 1 0 0 1 1.41 0ZM8.46 16.53a1 1 0 0 1 0 1.41l-1.06 1.06a1 1 0 0 1-1.41-1.41l1.06-1.06a1 1 0 0 1 1.41 0ZM6.98 5.99a1 1 0 0 1 1.41 0l1.06 1.06A1 1 0 1 1 8.05 8.46L6.99 7.4a1 1 0 0 1 0-1.41ZM17.53 15.54a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 1 1-1.41 1.41l-1.06-1.06a1 1 0 0 1 0-1.41ZM12 7.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Z"
                            }, void 0, false, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/theme/theme-toggle.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/AI HELPER/apps/web/src/components/theme/theme-toggle.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/theme/theme-toggle.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex h-4 w-4 items-center justify-center text-[0px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            "aria-hidden": "true",
                            className: "h-3.5 w-3.5 text-[var(--accent-primary)] transition-opacity duration-200 ".concat(isDark ? "opacity-90" : "opacity-20"),
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M21 12.79A9 9 0 0 1 11.21 3a7 7 0 1 0 9.79 9.79Z"
                            }, void 0, false, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/theme/theme-toggle.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/AI HELPER/apps/web/src/components/theme/theme-toggle.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/theme/theme-toggle.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        "aria-hidden": true,
                        animate: {
                            x: isDark ? 0 : 20
                        },
                        initial: false,
                        transition: {
                            type: "spring",
                            stiffness: 360,
                            damping: 28
                        },
                        className: "absolute left-1 top-1 h-4 w-4 rounded-full bg-gradient-to-br from-[var(--color-accent-secondary)] to-[var(--color-accent-primary)] shadow-[var(--shadow-glow)]"
                    }, void 0, false, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/theme/theme-toggle.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/AI HELPER/apps/web/src/components/theme/theme-toggle.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                initial: {
                    opacity: 0,
                    y: 4
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: -4
                },
                transition: {
                    duration: 0.22
                },
                className: "min-w-[3.5rem] text-center",
                children: isDark ? "Dusk" : "Dawn"
            }, mode, false, {
                fileName: "[project]/AI HELPER/apps/web/src/components/theme/theme-toggle.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/AI HELPER/apps/web/src/components/theme/theme-toggle.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "Z5v4GgRuOZzxjZ20/AtrQ38IzN8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$theme$2f$theme$2d$controller$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeMode"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteHeader",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/context/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/lib/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$search$2f$global$2d$search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/components/search/global-search.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$navigation$2f$primary$2d$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/components/navigation/primary-nav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$theme$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/components/theme/theme-toggle.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function SiteHeader() {
    _s();
    const { user, logout, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 border-b border-[var(--border-soft)]/80 bg-[var(--color-background)]/65 backdrop-blur-2xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex w-full max-w-[1200px] flex-col gap-6 px-6 py-6 sm:px-12 md:px-16 lg:px-16 xl:px-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "group inline-flex flex-col gap-1 text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-semibold uppercase tracking-[0.52em] text-[var(--color-muted)]/80",
                                    children: "Editorial AI Briefing"
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-3xl font-semibold tracking-tight text-[var(--color-foreground)] transition-colors group-hover:text-[var(--color-accent-primary)] sm:text-[2.3rem]",
                                    children: "AI Helper"
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden items-center gap-6 md:flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$navigation$2f$primary$2d$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrimaryNav"], {
                                    items: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primaryNav"]
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        asChild: true,
                                                        variant: "outline",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/dashboard",
                                                            children: "Dashboard"
                                                        }, void 0, false, {
                                                            fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                                                            lineNumber: 32,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                                                        lineNumber: 31,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        onClick: logout,
                                                        variant: "ghost",
                                                        children: "Logout"
                                                    }, void 0, false, {
                                                        fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                                                        lineNumber: 34,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        asChild: true,
                                                        variant: "ghost",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/auth/login",
                                                            children: "Login"
                                                        }, void 0, false, {
                                                            fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                                                            lineNumber: 41,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                                                        lineNumber: 40,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/auth/register",
                                                            children: "Register"
                                                        }, void 0, false, {
                                                            fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                                                            lineNumber: 44,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                                                        lineNumber: 43,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$theme$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                            fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$navigation$2f$primary$2d$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrimaryNav"], {
                                items: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primaryNav"]
                            }, void 0, false, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full md:max-w-xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$search$2f$global$2d$search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlobalSearch"], {}, void 0, false, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-end gap-2 md:hidden",
                            children: [
                                !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                asChild: true,
                                                variant: "outline",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/dashboard",
                                                    children: "Dashboard"
                                                }, void 0, false, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                                                lineNumber: 67,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                onClick: logout,
                                                variant: "ghost",
                                                children: "Logout"
                                            }, void 0, false, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                                                lineNumber: 70,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                asChild: true,
                                                variant: "ghost",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/auth/login",
                                                    children: "Login"
                                                }, void 0, false, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                                                lineNumber: 76,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/auth/register",
                                                    children: "Register"
                                                }, void 0, false, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                                                lineNumber: 79,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$theme$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(SiteHeader, "pjUA15LeJUJbuOuvczYVwz0hge0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = SiteHeader;
var _c;
__turbopack_context__.k.register(_c, "SiteHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/AI HELPER/apps/web/src/components/layout/site-shell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteShell",
    ()=>SiteShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$context$2f$feature$2d$flags$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/context/feature-flags.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$navigation$2f$command$2d$palette$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$layout$2f$site$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function SiteShell(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$context$2f$feature$2d$flags$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeatureFlagProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShellFrame, {
            children: children
        }, void 0, false, {
            fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-shell.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-shell.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = SiteShell;
function ShellFrame(param) {
    let { children } = param;
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const commandPaletteEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$context$2f$feature$2d$flags$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFeatureFlag"])("commandPalette");
    const [isCommandOpen, setCommandOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const focusGlobalSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ShellFrame.useCallback[focusGlobalSearch]": ()=>{
            const input = document.querySelector('[data-hotkey-target="global-search"]');
            if (input) {
                input.focus();
                input.select();
            }
        }
    }["ShellFrame.useCallback[focusGlobalSearch]"], []);
    const handleDirectionalNavigation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ShellFrame.useCallback[handleDirectionalNavigation]": (key)=>{
            const direction = key === "ArrowRight" ? 1 : -1;
            if (pathname.startsWith("/news")) {
                const cards = Array.from(document.querySelectorAll('[data-hotkey-target="news-card"]'));
                if (!cards.length) return;
                const activeIndex = cards.findIndex({
                    "ShellFrame.useCallback[handleDirectionalNavigation].activeIndex": (card)=>card === document.activeElement || card.contains(document.activeElement)
                }["ShellFrame.useCallback[handleDirectionalNavigation].activeIndex"]);
                const nextIndex = activeIndex === -1 ? direction === 1 ? 0 : cards.length - 1 : (activeIndex + direction + cards.length) % cards.length;
                const target = cards[nextIndex];
                target.focus();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "center"
                });
                return;
            }
            if (pathname.startsWith("/comparisons")) {
                const options = Array.from(document.querySelectorAll('[data-hotkey-target="comparison-model-option"]')).filter({
                    "ShellFrame.useCallback[handleDirectionalNavigation].options": (element)=>!element.hasAttribute("disabled")
                }["ShellFrame.useCallback[handleDirectionalNavigation].options"]);
                if (!options.length) return;
                const activeIndex = options.findIndex({
                    "ShellFrame.useCallback[handleDirectionalNavigation].activeIndex": (option)=>option === document.activeElement
                }["ShellFrame.useCallback[handleDirectionalNavigation].activeIndex"]);
                const nextIndex = activeIndex === -1 ? direction === 1 ? 0 : options.length - 1 : (activeIndex + direction + options.length) % options.length;
                const target = options[nextIndex];
                target.focus();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "center"
                });
            }
        }
    }["ShellFrame.useCallback[handleDirectionalNavigation]"], [
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShellFrame.useEffect": ()=>{
            const handleKey = {
                "ShellFrame.useEffect.handleKey": (event)=>{
                    if (event.defaultPrevented) return;
                    const target = event.target;
                    const isTypingContext = target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.getAttribute("contenteditable") === "true");
                    if (event.key === "/" && !event.metaKey && !event.ctrlKey && !isTypingContext) {
                        event.preventDefault();
                        focusGlobalSearch();
                        return;
                    }
                    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
                        if (commandPaletteEnabled) {
                            event.preventDefault();
                            setCommandOpen(true);
                        }
                        return;
                    }
                    if ((event.key === "ArrowRight" || event.key === "ArrowLeft") && !event.metaKey && !event.ctrlKey) {
                        if (!isTypingContext) {
                            handleDirectionalNavigation(event.key);
                        }
                        return;
                    }
                    if (event.key === "Escape" && isCommandOpen) {
                        setCommandOpen(false);
                    }
                }
            }["ShellFrame.useEffect.handleKey"];
            window.addEventListener("keydown", handleKey);
            return ({
                "ShellFrame.useEffect": ()=>window.removeEventListener("keydown", handleKey)
            })["ShellFrame.useEffect"];
        }
    }["ShellFrame.useEffect"], [
        commandPaletteEnabled,
        focusGlobalSearch,
        handleDirectionalNavigation,
        isCommandOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen overflow-hidden bg-[var(--color-background)] text-[var(--color-foreground)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -left-1/3 top-[-18%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle_at_center,_var(--glow-primary),_transparent_72%)] blur-[150px]"
                    }, void 0, false, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-shell.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -right-1/4 top-[-6%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,_var(--glow-secondary),_transparent_70%)] blur-[140px]"
                    }, void 0, false, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-shell.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 top-[48%] h-[28rem] w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_var(--glow-tertiary),_transparent_70%)] blur-[160px]"
                    }, void 0, false, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-shell.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--bg-gradient-base),_transparent_80%)]"
                    }, void 0, false, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-shell.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-shell.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex min-h-screen flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$layout$2f$site$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiteHeader"], {}, void 0, false, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-shell.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto w-full max-w-[1200px] px-6 pb-24 pt-20 sm:px-10 md:px-14 lg:px-16 xl:px-20",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-shell.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-shell.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "relative border-t border-[var(--border-soft)]/60 bg-[var(--color-background)]/80 py-16 text-sm text-[var(--color-muted)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 md:px-14 lg:px-16 xl:px-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-medium uppercase tracking-[0.28em] text-[var(--color-muted)]/80",
                                    children: "AI Helper Intelligence Almanac"
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-shell.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "max-w-xl text-left text-xs leading-relaxed text-[var(--color-muted)]/80 sm:text-right",
                                    children: "Crafted to the Agents playbook - curated intelligence, benchmarks, and learning pipelines with automation-readable foundations."
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-shell.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-shell.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-shell.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-shell.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            commandPaletteEnabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$navigation$2f$command$2d$palette$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandPalette"], {
                open: isCommandOpen,
                onClose: ()=>setCommandOpen(false)
            }, void 0, false, {
                fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-shell.tsx",
                lineNumber: 140,
                columnNumber: 32
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-shell.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_s(ShellFrame, "dURyh2sUs42sRHmmIPjk6tSJO2U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$context$2f$feature$2d$flags$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFeatureFlag"]
    ];
});
_c1 = ShellFrame;
var _c, _c1;
__turbopack_context__.k.register(_c, "SiteShell");
__turbopack_context__.k.register(_c1, "ShellFrame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=AI%20HELPER_apps_web_src_257ab33e._.js.map