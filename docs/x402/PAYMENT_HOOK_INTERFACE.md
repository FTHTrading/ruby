# x402 Payment Hook Interfaces

**Version:** 1.0 | **Date:** June 4, 2026  
**Status:** Reference TypeScript contracts (documentation only — not deployed from this repo)

These interfaces define the payment-hook surface for Troptions x402 integration with the Allure Ruby RWA program. Implementations live in **Legacy Vault**, **Agent Mailor**, and (milestone) **troptionsmint** orchestration.

> **Valuation:** Hooks must not compute NAV-based amounts from marketing estimates. Use flat fees or counsel-approved schedules until `valuation.appraisalStatus` is `completed`.

---

## Core types

```typescript
/** Troptions-internal protocol — not ISO/ERC/W3C standard */
export type X402SchemaVersion = "x402-event-v1";

export type X402RwaEventType =
  | "rwa.onboarding.settlement"
  | "rwa.revenue_share.distribution"
  | "rwa.collateral.pledge"
  | "rwa.collateral.release"
  | "rwa.spv.fee"
  | "rwa.lifecycle.anchor";

export type X402SettlementRail =
  | "apostle_chain"
  | "troptions_gateway"
  | "solana_transfer_hook"
  | "local_adapter";

export type X402DeploymentMode =
  | "LOCAL_ADAPTER"
  | "X402_READY"
  | "MOCK_BILLING"
  | "PRODUCTION_REQUIRES_GATEWAY";

export interface X402PaymentProof {
  type:
    | "local_adapter"
    | "apostle_chain_tx"
    | "troptions_gateway_receipt"
    | "solana_signature"
    | "http_402_header";
  txHash?: string;
  receiptId?: string;
  meteringCorrelationId?: string;
  presentedAt?: string;
}

export interface X402SelectiveDisclosureRef {
  presentationDigest: string;
  disclosedClaims: string[];
  verifiedAt: string;
}

export interface X402EventV1 {
  schemaVersion: X402SchemaVersion;
  eventId: string;
  idempotencyKey: string;
  eventType: X402RwaEventType;
  packageRef: string;
  spvDid?: string;
  amount: string;
  currency: string;
  settlementRail: X402SettlementRail;
  paymentProof: X402PaymentProof;
  selectiveDisclosure?: X402SelectiveDisclosureRef;
  occurredAt: string;
  metadata?: Record<string, unknown>;
}
```

---

## Idempotency

```typescript
export interface X402IdempotencyKeyParts {
  packageRef: string;
  eventType: X402RwaEventType;
  businessKey: string;
  version: number;
}

/** Format: x402:{packageRef}:{eventType}:{businessKey}:{version} */
export type X402IdempotencyKey = `x402:${string}:${X402RwaEventType}:${string}:${number}`;

export interface X402IdempotencyStore {
  /** Returns cached event if key already settled successfully */
  get(idempotencyKey: X402IdempotencyKey): Promise<X402EventV1 | null>;

  /** Persists event after successful settlement; rejects duplicate in-flight keys */
  put(event: X402EventV1): Promise<void>;
}

export interface X402IdempotencyKeyFactory {
  build(parts: X402IdempotencyKeyParts): X402IdempotencyKey;
  parse(key: X402IdempotencyKey): X402IdempotencyKeyParts;
}
```

---

## Payment hooks

```typescript
export interface X402SettlementContext {
  mode: X402DeploymentMode;
  packageRef: string;
  spvDid?: string;
  namespaceId?: string;
  requestedBy: "agent_mailor" | "operator" | "automated_scheduler";
}

export interface X402SettlementQuote {
  amount: string;
  currency: string;
  settlementRail: X402SettlementRail;
  expiresAt: string;
  /** HTTP 402 body fields when rail is troptions_gateway */
  payTo?: string;
  challenge?: string;
}

export interface X402BeforeSettlementInput {
  ctx: X402SettlementContext;
  eventType: X402RwaEventType;
  idempotencyKey: X402IdempotencyKey;
  quote: X402SettlementQuote;
  selectiveDisclosure?: X402SelectiveDisclosureRef;
}

export interface X402BeforeSettlementResult {
  allowed: boolean;
  reason?: string;
  /** When false, client must obtain BBS+ presentation first */
  requiresSelectiveDisclosure?: boolean;
}

export interface X402PaymentHook {
  beforeSettlement(
    input: X402BeforeSettlementInput
  ): Promise<X402BeforeSettlementResult>;

  requirePaymentProof(
    quote: X402SettlementQuote,
    incomingProof: X402PaymentProof | null
  ): Promise<{ valid: boolean; normalizedProof?: X402PaymentProof; error?: string }>;

  afterSettlement(event: X402EventV1): Promise<{ anchored: boolean; anchorRef?: string }>;

  onSettlementFailure(
    input: X402BeforeSettlementInput,
    error: Error
  ): Promise<{ retryable: boolean; deadLetterRef?: string }>;
}
```

---

## Selective disclosure hook

Legacy Vault exposes `POST /api/vc/present/bbs`. Payment flows call this hook **before** sensitive settlements.

```typescript
export interface BbsPresentRequest {
  credential: Record<string, unknown>;
  disclosedClaims: string[];
  challenge?: string;
}

export interface BbsPresentResponse {
  status: "presented" | "mock";
  presentation: Record<string, unknown>;
  disclosedClaims: string[];
  mock?: boolean;
}

/** Minimum claims by event type — extend per counsel */
export const X402_REQUIRED_DISCLOSURES: Partial<
  Record<X402RwaEventType, readonly string[]>
> = {
  "rwa.collateral.pledge": ["titleStatus", "valuation.appraisalStatus"],
  "rwa.collateral.release": ["titleStatus", "lienStatus", "valuation.appraisalStatus"],
  "rwa.revenue_share.distribution": ["spvDid"],
};

export interface X402SelectiveDisclosureHook {
  /**
   * Calls Legacy POST /api/vc/present/bbs and returns digest for x402-event-v1
   */
  presentAndDigest(
    request: BbsPresentRequest,
    eventType: X402RwaEventType
  ): Promise<X402SelectiveDisclosureRef>;

  verifyRequiredClaims(
    eventType: X402RwaEventType,
    disclosedClaims: readonly string[]
  ): { ok: boolean; missing?: string[] };
}
```

---

## Composed handler (reference)

```typescript
export interface X402SettlementHandlerDeps {
  paymentHook: X402PaymentHook;
  disclosureHook: X402SelectiveDisclosureHook;
  idempotency: X402IdempotencyStore;
  idempotencyKeyFactory: X402IdempotencyKeyFactory;
}

export interface X402SettlementRequest {
  ctx: X402SettlementContext;
  eventType: X402RwaEventType;
  businessKey: string;
  version: number;
  quote: X402SettlementQuote;
  paymentProof?: X402PaymentProof;
  bbsPresentRequest?: BbsPresentRequest;
}

export interface X402SettlementHandler {
  execute(request: X402SettlementRequest): Promise<X402EventV1>;
}
```

---

## Related documentation

- [X402_INTEGRATION_SPECIFICATION.md](./X402_INTEGRATION_SPECIFICATION.md) — sections 6–8
- [schemas/x402-event-v1.json](./schemas/x402-event-v1.json)
- [FTHTrading/Legacy `lib/x402/index.ts`](https://github.com/FTHTrading/Legacy/blob/main/lib/x402/index.ts) — metered service catalog (Legacy Vault scope)
