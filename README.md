# Juicebox Documentation Site

A modern documentation website built with Next.js 14, TypeScript, and Tailwind CSS, based on the Juicebox (PeopleGPT) platform documentation.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Meta tags, sitemap, and structured data
- **Fast Performance** - Static generation and optimized images
- **Search Functionality** - Built-in documentation search
- **Dark Mode** - Theme toggle support

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🛠️ Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd juicebox-docs-nextjs

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
juicebox-docs-nextjs/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── getting-started/     # Getting started section
│   ├── search/              # Search & Prompt section
│   ├── agents/              # Agents section
│   ├── shortlist/           # Shortlist section
│   ├── sequences/           # Email sequences section
│   ├── contacts/            # Contacts section
│   ├── exports/             # Exports & Integrations
│   └── organization/        # Organization features
├── components/              # Reusable components
│   ├── Navigation.tsx       # Main navigation
│   ├── Sidebar.tsx          # Documentation sidebar
│   ├── SearchBar.tsx        # Search component
│   └── ThemeToggle.tsx      # Dark mode toggle
├── lib/                     # Utility functions
│   └── docs.ts              # Documentation utilities
├── public/                  # Static assets
│   ├── images/              # Images
│   └── icons/               # Icons
├── styles/                  # Global styles
│   └── globals.css          # Global CSS
├── types/                   # TypeScript types
│   └── index.ts             # Type definitions
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── tailwind.config.ts       # Tailwind config
└── next.config.js           # Next.js config
```

## 📚 Documentation Sections

### Getting Started
- Account creation and setup
- Email verification
- Organization setup

### Account Management
- Account settings
- Email configuration
- Team management
- Billing and plans

### Credits System
- Contact credits
- Export credits
- Credit usage monitoring

### Search & Prompt
- The Method (2-step search process)
- AI Filters
- Autopilot evaluation
- Profile view
- Search library

### Agents
- Juicebox Agents automation

### Shortlist
- Profile management
- Status tracking
- Smart reports
- Review requests

### Email Sequences
- Sequence creation
- Profile addition
- Tracking and analytics
- Reply optimization
- Contact data

### Contacts
- Contact management

### Exports & Integrations
- CSV exports
- ATS/CRM integrations
- Email integrations
- Chrome extension

### Organization
- Projects
- Profile hiding
- Usage analytics
- Hiring manager seats
- Data sources
- DNC list

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {...},
  secondary: {...},
}
```

### Typography
Modify fonts in `app/layout.tsx`:

```typescript
const inter = Inter({ subsets: ['latin'] })
```

### Navigation
Update navigation items in `components/Navigation.tsx`

## 🔍 Search

The search functionality is implemented using:
- Client-side search with fuzzy matching
- Indexed documentation content
- Keyboard shortcuts (Cmd/Ctrl + K)

## 🌙 Dark Mode

Dark mode is implemented using:
- `next-themes` package
- Tailwind CSS dark mode classes
- Persistent theme selection

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

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

## 📝 Adding New Documentation

1. Create a new folder in `app/` for your section
2. Add a `page.tsx` file with your content
3. Update navigation in `components/Navigation.tsx`
4. Add to search index in `lib/docs.ts`

Example:

```typescript
// app/new-section/page.tsx
export default function NewSection() {
  return (
    <div>
      <h1>New Section</h1>
      <p>Content here...</p>
    </div>
  )
}
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

## 📄 License

MIT License - feel free to use this template for your own documentation sites.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For questions or issues, please open an issue on GitHub or contact support.

---

Built with ❤️ using Next.js and Tailwind CSS

