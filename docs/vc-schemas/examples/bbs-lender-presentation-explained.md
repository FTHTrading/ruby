# BBS+ Lender Presentation — Field-by-Field Walkthrough

Sample file: [`bbs-lender-presentation.json`](./bbs-lender-presentation.json)  
Credential type: **GemAssetCredential** (VCDM 2.0)  
Securing: **BBS+ Data Integrity** — `BbsBlsSignatureProof2020` presentation derived from `BbsBlsSignature2020` issuance.

> **Valuation policy:** This example discloses `valuationThresholdMet` (boolean) only. It does **not** disclose `valuation.amount`, raw NAV integers, or marketing-scale figures. Independent appraisal remains **TBD**.

---

## Top-level presentation

| Field | Value (sample) | Meaning |
|-------|------------------|---------|
| `@context` | W3C VC v2 + FTH gem v1 | JSON-LD contexts for parsing and validation |
| `id` | `urn:uuid:…-lender-vp-sample-001` | Unique presentation identifier |
| `type` | `VerifiablePresentation`, `BBSSelectiveDisclosurePresentation` | W3C VP plus Legacy profile for BBS+ selective disclosure |
| `holder` | SPV DID | Entity presenting the proof (often the legal owner or authorized agent) |
| `verifiableCredential` | Array (length 1) | Redacted credential view embedded in the VP |
| `proof` | `BbsBlsSignatureProof2020` | Derived BBS+ proof binding disclosed messages to issuer signature |

---

## Embedded credential (redacted view)

Only the disclosed subset of `credentialSubject` appears inside `verifiableCredential[0]`.

| Field | Sample value | Why a lender cares |
|-------|--------------|-------------------|
| `id` | Asset DID | Stable identifier for collateral records |
| `type` | `GemAsset` | Schema subject type |
| `titleStatus` | `in_custody` | Chain-of-title / custody posture without shipping full title docs |
| `legalOwner` | SPV DID | Who holds legal title (resolve DID under your KYC/governance process) |
| `valuationThresholdMet` | `true` | **Policy boolean** — issuer attests internal/lender threshold criteria are met; **not** a published appraised dollar value |

### Intentionally hidden in this presentation

| Hidden claim | Reason |
|--------------|--------|
| `name`, `caratWeight`, `color`, `treatment` | Gemological detail — share only if credit policy requires |
| `certifications[]`, `manifestCID` | Sensitive lab / vault provenance |
| `valuation.amount`, `valuation.asOf` | No NAV until independent appraisal on file |
| `vaultRef`, `chainAnchorRef`, `oracleRef` | Internal operations |

---

## `proof` object (BbsBlsSignatureProof2020)

| Field | Role |
|-------|------|
| `type` | Must be `BbsBlsSignatureProof2020` for presentations |
| `created` | ISO timestamp of proof generation |
| `challenge` | Verifier-supplied nonce (replay resistance) |
| `proofPurpose` | Typically `authentication` for lender verification sessions |
| `verificationMethod` | Issuer BBS public key reference (`#bbs-key-1`) |
| `ciphersuite` | `BLS12-381-SHA-256` (Digital Bazaar / IETF BBS draft alignment) |
| `header` | Base64 BBS signature header from original credential |
| `presentationHeader` | Base64 encoding of challenge + presentation context |
| `disclosedMessageIndexes` | Indexes into issuer `messageMap` for disclosed atomic claims |
| `publicKey` | Base64 BBS public key |
| `proofValue` | Base64 derived proof — SAMPLE placeholder in repo |
| `mock` | `true` in documentation samples; omitted in production crypto |

Issuance on the full credential uses **`BbsBlsSignature2020`** (assertion proof) with `messageMap` listing every signed atomic claim path. Presentation derives a new proof over the disclosed subset only.

---

## Verification flow (conceptual)

1. Lender sends a **challenge** nonce.
2. Holder calls Legacy Vault `POST /api/vc/present/bbs` with disclosed paths (e.g. `titleStatus`, `legalOwner`, `valuationThresholdMet`).
3. Lender verifies via `POST /api/vc/verify/bbs` with the presentation and (for production) the full issued credential for message reconstruction.
4. Lender records: custody/title facts verified; **appraisal TBD** for binding LTV/NAV.

---

## Mapping to disclosure groups

| Schema group | Securing | This sample |
|--------------|----------|-------------|
| `collateral_lending` | SD-JWT (default) | Similar claim intent; can be mirrored in BBS+ when unlinkability is required |
| `guardian_internal` | BBS+ | Full claim set + internal refs |

See [GEM_ASSET_VC_SCHEMA.md](https://github.com/FTHTrading/Legacy/blob/main/docs/ruby-rwa/GEM_ASSET_VC_SCHEMA.md) on Legacy for authoritative group definitions.

---

## Related

- Client explainer: [`../../client-facing/BBS_SELECTIVE_DISCLOSURE_EXPLAINER.md`](../../client-facing/BBS_SELECTIVE_DISCLOSURE_EXPLAINER.md)
- Legacy mirror: [FTHTrading/Legacy `docs/ruby-rwa/examples/bbs-lender-presentation.json`](https://github.com/FTHTrading/Legacy/blob/main/docs/ruby-rwa/examples/bbs-lender-presentation.json)
- E2E demo: [bbs-allure-ruby-e2e.md](https://github.com/FTHTrading/Legacy/blob/main/docs/ruby-rwa/examples/bbs-allure-ruby-e2e.md)
