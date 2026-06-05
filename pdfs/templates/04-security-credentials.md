# Security & Verifiable Credentials

## Storage security

- AES-256-GCM encryption before private IPFS
- SHA-256 manifest hashing
- Multi-proof release engine (no unilateral unlock)

## Presentation security (BBS+)

- Curve: BLS12-381 (`BLS12-381-SHA-256` ciphersuite in Legacy)
- Issuer public key in G₂; signature body in G₁
- Holders derive proofs disclosing only approved claim indexes

## VCDM 2.0

GemAssetCredential schema v1 — implementation and APIs in FTHTrading/Legacy.

## Documentation only in ruby

This repository does not ship BBSService code. See Legacy:

- `docs/BBS_PLUS_INTEGRATION.md`
- `docs/BLS12_381_CURVE.md`
- `docs/BLS12_CURVE_FAMILY.md`
