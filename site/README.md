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
| `/pricing` | Phase fees + market comparables (non-binding) |
| `/contact` | Onboarding form → webhook or mailto |

## Intake

Client-side validation via Zod (`src/lib/intake.ts`). Returns `ticketId` on success.

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_INTAKE_WEBHOOK_URL` | POST ticket JSON to CRM/webhook |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for Open Graph metadata |

## Deploy — GitHub Pages (default)

Pushes to `main` run [`.github/workflows/deploy-github-pages.yml`](../.github/workflows/deploy-github-pages.yml).

**Live site:** https://fthtrading.github.io/ruby/

Static export uses `basePath: /ruby`. Contact form uses `NEXT_PUBLIC_INTAKE_WEBHOOK_URL` when set, otherwise mailto fallback.

## Deploy to Vercel (optional — server features)

1. Import [FTHTrading/ruby](https://github.com/FTHTrading/ruby) in Vercel.
2. Set **Root Directory** to `site` (or use repo-root `vercel.json` which points to `site`).
3. Set `NEXT_PUBLIC_INTAKE_WEBHOOK_URL` for CRM intake.
4. Deploy — build command: `npm run build` (do **not** set `GITHUB_PAGES`).

Production URL (recommended): set `NEXT_PUBLIC_SITE_URL` to your Vercel domain.

## Branding

- Logo: `public/logo-troptions.svg`
- Palette: `tailwind.config.ts` (`troptions-gold`, `troptions-ink`, …)

## Related

- [`../docs/README.md`](../docs/README.md) — master doc index
- [`../pdfs/`](../pdfs/) — `npm run pdfs` from repo root
- [FTHTrading/Legacy](https://github.com/FTHTrading/Legacy) — vault + VC APIs
