# Portfolio — CLAUDE.md

Personal analytics leader portfolio for **Rohit Shenvi Diwadkar** (GitHub: `sdrohit`).
Live dev server: `npm run dev` → http://localhost:3000
GitHub remote: https://github.com/sdrohit/my-portfolio.git

---

## Tech Stack

| Layer | Library / Tool |
|-------|---------------|
| Framework | Next.js 16 (App Router), TypeScript |
| Styling | Tailwind CSS, `@tailwindcss/typography` |
| Animation | Framer Motion |
| Markdown | `react-markdown` + `remark-gfm` |
| Theme | `next-themes` — **light mode default** (`defaultTheme="light"` in `Providers.tsx`) |
| Fonts | Inter (sans), Sora (display) via Google Fonts |
| Icons | lucide-react |

Accent colour: `#6366F1` (indigo), defined in `tailwind.config.ts` as `accent`.

---

## Project Structure

```
app/
  layout.tsx           — root layout: Navbar + Providers (theme)
  page.tsx             — home page (Hero → About → Skills → Experience → Projects → Blog → Contact)
  projects/page.tsx    — full /projects page with domain filter tabs
  blog/                — MDX blog
components/
  Hero.tsx             — hero section with domain animation
  Navbar.tsx           — RSD monogram logo, Projects links to /projects
  Projects.tsx         — 8 featured projects + CTA banner
  ProjectModal.tsx     — slide-up modal with GitHub link in header
  Experience.tsx       — vertical timeline (role/company/period/location only)
  ProjectModal.tsx
  ...
lib/
  projects.ts          — SINGLE SOURCE OF TRUTH for all 18 projects
  mdx.ts               — blog MDX helpers
types/
  index.ts             — Project, ExperienceItem, BlogPost interfaces
```

---

## Key Design Decisions

- **Navbar logo**: `RSD` monogram in a 40×40 accent-coloured button (no full name)
- **Hero**: "Expert in [domain]" animation cycling every 2.2s — 7 domains, 7+ yr chip, line grid background, soft gradient orbs
- **Profile photo**: Clean circular crop with thin gradient border and dashed decorative ring — no glow/highlights
- **Experience section**: Clean vertical timeline — no bullet points, just role/company/period/location
- **Projects on home**: 8 featured out of 18 total, with "View all 18 →" CTA at bottom
- **Card behaviour**: Cards with `githubUrl` open GitHub directly (no modal); cards without open detail modal
- **GitHub button**: Shown in modal header AND as primary CTA on cards that have a repo

---

## Project Data (`lib/projects.ts`)

All 18 projects live here. Each project has:
```ts
{
  id: string
  title: string
  area: string          // display label (e.g. 'ML & Predictive Analytics')
  domain: string        // filter key — one of the 7 below
  shortDescription: string  // keep to 1-2 lines max
  tags: string[]
  detail: string        // markdown — rendered in modal
  featured?: boolean    // true → shown on home page (8 featured total)
  githubUrl?: string    // if set → card click opens GitHub, not modal
}
```

**Domain filter values** (used on `/projects` page tabs):
`'ML & AI'` | `'Marketing'` | `'BI & Finance'` | `'Product'` | `'Sales'` | `'Experimentation'` | `'Customer'`

**Currently completed projects with GitHub repos:**
| Project | GitHub URL |
|---------|-----------|
| Buyer Propensity Scoring System | https://github.com/sdrohit/buyer-propensity-scoring |

To add a new repo: add `githubUrl: 'https://github.com/sdrohit/<repo>'` to the project entry in `lib/projects.ts`.

---

## 18 Projects — Full List

### ML & AI (4)
1. Buyer Propensity Scoring System ✅ (GitHub live)
2. Churn Prediction & Survival Analysis
3. Revenue Pipeline Forecasting Model
4. Employee Attrition Prediction

### Marketing (4)
5. Geo-Lift Incrementality Testing Framework ← **Project 2 — next to build**
6. Multi-Touch Attribution Engine
7. Customer Journey Funnel Analysis & Storytelling Report
8. Growth Analytics Initiative

### BI & Finance (3)
9. CAC / LTV & Unit Economics Analysis
10. Executive Marketing Dashboard Ecosystem
11. Self-Serve Analytics Adoption Framework

### Product (3)
12. Product-Led Growth & PQL Scoring
13. Feature Adoption & North Star Metric Framework
14. Cohort Retention Analysis

### Sales (2)
15. Win/Loss Analysis Engine
16. Sales Rep Performance & Quota Analytics

### Experimentation (1)
17. A/B Testing Framework & Statistical Power Analysis

### Customer (1)
18. Customer Segmentation & ICP Analysis

---

## What's Been Built

- [x] Hero section — domain animation, gradient orbs, line grid bg, dashed ring photo decoration
- [x] Navbar — RSD monogram, Projects → /projects
- [x] Experience section — clean vertical timeline
- [x] Home projects section — 8 featured + CTA
- [x] Full /projects page — filter tabs (All + 7 domains), 3-col grid, Featured badge
- [x] ProjectModal — markdown rendering, GitHub link in header
- [x] lib/projects.ts — all 18 projects, short punchy descriptions

## What's Next

- [ ] **Project 2: Geo-Lift Incrementality Testing Framework**
  - Separate GitHub repo: `sdrohit/geo-lift-incrementality`
  - Synthetic dataset: 50 US DMAs, 18 months weekly data, treatment/control geos
  - Techniques: matched-market pairing, DiD, synthetic control, permutation testing
  - Same notebook structure as Project 1 (markdown before/after each code cell)
- [ ] Fill in `detail` markdown for remaining 17 projects as they are built
- [ ] Add real experience bullet points to Experience section when ready

---

## Common Commands

```bash
npm run dev          # start dev server → localhost:3000
npx tsc --noEmit     # type-check without building
npm run build        # production build
git push origin main # deploy (Vercel auto-deploys on push)
```

---

## Important Rules

- **Never commit `.DS_Store`** — it's in `.gitignore` but check `git status` before staging
- **`lib/projects.ts` is the single source of truth** — never duplicate project data in components
- **Keep `shortDescription` to 1-2 lines** — cards are compact, long text breaks the layout
- **`domain` must match one of the 7 filter values exactly** — typos silently break the filter
- **`featured: true` on exactly 8 projects** — home grid is 2-col, 8 cards = 4 rows
