# ruby

**Allure Ruby & Siam Emerald RWA Tokenization Project**

Institutional-grade Real World Asset (RWA) tokenization for the 54.00 carat Allure Ruby (GIA/Gü belin/GRS certified, heated East Africa) and complementary polished emerald (combined est. $600M package).

Part of the FTHTrading / Troptions ecosystem — leveraging troptionsmint.com (Institutional Solana Mint with Token-2022 + authority revocation), Legacy Vault Protocol for legal/docs/provenance, GMIIE (xxxiii.io) for oracles and market intelligence, and AI agents for mint orchestration and compliance.

## Project Overview

- **Primary Asset**: 54.00 ct Allure Ruby — exceptional size, top-tier certifications, "Purple Red" / vivid hue, heated from East Africa/Madagascar.
- **Secondary Asset**: Polished emerald (Siam/Thailand market hub context) — completing the ~$600M high-value gem pair.
- **Supporting Assets**: Copper powder / SKR position (high-purity certified via IGAS, 2016 safekeeping) for diversified commodity RWA track.

This repo tracks the full lifecycle: legal structuring (SPV), secure custody transfer, Token-2022 mechanics on Solana, provenance/IPFS + Legacy Vault integration, Siam market comps, monetization strategy (private raise, collateral, secondary liquidity), and production deployment via troptionsmint.

## Key Investigations & Comps (June 2026)

- Siam/Thailand emerald market: Bangkok JTC + Chanthaburi hubs for cutting/trading (not primary mine source but global value-add center). Pricing tiers, auction data (Gemfields $26.8M, Christie's high-end pieces), demand trends, treatment disclosure critical.
- Troptions tokenization mechanics: Solana Token-2022 (extensions for transfer hooks/compliance, immutable supply via authority revocation in one tx), troptionsmint.com institutional console, UNITY for participation/staking, Legacy Vault for proof/docs, GMIIE oracles.

## Verifiable Credentials (Gem RWA)

Canonical **GemAssetCredential v1** (VCDM 2.0) schema for the Allure Ruby + emerald bundle lives in [`docs/vc-schemas/`](docs/vc-schemas/). The same JSON-LD is mirrored in [FTHTrading/Legacy](https://github.com/FTHTrading/Legacy); **issuance is only via Legacy Vault Protocol** (`POST /api/vc/issue/gem-asset`).

- Schema: [`docs/vc-schemas/gem-asset-v1.jsonld`](docs/vc-schemas/gem-asset-v1.jsonld)
- Sample unsigned VC: [`docs/vc-schemas/examples/allure-ruby-sample-vc.json`](docs/vc-schemas/examples/allure-ruby-sample-vc.json)
- Selective disclosure: SD-JWT (primary), BBS+ for guardian-internal proofs

## Repository Structure (Initial)

- `/docs` — Full legal templates, term sheets, SPV docs, cert summaries (redacted), Siam market report, Troptions RWA blueprint, **VC schemas** (`docs/vc-schemas/`).
- `/tokenization` — Token spec, smart contract notes, mint flow, oracle integration.
- `/assets` — Redacted certs, photos, provenance packages (IPFS-ready).
- `/tracking` — GitHub Projects / Issues / Milestones setup for RWA lifecycle tracking (intake, verification, mint, raise, custody, governance).
- `/ai-agent` — Stubs for Solana AI mint/order agent integration.

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

See `/tracking` folder and GitHub Projects board for live status, assignees, and dependencies.

## Quick Start (for collaborators)

```bash
git clone https://github.com/FTHTrading/ruby.git
cd ruby
```

## Related Repos & Ecosystem

- troptionsmint.com (Institutional Solana Mint)
- Legacy Vault Protocol (docs, legal, provenance)
- GMIIE / xxxiii.io (oracles, intelligence, Rings analytics)
- FTHTrading AI / Genesis / solana-launcher (supporting infra)
- Troptions UNITY, GOLD, AUS, PAY (ecosystem utility)

## Status

**Active Development** — Moving from sandbox validation to production RWA issuance for the Allure Collection (Ruby + Emerald).

Loyal to the mission. No ego. All gas. Let's tokenize this properly and build the rails for the reset.

**Contact / Owner**: FTHTrading team (Kevan Burns et al.)

---

*This repository is part of the FTHTrading / UnyKorn / Troptions institutional blockchain & AI financial infrastructure.*