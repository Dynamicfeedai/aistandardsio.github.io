import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router'
import StandardCard from '@/components/StandardCard'
import GlowContainer from '@/components/GlowContainer'
import standards from '@/data/standards.json'
import type { Standard } from '@/lib/types'
import { categoryColors, categoryLabels } from '@/lib/types'

const allStandards = standards as Standard[]
const categories = ['all', 'agent', 'identity', 'general'] as const

export default function Standards() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory)

  const filteredStandards = useMemo(() => {
    if (activeCategory === 'all') return allStandards
    return allStandards.filter((s) => s.category === activeCategory)
  }, [activeCategory])

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    if (category === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ category })
    }
  }

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">
          Standards
        </h1>
        <p className="text-[var(--color-text-muted)] text-lg mb-12 max-w-3xl">
          A comprehensive listing of AI standards, protocols, and specifications enabling agents to authenticate, communicate, and interoperate.
        </p>

        {/* Category filters */}
        <div className="flex gap-2 flex-wrap mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer border ${
                activeCategory === category
                  ? 'bg-[var(--color-accent)] text-white border-transparent'
                  : 'bg-[var(--color-bg-card)] text-[var(--color-text-muted)] border-[var(--color-border)] hover:border-[var(--color-border-hover)]'
              }`}
              style={
                activeCategory === category && category !== 'all'
                  ? { backgroundColor: categoryColors[category as Standard['category']] }
                  : {}
              }
            >
              {category === 'all' ? 'All Standards' : categoryLabels[category as Standard['category']]}
            </button>
          ))}
        </div>

        {/* Standards grid */}
        <GlowContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredStandards.map((standard) => (
            <StandardCard key={standard.slug} standard={standard} />
          ))}
        </GlowContainer>

        {filteredStandards.length === 0 && (
          <p className="text-[var(--color-text-muted)] text-center py-12">
            No standards found in this category.
          </p>
        )}
      </div>
    </div>
  )
}
