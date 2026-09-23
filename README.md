# Adverli — Growth, engineered.

A growth agency website built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

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
| `/work` | Selected projects and representative growth scenarios |
| `/about` | About |
| `/contact` | Contact + inquiry form |

## Where things live

- **`lib/`** — site content as typed data: `services.ts`, `case-studies.ts`, and `site.ts` (nav, qualitative value statements, contact info, process, FAQs). Edit copy here without touching components.
- **`components/`** — shared UI (header with services dropdown + mobile drawer, footer, cards, FAQ accordion, scroll-reveal wrapper, and contact form).
- **`app/`** — routes, `sitemap.ts`, `robots.ts`, and the design tokens in `globals.css` (brand palette + fonts).
- **Contact form** — opens a prefilled draft to the public email configured in `lib/site.ts`; it does not claim server-side delivery.

## Visuals

- **Charts** — `components/charts/LineChart.tsx` (interactive: crosshair tooltip, draw-in animation, accessible data table) and `Sparkline.tsx` (decorative). Chart marks use the `--color-chart` token, a deeper lime validated for contrast on the dark surface.
- **Photography** — `public/images/` holds the current site photography. Maintain asset-level source and license records before launch, and replace with owned brand photography where appropriate.
- **Motion** — scroll reveals, hero aurora drift, floating context chips, and chart draw-ins; all respect `prefers-reduced-motion`.

## Brand tokens

Defined in `app/globals.css`: near-black `ink` background, `surface` cards, `cream` text, `muted`/`faint` secondary text, and the `lime` (#c8f542) accent. Headings use Space Grotesk, body text uses Inter (loaded via `next/font`).

Before going live, update the production domain in `lib/site.ts` (`site.url`) — it drives metadata, the sitemap, and robots.txt.
