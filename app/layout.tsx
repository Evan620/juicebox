import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Juicebox - AI-Powered Recruiting Platform',
  description: 'Search through 800M+ profiles, automate email outreach, and manage your hiring pipeline with AI-powered recruiting.',
  keywords: ['Juicebox', 'PeopleGPT', 'recruiting', 'talent sourcing', 'AI', 'hiring'],
  authors: [{ name: 'Juicebox' }],
  openGraph: {
    title: 'Juicebox - AI-Powered Recruiting',
    description: 'AI-powered recruiting and talent sourcing platform',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

