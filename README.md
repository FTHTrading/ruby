# ruby

**Allure Ruby & Siam Emerald RWA Tokenization Project**

Institutional-grade Real World Asset (RWA) tokenization for the 54.00 carat Allure Ruby (GIA/Gübelin/GRS certified, heated East Africa) and complementary polished emerald. Package valuation is **TBD** — independent appraisal required; NAV is not asserted in this repository.

Part of the FTHTrading / Troptions ecosystem — leveraging troptionsmint.com (Institutional Solana Mint with Token-2022 + authority revocation), Legacy Vault Protocol for legal/docs/provenance, GMIIE (xxxiii.io) for oracles and market intelligence, and AI agents for mint orchestration and compliance.

## Client portal (v1)

Next.js institutional site with Troptions dark/gold theme, stack map, BBS proof demo, manifest viewer, and intake API.

```bash
cd site && npm install && npm run dev
```

**Live site:** https://fthtrading.github.io/ruby/ (GitHub Pages on every `main` push). Optional Vercel: root directory `site` (see [`site/README.md`](site/README.md)).

## Project Overview

- **Primary Asset**: 54.00 ct Allure Ruby — exceptional size, top-tier certifications, "Purple Red" / vivid hue, heated from East Africa/Madagascar.
- **Secondary Asset**: Polished emerald (Siam/Thailand market hub context) — paired with Allure Ruby in the collection bundle.
- **Supporting Assets**: Copper powder / SKR position (high-purity certified via IGAS, 2016 safekeeping) for diversified commodity RWA track.

This repo tracks the full lifecycle: legal structuring (SPV), secure custody transfer, Token-2022 mechanics on Solana, provenance/IPFS + Legacy Vault integration, Siam market comps, monetization strategy (private raise, collateral, secondary liquidity), and production deployment via troptionsmint.

## Key Investigations & Comps (June 2026)

- Siam/Thailand emerald market: Bangkok JTC + Chanthaburi hubs for cutting/trading (not primary mine source but global value-add center). Pricing tiers, auction data (Gemfields $26.8M, Christie's high-end pieces), demand trends, treatment disclosure critical.
- Troptions tokenization mechanics: Solana Token-2022 (extensions for transfer hooks/compliance, immutable supply via authority revocation in one tx), troptionsmint.com institutional console, UNITY for participation/staking, Legacy Vault for proof/docs, GMIIE oracles.

## x402 settlement (Troptions-internal)

Programmable Web3 settlement for RWA lifecycle events (onboarding, revenue share, collateral). **Not** claimed as ISO/ERC/W3C standard.

- Spec (v1.0): [`docs/x402/X402_INTEGRATION_SPECIFICATION.md`](docs/x402/X402_INTEGRATION_SPECIFICATION.md)
- Index: [`docs/x402/README.md`](docs/x402/README.md)
- Architecture slice: [`architecture/x402.md`](architecture/x402.md)
- Legacy implementation surface: [FTHTrading/Legacy `docs/ruby-rwa/x402/`](https://github.com/FTHTrading/Legacy/tree/main/docs/ruby-rwa/x402)

## Verifiable Credentials (Gem RWA)

Canonical **GemAssetCredential v1** (VCDM 2.0) lives in [`docs/vc-schemas/`](docs/vc-schemas/). Schema mirrored in [FTHTrading/Legacy](https://github.com/FTHTrading/Legacy); **issuance only via Legacy Vault** (`POST /api/vc/issue/gem-asset`).

- Schema: [`docs/vc-schemas/gem-asset-v1.jsonld`](docs/vc-schemas/gem-asset-v1.jsonld)
- Samples: [`allure-ruby-sample-vc.json`](docs/vc-schemas/examples/allure-ruby-sample-vc.json), [`gem-vc-sd-jwt.json`](docs/vc-schemas/examples/gem-vc-sd-jwt.json), [`gem-vc-data-integrity-bbs.json`](docs/vc-schemas/examples/gem-vc-data-integrity-bbs.json)
- Media types: `application/vc` / `application/vp` — see [`docs/vc-schemas/README.md`](docs/vc-schemas/README.md) (SD-JWT + **BBS+** selective disclosure)
- Program pricing & scope (non-binding): [`docs/client-facing/PRICING_AND_PROGRAM_SCOPE.md`](docs/client-facing/PRICING_AND_PROGRAM_SCOPE.md)

## Repository structure

| Path | Purpose |
|------|---------|
| `/site` | Next.js 15 institutional client portal (Troptions theme) |
| `/architecture` | System overview, full-stack map, per-system docs (x402, Vault, troptionsmint) |
| `/docs` | Whitepaper, API integration, client-facing materials, **VC schemas** (SD-JWT + **BBS+**), x402, tokenization |
| `/pdfs` | Markdown PDF templates + `npm run pdfs` |
| `/lib/integrations` | TypeScript stubs for Legacy Vault and troptionsmint |
| `/tokenization` | Token spec, transfer-hook notes, mint flow |
| `/assets` | Redacted certs, photos, provenance packages (IPFS-ready) |
| `/tracking` | GitHub Projects / Issues / Milestones setup |
| `/ai-agent` | Stubs for Solana AI mint/order agent integration |

## Tokenization Mechanics (Summary)

1. Legal SPV owns physical assets + secure custody (Legacy Vault/SKR).
2. GMIIE oracles for NAV + risk.
3. troptionsmint.com → Token-2022 mint with transfer hooks (KYC/accredited gating), metadata to Legacy Vault/IPFS, revoke mint/freeze auth for immutability.
4. Distribution: Private placement (Reg D/S), staking via UNITY, collateral for stablecoin/CBDC, secondary on Troptions rails.
5. Governance & revenue share via smart contract + Legacy Vault enforcement.
6. Provenance: On-chain + full certs/docs in Legacy Vault.

## Tracking & Governance

This repo uses GitHub Projects, Issues, Milestones, and Wiki for full project tracking:

- **Phase 1**: Asset intake/verification/appraisal (emerald certs, copper clarification).
- **Phase 2**: SPV + custody transfer.
- **Phase 3**: Token design & mint (troptionsmint sandbox → mainnet).
- **Phase 4**: Monetization raise & liquidity.
- **Phase 5**: Integration with Troptions stablecoin/CBDC/GMIIE oracles.

See [`/tracking`](tracking/) and the GitHub Projects board for live status, assignees, and dependencies.

## Quick Start (for collaborators)

```bash
git clone https://github.com/FTHTrading/ruby.git
cd ruby
cd site && npm install && npm run dev
```

## PDF generation

```bash
npm run pdfs
```

Output: `pdfs/output/` (gitignored).

## Related Repos & Ecosystem

- [FTHTrading/Legacy](https://github.com/FTHTrading/Legacy) — Vault, VC issuance, BBS+ APIs
- troptionsmint.com (Institutional Solana Mint)
- GMIIE / xxxiii.io (oracles, intelligence, Rings analytics)
- FTHTrading AI / Genesis / solana-launcher (supporting infra)
- Troptions UNITY, GOLD, AUS, PAY (ecosystem utility)

## Status

**Active Development** — Moving from sandbox validation to production RWA issuance for the Allure Collection (Ruby + Emerald).

Loyal to the mission. No ego. All gas. Let's tokenize this properly and build the rails for the reset.

**Contact / Owner**: FTHTrading team (Kevan Burns et al.)

---

*This repository is part of the FTHTrading / UnyKorn / Troptions institutional blockchain & AI financial infrastructure.*
