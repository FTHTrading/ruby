# BLS12-381 & BBS+ — Investor Overview

Gem credentials in the Allure Ruby program can use **BBS+** signatures on the **BLS12-381** curve. In plain terms: the issuer signs a bundle of asset claims; the holder can later show **only chosen fields** (for example title status and appraisal status) while keeping other fields private. Verification uses cryptographic pairings — it does **not** by itself prove a dollar valuation.

**Appraisal status:** until an independent appraisal is complete, disclosed presentations are expected to show appraisal as **TBD** and no certified NAV amount. BBS+ only attests that the issuer signed the claims on the credential, not that a third party agreed to a price.

Technical detail (curve equation, groups G₁/G₂, verification equation, and Legacy `BBSService` mapping):

- [Legacy — BBS+ Pairing Math](https://github.com/FTHTrading/Legacy/blob/main/docs/BBS_PLUS_PAIRING_MATH.md)
- [Legacy — BLS12-381 Curve](https://github.com/FTHTrading/Legacy/blob/main/docs/BLS12_381_CURVE.md)
- [Investor one-pager](../ruby-rwa/BBS_PAIRING_FOR_INVESTORS.md)
