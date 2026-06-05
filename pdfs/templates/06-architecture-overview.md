# Architecture Overview

## Repositories

| Repo | Role |
|------|------|
| FTHTrading/ruby | Planning, client portal, PDF templates |
| FTHTrading/Legacy | Vault, VC/BBS+, APIs, audit |
| troptionsmint | Solana mint console |

## Integration highlights

- `POST /api/rwa/manifest` — intake bridge
- `GET /api/rwa/provenance/{tokenId}` — mint metadata
- `POST /api/vc/issue/gem-asset` — credential issuance (feature branch)
- x402 — metered exports

## Diagram

Refer to mermaid diagrams in `architecture/SYSTEM_OVERVIEW.md` and `FULL_STACK.md`.
