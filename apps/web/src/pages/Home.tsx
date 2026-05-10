import { Link } from 'react-router'
import Hero from '@/components/Hero'
import StandardCard from '@/components/StandardCard'
import ImplementationCard from '@/components/ImplementationCard'
import GlowContainer from '@/components/GlowContainer'
import standards from '@/data/standards.json'
import implementationsData from '@/data/implementations.json'
import type { Standard, ImplementationsMap } from '@/lib/types'

const featuredStandards = (standards as Standard[]).filter(s =>
  ['mcp', 'a2a', 'id-jag', 'spiffe'].includes(s.slug)
)

const implementations = implementationsData as ImplementationsMap

export default function Home() {
  return (
    <>
      <Hero />

      {/* Featured Standards */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 uppercase">
                Featured Standards
              </h2>
              <p className="text-[var(--color-text-muted)] text-lg">
                Key protocols shaping the agent ecosystem
              </p>
            </div>
            <Link
              to="/standards"
              className="hidden sm:inline-flex text-[var(--color-accent)] hover:underline no-underline text-sm font-medium"
            >
              View all standards &rarr;
            </Link>
          </div>

          <GlowContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredStandards.map((standard) => (
              <StandardCard key={standard.slug} standard={standard} />
            ))}
          </GlowContainer>

          <Link
            to="/standards"
            className="sm:hidden mt-6 inline-flex text-[var(--color-accent)] hover:underline no-underline text-sm font-medium"
          >
            View all standards &rarr;
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 uppercase text-center">
            Standard Categories
          </h2>

          <GlowContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="glow-card tinted-card p-8 rounded-xl"
              style={{
                '--glow-color': 'var(--color-category-agent)',
                '--card-bg-tint': 'var(--color-bg-agent)',
                '--card-border-color': 'var(--color-border-agent)',
              } as React.CSSProperties}
            >
              <div
                className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
                style={{ backgroundColor: 'color-mix(in srgb, var(--color-category-agent) 20%, transparent)' }}
              >
                <svg className="w-6 h-6 text-[var(--color-category-agent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Agent Protocols</h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
                Standards for agent communication, tool use, and authorization. Includes MCP, A2A, ID-JAG, and AAuth.
              </p>
              <Link
                to="/standards?category=agent"
                className="text-[var(--color-category-agent)] text-sm font-medium no-underline hover:underline"
              >
                View agent protocols &rarr;
              </Link>
            </div>

            <div
              className="glow-card tinted-card p-8 rounded-xl"
              style={{
                '--glow-color': 'var(--color-category-identity)',
                '--card-bg-tint': 'var(--color-bg-identity)',
                '--card-border-color': 'var(--color-border-identity)',
              } as React.CSSProperties}
            >
              <div
                className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
                style={{ backgroundColor: 'color-mix(in srgb, var(--color-category-identity) 20%, transparent)' }}
              >
                <svg className="w-6 h-6 text-[var(--color-category-identity)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Identity Standards</h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
                Frameworks for workload and agent identity, including SPIFFE, WIMSE, and AIMS for cross-domain authentication.
              </p>
              <Link
                to="/standards?category=identity"
                className="text-[var(--color-category-identity)] text-sm font-medium no-underline hover:underline"
              >
                View identity standards &rarr;
              </Link>
            </div>

            <div
              className="glow-card tinted-card p-8 rounded-xl"
              style={{
                '--glow-color': 'var(--color-category-general)',
                '--card-bg-tint': 'var(--color-bg-general)',
                '--card-border-color': 'var(--color-border-general)',
              } as React.CSSProperties}
            >
              <div
                className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
                style={{ backgroundColor: 'color-mix(in srgb, var(--color-category-general) 20%, transparent)' }}
              >
                <svg className="w-6 h-6 text-[var(--color-category-general)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">General AI Standards</h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
                Broader specifications for AI capabilities like function calling, tool use definitions, and structured outputs.
              </p>
              <Link
                to="/standards?category=general"
                className="text-[var(--color-category-general)] text-sm font-medium no-underline hover:underline"
              >
                View general standards &rarr;
              </Link>
            </div>
          </GlowContainer>
        </div>
      </section>

      {/* Implementations */}
      <section className="py-16 md:py-24 border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 uppercase">
                Implementations
              </h2>
              <p className="text-[var(--color-text-muted)] text-lg">
                Reference implementations and adapters
              </p>
            </div>
            <Link
              to="/implementations"
              className="hidden sm:inline-flex text-[var(--color-accent)] hover:underline no-underline text-sm font-medium"
            >
              View all &rarr;
            </Link>
          </div>

          <GlowContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(implementations).map(([repo, impl]) => (
              <ImplementationCard key={repo} repo={repo} implementation={impl} />
            ))}
          </GlowContainer>
        </div>
      </section>
    </>
  )
}
