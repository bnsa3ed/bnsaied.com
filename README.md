# bnsaied.com

Personal portfolio of **Mohamed Said**, product engineer building AI products, Arabic-first by default.
Live at **[bnsaied.com](https://bnsaied.com)**.

## What's in it

- **Bilingual, fully RTL-aware**: English and Arabic routes (`/en`, `/ar`) from one content source, with logical CSS properties throughout.
- **Static by default**: every page is prerendered with Next.js 16 (App Router, Cache Components). No client-side data fetching.
- **Accessible**: WCAG 2.2 AA checked with axe-core on every page at phone and desktop widths, visible focus states, skip link, reduced-motion support.
- **Design details**: a career timeline drawn as an editing timeline (a nod to years of video work), a scroll "playhead", and J/L keyboard shortcuts to move between sections.

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · `next/font` (Archivo variable width, Readex Pro, IBM Plex Mono) · deployed on Vercel.

## Structure

```
app/[lang]/            pages (home, case studies), locale layout
components/            UI: cards, timeline, navigation, contact tools
content/               all copy and project data, in English and Arabic
lib/i18n.ts            locales and UI strings
public/work, icons/    product screenshots and icons
```

All text lives in `content/` and `lib/i18n.ts`, so updating the site rarely means touching components.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000 → redirects to /en
npm run build   # production build
npm run lint
```
