// Mock data for the Juicebox application

export type Candidate = {
  id: string
  name: string
  title: string
  company: string
  location: string
  country: string
  experience: string
  experienceYears: number
  skills: string[]
  industries: string[]
  education: {
    degree: string
    field: string
    school: string
    year: string
  }[]
  workHistory: {
    title: string
    company: string
    duration: string
    description: string
  }[]
  email?: string
  phone?: string
  linkedin?: string
  score: number
  isContactRevealed: boolean
  summary: string
}

export type Shortlist = {
  id: string
  name: string
  description: string
  candidateIds: string[]
  createdAt: string
  updatedAt: string
  createdBy: string
}

export type EmailSequence = {
  id: string
  name: string
  status: 'draft' | 'active' | 'paused' | 'completed'
  emails: {
    id: string
    subject: string
    body: string
    delayDays: number
  }[]
  recipients: string[]
  stats: {
    sent: number
    opened: number
    clicked: number
    replied: number
  }
  createdAt: string
}

// Skills database
export const SKILLS = [
  'JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'React', 'Node.js', 'Angular', 'Vue.js',
  'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'SQL', 'MongoDB', 'PostgreSQL',
  'Machine Learning', 'Data Science', 'AI', 'Deep Learning', 'TensorFlow', 'PyTorch',
  'Project Management', 'Agile', 'Scrum', 'Leadership', 'Team Management',
  'CAD', 'AutoCAD', 'SolidWorks', 'Mechanical Design', 'Mining Equipment', 'Heavy Machinery',
  'Sales', 'Marketing', 'Business Development', 'Account Management', 'CRM',
  'Finance', 'Accounting', 'Financial Analysis', 'Excel', 'Financial Modeling',
  'HR', 'Recruiting', 'Talent Acquisition', 'Employee Relations', 'Compensation',
]

// Industries database
export const INDUSTRIES = [
  'Technology', 'Software', 'SaaS', 'E-commerce', 'Fintech', 'Healthcare', 'Biotech',
  'Mining', 'Quarrying', 'Heavy Equipment', 'Manufacturing', 'Automotive', 'Aerospace',
  'Finance', 'Banking', 'Insurance', 'Real Estate', 'Construction',
  'Retail', 'Consumer Goods', 'Food & Beverage', 'Hospitality', 'Travel',
  'Education', 'Media', 'Entertainment', 'Telecommunications', 'Energy', 'Utilities',
]

// Companies database
export const COMPANIES = {
  tech: ['Google', 'Meta', 'Amazon', 'Microsoft', 'Apple', 'Netflix', 'Uber', 'Airbnb', 'Stripe', 'Shopify'],
  mining: ['BHP', 'Rio Tinto', 'Fortescue Metals', 'Newcrest Mining', 'South32', 'Glencore', 'Anglo American', 'Newmont', 'Evolution Mining', 'Northern Star Resources'],
  finance: ['Goldman Sachs', 'JP Morgan', 'Morgan Stanley', 'Citigroup', 'Bank of America', 'Wells Fargo', 'HSBC', 'Barclays'],
  consulting: ['McKinsey', 'BCG', 'Bain', 'Deloitte', 'PwC', 'EY', 'KPMG', 'Accenture'],
}

// Locations database
export const LOCATIONS = {
  australia: ['Sydney, Australia', 'Melbourne, Australia', 'Brisbane, Australia', 'Perth, Australia', 'Adelaide, Australia'],
  usa: ['San Francisco, CA', 'New York, NY', 'Seattle, WA', 'Austin, TX', 'Boston, MA', 'Los Angeles, CA', 'Chicago, IL'],
  uk: ['London, UK', 'Manchester, UK', 'Edinburgh, UK', 'Birmingham, UK'],
  canada: ['Toronto, Canada', 'Vancouver, Canada', 'Montreal, Canada'],
}

// First names and last names for generating realistic names
const FIRST_NAMES = [
  'James', 'Sarah', 'Michael', 'Emma', 'David', 'Olivia', 'John', 'Sophia', 'Robert', 'Isabella',
  'William', 'Mia', 'Richard', 'Charlotte', 'Joseph', 'Amelia', 'Thomas', 'Harper', 'Christopher', 'Evelyn',
  'Daniel', 'Abigail', 'Matthew', 'Emily', 'Anthony', 'Elizabeth', 'Mark', 'Sofia', 'Donald', 'Avery',
  'Steven', 'Ella', 'Andrew', 'Madison', 'Joshua', 'Scarlett', 'Kevin', 'Victoria', 'Brian', 'Aria',
  'George', 'Grace', 'Edward', 'Chloe', 'Ronald', 'Camila', 'Timothy', 'Penelope', 'Jason', 'Riley',
]

const LAST_NAMES = [
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez',
  'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin',
  'Lee', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson', 'Walker',
  'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores', 'Green',
  'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell', 'Mitchell', 'Carter', 'Roberts', 'Chen',
]

// Job titles by category
const JOB_TITLES = {
  engineering: [
    'Software Engineer', 'Senior Software Engineer', 'Staff Software Engineer', 'Principal Engineer',
    'Frontend Engineer', 'Backend Engineer', 'Full Stack Engineer', 'DevOps Engineer',
    'Mechanical Engineer', 'Senior Mechanical Engineer', 'Lead Mechanical Engineer', 'Principal Mechanical Engineer',
    'Electrical Engineer', 'Civil Engineer', 'Chemical Engineer', 'Industrial Engineer',
  ],
  management: [
    'Engineering Manager', 'Senior Engineering Manager', 'Director of Engineering', 'VP of Engineering',
    'Product Manager', 'Senior Product Manager', 'Director of Product', 'VP of Product',
    'Project Manager', 'Program Manager', 'Operations Manager', 'General Manager',
  ],
  sales: [
    'Sales Representative', 'Account Executive', 'Senior Account Executive', 'Sales Manager',
    'Business Development Manager', 'VP of Sales', 'Chief Revenue Officer',
  ],
  finance: [
    'Financial Analyst', 'Senior Financial Analyst', 'Finance Manager', 'Controller',
    'CFO', 'Accountant', 'Senior Accountant', 'Financial Planning & Analysis Manager',
  ],
}

// Generate a random candidate
function generateCandidate(id: number): Candidate {
  const firstName = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)]
  const lastName = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)]
  const name = `${firstName} ${lastName}`
  
  // Pick a random job category and title
  const categories = Object.keys(JOB_TITLES) as Array<keyof typeof JOB_TITLES>
  const category = categories[Math.floor(Math.random() * categories.length)]
  const titles = JOB_TITLES[category]
  const title = titles[Math.floor(Math.random() * titles.length)]
  
  // Pick company based on category
  let companyList: string[]
  if (title.includes('Mechanical') || title.includes('Mining')) {
    companyList = COMPANIES.mining
  } else if (title.includes('Financial') || title.includes('Accountant')) {
    companyList = COMPANIES.finance
  } else {
    companyList = COMPANIES.tech
  }
  const company = companyList[Math.floor(Math.random() * companyList.length)]
  
  // Pick location
  const locationGroups = Object.values(LOCATIONS).flat()
  const location = locationGroups[Math.floor(Math.random() * locationGroups.length)]
  const country = location.split(', ')[1]
  
  // Generate experience
  const experienceYears = Math.floor(Math.random() * 20) + 1
  const experience = `${experienceYears} year${experienceYears > 1 ? 's' : ''}`
  
  // Generate skills (3-8 skills)
  const numSkills = Math.floor(Math.random() * 6) + 3
  const skills = Array.from({ length: numSkills }, () => 
    SKILLS[Math.floor(Math.random() * SKILLS.length)]
  ).filter((skill, index, self) => self.indexOf(skill) === index)
  
  // Generate industries (1-3)
  const numIndustries = Math.floor(Math.random() * 3) + 1
  const industries = Array.from({ length: numIndustries }, () =>
    INDUSTRIES[Math.floor(Math.random() * INDUSTRIES.length)]
  ).filter((industry, index, self) => self.indexOf(industry) === index)
  
  // Generate education
  const degrees = ['Bachelor of Science', 'Master of Science', 'Bachelor of Engineering', 'MBA', 'PhD']
  const fields = ['Computer Science', 'Mechanical Engineering', 'Business Administration', 'Finance', 'Electrical Engineering']
  const schools = ['MIT', 'Stanford', 'Harvard', 'UC Berkeley', 'Carnegie Mellon', 'University of Sydney', 'University of Melbourne']
  
  const education = [
    {
      degree: degrees[Math.floor(Math.random() * degrees.length)],
      field: fields[Math.floor(Math.random() * fields.length)],
      school: schools[Math.floor(Math.random() * schools.length)],
      year: String(2024 - experienceYears - Math.floor(Math.random() * 4)),
    }
  ]
  
  // Generate work history (2-4 positions)
  const numPositions = Math.min(Math.floor(experienceYears / 3) + 1, 4)
  const workHistory = Array.from({ length: numPositions }, (_, i) => ({
    title: i === 0 ? title : titles[Math.floor(Math.random() * titles.length)],
    company: i === 0 ? company : companyList[Math.floor(Math.random() * companyList.length)],
    duration: i === 0 ? `${Math.floor(Math.random() * 3) + 1} years` : `${Math.floor(Math.random() * 4) + 1} years`,
    description: `Led key initiatives and contributed to major projects in ${industries[0]}.`,
  }))
  
  // Generate score (70-99)
  const score = Math.floor(Math.random() * 30) + 70
  
  return {
    id: `candidate-${id}`,
    name,
    title,
    company,
    location,
    country,
    experience,
    experienceYears,
    skills,
    industries,
    education,
    workHistory,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${company.toLowerCase().replace(/\s+/g, '')}.com`,
    phone: `+1 ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
    linkedin: `https://linkedin.com/in/${firstName.toLowerCase()}-${lastName.toLowerCase()}`,
    score,
    isContactRevealed: false,
    summary: `Experienced ${title} with ${experience} of experience in ${industries.join(', ')}. Proven track record of delivering results at ${company}.`,
  }
}

// Generate mock candidates (200 profiles)
export const MOCK_CANDIDATES: Candidate[] = Array.from({ length: 200 }, (_, i) => generateCandidate(i + 1))

// Mock shortlists
export const MOCK_SHORTLISTS: Shortlist[] = [
  {
    id: 'shortlist-1',
    name: 'Senior Engineers - Q4 2024',
    description: 'Top senior engineering candidates for Q4 hiring',
    candidateIds: MOCK_CANDIDATES.slice(0, 15).map(c => c.id),
    createdAt: '2024-10-15T10:00:00Z',
    updatedAt: '2024-11-01T14:30:00Z',
    createdBy: 'John Doe',
  },
  {
    id: 'shortlist-2',
    name: 'Mining Industry Specialists',
    description: 'Mechanical engineers with mining experience',
    candidateIds: MOCK_CANDIDATES.filter(c => c.industries.includes('Mining')).slice(0, 12).map(c => c.id),
    createdAt: '2024-10-20T09:00:00Z',
    updatedAt: '2024-10-28T16:45:00Z',
    createdBy: 'John Doe',
  },
  {
    id: 'shortlist-3',
    name: 'Product Managers - SaaS',
    description: 'Experienced PMs from top SaaS companies',
    candidateIds: MOCK_CANDIDATES.filter(c => c.title.includes('Product')).slice(0, 10).map(c => c.id),
    createdAt: '2024-11-01T11:00:00Z',
    updatedAt: '2024-11-05T10:20:00Z',
    createdBy: 'John Doe',
  },
]

// Mock email sequences
export const MOCK_SEQUENCES: EmailSequence[] = [
  {
    id: 'sequence-1',
    name: 'Senior Engineer Outreach - Q4',
    status: 'active',
    emails: [
      {
        id: 'email-1',
        subject: 'Exciting opportunity at {{company}}',
        body: 'Hi {{firstName}},\n\nI came across your profile and was impressed by your experience at {{currentCompany}}...',
        delayDays: 0,
      },
      {
        id: 'email-2',
        subject: 'Following up on my previous email',
        body: 'Hi {{firstName}},\n\nI wanted to follow up on my previous email...',
        delayDays: 3,
      },
    ],
    recipients: MOCK_CANDIDATES.slice(0, 25).map(c => c.id),
    stats: {
      sent: 25,
      opened: 18,
      clicked: 12,
      replied: 5,
    },
    createdAt: '2024-10-15T10:00:00Z',
  },
]

