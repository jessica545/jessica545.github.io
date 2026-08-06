import type { HTMLAttributes, ReactNode } from 'react'

type BadgeTone = 'neutral' | 'accent' | 'success' | 'warning' | 'info'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
  tone?: BadgeTone
}

const toneClasses: Record<BadgeTone, string> = {
  neutral:
    'bg-[var(--color-bg-soft)] text-[var(--color-text-muted)] border-[var(--color-border)]',
  accent:
    'bg-[var(--color-accent-soft)] text-[var(--color-accent)] border-transparent',
  success:
    'bg-[color-mix(in_srgb,#7d9b76_18%,transparent)] text-[#3f5f3a] dark:text-[#c5d9c0] border-transparent',
  warning:
    'bg-[color-mix(in_srgb,#c9a227_18%,transparent)] text-[#7a5b10] dark:text-[#f0d789] border-transparent',
  info: 'bg-[color-mix(in_srgb,#6b87b8_18%,transparent)] text-[#334e78] dark:text-[#b7c8e4] border-transparent',
}

export function Badge({
  children,
  tone = 'neutral',
  className = '',
  ...props
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium tracking-wide ${toneClasses[tone]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
