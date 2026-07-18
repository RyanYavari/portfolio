const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "TypeScript", "SQL", "JavaScript", "Java", "HTML", "CSS"],
  },
  {
    label: "Core Frameworks",
    skills: [
      "FastAPI",
      "Flask",
      "Spring Boot",
      "Node.js",
      "Express",
      "React",
      "Next.js",
      "React Native (Expo)",
    ],
  },
  {
    label: "Databases & Cloud",
    skills: [
      "PostgreSQL",
      "Redis",
      "GCP",
      "AWS",
      "Firebase",
      "MongoDB",
      "MySQL",
      "Supabase",
      "pgvector",
      "Qdrant",
      "Pinecone",
    ],
  },
  {
    label: "AI & Machine Learning",
    skills: [
      "RAG",
      "Agentic Systems",
      "Tool Calling",
      "LangChain",
      "LangGraph",
      "MCP",
      "OpenAI API",
      "Anthropic API",
      "Vector Databases",
      "LLM Eval",
      "RAGAS",
      "Hallucination Detection",
      "Observability",
      "Function Calling",
      "Prompt Engineering",
    ],
  },
];

export default function Skills() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-3xl">
        <p className="font-mono text-sm uppercase tracking-widest text-accent">
          Skills
        </p>
        <div className="mt-8 space-y-8">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="text-sm font-medium text-foreground">
                {group.label}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted transition-colors hover:border-accent/50 hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
