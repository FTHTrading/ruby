# BBS+ Selective Disclosure — Client Guide

**Audience:** Family offices, institutional investors, lender relationship managers, and board members  
**Purpose:** Explain how the Allure Ruby RWA program proves asset facts to counterparties **without oversharing** sensitive data  
**Not legal advice** — illustrative only; counsel must approve investor and lender communications.

---

## The idea in one sentence

Your asset’s credentials work like a **notarized binder**: the issuer signs the full record once, and each counterparty receives only the **pages they are allowed to see**—with cryptography proving those pages are authentic and unchanged.

---

## Contract analogy (non-technical)

| Traditional deal room | BBS+ selective disclosure |
|----------------------|---------------------------|
| You photocopy the entire data room for every bank | You keep one master file in Legacy Vault |
| Each recipient may see more than they need | Each recipient gets a **custom redacted packet** |
| Proving authenticity means re-faxing originals | A **mathematical proof** shows the disclosed facts came from the issuer’s signed credential |
| Leaks are hard to trace | Presentations can be designed to be **unlinkable** across verifiers (privacy-by-design) |

Think of **BBS+** as a tamper-evident **stamp on selected clauses**, not a public billboard of your vault contents.

---

## Three roles: who sees what

### 1. Issuer (Legacy Vault / SPV)

- Holds the **full GemAssetCredential** (provenance, custody, valuation status, vault references, oracle hooks).
- Signs the credential with a **BbsBlsSignature2020** proof (BBS+ Data Integrity).
- Sets **valuation policy**: independent appraisal **TBD**; no package NAV is asserted in client materials or default issuance.
- Decides which **disclosure profile** applies when a holder requests a lender packet, marketplace packet, or guardian-internal view.

### 2. Holder (asset owner / SPV operator)

- Controls **when** to present proofs and **to whom**.
- Can show a lender: *title is in custody*, *legal owner DID*, and *valuation threshold met*—without handing over lab report CIDs, internal oracle feeds, or dollar amounts.
- Retains encrypted originals in Legacy Vault; only disclosed fields appear in the verifiable presentation.

### 3. Verifier (lender, exchange, regulator, qualified investor)

- Receives a **Verifiable Presentation** with a **BbsBlsSignatureProof2020** derived proof.
- Sees **only** the disclosed fields (e.g. `titleStatus`, `legalOwner`, `valuationThresholdMet`).
- Verifies cryptographically that disclosed facts were part of the issuer-signed credential.
- Does **not** automatically receive hidden claims (carat weight, manifest CID, full valuation object, etc.) unless the holder discloses them.

---

## Lender example (no dollar NAV)

**Scenario:** A collateral desk asks: *“Is title clean, who holds legal title, and does the asset meet our internal valuation policy threshold?”*

**What we do *not* send**

- Raw dollar NAV (e.g. no `600000000` or “$600M” figures in the proof payload).
- Unredacted laboratory reports or personal identifiers.
- Full Legacy Vault manifest or internal oracle payloads.

**What we can send (illustrative disclosure)**

| Disclosed field | Meaning to the lender |
|-----------------|----------------------|
| `titleStatus` | e.g. `in_custody` — asset is in qualified custody with clear chain-of-title workflow |
| `legalOwner` | DID of the SPV / title holder (resolvable under your governance policy) |
| `valuationThresholdMet` | **Boolean policy attestation** — internal/lender threshold criteria satisfied per issuer policy; **independent appraisal still TBD** for binding NAV |

The lender learns **enough to continue underwriting** without receiving marketing-scale numbers or sensitive vault files.

> **Important:** `valuationThresholdMet: true` means a **policy gate passed**, not that a final appraised value has been published. Binding valuation remains **subject to independent third-party appraisal**.

---

## How this fits the wider stack

| Layer | Role in disclosure |
|-------|-------------------|
| **Legacy Vault** | Issuance, encryption, BBS+ sign/present/verify APIs |
| **Legacy Chain** | Private anchors for manifest / VC digests (not public Solana) |
| **SD-JWT** | Default path for many lending and marketplace flows |
| **BBS+** | High-privacy, unlinkable presentations (especially guardian / sensitive counterparty flows) |
| **Troptions / Token-2022** | Public token metadata stays summary-level until appraisal complete |

---

## Technical references (engineering & counsel)

| Document | Repository |
|----------|------------|
| GemAssetCredential schema & disclosure groups | [FTHTrading/Legacy — `docs/ruby-rwa/GEM_ASSET_VC_SCHEMA.md`](https://github.com/FTHTrading/Legacy/blob/main/docs/ruby-rwa/GEM_ASSET_VC_SCHEMA.md) |
| BBS+ integration & API routes | [FTHTrading/Legacy — `docs/BBS_PLUS_INTEGRATION.md`](https://github.com/FTHTrading/Legacy/blob/main/docs/BBS_PLUS_INTEGRATION.md) |
| Sample lender verifiable presentation (JSON) | [`../vc-schemas/examples/bbs-lender-presentation.json`](../vc-schemas/examples/bbs-lender-presentation.json) |
| Field-by-field walkthrough | [`../vc-schemas/examples/bbs-lender-presentation-explained.md`](../vc-schemas/examples/bbs-lender-presentation-explained.md) |
| Runnable BBS+ E2E | [FTHTrading/Legacy — `docs/ruby-rwa/examples/bbs-allure-ruby-e2e.md`](https://github.com/FTHTrading/Legacy/blob/main/docs/ruby-rwa/examples/bbs-allure-ruby-e2e.md) |

---

## Related client materials

- [ONE_PAGER.md](./ONE_PAGER.md) — executive summary (valuation TBD throughout)
- [SLIDE_DECK_OUTLINE.md](./SLIDE_DECK_OUTLINE.md) — presenter outline
- [TERM_SHEET_LANGUAGE.md](./TERM_SHEET_LANGUAGE.md) — non-binding counsel template

*Last updated: June 2026*
