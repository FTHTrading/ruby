# Allure Ruby — Client Portal

Institutional-facing Next.js 15 site for the Allure Ruby & Siam Emerald RWA program (Troptions dark/gold theme).

## Prerequisites

- [Node.js](https://nodejs.org/) 20+

## Run locally

```bash
cd site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

From repo root:

```bash
npm run site:dev
```

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home — sovereign RWA narrative |
| `/offering` | Ruby + emerald package (appraisal TBD) |
| `/how-it-works` | Four-step flow summary |
| `/stack` | Full stack: Legacy Chain, Vault, troptionsmint, x402, Agent Mailor, GMIIE, BBS+ |
| `/security` | BBS+ / encryption + **proof request demo** |
| `/docs` | Documentation hub (links to repo markdown) |
| `/invest` | Four-phase client journey |
| `/contact` | Onboarding form → `POST /api/intake` |

## API — intake

`POST /api/intake` validates JSON with Zod, returns `ticketId`, appends to `site/.data/intake.log` (gitignored).

Optional env:

| Variable | Purpose |
|----------|---------|
| `INTAKE_WEBHOOK_URL` | POST ticket JSON to CRM/webhook |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for Open Graph metadata |

## Deploy to Vercel

1. Import [FTHTrading/ruby](https://github.com/FTHTrading/ruby) in Vercel.
2. Set **Root Directory** to `site` (or use repo-root `vercel.json` which points to `site`).
3. Add environment variables above if needed.
4. Deploy — build command: `npm run build`.

Production URL (recommended): set `NEXT_PUBLIC_SITE_URL` to your Vercel domain.

## Branding

- Logo: `public/logo-troptions.svg`
- Palette: `tailwind.config.ts` (`troptions-gold`, `troptions-ink`, …)

## Related

- [`../docs/README.md`](../docs/README.md) — master doc index
- [`../pdfs/`](../pdfs/) — `npm run pdfs` from repo root
- [FTHTrading/Legacy](https://github.com/FTHTrading/Legacy) — vault + VC APIs
