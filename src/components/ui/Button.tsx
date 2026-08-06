import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { FOCUS_RING } from '../../utils/constants'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-navy)] text-[var(--color-cream)] hover:opacity-90 shadow-[var(--shadow-card)]',
  secondary:
    'bg-[var(--color-accent-soft)] text-[var(--color-heading)] hover:bg-[color-mix(in_srgb,var(--color-accent)_22%,transparent)]',
  ghost: 'bg-transparent text-[var(--color-heading)] hover:bg-[var(--color-accent-soft)]',
  outline:
    'bg-transparent border border-[var(--color-border)] text-[var(--color-heading)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-soft)]',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3.5 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium transition duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${variantClasses[variant]} ${sizeClasses[size]} ${FOCUS_RING} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
