from __future__ import annotations

from app.schemas.learn import BadgeRead, CapstoneRead, LearningTrackRead, ModuleRead, ResourceRead


LEARNING_TRACKS: list[LearningTrackRead] = [
    LearningTrackRead(
        id="prompt-foundations",
        title="Prompt Engineering Foundations",
        level="beginner",
        time_estimate_hours=5,
        outcome="Understand LLM fundamentals, craft reliable prompts, and evaluate responses with lightweight checklists.",
        modules=[
            ModuleRead(
                title="LLM Basics & Mental Models",
                objective="Learn how LLMs process instructions, tokens, and safety constraints.",
                resources=[
                    ResourceRead(
                        title="AI Fundamentals by DeepLearning.AI",
                        url="https://www.deeplearning.ai/short-courses/ai-fundamentals/",
                        type="video",
                        description="Short course covering LLM capabilities, limitations, and terminology.",
                    ),
                    ResourceRead(
                        title="OpenAI Prompting Guide",
                        url="https://platform.openai.com/docs/guides/prompt-engineering",
                        type="docs",
                    ),
                    ResourceRead(
                        title="State of Prompting 2025",
                        url="https://www.promptingguide.ai/reports/2025",
                        type="article",
                    ),
                ],
                task="Explain what temperature, top_p, and system prompts do to a teammate in a short memo.",
            ),
            ModuleRead(
                title="Core Prompt Patterns",
                objective="Apply patterns such as role prompting, structured output, and self-checks.",
                resources=[
                    ResourceRead(
                        title="Prompt Engineering Patterns",
                        url="https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/patterns",
                        type="docs",
                    ),
                    ResourceRead(
                        title="Promptable Cookbook",
                        url="https://github.com/promptable/promptable",
                        type="github",
                    ),
                    ResourceRead(
                        title="Structured Outputs with JSON Schema",
                        url="https://jsonschema.dev/blog/structured-llm-prompts",
                        type="article",
                    ),
                ],
                task="Create three prompts that return JSON objects, each validated against a schema.",
            ),
            ModuleRead(
                title="Evaluation & Iteration",
                objective="Measure prompt quality with rubrics, lightweight evals, and user feedback.",
                resources=[
                    ResourceRead(
                        title="Prompt Evaluation with OpenAI Evals",
                        url="https://github.com/openai/evals",
                        type="github",
                    ),
                    ResourceRead(
                        title="Prompt Matrix Worksheet",
                        url="https://promptingguide.ai/tools/prompt-matrix",
                        type="docs",
                    ),
                    ResourceRead(
                        title="LLM Feedback Loops",
                        url="https://blog.langchain.dev/feedback-loops/",
                        type="article",
                    ),
                ],
                task="Compare three versions of a support reply prompt and document precision vs. tone trade-offs.",
            ),
        ],
        capstone=CapstoneRead(
            title="Prompt System Playbook",
            brief="Assemble a short prompt playbook for your team with patterns, guardrails, and evaluation scores.",
            deliverable="Notion or Google Doc with prompt templates plus evaluation results.",
        ),
        badge=BadgeRead(
            name="Prompt Architect",
            description="Awarded for documenting prompt patterns with evaluation evidence.",
            icon="pen",
        ),
    ),
    LearningTrackRead(
        id="open-source-llms",
        title="Open-Source LLMs with Ollama",
        level="beginner",
        time_estimate_hours=6,
        outcome="Stand up local LLM inference, quantization, and prompt tooling with Ollama + open models.",
        modules=[
            ModuleRead(
                title="Local Setup",
                objective="Install Ollama and run baseline models.",
                resources=[
                    ResourceRead(
                        title="Ollama Quickstart",
                        url="https://ollama.com/docs",
                        type="docs",
                    ),
                    ResourceRead(
                        title="Mistral Inference Guide",
                        url="https://docs.mistral.ai/getting-started/ollama/",
                        type="docs",
                    ),
                    ResourceRead(
                        title="GPU vs CPU Benchmarks",
                        url="https://huggingface.co/blog/llm-performance-gpu",
                        type="article",
                    ),
                ],
                task="Run a 7B model locally and record tokens/sec on your hardware.",
            ),
            ModuleRead(
                title="Prompt Tooling",
                objective="Layer in prompt libraries and evaluate outputs.",
                resources=[
                    ResourceRead(
                        title="Prompting with Guidance",
                        url="https://github.com/guidance-ai/guidance",
                        type="github",
                    ),
                    ResourceRead(
                        title="LM Studio Prompt Management",
                        url="https://lmstudio.ai/docs/prompts",
                        type="docs",
                    ),
                    ResourceRead(
                        title="Prompt Evaluation Checklist",
                        url="https://www.promptingguide.ai/",
                        type="article",
                    ),
                ],
                task="Compare two prompt frameworks on the same question set and document differences.",
            ),
            ModuleRead(
                title="Optimization & Serving",
                objective="Optimize model loading and expose an API endpoint.",
                resources=[
                    ResourceRead(
                        title="llama.cpp Quantization",
                        url="https://github.com/ggerganov/llama.cpp#quantization",
                        type="github",
                    ),
                    ResourceRead(
                        title="Ollama Mod Files",
                        url="https://ollama.com/blog/mod-file",
                        type="article",
                    ),
                    ResourceRead(
                        title="FastAPI + Ollama",
                        url="https://github.com/ollama/ollama/tree/main/examples/fastapi",
                        type="github",
                    ),
                ],
                task="Expose a `/generate` endpoint backed by a quantized model of your choice.",
            ),
        ],
        capstone=CapstoneRead(
            title="Local Model Service",
            brief="Bundle an Ollama mod file + FastAPI server for a specialized prompt workflow.",
            deliverable="Dockerfile and README describing the local deployment steps.",
        ),
        badge=BadgeRead(
            name="Open Model Engineer",
            description="Awarded for deploying optimized open-source LLMs.",
            icon="chip",
        ),
    ),
    LearningTrackRead(
        id="automation-n8n",
        title="AI Automation with n8n",
        level="intermediate",
        time_estimate_hours=7,
        outcome="Compose automations that blend LLM calls with business APIs, observability, and human-in-the-loop reviews inside n8n.",
        modules=[
            ModuleRead(
                title="Workflow Fundamentals",
                objective="Navigate n8n, understand triggers, and configure environment variables securely.",
                resources=[
                    ResourceRead(
                        title="n8n Getting Started",
                        url="https://docs.n8n.io/hosting/",
                        type="docs",
                    ),
                    ResourceRead(
                        title="Best Practices for Secrets",
                        url="https://docs.n8n.io/hosting/security/secrets/",
                        type="docs",
                    ),
                    ResourceRead(
                        title="Workflow Gallery Inspiration",
                        url="https://n8n.io/workflows",
                        type="article",
                    ),
                ],
                task="Deploy self-hosted n8n (Docker or cloud) and create a health-check workflow.",
            ),
            ModuleRead(
                title="LLM Nodes & Guardrails",
                objective="Wire LLM nodes, retries, and moderation into automated flows.",
                resources=[
                    ResourceRead(
                        title="n8n OpenAI + Anthropic Nodes",
                        url="https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.openAi/",
                        type="docs",
                    ),
                    ResourceRead(
                        title="Guardrails with PromptLayer",
                        url="https://promptlayer.com/blog/n8n-guardrails",
                        type="article",
                    ),
                    ResourceRead(
                        title="Schema Validation in n8n",
                        url="https://community.n8n.io/t/how-to-validate-json/31456",
                        type="article",
                    ),
                ],
                task="Build a workflow that moderates inbound emails, categorizes them with an LLM, and routes actionable items to Slack.",
            ),
            ModuleRead(
                title="Observability & Human Review",
                objective="Implement logging, approval gates, and metrics for ongoing monitoring.",
                resources=[
                    ResourceRead(
                        title="n8n Workflows for Human-in-the-Loop",
                        url="https://docs.n8n.io/workflows/components/human-in-the-loop/",
                        type="docs",
                    ),
                    ResourceRead(
                        title="Temporal Workflows + n8n",
                        url="https://temporal.io/blog/n8n-temporal-integrations",
                        type="article",
                    ),
                    ResourceRead(
                        title="Grafana Dashboards for n8n",
                        url="https://github.com/n8n-io/n8n-prometheus-exporter",
                        type="github",
                    ),
                ],
                task="Add approval nodes and emit Prometheus metrics for a production-ready automation.",
            ),
        ],
        capstone=CapstoneRead(
            title="Automation Control Center",
            brief="Ship an n8n automation that triages inbound requests, logs metrics, and includes executive-ready reporting.",
            deliverable="Workflow export + short Loom demonstrating success/failure paths.",
        ),
        badge=BadgeRead(
            name="Automation Pilot",
            description="Awarded for orchestrating resilient automations with guardrails.",
            icon="switcher",
        ),
    ),
    LearningTrackRead(
        id="rag-weekend",
        title="RAG in a Weekend",
        level="intermediate",
        time_estimate_hours=10,
        outcome="Ship a retrieval microservice that indexes docs and returns grounded answers with evals.",
        modules=[
            ModuleRead(
                title="Retrieval Foundations",
                objective="Understand vector databases, embeddings, and chunking strategies.",
                resources=[
                    ResourceRead(
                        title="Weaviate Vector Databases 101",
                        url="https://weaviate.io/blog/vector-database-101",
                        type="article",
                        description="High-level primer on vector storage and similarity search.",
                    ),
                    ResourceRead(
                        title="OpenAI Embeddings Guide",
                        url="https://platform.openai.com/docs/guides/embeddings",
                        type="docs",
                    ),
                    ResourceRead(
                        title="Chunking Playground",
                        url="https://github.com/openai/openai-cookbook/blob/main/examples/Chunking.ipynb",
                        type="github",
                    ),
                ],
                task="Chunk a PDF of your choosing and store embeddings in a local vector database.",
            ),
            ModuleRead(
                title="Retriever + LLM Pipeline",
                objective="Implement retrieval chaining and response synthesis.",
                resources=[
                    ResourceRead(
                        title="LangChain Retrieval QA",
                        url="https://python.langchain.com/docs/use_cases/question_answering/",
                        type="docs",
                    ),
                    ResourceRead(
                        title="LlamaIndex RAG Tutorial",
                        url="https://docs.llamaindex.ai/en/stable/examples/low_level/recursive_retriever/",
                        type="docs",
                    ),
                    ResourceRead(
                        title="Implement RAG with FastAPI",
                        url="https://github.com/hwchase17/langchain/blob/master/docs/docs/integrations/fastapi_rag.md",
                        type="github",
                    ),
                ],
                task="Expose a `/query` endpoint that fetches supporting passages and responds with citations.",
            ),
            ModuleRead(
                title="Evaluation & Hardening",
                objective="Add observability, evaluation, and caching to your RAG system.",
                resources=[
                    ResourceRead(
                        title="TruLens Evaluation",
                        url="https://www.trulens.org/docs/quickstart/",
                        type="docs",
                    ),
                    ResourceRead(
                        title="LangSmith Tracing",
                        url="https://docs.smith.langchain.com/user_guide/tracing",
                        type="docs",
                    ),
                    ResourceRead(
                        title="Evaluation Harness",
                        url="https://github.com/explodinggradients/ragas",
                        type="github",
                    ),
                ],
                task="Log 10 evaluation runs and capture latency + hallucination metrics.",
            ),
        ],
        capstone=CapstoneRead(
            title="Grounded Support Assistant",
            brief="Build a RAG assistant over your company handbook with source citations and evaluation dashboard.",
            deliverable="GitHub repo + short loom walkthrough of the assistant flow.",
        ),
        badge=BadgeRead(
            name="RAG Builder",
            description="Awarded for shipping a production-ready retrieval assistant.",
            icon="sparkles",
        ),
    ),
    LearningTrackRead(
        id="agents-101",
        title="Agents 101 (Tools & Functions)",
        level="intermediate",
        time_estimate_hours=8,
        outcome="Design agents that orchestrate tools safely using function calling and guardrails.",
        modules=[
            ModuleRead(
                title="Agent Patterns",
                objective="Survey single vs. multi-agent architectures and planning loops.",
                resources=[
                    ResourceRead(
                        title="Anthropic Cookbook: Agents",
                        url="https://docs.anthropic.com/en/docs/build-with-claude/tool-use/overview",
                        type="docs",
                    ),
                    ResourceRead(
                        title="OpenAI Function Calling",
                        url="https://platform.openai.com/docs/guides/function-calling",
                        type="docs",
                    ),
                    ResourceRead(
                        title="SmolAgents Walkthrough",
                        url="https://github.com/huggingface/smolagents",
                        type="github",
                    ),
                ],
                task="Diagram an agent loop for a research assistant that calls web + code tools.",
            ),
            ModuleRead(
                title="Tooling & Orchestration",
                objective="Implement tool registration and result parsing.",
                resources=[
                    ResourceRead(
                        title="LangChain Agent Toolkits",
                        url="https://python.langchain.com/docs/modules/agents/toolkits/",
                        type="docs",
                    ),
                    ResourceRead(
                        title="ReAct Pattern in Practice",
                        url="https://arxiv.org/abs/2210.03629",
                        type="article",
                    ),
                    ResourceRead(
                        title="Agent Evaluation Harness",
                        url="https://github.com/langchain-ai/langchain/tree/master/templates/agent-evals",
                        type="github",
                    ),
                ],
                task="Implement a sandboxed agent that calls two tools and handles tool errors gracefully.",
            ),
            ModuleRead(
                title="Evaluation & Safety",
                objective="Add guardrails, timeouts, and monitoring for agent operations.",
                resources=[
                    ResourceRead(
                        title="Prompt Layer Logging",
                        url="https://promptlayer.com/docs",
                        type="docs",
                    ),
                    ResourceRead(
                        title="MLflow Prompt Evaluation",
                        url="https://mlflow.org/docs/latest/llms/",
                        type="docs",
                    ),
                    ResourceRead(
                        title="Structural Guardrails",
                        url="https://github.com/guardrails-ai/guardrails",
                        type="github",
                    ),
                ],
                task="Ship evaluation harness for 20 scripted agent conversations with guardrail checks.",
            ),
        ],
        capstone=CapstoneRead(
            title="Analyst Assistant",
            brief="Build an agent that ingests CSV data, runs tool-based insights, and returns an executive summary.",
            deliverable="Notebook or service with evaluation logs + summary sample.",
        ),
        badge=BadgeRead(
            name="Agent Orchestrator",
            description="Awarded for shipping a resilient tool-using agent.",
            icon="workflow",
        ),
    ),
    LearningTrackRead(
        id="agent-ops",
        title="AgentOps & LLM Observability",
        level="advanced",
        time_estimate_hours=9,
        outcome="Monitor, evaluate, and roll out agent-driven products with SLOs, alerting, and incident workflows.",
        modules=[
            ModuleRead(
                title="Telemetry & Tracing",
                objective="Capture spans, prompts, and tool invocations for debugging.",
                resources=[
                    ResourceRead(
                        title="LangSmith Production Playbook",
                        url="https://docs.smith.langchain.com/user_guide/production",
                        type="docs",
                    ),
                    ResourceRead(
                        title="OpenTelemetry for LLM Apps",
                        url="https://github.com/opentelemetry-ml/opentelemetry-llm",
                        type="github",
                    ),
                    ResourceRead(
                        title="PromptOps Runbooks",
                        url="https://promptops.ai/runbooks",
                        type="article",
                    ),
                ],
                task="Instrument an agent workflow with traces that capture prompt, tool latency, and errors.",
            ),
            ModuleRead(
                title="Evaluation Pipelines",
                objective="Automate regression suites and safety checks for releases.",
                resources=[
                    ResourceRead(
                        title="DeepEval Cookbook",
                        url="https://github.com/confident-ai/deepeval",
                        type="github",
                    ),
                    ResourceRead(
                        title="Testing Structured Outputs",
                        url="https://docs.arize.com/phoenix/docs/llm-evaluations",
                        type="docs",
                    ),
                    ResourceRead(
                        title="Risk Scenario Playbooks",
                        url="https://github.com/langchain-ai/agent-risk-scenarios",
                        type="github",
                    ),
                ],
                task="Automate nightly evals with pass/fail thresholds and alerting to Slack/Teams.",
            ),
            ModuleRead(
                title="Rollouts & Incident Response",
                objective="Plan gradual rollouts, fallbacks, and live incident recovery.",
                resources=[
                    ResourceRead(
                        title="Canary Releases for LLMs",
                        url="https://blog.honeycomb.io/canary-llm",
                        type="article",
                    ),
                    ResourceRead(
                        title="Incident Templates for Agent Teams",
                        url="https://github.com/ai-incident-response/templates",
                        type="github",
                    ),
                    ResourceRead(
                        title="PagerDuty x LLM Alerts",
                        url="https://support.pagerduty.com/docs/aiops",
                        type="docs",
                    ),
                ],
                task="Design and document a rollout plan with rollback paths and incident command checklist.",
            ),
        ],
        capstone=CapstoneRead(
            title="Agent Reliability Dashboard",
            brief="Deliver a monitoring pack with dashboards, alerts, and weekly health reports for an agent product.",
            deliverable="Grafana/Looker screenshots + incident documentation pack.",
        ),
        badge=BadgeRead(
            name="Reliability Lead",
            description="Awarded for operationalizing agent monitoring with incident playbooks.",
            icon="pulse",
        ),
    ),
    LearningTrackRead(
        id="multimodal-labs",
        title="Multimodal Creation Studio",
        level="advanced",
        time_estimate_hours=8,
        outcome="Prototype end-to-end multimodal experiences spanning image, audio, and video synthesis with alignment controls.",
        modules=[
            ModuleRead(
                title="Image & Video Foundations",
                objective="Work with diffusion, temporal attention, and control nets.",
                resources=[
                    ResourceRead(
                        title="Stable Video Diffusion",
                        url="https://github.com/Stability-AI/stable-video-diffusion",
                        type="github",
                    ),
                    ResourceRead(
                        title="ComfyUI Advanced Nodes",
                        url="https://comfyui.org/docs/advanced-nodes",
                        type="docs",
                    ),
                    ResourceRead(
                        title="Temporal Attention Explained",
                        url="https://arxiv.org/abs/2401.01234",
                        type="article",
                    ),
                ],
                task="Generate a storyboard with reference frames and export to MP4.",
            ),
            ModuleRead(
                title="Audio & Voice Layers",
                objective="Blend speech synthesis, Foley, and soundtrack generation.",
                resources=[
                    ResourceRead(
                        title="Meta AudioCraft",
                        url="https://github.com/facebookresearch/audiocraft",
                        type="github",
                    ),
                    ResourceRead(
                        title="ElevenLabs Voice Lab",
                        url="https://elevenlabs.io/docs/voice-lab",
                        type="docs",
                    ),
                    ResourceRead(
                        title="Suno Studio Workflow",
                        url="https://help.suno.ai/hc/en-us/articles/13986121412115-Workflow",
                        type="article",
                    ),
                ],
                task="Design a 30-second trailer with scripted narration and matched soundtrack.",
            ),
            ModuleRead(
                title="Safety & Distribution",
                objective="Apply watermarking, metadata, and usage governance.",
                resources=[
                    ResourceRead(
                        title="Content Authenticity Initiative",
                        url="https://contentauthenticity.org/standards",
                        type="article",
                    ),
                    ResourceRead(
                        title="Adobe Firefly Usage Guidelines",
                        url="https://helpx.adobe.com/firefly/using/guidelines.html",
                        type="docs",
                    ),
                    ResourceRead(
                        title="Metadata Watermarking",
                        url="https://github.com/contentauth/c2pa",
                        type="github",
                    ),
                ],
                task="Export assets with provenance metadata and watermark verification report.",
            ),
        ],
        capstone=CapstoneRead(
            title="Multimodal Launch Kit",
            brief="Produce a 60-second campaign video with companion assets and a compliance checklist.",
            deliverable="Asset bundle + checklist covering rights, metadata, and export settings.",
        ),
        badge=BadgeRead(
            name="Creative Director",
            description="Awarded for shipping an aligned multimodal experience.",
            icon="palette",
        ),
    ),
]


def get_learning_tracks() -> list[LearningTrackRead]:
    """Return the curated learning tracks surfaced in the client."""
    return LEARNING_TRACKS
