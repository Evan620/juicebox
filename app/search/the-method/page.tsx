import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'The Method - Juicebox Documentation',
  description: 'Learn the most effective way to use Juicebox with our 2-step method for finding the best candidates.',
}

export default function TheMethod() {
  return (
    <div className="prose dark:prose-invert">
      <h1>The Method</h1>
      
      <blockquote className="text-xl">
        Learn how to use Juicebox most effectively.
      </blockquote>

      <h2>Introduction</h2>
      <p>
        PeopleGPT, our search tool, uses AI to give you superpowers in searching through 800mm+ profiles. To do so most effectively, follow the two-step method:
      </p>

      <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg my-6 not-prose">
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">Set Filters with AI</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                Set filters using AI, like the location or required skills.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">Evaluate on Autopilot</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                Evaluate the matching candidates using natural language (Autopilot).
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2>The Method in Action</h2>
      <p>
        For example, say I am looking for a candidate to meet the following criteria:
      </p>

      <ul className="space-y-2">
        <li>☐ Software engineer, 4+ years of experience</li>
        <li>☐ Located in San Francisco</li>
        <li>☐ Experience at top growth-stage fintech companies</li>
        <li>☐ Experience with fraud detection algorithms</li>
        <li>☐ Significant experience with open source projects</li>
      </ul>

      <h2>Set Filters with AI</h2>
      <p>
        The first three criteria in our example are easily fulfilled using our AI filters. To fulfill them, I enter the following prompt:
      </p>

      <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg my-4">
        <p className="mb-0 font-medium text-purple-900 dark:text-purple-200">
          "Software Engineers in SF from top growth-stage fintech companies with 4+ years of experience"
        </p>
      </div>

      <p>
        PeopleGPT builds a search strategy for me, including relevant job titles, locations, companies — in this case Affirm, Brex, Stripe, and more — and the selected years of experience.
      </p>

      <p>
        <Link href="/search/ai-filters" className="font-semibold">
          More about AI Filters →
        </Link>
      </p>

      <h2>Evaluate on Autopilot</h2>
      <p>
        Now that we have narrowed down our initial demographic, we see a total of 1,800+ matches that fit our general criteria. But of these profiles, who has relevant experience with fraud detection algorithms or open source projects? I can now use the batch evaluation method:
      </p>

      <ul className="space-y-2">
        <li>☐ Experience with fraud detection algorithms</li>
        <li>☐ Significant experience with open source projects</li>
      </ul>

      <p>
        The AI will analyze each profile for our natural language criteria, assessing them individually.
      </p>

      <p>
        <Link href="/search/autopilot" className="font-semibold">
          More about Autopilot →
        </Link>
      </p>

      <h2>Iterating on your Search</h2>
      <p>
        You can continue to iterate on your search to ensure you are finding the best candidates. Either adjust your filters or use the chat to re-rank your profiles.
      </p>

      <div className="callout callout-info">
        <p className="mb-0">
          <strong>💡 Reminder:</strong> If you want to change hard filters, like location, use the "edit filters" menu. If you want to assess your pool of candidates, use the "Autopilot" feature instead.
        </p>
      </div>

      <h2>Next Steps</h2>
      <p>
        Now that you understand The Method, explore these related topics:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
        <Link
          href="/search/ai-filters"
          className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-500 transition-colors"
        >
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">AI Filters</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Learn how to use AI-powered filters effectively
          </p>
        </Link>

        <Link
          href="/search/autopilot"
          className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-500 transition-colors"
        >
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Autopilot</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Automate candidate evaluation with natural language
          </p>
        </Link>

        <Link
          href="/search/library"
          className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-500 transition-colors"
        >
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Search Library</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Save and reuse your best searches
          </p>
        </Link>

        <Link
          href="/shortlist"
          className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-500 transition-colors"
        >
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Shortlist Profiles</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Manage your top candidates
          </p>
        </Link>
      </div>
    </div>
  )
}

