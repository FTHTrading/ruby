# Institutional Whitepaper Draft — Gem RWA (Allure Ruby & Siam Emerald)

**Status:** Draft for counsel and technical review — not a securities offering document.

**License:** MIT (this repository)

---

## Abstract

This program proposes institutional-grade tokenization of a paired colored-gem portfolio — the Allure Ruby (54.00 ct, heated, East Africa / Madagascar provenance narrative) and a complementary Siam Emerald — using sovereign custody (Legacy Vault), verifiable credentials with selective disclosure (BBS+ / VCDM 2.0), and Solana Token-2022 distribution (troptionsmint). Economic packaging is a **target subject to independent appraisal**; verifiable claims may carry `appraisalStatus: TBD` until qualified appraisers complete work.

## 1. Problem statement

High-value gem assets suffer from:

- Fragmented custody evidence and inconsistent disclosure
- Inability to share lender-relevant facts without exposing full laboratory payloads
- Retail-grade tokenization tooling unsuitable for accredited structures

## 2. Solution architecture

| Layer | Function |
|-------|----------|
| Legal / SPV | Title, custody agreements, Reg D/S framing (counsel-led) |
| Legacy Vault | Encryption, manifests, release policy, audit |
| Credentials | GemAssetCredential + BBS+ presentations |
| troptionsmint | Token-2022 mint, metadata, authority revocation |
| GMIIE | Market comp references (non-appraisal) |
| x402 | Metered agent and export APIs |

See [architecture/FULL_STACK.md](../architecture/FULL_STACK.md).

## 3. Asset description

### 3.1 Allure Ruby

Museum-scale heated ruby with third-party laboratory reports referenced in vault manifests. Public repositories contain redacted indexes only.

### 3.2 Siam Emerald

Polished emerald positioned within global trading-hub context (Bangkok JTC, Chanthaburi value chain). Treatment disclosure and comps follow GMIIE and counsel guidance.

### 3.3 Valuation policy

No whitepaper section asserts a binding package NAV. Planned economics are disclosed as targets pending independent appraisal and jurisdiction-specific securities analysis.

## 4. Security model

- **Storage:** AES-256-GCM, private IPFS, hashed manifests
- **Identity:** W3C DID, VC 2.0, NIST IAL-aligned verification (Legacy)
- **Presentation:** BBS+ on BLS12-381 — implementation in Legacy, documented in ruby/Legacy PRs
- **Chain:** Audit anchoring via Legacy registry; mint authority isolated to troptionsmint

## 5. Token design (summary)

- SPL Token-2022 with compliance extensions
- Metadata URIs bound to provenance credentials
- Immutable supply policy via revoked mint/freeze authorities post-policy sign-off

## 6. Governance & roadmap

| Phase | Milestone |
|-------|-----------|
| 1 | Intake, encrypted vault upload, appraisal engagement |
| 2 | SPV, custody, release mapping |
| 3 | VC issuance, sandbox mint |
| 4 | Private placement, liquidity policy |

## 7. References

- [FTHTrading/Legacy](https://github.com/FTHTrading/Legacy)
- [FTHTrading/ruby](https://github.com/FTHTrading/ruby)
- Client portal: `/site`
- BBS curve family: Legacy `docs/BLS12_CURVE_FAMILY.md` (docs branch)

---

*For questions on implementation status, see open GitHub Projects milestones in `/tracking`.*
