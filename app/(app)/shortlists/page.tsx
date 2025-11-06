'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus, Users, Calendar, MoreHorizontal, Search, UserPlus, Mail, Download } from 'lucide-react'
import { MOCK_SHORTLISTS } from '@/lib/mockData'
import type { Shortlist } from '@/lib/mockData'
import StatusBadge from '@/components/StatusBadge'
import AvatarStack from '@/components/AvatarStack'

export default function ShortlistsPage() {
  const [shortlists] = useState<Shortlist[]>(MOCK_SHORTLISTS)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedShortlists, setSelectedShortlists] = useState<string[]>([])

  const filteredShortlists = shortlists.filter(shortlist =>
    shortlist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    shortlist.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  const toggleSelectAll = () => {
    if (selectedShortlists.length === filteredShortlists.length) {
      setSelectedShortlists([])
    } else {
      setSelectedShortlists(filteredShortlists.map(s => s.id))
    }
  }

  const toggleSelect = (id: string) => {
    if (selectedShortlists.includes(id)) {
      setSelectedShortlists(selectedShortlists.filter(sid => sid !== id))
    } else {
      setSelectedShortlists([...selectedShortlists, id])
    }
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E5E5] px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#1A1A1A]">Shortlists</h1>
            <p className="text-sm text-[#666666] mt-1">Organize and manage your candidate collections</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-white border border-[#E5E5E5] hover:bg-[#FAFAFA] text-[#666666] rounded-lg font-medium transition-all flex items-center gap-2">
              <Download size={18} />
              Export
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:from-[#5568d3] hover:to-[#6941a5] text-white rounded-lg font-medium transition-all flex items-center gap-2 shadow-sm">
              <Plus size={18} />
              Create Shortlist
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
            placeholder="Search shortlists by name or description..."
            className="w-full pl-12 pr-4 py-3 bg-white border border-[#E5E5E5] rounded-lg text-sm text-[#1A1A1A] placeholder-[#999999] focus:outline-none focus:ring-2 focus:ring-[#667eea] focus:border-transparent"
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-8 py-6">
        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg border border-[#E5E5E5] p-4">
            <p className="text-xs text-[#999999] mb-1">Total Shortlists</p>
            <p className="text-2xl font-bold text-[#1A1A1A]">{filteredShortlists.length}</p>
          </div>
          <div className="bg-white rounded-lg border border-[#E5E5E5] p-4">
            <p className="text-xs text-[#999999] mb-1">Total Candidates</p>
            <p className="text-2xl font-bold text-[#667eea]">
              {filteredShortlists.reduce((sum, s) => sum + s.candidateCount, 0)}
            </p>
          </div>
          <div className="bg-white rounded-lg border border-[#E5E5E5] p-4">
            <p className="text-xs text-[#999999] mb-1">Active Shortlists</p>
            <p className="text-2xl font-bold text-green-600">
              {filteredShortlists.filter(s => s.candidateCount > 0).length}
            </p>
          </div>
          <div className="bg-white rounded-lg border border-[#E5E5E5] p-4">
            <p className="text-xs text-[#999999] mb-1">Selected</p>
            <p className="text-2xl font-bold text-[#667eea]">{selectedShortlists.length}</p>
          </div>
        </div>

        {/* Bulk Actions */}
        {selectedShortlists.length > 0 && (
          <div className="bg-[#667eea] text-white rounded-lg p-4 mb-6 flex items-center justify-between">
            <span className="font-medium">{selectedShortlists.length} shortlist(s) selected</span>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors flex items-center gap-1">
                <Mail size={16} />
                Send Sequence
              </button>
              <button className="px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors flex items-center gap-1">
                <Download size={16} />
                Export All
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
                    checked={selectedShortlists.length === filteredShortlists.length && filteredShortlists.length > 0}
                    onChange={toggleSelectAll}
                    className="w-4 h-4 rounded border-[#D1D1D1] text-[#667eea] focus:ring-[#667eea]"
                  />
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#666666] uppercase tracking-wider">
                  Shortlist Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#666666] uppercase tracking-wider">
                  Description
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#666666] uppercase tracking-wider">
                  Candidates
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#666666] uppercase tracking-wider">
                  Created
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#666666] uppercase tracking-wider">
                  Status
                </th>
                <th className="w-12 px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E5E5]">
              {filteredShortlists.map((shortlist) => (
                <tr key={shortlist.id} className="hover:bg-[#FAFAFA] transition-colors">
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      checked={selectedShortlists.includes(shortlist.id)}
                      onChange={() => toggleSelect(shortlist.id)}
                      className="w-4 h-4 rounded border-[#D1D1D1] text-[#667eea] focus:ring-[#667eea]"
                    />
                  </td>
                  <td className="px-4 py-4">
                    <Link href={`/shortlists/${shortlist.id}`} className="group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center text-white">
                          <Users size={20} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#667eea] transition-colors">
                            {shortlist.name}
                          </p>
                          <p className="text-xs text-[#999999]">ID: {shortlist.id.slice(0, 8)}</p>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="px-4 py-4">
                    <p className="text-sm text-[#666666] line-clamp-2">{shortlist.description}</p>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <UserPlus size={14} className="text-[#999999]" />
                        <span className="text-sm font-semibold text-[#1A1A1A]">{shortlist.candidateCount}</span>
                      </div>
                      <span className="text-xs text-[#999999]">candidates</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1 text-sm text-[#666666]">
                      <Calendar size={14} className="text-[#999999]" />
                      {formatDate(shortlist.createdAt)}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <StatusBadge 
                      status={shortlist.candidateCount > 0 ? 'active' : 'inactive'} 
                      label={shortlist.candidateCount > 0 ? 'Active' : 'Empty'}
                    />
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
        {filteredShortlists.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#F5F5F5] rounded-full flex items-center justify-center">
              <Users size={32} className="text-[#999999]" />
            </div>
            <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">No shortlists found</h3>
            <p className="text-sm text-[#666666] mb-6">Create your first shortlist to get started</p>
            <button className="px-4 py-2 bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:from-[#5568d3] hover:to-[#6941a5] text-white rounded-lg font-medium transition-all flex items-center gap-2 shadow-sm mx-auto">
              <Plus size={18} />
              Create Shortlist
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

