const ExternalIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const projects = [
  {
    title: "PrepAgent",
    subtitle: "AI Interview Research Agent",
    date: "June 2026 — Present",
    description:
      "An MCP-native multi-agent system using a LangGraph supervisor graph with 4 specialized agents, integrating Gmail, Google Calendar, and Google Drive via Google OAuth to autonomously detect interview invites and trigger a personalized research pipeline without manual user input. Features a RAG pipeline with Pinecone, Cohere Rerank, and OpenAI embeddings to retrieve and rerank context across heterogeneous sources, with a RAGAS eval suite tracking answer relevance, faithfulness, and context precision. Targets sub-2-minute end-to-end generation for research that currently takes 45 minutes of manual review.",
    tags: ["LangGraph", "MCP", "Pinecone", "Cohere Rerank", "RAGAS", "Google OAuth"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ryanyavari/prepagent",
      },
    ],
  },
  {
    title: "Optimal",
    subtitle: "AI Productivity Agent",
    date: "June 2025 — Jan. 2026",
    description:
      "A supervisor-orchestrated multi-agent system with structured agent handoffs and human-in-the-loop approval gates, so agents propose actions for user review before anything gets written. Built offline evaluation benchmarks and regression suites to measure agent task completion and output quality, cutting prompt regression incidents by 40% across 3 model update cycles. Full-stack with React Native (Expo), Spring Boot, and a Supabase PostgreSQL schema with 17+ entities. Distributed via TestFlight for real-world testing.",
    tags: ["React Native (Expo)", "Spring Boot", "Supabase", "PostgreSQL"],
    links: [
      {
        label: "useoptimal.app",
        href: "https://useoptimal.app",
      },
      {
        label: "Watch demo",
        href: "https://www.loom.com/share/692237f364174fa7bd52238adc1beb88",
        icon: "video",
      },
    ],
  },
  {
    title: "Quizzler",
    subtitle: "AI Quiz Generator",
    date: "Mar. 2025, Updated Apr. 2026",
    description:
      "A 5-stage RAG pipeline instrumented with LangSmith tracing across query expansion, embedding, reranking, and generation, capturing token usage, Cohere rescores, and per-span latency to surface retrieval quality and cost regressions. Features parallel upload processing to chunk and embed user documents into an ephemeral server-side vector store while concurrently generating structured MCQ quizzes, delivering grounded answers with glass-box citations from user-uploaded PDFs and text.",
    tags: ["LangSmith", "RAG", "Cohere Rerank", "Vector Store"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ryanyavari/quizzler",
      },
    ],
  },
];

export default function Optimal() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-3xl">
        <p className="font-mono text-sm uppercase tracking-widest text-accent">
          Personal Projects
        </p>

        <div className="mt-8 space-y-12">
          {projects.map((project) => (
            <div key={project.title}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {project.title}
                </h2>
                <span className="text-sm text-muted">{project.subtitle}</span>
              </div>
              <p className="mt-1 font-mono text-xs text-muted/60">
                {project.date}
              </p>

              <div className="mt-4 rounded-xl border border-border bg-surface/50 p-6">
                <p className="leading-relaxed text-muted">
                  {project.description}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
                  >
                    {link.label}
                    {link.icon === "video" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    ) : (
                      <ExternalIcon />
                    )}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
