interface ProjectTechnologyListProps {
  technologies: string[]
  limit?: number
}

export function ProjectTechnologyList({
  technologies,
  limit,
}: ProjectTechnologyListProps) {
  const visible = typeof limit === 'number' ? technologies.slice(0, limit) : technologies
  const remaining =
    typeof limit === 'number' ? Math.max(technologies.length - limit, 0) : 0

  return (
    <ul className="flex flex-wrap gap-2">
      {visible.map((tech) => (
        <li
          key={tech}
          className="rounded-full bg-[var(--color-accent-soft)] px-2.5 py-1 text-xs font-medium text-[var(--color-accent)]"
        >
          {tech}
        </li>
      ))}
      {remaining > 0 ? (
        <li className="rounded-full border border-[var(--color-border)] px-2.5 py-1 text-xs text-[var(--color-text-muted)]">
          +{remaining} more
        </li>
      ) : null}
    </ul>
  )
}
