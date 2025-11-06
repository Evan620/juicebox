# Juicebox Application - Comprehensive TODO List

## 🎯 Project Overview
Building the **Juicebox (PeopleGPT) recruiting platform frontend** with mock data, ready for Supabase + n8n integration later.

---

## ✅ COMPLETED

### Phase 0: Repository & Deployment
- [x] Initialize Git repository
- [x] Push code to GitHub (https://github.com/Evan620/juicebox)
- [x] Create comprehensive README documentation
- [x] Fix TypeScript build errors (candidateCount property)
- [x] Successful production build (21 routes, 43 files)
- [x] Deploy to Vercel (automated)

### Phase 1: Foundation & Authentication
- [x] Set up Next.js 14 project with TypeScript
- [x] Configure Tailwind CSS
- [x] Set up dark theme with ThemeProvider
- [x] Create root layout
- [x] Build login page (`/login`)
- [x] Build signup page (`/signup`)
- [x] Build email verification page (`/verify-email`)
- [x] Build organization setup page (`/setup-organization`)
- [x] Create authentication flow (login → verify → setup → dashboard)

### Phase 2: Main App Structure & Core Search
- [x] Create app layout with sidebar (`/app/(app)/layout.tsx`)
- [x] Build AppSidebar component with navigation
- [x] Build PeopleGPT search interface (`/dashboard`)
- [x] Implement ChatGPT-style conversational UI
- [x] Add search criteria extraction and display
- [x] Add mock search results display
- [x] Add profile cards in results
- [x] Add credits display in header

### Phase 3: Mock Data & Enhanced Search
- [x] Create mock data utilities (`/lib/mockData.ts`)
  - [x] Generate realistic candidate profiles (200 profiles)
  - [x] Generate companies data
  - [x] Generate skills/technologies data![alt text](image.png)
  - [x] Generate locations data
  - [x] Create search filtering logic
- [x] Enhance search results
  - [x] Add sorting options (relevance, experience, location)
  - [x] Integrate real mock data into search
  - [ ] Add pagination
  - [ ] Add filtering sidebar (location, experience, skills)
  - [ ] Add "Load more" functionality
- [x] Build profile detail page (`/dashboard/profile/[id]`)
  - [x] Full profile view with all details
  - [x] Work history timeline
  - [x] Education section
  - [x] Skills section
  - [x] Contact reveal button (uses credits)
  - [x] Add to shortlist button
  - [x] Send email button
- [x] Build profile components
  - [x] ProfileCard component (compact view)
  - [x] ProfileDetail component (full view)
  - [x] ContactReveal component

### Phase 4: Shortlists Management
- [x] Create shortlists page (`/shortlists`)
  - [x] Grid view of all shortlists
  - [x] Create new shortlist button
  - [x] Shortlist cards with candidate count
  - [x] Search shortlists
- [x] Create shortlist detail page (`/shortlists/[id]`)
  - [x] List of candidates in shortlist
  - [x] Search within shortlist
  - [x] Bulk actions (export, email, share)
  - [x] Shortlist notes/description
- [x] Build shortlist components (integrated into pages)
- [ ] Add shortlist functionality to search
  - [ ] "Add to shortlist" button on profile cards
  - [ ] Bulk add to shortlist from search results
  - [ ] Quick create shortlist from search

### Phase 5: Email Sequences (Viewing)
- [x] Create sequences page (`/sequences`)
  - [x] Welcome screen with purple gradient
  - [x] "Start from scratch" and "Clone" options
  - [x] 4 sequence templates with icons and metadata
  - [x] Template cards (Multi-channel, Focused, Cold, Re-engagement)
  - [x] Hover effects and professional styling
  - [x] Create new sequence button
  - [x] View Analytics button with NEW badge
- [ ] Create sequence builder (`/sequences/new`)
  - [ ] Sequence name and description
  - [ ] Email template editor
  - [ ] Add multiple email steps
  - [ ] Set delays between emails
  - [ ] Add personalization tokens
  - [ ] Preview emails
- [ ] Create sequence detail page (`/sequences/[id]`)
  - [ ] Sequence overview and stats
  - [ ] Email templates list
  - [ ] Recipients list
  - [ ] Analytics (sent, opened, clicked, replied)
  - [ ] Reply management
  - [ ] Pause/resume/stop sequence

### Phase 6: Placeholder Pages
- [x] Create contacts page (`/contacts`) - placeholder
- [x] Create autopilot page (`/autopilot`) - placeholder
- [x] Create agents page (`/agents`) - placeholder
- [x] Create exports page (`/exports`) - placeholder

### Phase 7: UI Overhaul - Light Theme v2.0
- [x] Create light theme color palette
- [x] Build AppSidebarLight component
- [x] Build RightSidebar component with promotional cards
- [x] Create StatusBadge component
- [x] Create ProgressIndicator component
- [x] Create AvatarStack component
- [x] Create 3-column layout (app-light)
- [x] Build Projects page with table layout
- [x] Update theme system to support light/dark
- [x] Update documentation

---

## 📋 TODO - UPCOMING PHASES

### Phase 8: Migrate Pages to Light Theme
- [x] Update Dashboard/Search page to table layout
- [x] Update Shortlists page to table layout
- [x] Update Sequences page to table layout
- [x] Update main app layout to use light theme globally
- [x] Remove old dark theme components
- [x] Update Contacts page to light theme
- [x] Update Autopilot page to light theme
- [x] Update Agents page to light theme
- [x] Update Exports page to light theme
- [ ] Update Settings pages to light theme
- [ ] Add theme toggle functionality (optional)

### Phase 9: Autopilot (Batch Evaluation)
- [ ] Create autopilot setup flow
  - [ ] Define evaluation criteria
  - [ ] Select candidate pool
  - [ ] Configure AI evaluation parameters
  - [ ] Review and launch
- [ ] Create autopilot results page
  - [ ] Ranked candidates
  - [ ] AI evaluation scores
  - [ ] Evaluation reasoning
  - [ ] Accept/reject candidates
  - [ ] Export to shortlist
- [ ] Build autopilot components
  - [ ] AutopilotCard component
  - [ ] CriteriaBuilder component
  - [ ] EvaluationResults component
  - [ ] RankingDisplay component

### Phase 8: Sequence Builder & Detail
- [ ] Create sequence builder (`/sequences/new`)
  - [ ] Sequence name and description
  - [ ] Email template editor
  - [ ] Add multiple email steps
  - [ ] Set delays between emails
  - [ ] Add personalization tokens
  - [ ] Preview emails
- [ ] Create sequence detail page (`/sequences/[id]`)
  - [ ] Sequence overview and stats
  - [ ] Email templates list
  - [ ] Recipients list
  - [ ] Analytics (sent, opened, clicked, replied)
  - [ ] Reply management
  - [ ] Pause/resume/stop sequence
- [ ] Build sequence components
  - [ ] EmailEditor component
  - [ ] SequenceBuilder component
  - [ ] PersonalizationTokens component

### Phase 9: Contacts Management
- [ ] Create contacts page (`/contacts`)
  - [ ] Contacts table/grid view
  - [ ] Search and filter contacts
  - [ ] Import contacts
  - [ ] Export contacts
  - [ ] Bulk actions
- [ ] Create contact detail page (`/contacts/[id]`)
  - [ ] Contact information
  - [ ] Communication history
  - [ ] Notes and tags
  - [ ] Associated shortlists
  - [ ] Email sequences they're in
  - [ ] Activity timeline
- [ ] Build contact components
  - [ ] ContactCard component
  - [ ] ContactTable component
  - [ ] ContactDetail component
  - [ ] ActivityTimeline component
  - [ ] NotesSection component

### Phase 10: Exports & Integrations
- [ ] Create exports page (`/exports`)
  - [ ] Export history
  - [ ] Create new export
  - [ ] Export templates
  - [ ] Download exports
- [ ] Build export functionality
  - [ ] CSV export
  - [ ] Custom field selection
  - [ ] Export from search results
  - [ ] Export from shortlists
  - [ ] Bulk export
- [ ] Create integrations page (`/exports/integrations`)
  - [ ] List of available integrations
  - [ ] ATS integrations (41 options)
  - [ ] CRM integrations (21 options)
  - [ ] Connect/disconnect integrations
  - [ ] Integration settings
- [ ] Build export components
  - [ ] ExportBuilder component
  - [ ] FieldSelector component
  - [ ] ExportHistory component
  - [ ] IntegrationCard component

### Phase 11: Agents (AI Automation)
- [ ] Create agents page (`/agents`)
  - [ ] List of agents
  - [ ] Create new agent button
  - [ ] Agent cards with status
  - [ ] Agent templates
- [ ] Create agent builder (`/agents/new`)
  - [ ] Agent name and description
  - [ ] Define agent goals
  - [ ] Set automation rules
  - [ ] Configure triggers
  - [ ] Set limits and constraints
- [ ] Create agent detail page (`/agents/[id]`)
  - [ ] Agent overview
  - [ ] Activity log
  - [ ] Performance metrics
  - [ ] Pause/resume/stop agent
  - [ ] Edit agent settings
- [ ] Build agent components
  - [ ] AgentCard component
  - [ ] AgentBuilder component
  - [ ] AgentActivityLog component
  - [ ] AgentMetrics component

### Phase 12: Settings & Account Management
- [ ] Create settings layout (`/settings/layout.tsx`)
  - [ ] Settings sidebar navigation
  - [ ] Settings sections
- [ ] Account settings (`/settings/account`)
  - [ ] Profile information
  - [ ] Email settings
  - [ ] Email signature editor
  - [ ] Notification preferences
  - [ ] Password/security
- [ ] Organization settings (`/settings/organization`)
  - [ ] Organization name and details
  - [ ] Organization logo
  - [ ] Do-Not-Contact (DNC) list
  - [ ] Auto-exclude settings
- [ ] Team management (`/settings/team`)
  - [ ] Team members list
  - [ ] Invite team members
  - [ ] Set permissions (Full Access / View Only)
  - [ ] Remove team members
- [ ] Credits management (`/settings/credits`)
  - [ ] Credits overview
  - [ ] Contact credits
  - [ ] Export credits
  - [ ] Request more credits
  - [ ] Credits usage history
- [ ] Billing settings (`/settings/billing`)
  - [ ] Current plan
  - [ ] Upgrade/downgrade plan
  - [ ] Payment method
  - [ ] Billing history
  - [ ] Cancel subscription
- [ ] Integrations settings (`/settings/integrations`)
  - [ ] Connected integrations
  - [ ] Email signatures
  - [ ] API keys
  - [ ] Webhooks

### Phase 13: Polish & Enhancements
- [ ] Add loading states everywhere
- [ ] Add error states and error handling
- [ ] Add empty states with helpful messages
- [ ] Add success/error toast notifications
- [ ] Add keyboard shortcuts
- [ ] Add search functionality in sidebar
- [ ] Add global command palette (⌘K)
- [ ] Add onboarding tour for new users
- [ ] Add help tooltips
- [ ] Optimize performance
- [ ] Add animations and transitions
- [ ] Mobile responsive improvements
- [ ] Accessibility improvements (ARIA labels, keyboard navigation)

### Phase 14: Testing & Documentation
- [ ] Write component tests
- [ ] Write integration tests
- [ ] Write E2E tests
- [ ] Create component documentation
- [ ] Create API documentation (for future backend)
- [ ] Create user guide
- [ ] Create developer guide

---

## 🎯 IMMEDIATE NEXT STEPS (Priority Order)

### 1. Settings Pages (NEXT - High Priority!)
- [ ] Create settings layout with sidebar navigation
- [ ] Build account settings page
- [ ] Build organization settings page
- [ ] Build team management page
- [ ] Build credits management page
- [ ] Build billing settings page

### 2. Sequence Builder & Detail
- [ ] Create sequence builder (`/sequences/new`)
- [ ] Build email template editor
- [ ] Add personalization tokens
- [ ] Create sequence detail page with full analytics

### 3. Autopilot Builder
- [ ] Create autopilot setup flow
- [ ] Build criteria builder
- [ ] Create autopilot results page
- [ ] Add AI evaluation display

### 4. Enhanced Shortlist Features
- [ ] Add "Add to shortlist" from profile pages
- [ ] Add "Create shortlist" modal
- [ ] Add bulk actions functionality
- [ ] Add share shortlist feature

### 5. Polish & UX Improvements
- [ ] Add loading states everywhere
- [ ] Add error handling and error states
- [ ] Add toast notifications
- [ ] Add confirmation modals
- [ ] Add keyboard shortcuts
- [ ] Add command palette (⌘K)

---

## 📊 Progress Tracking

**Overall Progress:** 70% Complete

- ✅ Phase 0: Repository & Deployment (100%)
- ✅ Phase 1: Foundation & Auth (100%)
- ✅ Phase 2: Core Search (100%)
- ✅ Phase 3: Mock Data & Enhanced Search (90%)
- ✅ Phase 4: Shortlists (80%)
- ✅ Phase 5: Email Sequences - Welcome Screen (100%)
- ✅ Phase 6: Placeholder Pages (100%)
- ✅ Phase 7: UI Overhaul - Light Theme v2.0 (100%)
- ✅ Phase 8: Migrate Pages to Light Theme (100%)
- ✅ Phase 9: Sidebar & Navigation (100%)
- ✅ Phase 10: Usage & Integrations Pages (100%)
- ✅ Phase 11: Settings & Support Pages (100%)
- ✅ Phase 12: Agents Page (100%)
- ⏳ Phase 13: Autopilot Builder (0%)
- ⏳ Phase 14: Sequence Builder & Detail (0%)
- ⏳ Phase 15: Polish & Interactivity (0%)
- ⏳ Phase 16: Testing (0%)

---

## 🎨 Design System TODO
- [ ] Create reusable UI components library
  - [ ] Button variants
  - [ ] Input components
  - [ ] Card components
  - [ ] Modal/Dialog components
  - [ ] Dropdown components
  - [ ] Table components
  - [ ] Badge/Tag components
  - [ ] Avatar components
  - [ ] Loading spinners
  - [ ] Empty states
  - [ ] Error states

---

## 🔧 Technical Debt & Improvements
- [ ] Set up proper TypeScript types for all data models
- [ ] Create context providers for global state
- [ ] Set up React Query for data fetching (when backend ready)
- [ ] Add form validation with Zod
- [ ] Add proper error boundaries
- [ ] Set up logging system
- [ ] Add analytics tracking
- [ ] Optimize bundle size
- [ ] Add service worker for offline support
- [ ] Set up CI/CD pipeline

---

**Last Updated:** 2025-11-06
**Current Phase:** Phase 13 - Advanced Features (Autopilot, Sequence Builder)
**Next Milestone:** Build interactive features and advanced functionality
**Recent Achievement:** ✅ Successfully Pushed to GitHub & Deployed! 🎉

---

## 🚀 Deployment Status

### GitHub Repository
- **URL:** https://github.com/Evan620/juicebox
- **Branch:** main
- **Latest Commit:** c41a335 (fix: Add candidateCount property to Shortlist type)
- **Total Commits:** 3
- **Files:** 43 files, 11,290+ lines of code

### Vercel Deployment
- **Status:** ✅ Deployed (automated from GitHub)
- **Build:** Successful (21 routes generated)
- **Environment:** Production

### Recent Commits
1. **c5c16b6** - Initial commit: Juicebox recruiting platform with sequences welcome page
2. **cce578d** - docs: Update README with comprehensive project documentation
3. **c41a335** - fix: Add candidateCount property to Shortlist type

