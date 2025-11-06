'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { 
  ArrowLeft, MapPin, Briefcase, Building2, Mail, Phone, Linkedin, 
  Eye, EyeOff, Users, Send, Download, ChevronRight, GraduationCap,
  Calendar, ExternalLink
} from 'lucide-react'
import { getCandidateById, revealContact } from '@/lib/searchUtils'

export default function ProfilePage() {
  const params = useParams()
  const router = useRouter()
  const candidateId = params.id as string
  
  const [candidate, setCandidate] = useState(() => getCandidateById(candidateId))
  const [isRevealing, setIsRevealing] = useState(false)

  if (!candidate) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-950">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-2">Candidate Not Found</h1>
          <p className="text-gray-400 mb-4">The candidate you're looking for doesn't exist.</p>
          <button
            onClick={() => router.push('/dashboard')}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Back to Search
          </button>
        </div>
      </div>
    )
  }

  const handleRevealContact = () => {
    setIsRevealing(true)
    setTimeout(() => {
      const updated = revealContact(candidateId)
      if (updated) {
        setCandidate(updated)
      }
      setIsRevealing(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-900 px-6 py-4">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            Back to Search
          </button>
          
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl">
                {candidate.name.split(' ').map((n: string) => n[0]).join('')}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white mb-1">{candidate.name}</h1>
                <p className="text-xl text-gray-300 mb-2">{candidate.title}</p>
                <div className="flex items-center gap-4 text-gray-400">
                  <span className="flex items-center gap-1">
                    <Building2 size={16} />
                    {candidate.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={16} />
                    {candidate.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase size={16} />
                    {candidate.experience}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg font-semibold">
                {candidate.score}% match
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="col-span-2 space-y-6">
            {/* Summary */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h2 className="text-xl font-semibold text-white mb-4">Summary</h2>
              <p className="text-gray-300 leading-relaxed">{candidate.summary}</p>
            </div>

            {/* Work History */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Briefcase size={20} />
                Work Experience
              </h2>
              <div className="space-y-6">
                {candidate.workHistory.map((job, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-gray-700">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                      <p className="text-gray-400 mb-1">{job.company}</p>
                      <p className="text-sm text-gray-500 mb-2 flex items-center gap-1">
                        <Calendar size={14} />
                        {job.duration}
                      </p>
                      <p className="text-gray-300">{job.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <GraduationCap size={20} />
                Education
              </h2>
              <div className="space-y-4">
                {candidate.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                    <p className="text-gray-400">{edu.field}</p>
                    <p className="text-sm text-gray-500">{edu.school} • {edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h2 className="text-xl font-semibold text-white mb-4">Skills & Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {candidate.skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1.5 bg-gray-700 text-gray-200 rounded-lg text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h2 className="text-xl font-semibold text-white mb-4">Industries</h2>
              <div className="flex flex-wrap gap-2">
                {candidate.industries.map((industry, index) => (
                  <span key={index} className="px-3 py-1.5 bg-purple-500/20 text-purple-300 rounded-lg text-sm">
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h2 className="text-lg font-semibold text-white mb-4">Contact Information</h2>
              
              {!candidate.isContactRevealed ? (
                <div className="space-y-4">
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-700 text-center">
                    <EyeOff className="mx-auto mb-2 text-gray-500" size={32} />
                    <p className="text-gray-400 text-sm mb-4">
                      Contact information is hidden. Reveal to see email, phone, and LinkedIn.
                    </p>
                    <button
                      onClick={handleRevealContact}
                      disabled={isRevealing}
                      className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isRevealing ? (
                        <>Processing...</>
                      ) : (
                        <>
                          <Eye size={16} />
                          Reveal Contact (1 credit)
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-gray-900 rounded-lg">
                    <Mail className="text-blue-400 flex-shrink-0 mt-0.5" size={18} />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 mb-1">Email</p>
                      <a href={`mailto:${candidate.email}`} className="text-gray-200 hover:text-blue-400 transition-colors text-sm break-all">
                        {candidate.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-gray-900 rounded-lg">
                    <Phone className="text-green-400 flex-shrink-0 mt-0.5" size={18} />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 mb-1">Phone</p>
                      <a href={`tel:${candidate.phone}`} className="text-gray-200 hover:text-green-400 transition-colors text-sm">
                        {candidate.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-gray-900 rounded-lg">
                    <Linkedin className="text-blue-500 flex-shrink-0 mt-0.5" size={18} />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 mb-1">LinkedIn</p>
                      <a 
                        href={candidate.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-200 hover:text-blue-500 transition-colors text-sm flex items-center gap-1"
                      >
                        View Profile
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h2 className="text-lg font-semibold text-white mb-4">Actions</h2>
              <div className="space-y-2">
                <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  <Users size={16} />
                  Add to Shortlist
                </button>
                <button className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  <Send size={16} />
                  Send Email
                </button>
                <button className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  <Download size={16} />
                  Export Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

