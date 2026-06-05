# Documentation Index — Allure Ruby RWA

MIT-licensed institutional materials for the gem RWA program. Technical implementation lives primarily in [FTHTrading/Legacy](https://github.com/FTHTrading/Legacy).

## Client-facing

| Document | Description |
|----------|-------------|
| [client-facing/README.md](./client-facing/README.md) | Index for one-pager, deck outline, term sheet language |
| [client-facing/ONE_PAGER.md](./client-facing/ONE_PAGER.md) | Executive summary |
| [client-facing/SLIDE_DECK_OUTLINE.md](./client-facing/SLIDE_DECK_OUTLINE.md) | Presenter outline |
| [client-facing/TERM_SHEET_LANGUAGE.md](./client-facing/TERM_SHEET_LANGUAGE.md) | Non-binding template for counsel |

## Program & integration

| Document | Description |
|----------|-------------|
| [WHITEPAPER_RWA_GEMS.md](./WHITEPAPER_RWA_GEMS.md) | Institutional whitepaper draft |
| [API_INTEGRATION.md](./API_INTEGRATION.md) | Legacy + troptionsmint endpoint map |

## Architecture (ruby repo)

| Document | Description |
|----------|-------------|
| [../architecture/SYSTEM_OVERVIEW.md](../architecture/SYSTEM_OVERVIEW.md) | Layer diagram |
| [../architecture/FULL_STACK.md](../architecture/FULL_STACK.md) | Sequence + brick roadmap |
| Per-system pages | `legacy-vault`, `legacy-chain`, `troptionsmint`, `x402`, `agent-mailor`, `gmii`, `bbs-vcdm` |

## PDF generation

| Path | Description |
|------|-------------|
| [../pdfs/README.md](../pdfs/README.md) | Run `node scripts/generate-pdfs.mjs` |
| [../pdfs/templates/](../pdfs/templates/) | Markdown sources (8 templates) |

## Related Legacy PRs & schemas

| Topic | Link |
|-------|------|
| Ruby RWA integration map | [docs/ruby-rwa/INTEGRATION_MAP.md](https://github.com/FTHTrading/Legacy/blob/main/docs/ruby-rwa/INTEGRATION_MAP.md) |
| Gem VC schema | [docs/ruby-rwa/GEM_ASSET_VC_SCHEMA.md](https://github.com/FTHTrading/Legacy/tree/main/docs/ruby-rwa) (feature branches) |
| BBS+ integration | [docs/BBS_PLUS_INTEGRATION.md](https://github.com/FTHTrading/Legacy/blob/main/docs/BBS_PLUS_INTEGRATION.md) |
| BLS12-381 curve | [docs/BLS12_381_CURVE.md](https://github.com/FTHTrading/Legacy/blob/docs/bbs-pairing-deep-dive/docs/BLS12_381_CURVE.md) |
| VC schemas | [docs/vc-schemas/](https://github.com/FTHTrading/Legacy/tree/main/docs/vc-schemas) |
| Open PR: BBS deep dive | [#18](https://github.com/FTHTrading/Legacy/pull/18) |
| Open PR: client one-pager (Legacy) | [#17](https://github.com/FTHTrading/Legacy/pull/17) |

## Client portal

Next.js site: [../site/README.md](../site/README.md) — `pnpm dev` on port 3000.
