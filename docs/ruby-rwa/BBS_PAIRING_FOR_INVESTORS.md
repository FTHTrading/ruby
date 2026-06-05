# BBS+ Pairing — Investor Summary (Allure Ruby)

One-page overview for LPs, lenders, and counsel. **No math** — technical detail lives in Legacy Vault.

## In plain terms

- The issuer signs a **bundle of gem asset claims** using **BBS+** on **BLS12-381**.
- The holder can later prove **only chosen fields** to a verifier (for example title status, legal owner, policy gates) while keeping other fields private.
- Verification confirms the **issuer signed** the disclosed fields. It does **not** certify a dollar NAV or replace an independent appraisal.

## Appraisal & valuation

Until a third-party appraisal is on file, presentations should show **appraisal TBD** and **no certified amount**. Do not treat marketing NAV figures as credential facts.

## Technical documentation

| Resource | Link |
|----------|------|
| Pairing math & `BBSService` map | [Legacy — BBS_PLUS_PAIRING_MATH](https://github.com/FTHTrading/Legacy/blob/main/docs/BBS_PLUS_PAIRING_MATH.md) |
| Curve groups G₁ / G₂ / G_T | [Legacy — BLS12_381_CURVE](https://github.com/FTHTrading/Legacy/blob/main/docs/BLS12_381_CURVE.md) |
| Short curve overview | [BLS12_381_OVERVIEW](../vc-schemas/BLS12_381_OVERVIEW.md) |
| E2E demo | [Legacy — bbs-allure-ruby-e2e](https://github.com/FTHTrading/Legacy/blob/main/docs/ruby-rwa/examples/bbs-allure-ruby-e2e.md) |

## Demo (Legacy repo)

```bash
MOCK_BBS=false pnpm demo:bbs-allure-ruby
```
