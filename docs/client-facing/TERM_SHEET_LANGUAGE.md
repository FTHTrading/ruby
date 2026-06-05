# Term Sheet Language — Template (Non-Binding)

**Program:** Allure Ruby & Siam Emerald Real-World Asset Tokenization  
**Status:** Draft template for qualified counsel — **not legal advice, not an offer, not a securities filing**

Counsel must adapt all brackets, jurisdictions, and regulatory pathways before use. This repository is distributed under the **MIT License**; template text does not create attorney-client relationship.

---

## 1. Parties (template)

**[Issuer / SPV Name]**, a **[jurisdiction]** **[entity type]** (“**SPV**” or “**Issuer**”), with principal place of business at **[address]**.

**[Sponsor / Asset Contributor Name]** (“**Sponsor**” or “**Contributor**”), **[individual / entity]**, **[jurisdiction]**.

**[Placement Agent / Platform Operator]** — FTHTrading ecosystem entities operating Legacy Vault Protocol, troptionsmint.com, and related infrastructure (“**Platform**”), as further defined in definitive agreements.

**[Investor]** — Each **[accredited / qualified]** investor executing a subscription or token purchase agreement (“**Investor**”).

---

## 2. Transaction summary (non-binding)

The parties intend to explore a structure whereby:

1. The SPV (or equivalent bankruptcy-remote vehicle) acquires or holds legal title to the **Physical Assets** (defined below), subject to custody, insurance, and lien clearance.
2. The SPV issues or causes issuance of **Digital Tokens** representing certain economic or governance rights, as set forth in definitive documentation.
3. Provenance, custody events, and material representations are recorded via **Legacy Vault Protocol** (encrypted storage, verifiable credentials, **Legacy Chain** anchoring).
4. Public-token mechanics, if any, are implemented on **Solana** through **Token-2022** infrastructure at troptionsmint.com, with metadata limited to non-sensitive summaries until appraisal and counsel approve additional fields.
5. **Target package value** for planning purposes is **subject to independent third-party appraisal (TBD)**. No NAV, fair value, or return is asserted in this term sheet.

---

## 3. Physical assets (description template)

### 3.1 Primary asset — ruby

- Description: Natural ruby, approximately **54.00 carats**, heated, with origin context **East Africa / Madagascar** (as stated in gemological reports held in Legacy Vault).
- Marketing name: “**Allure Ruby**” (descriptive only).
- Gemological reports: Multiple independent laboratory reports (e.g. GIA, Gübelin, GRS) — **full reports encrypted in Legacy Vault; not attached to this template**.
- Title: To be represented as **[free and clear / subject to disclosed encumbrances]** in definitive schedules.

### 3.2 Secondary asset — emerald

- Description: Polished natural emerald, specifications per **[schedule / vault index]**.
- Market context: Siam / Thailand and global trading-hub value chain — comps and treatment disclosure per counsel-approved disclosure schedule.
- Title and custody: Same standards as ruby; joint package economics **TBD — independent appraisal**.

### 3.3 Package valuation (critical language)

> **Target package value (order-of-magnitude planning figure only): subject to completion of independent third-party appraisal by a mutually acceptable gemological / financial appraiser. Until an appraisal is delivered and accepted by [Investors / Board / Lender], no party may represent any aggregate dollar value as NAV, fair value, or offering price basis.**

Optional supporting collateral (e.g. commodity SKR positions) shall be **separately diligenced** and documented in a schedule — not bundled into gem appraisal without explicit agreement.

---

## 4. SPV and structure (template)

- **SPV formation:** **[jurisdiction]** entity owning Physical Assets and contracting for custody, insurance, and token issuance.
- **Bankruptcy remoteness:** Counsel to confirm true sale / contribution vs loan structure.
- **Governance:** **[Board / Manager]** with reserved matters including appraisal acceptance, custody changes, token policy amendments, and major dispositions of Physical Assets.
- **Tax:** Investors rely on their own advisors; no tax opinion in this template.

---

## 5. Digital tokens — rights and limitations (template)

**Instrument:** Solana **Token-2022** (or successor standard), minted via troptionsmint.com infrastructure.

**Representative rights (definitive docs to specify):**
- Pro rata or structured participation in **[net cash flows / monetization events]** from Physical Assets, if and when realized — **no guaranteed distributions**.
- Information rights via Agent Mailor and/or data room, subject to selective disclosure policy.
- Transfer restrictions: **[accredited / qualified]** investor gating, geographic restrictions, lock-up **[period]**, compliance with Reg D / Reg S or equivalent.
- **No right** to demand physical delivery of gemstones except as expressly set forth in a separate redemption policy approved by SPV and custodian.

**Authority policy:** Mint and freeze authorities revoked in accordance with Token-2022 program design; immutable supply policy as documented in mint transaction.

**Metadata:** Public JSON metadata URIs shall not embed unredacted laboratory report content or asserted NAV prior to appraisal completion.

---

## 6. Custody and insurance (template)

- **Custodian:** **[qualified gem custodian / vault facility]** under contract with SPV.
- **Insurance:** All-risk coverage at **[limits TBD post-appraisal]**; beneficiary SPV; evidence of premium payment.
- **Movement:** Any relocation of Physical Assets requires **[notice period]** and updated vault manifest + Legacy Chain anchor.
- **SKR / safekeeping receipts:** If applicable, listed on schedule; liens searched and cleared to counsel satisfaction.

---

## 7. Provenance, credentials, and privacy (template)

- **Legacy Vault Protocol:** Encrypted document storage (AES-256-GCM), private IPFS manifests, audit logs.
- **Legacy Chain:** Permissioned registry anchoring manifest digests, SPV events, and VC-related references — **distinct from public Solana ledger**.
- **GemAssetCredential (VCDM 2.0):** Issued only via Legacy Vault issuance API; `valuation.amount` null until appraisal `completed`.
- **Selective disclosure:**
  - **SD-JWT** — default for collateral lending, secondary market, and regulatory presentations.
  - **BBS+** — permitted for guardian-internal and highest-privacy presentations.
- Investors receive only disclosure packages appropriate to their role; full claims remain with issuer/holder per VC model.

---

## 8. Compliance and investor eligibility (template)

- Offering, if any, made only in compliance with applicable securities laws under counsel-approved exemption(s).
- **Accredited investor** (or local equivalent) representation required from each Investor.
- KYC/AML: **[Platform / Agent Mailor / third-party provider]** workflows prior to token transfer.
- No general solicitation unless counsel approves specific materials and filing strategy.
- **Export / sanctions / AML** screening on Sponsor and beneficial owners.

---

## 9. x402 settlement and operations (template)

- **x402:** Where deployed in the Troptions ecosystem, x402 functions as a **programmable Web3 settlement rail** connecting on-chain token lifecycle events to payment flows (e.g. onboarding settlements, configured distribution triggers, collateral-related transfers). Availability and scope are **milestone-dependent**; definitive agreements shall list enabled event types.
- **Agent Mailor:** AI-assisted client operations for intake, communications, KYC coordination, and proof delivery — does not replace licensed compliance officers or investment advisers.
- **GMIIE / oracles:** Market intelligence references only; **not a substitute for independent appraisal**.

---

## 10. Fees and expenses (template — brackets)

- Formation and legal: **[amount / cap]**
- Appraisal and gemological updates: **[pass-through]**
- Custody and insurance: **[annual]**
- Platform / mint / technology: **[basis points / flat]** per definitive platform agreement
- Placement / agent: **[commission]** if applicable

---

## 11. Conditions precedent (illustrative)

- Completed independent appraisal acceptable to **[Board / Lead Investor]**
- Custody agreement executed and initial vault manifest anchored on Legacy Chain
- Clear title and UCC / lien searches
- GemAssetCredential issued with appraisal fields null or updated per policy
- Token mint parameters and transfer-hook policy approved by counsel
- Insurance binder effective

---

## 12. Disclaimers (required — adapt with counsel)

1. **No offer.** This document is a **non-binding template** for discussion. Binding obligations arise only in executed definitive agreements.
2. **Not securities advice.** Nothing herein constitutes legal, tax, or investment advice. Investors must consult their own professionals.
3. **No guaranteed returns.** No representation regarding profit, yield, liquidity, or appreciation. Loss of entire investment possible.
4. **Valuation.** Any historical or planning reference to aggregate package scale (e.g. order-of-magnitude **~$600M** in internal planning) is **not** an asserted NAV and is **superseded** by independent appraisal TBD.
5. **Technology risk.** Legacy Vault, Legacy Chain, troptionsmint, x402, and Agent Mailor are evolving systems; milestones and uptime not guaranteed.
6. **Forward-looking statements.** Subject to change without obligation to update except as required by law in formal offerings.
7. **Physical asset risk.** Theft, damage, market illiquidity, treatment disclosure disputes, and geopolitical factors may materially affect outcomes.
8. **Regulatory uncertainty.** Digital asset and VC rules vary by jurisdiction and may change.

---

## 13. Governing law and dispute resolution (template)

- **Governing law:** **[State / Country]**
- **Dispute resolution:** **[arbitration / courts]** in **[venue]**
- **Confidentiality:** Mutual NDA prior to vault access; selective disclosure obligations survive termination.

---

## 14. Expiration

This non-binding template expires for negotiation purposes if not superseded by **[date]** unless extended in writing.

---

*Source narrative: institutional RWA stack (Legacy Vault / Legacy Chain, troptionsmint, Agent Mailor, x402, VCDM 2.0 privacy). Maintain consistency with [FTHTrading/ruby](https://github.com/FTHTrading/ruby) and [FTHTrading/Legacy](https://github.com/FTHTrading/Legacy) technical documentation.*
