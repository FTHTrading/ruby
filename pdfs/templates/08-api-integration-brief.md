# API Integration Brief

## Legacy Vault

| Method | Path |
|--------|------|
| POST | `/api/vault/upload` |
| POST | `/api/rwa/manifest` |
| GET | `/api/rwa/provenance/{tokenId}` |

## Verifiable credentials (feature branches)

| Method | Path |
|--------|------|
| POST | `/api/vc/issue/gem-asset` |
| POST | `/api/vc/present/bbs` |
| POST | `/api/vc/verify/bbs` |

## troptionsmint

Pull provenance URI → attach metadata → mint Token-2022 → revoke authorities per policy.

## x402

HTTP 402 metered exports — see Legacy `X402_INTEGRATION.md`.

Full guide: `docs/API_INTEGRATION.md` in FTHTrading/ruby.
