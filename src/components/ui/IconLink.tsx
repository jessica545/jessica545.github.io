import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { FOCUS_RING } from '../../utils/constants'

interface IconLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string
  children: ReactNode
}

export function IconLink({
  label,
  children,
  className = '',
  ...props
}: IconLinkProps) {
  return (
    <a
      aria-label={label}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] text-[var(--color-heading)] transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-soft)] ${FOCUS_RING} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
