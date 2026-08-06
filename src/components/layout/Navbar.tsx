import { useEffect, useId, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Container } from './Container'
import { Button } from '../ui/Button'
import { ThemeToggle } from '../ui/ThemeToggle'
import { navItems, personalInfo } from '../../data/personal'
import { useActiveSection } from '../../hooks/useActiveSection'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import type { ThemeMode } from '../../types/portfolio'
import { FOCUS_RING } from '../../utils/constants'

interface NavbarProps {
  theme: ThemeMode
  onToggleTheme: () => void
}

const observedSections = [
  'about',
  'skills',
  'projects',
  'experience',
  'education',
  'contact',
] as const

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuId = useId()
  const reducedMotion = usePrefersReducedMotion()
  const activeId = useActiveSection({ sectionIds: observedSections })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 border-b transition duration-200 ${
        scrolled
          ? 'border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-bg)_78%,transparent)] backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]">
        <a
          href="#hero"
          className={`font-display text-lg font-semibold tracking-tight text-[var(--color-heading)] ${FOCUS_RING} rounded-md`}
        >
          {personalInfo.name}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeId === item.id
            return (
              <a
                key={item.id}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm transition ${FOCUS_RING} ${
                  isActive
                    ? 'bg-[var(--color-accent-soft)] text-[var(--color-heading)]'
                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-heading)]'
                }`}
                aria-current={isActive ? 'true' : undefined}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden rounded-full bg-[var(--color-navy)] px-4 py-2 text-sm font-medium text-[var(--color-cream)] transition hover:opacity-90 sm:inline-flex ${FOCUS_RING}`}
          >
            Resume
          </a>
          <Button
            variant="ghost"
            size="sm"
            className="h-10 w-10 rounded-full p-0 lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] lg:hidden"
            initial={reducedMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reducedMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.2 }}
          >
            <nav aria-label="Mobile" className="flex flex-col gap-1 px-5 py-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={closeMenu}
                  className={`rounded-xl px-3 py-3 text-base ${FOCUS_RING} ${
                    activeId === item.id
                      ? 'bg-[var(--color-accent-soft)] text-[var(--color-heading)]'
                      : 'text-[var(--color-text)]'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className={`mt-2 rounded-xl bg-[var(--color-navy)] px-3 py-3 text-center text-base font-medium text-[var(--color-cream)] ${FOCUS_RING}`}
              >
                Resume
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
