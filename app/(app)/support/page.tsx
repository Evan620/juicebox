'use client'

import { HelpCircle, MessageCircle, Book, Mail, ExternalLink } from 'lucide-react'

export default function SupportPage() {
  const resources = [
    {
      icon: Book,
      title: 'Documentation',
      description: 'Browse our comprehensive guides and tutorials',
      link: 'View Docs',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      link: 'Start Chat',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us an email and we\'ll respond within 24 hours',
      link: 'Send Email',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: HelpCircle,
      title: 'FAQ',
      description: 'Find answers to commonly asked questions',
      link: 'View FAQ',
      color: 'from-orange-400 to-orange-600',
    },
  ]

  const faqs = [
    {
      question: 'How do I search for candidates?',
      answer: 'Use the Search page to enter natural language queries. Our AI will understand your requirements and find matching candidates from our database of 800M+ profiles.',
    },
    {
      question: 'How many credits do I get per month?',
      answer: 'Credit allocation depends on your plan. Professional plans include 2,500 credits per month, which can be used for searches, profile views, and email sends.',
    },
    {
      question: 'Can I integrate with my ATS?',
      answer: 'Yes! We support 42 ATS platforms including Greenhouse, Lever, Ashby, and more. Visit the Integrations page to connect your ATS.',
    },
    {
      question: 'How do email sequences work?',
      answer: 'Email sequences allow you to automate multi-step outreach campaigns. Create a sequence, add email templates, and our system will automatically send emails based on your schedule.',
    },
    {
      question: 'What are AI Agents?',
      answer: 'AI Agents are autonomous recruiters that work 24/7 to find and evaluate candidates based on your criteria. They can search, score, and even provide feedback on candidates.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E5E5] px-8 py-6">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-[#1A1A1A] mb-2">How can we help you?</h1>
          <p className="text-base text-[#666666]">
            Get support, find answers, and learn how to make the most of Juicebox
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-8 py-12">
        {/* Support Resources */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-8 text-center">
            Support Resources
          </h2>
          <div className="grid grid-cols-4 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon
              return (
                <div
                  key={index}
                  className="bg-white border border-[#E5E5E5] rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${resource.color} rounded-xl flex items-center justify-center mb-4 shadow-sm`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1A1A1A] mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-[#666666] mb-4">
                    {resource.description}
                  </p>
                  <button className="text-sm text-[#6366F1] font-medium hover:underline flex items-center gap-1">
                    {resource.link}
                    <ExternalLink size={14} />
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-[#E5E5E5] rounded-xl p-6 hover:shadow-md transition-all"
              >
                <h3 className="text-base font-semibold text-[#1A1A1A] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Banner */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-[#E5E5E5] rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
              Still need help?
            </h3>
            <p className="text-base text-[#666666] mb-6">
              Our support team is here to help you succeed
            </p>
            <div className="flex items-center justify-center gap-4">
              <button className="px-6 py-3 bg-[#6366F1] hover:bg-[#5558E3] text-white rounded-lg font-medium transition-all flex items-center gap-2">
                <MessageCircle size={18} />
                Start Live Chat
              </button>
              <button className="px-6 py-3 bg-white border border-[#E5E5E5] hover:bg-gray-50 text-[#1A1A1A] rounded-lg font-medium transition-all flex items-center gap-2">
                <Mail size={18} />
                Email Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

