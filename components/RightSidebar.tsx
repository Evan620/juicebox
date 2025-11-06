'use client'

import { Sparkles, ArrowRight } from 'lucide-react'

export default function RightSidebar() {
  const atsIntegrations = [
    { name: 'Greenhouse', icon: '🌱', color: '#10B981' },
    { name: 'Lever', icon: '⚡', color: '#667eea' },
    { name: 'Ashby', icon: '🎯', color: '#F59E0B' },
    { name: 'Workday', icon: '💼', color: '#3B82F6' },
    { name: 'BambooHR', icon: '🎋', color: '#10B981' },
    { name: 'SmartRecruiters', icon: '🧠', color: '#8B5CF6' },
    { name: 'iCIMS', icon: '📊', color: '#EC4899' },
    { name: 'Jobvite', icon: '🚀', color: '#F59E0B' },
    { name: 'Bullhorn', icon: '📢', color: '#EF4444' },
    { name: 'JazzHR', icon: '🎵', color: '#8B5CF6' },
    { name: 'Recruitee', icon: '👥', color: '#3B82F6' },
    { name: 'Breezy', icon: '🌊', color: '#06B6D4' },
  ]

  return (
    <div className="w-80 bg-white border-l border-[#E5E5E5] p-6 space-y-6 overflow-y-auto">
      {/* Agent Introduction Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#667eea] to-[#764ba2] p-6 text-white">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={20} />
            <span className="text-sm font-semibold">✨ Sarah's profile is a good fit!</span>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center text-2xl">
                👩‍💼
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm mb-1">Sarah Markowitz</h4>
                <p className="text-xs opacity-90">Senior Manager at Amazon</p>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-0.5 bg-white/20 rounded text-xs">Python</span>
                  <span className="px-2 py-0.5 bg-white/20 rounded text-xs">Machine</span>
                  <span className="px-2 py-0.5 bg-white/20 rounded text-xs">Tensorflow</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 text-xs text-center mb-4">
            Not enough JS experience, we need 5+ years.
          </div>

          <div>
            <h3 className="text-lg font-bold mb-1">Introducing Agent</h3>
            <p className="text-sm opacity-90 mb-3">Meet your smart AI recruiting partner</p>
            <button className="text-sm font-medium hover:underline flex items-center gap-1">
              Learn more <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
      </div>

      {/* ATS Integration Card */}
      <div className="bg-white rounded-2xl border border-[#E5E5E5] p-6">
        <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Connect your ATS</h3>
        <p className="text-sm text-[#666666] mb-4">Import jobs from 42 platforms</p>

        <div className="grid grid-cols-4 gap-3 mb-4">
          {atsIntegrations.map((integration, index) => (
            <div
              key={index}
              className="aspect-square rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br hover:scale-105 transition-transform cursor-pointer shadow-sm"
              style={{
                background: `linear-gradient(135deg, ${integration.color}20 0%, ${integration.color}40 100%)`,
              }}
              title={integration.name}
            >
              {integration.icon}
            </div>
          ))}
        </div>

        <button className="w-full text-sm font-medium text-[#667eea] hover:text-[#764ba2] transition-colors flex items-center justify-center gap-1">
          Connect ATS <ArrowRight size={14} />
        </button>
      </div>

      {/* Quick Stats Card */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-[#E5E5E5] p-6">
        <h3 className="text-lg font-bold text-[#1A1A1A] mb-4">Getting Started</h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#666666]">Profile completion</span>
            <span className="text-sm font-semibold text-[#1A1A1A]">0%</span>
          </div>
          <div className="w-full bg-white rounded-full h-2">
            <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] h-2 rounded-full" style={{ width: '0%' }}></div>
          </div>

          <div className="pt-3 space-y-2">
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full border-2 border-[#E5E5E5] mt-0.5"></div>
              <div>
                <p className="text-sm font-medium text-[#1A1A1A]">Create your first search</p>
                <p className="text-xs text-[#999999]">Find candidates with AI</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full border-2 border-[#E5E5E5] mt-0.5"></div>
              <div>
                <p className="text-sm font-medium text-[#1A1A1A]">Add to shortlist</p>
                <p className="text-xs text-[#999999]">Organize your candidates</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full border-2 border-[#E5E5E5] mt-0.5"></div>
              <div>
                <p className="text-sm font-medium text-[#1A1A1A]">Send your first sequence</p>
                <p className="text-xs text-[#999999]">Automate outreach</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

