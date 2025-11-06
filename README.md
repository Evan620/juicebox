# Juicebox - AI-Powered Recruiting Platform

A complete recruiting platform clone built with Next.js 14, TypeScript, and Tailwind CSS, replicating the Juicebox (PeopleGPT) recruiting application.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling with Juicebox design system
- **12 Core Pages** - Dashboard, Sequences, Shortlists, Agents, and more
- **Responsive Design** - Mobile-first approach
- **Interactive UI** - Hover effects, transitions, and animations
- **Mock Data** - Realistic candidate and sequence data
- **Authentication Flow** - Login, signup, email verification
- **Light Theme** - Professional Juicebox-inspired design

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/Evan620/juicebox.git
cd juicebox/juicebox-docs-nextjs

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
juicebox-docs-nextjs/
├── app/                          # Next.js App Router
│   ├── (app)/                   # Main application routes
│   │   ├── agents/              # AI Agents page
│   │   ├── autopilot/           # Autopilot evaluation
│   │   ├── contacts/            # Contact management
│   │   ├── dashboard/           # Main dashboard & search
│   │   ├── exports/             # Export management
│   │   ├── integrations/        # Integration marketplace
│   │   ├── sequences/           # Email sequences (NEW!)
│   │   ├── settings/            # Settings page
│   │   ├── shortlists/          # Shortlist management
│   │   ├── support/             # Support resources
│   │   ├── usage/               # Usage & credits tracking
│   │   └── layout.tsx           # App layout with sidebar
│   ├── (auth)/                  # Authentication routes
│   │   ├── login/               # Login page
│   │   ├── signup/              # Signup page
│   │   ├── verify-email/        # Email verification
│   │   └── setup-organization/  # Organization setup
│   ├── account/                 # Account management
│   │   └── credits/             # Credits page
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Landing page
│   └── globals.css              # Global styles
├── components/                   # Reusable components
│   ├── AppSidebarLight.tsx      # Main sidebar navigation
│   ├── RightSidebar.tsx         # Right sidebar with AI agent
│   ├── Navigation.tsx           # Top navigation
│   ├── SearchBar.tsx            # Search component
│   ├── ProfileCard.tsx          # Candidate profile card
│   ├── StatusBadge.tsx          # Status badge component
│   ├── AvatarStack.tsx          # Avatar stack component
│   ├── ProgressIndicator.tsx    # Progress indicator
│   ├── ThemeProvider.tsx        # Theme provider
│   └── ThemeToggle.tsx          # Theme toggle
├── lib/                         # Utility functions
│   ├── mockData.ts              # Mock data (candidates, sequences, etc.)
│   └── searchUtils.ts           # Search utilities
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript config
├── tailwind.config.ts           # Tailwind config
└── next.config.js               # Next.js config
```

## 📚 Pages & Features

### 🏠 Landing Page
- Hero section with CTA
- Feature highlights
- Pricing information

### 🔐 Authentication Flow
- **Login** - Email/password authentication
- **Signup** - Account creation
- **Email Verification** - Verification code input
- **Organization Setup** - 3-step onboarding

### 📊 Dashboard (Search)
- Candidate search with AI filters
- Table view with candidate profiles
- Profile cards with details
- Export functionality
- Shortlist management

### 📋 Shortlists
- Shortlist creation and management
- Candidate organization
- Status tracking
- Bulk actions

### ✉️ Email Sequences (NEW!)
- **Welcome Screen** with templates
- 4 pre-built sequence templates:
  - Multi-channel outreach (AE)
  - Focused outreach (SWE)
  - Cold outreach (HR)
  - Re-engagement (Marketing)
- Start from scratch option
- Clone existing sequences
- Template metadata (steps, days)

### 🤖 Agents
- AI agent cards
- Agent goals and pipelines
- Evaluation criteria
- Feedback system

### 👥 Contacts
- Contact management
- Contact details
- Communication history

### 🚀 Autopilot
- AI-powered evaluation
- Automated candidate screening

### 📤 Exports
- Export management
- CSV downloads
- Integration sync

### 🔌 Integrations
- Integration marketplace
- 12+ ATS/CRM integrations
- Connection status
- Filter by category

### 📈 Usage
- Credit tracking
- Usage statistics
- Monthly history
- Upgrade options

### ⚙️ Settings
- Account settings
- Organization settings
- Team management
- Billing & notifications

### 💬 Support
- Documentation links
- Live chat
- Email support
- FAQ section

## 🎨 Design System

### Colors
The application uses the Juicebox color palette:

```typescript
// Primary Colors
Primary Purple: #6366F1
Secondary Purple: #8B5CF6
Light Purple: #F0F0FF

// Text Colors
Primary Text: #1A1A1A
Secondary Text: #666666
Tertiary Text: #999999

// UI Colors
Border: #E5E5E5
Background: #FAFAFA
White: #FFFFFF
```

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, 24-32px
- **Body**: Regular, 14-16px
- **Small Text**: 12-13px

### Components
- **Buttons**: Rounded corners (8px), hover effects
- **Cards**: White background, border, shadow on hover
- **Inputs**: Border focus states with purple ring
- **Badges**: Rounded full, colored backgrounds

## 🔍 Key Features

### Sidebar Navigation
- Project dropdown with search
- Always-visible navigation items
- Active state highlighting
- Hover effects

### Email Sequences Welcome Screen
- Purple gradient header
- Template selection cards
- Hover effects (border → purple, shadow appears)
- Icon system (Mail, LinkedIn)
- Metadata display (steps, days)

### Mock Data
- 100+ candidate profiles
- Realistic company and location data
- Email sequences with stats
- Shortlists with candidates

### Responsive Design
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Flexible layouts
- Touch-friendly interactions

## 📸 Screenshots

### Email Sequences Welcome Screen
![Sequences Page](https://github.com/Evan620/juicebox/blob/main/screenshots/sequences.png)

### Dashboard
![Dashboard](https://github.com/Evan620/juicebox/blob/main/screenshots/dashboard.png)

### Agents Page
![Agents](https://github.com/Evan620/juicebox/blob/main/screenshots/agents.png)

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

Build the static site:

```bash
npm run build
npm run start
```

## 🛠️ Development

### Adding New Pages

1. Create a new folder in `app/(app)/` for your page
2. Add a `page.tsx` file with your content
3. Update sidebar navigation in `components/AppSidebarLight.tsx`
4. Add mock data to `lib/mockData.ts` if needed

Example:

```typescript
// app/(app)/new-page/page.tsx
'use client'

export default function NewPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="bg-white border-b border-[#E5E5E5] px-8 py-6">
        <h1 className="text-2xl font-bold text-[#1A1A1A]">New Page</h1>
      </div>
      <div className="px-8 py-6">
        {/* Content here */}
      </div>
    </div>
  )
}
```

### Adding Mock Data

```typescript
// lib/mockData.ts
export const MOCK_NEW_DATA = [
  {
    id: '1',
    name: 'Example',
    // ... other fields
  }
]
```

## 🧪 Testing

```bash
# Run type checking
npm run type-check

# Run linting
npm run lint

# Run build
npm run build
```

## 🎯 Roadmap

### Phase 1: Core Pages ✅ (Complete)
- [x] Landing page
- [x] Authentication flow
- [x] Dashboard/Search
- [x] Shortlists
- [x] Sequences welcome screen
- [x] Agents
- [x] Contacts
- [x] Autopilot
- [x] Exports
- [x] Integrations
- [x] Usage
- [x] Settings
- [x] Support

### Phase 2: Sequence Builder (Next)
- [ ] Sequence creation flow
- [ ] Email template editor
- [ ] Step configuration
- [ ] Preview functionality
- [ ] Save and publish

### Phase 3: Interactivity
- [ ] Click handlers for all buttons
- [ ] Modal dialogs
- [ ] Form submissions
- [ ] Loading states
- [ ] Error handling

### Phase 4: Backend Integration
- [ ] Supabase setup
- [ ] Authentication
- [ ] Database schema
- [ ] API routes
- [ ] Real-time updates

### Phase 5: Testing & Polish
- [ ] Unit tests
- [ ] Integration tests
- [ ] E2E tests
- [ ] Performance optimization
- [ ] Accessibility improvements

## 📄 License

MIT License - feel free to use this for your own projects.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For questions or issues, please open an issue on GitHub.

---

**Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS**

**Repository:** https://github.com/Evan620/juicebox
**Author:** Evan Ogero

