# API Integration Guide

Endpoint map for connecting institutional workflows to **Legacy Vault** and **troptionsmint**. Paths reflect Legacy `main` and open feature branches; verify deployment base URL per environment.

## Legacy Vault — RWA manifests

| Method | Path | Purpose |
|--------|------|---------|
| `POST` | `/api/vault/upload` | Encrypted document upload |
| `GET` | `/api/vault/manifest` | Vault manifest retrieval |
| `POST` | `/api/rwa/manifest` | Create/update RWA intake manifest (`packageRef` from ruby) |
| `GET` | `/api/rwa/provenance/{tokenId}` | Provenance bundle for troptionsmint metadata |

**ruby → Legacy:** After intake checklist completion, call `POST /api/rwa/manifest` with `packageRef` and document summary labels (no raw cert numbers in public issues).

## Legacy — Verifiable credentials (feature branches)

| Method | Path | Branch / PR |
|--------|------|-------------|
| `POST` | `/api/vc/issue/gem-asset` | `feat/bbs-plus-real-crypto` — [#16](https://github.com/FTHTrading/Legacy/pull/16) |
| `POST` | `/api/vc/present/bbs` | Selective disclosure presentation |
| `POST` | `/api/vc/verify/bbs` | Presentation verification |

Schema: [gem-asset-v1-with-bbs.jsonld](https://github.com/FTHTrading/Legacy/blob/main/docs/vc-schemas/gem-asset-v1-with-bbs.jsonld)

## troptionsmint (external console)

| Step | Action |
|------|--------|
| 1 | Pull provenance URI from Legacy `GET /api/rwa/provenance/{tokenId}` |
| 2 | Attach metadata per [TOKEN_METADATA.md](https://github.com/FTHTrading/Legacy/blob/main/docs/ruby-rwa/TOKEN_METADATA.md) |
| 3 | Mint Token-2022 with compliance hooks; revoke mint/freeze authority per policy |

## x402-gated exports

Metered Legacy exports use HTTP 402 — see [X402_INTEGRATION.md](https://github.com/FTHTrading/Legacy/blob/main/docs/X402_INTEGRATION.md).

| Service | Example amount |
|---------|----------------|
| Compliance report | 1.00 USDF |
| Audit log export | 0.25 USDF |

## GMIIE oracle reference

Optional field on manifest / VC:

```json
{
  "gmiiOracleRef": "gmii://comp-snapshot/2026-06/example"
}
```

Oracle comps are indicative — not appraisal.

## Authentication & secrets

- No API keys or private keys in the ruby repository.
- Production: managed identity, namespace-scoped vault roles, x402 payment proofs.
- Development: `LOCAL_ADAPTER` per Legacy x402 modes.

## TypeScript stubs (this repo)

| Module | Functions |
|--------|-----------|
| [`lib/integrations/legacy-vault.ts`](../lib/integrations/legacy-vault.ts) | `createRwaManifest`, `getVaultManifest`, `getRwaProvenance`, `presentBbsVc`, `verifyBbsPresentation` |
| [`lib/integrations/troptionsmint.ts`](../lib/integrations/troptionsmint.ts) | `prepareTokenMint`, `validateRwaMetadata` |

Environment (no secrets committed):

| Variable | Purpose |
|----------|---------|
| `LEGACY_VAULT_BASE_URL` | Legacy API origin (default `http://localhost:3001`) |
| `LEGACY_VAULT_API_TOKEN` | Optional staging bearer |
| `TROPTIONSMINT_BASE_URL` | Mint console API (default `https://troptionsmint.com`) |
| `SOLANA_CLUSTER` | `devnet` or `mainnet-beta` |

Legacy PR [#19](https://github.com/FTHTrading/Legacy/pull/19) consolidates RWA manifest and BBS+ routes referenced above.

## Related diagrams

- [architecture/FULL_STACK.md](../architecture/FULL_STACK.md)
- [Legacy INTEGRATION_MAP.md](https://github.com/FTHTrading/Legacy/blob/main/docs/ruby-rwa/INTEGRATION_MAP.md)
