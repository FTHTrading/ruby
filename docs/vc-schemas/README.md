# Gem Asset Verifiable Credential Schemas (v1)

VCDM 2.0 `GemAssetCredential` for the **Allure Ruby + emerald bundle** RWA program.

> **Canonical schema** is maintained in both [FTHTrading/ruby](https://github.com/FTHTrading/ruby) (this repo) and [FTHTrading/Legacy](https://github.com/FTHTrading/Legacy). **Issuance happens only via Legacy Vault Protocol** — this repo holds documentation, JSON-LD definitions, and unsigned samples.

Gem asset credentials support **BBS+** selective disclosure (`proofType: bbs`) alongside SD-JWT. Operator crypto and key setup: [Legacy BBS+ integration](https://github.com/FTHTrading/Legacy/blob/main/docs/BBS_PLUS_INTEGRATION.md).

## VCDM 2.0

| Property | Value |
|----------|-------|
| `@context` | `https://www.w3.org/ns/credentials/v2` + `https://schema.fthtrading.com/gem/v1` |
| Validity | `validFrom` (required), `validUntil` (optional) — not `issuanceDate` / `expirationDate` |
| Media types | `application/vc` (credential), `application/vp` (presentation) |

## Files

| File | Purpose |
|------|---------|
| [`examples/bbs-lender-presentation.json`](./examples/bbs-lender-presentation.json) | BBS+ VP — lender desk (`valuationThresholdMet`, no dollar NAV) |
| [`examples/bbs-lender-presentation-explained.md`](./examples/bbs-lender-presentation-explained.md) | Field-by-field BBS+ lender VP walkthrough |

Full schema JSON-LD and additional samples ship on [`feat/gem-asset-vc-schema-v1`](https://github.com/FTHTrading/ruby/tree/feat/gem-asset-vc-schema-v1/docs/vc-schemas) and [Legacy `public/schemas/`](https://github.com/FTHTrading/Legacy/tree/main/public/schemas).

## Dual proof formats (side-by-side)

| Mechanism | Example | `proof.type` | Typical group |
|-----------|---------|--------------|---------------|
| **SD-JWT** (default issuance) | [`gem-vc-sd-jwt.json`](./examples/gem-vc-sd-jwt.json) | `SdJwtVcProof2024` | `collateral_lending` |
| **Data Integrity BBS+** | [`gem-vc-data-integrity-bbs.json`](./examples/gem-vc-data-integrity-bbs.json) | `BbsBlsSignature2020` | `guardian_internal` (issuance) |

Presentations use `BbsBlsSignatureProof2020` for BBS+ (`application/vp`). See Legacy [`docs/DATA_INTEGRITY_VS_SD_JWT.md`](https://github.com/FTHTrading/Legacy/blob/main/docs/DATA_INTEGRITY_VS_SD_JWT.md).

## Ecosystem integration

| Integration | VC claim | System |
|-------------|----------|--------|
| Custody & certs | `vaultRef`, `manifestCID` | Legacy Vault Protocol |
| Immutable registry | `chainAnchorRef` | Legacy Chain |
| On-chain RWA | `linkedRWATokens`, `troptionsmintMetadata` | troptionsmint.com (Solana Token-2022) |
| NAV / risk feeds | `oracleRef` | GMIIE (xxxiii.io) |

## Selective disclosure

| Group | Audience | Mechanism |
|-------|----------|-----------|
| `collateral_lending` | Lenders / collateral desks | SD-JWT (primary) |
| `secondary_market` | Marketplace counterparties | SD-JWT (presentations: BBS+ when unlinkability required) |
| `regulatory_full` | Regulators / accredited investors | SD-JWT (full claims) |
| `guardian_internal` | Legacy guardian quorum | BBS+ (high privacy) |

See [`gem-asset-v1.jsonld`](./gem-asset-v1.jsonld) `selectiveDisclosure` block.

## Valuation policy

The `valuation.amount` field is **intentionally null** in samples. This repository does **not** assert package NAV. Populate only after an independent third-party appraisal with `appraisalStatus: completed`.

## Issuance (Legacy only)

```
POST https://<legacy-host>/api/vc/issue/gem-asset
Content-Type: application/json

{ "proofType": "sd-jwt", "credentialSubject": { ... } }
```

| `proofType` | Production | Dev |
|-------------|------------|-----|
| `sd-jwt` | `501` until HSM / SD-JWT npm | `GEM_VC_ISSUANCE_MOCK=true` |
| `bbs` | Real crypto with `BBS_*_KEY_HEX` | `MOCK_BBS=true` |

Operator doc: [Legacy `docs/ruby-rwa/GEM_ASSET_VC_SCHEMA.md`](https://github.com/FTHTrading/Legacy/blob/main/docs/ruby-rwa/GEM_ASSET_VC_SCHEMA.md)

## Client-facing

- [BBS+ selective disclosure explainer](../client-facing/BBS_SELECTIVE_DISCLOSURE_EXPLAINER.md)

## License

MIT (this repo). Legacy issuance stack remains proprietary.
