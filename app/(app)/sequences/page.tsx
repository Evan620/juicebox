'use client'

import { useState } from 'react'
import { Plus, BarChart3, Sparkles, Copy, Mail, Linkedin } from 'lucide-react'

type SequenceTemplate = {
  id: string
  title: string
  description: string
  steps: number
  days: number
  icons: ('mail' | 'linkedin')[]
}

const SEQUENCE_TEMPLATES: SequenceTemplate[] = [
  {
    id: 'multi-channel-ae',
    title: 'Multi-channel outreach (AE)',
    description: 'Email + LinkedIn steps to maximise reach, response rates.',
    steps: 4,
    days: 8,
    icons: ['mail', 'linkedin'],
  },
  {
    id: 'focused-swe',
    title: 'Focused outreach (SWE)',
    description: 'Email-only sequence designed for technical roles.',
    steps: 4,
    days: 8,
    icons: ['mail'],
  },
  {
    id: 'cold-hr',
    title: 'Cold outreach (HR)',
    description: 'Quick focused outreach with room for personalisation.',
    steps: 2,
    days: 4,
    icons: ['mail'],
  },
  {
    id: 're-engagement-marketing',
    title: 'Re-engagement (Marketing)',
    description: "Reconnect with contacts who didn't respond initially.",
    steps: 2,
    days: 4,
    icons: ['mail'],
  },
]

export default function SequencesPage() {
  const [showWelcome, setShowWelcome] = useState(true)
  const hasSequences = false // Set to false to show welcome screen

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E5E5] px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#1A1A1A]">Email Sequences</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-white border border-[#E5E5E5] hover:bg-gray-50 text-[#666666] rounded-lg font-medium transition-all flex items-center gap-2">
              <Plus size={18} />
              New Sequence
            </button>
            <button className="px-4 py-2 bg-white border border-[#E5E5E5] hover:bg-gray-50 text-[#666666] rounded-lg font-medium transition-all flex items-center gap-2">
              <BarChart3 size={18} />
              View Analytics
              <span className="ml-1 px-2 py-0.5 bg-[#F0F0FF] text-[#6366F1] text-xs font-semibold rounded">NEW</span>
            </button>
          </div>
        </div>
      </div>

      {/* Welcome Modal/Content */}
      {!hasSequences && showWelcome && (
        <div className="px-8 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Welcome Card */}
            <div className="bg-white rounded-xl border border-[#E5E5E5] shadow-sm overflow-hidden mb-8">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] px-8 py-6">
                <h2 className="text-2xl font-bold text-white mb-2">Welcome to Email Sequences on Juicebox</h2>
                <p className="text-white/90 text-sm">Start from scratch or choose a template to get started</p>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Two Column Layout */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {/* Start from Scratch */}
                  <div className="border border-[#E5E5E5] rounded-lg p-6 hover:border-[#6366F1] hover:shadow-md transition-all cursor-pointer group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-[#F0F0FF] flex items-center justify-center group-hover:bg-[#6366F1] transition-colors">
                        <Sparkles size={24} className="text-[#6366F1] group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Start from scratch</h3>
                    <p className="text-sm text-[#666666]">Start from scratch, create the sequence yourself.</p>
                  </div>

                  {/* Clone */}
                  <div className="border border-[#E5E5E5] rounded-lg p-6 hover:border-[#6366F1] hover:shadow-md transition-all cursor-pointer group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-[#F0F0FF] flex items-center justify-center group-hover:bg-[#6366F1] transition-colors">
                        <Copy size={24} className="text-[#6366F1] group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Clone</h3>
                    <p className="text-sm text-[#666666]">Clone an existing sequence.</p>
                  </div>
                </div>

                {/* Templates Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {SEQUENCE_TEMPLATES.map((template) => (
                    <div
                      key={template.id}
                      className="border border-[#E5E5E5] rounded-lg p-5 hover:border-[#6366F1] hover:shadow-md transition-all cursor-pointer group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-base font-semibold text-[#1A1A1A] group-hover:text-[#6366F1] transition-colors">
                          {template.title}
                        </h4>
                        <div className="flex items-center gap-1">
                          {template.icons.map((icon, idx) => (
                            <div key={idx} className="w-6 h-6 rounded bg-[#F0F0FF] flex items-center justify-center">
                              {icon === 'mail' ? (
                                <Mail size={14} className="text-[#6366F1]" />
                              ) : (
                                <Linkedin size={14} className="text-[#6366F1]" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-[#666666] mb-4">{template.description}</p>
                      <div className="flex items-center gap-4 text-xs text-[#999999]">
                        <span>{template.steps} steps</span>
                        <span>•</span>
                        <span>{template.days} days in sequence</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Message */}
            <div className="text-center">
              <p className="text-sm text-[#666666] mb-4">
                You don't have any email sequences yet. Please start by creating one.
              </p>
              <button className="px-6 py-3 bg-[#6366F1] hover:bg-[#5558E3] text-white rounded-lg font-semibold transition-all shadow-sm">
                Create New Sequence
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
