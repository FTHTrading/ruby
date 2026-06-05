# Transfer Hook — Implementation Placeholder

**Program ID:** `TROPTIONS_TRANSFER_HOOK_PROGRAM_ID_TBD`

Full program specification: [docs/tokenization/TRANSFER_HOOK_SPEC.md](../../docs/tokenization/TRANSFER_HOOK_SPEC.md)

---

## Status

| Item | State |
|------|-------|
| On-chain program | Not deployed — ID TBD |
| Legacy BBS+ gate | `POST /api/vc/present/bbs` (planned — Legacy Brick #2) |
| x402 `token.transfer` | Specified in [docs/x402/X402_INTEGRATION_SPECIFICATION.md](../../docs/x402/X402_INTEGRATION_SPECIFICATION.md) §4.5 |
| Relayer | Not in this repo |

---

## Intended repo layout (future)

```
tokenization/transfer-hook/
  README.md          # this file
  programs/          # Anchor / native Rust (future)
  idl/               # generated IDL (future)
  tests/             # devnet integration (future)
```

Brick #1 ships **interfaces only** in markdown specs.

---

## Minimal devnet stub (optional future)

If a minimal stub is added later, it should:

1. Parse memo for `policyVersion` + `packageRef`.
2. Approve transfers in `LOCAL_ADAPTER` mode only.
3. Reject when memo missing (mirror production fail-closed).

Do not commit real program IDs until audit completes.

---

## Integration test checklist (future)

- [ ] Token-2022 mint with hook + memo on devnet
- [ ] Legacy BBS+ mock returns `verified: true`
- [ ] Denied transfer emits `token.transfer.denied`
- [ ] x402 correlation id in memo matches audit log

---

## See also

- [TOKEN_2022_EXTENSIONS.md](../../docs/tokenization/TOKEN_2022_EXTENSIONS.md)
- Legacy: [TOKEN_2022_INTEGRATION.md](https://github.com/FTHTrading/Legacy/blob/main/docs/ruby-rwa/TOKEN_2022_INTEGRATION.md)
