# ruby

**Allure Ruby & Siam Emerald RWA Tokenization Project**

Institutional-grade Real World Asset (RWA) tokenization for the 54.00 carat Allure Ruby (GIA/Gübelin/GRS certified, heated East Africa) and complementary polished emerald (combined package — **independent appraisal TBD**; no NAV asserted in-repo).

Part of the FTHTrading / Troptions ecosystem — leveraging troptionsmint.com (Institutional Solana Mint with Token-2022 + authority revocation), Legacy Vault Protocol for legal/docs/provenance, GMIIE (xxxiii.io) for oracles and market intelligence, and AI agents for mint orchestration and compliance.

## Project Overview

- **Primary Asset**: 54.00 ct Allure Ruby — exceptional size, top-tier certifications, "Purple Red" / vivid hue, heated from East Africa/Madagascar.
- **Secondary Asset**: Polished emerald (Siam/Thailand market hub context) — paired high-value gem track with ruby.
- **Supporting Assets**: Copper powder / SKR position (high-purity certified via IGAS, 2016 safekeeping) for diversified commodity RWA track.

This repo tracks the full lifecycle: legal structuring (SPV), secure custody transfer, Token-2022 mechanics on Solana, provenance/IPFS + Legacy Vault integration, Siam market comps, monetization strategy (private raise, collateral, secondary liquidity), and production deployment via troptionsmint.

## Key Investigations & Comps (June 2026)

- Siam/Thailand emerald market: Bangkok JTC + Chanthaburi hubs for cutting/trading (not primary mine source but global value-add center). Pricing tiers, auction data (Gemfields $26.8M, Christie's high-end pieces), demand trends, treatment disclosure critical.
- Troptions tokenization mechanics: Solana Token-2022 (extensions for transfer hooks/compliance, immutable supply via authority revocation in one tx), troptionsmint.com institutional console, UNITY for participation/staking, Legacy Vault for proof/docs, GMIIE oracles.

## Repository Structure (Initial)

- `/docs` — Full legal templates, term sheets, SPV docs, cert summaries (redacted), Siam market report, Troptions RWA blueprint.
- `/docs/tokenization` — **Token-2022 extensions**, Transfer Hook spec, RWA metadata schema, x402 transfer events ([index](./docs/tokenization/README.md)).
- `/tokenization` — Transfer hook placeholder, mint flow notes, oracle integration.
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
- [Legacy Vault Protocol](https://github.com/FTHTrading/Legacy) (docs, legal, provenance, [Token-2022 + BBS integration](https://github.com/FTHTrading/Legacy/blob/main/docs/ruby-rwa/TOKEN_2022_INTEGRATION.md))
- GMIIE / xxxiii.io (oracles, intelligence, Rings analytics)
- FTHTrading AI / Genesis / solana-launcher (supporting infra)
- Troptions UNITY, GOLD, AUS, PAY (ecosystem utility)

## Status

**Active Development** — Moving from sandbox validation to production RWA issuance for the Allure Collection (Ruby + Emerald).

Loyal to the mission. No ego. All gas. Let's tokenize this properly and build the rails for the reset.

**Contact / Owner**: FTHTrading team (Kevan Burns et al.)

---

*This repository is part of the FTHTrading / UnyKorn / Troptions institutional blockchain & AI financial infrastructure.*