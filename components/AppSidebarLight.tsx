'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Search,
  Users,
  Mail,
  Settings,
  Zap,
  UserCircle,
  HelpCircle,
  ChevronDown,
  Layers,
  Briefcase,
  Grid3x3,
  ExternalLink,
  BarChart3
} from 'lucide-react'
import { useState } from 'react'

const navigation = [
  { name: 'All Projects', href: '/dashboard', icon: Layers },
  { name: 'All Agents', href: '/agents', icon: Briefcase },
]

const projectNavigation = [
  { name: 'Search', href: '/dashboard', icon: Search, hasExternal: true },
  { name: 'Shortlist', href: '/shortlists', icon: Users },
  { name: 'Contacts', href: '/contacts', icon: Users },
  { name: 'Sequences', href: '/sequences', icon: Mail },
  { name: 'Usage', href: '/usage', icon: BarChart3 },
  { name: 'Integrations', href: '/integrations', icon: Grid3x3 },
]

const bottomNavigation = [
  { name: 'Settings', href: '/settings', icon: Settings },
  { name: 'Support', href: '/support', icon: HelpCircle },
]

export default function AppSidebarLight() {
  const pathname = usePathname()
  const [showProjectDropdown, setShowProjectDropdown] = useState(false)

  return (
    <div className="flex flex-col h-screen w-60 bg-white border-r border-[#E5E5E5]">
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-4 border-b border-[#E5E5E5]">
        <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
          <div className="w-3 h-3 border-2 border-white transform rotate-45"></div>
        </div>
        <button className="p-1 hover:bg-gray-100 rounded">
          <div className="w-5 h-5 border border-gray-400 rounded"></div>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {/* Top Navigation */}
        {navigation.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${isActive
                  ? 'bg-[#F5F5FF] text-[#6366F1]'
                  : 'text-[#1A1A1A] hover:bg-gray-50'
                }
              `}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          )
        })}

        {/* Project Section */}
        <div className="pt-4 border-t border-[#E5E5E5] mt-4 relative">
          <button
            onClick={() => setShowProjectDropdown(!showProjectDropdown)}
            className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-[#1A1A1A] hover:bg-gray-50 rounded-md transition-colors"
          >
            <span>First Project</span>
            <ChevronDown
              size={16}
              className={`transition-transform ${showProjectDropdown ? 'rotate-180' : ''}`}
            />
          </button>

          {/* Project Dropdown */}
          {showProjectDropdown && (
            <div className="absolute left-0 right-0 top-full mt-1 mx-3 bg-white border border-[#E5E5E5] rounded-lg shadow-lg z-50 overflow-hidden">
              {/* Search Input */}
              <div className="p-3 border-b border-[#E5E5E5]">
                <input
                  type="text"
                  placeholder="Find projects and agents by title"
                  className="w-full px-3 py-2 text-sm bg-white border border-[#E5E5E5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent"
                  autoFocus
                />
              </div>

              {/* Project List */}
              <div className="py-2">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-3 px-4 py-2 text-sm text-[#1A1A1A] hover:bg-gray-50 transition-colors"
                  onClick={() => setShowProjectDropdown(false)}
                >
                  <Users size={16} className="text-[#6366F1]" />
                  First Project
                </Link>
              </div>

              {/* View All Link */}
              <div className="px-4 py-3 border-t border-[#E5E5E5]">
                <Link
                  href="/dashboard"
                  className="text-sm text-[#6366F1] hover:underline flex items-center gap-1"
                  onClick={() => setShowProjectDropdown(false)}
                >
                  View all projects
                  <ChevronDown size={14} className="-rotate-90" />
                </Link>
              </div>
            </div>
          )}

          {/* Project Navigation - Always Visible */}
          <div className="mt-1 space-y-1">
            {projectNavigation.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
              const Icon = item.icon

              return (
                <div key={item.name} className="relative">
                  <Link
                    href={item.href}
                    className={`
                      flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors
                      ${isActive
                        ? 'bg-[#F5F5FF] text-[#6366F1]'
                        : 'text-[#1A1A1A] hover:bg-gray-50'
                      }
                    `}
                  >
                    <Icon size={18} />
                    {item.name}
                    {item.hasExternal && (
                      <ExternalLink size={14} className="ml-auto text-[#6366F1]" />
                    )}
                  </Link>
                  {item.name === 'Search' && (
                    <div className="ml-9 mt-1">
                      <div className="px-3 py-1.5 text-xs text-[#999999]">
                        First Search
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-[#E5E5E5] px-3 py-3 space-y-2">
        {/* Getting Started */}
        <div className="px-3 py-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-[#1A1A1A] font-medium">Getting Started</span>
            <span className="text-xs text-[#999999]">0%</span>
          </div>
        </div>

        {/* Quick Find */}
        <div className="px-3 py-2 bg-gray-50 rounded-md flex items-center gap-2 text-sm text-[#666666]">
          <Search size={16} className="text-[#999999]" />
          <span>Quick Find</span>
          <div className="ml-auto flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 text-xs bg-white border border-gray-300 rounded">⌘</kbd>
            <kbd className="px-1.5 py-0.5 text-xs bg-white border border-gray-300 rounded">K</kbd>
          </div>
        </div>

        {/* Settings & Support */}
        {bottomNavigation.map((item) => {
          const isActive = pathname.startsWith(item.href)
          const Icon = item.icon

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${isActive
                  ? 'bg-[#F5F5FF] text-[#6366F1]'
                  : 'text-[#1A1A1A] hover:bg-gray-50'
                }
              `}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          )
        })}

        {/* User Profile */}
        <div className="pt-2 border-t border-[#E5E5E5]">
          <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-md cursor-pointer transition-colors">
            <div className="w-8 h-8 rounded-full bg-[#6366F1] flex items-center justify-center text-white text-xs font-medium">
              E
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[#1A1A1A] truncate">Evan Ogero</p>
              <p className="text-xs text-[#999999] truncate">Evan's Workspace</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

