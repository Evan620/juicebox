'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { 
  ArrowLeft, Users, Calendar, Mail, Download, Trash2, 
  Plus, Search, MoreVertical, Share2
} from 'lucide-react'
import { MOCK_SHORTLISTS } from '@/lib/mockData'
import { getCandidatesByIds } from '@/lib/searchUtils'
import ProfileCard from '@/components/ProfileCard'

export default function ShortlistDetailPage() {
  const params = useParams()
  const router = useRouter()
  const shortlistId = params.id as string
  
  const shortlist = MOCK_SHORTLISTS.find(s => s.id === shortlistId)
  const [searchQuery, setSearchQuery] = useState('')

  if (!shortlist) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-950">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-2">Shortlist Not Found</h1>
          <p className="text-gray-400 mb-4">The shortlist you're looking for doesn't exist.</p>
          <button
            onClick={() => router.push('/shortlists')}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Back to Shortlists
          </button>
        </div>
      </div>
    )
  }

  const candidates = getCandidatesByIds(shortlist.candidateIds)
  const filteredCandidates = candidates.filter(candidate =>
    candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    candidate.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    candidate.company.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  }

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-900 px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => router.push('/shortlists')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            Back to Shortlists
          </button>

          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">{shortlist.name}</h1>
              <p className="text-gray-400 mb-3">{shortlist.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Users size={16} />
                  {shortlist.candidateIds.length} candidates
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  Updated {formatDate(shortlist.updatedAt)}
                </span>
                <span>Created by {shortlist.createdBy}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors flex items-center gap-2">
                <Share2 size={16} />
                Share
              </button>
              <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors flex items-center gap-2">
                <Mail size={16} />
                Email All
              </button>
              <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors flex items-center gap-2">
                <Download size={16} />
                Export
              </button>
              <button className="p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                <MoreVertical size={20} />
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search candidates in this shortlist..."
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {filteredCandidates.length === 0 ? (
          <div className="text-center py-16">
            <Users className="mx-auto mb-4 text-gray-600" size={64} />
            <h2 className="text-2xl font-semibold text-white mb-2">
              {searchQuery ? 'No candidates found' : 'No candidates in this shortlist'}
            </h2>
            <p className="text-gray-400 mb-6">
              {searchQuery 
                ? 'Try adjusting your search query'
                : 'Add candidates from your search results to this shortlist'
              }
            </p>
            {!searchQuery && (
              <button 
                onClick={() => router.push('/dashboard')}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all flex items-center gap-2 mx-auto"
              >
                <Plus size={20} />
                Search for Candidates
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-400">
                Showing {filteredCandidates.length} of {candidates.length} candidates
              </p>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm transition-colors">
                  Sort by: Relevance
                </button>
              </div>
            </div>

            {filteredCandidates.map((candidate) => (
              <ProfileCard key={candidate.id} candidate={candidate} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

