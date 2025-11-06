'use client'

import { Plus, Sparkles } from 'lucide-react'

export default function AgentsPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-8 text-center">
        {/* Header */}
        <h1 className="text-3xl font-bold text-[#1A1A1A] mb-3">
          Welcome to Agents on Juicebox
        </h1>
        <p className="text-base text-[#666666] mb-8">
          Automate your recruiting workflow with AI.{' '}
          <a href="#" className="text-[#6366F1] hover:underline">
            Learn more about agents here →
          </a>
        </p>

        {/* Agent Cards */}
        <div className="grid grid-cols-2 gap-6 mb-10">
          {/* Project Manager Agent */}
          <div className="border-2 border-[#E879F9] rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-[#FCE7F3] rounded-lg flex items-center justify-center">
                <Sparkles className="text-[#E879F9]" size={24} />
              </div>
              <div className="text-xs text-[#999999]">30 profiles ready for review</div>
            </div>
            <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
              Project manager agent
            </h3>
            <div className="space-y-2 text-sm text-left">
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 bg-[#1A1A1A] rounded-full mt-2"></div>
                <p className="text-[#666666]">
                  <span className="font-medium">Goal:</span> Hire 1 Project Manager
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 bg-[#1A1A1A] rounded-full mt-2"></div>
                <p className="text-[#666666]">
                  <span className="font-medium">Talent Pipeline:</span> 30 profiles
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 bg-[#1A1A1A] rounded-full mt-2"></div>
                <p className="text-[#666666]">
                  <span className="font-medium">Criteria:</span> 5+ years in Senior Product Manager or Senior Director roles at Series B+ startups. Strong background in AI/ML product development and cross-functional team leadership.
                </p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[#E5E5E5]">
              <p className="text-xs text-[#666666]">What do you think about this profile?</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex-1 bg-gray-50 rounded px-3 py-2 text-xs text-[#999999]">
                  Write feedback or...
                </div>
              </div>
            </div>
          </div>

          {/* Software Engineer Agent */}
          <div className="border-2 border-[#60A5FA] rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-[#DBEAFE] rounded-lg flex items-center justify-center">
                <Sparkles className="text-[#60A5FA]" size={24} />
              </div>
              <div className="text-xs text-[#999999]">35 profiles ready for review</div>
            </div>
            <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
              Software engineer agent
            </h3>
            <div className="space-y-2 text-sm text-left">
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 bg-[#1A1A1A] rounded-full mt-2"></div>
                <p className="text-[#666666]">
                  <span className="font-medium">Goal:</span> Hire 1 Senior Backend Engineer - American - 100% C
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 bg-[#1A1A1A] rounded-full mt-2"></div>
                <p className="text-[#666666]">
                  <span className="font-medium">Talent Pipeline:</span> 35 profiles
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 bg-[#1A1A1A] rounded-full mt-2"></div>
                <p className="text-[#666666]">
                  <span className="font-medium">Criteria:</span> American, 100% C
                </p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[#E5E5E5]">
              <p className="text-xs text-[#666666]">What do you think about this profile?</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex-1 bg-gray-50 rounded px-3 py-2 text-xs text-[#999999]">
                  Write feedback or...
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="px-6 py-3 bg-[#6366F1] hover:bg-[#5558E3] text-white rounded-lg font-medium transition-all flex items-center gap-2 shadow-sm mx-auto">
          <Plus size={20} />
          Create Your First Agent
        </button>
      </div>
    </div>
  )
}

