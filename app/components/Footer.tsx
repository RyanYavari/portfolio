export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border px-6 py-12">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a
            href="mailto:ryan@ryanyavari.dev"
            className="text-muted transition-colors hover:text-foreground"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/ryan-yavari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/RyanYavari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </div>
        <p className="text-xs text-muted/50">
          Built with Next.js and Claude Code
        </p>
      </div>
    </footer>
  );
}
