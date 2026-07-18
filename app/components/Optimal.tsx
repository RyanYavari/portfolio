const stackTags = ["React Native (Expo)", "Spring Boot", "Supabase", "PostgreSQL"];

export default function Optimal() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-3xl">
        <p className="font-mono text-sm uppercase tracking-widest text-accent">
          Personal Project
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Optimal
        </h2>
        <p className="mt-4 text-lg text-muted">
          A multi-agent AI productivity platform with a mobile app, built end to
          end over about 6 months.
        </p>

        <div className="mt-6 rounded-xl border border-border bg-surface/50 p-6">
          <p className="leading-relaxed text-muted">
            A supervisor-orchestrated multi-agent system with structured agent
            handoffs and human-in-the-loop approval gates, so agents propose
            actions for review before anything gets written. Built full-stack
            with React Native (Expo) for the mobile app, Spring Boot for the
            backend, and a Supabase PostgreSQL schema with 17+ entities.
            Distributed via TestFlight for real-world testing.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {stackTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <a
            href="https://useoptimal.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
          >
            useoptimal.app
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
          <a
            href="https://useoptimal.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
          >
            Watch walkthrough
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
          </a>
        </div>
      </div>
    </section>
  );
}
