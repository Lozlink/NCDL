# Norus Criminal Defence Lawyers — Next.js rebuild

1:1 port of wild-music-900862.framer.app. Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4.

    pnpm install && pnpm dev

- Breakpoints mirror Framer: base = phone variant, `desk:` = ≥1200px. Sections cap at 1440px.
- Fonts are the exact Framer binaries (Bodoni Moda Medium static, Bespoke Sans 400/500/700) via `next/font/local`.
- Contact details live in `src/lib/site.ts`.
- Enquiry form → server action `src/app/actions/enquiry.ts` (zod + honeypot, Amazon SES v2 delivery). See `.env.example`. IAM needs `ses:SendEmail` on the from-identity.
