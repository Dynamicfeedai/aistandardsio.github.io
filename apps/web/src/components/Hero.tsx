import { Link } from 'react-router'
import IdentityBadge from './IdentityBadge'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 pt-16 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg)]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] uppercase">
          <span className="text-[var(--color-text)]">AI </span>
          <span className="text-[var(--color-accent)]">Standards</span>
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-[var(--color-text)] max-w-4xl mx-auto mb-4 leading-tight tracking-tight">
          Protocols for agents, identity, and interoperability
        </p>
        <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto mb-12 leading-relaxed">
          A comprehensive guide to standards enabling AI agents to authenticate, communicate, and operate across systems.
        </p>

        <div className="flex justify-center gap-4 flex-wrap mb-16">
          <Link
            to="/standards"
            className="font-display inline-flex items-center justify-center gap-2 px-7 py-3.5 w-full sm:w-auto rounded-lg bg-[var(--color-accent)] text-white font-medium no-underline hover:bg-[var(--color-accent-hover)] transition-colors"
          >
            <span className="font-mono text-sm">&gt;</span>
            Explore Standards
          </Link>
          <Link
            to="/implementations"
            className="font-display inline-flex items-center justify-center gap-2 px-7 py-3.5 w-full sm:w-auto rounded-lg border border-[var(--color-accent)] text-[var(--color-accent)] font-medium no-underline hover:bg-[var(--color-accent)] hover:text-white transition-colors"
          >
            View Implementations
          </Link>
        </div>

        {/* Identity type legend */}
        <div className="flex justify-center gap-8 flex-wrap text-sm">
          <IdentityBadge type="human" />
          <IdentityBadge type="agent" />
          <IdentityBadge type="workload" />
        </div>
      </div>
    </section>
  )
}
