---
title: "x402 Payment Protocol Integration Specification"
subtitle: "Allure Ruby & Siam Emerald RWA — Troptions Internal Protocol v1.0"
date: "June 4, 2026"
version: "1.0"
status: "Draft"
---

# x402 Payment Protocol Integration Specification

**FTHTrading / Troptions ecosystem**  
**Version 1.0 — June 4, 2026**

---

## Executive summary

x402 is the Troptions-internal programmable Web3 settlement rail connecting asset lifecycle events to payment flows for the Allure Ruby RWA program. It is inspired by HTTP 402 Payment Required semantics but is **not** an ISO, ERC, or W3C standard.

**Target package value is subject to independent third-party appraisal (TBD).** No net asset value is asserted in this specification.

---

## 1. Purpose and scope

Defines event taxonomy, JSON schema (`x402-event-v1`), payment hooks, BBS+ selective-disclosure gates, and idempotency for RWA onboarding, revenue share, and collateral flows.

**Out of scope:** production secrets, real mint addresses, binding valuation.

---

## 2. Protocol identity

| Attribute | Value |
|-----------|-------|
| Name | x402 (Troptions x402) |
| Standard status | Troptions-internal only |
| Primary settlement | Apostle Chain USDF via TROPTIONS gateway (milestone) |

---

## 3. Ecosystem context

- **Legacy Vault** — VC issuance, encrypted provenance, BBS+ presentations  
- **troptionsmint** — Solana Token-2022 mint  
- **Agent Mailor** — client operations orchestration  
- **GMIIE** — market intelligence (not appraisal)  
- **x402** — programmable settlement rail  

Assets: 54.00 ct Allure Ruby + complementary Siam emerald package.

---

## 4. Architecture

Clients and Agent Mailor invoke Legacy x402 adapter → TROPTIONS gateway → Apostle Chain USDF. troptionsmint transfer hooks connect at milestone. Legacy Layer 0 `x402-hooks` anchors settlement records.

---

## 5. Event schema (x402-event-v1)

**Required:** `schemaVersion`, `eventId`, `idempotencyKey`, `eventType`, `packageRef`, `amount`, `currency`, `settlementRail`, `paymentProof`, `occurredAt`.

**Event types:**

- `rwa.onboarding.settlement`
- `rwa.revenue_share.distribution`
- `rwa.collateral.pledge`
- `rwa.collateral.release`
- `rwa.spv.fee`
- `rwa.lifecycle.anchor`

JSON Schema: `docs/x402/schemas/x402-event-v1.json`

---

## 6. Payment hooks

Reference TypeScript contracts:

- `X402PaymentHook` — `beforeSettlement`, `requirePaymentProof`, `afterSettlement`, `onSettlementFailure`
- `X402SelectiveDisclosureHook` — BBS+ presentation before sensitive payments
- `X402IdempotencyStore` — replay-safe settlement cache

Full definitions: `docs/x402/PAYMENT_HOOK_INTERFACE.md`

---

## 7. Selective disclosure gate

Before sensitive payments, callers must obtain a BBS+ presentation:

```
POST /api/vc/present/bbs
```

Collateral flows disclose `titleStatus` and `valuation.appraisalStatus` (TBD — no NAV in proof).

---

## 8. Idempotency

Key format: `x402:{packageRef}:{eventType}:{businessKey}:{version}`

Same key + valid prior proof → cached success without double settlement.

---

## 9. Security and valuation policy

- No secrets in repository documentation  
- KYC/AML and securities compliance remain outside x402  
- NAV-based revenue share blocked until appraisal `completed`  

---

## 10. Milestones

| # | Deliverable | Status |
|---|-------------|--------|
| M1 | Canonical spec + schema | Complete (v1.0 draft) |
| M2 | Legacy integration summary | In progress |
| M3 | Solana transfer-hook stub | Open |
| M4 | Production Worker gateway | Open |
| M5 | Revenue-share LOCAL_ADAPTER pilot | Planned |
| M6 | Collateral E2E with BBS+ gate | Planned |

---

## References

- Canonical repo: https://github.com/FTHTrading/ruby  
- Legacy integration: https://github.com/FTHTrading/Legacy/tree/main/docs/ruby-rwa/x402  
- Sequence flows: `docs/x402/SEQUENCE_FLOWS.md`

---

*© FTHTrading — Documentation MIT License (ruby repository). Not legal or investment advice.*
