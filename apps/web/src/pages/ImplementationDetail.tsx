import { useParams, Link } from 'react-router'
import standards from '@/data/standards.json'
import implementationsData from '@/data/implementations.json'
import languages from '@/data/languages.json'
import type { Standard, ImplementationsMap } from '@/lib/types'
import { categoryColors } from '@/lib/types'

const allStandards = standards as Standard[]
const implementations = implementationsData as ImplementationsMap

// Convert slug back to repo (aistandardsio-agent-protocols -> aistandardsio/agent-protocols)
function slugToRepo(slug: string): string {
  const parts = slug.split('-')
  if (parts.length >= 2) {
    return `${parts[0]}/${parts.slice(1).join('-')}`
  }
  return slug
}

export default function ImplementationDetail() {
  const { slug } = useParams<{ slug: string }>()
  const repo = slugToRepo(slug || '')
  const implementation = implementations[repo]

  if (!implementation) {
    return (
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Implementation Not Found</h1>
          <p className="text-[var(--color-text-muted)] mb-8">
            The implementation you're looking for doesn't exist.
          </p>
          <Link
            to="/implementations"
            className="text-[var(--color-accent)] hover:underline no-underline"
          >
            &larr; Back to implementations
          </Link>
        </div>
      </div>
    )
  }

  const implementedStandards = allStandards.filter((s) =>
    implementation.standards.includes(s.slug)
  )

  const repoUrl = `https://github.com/${repo}`

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <Link
          to="/implementations"
          className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] no-underline text-sm mb-8 inline-block"
        >
          &larr; Back to implementations
        </Link>

        <div className="flex items-start gap-4 mb-6">
          <svg
            className="w-10 h-10 text-[var(--color-text-muted)] shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-mono">
              {implementation.name}
            </h1>
            <p className="text-[var(--color-text-muted)] font-mono text-sm mt-1">
              {repo}
            </p>
          </div>
        </div>

        <p className="text-lg leading-relaxed text-[var(--color-text)] mb-6">
          {implementation.description}
        </p>

        {/* Languages */}
        <div className="flex flex-wrap gap-2 mb-8">
          {implementation.languages.map((langId) => {
            const lang = languages[langId as keyof typeof languages]
            return lang ? (
              <span
                key={langId}
                className="text-sm px-3 py-1 rounded-full font-medium"
                style={{
                  backgroundColor: `${lang.color}20`,
                  color: lang.color,
                }}
              >
                {lang.name}
              </span>
            ) : null
          })}
          {implementation.official && (
            <span className="text-sm px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 font-medium">
              Official
            </span>
          )}
        </div>

        <div className="mb-12">
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] no-underline transition-colors"
          >
            <svg
              className="w-5 h-5 text-[var(--color-text)]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="text-[var(--color-text)]">View on GitHub</span>
            <svg className="w-4 h-4 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Architecture levels */}
        {implementation.levels && (
          <div className="border-t border-[var(--color-border)] pt-8 mb-12">
            <h3 className="text-lg font-semibold mb-6">Architecture</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className={`p-4 rounded-lg border ${implementation.levels.base ? 'border-[var(--color-border)] bg-[var(--color-bg-card)]' : 'border-dashed border-[var(--color-border)] opacity-50'}`}>
                <h4 className="font-mono font-medium mb-2">Base Packages</h4>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Core protocol implementations
                </p>
                {implementation.levels.base && (
                  <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded bg-[var(--color-status-adopted)] text-black font-medium">
                    Available
                  </span>
                )}
              </div>

              <div className={`p-4 rounded-lg border ${implementation.levels.adapters && implementation.levels.adapters.length > 0 ? 'border-[var(--color-workload)] bg-[var(--color-bg-card)]' : 'border-dashed border-[var(--color-border)] opacity-50'}`}>
                <h4 className="font-mono font-medium mb-2 text-[var(--color-workload)]">Ecosystem Adapters</h4>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Integrations with identity providers
                </p>
                {implementation.levels.adapters && implementation.levels.adapters.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {implementation.levels.adapters.map((adapter) => (
                      <span key={adapter} className="text-xs px-2 py-0.5 rounded bg-[var(--color-bg-code)] text-[var(--color-text-muted)]">
                        {adapter}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className={`p-4 rounded-lg border ${implementation.levels.examples ? 'border-[var(--color-agent)] bg-[var(--color-bg-card)]' : 'border-dashed border-[var(--color-border)] opacity-50'}`}>
                <h4 className="font-mono font-medium mb-2 text-[var(--color-agent)]">Examples</h4>
                <p className="text-sm text-[var(--color-text-muted)]">
                  End-to-end demonstrations
                </p>
                {implementation.levels.examples && (
                  <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded bg-[var(--color-agent)] text-white font-medium">
                    Available
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Implemented standards */}
        {implementedStandards.length > 0 && (
          <div className="border-t border-[var(--color-border)] pt-8">
            <h3 className="text-lg font-semibold mb-4">Implemented Standards</h3>
            <div className="space-y-3">
              {implementedStandards.map((standard) => (
                <Link
                  key={standard.slug}
                  to={`/standards/${standard.slug}`}
                  className="block p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:border-[var(--color-border-hover)] no-underline transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-medium text-[var(--color-text)]">
                      {standard.shortName}
                    </span>
                    <span
                      className="text-xs font-medium"
                      style={{ color: categoryColors[standard.category] }}
                    >
                      {standard.category}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-text-muted)] mt-1">
                    {standard.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
