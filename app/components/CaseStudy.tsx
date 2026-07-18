const stats = [
  { value: "10,000+", label: "travelers served" },
  { value: "99.99%", label: "uptime over 6+ months" },
  { value: "66%", label: "latency reduction" },
  { value: "75→98%", label: "accuracy improvement" },
  { value: "17%", label: "call volume reduction" },
  { value: "25%", label: "cost reduction" },
];

export default function CaseStudy() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-3xl">
        <p className="font-mono text-sm uppercase tracking-widest text-accent">
          Featured Work
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          SJC Airport AI Concierge
        </h2>
        <p className="mt-4 text-lg text-muted">
          Production RAG-powered customer service chatbot for San Jose Mineta
          International Airport, live at{" "}
          <a
            href="https://www.flysanjose.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
          >
            flysanjose.com
          </a>
          .
        </p>

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center bg-background px-4 py-6 sm:py-8"
            >
              <span className="text-2xl font-bold tracking-tight sm:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 text-center text-xs text-muted sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-4 text-base leading-relaxed text-muted">
          <p>
            A tool-augmented RAG pipeline built with LangChain, OpenAI
            embeddings, and Qdrant, grounding responses across 13,000+ chunked
            documents pulled from 667 pages of the SJC website.
          </p>
          <p>
            A Redis-based semantic cache with hash-value change detection and
            automated refresh, cutting inference costs by 25% and improving
            end-to-end response latency by 66%.
          </p>
          <p>
            A model selection evaluation suite using an LLM-as-Judge approach
            across 200+ benchmark Q&A pairs, improving answer accuracy from 75%
            to 98% and reducing response latency from 5s to under 3s. Deployed
            serverless on Google Cloud Functions and Firebase with retry logic
            and graceful failure handling.
          </p>
        </div>

        <p className="mt-8 text-sm text-muted">
          <a
            href="https://www.flysanjose.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
          >
            View live at flysanjose.com
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
          </a>
          <span className="ml-1 text-muted/70">
            — chatbot is in the bottom right corner
          </span>
        </p>
      </div>
    </section>
  );
}
