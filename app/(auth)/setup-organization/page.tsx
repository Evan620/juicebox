'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Building2, Users, Sparkles } from 'lucide-react'

export default function SetupOrganizationPage() {
  const router = useRouter()
  const [orgName, setOrgName] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Mock organization creation - redirect to dashboard
    setTimeout(() => {
      router.push('/dashboard')
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium">
              ✓
            </div>
            <div className="w-16 h-1 bg-blue-500"></div>
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium">
              2
            </div>
            <div className="w-16 h-1 bg-gray-700"></div>
            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 text-sm font-medium">
              3
            </div>
          </div>
          <div className="flex justify-center gap-20 text-xs text-gray-400">
            <span>Account</span>
            <span className="text-blue-400 font-medium">Organization</span>
            <span>Complete</span>
          </div>
        </div>

        {/* Setup Card */}
        <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4">
              <Building2 className="text-white" size={32} />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Set up your organization</h1>
            <p className="text-gray-400">This helps us personalize your experience</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="orgName" className="block text-sm font-medium text-gray-300 mb-2">
                Organization name
              </label>
              <input
                id="orgName"
                type="text"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                placeholder="e.g., Acme Corp or Acme Recruiting"
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="mt-2 text-sm text-gray-500">
                You can change this later in settings
              </p>
            </div>

            {/* Features Preview */}
            <div className="bg-gray-900 rounded-lg p-6 mb-6 border border-gray-700">
              <h3 className="text-white font-medium mb-4 flex items-center gap-2">
                <Sparkles className="text-blue-400" size={20} />
                What you'll get access to:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  </div>
                  <div>
                    <span className="font-medium text-white">PeopleGPT Search</span>
                    <p className="text-sm text-gray-400">Search 800M+ profiles with AI</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  </div>
                  <div>
                    <span className="font-medium text-white">Email Sequences</span>
                    <p className="text-sm text-gray-400">Automate personalized outreach</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                  <div>
                    <span className="font-medium text-white">Team Collaboration</span>
                    <p className="text-sm text-gray-400">Invite teammates and share shortlists</p>
                  </div>
                </li>
              </ul>
            </div>

            <button
              type="submit"
              disabled={isLoading || !orgName}
              className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Setting up...
                </span>
              ) : (
                'Continue to Dashboard'
              )}
            </button>
          </form>
        </div>

        {/* Help Text */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Need help? Contact us at{' '}
          <a href="mailto:support@juicebox.ai" className="text-blue-400 hover:text-blue-300">
            support@juicebox.ai
          </a>
        </p>
      </div>
    </div>
  )
}

