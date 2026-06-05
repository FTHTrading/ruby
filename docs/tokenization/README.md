# Tokenization Documentation — Allure Ruby / Siam Emerald RWA

Engineering specs for Solana **Token-2022** extensions, on-chain compliance hooks, and metadata linkage to [FTHTrading/Legacy](https://github.com/FTHTrading/Legacy) (Legacy Vault) and [troptionsmint.com](https://troptionsmint.com) (institutional mint console).

**Valuation policy:** Independent appraisal is **TBD**. Documentation does not assert package NAV or dollar valuations.

---

## Documents

| Document | Purpose |
|----------|---------|
| [TOKEN_2022_EXTENSIONS.md](./TOKEN_2022_EXTENSIONS.md) | Extension catalog, priorities, phased rollout, stack integration |
| [TRANSFER_HOOK_SPEC.md](./TRANSFER_HOOK_SPEC.md) | Draft Transfer Hook program spec (interfaces; no deployed program ID) |
| [METADATA_SCHEMA_RWA.json](./METADATA_SCHEMA_RWA.json) | Example public metadata JSON (sample URIs only) |
| [../x402/X402_INTEGRATION_SPECIFICATION.md](../x402/X402_INTEGRATION_SPECIFICATION.md) | x402 + `token.transfer` event types (section 4.5) |

---

## Implementation layout

| Path | Status |
|------|--------|
| `tokenization/transfer-hook/README.md` | Stub / program placeholder notes |
| `architecture/troptionsmint.md` | troptionsmint console alignment |
| `pdfs/templates/token-2022-rwa-extensions.md` | PDF-ready executive summary |
| `docs/client-facing/ONE_PAGER.md` | Client-facing Token-2022 paragraph |

---

## Cross-repo

| Repo | Doc |
|------|-----|
| **Legacy** | [docs/ruby-rwa/TOKEN_2022_INTEGRATION.md](https://github.com/FTHTrading/Legacy/blob/main/docs/ruby-rwa/TOKEN_2022_INTEGRATION.md) — BBS+ presentation gate, manifest URIs |
| **Legacy** | [docs/ruby-rwa/TOKEN_METADATA.md](https://github.com/FTHTrading/Legacy/blob/main/docs/ruby-rwa/TOKEN_METADATA.md) — URI pattern (Brick #1) |
| **Legacy** | [docs/X402_INTEGRATION.md](https://github.com/FTHTrading/Legacy/blob/main/docs/X402_INTEGRATION.md) — HTTP 402 metered services |

---

## Program IDs

Use placeholder only until audit and deployment:

```
TROPTIONS_TRANSFER_HOOK_PROGRAM_ID_TBD
```

---

## Phases (summary)

| Phase | Focus |
|-------|--------|
| **0** | Metadata Pointer + off-chain JSON (Legacy URIs) |
| **1** | Default Account Frozen + thaw policy |
| **2** | Memo Required on transfers |
| **3** | Transfer Hook + Legacy BBS+ / x402 / chain log interfaces |

See [TOKEN_2022_EXTENSIONS.md](./TOKEN_2022_EXTENSIONS.md) for detail.
