# Angel Touch Homecare Services Website

A modern, accessible React + Vite website for Angel Touch Homecare Services, designed for seniors, families, and healthcare professionals in Lowell, MA and surrounding areas.

## Current Feature Set
- Cohesive updated blue palette (#2991fd) with soft background (#e3f4fc)
- Dark mode (CSS custom properties + toggle)
- Accessible navigation (skip link, ARIA labels, focus states, keyboard-friendly)
- Responsive, mobile-first layout across all pages
- Hero, About, Services, Caregivers, Testimonials, Contact, FAQs, Resources pages
- Chat widget (floating, themable) with basic simulated advisor responses
- Unified badge styling + improved input borders & focus rings
- Lazy-loaded non-critical images for performance
- Modular CSS (CSS Modules + global variables)
- Footer redesign (clean layout, dark mode aware)

## Pages
- Home
- About
- Services
- Caregivers
- Testimonials
- Contact
- FAQs
- Resources

## Tech Stack
- React 18 + Vite
- CSS Modules + global theme variables
- Semantic HTML, ARIA, WCAG-minded patterns

## Scripts
```sh
npm install       # install dependencies
npm run dev       # start local dev server
npm run build     # production build (outputs to dist/)
npm run preview   # preview the production build locally
```

## Getting Started
1. Clone repo: `git clone https://github.com/thande788/angeltouch.git`
2. Install dependencies: `npm install`
3. Run dev server: `npm run dev`
4. Visit: http://localhost:5173

## Next Ideas / Roadmap
- Image optimization/compression (e.g. sharp / responsive images)
- Automated accessibility & lighthouse audits (axe, pa11y)
- Real chat / CRM or helpdesk integration
- Structured data & SEO meta enrichment
- CMS or markdown-based blog/resources section
- Unit/component tests (Vitest + React Testing Library)

## Notes
Placeholder assets and example content should be replaced with production copy and licensed media before launch.

---
Original baseline README content retained in Git history for reference.
