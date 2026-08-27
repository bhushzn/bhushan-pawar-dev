# Portfolio — Remaining Work Plan

## Current state (done)
- Dark futuristic theme, tokens, glass/glow utilities (`src/styles.css`)
- Navbar (sticky glass, mobile menu, Resume button)
- Hero with interactive Developer ID card + 3D tilt
- TechMarquee, AnimatedBackground, CursorGlow, ScrollProgress
- About section with scroll timeline
- Projects grid: filters (Web/AI/Web3/Blockchain), accessible ProjectModal (focus trap, ARIA, Escape), hash deep links, reduced-motion fallbacks, responsive modal
- LoadingScreen + SignatureTransition components exist but are **not yet mounted** in `src/routes/index.tsx`

---

## Phase 1 — Finish remaining sections
1. **Skills Toolkit** (`src/components/portfolio/Skills.tsx`)
   - Render `SKILL_GROUPS` from `src/data/portfolio.ts` (Frontend, Programming, AI, Tools, Design, Exploring)
   - Grouped cards or marquee rows with hover states; "EXPLORING" group also feeds a dedicated strip from `EXPLORING`
2. **Journey timeline** (`src/components/portfolio/Journey.tsx`)
   - Vertical timeline from `JOURNEY` data, scroll-reveal, alternating sides on desktop, single column on mobile
3. **Achievements** (`src/components/portfolio/Achievements.tsx`)
   - Cards from `ACHIEVEMENTS` (map `icon` string → lucide icon)
4. **Contact** (`src/components/portfolio/Contact.tsx`)
   - Email CTA (mailto once real address is set), GitHub/LinkedIn links, location
   - Optional: working contact form (needs Lovable Cloud or a form endpoint like Formspree)
5. **Footer** (`src/components/portfolio/Footer.tsx`)
   - Copyright, quick nav links, social icons, "back to top"
6. **Mount everything in `src/routes/index.tsx`**
   - Add `<LoadingScreen />`, `<SignatureTransition />`, `<Skills />`, `<Journey />`, `<Achievements />`, `<Contact />`, `<Footer />` in the intended scroll order

## Phase 2 — Replace placeholders with your real details
All in `src/data/portfolio.ts` (single source of truth):
- `emailPlaceholder` → your real email
- `resumeUrl` → drop your PDF in `public/` (e.g. `/resume.pdf`) and update
- Project links: replace `"#"` with real live demo / GitHub repo URLs per project
- `detail` blocks in `PROJECTS`: expand overview/problem/solution/architecture/status with real write-ups
- `ACHIEVEMENTS`: replace editable placeholder text (Integrity Award, NCC, Speaker) with confirmed details
- Optional: real screenshots per project (add `image` field to `Project` type, render in `ProjectCard`/`ProjectModal` instead of the stylized mock preview)

## Phase 3 — Polish & ship
- SEO/OG: add a real `og-image.jpg` in `public/`, wire it into `head()` in `src/routes/index.tsx`; add JSON-LD Person schema
- Favicon: replace `public/favicon.ico` with a custom "BP" mark
- Final a11y pass: keyboard tab order across new sections, heading hierarchy, focus states
- Performance pass: lazy-load heavy sections, check Lighthouse
- Cross-browser check (Safari especially for backdrop-blur/scroll effects)
- Publish

## Notes for Antigravity
- Stack: TanStack Start v1 + React 19 + Tailwind v4 + framer-motion
- All content lives in `src/data/portfolio.ts` — editing that file updates every section
- Reusable animation primitives in `src/components/portfolio/primitives.tsx` (Reveal, Tilt, MagneticLink)
- Keep reduced-motion gating pattern: `const reduce = useReducedMotion()` then `style={reduce ? {} : { y }}`
