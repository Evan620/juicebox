import Link from 'next/link'
import { MapPin, Briefcase, Building2 } from 'lucide-react'
import type { Candidate } from '@/lib/mockData'

type ProfileCardProps = {
  candidate: Candidate
  onClick?: () => void
}

export default function ProfileCard({ candidate, onClick }: ProfileCardProps) {
  return (
    <Link href={`/dashboard/profile/${candidate.id}`}>
      <div 
        onClick={onClick}
        className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-blue-500 transition-colors cursor-pointer"
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
              {candidate.name.split(' ').map((n: string) => n[0]).join('')}
            </div>
            <div>
              <h3 className="text-white font-semibold">{candidate.name}</h3>
              <p className="text-gray-400 text-sm">{candidate.title}</p>
              <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Building2 size={12} />
                  {candidate.company}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={12} />
                  {candidate.location}
                </span>
                <span className="flex items-center gap-1">
                  <Briefcase size={12} />
                  {candidate.experience}
                </span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm font-semibold">
              {candidate.score}% match
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-2">
          {candidate.skills.slice(0, 5).map((skill: string, i: number) => (
            <span key={i} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
              {skill}
            </span>
          ))}
          {candidate.skills.length > 5 && (
            <span className="px-2 py-1 bg-gray-700 text-gray-400 rounded text-xs">
              +{candidate.skills.length - 5} more
            </span>
          )}
        </div>

        <p className="text-gray-400 text-sm line-clamp-2">{candidate.summary}</p>
      </div>
    </Link>
  )
}

