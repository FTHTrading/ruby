# x402 Sequence Flows — Allure Ruby RWA

**Version:** 1.0 | **Date:** June 4, 2026

Mermaid sequence diagrams for primary RWA x402 flows. Settlement rails shown as **TROPTIONS x402 gateway → Apostle Chain USDF**; Solana transfer-hook path is milestone-dependent.

> **Valuation:** Revenue-share amounts must not use asserted NAV. Until independent appraisal is `completed`, use configured flat fees or counsel-approved schedules only.

---

## Revenue share distribution

```mermaid
sequenceDiagram
  autonumber
  participant Scheduler as SPV scheduler / Agent Mailor
  participant Hook as X402PaymentHook
  participant BBS as Legacy POST /api/vc/present/bbs
  participant GW as TROPTIONS x402 gateway
  participant AC as Apostle Chain (USDF)
  participant L0 as Legacy Layer 0 / x402-hooks

  Scheduler->>Hook: beforeSettlement(revenue_share, idempotencyKey)
  Hook->>Hook: Check appraisalStatus policy (no NAV calc if TBD)
  Hook->>BBS: presentAndDigest(spvDid, ...)
  BBS-->>Hook: presentationDigest + disclosedClaims
  Hook-->>Scheduler: allowed + quote (amount, payTo)

  Scheduler->>GW: POST settlement (402 challenge if needed)
  GW->>AC: Debit payer / credit SPV treasury
  AC-->>GW: txHash
  GW-->>Scheduler: gateway receipt

  Scheduler->>Hook: requirePaymentProof(receipt)
  Hook-->>Scheduler: valid + normalizedProof

  Scheduler->>Hook: afterSettlement(x402-event-v1)
  Hook->>L0: Anchor ServicePaymentRecorded / RWA event
  L0-->>Hook: anchorRef
  Hook-->>Scheduler: success (cached by idempotencyKey)

  Note over Scheduler,L0: Replay with same idempotencyKey returns cached event — no double pay
```

---

## Collateral management (pledge and release)

```mermaid
sequenceDiagram
  autonumber
  participant Lender as Lender / collateral desk
  participant AM as Agent Mailor
  participant BBS as Legacy POST /api/vc/present/bbs
  participant Hook as X402PaymentHook
  participant GW as TROPTIONS x402 gateway
  participant RE as Release engine (Legacy)

  Lender->>AM: Collateral workflow request
  AM->>BBS: disclosedClaims titleStatus, valuation.appraisalStatus
  BBS-->>AM: BBS+ presentation (appraisalStatus TBD — no NAV disclosed)
  AM->>Hook: beforeSettlement(collateral.pledge, presentationDigest)

  alt appraisalStatus is TBD
    Hook-->>AM: allowed for fee-only pledge; LTV binding blocked
  else appraisalStatus completed
    Hook-->>AM: allowed per counsel LTV policy
  end

  AM->>GW: Pay collateral fee / escrow (USDF)
  GW-->>AM: paymentProof
  AM->>Hook: afterSettlement(x402-event-v1)
  Hook-->>AM: anchored

  Note over Lender,RE: Release path requires additional claims (lienStatus)

  Lender->>AM: Release request
  AM->>BBS: titleStatus, lienStatus, valuation.appraisalStatus
  BBS-->>AM: release presentation
  AM->>RE: Multi-proof release check
  RE-->>AM: release authorized
  AM->>Hook: beforeSettlement(collateral.release, ...)
  AM->>GW: Settlement / fee
  GW-->>AM: paymentProof
  AM->>Hook: afterSettlement(x402-event-v1)
  Hook-->>Lender: Collateral release recorded
```

---

## Onboarding settlement (simplified)

```mermaid
sequenceDiagram
  autonumber
  participant Investor
  participant AM as Agent Mailor
  participant KYC as KYC/AML gate
  participant Hook as X402PaymentHook
  participant GW as TROPTIONS x402 gateway

  Investor->>AM: Subscription intake
  AM->>KYC: Verify accredited / qualified status
  KYC-->>AM: cleared
  AM->>Hook: beforeSettlement(onboarding.settlement)
  Hook-->>AM: quote
  Investor->>GW: Pay onboarding fee (402 flow)
  GW-->>AM: paymentProof
  AM->>Hook: afterSettlement(x402-event-v1)
  Hook-->>Investor: Onboarding complete — troptionsmint path unlocked (milestone)
```

---

## Related

- [X402_INTEGRATION_SPECIFICATION.md](./X402_INTEGRATION_SPECIFICATION.md)
- [PAYMENT_HOOK_INTERFACE.md](./PAYMENT_HOOK_INTERFACE.md)
- [FTHTrading/Legacy BBS+ integration](https://github.com/FTHTrading/Legacy/blob/main/docs/BBS_PLUS_INTEGRATION.md)
