import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'

const links = [
  { href: '/standards', label: 'Standards' },
  { href: '/implementations', label: 'Implementations' },
  { href: '/about', label: 'About' },
]

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (!scrolled && y > 60) setScrolled(true)
      else if (scrolled && y < 30) setScrolled(false)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrolled])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] border-b transition-[background-color,border-color] duration-300 ${
          scrolled || mobileOpen
            ? 'border-[var(--color-border)] bg-[var(--color-bg)]'
            : 'border-transparent bg-transparent'
        }`}
        aria-label="Main"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-5 md:px-8 h-14">
          <Link
            to="/"
            className="no-underline relative z-10 shrink-0 flex items-center gap-2.5"
            aria-label="AIStandards.io"
          >
            <img
              src="/icon.png"
              alt=""
              className="w-8 h-8 rounded"
            />
            <span className="font-display font-bold text-xl">
              <span className="text-[var(--color-accent)]">AI</span>
              <span className="text-[var(--color-text)]">Standards</span>
              <span className="text-[var(--color-text-muted)]">.io</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-7 lg:gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors no-underline ${
                  location.pathname.startsWith(link.href)
                    ? 'text-[var(--color-accent)]'
                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/aistandardsio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-[var(--color-text)] border border-[var(--color-border)] rounded-lg no-underline hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>

          <div className="flex md:hidden items-center gap-1">
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-text-muted)] hover:bg-[var(--color-bg-card)] hover:text-[var(--color-text)] transition-colors bg-transparent border-0 cursor-pointer"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-menu"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[90] bg-black/40 md:hidden cursor-default border-0 p-0"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          />
          <div
            id="mobile-nav-menu"
            className="fixed top-[57px] left-0 right-0 z-[95] md:hidden border-b border-[var(--color-border)] bg-[var(--color-bg)] shadow-lg"
          >
            <div className="flex flex-col px-5 py-3 gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="py-2.5 text-base font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] no-underline"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://github.com/aistandardsio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-2 py-2.5 text-base font-medium text-[var(--color-text)] border border-[var(--color-border)] rounded-lg no-underline hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </>
      )}
    </>
  )
}
