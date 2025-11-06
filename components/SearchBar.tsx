'use client'

import { useState, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import Link from 'next/link'

interface SearchResult {
  title: string
  href: string
  description: string
}

const searchData: SearchResult[] = [
  { title: 'Getting Started', href: '/getting-started', description: 'Set up your account and get started' },
  { title: 'The Method', href: '/search/the-method', description: 'Learn the 2-step search process' },
  { title: 'AI Filters', href: '/search/ai-filters', description: 'Use AI to filter candidates' },
  { title: 'Autopilot', href: '/search/autopilot', description: 'Automated candidate evaluation' },
  { title: 'Credits System', href: '/account/credits', description: 'Understand contact and export credits' },
  { title: 'Email Sequences', href: '/sequences', description: 'Automated email outreach' },
  { title: 'Juicebox Agents', href: '/agents', description: 'AI-powered workflow automation' },
  { title: 'Shortlist Profiles', href: '/shortlist', description: 'Manage candidate shortlists' },
  { title: 'Exports', href: '/exports', description: 'Export candidate data' },
  { title: 'Integrations', href: '/exports/integrations', description: 'ATS and CRM integrations' },
]

export default function SearchBar({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    const handleCmdK = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.addEventListener('keydown', handleCmdK)

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('keydown', handleCmdK)
    }
  }, [onClose])

  useEffect(() => {
    if (query.trim()) {
      const filtered = searchData.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered)
    } else {
      setResults([])
    }
  }, [query])

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="fixed inset-x-4 top-20 max-w-2xl mx-auto" onClick={(e) => e.stopPropagation()}>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-800">
          <div className="flex items-center border-b border-gray-200 dark:border-gray-800 px-4">
            <Search size={20} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 px-4 py-4 bg-transparent outline-none text-gray-900 dark:text-gray-100"
              autoFocus
            />
            <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
              <X size={20} className="text-gray-400" />
            </button>
          </div>

          {results.length > 0 && (
            <div className="max-h-96 overflow-y-auto p-2">
              {results.map((result) => (
                <Link
                  key={result.href}
                  href={result.href}
                  onClick={onClose}
                  className="block px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="font-medium text-gray-900 dark:text-gray-100">{result.title}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{result.description}</div>
                </Link>
              ))}
            </div>
          )}

          {query && results.length === 0 && (
            <div className="p-8 text-center text-gray-500 dark:text-gray-400">
              No results found for "{query}"
            </div>
          )}

          {!query && (
            <div className="p-8 text-center text-gray-500 dark:text-gray-400">
              Start typing to search documentation...
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

