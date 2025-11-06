import { CheckCircle2 } from 'lucide-react'

interface ProgressIndicatorProps {
  current: number
  total: number
  icon?: React.ReactNode
  showLabel?: boolean
}

export default function ProgressIndicator({ current, total, icon, showLabel = true }: ProgressIndicatorProps) {
  return (
    <div className="flex items-center gap-2">
      {icon || <CheckCircle2 size={16} className="text-[#667eea]" />}
      {showLabel && (
        <span className="text-sm text-[#666666]">
          {current} / {total}
        </span>
      )}
    </div>
  )
}

