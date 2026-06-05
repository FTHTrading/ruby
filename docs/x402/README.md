# x402 — Troptions Payment Protocol (RWA)

**Canonical specification:** [X402_INTEGRATION_SPECIFICATION.md](./X402_INTEGRATION_SPECIFICATION.md) (v1.0, June 4, 2026)

Documentation for **x402** as the Troptions-internal programmable settlement rail for the **Allure Ruby & Siam Emerald** RWA program. x402 is **not** claimed as an ISO, ERC, or W3C standard.

---

## Documents

| Document | Purpose |
|----------|---------|
| [X402_INTEGRATION_SPECIFICATION.md](./X402_INTEGRATION_SPECIFICATION.md) | Full integration spec (sections 1–10) |
| [PAYMENT_HOOK_INTERFACE.md](./PAYMENT_HOOK_INTERFACE.md) | TypeScript payment hooks, selective disclosure hook, idempotency |
| [SEQUENCE_FLOWS.md](./SEQUENCE_FLOWS.md) | Mermaid: revenue share, collateral management, onboarding |
| [schemas/x402-event-v1.json](./schemas/x402-event-v1.json) | JSON Schema for settlement events |
| [../architecture/x402.md](../../architecture/x402.md) | FULL_STACK architecture slice |
| [../../pdfs/templates/x402-integration-spec.md](../../pdfs/templates/x402-integration-spec.md) | PDF-ready export template |

---

## Ecosystem links

| System | Role | Repository / URL |
|--------|------|------------------|
| **Legacy Vault Protocol** | VC issuance, BBS+ `POST /api/vc/present/bbs`, x402 adapter | [FTHTrading/Legacy](https://github.com/FTHTrading/Legacy) — [`docs/ruby-rwa/x402/INTEGRATION.md`](https://github.com/FTHTrading/Legacy/blob/main/docs/ruby-rwa/x402/INTEGRATION.md) |
| **troptionsmint** | Solana Token-2022 institutional mint | [troptionsmint.com](https://troptionsmint.com) |
| **Agent Mailor** | AI client-operations; onboarding and settlement orchestration | Troptions ecosystem (external) |
| **GMIIE / xxxiii.io** | Market intelligence — **not** independent appraisal | [xxxiii.io](https://xxxiii.io) |

---

## Valuation policy

**Target package value is subject to independent third-party appraisal (TBD).** x402 events and hooks must not embed or compute asserted NAV from marketing-scale planning figures. See spec §9.3.

---

## Recommended next steps

Engineering should choose between two milestone paths (can proceed in parallel):

| Path | Description | When to prefer |
|------|-------------|----------------|
| **A — Solana program ID stub** | Document transfer-hook program interface in troptionsmint; placeholder program id in config; align `X402EventV1.metadata.tokenMintRef` | Need on-chain compliance gating narrative before gateway is live |
| **B — Worker implementation** | Deploy TROPTIONS x402 Cloudflare Worker gateway; wire Legacy `PRODUCTION_REQUIRES_GATEWAY` services | Need production metered API and USDF settlement first |

**Recommendation:** Start **B (Worker)** for Legacy metered exports and onboarding fees (existing `lib/x402` catalog), while **A (Solana stub)** tracks Token-2022 transfer-hook alignment in troptionsmint — merge event schemas at the gateway so both rails emit `x402-event-v1`.

---

## Client-facing cross-links

- [ONE_PAGER.md](../client-facing/ONE_PAGER.md) — executive summary (x402 row)
- [TERM_SHEET_LANGUAGE.md](../client-facing/TERM_SHEET_LANGUAGE.md) — §9 x402 settlement template

*Last updated: June 4, 2026*
