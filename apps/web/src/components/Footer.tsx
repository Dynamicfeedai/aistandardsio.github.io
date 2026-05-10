import { Link } from 'react-router'

export default function Footer() {
  return (
    <footer className="py-16 border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          <div>
            <Link to="/" className="font-display font-bold text-lg no-underline">
              <span className="text-[var(--color-accent)]">AI</span>
              <span className="text-[var(--color-text)]">Standards</span>
              <span className="text-[var(--color-text-muted)]">.io</span>
            </Link>
            <p className="text-sm text-[var(--color-text-muted)] mt-2 max-w-xs">
              Tracking AI standards, protocols, and implementations for the agent ecosystem.
            </p>
          </div>
          <div className="flex items-center gap-5 text-sm flex-wrap">
            <Link
              to="/standards"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors no-underline"
            >
              Standards
            </Link>
            <Link
              to="/implementations"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors no-underline"
            >
              Implementations
            </Link>
            <Link
              to="/about"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors no-underline"
            >
              About
            </Link>
            <a
              href="https://github.com/aistandardsio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors no-underline"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="text-sm text-[var(--color-text-dim)]">
          &copy; {new Date().getFullYear()} AIStandards.io
        </div>
      </div>
    </footer>
  )
}
