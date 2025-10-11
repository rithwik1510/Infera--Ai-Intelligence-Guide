module.exports = [
"[project]/AI HELPER/apps/web/.next-internal/server/app/search/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/AI HELPER/apps/web/src/app/favicon.ico.mjs { IMAGE => \"[project]/AI HELPER/apps/web/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/AI HELPER/apps/web/src/app/favicon.ico.mjs { IMAGE => \"[project]/AI HELPER/apps/web/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/AI HELPER/apps/web/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/AI HELPER/apps/web/src/app/layout.tsx [app-rsc] (ecmascript)"));
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
"[project]/AI HELPER/apps/web/src/lib/format.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/AI HELPER/apps/web/src/lib/search/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "searchContent",
    ()=>searchContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$comparison$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/data/comparison-config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$learn$2d$tracks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/data/learn-tracks.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/data/models.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$news$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/data/news.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/lib/format.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const SOURCE_LOOKUP = Object.fromEntries(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$news$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["newsSources"].map((source)=>[
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$news$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["placeholderNews"].map((article)=>{
        const contentText = article.content ? article.content.join(" ") : "";
        const score = computeScore(tokens, article.title, 5) + computeScore(tokens, article.summary, 3) + computeScore(tokens, article.tags.join(" "), 2) + computeScore(tokens, contentText, 2);
        if (score <= 0) return null;
        const source = SOURCE_LOOKUP[article.sourceId];
        const metaParts = [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatFullDate"])(article.publishedAt),
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
    const benchmarkMatches = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$comparison$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["comparisonConfig"].benchmarks.map((benchmark)=>{
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
    const modelMatches = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$comparison$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["modelProfiles"].map((model)=>{
        const score = computeScore(tokens, model.name, 5) + computeScore(tokens, model.provider, 3) + computeScore(tokens, model.context.notes ?? "", 2) + computeScore(tokens, model.benchmarks.map((entry)=>entry.benchmarkId).join(" "), 1);
        if (score <= 0) return null;
        return {
            id: `comparison-model-${model.id}`,
            title: model.name,
            description: `${model.provider} | Context ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatNumber"])(model.contextWindow)} tokens`,
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
    const matches = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$learn$2d$tracks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["learnTracks"].map((track)=>{
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
    const matches = __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$data$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["modelDirectory"].map((model)=>{
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
"[project]/AI HELPER/apps/web/src/app/search/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$search$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AI HELPER/apps/web/src/lib/search/index.ts [app-rsc] (ecmascript)");
;
;
;
const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";
async function fetchSearch(query) {
    try {
        const url = new URL("/search", API_BASE);
        url.searchParams.set("q", query);
        const response = await fetch(url.toString(), {
            next: {
                revalidate: 30
            }
        });
        if (!response.ok) {
            throw new Error(`Search request failed: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.warn("Falling back to local search", error);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$apps$2f$web$2f$src$2f$lib$2f$search$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["searchContent"])(query);
    }
}
const GROUP_DESCRIPTIONS = {
    news: "Latest launches, research notes, and product updates from top labs.",
    comparisons: "Benchmarks and model profiles to help you choose the right LLM.",
    learn: "Curated tracks with hands-on modules and capstone projects.",
    models: "Directory of flagship models with pricing and deployment details."
};
async function SearchPage({ searchParams }) {
    const query = searchParams.q?.trim() ?? "";
    const hasQuery = query.length > 0;
    if (!hasQuery) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "flex flex-col gap-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "flex flex-col gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-semibold text-[var(--color-foreground)]",
                            children: "Search the AI Helper hub"
                        }, void 0, false, {
                            fileName: "[project]/AI HELPER/apps/web/src/app/search/page.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "max-w-2xl text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base",
                            children: "Start typing in the header search to explore news, benchmark comparisons, learning tracks, and the model directory."
                        }, void 0, false, {
                            fileName: "[project]/AI HELPER/apps/web/src/app/search/page.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/AI HELPER/apps/web/src/app/search/page.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/45 p-8 text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base shadow-[var(--shadow-soft)]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: 'Try queries like "RAG", "Claude pricing", or "open-source models" to jump into curated content instantly.'
                    }, void 0, false, {
                        fileName: "[project]/AI HELPER/apps/web/src/app/search/page.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/AI HELPER/apps/web/src/app/search/page.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/AI HELPER/apps/web/src/app/search/page.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this);
    }
    const results = await fetchSearch(query);
    const total = results.total;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex flex-col gap-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs uppercase tracking-[0.4em] text-[var(--color-muted)]",
                        children: "Search"
                    }, void 0, false, {
                        fileName: "[project]/AI HELPER/apps/web/src/app/search/page.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-semibold text-[var(--color-foreground)]",
                        children: [
                            "Results for “",
                            query,
                            "”"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/AI HELPER/apps/web/src/app/search/page.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-2xl text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base",
                        children: total > 0 ? `${total} matches across news, comparisons, learning tracks, and models.` : "No direct matches yet. Check the tabs or refine your query."
                    }, void 0, false, {
                        fileName: "[project]/AI HELPER/apps/web/src/app/search/page.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/AI HELPER/apps/web/src/app/search/page.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-8",
                children: results.groups.map((group)=>{
                    const hasResults = group.results.length > 0;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "flex flex-col gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-semibold text-[var(--color-foreground)]",
                                                children: [
                                                    group.label,
                                                    hasResults ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-3 text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base",
                                                        children: group.results.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/AI HELPER/apps/web/src/app/search/page.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 23
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AI HELPER/apps/web/src/app/search/page.tsx",
                                                lineNumber: 78,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base",
                                                children: GROUP_DESCRIPTIONS[group.category]
                                            }, void 0, false, {
                                                fileName: "[project]/AI HELPER/apps/web/src/app/search/page.tsx",
                                                lineNumber: 84,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AI HELPER/apps/web/src/app/search/page.tsx",
                                        lineNumber: 77,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: group.category === "news" ? "/news" : group.category === "learn" ? "/learn" : group.category === "models" ? "/models" : "/comparisons",
                                        className: "text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-muted)] transition hover:text-[var(--color-foreground)]",
                                        children: "View tab"
                                    }, void 0, false, {
                                        fileName: "[project]/AI HELPER/apps/web/src/app/search/page.tsx",
                                        lineNumber: 86,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AI HELPER/apps/web/src/app/search/page.tsx",
                                lineNumber: 76,
                                columnNumber: 15
                            }, this),
                            hasResults ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "grid gap-4 lg:grid-cols-2",
                                children: group.results.map((item)=>{
                                    const isExternal = Boolean(item.isExternal);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "flex h-full flex-col gap-4 rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/45 p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-depth)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between text-xs uppercase tracking-[0.3em]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-full bg-white/10 px-3 py-1 text-[var(--color-foreground)]/70",
                                                            children: item.badge ?? group.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/AI HELPER/apps/web/src/app/search/page.tsx",
                                                            lineNumber: 102,
                                                            columnNumber: 29
                                                        }, this),
                                                        item.meta ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[var(--color-muted)]",
                                                            children: item.meta
                                                        }, void 0, false, {
                                                            fileName: "[project]/AI HELPER/apps/web/src/app/search/page.tsx",
                                                            lineNumber: 103,
                                                            columnNumber: 42
                                                        }, this) : null
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/app/search/page.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-[var(--color-foreground)]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        href: item.href,
                                                        className: "transition hover:text-[var(--color-accent-secondary)]",
                                                        target: isExternal ? "_blank" : undefined,
                                                        rel: isExternal ? "noreferrer" : undefined,
                                                        children: item.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/AI HELPER/apps/web/src/app/search/page.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/app/search/page.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base",
                                                    children: item.description
                                                }, void 0, false, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/app/search/page.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-auto text-xs text-[var(--color-muted)]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        href: item.href,
                                                        className: "font-medium text-[var(--color-accent-secondary)] hover:text-[var(--color-foreground)]",
                                                        target: isExternal ? "_blank" : undefined,
                                                        rel: isExternal ? "noreferrer" : undefined,
                                                        children: isExternal ? "Open source link" : "View details"
                                                    }, void 0, false, {
                                                        fileName: "[project]/AI HELPER/apps/web/src/app/search/page.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/AI HELPER/apps/web/src/app/search/page.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AI HELPER/apps/web/src/app/search/page.tsx",
                                            lineNumber: 100,
                                            columnNumber: 25
                                        }, this)
                                    }, item.id, false, {
                                        fileName: "[project]/AI HELPER/apps/web/src/app/search/page.tsx",
                                        lineNumber: 99,
                                        columnNumber: 23
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/AI HELPER/apps/web/src/app/search/page.tsx",
                                lineNumber: 95,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-[var(--radius-xl)] border border-dashed border-[var(--border-soft)]/50 bg-[var(--color-surface)]/45 p-6 text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AI__HELPER$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "No matches yet. Try a different keyword or explore the tab directly."
                                }, void 0, false, {
                                    fileName: "[project]/AI HELPER/apps/web/src/app/search/page.tsx",
                                    lineNumber: 133,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/AI HELPER/apps/web/src/app/search/page.tsx",
                                lineNumber: 132,
                                columnNumber: 17
                            }, this)
                        ]
                    }, group.category, true, {
                        fileName: "[project]/AI HELPER/apps/web/src/app/search/page.tsx",
                        lineNumber: 75,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/AI HELPER/apps/web/src/app/search/page.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/AI HELPER/apps/web/src/app/search/page.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
}),
"[project]/AI HELPER/apps/web/src/app/search/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/AI HELPER/apps/web/src/app/search/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e005d5e8._.js.map