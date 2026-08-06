import { aboutStatistics } from '../../data/about'

export function Statistics() {
  return (
    <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {aboutStatistics.map((stat) => (
        <li
          key={stat.id}
          className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-5 shadow-[var(--shadow-card)]"
        >
          <p className="font-display text-2xl text-[var(--color-heading)]">
            {stat.value}
          </p>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">
            {stat.label}
          </p>
        </li>
      ))}
    </ul>
  )
}
