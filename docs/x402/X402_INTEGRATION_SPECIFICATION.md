# x402 Integration Specification — FTHTrading Ruby RWA

Cross-cutting x402 (HTTP 402 Payment Required) behavior for the Allure Ruby / Siam Emerald RWA program. Aligns with [FTHTrading/Legacy — X402_INTEGRATION.md](https://github.com/FTHTrading/Legacy/blob/main/docs/X402_INTEGRATION.md) and Token-2022 transfer hooks.

**Valuation:** No NAV in x402 payloads. Appraisal **TBD**.

---

## 1. Scope

| Surface | Role |
|---------|------|
| Legacy Vault metered APIs | Export, compliance, provenance calls |
| troptionsmint mint workflow | Operator-initiated; optional pre-mint x402 for manifest publish |
| Token-2022 transfers | `token.transfer` events correlated via transfer memo |

---

## 2. Modes (aligned with Legacy)

| Mode | Behavior |
|------|----------|
| `LOCAL_ADAPTER` | Dev — no payment enforced |
| `X402_READY` | Accepts `X-Payment` proof headers |
| `MOCK_BILLING` | Records usage, no enforcement |
| `PRODUCTION_REQUIRES_GATEWAY` | Requires configured gateway + Apostle Chain settlement |

---

## 3. Service catalog (reference)

Ruby RWA does not duplicate the full Legacy price table. See Legacy doc for `EXECUTOR_PACKET_EXPORT`, `COMPLIANCE_REPORT`, `API_METERED_CALL`, etc.

**Planned RWA-specific service id (TBD in Legacy `lib/x402/index.ts`):**

| Service ID | Purpose | Status |
|------------|---------|--------|
| `TOKEN_TRANSFER_COMPLIANCE_TBD` | Metered BBS+ / policy check at transfer | Planned |

---

## 4. Payment flow (summary)

1. Client calls protected endpoint → `402 Payment Required` with `{ amount, currency, payTo }`.
2. Client settles on Apostle Chain (USDF, 7 decimals) per Legacy spec.
3. Client retries with `X-Payment: <tx-hash>`.
4. Server validates receipt and fulfills request.

Full sequence: [Legacy X402_INTEGRATION.md](https://github.com/FTHTrading/Legacy/blob/main/docs/X402_INTEGRATION.md).

---

## 4.5 Token-2022 hooks + `token.transfer` events

Token-2022 transfers with **Required Memo** and optional **Transfer Hook** must emit or correlate audit events for compliance and billing.

### Event types

| Event type | Trigger | Payload highlights |
|------------|---------|-------------------|
| `token.transfer` | SPL transfer attempted (approved or denied) | `mint`, `source`, `destination`, `amount`, `memo`, `signature?` |
| `token.transfer.compliance_check` | Hook or relayer calls Legacy BBS+ / policy API | `proofId`, `serviceId`, `x402PaymentProof?` |
| `token.transfer.denied` | Hook reject | `reasonCode` (see TRANSFER_HOOK_SPEC) |

### Memo format (required when Memo extension enabled)

Compact JSON (UTF-8, max size per Solana memo limits):

```json
{
  "v": 1,
  "eventType": "token.transfer",
  "packageRef": "fth-allure-ruby-2026",
  "policyVersion": "2026-06-rwa-1",
  "correlationId": "urn:uuid:SAMPLE-CORRELATION-ID",
  "transferIntent": "secondary"
}
```

| Field | Required | Notes |
|-------|----------|-------|
| `v` | Yes | Schema version |
| `eventType` | Yes | Always `token.transfer` for standard transfers |
| `packageRef` | Yes | Links to Legacy RWA manifest |
| `policyVersion` | Yes | Hook policy registry version |
| `correlationId` | Yes | Idempotency for x402 + audit log |
| `transferIntent` | No | `primary_issue`, `secondary`, `custody`, `collateral` |

### x402 correlation

When `properties.x402_payment_hook.enabled` is true in metadata ([METADATA_SCHEMA_RWA.json](../tokenization/METADATA_SCHEMA_RWA.json)):

1. Relayer or indexer parses memo → `correlationId`.
2. If metered check required, relayer calls Legacy with `X-Payment` before `POST /api/vc/present/bbs`.
3. On success, emit `token.transfer.compliance_check` with same `correlationId`.
4. Anchor `TransferDecision` to Legacy Layer 0 (interface — see [TRANSFER_HOOK_SPEC.md](../tokenization/TRANSFER_HOOK_SPEC.md)).

### Hook program

Transfer Hook program id: `TROPTIONS_TRANSFER_HOOK_PROGRAM_ID_TBD` — hook does not parse x402 headers on-chain; off-chain relayer only.

---

## 5. USDF settlement

USDF on Apostle Chain (chain_id `7332`), 7 decimal places. Ruby spec references Legacy settlement; no duplicate treasury config.

---

## 6. Related docs

- [TOKEN_2022_EXTENSIONS.md](../tokenization/TOKEN_2022_EXTENSIONS.md)
- [TRANSFER_HOOK_SPEC.md](../tokenization/TRANSFER_HOOK_SPEC.md)
- Legacy: [TOKEN_2022_INTEGRATION.md](https://github.com/FTHTrading/Legacy/blob/main/docs/ruby-rwa/TOKEN_2022_INTEGRATION.md)

---

*Engineering specification — not legal or investment advice.*
