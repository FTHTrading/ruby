# Slide Deck Outline — Allure Ruby & Siam Emerald RWA

**Target length:** 12–15 slides | **Audience:** Family offices, institutional investors, strategic partners  
**Tone:** Professional, evidence-led | **Valuation language:** Target package value **subject to independent appraisal (TBD)**

---

## Slide 1 — Title

**Title:** Institutional RWA Tokenization — Allure Ruby & Siam Emerald Program  
**Subtitle:** Sovereign provenance · Compliant issuance · Programmable operations

**Speaker notes:**
- Frame as infrastructure + asset program, not a single “NFT drop.”
- Name FTHTrading / Troptions ecosystem; no client-specific identifiers in generic deck.

---

## Slide 2 — Why colored-gem RWAs now

**Bullets:**
- Exceptional assets lack institutional-grade digital lifecycle tooling
- Custody, title, and lab data are sensitive — public-chain-only models fail
- Family offices seek collateralization and structured liquidity without forced sale

**Speaker notes:**
- Acknowledge long settlement times and bespoke diligence in traditional gem finance.
- Avoid hype; cite need for auditability, not market timing slogans.

---

## Slide 3 — The asset package (high level)

**Bullets:**
- **Primary:** 54.00 ct heated ruby (“Allure Ruby”) — multi-lab gemological certification; East Africa / Madagascar origin context
- **Secondary:** Polished emerald — Siam / Thailand trading-hub and global market context
- **Valuation:** Target package value **TBD — independent third-party appraisal required**
- Optional parallel track: commodity / SKR collateral (separate diligence)

**Speaker notes:**
- Do **not** read a dollar figure as binding NAV in live presentations.
- Certificates and PDFs remain in Legacy Vault — not in this repo or slide annex.

---

## Slide 4 — What institutions require

**Bullets:**
- Verifiable chain of custody and title
- SPV or equivalent bankruptcy-remote structure
- Accredited / qualified investor gating where required
- Selective disclosure — prove minimum necessary claims per counterparty

**Speaker notes:**
- Map asks to “prove X without leaking Y” — sets up privacy slide.

---

## Slide 5 — Architecture overview (two chains, one program)

**Diagram concept:**

```
[Physical assets] → [SPV] → [Legacy Vault + Legacy Chain (private anchor)]
                              ↓
                    [GemAssetCredential VCDM 2.0]
                              ↓
                    [troptionsmint Token-2022 (Solana public)]
                              ↓
                    [Agent Mailor · x402 · GMIIE refs]
```

**Speaker notes:**
- **Critical distinction:** Legacy Chain = permissioned provenance registry; Solana = public issuance and transfer policy layer.
- Neither replaces the other.

---

## Slide 6 — Legacy Vault & Legacy Chain (trust layer)

**Bullets:**
- AES-256-GCM encrypted storage; private IPFS manifests
- Immutable anchoring of manifest digests, audit logs, material RWA events
- Multi-proof release engine (guardian quorum, DID verification, on-chain evidence)
- **Client message:** On-chain proof of history; documents stay encrypted

**Speaker notes:**
- Position for auditors, lenders, and future buyers — dispute-resistant provenance.
- Issuance of Gem VC only via Legacy Vault Protocol API.

---

## Slide 7 — Public issuance — Troptions / troptionsmint

**Bullets:**
- Solana **Token-2022** — transfer hooks, compliance extensions
- One-transaction mint/freeze authority revocation for immutable supply policy
- Metadata URIs → public summaries only (no encrypted blob pointers)
- UNITY / ecosystem utilities as described in program docs (no return promises)

**Speaker notes:**
- troptionsmint.com as institutional mint console — sandbox → mainnet gated by milestones.
- Reg D / Reg S framing is counsel-led; slide stays structural.

---

## Slide 8 — Verifiable credentials & privacy

**Bullets:**
- **GemAssetCredential v1** (W3C VCDM 2.0)
- **SD-JWT** — default issuance and presentations (`collateral_lending`, `secondary_market`, `regulatory_full`)
- **BBS+** — guardian-internal, unlinkable high-privacy presentations
- Disclosure groups mapped in schema — issuer holds full claims; holder reveals subset

**Speaker notes:**
- Institutional analog: show carat band + lab list + title status to lender; hide vault CIDs.
- Lender example: `valuationThresholdMet` (boolean policy) — **not** dollar NAV; appraisal TBD.
- Non-technical BBS+ guide: [BBS_SELECTIVE_DISCLOSURE_EXPLAINER.md](./BBS_SELECTIVE_DISCLOSURE_EXPLAINER.md).
- Samples in repo are synthetic / redacted.

---

## Slide 9 — Agent Mailor (client operations)

**Bullets:**
- AI layer for investor and client communications (email, secure messaging)
- Order intake and KYC/AML workflow coordination
- Bridges physical-asset workflows (Legacy Vault) and on-chain workflows (troptionsmint)
- On-demand status, proof packages, selective disclosure presentations

**Speaker notes:**
- Scales high-touch RWA without implying replacement of licensed compliance officers.
- 24/7 responsiveness as **operational** benefit, not performance guarantee.

---

## Slide 10 — x402 — programmable settlement (ecosystem)

**Bullets:**
- Web3 payment and settlement capability within Troptions ecosystem
- Designed to connect on-chain events with settlement flows (distributions, collateral triggers, onboarding)
- Cross-chain scope as deployed — frame as **rail**, not a standalone product promise
- Maturity follows integration milestones

**Speaker notes:**
- Do not overclaim features absent from deployed docs; say “where enabled in stack.”
- Complements stablecoin / CBDC rails referenced in broader Troptions materials.

---

## Slide 11 — Four-phase journey (timeline)

| Phase | Milestone |
|-------|-----------|
| **1** | Custody transfer, vault package, Legacy Chain anchors |
| **2** | SPV formation, token design, accredited framework |
| **3** | Mint, Agent Mailor onboarding, x402 settlement enablement |
| **4** | Secondary liquidity, governance, ongoing proof / reporting |

**Speaker notes:**
- Align to GitHub tracking phases in FTHTrading/ruby where helpful.
- Emerald cert completion and copper SKR clarification called out as parallel workstreams if asked.

---

## Slide 12 — Monetization paths (non-exhaustive)

**Bullets:**
- Private placement to qualified investors
- Collateralization / lending with minimal disclosure VC presentations
- Secondary market participation on Troptions rails
- Revenue share or lifecycle payments **if** structured and **if** x402 / contracts deployed — **not guaranteed**

**Speaker notes:**
- GMIIE oracles support narrative and risk feeds; **do not** conflate with appraisal.
- No assured liquidity or exit timeline.

---

## Slide 13 — Risk factors (summary)

**Bullets:**
- Appraisal, market, and liquidity risk
- Custody, insurance, and geographic / regulatory risk
- Smart contract and key-management risk
- Technology milestone risk (Vault, mint, x402, Agent Mailor)
- Securities / commodities law depends on final structure — **counsel required**

**Speaker notes:**
- Encourage parallel legal and tax workstreams early.
- Physical asset verification independent of technology delivery.

---

## Slide 14 — Ecosystem & repos

**Bullets:**
- [FTHTrading/ruby](https://github.com/FTHTrading/ruby) — planning, VC schemas, client materials (MIT)
- [FTHTrading/Legacy](https://github.com/FTHTrading/Legacy) — Legacy Vault Protocol v1.0, issuance APIs
- troptionsmint.com · GMIIE / xxxiii.io · Troptions UNITY (as applicable)

**Speaker notes:**
- Open standards + controlled private infrastructure story resonates with technical LPs.

---

## Slide 15 — Next steps & disclaimers

**Bullets:**
- NDA + data room (redacted index; full docs via Vault)
- Intake checklist and SPV counsel engagement
- Sandbox mint / VC issuance demo on request
- **Not an offer · Accredited investors only (as applicable) · Appraisal TBD · No securities advice**

**Speaker notes:**
- Close with single sentence: “Museum-grade assets with institutional-grade digital infrastructure.”
- Offer one-pager and term-sheet template for counsel, not for signature as-is.

---

## Appendix suggestions (optional, not counted in 12–15)

- **Program economics & rails** — phase fees ($400k–$900k Phase 0–1 reference), cost vs. agency/SaaS/consulting; see [PRICING_AND_PROGRAM_SCOPE.md](./PRICING_AND_PROGRAM_SCOPE.md)
- Siam emerald market context (pricing tiers, treatment disclosure)
- Token-2022 authority-revocation diagram
- Selective disclosure table (four audience groups)
- Sample `collateral_lending` presentation fields (redacted)

*Deck content licensed under MIT when distributed from FTHTrading/ruby documentation.*
