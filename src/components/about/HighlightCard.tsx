import type { LucideIcon } from 'lucide-react'

interface HighlightCardProps {
  title: string
  description: string
  icon?: LucideIcon
}

export function HighlightCard({
  title,
  description,
  icon: Icon,
}: HighlightCardProps) {
  return (
    <article className="surface-card rounded-3xl p-5 sm:p-6">
      {Icon ? (
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
      ) : null}
      <h3 className="text-lg text-[var(--color-heading)]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
        {description}
      </p>
    </article>
  )
}
