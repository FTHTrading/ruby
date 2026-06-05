# Gem Asset Verifiable Credential Schemas (v1)

VCDM 2.0 `GemAssetCredential` for the **Allure Ruby + emerald bundle** RWA program.

> **Canonical schema** is maintained in both [FTHTrading/ruby](https://github.com/FTHTrading/ruby) (this repo) and [FTHTrading/Legacy](https://github.com/FTHTrading/Legacy). **Issuance happens only via Legacy Vault Protocol** — this repo holds documentation, JSON-LD definitions, and unsigned samples.

## VCDM 2.0

| Property | Value |
|----------|-------|
| `@context` | `https://www.w3.org/ns/credentials/v2` + `https://schema.fthtrading.com/gem/v1` |
| Validity | `validFrom` (required), `validUntil` (optional) |
| Media types | `application/vc` (credential), `application/vp` (presentation) |

## Files

| File | Purpose |
|------|---------|
| [`examples/bbs-lender-presentation.json`](./examples/bbs-lender-presentation.json) | BBS+ VP — lender desk (no dollar NAV) |
| [`examples/sample-rwa-manifest.json`](./examples/sample-rwa-manifest.json) | Vault manifest metadata sample |

See [Legacy `public/schemas/`](https://github.com/FTHTrading/Legacy/tree/main/public/schemas) for production JSON-LD.

## Proof formats

| Mechanism | Typical audience | Notes |
|-----------|------------------|-------|
| **SD-JWT** | Collateral lending, regulatory | Default issuance path |
| **BBS+** | Guardian internal, unlinkable lender VP | See [Legacy BBS+ integration](https://github.com/FTHTrading/Legacy/blob/main/docs/BBS_PLUS_INTEGRATION.md) |

## Valuation policy

`valuation.amount` is **null** in samples. Package economics are **TBD** until independent appraisal with `appraisalStatus: completed`.

## Issuance (Legacy only)

```
POST https://<legacy-host>/api/vc/issue/gem-asset
POST https://<legacy-host>/api/vc/present/bbs
POST https://<legacy-host>/api/vc/verify/bbs
```

## License

MIT (this repo).
