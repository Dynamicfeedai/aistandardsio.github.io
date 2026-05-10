import IdentityBadge from '@/components/IdentityBadge'

export default function About() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 uppercase">
          About
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-[var(--color-text)] mb-8">
            AIStandards.io is a resource for tracking AI standards, protocols, and specifications
            that enable agents to authenticate, communicate, and operate across systems.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Our Focus</h2>
          <p className="text-[var(--color-text-muted)] mb-6">
            We cover three primary areas of AI standardization:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]">
              <h3 className="font-semibold mb-2 text-[var(--color-category-agent)]">Agent Protocols</h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                Standards for agent communication, tool use, and authorization including MCP, A2A, and ID-JAG.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]">
              <h3 className="font-semibold mb-2 text-[var(--color-category-identity)]">Identity Standards</h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                Frameworks for workload and agent identity like SPIFFE, WIMSE, and AIMS.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]">
              <h3 className="font-semibold mb-2 text-[var(--color-category-general)]">General AI Standards</h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                Broader specifications for function calling, tool use, and structured outputs.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Identity Semantics</h2>
          <p className="text-[var(--color-text-muted)] mb-6">
            Throughout this site and in our diagrams, we use consistent color coding to represent different types of identities:
          </p>

          <div className="flex flex-col gap-4 mb-12 p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]">
            <div className="flex items-center gap-4">
              <IdentityBadge type="human" />
              <span className="text-[var(--color-text-muted)]">
                Human users and principals who delegate authority to agents
              </span>
            </div>
            <div className="flex items-center gap-4">
              <IdentityBadge type="agent" />
              <span className="text-[var(--color-text-muted)]">
                Non-deterministic LLM-based workloads that act on behalf of humans
              </span>
            </div>
            <div className="flex items-center gap-4">
              <IdentityBadge type="workload" />
              <span className="text-[var(--color-text-muted)]">
                Deterministic applications and services that agents interact with
              </span>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Contributing</h2>
          <p className="text-[var(--color-text-muted)] mb-6">
            AIStandards.io is open source. We welcome contributions including:
          </p>
          <ul className="list-disc list-inside text-[var(--color-text-muted)] mb-8 space-y-2">
            <li>New standards and protocols to track</li>
            <li>Implementation projects and adapters</li>
            <li>Commentary and analysis</li>
            <li>Corrections and improvements</li>
          </ul>

          <div className="flex gap-4">
            <a
              href="https://github.com/aistandardsio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-accent)] text-white font-medium no-underline hover:bg-[var(--color-accent-hover)] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
