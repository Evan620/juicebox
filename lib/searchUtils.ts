import { Candidate, MOCK_CANDIDATES } from './mockData'

export type SearchFilters = {
  jobTitles?: string[]
  industries?: string[]
  locations?: string[]
  countries?: string[]
  companies?: string[]
  skills?: string[]
  minExperience?: number
  maxExperience?: number
}

export type SortOption = 'relevance' | 'experience-high' | 'experience-low' | 'name'

/**
 * Search candidates based on natural language query
 * This simulates AI-powered search by extracting keywords and matching
 */
export function searchCandidates(
  query: string,
  filters?: SearchFilters,
  sortBy: SortOption = 'relevance'
): Candidate[] {
  let results = [...MOCK_CANDIDATES]

  // Apply filters
  if (filters) {
    results = filterCandidates(results, filters)
  }

  // If there's a query, filter by relevance
  if (query && query.trim()) {
    const keywords = extractKeywords(query.toLowerCase())
    results = results.filter(candidate => {
      const searchText = `
        ${candidate.name}
        ${candidate.title}
        ${candidate.company}
        ${candidate.location}
        ${candidate.skills.join(' ')}
        ${candidate.industries.join(' ')}
        ${candidate.summary}
      `.toLowerCase()

      return keywords.some(keyword => searchText.includes(keyword))
    })
  }

  // Sort results
  results = sortCandidates(results, sortBy)

  return results
}

/**
 * Filter candidates based on structured criteria
 */
export function filterCandidates(
  candidates: Candidate[],
  filters: SearchFilters
): Candidate[] {
  let filtered = [...candidates]

  if (filters.jobTitles && filters.jobTitles.length > 0) {
    filtered = filtered.filter(c =>
      filters.jobTitles!.some(title =>
        c.title.toLowerCase().includes(title.toLowerCase())
      )
    )
  }

  if (filters.industries && filters.industries.length > 0) {
    filtered = filtered.filter(c =>
      filters.industries!.some(industry =>
        c.industries.some(ci => ci.toLowerCase().includes(industry.toLowerCase()))
      )
    )
  }

  if (filters.locations && filters.locations.length > 0) {
    filtered = filtered.filter(c =>
      filters.locations!.some(location =>
        c.location.toLowerCase().includes(location.toLowerCase())
      )
    )
  }

  if (filters.countries && filters.countries.length > 0) {
    filtered = filtered.filter(c =>
      filters.countries!.some(country =>
        c.country.toLowerCase().includes(country.toLowerCase())
      )
    )
  }

  if (filters.companies && filters.companies.length > 0) {
    filtered = filtered.filter(c =>
      filters.companies!.some(company =>
        c.company.toLowerCase().includes(company.toLowerCase())
      )
    )
  }

  if (filters.skills && filters.skills.length > 0) {
    filtered = filtered.filter(c =>
      filters.skills!.some(skill =>
        c.skills.some(cs => cs.toLowerCase().includes(skill.toLowerCase()))
      )
    )
  }

  if (filters.minExperience !== undefined) {
    filtered = filtered.filter(c => c.experienceYears >= filters.minExperience!)
  }

  if (filters.maxExperience !== undefined) {
    filtered = filtered.filter(c => c.experienceYears <= filters.maxExperience!)
  }

  return filtered
}

/**
 * Sort candidates based on selected option
 */
export function sortCandidates(
  candidates: Candidate[],
  sortBy: SortOption
): Candidate[] {
  const sorted = [...candidates]

  switch (sortBy) {
    case 'relevance':
      return sorted.sort((a, b) => b.score - a.score)
    
    case 'experience-high':
      return sorted.sort((a, b) => b.experienceYears - a.experienceYears)
    
    case 'experience-low':
      return sorted.sort((a, b) => a.experienceYears - b.experienceYears)
    
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
    
    default:
      return sorted
  }
}

/**
 * Extract keywords from natural language query
 */
function extractKeywords(query: string): string[] {
  // Remove common words
  const stopWords = [
    'find', 'me', 'a', 'an', 'the', 'in', 'at', 'for', 'with', 'who', 'has',
    'have', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'and', 'or',
    'but', 'if', 'then', 'else', 'when', 'where', 'how', 'what', 'which',
  ]

  const words = query
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 2 && !stopWords.includes(word))

  return words
}

/**
 * Extract structured search criteria from natural language query
 * This simulates AI understanding of the query
 */
export function extractSearchCriteria(query: string): SearchFilters {
  const lowerQuery = query.toLowerCase()
  const criteria: SearchFilters = {}

  // Extract job titles
  const jobTitleKeywords = [
    'engineer', 'manager', 'director', 'developer', 'designer', 'analyst',
    'architect', 'consultant', 'specialist', 'lead', 'senior', 'junior',
    'mechanical', 'software', 'product', 'project', 'sales', 'marketing',
  ]
  const foundTitles = jobTitleKeywords.filter(keyword => lowerQuery.includes(keyword))
  if (foundTitles.length > 0) {
    criteria.jobTitles = foundTitles
  }

  // Extract industries
  const industryKeywords = [
    'mining', 'technology', 'software', 'finance', 'healthcare', 'retail',
    'manufacturing', 'construction', 'education', 'saas', 'fintech',
  ]
  const foundIndustries = industryKeywords.filter(keyword => lowerQuery.includes(keyword))
  if (foundIndustries.length > 0) {
    criteria.industries = foundIndustries
  }

  // Extract locations/countries
  const locationKeywords = [
    'australia', 'sydney', 'melbourne', 'brisbane', 'perth',
    'usa', 'san francisco', 'new york', 'seattle', 'boston',
    'uk', 'london', 'canada', 'toronto', 'vancouver',
  ]
  const foundLocations = locationKeywords.filter(keyword => lowerQuery.includes(keyword))
  if (foundLocations.length > 0) {
    criteria.locations = foundLocations
  }

  // Extract companies
  const companyKeywords = [
    'google', 'meta', 'amazon', 'microsoft', 'apple',
    'bhp', 'rio tinto', 'fortescue', 'newcrest',
    'goldman sachs', 'jp morgan', 'mckinsey', 'bcg',
  ]
  const foundCompanies = companyKeywords.filter(keyword => lowerQuery.includes(keyword))
  if (foundCompanies.length > 0) {
    criteria.companies = foundCompanies
  }

  // Extract skills
  const skillKeywords = [
    'python', 'javascript', 'react', 'node', 'aws', 'docker',
    'cad', 'autocad', 'solidworks', 'machine learning', 'ai',
  ]
  const foundSkills = skillKeywords.filter(keyword => lowerQuery.includes(keyword))
  if (foundSkills.length > 0) {
    criteria.skills = foundSkills
  }

  // Extract experience requirements
  const experienceMatch = lowerQuery.match(/(\d+)\+?\s*years?/)
  if (experienceMatch) {
    criteria.minExperience = parseInt(experienceMatch[1])
  }

  return criteria
}

/**
 * Get candidate by ID
 */
export function getCandidateById(id: string): Candidate | undefined {
  return MOCK_CANDIDATES.find(c => c.id === id)
}

/**
 * Get multiple candidates by IDs
 */
export function getCandidatesByIds(ids: string[]): Candidate[] {
  return MOCK_CANDIDATES.filter(c => ids.includes(c.id))
}

/**
 * Reveal contact information for a candidate (costs credits)
 */
export function revealContact(candidateId: string): Candidate | undefined {
  const candidate = getCandidateById(candidateId)
  if (candidate) {
    candidate.isContactRevealed = true
  }
  return candidate
}

/**
 * Get suggested companies based on industry
 */
export function getSuggestedCompanies(industry: string): string[] {
  const industryCompanies: Record<string, string[]> = {
    mining: ['BHP', 'Rio Tinto', 'Fortescue Metals', 'Newcrest Mining', 'South32', 'Glencore', 'Anglo American', 'Newmont', 'Evolution Mining', 'Northern Star Resources', 'Gold Fields', 'OZ Minerals', 'IGO Limited', 'Mineral Resources'],
    technology: ['Google', 'Meta', 'Amazon', 'Microsoft', 'Apple', 'Netflix', 'Uber', 'Airbnb', 'Stripe', 'Shopify'],
    finance: ['Goldman Sachs', 'JP Morgan', 'Morgan Stanley', 'Citigroup', 'Bank of America', 'Wells Fargo', 'HSBC', 'Barclays'],
    consulting: ['McKinsey', 'BCG', 'Bain', 'Deloitte', 'PwC', 'EY', 'KPMG', 'Accenture'],
  }

  const key = industry.toLowerCase()
  return industryCompanies[key] || []
}

