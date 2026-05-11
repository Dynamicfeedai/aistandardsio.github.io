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
            </div>
          </div>
        </>
      )}
    </>
  )
}
