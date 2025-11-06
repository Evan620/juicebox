'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Mail, CheckCircle, RefreshCw } from 'lucide-react'

function VerifyEmailContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const email = searchParams.get('email') || ''
  const [isResending, setIsResending] = useState(false)
  const [resent, setResent] = useState(false)

  const handleResend = () => {
    setIsResending(true)
    setTimeout(() => {
      setIsResending(false)
      setResent(true)
      setTimeout(() => setResent(false), 3000)
    }, 1000)
  }

  const handleVerified = () => {
    // Mock verification - redirect to organization setup
    router.push('/setup-organization')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4">
            <Mail className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Check your email</h1>
          <p className="text-gray-400">We sent a verification link to</p>
          <p className="text-white font-medium mt-1">{email}</p>
        </div>

        {/* Verification Card */}
        <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-full mb-4">
              <Mail className="text-blue-400" size={32} />
            </div>
            
            <h2 className="text-xl font-semibold text-white mb-3">Verify your email address</h2>
            
            <p className="text-gray-400 mb-6">
              Click the link in the email we sent you to verify your account and continue.
            </p>

            {/* Mock Verify Button (for demo purposes) */}
            <button
              onClick={handleVerified}
              className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all mb-4"
            >
              <CheckCircle className="inline mr-2" size={20} />
              I've verified my email
            </button>

            <div className="pt-4 border-t border-gray-700">
              <p className="text-sm text-gray-400 mb-3">Didn't receive the email?</p>
              
              {resent ? (
                <div className="flex items-center justify-center gap-2 text-green-400 text-sm">
                  <CheckCircle size={16} />
                  Email sent! Check your inbox.
                </div>
              ) : (
                <button
                  onClick={handleResend}
                  disabled={isResending}
                  className="text-blue-400 hover:text-blue-300 font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mx-auto"
                >
                  <RefreshCw size={16} className={isResending ? 'animate-spin' : ''} />
                  {isResending ? 'Sending...' : 'Resend email'}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Make sure to check your spam folder if you don't see the email.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    }>
      <VerifyEmailContent />
    </Suspense>
  )
}

