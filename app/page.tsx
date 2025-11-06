import { redirect } from 'next/navigation'

export default function Home() {
  // Redirect to dashboard (main search page)
  redirect('/dashboard')
}

