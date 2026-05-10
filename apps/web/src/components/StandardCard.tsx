import { Link } from 'react-router'
import type { Standard } from '@/lib/types'
import { categoryColors, categoryLabels, statusColors } from '@/lib/types'

interface StandardCardProps {
  standard: Standard
}

export default function StandardCard({ standard }: StandardCardProps) {
  return (
    <Link
      to={`/standards/${standard.slug}`}
      className="glow-card glow-border block h-full p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] no-underline transition-all duration-200 hover:scale-[1.02]"
      style={{ '--glow-color': categoryColors[standard.category] } as React.CSSProperties}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-mono font-semibold text-[var(--color-text)]">
          {standard.shortName}
        </h3>
        <span
          className="text-xs font-medium px-2 py-0.5 rounded-full"
          style={{
            backgroundColor: `color-mix(in srgb, ${statusColors[standard.status]} 20%, transparent)`,
            color: statusColors[standard.status],
          }}
        >
          {standard.status}
        </span>
      </div>
      <p className="text-sm text-[var(--color-text-muted)] mb-4 leading-relaxed">
        {standard.name}
      </p>
      <p className="text-sm text-[var(--color-text-dim)] line-clamp-2">
        {standard.description}
      </p>
      <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
        <span
          className="text-xs font-medium"
          style={{ color: categoryColors[standard.category] }}
        >
          {categoryLabels[standard.category]}
        </span>
      </div>
    </Link>
  )
}
