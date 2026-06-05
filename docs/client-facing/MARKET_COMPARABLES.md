# Market Comparables — RWA & Tokenization Pricing

**Allure Ruby & Siam Emerald RWA** | FTHTrading / Troptions | *Research summary — non-binding*

This document maps **who else offers tokenization and related services**, **what they charge (where public)**, **what you get**, and **how that compares to the Troptions / FTH program** described in [PRICING_AND_PROGRAM_SCOPE.md](./PRICING_AND_PROGRAM_SCOPE.md).

**Valuation policy:** Comparables are for **infrastructure and capital-markets economics** only. No NAV is asserted for the Allure package.

**Disclaimer:** Enterprise pricing is often **not published**. Ranges below combine vendor price pages, SEC filings, investor fee schedules, and third-party platform reviews (2025–2026). **Verify in RFP** before relying on any figure in a binding proposal.

---

## Executive summary

| Question | Answer |
|----------|--------|
| Who competes? | Security-token platforms (Securitize, Tokeny, tZERO, Kore), crowdfunding/token brokers (Republic), digital securities venues (ADDX), fund tokenization (Ondo, BUIDL), collectible fractionals (Masterworks), dev shops, and law firms. |
| What do they charge? | **SaaS:** ~$36k–$60k/yr (Tokeny). **White-label raise:** ~$3.5k + $2.5k/mo (Kore). **% of raise:** 6–10% + equity (Republic). **Enterprise issuance:** ~$50k–$500k+ setup (Securitize, tZERO). **Investor fees:** 1–5% per subscription (ADDX). **Collectible carry:** ~11% + 1.5%/yr + 20% profit (Masterworks). |
| What do we charge? | **Fixed program:** **$400k–$900k** (Phase 0–1) for integrated rails — vault, gem VC, BBS+, Token-2022 spec, x402, portal, docs. |
| Why we’re different? | Almost **no vendor** sells gem SPV + Legacy Vault + VCDM 2.0 BBS+ + Solana Token-2022 + x402 as one **program**; comps sell **pieces**. |

---

## 1. Institutional security-token platforms

Primary B2B comps when an issuer asks: *“Who can tokenize our asset?”*

### Securitize

| | |
|--|--|
| **Offering** | End-to-end digital securities: issuance, transfer agent, KYC/AML, ATS secondary trading. Infrastructure behind **BlackRock BUIDL** and large fund tokenizations. |
| **Pricing** | **Custom enterprise** — no public rate card. Industry estimates: **~$50,000–$100,000+** minimum engagement for smaller issuances; institutional deals fully bespoke (platform + TA + compliance). |
| **Why it matters** | Gold-standard **US regulated** digital securities stack. |
| **Gap vs. Allure program** | Optimized for **funds/securities**, not physical **gem custody**, **BBS+ gem credentials**, or **Solana Token-2022** hooks. |
| **Links** | [securitize.com](https://securitize.com/) · [BUIDL launch](https://securitize.com/learn/press/blackrock-launches-first-tokenized-fund-buidl-on-the-ethereum-network) |

### Tokeny (T-REX)

| | |
|--|--|
| **Offering** | Compliance layer (ERC-3643 / ONCHAINID), white-label **T-REX Platform** or **T-REX Engine** APIs. |
| **Pricing (published)** | **€3,000/mo** Standard · **€5,000/mo** Advanced · **Enterprise** custom. **12-month** minimum; **€1** per blockchain event over cap; **€150/hr** (4h min) custom work. Plus **implementation** and **per-investor** KYC (quoted). |
| **Annual license alone** | **~$36,000–$60,000/year** (FX-dependent) before setup. |
| **Why it matters** | Transparent **SaaS floor** for compliance tokenization. |
| **Gap vs. Allure program** | Does not include **Legacy Vault**, **gem JSON-LD schema**, **troptionsmint**, **x402**, or **institutional gem portal**. |
| **Links** | [tokeny.com/pricing](https://tokeny.com/pricing) |

### Polymath / Polymesh

| | |
|--|--|
| **Offering** | Purpose-built chain for regulated security tokens; Token Studio (legacy). |
| **Pricing** | **Custom enterprise**; historical Token Studio used **POLY**-denominated setup fees (ticker, configuration, STO modules). |
| **Why it matters** | **Protocol-level** compliance for securities. |
| **Gap vs. Allure program** | Not a full **physical RWA + vault + Solana** program integrator. |
| **Links** | [polymath.network](https://polymath.network/) |

### tZERO

| | |
|--|--|
| **Offering** | SEC-regulated tokenization, **ATS**, **Special Purpose Broker-Dealer** custody, transfer agent, VerifyInvestor. |
| **Pricing (reported ranges)** | Listing **$50k–$150k** (one-time); maintenance **$25k–$50k/yr**; transfer agent **$20k–$50k/yr**; trading **0.10% / 0.25%** maker/taker; investor onboarding **~$5–$15** per investor. **All custom** for issuers. |
| **Why it matters** | Rare **US secondary liquidity + custody** moat for digital securities. |
| **Gap vs. Allure program** | **US securities** focus; not gem-specific provenance or **BBS+** lender VPs. |
| **Links** | [tzero.com](https://tzero.com/) |

### KoreConX / Kore

| | |
|--|--|
| **Offering** | White-label Reg A+ / CF / D, transfer agent, cap table, optional tokenization. |
| **Pricing (SEC contract example)** | **$3,500** upfront + **$2,500/month** (Reg A+ schedule on file); add-ons e.g. **~$37/investor** accreditation, **$1/shareholder** dividend processing. Reg CF comparisons cite **~$10k–$25k/yr** platform vs. **7%** success-fee portals. |
| **Why it matters** | **Mid-market** ($5M–$50M) compliant raises with predictable **monthly** cost. |
| **Gap vs. Allure program** | Strong **cap table + raise**, weak on **encrypted vault + BBS+ + x402**. |
| **Links** | [koreconx.com](https://koreconx.com/) · [Kore Issuance cost comparison](https://koreissuance.koreconx.com/regcf/) |

---

## 2. Digital securities marketplaces (distribution, not build)

These platforms **list and sell** tokenized deals to accredited investors; they typically **do not** build your full gem SPV stack for a fixed systems fee.

### ADDX (Singapore)

| | |
|--|--|
| **Offering** | Tokenized private markets; platform custody; secondary trading from **~USD 100**. |
| **Pricing (investor fee schedule)** | One-time **subscription fee** per investment: up to **1.00%** (fixed income) · **2.00%** (fund, FI underlying) · **3.00%** (fund, equity/alt) · **5.00%** (equity). **No annual ADDX platform fee** on investors (underlying fund fees may apply). GST applies. |
| **Why it matters** | Transparent **investor-side** fee table — good comp for **distribution economics**. |
| **Gap vs. Allure program** | **Channel**, not **issuer infrastructure** build. |
| **Links** | [addx.co — investor fees](https://addx.co/en/how-to-invest/) |

### INX

| | |
|--|--|
| **Offering** | Regulated digital securities exchange (US / global). |
| **Pricing** | Trading, listing, custody — **custom**; not a public “build my RWA” menu. |
| **Links** | [inx.co](https://inx.co/) |

---

## 3. Crowdfunding + tokenized equity (% of raise)

| Company | Model | Typical fees | Includes | vs. $400k–$900k fixed program |
|---------|--------|--------------|----------|-------------------------------|
| **Republic** | Success-based raise + tokenization | **6–10%** of funds raised **+ ~2%** equity/token; Reg CF often **~7%** cited; Reg D **5–7%** negotiable | Marketing, compliance workflow, some **on-chain** securities (e.g. Solana equity) | On **$25M raise**, **~$1.75M–$2.5M+** all-in vs. **one-time** rails build |
| **Wefunder** | Reg CF | **~7.5%** of raise | Crowdfunding portal | No institutional vault/VC stack |
| **SeedInvest** | Reg CF | **~7.5% + 5% equity** | Portal + marketing | Same |

**Sales line:** *“Republic monetizes the raise; we monetize the infrastructure you reuse across phases, investors, and collateral events.”*

**Links:** [Republic fees FAQ](https://republic.com/help/what-fees-does-republic-charge-ca0db6ab-a763-4671-8067-5b37d1cfd215) · [Issuer blog — Reg CF / Capital](https://issuer.com/blog/republic-established-businesses/)

---

## 4. Tokenized funds & Treasuries (scale comps, different asset)

Use for **“who tokenizes at institutional scale”** — not for pricing a **single illiquid gem SPV**.

| Player | Product | Fee signals | Minimums / notes |
|--------|---------|-------------|------------------|
| **Securitize + BlackRock BUIDL** | Tokenized Treasury fund | Fund **~0.20–0.50%** mgmt (data aggregators); Securitize **B2B** platform fees undisclosed | **~$5M** direct qualified purchasers |
| **Ondo Finance** | OUSG, USDY | **~0.15%** mgmt on OUSG (promotional waivers reported); distribution layer over BUIDL | OUSG **~$5k** access via Ondo vs. BUIDL **$5M** |
| **Franklin Templeton, WisdomTree, Superstate, etc.** | Tokenized MMF / funds | Low **bps** on AUM | Internal legal/ops cost, not vendor quote |

**Takeaway:** Liquid fund tokenization competes on **basis points** and **AUM**. **Illiquid gem RWA** competes on **trust mechanics** — higher **fixed** program cost, lower **ongoing bps** if structured as SPV + raise.

---

## 5. Luxury & collectible fractional (closest “asset class” story)

| Company | Offering | Fee stack | vs. Allure program |
|---------|----------|-----------|---------------------|
| **Masterworks** | Fractional **art** SPVs; retail onboarding | **~11%** sourcing/true-up (SEC filings) + **1.5%/yr** mgmt (dilution) + **20%** of net profit at sale; **~$15k** stated min per offering (negotiated) | Proves **fractional luxury** demand; **no** on-chain institutional rails, **no** BBS+/Token-2022/x402 |
| **OpenRWA** (positioning) | Marketing for watches, **jewelry/gems**, collectibles | Claims **~2–3%/yr** holder fees for custody/platform (marketing); **no** public enterprise build sheet | Closest **narrative** comp for gems; verify production depth in diligence |
| **Auction houses** | One-shot liquidity (Christie’s, Sotheby’s, Gemfields) | Seller/buyer premiums often **~15–25%+** | **Sale event**, not multi-year **tokenized program** |

**Sales line:** *“Auction commissions are a single liquidity event; our fee is capital-markets infrastructure for years of collateral, private placement, and controlled disclosure.”*

---

## 6. Custom development, legal & advisory

| Provider | What you get | Typical 2026 ranges (industry) |
|----------|--------------|--------------------------------|
| **RWA dev boutiques** | Smart contracts, portal, “tokenization platform” | **$100,000 – $300,000+** per project |
| **Legal + compliance only** | SPV, Reg D/S, PPM | **$90,000 – $250,000+** setup; **$35,000 – $80,000+/yr** ongoing (jurisdiction-dependent) |
| **Big 4 / strategy** | Governance, structure, decks | **$200,000 – $800,000+** — often **advice**, not shipped portal + VC + mint |
| **Total issuer stack (estimator)** | Legal + platform + KYC + custody + audit | Setup **~$90k–$250k+**; annual ops **~$35k–$80k+** before asset premiums ([Commodara estimator](https://commodara.com/tokenization-cost-estimator/)) |

**Allure Phase 0–1 ($400k–$900k)** sits between **“dev shop + docs”** and **“Securitize + counsel + custody + listing.”**

---

## 7. Master comparison table

| Model | Example vendors | Typical economics | What’s included | What’s usually missing for gems |
|-------|-----------------|-------------------|-----------------|--------------------------------|
| **Compliance SaaS** | Tokeny | **~$36k–$60k/yr** + setup + per investor | Token compliance, white-label apps | Vault, physical custody narrative, BBS+ gem schema |
| **White-label raise** | KoreConX | **~$3.5k + $2.5k/mo** + per-investor | Reg offering, TA, cap table | Gem VC, Solana hooks, x402 |
| **% of raise** | Republic | **6–10% + 2% equity** | Distribution + some tokenization | Full rails; cheap only if raise is small |
| **Enterprise issuance** | Securitize, tZERO | **$50k–$500k+** setup + annual + trading | Regulated digital securities | Solana Token-2022, gem selective disclosure |
| **Investor marketplace** | ADDX | **1–5%** per subscription | Access + custody on venue | Issuer-side build |
| **Collectible fractional** | Masterworks | **~11% + 1.5%/yr + 20% carry** | Retail art SPV | Institutional lender proofs, Token-2022 |
| **Troptions program** | FTH / ruby + Legacy | **$400k–$900k** Phase 0–1 (fixed) | Integrated docs + VC + portal + specs + integration path | Appraisal, counsel, mainnet (Phase 2) |

---

## 8. Capability matrix — differentiation

| Capability | Securitize / Tokeny | Republic | Masterworks | **Troptions / Allure program** |
|------------|---------------------|----------|-------------|--------------------------------|
| Physical **gem** SPV + appraisal discipline | Custom / partial | Rare | No (art) | **Core** |
| **Legacy Vault** encrypted provenance | No | No | Traditional custody | **Core** |
| **VCDM 2.0 + BBS+** lender presentations | Add-on / rare | No | No | **Core** |
| **Solana Token-2022** + transfer hooks | Unusual | Some equity tokens | No | **Core** |
| **x402** metered lifecycle settlement | No | No | No | **Core** |
| Institutional **portal + PDF pack** | Partner / add-on | Retail | Retail | **Shipped** ([live site](https://fthtrading.github.io/ruby/)) |

---

## 9. Scenario math (for IC slides)

### vs. Republic (% of raise)

| Raise size | ~7% cash fee (illustrative) | Phase 0–1 fixed ($650k mid) |
|------------|----------------------------|-----------------------------|
| $10M | **$700,000** | **$650,000** (one-time) |
| $25M | **$1,750,000** | **$650,000** |
| $50M | **$3,500,000** | **$650,000** |

*Equity/warrant allocation to Republic excluded.*

### vs. Tokeny (3-year SaaS)

| Item | 3-year cost |
|------|-------------|
| Tokeny Advanced **€5k/mo** (~$65k/yr) | **~$195,000** |
| Implementation (est. **$50k–$150k**) | **$50k–$150k** |
| **Total** | **~$245k–$345k** |

*Still requires separate vault, gem schema, Solana mint, x402, portal, legal — often **+$300k–$600k** from other vendors.*

### vs. Masterworks-style carry (illustrative hold)

On **$100M** target package (planning figure only, **not asserted NAV**):

| Fee type | Illustrative cost |
|----------|-------------------|
| **11%** true-up at acquisition | **$11M** economic drag before appreciation |
| **1.5% × 7 years** dilution | **~10%+** cumulative (compounding simplified) |
| **20%** of profit at exit | Variable |

*Program fee is **infrastructure**, not **carry on asset appreciation**.*

---

## 10. Suggested talk tracks (BD)

1. **vs. Tokeny/Kore:** “Annual license is **$40k–$60k** for software — not vault, gem credentials, Solana, or x402.”
2. **vs. Republic:** “**7% of $25M ≈ $1.75M** every raise; our Phase 0–1 is **once** and you own the rails.”
3. **vs. Securitize/tZERO:** “**$50k–$150k** can be **listing alone**; we bundle **docs + VC + portal + integration specs** for the asset class.”
4. **vs. Masterworks:** “They stack **~30%+** of economics over a hold; we price **capital markets build** upfront.”
5. **vs. auction:** “**15–25%** is one sale; we enable **years** of collateral, private placement, and **selective disclosure**.”

---

## 11. Source log (verify before external distribution)

| Source type | Examples |
|-------------|----------|
| **Published pricing** | [Tokeny pricing](https://tokeny.com/pricing), [ADDX investor fees](https://addx.co/en/how-to-invest/) |
| **SEC / regulatory filings** | KoreConX agreement schedules; Masterworks Form 1-SA offerings |
| **Vendor marketing** | Republic help center, Kore Issuance comparison tables |
| **Aggregators / reviews** | [Tokenization platform fees 2026](https://tokenizestartup.com/platforms/tokenization-platform-fees/), Securitize/Tokeny reviews |
| **Internal program pricing** | [PRICING_AND_PROGRAM_SCOPE.md](./PRICING_AND_PROGRAM_SCOPE.md) |

---

## Related documents

- [PRICING_AND_PROGRAM_SCOPE.md](./PRICING_AND_PROGRAM_SCOPE.md) — phases, workstreams, exclusions, SOW lines  
- [ONE_PAGER.md](./ONE_PAGER.md) — executive narrative  
- [SLIDE_DECK_OUTLINE.md](./SLIDE_DECK_OUTLINE.md) — appendix slide on comparables  
- [pdfs/templates/10-market-comparables.md](../../pdfs/templates/10-market-comparables.md) — PDF export  

*Last updated: June 2026 — market research summary; not investment or legal advice.*
