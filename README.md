# Adverli — Growth, engineered.

An enterprise marketing agency website built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev      # local development at http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Site structure

| Route | Page |
|---|---|
| `/` | Home |
| `/services` | Services overview |
| `/services/website-development` · `/services/meta-ads` · `/services/google-ads` · `/services/seo` · `/services/content-creation` | Service detail pages (statically generated) |
| `/work` | Case studies |
| `/about` | About |
| `/contact` | Contact + inquiry form |

## Where things live

- **`lib/`** — all site content as typed data: `services.ts`, `case-studies.ts`, `testimonials.ts`, `site.ts` (nav, stats, contact info, process, FAQs). Edit copy here without touching components.
- **`components/`** — shared UI (header with services dropdown + mobile drawer, footer, cards, FAQ accordion, testimonial slider, scroll-reveal wrapper, contact form).
- **`app/`** — routes, `sitemap.ts`, `robots.ts`, and the design tokens in `globals.css` (brand palette + fonts).
- **`app/api/contact/route.ts`** — contact form endpoint. Currently a validated stub; plug in your email/CRM provider (Resend, SendGrid, HubSpot, …) where marked.

## Visuals

- **Charts** — `components/charts/LineChart.tsx` (interactive: crosshair tooltip, draw-in animation, accessible data table) and `Sparkline.tsx` (decorative). Chart marks use the `--color-chart` token, a deeper lime validated for contrast on the dark surface.
- **Photography** — `public/images/` holds photos sourced from Unsplash (Unsplash License: free for commercial use, no attribution required). Replace with your own brand photography before launch if desired.
- **Motion** — scroll reveals, hero aurora drift, floating stat chips, animated counters, and chart draw-ins; all respect `prefers-reduced-motion`.

## Brand tokens

Defined in `app/globals.css`: near-black `ink` background, `surface` cards, `cream` text, `muted`/`faint` secondary text, and the `lime` (#c8f542) accent. Headings use Space Grotesk, body text uses Inter (loaded via `next/font`).

Before going live, update the production domain in `lib/site.ts` (`site.url`) — it drives metadata, the sitemap, and robots.txt.
