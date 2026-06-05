# Token-2022 RWA Extensions — Executive Summary (PDF-Ready)

**Project:** Allure Ruby & Siam Emerald Real World Asset Tokenization  
**Organization:** FTHTrading / Troptions Ecosystem  
**Date:** June 2026  
**Classification:** Client / partner summary — engineering alignment, not an offer

---

## Purpose

Define how institutional-grade gem RWA tokens are issued on **Solana Token-2022** with compliance-oriented extensions, linked to **Legacy Vault** provenance and minted via **troptionsmint.com**.

---

## Assets (summary)

| Asset | Notes |
|-------|-------|
| Allure Ruby | 54.00 ct; GIA / Gübelin / GRS certified; heated East Africa |
| Siam Emerald | Polished emerald; Thailand market hub context |
| Optional copper SKR | Separate commodity track per intake |

**Valuation:** Independent appraisal **TBD**. This document does not state package NAV or dollar value.

---

## Token-2022 extensions (priority)

| Priority | Extension | Benefit |
|----------|-----------|---------|
| P0 | Metadata Pointer | On-chain link to public RWA metadata (URIs only) |
| P0 | Default Account Frozen | Controlled distribution until compliance thaw |
| P0 | Required Memo on Transfer | Audit trail + x402 correlation |
| P0 | Transfer Hook | Programmable transfer policy + Legacy VC gate |

**Transfer Hook program:** `TROPTIONS_TRANSFER_HOOK_PROGRAM_ID_TBD` (deployment pending audit).

---

## Phased rollout

1. **Metadata & intake** — Legacy manifest + public JSON  
2. **Distribution lock** — Frozen accounts + SPV DID  
3. **Audit trail** — Mandatory transfer memos  
4. **Compliance hook** — BBS+ optional verification via Legacy Vault  
5. **Immutability** — Authority revocation via troptionsmint.com  

---

## Ecosystem roles

| System | Function |
|--------|----------|
| **FTHTrading/ruby** | Specifications, phases, governance tracking |
| **Legacy Vault** | Encrypted certificates, manifests, verifiable credentials |
| **troptionsmint.com** | Token-2022 mint and authority revocation |
| **GMIIE** | Market reference comps (not appraisal) |

---

## Compliance & privacy

- Encrypted lab reports remain in Legacy Vault — not in on-chain metadata.  
- Public metadata contains URIs, DID references, and disclosure flags only.  
- Selective disclosure via BBS+ proofs (planned API).  
- Transfer decisions may be logged for audit (interfaces defined; production deployment TBD).

---

## x402 (machine payments)

Transfers may correlate with **HTTP 402** metered compliance checks. Event type: `token.transfer` with structured memo. Details: technical spec in repository `docs/x402/X402_INTEGRATION_SPECIFICATION.md`.

---

## Next steps

1. Complete intake and independent appraisal process.  
2. Publish Legacy manifest and Asset Provenance Credential.  
3. Sandbox mint on devnet with Metadata Pointer + Frozen + Memo.  
4. Deploy Transfer Hook after security review.  
5. Mainnet mint with immutable supply.

---

## References

- GitHub: https://github.com/FTHTrading/ruby  
- Legacy integration: https://github.com/FTHTrading/Legacy/tree/main/docs/ruby-rwa  
- Mint console: https://troptionsmint.com  

---

*© FTH Trading. Proprietary. Not legal, tax, or securities advice.*
