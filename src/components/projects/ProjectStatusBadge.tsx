import type { ProjectStatus } from '../../types/portfolio'
import { Badge } from '../ui/Badge'

interface ProjectStatusBadgeProps {
  status: ProjectStatus
}

export function ProjectStatusBadge({ status }: ProjectStatusBadgeProps) {
  const tone =
    status === 'Completed'
      ? 'success'
      : status === 'In Progress'
        ? 'warning'
        : 'info'

  return <Badge tone={tone}>{status}</Badge>
}
