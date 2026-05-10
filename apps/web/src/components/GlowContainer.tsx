import { useRef, useCallback, type ReactNode, type MouseEvent } from 'react'

interface GlowContainerProps {
  children: ReactNode
  className?: string
}

export default function GlowContainer({ children, className = '' }: GlowContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const cards = containerRef.current?.querySelectorAll('.glow-card')
    if (!cards) return

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      ;(card as HTMLElement).style.setProperty('--mx', `${x}px`)
      ;(card as HTMLElement).style.setProperty('--my', `${y}px`)

      // Calculate distance from card edges
      const dx = Math.max(rect.left - e.clientX, 0, e.clientX - rect.right)
      const dy = Math.max(rect.top - e.clientY, 0, e.clientY - rect.bottom)
      const distance = Math.hypot(dx, dy)

      // Show glow when within 150px of card
      ;(card as HTMLElement).style.setProperty('--glow-opacity', distance < 150 ? '1' : '0')
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    const cards = containerRef.current?.querySelectorAll('.glow-card')
    if (!cards) return

    cards.forEach((card) => {
      ;(card as HTMLElement).style.setProperty('--glow-opacity', '0')
    })
  }, [])

  return (
    <div
      ref={containerRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}
