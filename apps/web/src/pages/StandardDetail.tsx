import { useParams, Link } from 'react-router'
import standards from '@/data/standards.json'
import implementationsData from '@/data/implementations.json'
import type { Standard, ImplementationsMap } from '@/lib/types'
import { categoryColors, categoryLabels, statusColors } from '@/lib/types'

const allStandards = standards as Standard[]
const implementations = implementationsData as ImplementationsMap

export default function StandardDetail() {
  const { slug } = useParams<{ slug: string }>()
  const standard = allStandards.find((s) => s.slug === slug)

  if (!standard) {
    return (
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Standard Not Found</h1>
          <p className="text-[var(--color-text-muted)] mb-8">
            The standard you're looking for doesn't exist.
          </p>
          <Link
            to="/standards"
            className="text-[var(--color-accent)] hover:underline no-underline"
          >
            &larr; Back to standards
          </Link>
        </div>
      </div>
    )
  }

  // Find implementations that support this standard
  const relatedImplementations = Object.entries(implementations).filter(
    ([, impl]) => impl.standards.includes(standard.slug)
  )

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <Link
          to="/standards"
          className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] no-underline text-sm mb-8 inline-block"
        >
          &larr; Back to standards
        </Link>

        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <span
              className="text-sm font-medium mb-2 inline-block"
              style={{ color: categoryColors[standard.category] }}
            >
              {categoryLabels[standard.category]}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-mono">
              {standard.shortName}
            </h1>
          </div>
          <span
            className="text-sm font-medium px-3 py-1 rounded-full shrink-0"
            style={{
              backgroundColor: `color-mix(in srgb, ${statusColors[standard.status]} 20%, transparent)`,
              color: statusColors[standard.status],
            }}
          >
            {standard.status}
          </span>
        </div>

        <h2 className="text-xl text-[var(--color-text-muted)] mb-8">
          {standard.name}
        </h2>

        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-lg leading-relaxed text-[var(--color-text)]">
            {standard.description}
          </p>
        </div>

        <div className="border-t border-[var(--color-border)] pt-8 mb-12">
          <h3 className="text-lg font-semibold mb-4">Specification</h3>
          <a
            href={standard.specUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:underline no-underline"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            {standard.specUrl}
          </a>
        </div>

        {relatedImplementations.length > 0 && (
          <div className="border-t border-[var(--color-border)] pt-8">
            <h3 className="text-lg font-semibold mb-4">Implementations</h3>
            <div className="space-y-4">
              {relatedImplementations.map(([repo, impl]) => {
                const slug = repo.replace('/', '-')
                return (
                  <Link
                    key={repo}
                    to={`/implementations/${slug}`}
                    className="block p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:border-[var(--color-border-hover)] no-underline transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-[var(--color-text-muted)]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span className="font-mono font-medium text-[var(--color-text)]">
                        {impl.name}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)] mt-2">
                      {impl.description}
                    </p>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
