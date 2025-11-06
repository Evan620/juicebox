interface StatusBadgeProps {
  status: 'active' | 'inactive' | 'draft' | 'in-progress' | 'completed' | 'paused'
  label?: string
}

export default function StatusBadge({ status, label }: StatusBadgeProps) {
  const styles = {
    active: 'bg-green-100 text-green-700 border-green-200',
    inactive: 'bg-gray-100 text-gray-700 border-gray-200',
    draft: 'bg-purple-100 text-purple-700 border-purple-200',
    'in-progress': 'bg-orange-100 text-orange-700 border-orange-200',
    completed: 'bg-blue-100 text-blue-700 border-blue-200',
    paused: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  }

  const displayLabel = label || status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[status]}`}>
      {displayLabel}
    </span>
  )
}

