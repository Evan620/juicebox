'use client'

import { Settings, User, Building2, Users, CreditCard, Bell } from 'lucide-react'
import { useState } from 'react'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('account')

  const tabs = [
    { id: 'account', name: 'Account', icon: User },
    { id: 'organization', name: 'Organization', icon: Building2 },
    { id: 'team', name: 'Team', icon: Users },
    { id: 'billing', name: 'Billing', icon: CreditCard },
    { id: 'notifications', name: 'Notifications', icon: Bell },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E5E5] px-8 py-6">
        <div>
          <h1 className="text-2xl font-bold text-[#1A1A1A]">Settings</h1>
          <p className="text-sm text-[#666666] mt-1">Manage your account and preferences</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 border-r border-[#E5E5E5] p-6">
          <nav className="space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-[#F5F5FF] text-[#6366F1]'
                      : 'text-[#666666] hover:bg-gray-50'
                  }`}
                >
                  <Icon size={18} />
                  {tab.name}
                </button>
              )
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeTab === 'account' && (
            <div className="max-w-2xl">
              <h2 className="text-xl font-semibold text-[#1A1A1A] mb-6">Account Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Evan Ogero"
                    className="w-full px-4 py-3 bg-white border border-[#E5E5E5] rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="evan@example.com"
                    className="w-full px-4 py-3 bg-white border border-[#E5E5E5] rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Role
                  </label>
                  <input
                    type="text"
                    defaultValue="Recruiter"
                    className="w-full px-4 py-3 bg-white border border-[#E5E5E5] rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent"
                  />
                </div>

                <div className="pt-4">
                  <button className="px-6 py-3 bg-[#6366F1] hover:bg-[#5558E3] text-white rounded-lg font-medium transition-all">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'organization' && (
            <div className="max-w-2xl">
              <h2 className="text-xl font-semibold text-[#1A1A1A] mb-6">Organization Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Evan's Workspace"
                    className="w-full px-4 py-3 bg-white border border-[#E5E5E5] rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Industry
                  </label>
                  <select className="w-full px-4 py-3 bg-white border border-[#E5E5E5] rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent">
                    <option>Technology</option>
                    <option>Healthcare</option>
                    <option>Finance</option>
                    <option>Education</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Company Size
                  </label>
                  <select className="w-full px-4 py-3 bg-white border border-[#E5E5E5] rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent">
                    <option>1-10 employees</option>
                    <option>11-50 employees</option>
                    <option>51-200 employees</option>
                    <option>201-500 employees</option>
                    <option>500+ employees</option>
                  </select>
                </div>

                <div className="pt-4">
                  <button className="px-6 py-3 bg-[#6366F1] hover:bg-[#5558E3] text-white rounded-lg font-medium transition-all">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'team' && (
            <div className="max-w-4xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-[#1A1A1A]">Team Members</h2>
                <button className="px-4 py-2 bg-[#6366F1] hover:bg-[#5558E3] text-white rounded-lg font-medium transition-all">
                  Invite Member
                </button>
              </div>

              <div className="bg-white border border-[#E5E5E5] rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-[#E5E5E5]">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#666666] uppercase">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#666666] uppercase">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#666666] uppercase">Role</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#666666] uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E5E5]">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#6366F1] flex items-center justify-center text-white text-xs font-medium">
                            E
                          </div>
                          <span className="text-sm font-medium text-[#1A1A1A]">Evan Ogero</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-[#666666]">evan@example.com</td>
                      <td className="px-6 py-4 text-sm text-[#666666]">Owner</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-[#10B981] bg-opacity-10 text-[#10B981] text-xs font-medium rounded">
                          Active
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'billing' && (
            <div className="max-w-2xl">
              <h2 className="text-xl font-semibold text-[#1A1A1A] mb-6">Billing & Subscription</h2>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-[#E5E5E5] rounded-xl p-6 mb-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-1">Professional Plan</h3>
                    <p className="text-sm text-[#666666] mb-4">$99/month • Billed monthly</p>
                    <button className="px-4 py-2 bg-[#6366F1] hover:bg-[#5558E3] text-white rounded-lg font-medium transition-all text-sm">
                      Upgrade Plan
                    </button>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#1A1A1A]">$99</div>
                    <div className="text-sm text-[#666666]">per month</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-base font-semibold text-[#1A1A1A]">Payment Method</h3>
                <div className="bg-white border border-[#E5E5E5] rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded flex items-center justify-center text-white text-xs font-bold">
                      VISA
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#1A1A1A]">•••• 4242</div>
                      <div className="text-xs text-[#666666]">Expires 12/25</div>
                    </div>
                  </div>
                  <button className="text-sm text-[#6366F1] font-medium hover:underline">
                    Update
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="max-w-2xl">
              <h2 className="text-xl font-semibold text-[#1A1A1A] mb-6">Notification Preferences</h2>
              
              <div className="space-y-4">
                {[
                  { title: 'Email Notifications', description: 'Receive email updates about your activity' },
                  { title: 'New Candidates', description: 'Get notified when new candidates match your searches' },
                  { title: 'Sequence Updates', description: 'Receive updates about your email sequences' },
                  { title: 'Team Activity', description: 'Get notified about team member actions' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-4 border-b border-[#E5E5E5]">
                    <div>
                      <div className="text-sm font-medium text-[#1A1A1A]">{item.title}</div>
                      <div className="text-xs text-[#666666] mt-1">{item.description}</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6366F1]"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

