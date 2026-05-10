type IdentityType = 'human' | 'agent' | 'workload'

interface IdentityBadgeProps {
  type: IdentityType
  label?: string
  size?: 'sm' | 'md'
}

const colors: Record<IdentityType, string> = {
  human: 'var(--color-human)',
  agent: 'var(--color-agent)',
  workload: 'var(--color-workload)',
}

const defaultLabels: Record<IdentityType, string> = {
  human: 'Human',
  agent: 'Agent',
  workload: 'Workload',
}

export default function IdentityBadge({ type, label, size = 'md' }: IdentityBadgeProps) {
  const color = colors[type]
  const displayLabel = label ?? defaultLabels[type]

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono font-medium ${
        size === 'sm' ? 'text-xs' : 'text-sm'
      }`}
      style={{ color }}
    >
      <span
        className={`rounded-full ${size === 'sm' ? 'w-2 h-2' : 'w-2.5 h-2.5'}`}
        style={{ backgroundColor: color }}
      />
      {displayLabel}
    </span>
  )
}
