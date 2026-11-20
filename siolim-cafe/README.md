# Siolim Café

A responsive Italian-bistro café website built with Next.js 15 App Router, TypeScript, Tailwind CSS, Framer Motion, React Hook Form and Zod.

## Requirements
- Node.js 20.9+
- npm 10+ recommended

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Production
```bash
npm run lint
npm run build
npm start
```

## Forms and API
Reservation and contact forms validate in the browser and again on the server. The API routes return structured JSON responses. They are intentionally persistence-adapter-ready: connect a database/email provider before accepting live customer submissions. Until then, successful responses confirm validation only and do not claim that a booking has been confirmed or a message delivered.

## Images
Playfair Display and Inter load from Google Fonts in the visitor browser; system fallbacks remain available if the font service is blocked.

All artwork is stored locally in `public/images` as SVG assets, so there are no third-party image dependencies or broken remote image URLs. Replace the editorial illustrations with licensed photography when available.

## Deployment
Import the repository into Vercel. The default Next.js build settings work without additional configuration. Set `NEXT_PUBLIC_SITE_URL` to the canonical production origin.
