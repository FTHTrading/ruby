# Allure Ruby — Client Portal

Institutional-facing Next.js 15 site for the Allure Ruby & Siam Emerald RWA program.

## Prerequisites

- [Node.js](https://nodejs.org/) 20+
- [pnpm](https://pnpm.io/) 9+

## Run locally

```bash
cd site
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Sovereign RWA stack narrative |
| `/offering` | Allure Ruby + Siam Emerald package overview |
| `/how-it-works` | Legacy Vault, Legacy Chain, troptionsmint, x402, Agent Mailor, GMIIE |
| `/security` | BBS+, VCDM 2.0, encryption, selective disclosure |
| `/invest` | Four-phase client journey |
| `/contact` | Onboarding form stub |

## Branding

Placeholder Troptions logo: `public/logo-troptions.svg`. Gold/dark palette is defined in `tailwind.config.ts` (`troptions-gold`, `troptions-ink`, etc.).

## Production deploy (phase 2)

Deploy to Vercel with root directory `site`, or build with `pnpm build` and host static export if configured.

## Related docs

- Repository architecture: [`../architecture/`](../architecture/)
- PDF generation: [`../pdfs/`](../pdfs/)
- Technical depth: [FTHTrading/Legacy](https://github.com/FTHTrading/Legacy)
