'use client'

import { Grid3x3, Plus, Search, Check } from 'lucide-react'

export default function IntegrationsPage() {
  const integrations = [
    { name: 'Greenhouse', category: 'ATS', icon: '🌱', connected: true, color: 'from-green-400 to-green-600' },
    { name: 'Lever', category: 'ATS', icon: '⚡', connected: true, color: 'from-blue-400 to-blue-600' },
    { name: 'Ashby', category: 'ATS', icon: '🎯', connected: false, color: 'from-orange-400 to-orange-600' },
    { name: 'Workday', category: 'ATS', icon: '💼', connected: false, color: 'from-blue-400 to-blue-600' },
    { name: 'BambooHR', category: 'ATS', icon: '🎋', connected: false, color: 'from-green-400 to-green-600' },
    { name: 'SmartRecruiters', category: 'ATS', icon: '🧠', connected: false, color: 'from-purple-400 to-purple-600' },
    { name: 'iCIMS', category: 'ATS', icon: '📊', connected: false, color: 'from-pink-400 to-pink-600' },
    { name: 'Jobvite', category: 'ATS', icon: '🚀', connected: false, color: 'from-orange-400 to-orange-600' },
    { name: 'Salesforce', category: 'CRM', icon: '☁️', connected: true, color: 'from-blue-400 to-blue-600' },
    { name: 'HubSpot', category: 'CRM', icon: '🔶', connected: false, color: 'from-orange-400 to-orange-600' },
    { name: 'Slack', category: 'Communication', icon: '💬', connected: true, color: 'from-purple-400 to-purple-600' },
    { name: 'Gmail', category: 'Email', icon: '📧', connected: true, color: 'from-red-400 to-red-600' },
  ]

  const connectedCount = integrations.filter(i => i.connected).length

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E5E5] px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#1A1A1A]">Integrations</h1>
            <p className="text-sm text-[#666666] mt-1">
              Connect with 42 ATS platforms and 21 CRM systems
            </p>
          </div>
          <button className="px-4 py-2 bg-[#6366F1] hover:bg-[#5558E3] text-white rounded-lg font-medium transition-all flex items-center gap-2 shadow-sm">
            <Plus size={18} />
            Add Integration
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#999999]" size={20} />
          <input
            type="text"
            placeholder="Search integrations..."
            className="w-full pl-12 pr-4 py-3 bg-white border border-[#E5E5E5] rounded-lg text-sm text-[#1A1A1A] placeholder-[#999999] focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent"
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white border border-[#E5E5E5] rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-[#666666]">Connected</span>
              <Grid3x3 size={20} className="text-[#10B981]" />
            </div>
            <div className="text-3xl font-bold text-[#1A1A1A] mb-1">{connectedCount}</div>
            <div className="text-xs text-[#666666]">Active integrations</div>
          </div>

          <div className="bg-white border border-[#E5E5E5] rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-[#666666]">Available</span>
              <Grid3x3 size={20} className="text-[#6366F1]" />
            </div>
            <div className="text-3xl font-bold text-[#1A1A1A] mb-1">63</div>
            <div className="text-xs text-[#666666]">Total integrations</div>
          </div>

          <div className="bg-white border border-[#E5E5E5] rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-[#666666]">Synced Today</span>
              <Grid3x3 size={20} className="text-[#F59E0B]" />
            </div>
            <div className="text-3xl font-bold text-[#1A1A1A] mb-1">1,247</div>
            <div className="text-xs text-[#666666]">Records synced</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-6">
          <button className="px-4 py-2 bg-[#6366F1] text-white rounded-lg text-sm font-medium">
            All
          </button>
          <button className="px-4 py-2 bg-white border border-[#E5E5E5] text-[#666666] hover:bg-gray-50 rounded-lg text-sm font-medium transition-colors">
            ATS
          </button>
          <button className="px-4 py-2 bg-white border border-[#E5E5E5] text-[#666666] hover:bg-gray-50 rounded-lg text-sm font-medium transition-colors">
            CRM
          </button>
          <button className="px-4 py-2 bg-white border border-[#E5E5E5] text-[#666666] hover:bg-gray-50 rounded-lg text-sm font-medium transition-colors">
            Communication
          </button>
          <button className="px-4 py-2 bg-white border border-[#E5E5E5] text-[#666666] hover:bg-gray-50 rounded-lg text-sm font-medium transition-colors">
            Email
          </button>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-white border border-[#E5E5E5] rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer relative"
            >
              {integration.connected && (
                <div className="absolute top-3 right-3 w-6 h-6 bg-[#10B981] rounded-full flex items-center justify-center">
                  <Check size={14} className="text-white" />
                </div>
              )}
              
              <div className={`w-16 h-16 bg-gradient-to-br ${integration.color} rounded-xl flex items-center justify-center text-3xl mb-4 shadow-sm`}>
                {integration.icon}
              </div>
              
              <h3 className="text-base font-semibold text-[#1A1A1A] mb-1">
                {integration.name}
              </h3>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#666666]">{integration.category}</span>
                {integration.connected ? (
                  <span className="text-xs text-[#10B981] font-medium">Connected</span>
                ) : (
                  <button className="text-xs text-[#6366F1] font-medium hover:underline">
                    Connect
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Info Banner */}
        <div className="mt-8 bg-gradient-to-br from-blue-50 to-purple-50 border border-[#E5E5E5] rounded-xl p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
                Need a Custom Integration?
              </h3>
              <p className="text-sm text-[#666666] mb-4">
                We can build custom integrations for your specific needs. Contact our team to learn more.
              </p>
              <button className="px-4 py-2 bg-[#6366F1] hover:bg-[#5558E3] text-white rounded-lg font-medium transition-all">
                Contact Sales
              </button>
            </div>
            <div className="text-6xl">🔌</div>
          </div>
        </div>
      </div>
    </div>
  )
}

