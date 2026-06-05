# Documentation Index — Allure Ruby RWA

MIT-licensed institutional materials. **Issuance and vault crypto run in [FTHTrading/Legacy](https://github.com/FTHTrading/Legacy)** — this repo is the client portal, architecture, and integration contracts.

## Client-facing

| Document | Description |
|----------|-------------|
| [client-facing/README.md](./client-facing/README.md) | Index for one-pager, deck, term sheet |
| [client-facing/ONE_PAGER.md](./client-facing/ONE_PAGER.md) | Executive summary (appraisal TBD) |
| [client-facing/SLIDE_DECK_OUTLINE.md](./client-facing/SLIDE_DECK_OUTLINE.md) | Presenter outline |
| [client-facing/TERM_SHEET_LANGUAGE.md](./client-facing/TERM_SHEET_LANGUAGE.md) | Non-binding template for counsel |
| [client-facing/PRICING_AND_PROGRAM_SCOPE.md](./client-facing/PRICING_AND_PROGRAM_SCOPE.md) | Fees, deliverables, cost comparison (non-binding) |

## Program & integration

| Document | Description |
|----------|-------------|
| [WHITEPAPER_RWA_GEMS.md](./WHITEPAPER_RWA_GEMS.md) | Institutional whitepaper draft |
| [API_INTEGRATION.md](./API_INTEGRATION.md) | Legacy Vault + troptionsmint endpoint map |

## Tokenization (Solana Token-2022)

| Document | Description |
|----------|-------------|
| [tokenization/README.md](./tokenization/README.md) | Index |
| [tokenization/TOKEN_2022_EXTENSIONS.md](./tokenization/TOKEN_2022_EXTENSIONS.md) | Extension matrix |
| [tokenization/TRANSFER_HOOK_SPEC.md](./tokenization/TRANSFER_HOOK_SPEC.md) | Compliance hook spec |
| [tokenization/METADATA_SCHEMA_RWA.json](./tokenization/METADATA_SCHEMA_RWA.json) | JSON Schema for on-chain metadata |

## x402 metered access

| Document | Description |
|----------|-------------|
| [x402/README.md](./x402/README.md) | Index |
| [x402/X402_INTEGRATION_SPECIFICATION.md](./x402/X402_INTEGRATION_SPECIFICATION.md) | HTTP 402 contract |

## Verifiable credentials

| Document | Description |
|----------|-------------|
| [vc-schemas/README.md](./vc-schemas/README.md) | GemAssetCredential v1, BBS+ / SD-JWT |
| [vc-schemas/examples/](./vc-schemas/examples/) | Sample VC, VP, manifest JSON |
| [vc-schemas/BLS12_381_OVERVIEW.md](./vc-schemas/BLS12_381_OVERVIEW.md) | Curve overview for investors |

## Architecture (ruby repo)

| Document | Description |
|----------|-------------|
| [../architecture/SYSTEM_OVERVIEW.md](../architecture/SYSTEM_OVERVIEW.md) | Layer diagram |
| [../architecture/FULL_STACK.md](../architecture/FULL_STACK.md) | Sequence + roadmap |
| [../architecture/legacy-vault.md](../architecture/legacy-vault.md) | Vault |
| [../architecture/legacy-chain.md](../architecture/legacy-chain.md) | Registry |
| [../architecture/troptionsmint.md](../architecture/troptionsmint.md) | Mint console |
| [../architecture/x402.md](../architecture/x402.md) | Metered exports |
| [../architecture/agent-mailor.md](../architecture/agent-mailor.md) | Agent ops |
| [../architecture/gmii.md](../architecture/gmii.md) | Oracle refs |
| [../architecture/bbs-vcdm.md](../architecture/bbs-vcdm.md) | BBS+ / VCDM 2.0 |

## TypeScript integration stubs

| Path | Description |
|------|-------------|
| [../lib/integrations/legacy-vault.ts](../lib/integrations/legacy-vault.ts) | Manifest + VC present/verify |
| [../lib/integrations/troptionsmint.ts](../lib/integrations/troptionsmint.ts) | Metadata types + prepare mint |

## PDF generation

```bash
npm run pdfs
```

| Path | Description |
|------|-------------|
| [../pdfs/README.md](../pdfs/README.md) | Eight templates → `pdfs/output/` |
| [../pdfs/assets/troptions.css](../pdfs/assets/troptions.css) | Troptions header stylesheet |

## Client portal

Next.js site: [../site/README.md](../site/README.md) — `npm run dev` in `/site`.

## Related Legacy PRs

| Topic | Link |
|-------|------|
| VCDM 2.0 + BBS consolidated | [PR #19](https://github.com/FTHTrading/Legacy/pull/19) |
| Token-2022 integration | [PR #20](https://github.com/FTHTrading/Legacy/pull/20) |
| BBS lender samples | [PR #18](https://github.com/FTHTrading/Legacy/pull/18) |
