import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { FOCUS_RING } from '../../utils/constants'
import { LinkedInIcon } from './SocialIcons'
import { personalInfo } from '../../data/personal'

type LinkedInLinkVariant = 'icon' | 'text' | 'pill' | 'detail'

interface LinkedInLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  variant?: LinkedInLinkVariant
  children?: ReactNode
  onNavigate?: () => void
}

const baseExternal = {
  href: personalInfo.linkedinUrl,
  target: '_blank' as const,
  rel: 'noopener noreferrer',
}

export function LinkedInLink({
  variant = 'text',
  className = '',
  children,
  onNavigate,
  ...props
}: LinkedInLinkProps) {
  if (variant === 'icon') {
    return (
      <a
        {...baseExternal}
        {...props}
        onClick={onNavigate}
        aria-label={props['aria-label'] ?? 'Visit Jessica’s LinkedIn profile'}
        className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] text-[var(--color-heading)] transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-soft)] ${FOCUS_RING} ${className}`}
      >
        {children ?? <LinkedInIcon className="h-4 w-4" />}
      </a>
    )
  }

  if (variant === 'pill') {
    return (
      <a
        {...baseExternal}
        {...props}
        onClick={onNavigate}
        className={`inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm font-medium text-[var(--color-heading)] transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-soft)] ${FOCUS_RING} ${className}`}
      >
        <LinkedInIcon className="h-4 w-4" />
        {children ?? 'LinkedIn'}
      </a>
    )
  }

  if (variant === 'detail') {
    return (
      <a
        {...baseExternal}
        {...props}
        onClick={onNavigate}
        className={`inline-flex items-center gap-3 rounded-xl ${FOCUS_RING} ${className}`}
      >
        <LinkedInIcon className="h-4 w-4 shrink-0 text-[var(--color-accent)]" />
        <span className="text-left">
          <span className="block font-medium text-[var(--color-heading)]">
            LinkedIn
          </span>
          <span className="block break-all text-xs text-[var(--color-text-muted)]">
            {personalInfo.linkedinHandle}
          </span>
        </span>
      </a>
    )
  }

  return (
    <a
      {...baseExternal}
      {...props}
      onClick={onNavigate}
      className={`inline-flex items-center gap-1.5 font-medium text-[var(--color-accent)] underline-offset-4 transition hover:underline ${FOCUS_RING} ${className}`}
    >
      {children ?? 'LinkedIn'}
    </a>
  )
}
