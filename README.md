# Rohit Shenvi Diwadkar — Portfolio

## Stack Decision & Rationale

| Choice | Why |
|--------|-----|
| **Next.js 15 App Router** | Best-in-class SEO via server components, file-based routing for the blog at `/blog/[slug]`, static generation for fast loads, and the widest deployment target coverage (Vercel, Netlify, GitHub Pages via export). |
| **TypeScript** | End-to-end type safety across data models (blog posts, projects, experience). |
| **Tailwind CSS v3** | Utility-first styling with a `class`-based dark mode strategy — no runtime style injection, no flash of wrong theme. |
| **Framer Motion** | Scroll-triggered animations (`whileInView`), stagger reveals, the hero role rotator (`AnimatePresence`), and count-up counters — all tree-shakeable. |
| **next-themes** | Handles the dark/light toggle with `localStorage` persistence and `suppressHydrationWarning` on `<html>` — zero flash of unstyled content. |
| **next-mdx-remote/rsc** | MDX files live in `/content/blog/` (not the `/app` directory), which keeps content separate from routes. The `/rsc` export renders MDX fully server-side in App Router — no client bundle cost. |
| **gray-matter** | Parses MDX frontmatter (title, date, excerpt, tags) into typed objects. |
| **rehype-highlight** | Syntax highlighting for code blocks using a bundled GitHub Dark theme (no external CSS CDN needed). |
| **rehype-slug + rehype-autolink-headings** | Auto-generates IDs on headings so the floating TOC can link to them. |
| **remark-gfm** | GitHub Flavored Markdown: tables, strikethrough, task lists. |
| **lucide-react** | Lightweight, consistent icon set — tree-shaken per import. |
| **@tailwindcss/typography** | Applies beautiful `prose` styles to MDX-rendered blog content. |
| **clsx + tailwind-merge** | Clean conditional class composition without specificity conflicts. |

**Deployment:** Runs on Vercel without any platform-specific APIs or config. For Netlify, add `netlify.toml` with `publish = ".next"` and `command = "npm run build"`.

---

## Project Structure

```
/app
  layout.tsx              # Root layout: fonts, metadata, ThemeProvider, Navbar
  page.tsx                # Home: all sections composed here
  globals.css             # Tailwind base + hljs theme + prose overrides
  /blog
    page.tsx              # Blog index
    /[slug]/page.tsx      # Individual post with TOC

/components
  Navbar.tsx              # Sticky nav, mobile drawer, active section tracking
  Hero.tsx                # Full-height hero, role rotator, dot grid
  About.tsx               # Bio + animated stat cards
  Skills.tsx              # Grouped pill badges, 6 categories
  Experience.tsx          # Alternating timeline
  Projects.tsx            # Card grid → modal
  ProjectModal.tsx        # Portal-based modal with chart placeholder
  BlogPreview.tsx         # 2-post strip on home page
  TableOfContents.tsx     # Floating TOC with IntersectionObserver
  Contact.tsx             # Form → mailto:, social links
  Footer.tsx
  Providers.tsx           # next-themes ThemeProvider wrapper
  ThemeToggle.tsx         # Sun/Moon toggle button
  AnimatedCounter.tsx     # Count-up animation on scroll

/content/blog
  why-last-touch-attribution-is-lying-to-you.mdx
  how-to-make-dashboards-executives-actually-use.mdx

/lib
  mdx.ts                  # getAllPosts(), getPost() — server-side fs reads
  utils.ts                # cn(), formatDate(), slugify(), extractHeadings()

/types
  index.ts                # BlogPost, Project, ExperienceItem, Heading, etc.

/public
  resume.pdf              # Add your resume here
  og-image.png            # Add OG image (1200×630)
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for Production

```bash
npm run build
npm start
```

## Deploy

**Vercel:** Connect the repo. Zero config needed.

**Netlify:** Connect the repo. Build command: `npm run build`. Publish dir: `.next`.

---

## Customization Checklist

- [ ] Replace `public/resume.pdf` with your actual resume
- [ ] Replace `public/og-image.png` with a 1200×630 OG image
- [ ] Update LinkedIn and GitHub URLs in `Contact.tsx` and `Footer.tsx`
- [ ] Fill in experience bullet points in `Experience.tsx`
- [ ] Add full case study write-ups in each project's `detail` field in `Projects.tsx`
- [ ] Adjust stat numbers in `About.tsx` as needed
- [ ] Add new blog posts to `/content/blog/` as `.mdx` files with frontmatter
