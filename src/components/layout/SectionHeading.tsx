interface SectionHeadingProps {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <div className={`mb-10 max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-[var(--color-accent)] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="text-3xl sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
