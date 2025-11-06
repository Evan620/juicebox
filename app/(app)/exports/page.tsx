'use client'

import { Download, Plus, Search, FileText, Settings } from 'lucide-react'

export default function ExportsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E5E5] px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#1A1A1A]">Exports</h1>
            <p className="text-sm text-[#666666] mt-1">Export candidates and manage integrations</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-white border border-[#E5E5E5] hover:bg-[#FAFAFA] text-[#666666] rounded-lg font-medium transition-all flex items-center gap-2">
              <Settings size={18} />
              Integrations
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:from-[#5568d3] hover:to-[#6941a5] text-white rounded-lg font-medium transition-all flex items-center gap-2 shadow-sm">
              <Plus size={18} />
              New Export
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#999999]" size={20} />
          <input
            type="text"
            placeholder="Search exports by name or destination..."
            className="w-full pl-12 pr-4 py-3 bg-white border border-[#E5E5E5] rounded-lg text-sm text-[#1A1A1A] placeholder-[#999999] focus:outline-none focus:ring-2 focus:ring-[#667eea] focus:border-transparent"
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-8 py-8">
        <div className="text-center py-16">
          <div className="w-16 h-16 mx-auto mb-4 bg-[#F5F5F5] rounded-full flex items-center justify-center">
            <FileText size={32} className="text-[#999999]" />
          </div>
          <h2 className="text-xl font-semibold text-[#1A1A1A] mb-2">Exports feature coming soon</h2>
          <p className="text-sm text-[#666666] mb-6">
            Export candidates to CSV or integrate with 41 ATS and 21 CRM platforms
          </p>
          <button className="px-4 py-2 bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:from-[#5568d3] hover:to-[#6941a5] text-white rounded-lg font-medium transition-all flex items-center gap-2 shadow-sm mx-auto">
            <Plus size={18} />
            Create Your First Export
          </button>
        </div>
      </div>
    </div>
  )
}

