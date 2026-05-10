import ImplementationCard from '@/components/ImplementationCard'
import GlowContainer from '@/components/GlowContainer'
import implementationsData from '@/data/implementations.json'
import type { ImplementationsMap } from '@/lib/types'

const implementations = implementationsData as ImplementationsMap

export default function Implementations() {
  const entries = Object.entries(implementations)

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">
          Implementations
        </h1>
        <p className="text-[var(--color-text-muted)] text-lg mb-12 max-w-3xl">
          Reference implementations, ecosystem adapters, and example projects demonstrating AI standards in practice.
        </p>

        <GlowContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {entries.map(([repo, impl]) => (
            <ImplementationCard key={repo} repo={repo} implementation={impl} />
          ))}
        </GlowContainer>

        {entries.length === 0 && (
          <p className="text-[var(--color-text-muted)] text-center py-12">
            No implementations available yet.
          </p>
        )}
      </div>
    </div>
  )
}
