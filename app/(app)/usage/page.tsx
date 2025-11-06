'use client'

import { BarChart3, Download, Calendar } from 'lucide-react'

export default function UsagePage() {
  const usageData = [
    { month: 'November 2024', searches: 45, profiles: 1250, emails: 380, credits: 2500 },
    { month: 'October 2024', searches: 38, profiles: 980, emails: 290, credits: 2000 },
    { month: 'September 2024', searches: 52, profiles: 1420, emails: 450, credits: 3000 },
    { month: 'August 2024', searches: 41, profiles: 1100, emails: 320, credits: 2200 },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E5E5] px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#1A1A1A]">Usage & Credits</h1>
            <p className="text-sm text-[#666666] mt-1">Track your platform usage and credit consumption</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-white border border-[#E5E5E5] hover:bg-gray-50 text-[#666666] rounded-lg font-medium transition-all flex items-center gap-2">
              <Calendar size={18} />
              This Month
            </button>
            <button className="px-4 py-2 bg-white border border-[#E5E5E5] hover:bg-gray-50 text-[#666666] rounded-lg font-medium transition-all flex items-center gap-2">
              <Download size={18} />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white border border-[#E5E5E5] rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-[#666666]">Credits Remaining</span>
              <BarChart3 size={20} className="text-[#6366F1]" />
            </div>
            <div className="text-3xl font-bold text-[#1A1A1A] mb-1">2,500</div>
            <div className="text-xs text-[#10B981]">+500 this month</div>
          </div>

          <div className="bg-white border border-[#E5E5E5] rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-[#666666]">Searches</span>
              <BarChart3 size={20} className="text-[#6366F1]" />
            </div>
            <div className="text-3xl font-bold text-[#1A1A1A] mb-1">45</div>
            <div className="text-xs text-[#10B981]">+7 from last month</div>
          </div>

          <div className="bg-white border border-[#E5E5E5] rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-[#666666]">Profiles Viewed</span>
              <BarChart3 size={20} className="text-[#6366F1]" />
            </div>
            <div className="text-3xl font-bold text-[#1A1A1A] mb-1">1,250</div>
            <div className="text-xs text-[#10B981]">+270 from last month</div>
          </div>

          <div className="bg-white border border-[#E5E5E5] rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-[#666666]">Emails Sent</span>
              <BarChart3 size={20} className="text-[#6366F1]" />
            </div>
            <div className="text-3xl font-bold text-[#1A1A1A] mb-1">380</div>
            <div className="text-xs text-[#10B981]">+90 from last month</div>
          </div>
        </div>

        {/* Usage Table */}
        <div className="bg-white border border-[#E5E5E5] rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-[#E5E5E5]">
            <h2 className="text-lg font-semibold text-[#1A1A1A]">Monthly Usage History</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-[#E5E5E5]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#666666] uppercase tracking-wider">
                    Month
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#666666] uppercase tracking-wider">
                    Searches
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#666666] uppercase tracking-wider">
                    Profiles Viewed
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#666666] uppercase tracking-wider">
                    Emails Sent
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#666666] uppercase tracking-wider">
                    Credits Used
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E5E5]">
                {usageData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-[#1A1A1A]">{row.month}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-[#666666]">{row.searches}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-[#666666]">{row.profiles.toLocaleString()}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-[#666666]">{row.emails}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-[#1A1A1A]">{row.credits.toLocaleString()}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Credit Info */}
        <div className="mt-8 bg-gradient-to-br from-blue-50 to-purple-50 border border-[#E5E5E5] rounded-xl p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Need More Credits?</h3>
              <p className="text-sm text-[#666666] mb-4">
                Upgrade your plan to get more credits and unlock advanced features
              </p>
              <button className="px-4 py-2 bg-[#6366F1] hover:bg-[#5558E3] text-white rounded-lg font-medium transition-all">
                Upgrade Plan
              </button>
            </div>
            <div className="text-right">
              <div className="text-sm text-[#666666] mb-1">Current Plan</div>
              <div className="text-2xl font-bold text-[#1A1A1A]">Professional</div>
              <div className="text-sm text-[#666666] mt-1">$99/month</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

