# troptionsmint

**Owner:** troptionsmint.com (institutional Solana console) — integrated via Legacy metadata URIs

## Role in gem RWA

- Token-2022 mint with extensions (transfer hooks, compliance gating)
- Metadata bundle linking to Legacy provenance and VC proof URIs
- One-transaction mint + freeze/mint authority revocation for immutability
- Sandbox → mainnet promotion gated by ruby milestones

## Data bind flow

1. Legacy publishes `AssetProvenanceCredential` and manifest CIDs (encrypted payloads stay private).
2. troptionsmint reads `GET /api/rwa/provenance/{tokenId}` before/after mint.
3. On-chain metadata includes `manifestUri`, `vcProofUri`, `spv.did` per [TOKEN_METADATA.md](https://github.com/FTHTrading/Legacy/blob/main/docs/ruby-rwa/TOKEN_METADATA.md).

## Ruby scope

Token economics and raise structure are tracked in `/tracking` and client-facing docs — not implemented in this repo.
