module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/AI HELPER/apps/web/src/lib/auth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
async function assertOk(response, fallbackMessage) {
    if (response.ok) {
        return response;
    }
    // Attempt to surface API-provided detail before using the fallback copy.
    try {
        const payload = await response.json();
        const detail = typeof payload === "object" && payload !== null && "detail" in payload ? String(payload.detail) : null;
        throw new Error(detail ?? fallbackMessage);
    } catch  {
        throw new Error(fallbackMessage);
    }
}
async function login(email, password) {
    const response = await fetch(`${API_URL}/auth/token`, {
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
    const response = await fetch(`${API_URL}/users/register`, {
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
    const response = await fetch(`${API_URL}/users/me`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const safeResponse = await assertOk(response, "Failed to fetch user profile");
    const payload = await safeResponse.json();
    return payload;
}
}),
"[project]/AI HELPER/apps/web/src/context/auth-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/lib/auth.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
// Create the context
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const initializeAuth = async ()=>{
            const storedToken = localStorage.getItem('authToken');
            if (storedToken) {
                try {
                    const profile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMe"])(storedToken);
                    setUser(profile);
                    setToken(storedToken);
                } catch  {
                    // Token is invalid, clear it
                    localStorage.removeItem('authToken');
                    router.push('/auth/login');
                }
            }
            setIsLoading(false);
        };
        initializeAuth();
    }, [
        router
    ]);
    const login = async (email, password)=>{
        setIsLoading(true);
        setError(null);
        try {
            const { accessToken } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["login"])(email, password);
            localStorage.setItem('authToken', accessToken);
            const profile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMe"])(accessToken);
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["register"])(email, password);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/AI HELPER/apps/web/src/context/auth-context.tsx",
        lineNumber: 93,
        columnNumber: 10
    }, this);
}
function useAuth() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
}),
"[project]/AI HELPER/apps/web/src/context/feature-flags.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeatureFlagProvider",
    ()=>FeatureFlagProvider,
    "useFeatureFlag",
    ()=>useFeatureFlag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const defaultFlags = {
    commandPalette: true,
    optimisticSearch: true
};
const FeatureFlagContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(defaultFlags);
function FeatureFlagProvider({ children, overrides }) {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            ...defaultFlags,
            ...overrides ?? {}
        }), [
        overrides
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureFlagContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/AI HELPER/apps/web/src/context/feature-flags.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
function useFeatureFlag(key) {
    const flags = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(FeatureFlagContext);
    return flags[key];
}
}),
"[project]/AI HELPER/apps/web/src/data/comparison-config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "comparisonConfig",
    ()=>comparisonConfig,
    "modelProfiles",
    ()=>modelProfiles
]);
const comparisonConfig = {
    defaultModelIds: [
        "gpt-5",
        "claude-4-2-sonnet",
        "gemini-2-5-pro",
        "grok-4"
    ],
    benchmarks: [
        {
            id: "mmlu",
            name: "MMLU",
            description: "Massive multitask reasoning across 57 academic disciplines.",
            higherIsBetter: true,
            unit: "%"
        },
        {
            id: "gsm8k",
            name: "GSM8K",
            description: "Grade-school maths word problems requiring multi-step reasoning.",
            higherIsBetter: true,
            unit: "%"
        },
        {
            id: "humaneval",
            name: "HumanEval",
            description: "Functional correctness on Python programming tasks.",
            higherIsBetter: true,
            unit: "%"
        },
        {
            id: "hellaswag",
            name: "HellaSwag",
            description: "Commonsense inference benchmark with adversarial multiple choice.",
            higherIsBetter: true,
            unit: "%"
        },
        {
            id: "mtbench",
            name: "MT-Bench",
            description: "Multi-turn instruction following benchmark scored by expert judges.",
            higherIsBetter: true,
            unit: "score"
        }
    ]
};
const modelProfiles = [
    {
        id: "gpt-5",
        name: "GPT-5",
        provider: "OpenAI",
        releaseDate: "2025-09-12",
        contextWindow: 1000000,
        license: "proprietary",
        availability: "api",
        benchmarks: [
            {
                benchmarkId: "mmlu",
                score: 92.3,
                normalizedScore: 0.992,
                source: "https://openai.com/blog/introducing-gpt-5"
            },
            {
                benchmarkId: "gsm8k",
                score: 97.4,
                normalizedScore: 0.996,
                source: "https://openai.com/blog/introducing-gpt-5"
            },
            {
                benchmarkId: "humaneval",
                score: 93.2,
                normalizedScore: 0.978,
                source: "https://platform.openai.com/docs/evals"
            },
            {
                benchmarkId: "hellaswag",
                score: 97.8,
                normalizedScore: 0.982,
                source: "https://openai.com/research"
            },
            {
                benchmarkId: "mtbench",
                score: 9.5,
                normalizedScore: 0.95,
                source: "https://lmsys.org/blog/2025-llm-leaderboard/"
            }
        ],
        pricing: [
            {
                tier: "input",
                pricePerMillion: 7.5,
                currency: "USD"
            },
            {
                tier: "output",
                pricePerMillion: 22.5,
                currency: "USD"
            },
            {
                tier: "requests",
                pricePerMillion: 1.2,
                currency: "USD"
            }
        ],
        context: {
            maxTokens: 1000000,
            modalities: [
                "text",
                "image",
                "audio",
                "video",
                "tools"
            ],
            notes: "Realtime agent-native flagship with programmable memory slots and background task orchestration."
        },
        website: "https://openai.com/blog/introducing-gpt-5",
        summary: "OpenAI's 2025 flagship unifying symbolic reasoning, live multimodal IO, and the new Agent API.",
        sources: [
            "https://openai.com/blog/introducing-gpt-5",
            "https://platform.openai.com/docs/models#gpt-5"
        ]
    },
    {
        id: "claude-4-2-sonnet",
        name: "Claude 4.2 Sonnet",
        provider: "Anthropic",
        releaseDate: "2025-08-21",
        contextWindow: 320000,
        license: "proprietary",
        availability: "api",
        benchmarks: [
            {
                benchmarkId: "mmlu",
                score: 91.2,
                normalizedScore: 0.983,
                source: "https://www.anthropic.com/claude"
            },
            {
                benchmarkId: "gsm8k",
                score: 96.1,
                normalizedScore: 0.985,
                source: "https://www.anthropic.com/claude"
            },
            {
                benchmarkId: "humaneval",
                score: 92.4,
                normalizedScore: 0.97,
                source: "https://www.anthropic.com/claude"
            },
            {
                benchmarkId: "hellaswag",
                score: 97.0,
                normalizedScore: 0.975,
                source: "https://www.anthropic.com/claude"
            },
            {
                benchmarkId: "mtbench",
                score: 9.2,
                normalizedScore: 0.92,
                source: "https://lmsys.org/blog/2025-llm-leaderboard/"
            }
        ],
        pricing: [
            {
                tier: "input",
                pricePerMillion: 4.0,
                currency: "USD"
            },
            {
                tier: "output",
                pricePerMillion: 18.0,
                currency: "USD"
            }
        ],
        context: {
            maxTokens: 320000,
            modalities: [
                "text",
                "image"
            ],
            notes: "Policy-trace safety controls, long-context project memory, and orchestration hooks for enterprise workflows."
        },
        website: "https://www.anthropic.com/news/claude-4-2-sonnet",
        summary: "Anthropic's latest Sonnet balances reasoning depth with auditable compliance traces and tool transparency.",
        sources: [
            "https://www.anthropic.com/news/claude-4-2-sonnet",
            "https://www.anthropic.com/claude"
        ]
    },
    {
        id: "gemini-2-5-pro",
        name: "Gemini 2.5 Pro",
        provider: "Google DeepMind",
        releaseDate: "2025-07-30",
        contextWindow: 1000000,
        license: "proprietary",
        availability: "api",
        benchmarks: [
            {
                benchmarkId: "mmlu",
                score: 90.1,
                normalizedScore: 0.973,
                source: "https://deepmind.google/announcements/gemini-2-5-pro"
            },
            {
                benchmarkId: "gsm8k",
                score: 95.5,
                normalizedScore: 0.977,
                source: "https://deepmind.google/announcements/gemini-2-5-pro"
            },
            {
                benchmarkId: "humaneval",
                score: 90.3,
                normalizedScore: 0.955,
                source: "https://ai.google.dev/gemini-api/docs/benchmarks"
            },
            {
                benchmarkId: "hellaswag",
                score: 96.4,
                normalizedScore: 0.969,
                source: "https://ai.google.dev/gemini-api/docs/benchmarks"
            },
            {
                benchmarkId: "mtbench",
                score: 8.8,
                normalizedScore: 0.88,
                source: "https://lmsys.org/blog/2025-llm-leaderboard/"
            }
        ],
        pricing: [
            {
                tier: "input",
                pricePerMillion: 6.8,
                currency: "USD"
            },
            {
                tier: "output",
                pricePerMillion: 20.4,
                currency: "USD"
            }
        ],
        context: {
            maxTokens: 1000000,
            modalities: [
                "text",
                "image",
                "audio",
                "video"
            ],
            notes: "Streaming video reasoning, Workspace integration, and native multi-agent planning primitives."
        },
        website: "https://deepmind.google/announcements/gemini-2-5-pro",
        summary: "Google's multimodal flagship with live video understanding and direct hooks into Workspace automations.",
        sources: [
            "https://deepmind.google/announcements/gemini-2-5-pro",
            "https://ai.google.dev/gemini-api/docs/models"
        ]
    },
    {
        id: "grok-4",
        name: "Grok 4",
        provider: "xAI",
        releaseDate: "2025-06-26",
        contextWindow: 256000,
        license: "proprietary",
        availability: "api",
        benchmarks: [
            {
                benchmarkId: "mmlu",
                score: 88.4,
                normalizedScore: 0.954,
                source: "https://x.ai/blog/grok-4"
            },
            {
                benchmarkId: "gsm8k",
                score: 93.6,
                normalizedScore: 0.966,
                source: "https://x.ai/blog/grok-4"
            },
            {
                benchmarkId: "humaneval",
                score: 88.9,
                normalizedScore: 0.942,
                source: "https://x.ai/blog/grok-4"
            },
            {
                benchmarkId: "hellaswag",
                score: 95.1,
                normalizedScore: 0.955,
                source: "https://x.ai/blog/grok-4"
            },
            {
                benchmarkId: "mtbench",
                score: 8.4,
                normalizedScore: 0.84,
                source: "https://lmsys.org/blog/2025-llm-leaderboard/"
            }
        ],
        pricing: [
            {
                tier: "input",
                pricePerMillion: 5.2,
                currency: "USD"
            },
            {
                tier: "output",
                pricePerMillion: 16.5,
                currency: "USD"
            }
        ],
        context: {
            maxTokens: 256000,
            modalities: [
                "text",
                "image"
            ],
            notes: "Mixture-of-experts architecture with open alignment data and evidence citations."
        },
        website: "https://x.ai/blog/grok-4",
        summary: "xAI's Grok 4 boosts transparency with released alignment datasets and grounded citation chains.",
        sources: [
            "https://x.ai/blog/grok-4",
            "https://docs.x.ai/grok"
        ]
    },
    {
        id: "perplexity-sonar-ultra",
        name: "Perplexity Sonar Ultra",
        provider: "Perplexity",
        releaseDate: "2025-05-28",
        contextWindow: 160000,
        license: "proprietary",
        availability: "api",
        benchmarks: [
            {
                benchmarkId: "mmlu",
                score: 85.9,
                normalizedScore: 0.93,
                source: "https://www.perplexity.ai/blog/sonar-ultra"
            },
            {
                benchmarkId: "gsm8k",
                score: 90.4,
                normalizedScore: 0.94,
                source: "https://www.perplexity.ai/blog/sonar-ultra"
            },
            {
                benchmarkId: "humaneval",
                score: 82.5,
                normalizedScore: 0.88,
                source: "https://www.perplexity.ai/blog/sonar-ultra"
            },
            {
                benchmarkId: "hellaswag",
                score: 93.3,
                normalizedScore: 0.93,
                source: "https://www.perplexity.ai/blog/sonar-ultra"
            },
            {
                benchmarkId: "mtbench",
                score: 8.1,
                normalizedScore: 0.81,
                source: "https://www.perplexity.ai/blog/sonar-ultra"
            }
        ],
        pricing: [
            {
                tier: "requests",
                pricePerMillion: 0.9,
                currency: "USD"
            }
        ],
        context: {
            maxTokens: 160000,
            modalities: [
                "text",
                "web"
            ],
            notes: "Hybrid search + generation model with autonomous browsing agents and citation graph outputs."
        },
        website: "https://www.perplexity.ai/blog/sonar-ultra",
        summary: "Perplexity's research assistant model combining retrieval, browsing agents, and verified citations.",
        sources: [
            "https://www.perplexity.ai/blog/sonar-ultra",
            "https://docs.perplexity.ai"
        ]
    },
    {
        id: "llama-4-120b",
        name: "Llama 4 120B Instruct",
        provider: "Meta",
        releaseDate: "2025-04-18",
        contextWindow: 128000,
        license: "open-source",
        availability: "self-host",
        benchmarks: [
            {
                benchmarkId: "mmlu",
                score: 86.7,
                normalizedScore: 0.935,
                source: "https://ai.meta.com/blog/llama-4/"
            },
            {
                benchmarkId: "gsm8k",
                score: 91.8,
                normalizedScore: 0.948,
                source: "https://ai.meta.com/blog/llama-4/"
            },
            {
                benchmarkId: "humaneval",
                score: 84.6,
                normalizedScore: 0.896,
                source: "https://ai.meta.com/blog/llama-4/"
            },
            {
                benchmarkId: "hellaswag",
                score: 93.7,
                normalizedScore: 0.935,
                source: "https://ai.meta.com/blog/llama-4/"
            },
            {
                benchmarkId: "mtbench",
                score: 7.8,
                normalizedScore: 0.78,
                source: "https://lmsys.org/blog/2025-llm-leaderboard/"
            }
        ],
        pricing: [],
        context: {
            maxTokens: 128000,
            modalities: [
                "text",
                "code"
            ],
            notes: "Open-weight flagship with streaming adapters for low-latency inference on commodity GPUs."
        },
        website: "https://ai.meta.com/blog/llama-4/",
        summary: "Meta's fourth generation open model with Responsible Use licensing and optional guard rails.",
        sources: [
            "https://ai.meta.com/blog/llama-4/",
            "https://github.com/meta-llama"
        ]
    },
    {
        id: "mistral-next-12x24b",
        name: "Mistral Next 12×24B",
        provider: "Mistral AI",
        releaseDate: "2025-04-02",
        contextWindow: 192000,
        license: "hybrid",
        availability: "hybrid",
        benchmarks: [
            {
                benchmarkId: "mmlu",
                score: 85.1,
                normalizedScore: 0.922,
                source: "https://mistral.ai/news/mistral-next-12x24b"
            },
            {
                benchmarkId: "gsm8k",
                score: 90.1,
                normalizedScore: 0.939,
                source: "https://mistral.ai/news/mistral-next-12x24b"
            },
            {
                benchmarkId: "humaneval",
                score: 82.0,
                normalizedScore: 0.885,
                source: "https://mistral.ai/news/mistral-next-12x24b"
            },
            {
                benchmarkId: "hellaswag",
                score: 92.8,
                normalizedScore: 0.928,
                source: "https://mistral.ai/news/mistral-next-12x24b"
            },
            {
                benchmarkId: "mtbench",
                score: 7.6,
                normalizedScore: 0.76,
                source: "https://lmsys.org/blog/2025-llm-leaderboard/"
            }
        ],
        pricing: [
            {
                tier: "input",
                pricePerMillion: 4.2,
                currency: "USD"
            },
            {
                tier: "output",
                pricePerMillion: 12.6,
                currency: "USD"
            }
        ],
        context: {
            maxTokens: 192000,
            modalities: [
                "text"
            ],
            notes: "MoE architecture tuned for retrieval-augmented workflows with configurable Retrieval Profiles."
        },
        website: "https://mistral.ai/news/mistral-next-12x24b",
        summary: "Mistral's retrieval-native mixture-of-experts release balancing latency and accuracy for enterprise RAG.",
        sources: [
            "https://mistral.ai/news/mistral-next-12x24b",
            "https://docs.mistral.ai"
        ]
    },
    {
        id: "phi-4",
        name: "Phi-4",
        provider: "Microsoft",
        releaseDate: "2025-05-09",
        contextWindow: 128000,
        license: "responsible-ai",
        availability: "hybrid",
        benchmarks: [
            {
                benchmarkId: "mmlu",
                score: 82.4,
                normalizedScore: 0.9,
                source: "https://blogs.microsoft.com/ai/introducing-phi-4"
            },
            {
                benchmarkId: "gsm8k",
                score: 88.6,
                normalizedScore: 0.925,
                source: "https://blogs.microsoft.com/ai/introducing-phi-4"
            },
            {
                benchmarkId: "humaneval",
                score: 78.9,
                normalizedScore: 0.86,
                source: "https://blogs.microsoft.com/ai/introducing-phi-4"
            },
            {
                benchmarkId: "hellaswag",
                score: 90.5,
                normalizedScore: 0.905,
                source: "https://blogs.microsoft.com/ai/introducing-phi-4"
            },
            {
                benchmarkId: "mtbench",
                score: 7.4,
                normalizedScore: 0.74,
                source: "https://blogs.microsoft.com/ai/introducing-phi-4"
            }
        ],
        pricing: [
            {
                tier: "input",
                pricePerMillion: 1.8,
                currency: "USD"
            },
            {
                tier: "output",
                pricePerMillion: 5.4,
                currency: "USD"
            }
        ],
        context: {
            maxTokens: 128000,
            modalities: [
                "text",
                "sensor"
            ],
            notes: "Edge-focused efficient transformer powering Copilot+ PCs, Azure Edge, and industrial inspection workloads."
        },
        website: "https://blogs.microsoft.com/ai/introducing-phi-4",
        summary: "Microsoft's compact-yet-powerful foundation model designed for on-device copilots and safety-critical edge deployments.",
        sources: [
            "https://blogs.microsoft.com/ai/introducing-phi-4",
            "https://learn.microsoft.com/azure/ai-studio/"
        ]
    },
    {
        id: "dbrx-2",
        name: "DBRX 2 Instruct",
        provider: "Databricks",
        releaseDate: "2025-03-11",
        contextWindow: 64000,
        license: "open-model",
        availability: "self-host",
        benchmarks: [
            {
                benchmarkId: "mmlu",
                score: 83.4,
                normalizedScore: 0.908,
                source: "https://www.databricks.com/blog/dbrx-2"
            },
            {
                benchmarkId: "gsm8k",
                score: 89.9,
                normalizedScore: 0.936,
                source: "https://www.databricks.com/blog/dbrx-2"
            },
            {
                benchmarkId: "humaneval",
                score: 81.1,
                normalizedScore: 0.872,
                source: "https://www.databricks.com/blog/dbrx-2"
            },
            {
                benchmarkId: "hellaswag",
                score: 91.7,
                normalizedScore: 0.917,
                source: "https://www.databricks.com/blog/dbrx-2"
            },
            {
                benchmarkId: "mtbench",
                score: 7.7,
                normalizedScore: 0.77,
                source: "https://www.databricks.com/blog/dbrx-2"
            }
        ],
        pricing: [
            {
                tier: "requests",
                pricePerMillion: 0.65,
                currency: "USD"
            }
        ],
        context: {
            maxTokens: 64000,
            modalities: [
                "text"
            ],
            notes: "MoE model optimised for Lakehouse retrieval and governed analytics workloads."
        },
        website: "https://www.databricks.com/blog/dbrx-2",
        summary: "Databricks' second generation open model tuned for SQL copilots, analytics assistants, and governed retrieval.",
        sources: [
            "https://www.databricks.com/blog/dbrx-2",
            "https://huggingface.co/databricks/dbrx-2-instruct"
        ]
    },
    {
        id: "mixtral-8x22b",
        name: "Mixtral 8×22B",
        provider: "Mistral AI",
        releaseDate: "2024-01-15",
        contextWindow: 65536,
        license: "open-source",
        availability: "self-host",
        benchmarks: [
            {
                benchmarkId: "mmlu",
                score: 81.6,
                normalizedScore: 0.886,
                source: "https://mistral.ai/news/mixtral-8x22b/"
            },
            {
                benchmarkId: "gsm8k",
                score: 80.6,
                normalizedScore: 0.84,
                source: "https://mistral.ai/news/mixtral-8x22b/"
            },
            {
                benchmarkId: "humaneval",
                score: 73.5,
                normalizedScore: 0.79,
                source: "https://mistral.ai/news/mixtral-8x22b/"
            },
            {
                benchmarkId: "hellaswag",
                score: 87.2,
                normalizedScore: 0.872,
                source: "https://mistral.ai/news/mixtral-8x22b/"
            },
            {
                benchmarkId: "mtbench",
                score: 7.0,
                normalizedScore: 0.7,
                source: "https://www.lightning.ai/pages/community/article/mt-bench-leaderboard/"
            }
        ],
        pricing: [],
        context: {
            maxTokens: 65536,
            modalities: [
                "text"
            ],
            notes: "Open-weight MoE classic that remains a popular baseline for self-hosted deployments."
        },
        website: "https://mistral.ai/news/mixtral-8x22b/",
        summary: "The original Mixtral release remains a strong open baseline for fine-tuning and governed inference.",
        sources: [
            "https://mistral.ai/news/mixtral-8x22b/",
            "https://huggingface.co/mistralai/Mixtral-8x22B-Instruct-v0.1"
        ]
    }
];
}),
"[project]/AI HELPER/apps/web/src/data/learn-tracks.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/AI HELPER/apps/web/src/data/models.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "modelDirectory",
    ()=>modelDirectory
]);
const modelDirectory = [
    {
        id: "gpt-5",
        name: "GPT-5",
        provider: "OpenAI",
        releaseDate: "2025-09-12",
        contextWindow: 1000000,
        pricing: {
            currency: "USD",
            input: 7.5,
            output: 22.5,
            flatRate: 1.2
        },
        licensing: "proprietary",
        deployment: "api",
        website: "https://openai.com/blog/introducing-gpt-5",
        tags: [
            "multimodal",
            "flagship",
            "agents"
        ],
        sourceUrls: [
            "https://openai.com/blog/introducing-gpt-5",
            "https://platform.openai.com/docs/models#gpt-5"
        ]
    },
    {
        id: "gpt-5-distill",
        name: "GPT-5 Distill",
        provider: "OpenAI",
        releaseDate: "2025-09-12",
        contextWindow: 512000,
        pricing: {
            currency: "USD",
            input: 2.4,
            output: 7.2
        },
        licensing: "proprietary",
        deployment: "api",
        website: "https://platform.openai.com/docs/models#gpt-5-distill",
        tags: [
            "cost-efficient",
            "multimodal",
            "realtime"
        ],
        sourceUrls: [
            "https://platform.openai.com/docs/models#gpt-5-distill"
        ]
    },
    {
        id: "claude-4-2-sonnet",
        name: "Claude 4.2 Sonnet",
        provider: "Anthropic",
        releaseDate: "2025-08-21",
        contextWindow: 320000,
        pricing: {
            currency: "USD",
            input: 4,
            output: 18
        },
        licensing: "proprietary",
        deployment: "api",
        website: "https://www.anthropic.com/news/claude-4-2-sonnet",
        tags: [
            "enterprise",
            "compliance",
            "long-context"
        ],
        sourceUrls: [
            "https://www.anthropic.com/news/claude-4-2-sonnet",
            "https://www.anthropic.com/claude"
        ]
    },
    {
        id: "gemini-2-5-pro",
        name: "Gemini 2.5 Pro",
        provider: "Google DeepMind",
        releaseDate: "2025-07-30",
        contextWindow: 1000000,
        pricing: {
            currency: "USD",
            input: 6.8,
            output: 20.4
        },
        licensing: "proprietary",
        deployment: "api",
        website: "https://deepmind.google/announcements/gemini-2-5-pro",
        tags: [
            "multimodal",
            "workspace",
            "video"
        ],
        sourceUrls: [
            "https://deepmind.google/announcements/gemini-2-5-pro",
            "https://ai.google.dev/gemini-api/docs/models"
        ]
    },
    {
        id: "grok-4",
        name: "Grok 4",
        provider: "xAI",
        releaseDate: "2025-06-26",
        contextWindow: 256000,
        pricing: {
            currency: "USD",
            input: 5.2,
            output: 16.5
        },
        licensing: "proprietary",
        deployment: "api",
        website: "https://x.ai/blog/grok-4",
        tags: [
            "moe",
            "transparency",
            "multilingual"
        ],
        sourceUrls: [
            "https://x.ai/blog/grok-4",
            "https://docs.x.ai/grok"
        ]
    },
    {
        id: "perplexity-sonar-ultra",
        name: "Perplexity Sonar Ultra",
        provider: "Perplexity",
        releaseDate: "2025-05-28",
        contextWindow: 160000,
        pricing: {
            currency: "USD",
            flatRate: 0.9
        },
        licensing: "proprietary",
        deployment: "api",
        website: "https://www.perplexity.ai/blog/sonar-ultra",
        tags: [
            "research",
            "agents",
            "retrieval"
        ],
        sourceUrls: [
            "https://www.perplexity.ai/blog/sonar-ultra",
            "https://docs.perplexity.ai"
        ]
    },
    {
        id: "llama-4-120b",
        name: "Llama 4 120B Instruct",
        provider: "Meta",
        releaseDate: "2025-04-18",
        contextWindow: 128000,
        pricing: {
            currency: "USD",
            flatRate: 0
        },
        licensing: "open-source",
        deployment: "self-host",
        website: "https://ai.meta.com/blog/llama-4/",
        tags: [
            "open-weight",
            "instruct",
            "meta"
        ],
        sourceUrls: [
            "https://ai.meta.com/blog/llama-4/",
            "https://github.com/meta-llama"
        ]
    },
    {
        id: "mistral-next-12x24b",
        name: "Mistral Next 12×24B",
        provider: "Mistral AI",
        releaseDate: "2025-04-02",
        contextWindow: 192000,
        pricing: {
            currency: "USD",
            input: 4.2,
            output: 12.6
        },
        licensing: "mixed",
        deployment: "hybrid",
        website: "https://mistral.ai/news/mistral-next-12x24b",
        tags: [
            "moe",
            "rag",
            "europe"
        ],
        sourceUrls: [
            "https://mistral.ai/news/mistral-next-12x24b",
            "https://docs.mistral.ai"
        ]
    },
    {
        id: "phi-4",
        name: "Phi-4",
        provider: "Microsoft",
        releaseDate: "2025-05-09",
        contextWindow: 128000,
        pricing: {
            currency: "USD",
            input: 1.8,
            output: 5.4
        },
        licensing: "mixed",
        deployment: "hybrid",
        website: "https://blogs.microsoft.com/ai/introducing-phi-4",
        tags: [
            "edge",
            "copilot",
            "efficient"
        ],
        sourceUrls: [
            "https://blogs.microsoft.com/ai/introducing-phi-4",
            "https://learn.microsoft.com/azure/ai-studio/"
        ]
    },
    {
        id: "dbrx-2",
        name: "DBRX 2 Instruct",
        provider: "Databricks",
        releaseDate: "2025-03-11",
        contextWindow: 64000,
        pricing: {
            currency: "USD",
            flatRate: 0.65
        },
        licensing: "mixed",
        deployment: "hybrid",
        website: "https://www.databricks.com/blog/dbrx-2",
        tags: [
            "moe",
            "lakehouse",
            "analytics"
        ],
        sourceUrls: [
            "https://www.databricks.com/blog/dbrx-2",
            "https://huggingface.co/databricks/dbrx-2-instruct"
        ]
    },
    {
        id: "mixtral-8x22b",
        name: "Mixtral 8×22B",
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
            "baseline"
        ],
        sourceUrls: [
            "https://mistral.ai/news/mixtral-8x22b/",
            "https://huggingface.co/mistralai/Mixtral-8x22B-Instruct-v0.1"
        ]
    }
];
}),
"[project]/AI HELPER/apps/web/src/data/news.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/AI HELPER/apps/web/src/lib/format.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
        return `+${formatted}`;
    }
    if (value < 0) {
        return `-${formatted}`;
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
function formatDecimal(value, fractionDigits = 1) {
    return getDecimalFormatter(fractionDigits).format(value);
}
function formatPercent(value, fractionDigits = 1) {
    return `${formatDecimal(value, fractionDigits)}%`;
}
const currencyFormatters = new Map();
function getCurrencyFormatter(currency, minimumFractionDigits, maximumFractionDigits) {
    const key = `${currency}-${minimumFractionDigits}-${maximumFractionDigits}`;
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
function formatCurrency(value, currency = "USD", options = {}) {
    const minimumFractionDigits = options.minimumFractionDigits ?? (value < 10 && value % 1 !== 0 ? 2 : 0);
    const maximumFractionDigits = options.maximumFractionDigits ?? minimumFractionDigits;
    return getCurrencyFormatter(currency, minimumFractionDigits, maximumFractionDigits).format(value);
}
}),
"[project]/AI HELPER/apps/web/src/lib/search/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "searchContent",
    ()=>searchContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$comparison$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/data/comparison-config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$learn$2d$tracks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/data/learn-tracks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/data/models.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$news$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/data/news.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/lib/format.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const SOURCE_LOOKUP = Object.fromEntries(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$news$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newsSources"].map((source)=>[
        source.id,
        source
    ]));
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$news$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["placeholderNews"].map((article)=>{
        const contentText = article.content ? article.content.join(" ") : "";
        const score = computeScore(tokens, article.title, 5) + computeScore(tokens, article.summary, 3) + computeScore(tokens, article.tags.join(" "), 2) + computeScore(tokens, contentText, 2);
        if (score <= 0) return null;
        const source = SOURCE_LOOKUP[article.sourceId];
        const metaParts = [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatFullDate"])(article.publishedAt),
            source?.name ?? article.sourceId
        ].filter(Boolean);
        return {
            result: {
                id: article.id,
                title: article.title,
                description: article.summary,
                href: `/news/${article.slug}`,
                score,
                badge: source?.name ?? article.sourceId,
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
    const benchmarkMatches = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$comparison$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["comparisonConfig"].benchmarks.map((benchmark)=>{
        const score = computeScore(tokens, benchmark.name, 4) + computeScore(tokens, benchmark.description, 2);
        if (score <= 0) return null;
        return {
            id: `benchmark-${benchmark.id}`,
            title: benchmark.name,
            description: benchmark.description,
            href: "/comparisons",
            score,
            badge: benchmark.unit ? `${benchmark.unit}` : "Benchmark"
        };
    }).filter(Boolean);
    const modelMatches = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$comparison$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modelProfiles"].map((model)=>{
        const score = computeScore(tokens, model.name, 5) + computeScore(tokens, model.provider, 3) + computeScore(tokens, model.context.notes ?? "", 2) + computeScore(tokens, model.benchmarks.map((entry)=>entry.benchmarkId).join(" "), 1);
        if (score <= 0) return null;
        return {
            id: `comparison-model-${model.id}`,
            title: model.name,
            description: `${model.provider} | Context ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatNumber"])(model.contextWindow)} tokens`,
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
    const matches = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$learn$2d$tracks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["learnTracks"].map((track)=>{
        const moduleTitles = track.modules.map((module)=>module.title).join(" ");
        const moduleObjectives = track.modules.map((module)=>module.objective).join(" ");
        const score = computeScore(tokens, track.title, 5) + computeScore(tokens, track.outcome, 3) + computeScore(tokens, moduleTitles, 2) + computeScore(tokens, moduleObjectives, 1);
        if (score <= 0) return null;
        return {
            id: `learn-${track.id}`,
            title: track.title,
            description: track.outcome,
            href: `/learn/${track.id}`,
            score,
            badge: track.level.toUpperCase()
        };
    }).filter(Boolean);
    return matches.sort((a, b)=>b.score - a.score);
}
function searchModels(tokens) {
    if (!tokens.length) return [];
    const matches = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modelDirectory"].map((model)=>{
        const score = computeScore(tokens, model.name, 5) + computeScore(tokens, model.provider, 3) + computeScore(tokens, model.tags.join(" "), 2);
        if (score <= 0) return null;
        return {
            id: `model-${model.id}`,
            title: model.name,
            description: `${model.provider} | ${model.licensing} | ${model.deployment}`,
            href: "/models",
            score,
            badge: model.provider
        };
    }).filter(Boolean);
    return matches.sort((a, b)=>b.score - a.score);
}
function searchContent(query, limitPerGroup = 50) {
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
}),
"[project]/AI HELPER/apps/web/src/lib/design/tokens.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommandPalette",
    ()=>CommandPalette
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$search$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/lib/search/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$context$2f$feature$2d$flags$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/context/feature-flags.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/lib/design/tokens.ts [app-ssr] (ecmascript)");
"use client";
;
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
function CommandPalette({ open, onClose }) {
    const enabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$context$2f$feature$2d$flags$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFeatureFlag"])("commandPalette");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const results = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!enabled) {
            return [];
        }
        if (!query.trim()) {
            return defaultCommands;
        }
        const search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$search$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["searchContent"])(query, 6);
        return search.groups.flatMap((group)=>group.results.slice(0, 5).map((result)=>({
                    ...result,
                    categoryLabel: group.label
                })));
    }, [
        enabled,
        query
    ]);
    const handleSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((item)=>{
        onClose();
        router.push(item.href);
    }, [
        onClose,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (open) {
            setQuery("");
            setActiveIndex(0);
            const id = window.setTimeout(()=>{
                inputRef.current?.focus();
            }, 10);
            return ()=>window.clearTimeout(id);
        }
        return undefined;
    }, [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open) return undefined;
        const handleKey = (event)=>{
            if (event.key === "Escape") {
                event.preventDefault();
                onClose();
            }
            if (!results.length) {
                return;
            }
            if (event.key === "ArrowDown") {
                event.preventDefault();
                setActiveIndex((index)=>Math.min(index + 1, results.length - 1));
            } else if (event.key === "ArrowUp") {
                event.preventDefault();
                setActiveIndex((index)=>Math.max(index - 1, 0));
            } else if (event.key === "Enter") {
                event.preventDefault();
                const selected = results[activeIndex];
                if (selected) {
                    handleSelect(selected);
                }
            }
        };
        window.addEventListener("keydown", handleKey);
        return ()=>window.removeEventListener("keydown", handleKey);
    }, [
        open,
        results,
        activeIndex,
        onClose,
        router,
        handleSelect
    ]);
    if (!enabled) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                duration: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["designTokens"].motion.duration.page / 1000,
                ease: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["designTokens"].motion.easing.entrance
            },
            onMouseDown: (event)=>{
                if (event.target === event.currentTarget) {
                    onClose();
                }
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "relative w-full max-w-2xl overflow-hidden rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/50 bg-[var(--color-surface)]/85 shadow-[var(--shadow-depth)] backdrop-blur-3xl",
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
                        duration: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["designTokens"].motion.duration.fast / 1000,
                        ease: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["designTokens"].motion.easing.exit
                    }
                },
                transition: {
                    duration: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["designTokens"].motion.duration.page / 1000,
                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["designTokens"].motion.easing.entrance
                },
                role: "dialog",
                "aria-modal": "true",
                "aria-label": "Command palette",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "pointer-events-none absolute inset-0 opacity-80",
                        style: {
                            background: "radial-gradient(100% 140% at 10% -10%, rgba(37,99,235,0.32), transparent 60%), radial-gradient(120% 120% at 90% 0%, rgba(6,182,212,0.28), transparent 58%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                        lineNumber: 165,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "pointer-events-none absolute inset-0 opacity-55 mix-blend-screen",
                        style: {
                            background: "linear-gradient(135deg, rgba(255,255,255,0.22), rgba(15,23,42,0))"
                        }
                    }, void 0, false, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                        lineNumber: 172,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "pointer-events-none absolute inset-0 opacity-35",
                        style: {
                            background: "radial-gradient(120% 120% at 50% 105%, rgba(8,13,26,0.55), transparent 70%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                        lineNumber: 178,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 border-b border-white/10 px-6 py-4 backdrop-blur-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-muted)]/80",
                                        children: "Search"
                                    }, void 0, false, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                                        lineNumber: 187,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                        lineNumber: 188,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                        className: "rounded-md border border-white/20 bg-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.3em] text-[var(--color-foreground)]/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]",
                                        children: "Esc"
                                    }, void 0, false, {
                                        fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                                        lineNumber: 199,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                                lineNumber: 186,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-h-[420px] overflow-y-auto px-2 py-4",
                                children: results.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "flex flex-col gap-2",
                                    children: results.map((item, index)=>{
                                        const isActive = index === activeIndex;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>handleSelect(item),
                                                className: `group relative flex w-full flex-col gap-1 overflow-hidden rounded-[var(--radius-xl)] border px-4 py-3 text-left transition ${isActive ? "border-white/35 text-[var(--color-foreground)] shadow-[var(--shadow-soft)]" : "border-[var(--border-soft)]/50 text-[var(--color-foreground)]/90 hover:border-white/25 hover:text-[var(--color-foreground)]"}`,
                                                style: {
                                                    background: isActive ? "linear-gradient(135deg, rgba(255,255,255,0.16), rgba(37,99,235,0.18))" : "linear-gradient(135deg, rgba(15,23,42,0.6), rgba(15,23,42,0.4))"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-65 group-focus-visible:opacity-75",
                                                        style: {
                                                            background: "radial-gradient(120% 140% at 12% 8%, rgba(255,255,255,0.2), transparent 65%)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-60 group-focus-visible:opacity-70",
                                                        style: {
                                                            background: "radial-gradient(140% 160% at 88% 96%, rgba(37,99,235,0.3), transparent 72%)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative flex items-center justify-between gap-3 text-xs uppercase tracking-[0.32em] text-[var(--color-muted)]/80",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: item.categoryLabel
                                                            }, void 0, false, {
                                                                fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                                                                lineNumber: 240,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]",
                                                                children: item.badge ?? "Shortcut"
                                                            }, void 0, false, {
                                                                fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                                                                lineNumber: 241,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative z-10",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "block text-sm font-semibold text-[var(--color-foreground)]",
                                                                children: item.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                                                                lineNumber: 246,
                                                                columnNumber: 31
                                                            }, this),
                                                            item.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "block text-xs text-[var(--color-muted)]/85",
                                                                children: item.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                                                                lineNumber: 248,
                                                                columnNumber: 33
                                                            }, this) : null,
                                                            item.meta ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-1 block text-[11px] text-[var(--color-muted)]/60",
                                                                children: item.meta
                                                            }, void 0, false, {
                                                                fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                                                                lineNumber: 251,
                                                                columnNumber: 33
                                                            }, this) : null
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                                                lineNumber: 211,
                                                columnNumber: 27
                                            }, this)
                                        }, `${item.categoryLabel}-${item.id}`, false, {
                                            fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                                            lineNumber: 210,
                                            columnNumber: 25
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                                    lineNumber: 206,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[var(--radius-xl)] border border-dashed border-[var(--border-soft)]/50 bg-[var(--color-surface)]/50 px-4 py-10 text-center text-sm text-[var(--color-muted)]",
                                    children: "No matches yet. Try searching for a model, benchmark, or track."
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                                    lineNumber: 260,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                                lineNumber: 204,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx",
                        lineNumber: 185,
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
}),
"[project]/AI HELPER/apps/web/src/lib/navigation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/AI HELPER/apps/web/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/AI HELPER/apps/web/src/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
;
}),
"[project]/AI HELPER/apps/web/src/components/search/global-search.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlobalSearch",
    ()=>GlobalSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/lib/design/tokens.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function GlobalSearch() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isFocused, setIsFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        role: "search",
        className: "group relative flex w-full items-center gap-3 rounded-full border border-[var(--border-soft)]/60 bg-[var(--color-surface-glass)] px-6 py-2 backdrop-blur-xl",
        onSubmit: (event)=>{
            event.preventDefault();
            if (query.trim().length > 0) {
                router.push(`/search?q=${encodeURIComponent(query.trim())}`);
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                className: "hidden rounded-md border border-[var(--border-soft)]/60 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.32em] text-[var(--color-foreground)]/70 sm:block",
                children: "Enter"
            }, void 0, false, {
                fileName: "[project]/AI HELPER/apps/web/src/components/search/global-search.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 rounded-full border border-transparent",
                animate: {
                    borderColor: isFocused ? "rgba(237, 181, 95, 0.28)" : "rgba(237, 181, 95, 0)"
                },
                transition: {
                    duration: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["designTokens"].motion.duration.hover / 1000,
                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$design$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["designTokens"].motion.easing.standard
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
}),
"[project]/AI HELPER/apps/web/src/components/navigation/primary-nav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrimaryNav",
    ()=>PrimaryNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function PrimaryNav({ items }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": "Primary",
        className: "w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "relative flex items-center gap-1 overflow-x-auto rounded-full border border-[var(--border-soft)]/70 bg-[var(--color-surface-glass)] px-1 py-1 backdrop-blur-xl",
            children: items.map((item)=>{
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                const linkClasses = "relative flex min-w-[120px] items-center justify-center px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] transition-colors duration-200";
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "relative",
                    children: [
                        isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            "aria-current": isActive ? "page" : undefined,
                            className: `${linkClasses} ${isActive ? "text-[var(--primary-foreground)]" : "text-[var(--color-muted)]/75 hover:text-[var(--color-foreground)]"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative z-10",
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/navigation/primary-nav.tsx",
                                    lineNumber: 42,
                                    columnNumber: 17
                                }, this),
                                isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
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
}),
"[project]/AI HELPER/apps/web/src/components/theme/theme-controller.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeHydrator",
    ()=>ThemeHydrator,
    "useThemeMode",
    ()=>useThemeMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
const STORAGE_KEY = "ai-helper-theme";
function applyTheme(mode) {
    document.body.dataset.theme = mode;
}
function useThemeMode() {
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("dark");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored === "light" || stored === "dark") {
            setMode(stored);
            applyTheme(stored);
        } else {
            applyTheme("dark");
        }
    }, []);
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
function ThemeHydrator() {
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored === "light" || stored === "dark") {
            applyTheme(stored);
        } else {
            applyTheme("dark");
        }
        setReady(true);
    }, []);
    if (!ready) {
        return null;
    }
    return null;
}
}),
"[project]/AI HELPER/apps/web/src/components/theme/theme-toggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$theme$2f$theme$2d$controller$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/components/theme/theme-controller.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function ThemeToggle() {
    const { mode, toggle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$theme$2f$theme$2d$controller$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useThemeMode"])();
    const isDark = mode === "dark";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: toggle,
        "aria-label": `Switch to ${isDark ? "light" : "dark"} mode`,
        className: "relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-[var(--border-soft)]/70 bg-[var(--color-surface-glass)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.36em] text-[var(--color-muted)]/80 transition-colors duration-200 hover:text-[var(--color-foreground)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "relative inline-flex h-6 w-12 items-center justify-between rounded-full border border-[var(--border-soft)]/70 px-1 text-[var(--color-muted)]",
                style: {
                    background: "var(--color-surface-elevated)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex h-4 w-4 items-center justify-center text-[0px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            "aria-hidden": "true",
                            className: `h-3.5 w-3.5 text-[var(--accent-secondary)] transition-opacity duration-200 ${isDark ? "opacity-20" : "opacity-90"}`,
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex h-4 w-4 items-center justify-center text-[0px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            "aria-hidden": "true",
                            className: `h-3.5 w-3.5 text-[var(--accent-primary)] transition-opacity duration-200 ${isDark ? "opacity-90" : "opacity-20"}`,
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
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
}),
"[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteHeader",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/context/auth-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/lib/navigation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$search$2f$global$2d$search$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/components/search/global-search.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$navigation$2f$primary$2d$nav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/components/navigation/primary-nav.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$theme$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/components/theme/theme-toggle.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function SiteHeader() {
    const { user, logout, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 border-b border-[var(--border-soft)]/80 bg-[var(--color-background)]/65 backdrop-blur-2xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex w-full max-w-[1200px] flex-col gap-6 px-6 py-6 sm:px-12 md:px-16 lg:px-16 xl:px-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "group inline-flex flex-col gap-1 text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-semibold uppercase tracking-[0.52em] text-[var(--color-muted)]/80",
                                    children: "Editorial AI Briefing"
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden items-center gap-6 md:flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$navigation$2f$primary$2d$nav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrimaryNav"], {
                                    items: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryNav"]
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                        asChild: true,
                                                        variant: "outline",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                        onClick: logout,
                                                        variant: "ghost",
                                                        children: "Logout"
                                                    }, void 0, false, {
                                                        fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                                                        lineNumber: 34,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                        asChild: true,
                                                        variant: "ghost",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$theme$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$navigation$2f$primary$2d$nav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrimaryNav"], {
                                items: __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryNav"]
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full md:max-w-xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$search$2f$global$2d$search$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlobalSearch"], {}, void 0, false, {
                                fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-end gap-2 md:hidden",
                            children: [
                                !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                asChild: true,
                                                variant: "outline",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                onClick: logout,
                                                variant: "ghost",
                                                children: "Logout"
                                            }, void 0, false, {
                                                fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx",
                                                lineNumber: 70,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                asChild: true,
                                                variant: "ghost",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$theme$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
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
}),
"[project]/AI HELPER/apps/web/src/components/layout/site-shell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteShell",
    ()=>SiteShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$context$2f$feature$2d$flags$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/context/feature-flags.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$navigation$2f$command$2d$palette$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/components/navigation/command-palette.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$layout$2f$site$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/components/layout/site-header.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function SiteShell({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$context$2f$feature$2d$flags$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeatureFlagProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ShellFrame, {
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
function ShellFrame({ children }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const commandPaletteEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$context$2f$feature$2d$flags$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFeatureFlag"])("commandPalette");
    const [isCommandOpen, setCommandOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const focusGlobalSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const input = document.querySelector('[data-hotkey-target="global-search"]');
        if (input) {
            input.focus();
            input.select();
        }
    }, []);
    const handleDirectionalNavigation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((key)=>{
        const direction = key === "ArrowRight" ? 1 : -1;
        if (pathname.startsWith("/news")) {
            const cards = Array.from(document.querySelectorAll('[data-hotkey-target="news-card"]'));
            if (!cards.length) return;
            const activeIndex = cards.findIndex((card)=>card === document.activeElement || card.contains(document.activeElement));
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
            const options = Array.from(document.querySelectorAll('[data-hotkey-target="comparison-model-option"]')).filter((element)=>!element.hasAttribute("disabled"));
            if (!options.length) return;
            const activeIndex = options.findIndex((option)=>option === document.activeElement);
            const nextIndex = activeIndex === -1 ? direction === 1 ? 0 : options.length - 1 : (activeIndex + direction + options.length) % options.length;
            const target = options[nextIndex];
            target.focus();
            target.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
            });
        }
    }, [
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKey = (event)=>{
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
        };
        window.addEventListener("keydown", handleKey);
        return ()=>window.removeEventListener("keydown", handleKey);
    }, [
        commandPaletteEnabled,
        focusGlobalSearch,
        handleDirectionalNavigation,
        isCommandOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen overflow-hidden bg-[var(--color-background)] text-[var(--color-foreground)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -left-1/3 top-[-18%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle_at_center,_var(--glow-primary),_transparent_72%)] blur-[150px]"
                    }, void 0, false, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-shell.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -right-1/4 top-[-6%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,_var(--glow-secondary),_transparent_70%)] blur-[140px]"
                    }, void 0, false, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-shell.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 top-[48%] h-[28rem] w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_var(--glow-tertiary),_transparent_70%)] blur-[160px]"
                    }, void 0, false, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-shell.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex min-h-screen flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$layout$2f$site$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SiteHeader"], {}, void 0, false, {
                        fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-shell.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "relative border-t border-[var(--border-soft)]/60 bg-[var(--color-background)]/80 py-16 text-sm text-[var(--color-muted)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 md:px-14 lg:px-16 xl:px-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-medium uppercase tracking-[0.28em] text-[var(--color-muted)]/80",
                                    children: "AI Helper Intelligence Almanac"
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/components/layout/site-shell.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            commandPaletteEnabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$components$2f$navigation$2f$command$2d$palette$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandPalette"], {
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
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3b0d1c36._.js.map