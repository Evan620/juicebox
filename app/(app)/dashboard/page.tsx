'use client'

import { useState } from 'react'
import { Search, Plus, Filter, Download, MoreHorizontal, MapPin, Briefcase, Star, Mail, UserPlus } from 'lucide-react'
import { MOCK_CANDIDATES } from '@/lib/mockData'
import type { Candidate } from '@/lib/mockData'
import StatusBadge from '@/components/StatusBadge'
import AvatarStack from '@/components/AvatarStack'
import Link from 'next/link'

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCandidates, setSelectedCandidates] = useState<string[]>([])
  const [candidates] = useState<Candidate[]>(MOCK_CANDIDATES.slice(0, 20))

  const filteredCandidates = candidates.filter(candidate => {
    if (!searchQuery) return true
    const query = searchQuery.toLowerCase()
    return (
      candidate.name.toLowerCase().includes(query) ||
      candidate.title.toLowerCase().includes(query) ||
      candidate.company.toLowerCase().includes(query) ||
      candidate.location.toLowerCase().includes(query)
    )
  })

  const toggleSelectAll = () => {
    if (selectedCandidates.length === filteredCandidates.length) {
      setSelectedCandidates([])
    } else {
      setSelectedCandidates(filteredCandidates.map(c => c.id))
    }
  }

  const toggleSelect = (id: string) => {
    if (selectedCandidates.includes(id)) {
      setSelectedCandidates(selectedCandidates.filter(cid => cid !== id))
    } else {
      setSelectedCandidates([...selectedCandidates, id])
    }
  }

  const getMatchStatus = (score: number): 'active' | 'in-progress' | 'inactive' => {
    if (score >= 85) return 'active'
    if (score >= 70) return 'in-progress'
    return 'inactive'
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E5E5] px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#1A1A1A]">Search Candidates</h1>
            <p className="text-sm text-[#666666] mt-1">Find and connect with top talent</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-white border border-[#E5E5E5] hover:bg-[#FAFAFA] text-[#666666] rounded-lg font-medium transition-all flex items-center gap-2">
              <Filter size={18} />
              Filters
            </button>
            <button className="px-4 py-2 bg-white border border-[#E5E5E5] hover:bg-[#FAFAFA] text-[#666666] rounded-lg font-medium transition-all flex items-center gap-2">
              <Download size={18} />
              Export
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:from-[#5568d3] hover:to-[#6941a5] text-white rounded-lg font-medium transition-all flex items-center gap-2 shadow-sm">
              <Plus size={18} />
              New Search
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#999999]" size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, title, company, or location..."
            className="w-full pl-12 pr-4 py-3 bg-white border border-[#E5E5E5] rounded-lg text-sm text-[#1A1A1A] placeholder-[#999999] focus:outline-none focus:ring-2 focus:ring-[#667eea] focus:border-transparent"
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-8 py-6">
        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg border border-[#E5E5E5] p-4">
            <p className="text-xs text-[#999999] mb-1">Total Candidates</p>
            <p className="text-2xl font-bold text-[#1A1A1A]">{filteredCandidates.length}</p>
          </div>
          <div className="bg-white rounded-lg border border-[#E5E5E5] p-4">
            <p className="text-xs text-[#999999] mb-1">High Match</p>
            <p className="text-2xl font-bold text-green-600">
              {filteredCandidates.filter(c => c.score >= 85).length}
            </p>
          </div>
          <div className="bg-white rounded-lg border border-[#E5E5E5] p-4">
            <p className="text-xs text-[#999999] mb-1">Medium Match</p>
            <p className="text-2xl font-bold text-orange-600">
              {filteredCandidates.filter(c => c.score >= 70 && c.score < 85).length}
            </p>
          </div>
          <div className="bg-white rounded-lg border border-[#E5E5E5] p-4">
            <p className="text-xs text-[#999999] mb-1">Selected</p>
            <p className="text-2xl font-bold text-[#667eea]">{selectedCandidates.length}</p>
          </div>
        </div>

        {/* Bulk Actions */}
        {selectedCandidates.length > 0 && (
          <div className="bg-[#667eea] text-white rounded-lg p-4 mb-6 flex items-center justify-between">
            <span className="font-medium">{selectedCandidates.length} candidate(s) selected</span>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors flex items-center gap-1">
                <UserPlus size={16} />
                Add to Shortlist
              </button>
              <button className="px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors flex items-center gap-1">
                <Mail size={16} />
                Send Email
              </button>
              <button className="px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors flex items-center gap-1">
                <Download size={16} />
                Export
              </button>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="bg-white rounded-lg border border-[#E5E5E5] overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#FAFAFA] border-b border-[#E5E5E5]">
              <tr>
                <th className="w-12 px-4 py-3">
                  <input
                    type="checkbox"
                    checked={selectedCandidates.length === filteredCandidates.length && filteredCandidates.length > 0}
                    onChange={toggleSelectAll}
                    className="w-4 h-4 rounded border-[#D1D1D1] text-[#667eea] focus:ring-[#667eea]"
                  />
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#666666] uppercase tracking-wider">
                  Candidate
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#666666] uppercase tracking-wider">
                  Title & Company
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#666666] uppercase tracking-wider">
                  Location
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#666666] uppercase tracking-wider">
                  Skills
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#666666] uppercase tracking-wider">
                  Match
                </th>
                <th className="w-12 px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E5E5]">
              {filteredCandidates.map((candidate) => (
                <tr key={candidate.id} className="hover:bg-[#FAFAFA] transition-colors">
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      checked={selectedCandidates.includes(candidate.id)}
                      onChange={() => toggleSelect(candidate.id)}
                      className="w-4 h-4 rounded border-[#D1D1D1] text-[#667eea] focus:ring-[#667eea]"
                    />
                  </td>
                  <td className="px-4 py-4">
                    <Link href={`/dashboard/profile/${candidate.id}`} className="flex items-center gap-3 group">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center text-white font-medium">
                        {candidate.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#667eea] transition-colors">
                          {candidate.name}
                        </p>
                        <p className="text-xs text-[#999999]">{candidate.experience}</p>
                      </div>
                    </Link>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-start gap-2">
                      <Briefcase size={16} className="text-[#999999] mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-[#1A1A1A]">{candidate.title}</p>
                        <p className="text-xs text-[#666666]">{candidate.company}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1 text-sm text-[#666666]">
                      <MapPin size={14} className="text-[#999999]" />
                      {candidate.location}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-wrap gap-1">
                      {candidate.skills.slice(0, 3).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded border border-blue-200"
                        >
                          {skill}
                        </span>
                      ))}
                      {candidate.skills.length > 3 && (
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                          +{candidate.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-semibold text-[#1A1A1A]">{candidate.score}%</span>
                      </div>
                      <StatusBadge status={getMatchStatus(candidate.score)} label={
                        candidate.score >= 85 ? 'High' : candidate.score >= 70 ? 'Medium' : 'Low'
                      } />
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <button className="p-1 hover:bg-[#F0F0F0] rounded transition-colors">
                      <MoreHorizontal size={18} className="text-[#999999]" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredCandidates.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#F5F5F5] rounded-full flex items-center justify-center">
              <Search size={32} className="text-[#999999]" />
            </div>
            <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">No candidates found</h3>
            <p className="text-sm text-[#666666] mb-6">Try adjusting your search query</p>
          </div>
        )}
      </div>
    </div>
  )
}

