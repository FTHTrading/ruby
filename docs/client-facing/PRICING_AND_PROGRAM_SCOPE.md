# Program Pricing, Scope & Cost Comparison

**Allure Ruby & Siam Emerald RWA** | FTHTrading / Troptions | *Planning guide — non-binding*

This document explains **what the institutional RWA program includes**, **why each workstream matters**, **indicative fee ranges**, and **how those costs compare to common alternatives**. It supports proposals and investment-committee briefings. It is **not** a quote, term sheet, or offer to sell securities.

**Valuation policy:** Package economics are a **target subject to independent appraisal (TBD)**. Fees below do not assume or assert net asset value (NAV).

---

## Executive summary

Institutional gem RWA is not a website plus a token. It is a **multi-system trust stack**: legal-grade custody narrative, encrypted provenance, W3C Verifiable Credentials with selective disclosure, Solana Token-2022 with compliance hooks, programmable settlement (x402), and a client-facing portal—in continuous alignment with counsel and qualified appraisers.

| Engagement | Indicative range (USD) | Typical duration |
|------------|------------------------|------------------|
| **Phase 0 — Readiness** (architecture, schemas, portal v1, specs) | $100,000 – $250,000 | 4–8 weeks |
| **Phase 1 — Issuance-ready** (Legacy issuance, BBS+ live, sandbox mint, intake) | $200,000 – $500,000 | 8–16 weeks |
| **Phase 2 — Production & raise support** (mainnet, liquidity rails, investor desk) | $300,000 – $800,000+ | 12–24+ weeks |
| **Annual platform / ops retainer** | $180,000 – $600,000 / year | Ongoing |
| **Full program (Phase 0–1, reference asset)** | **$400,000 – $900,000** | ~4–6 months |

Optional success-linked components (e.g. % of capital raised, capped) are negotiated separately with counsel after appraisal and offering structure are defined.

---

## What you are buying (one sentence)

> **Institutional RWA program fees cover legal-grade documentation, verifiable credentials (SD-JWT + BBS+), Legacy custody integration, Solana Token-2022 mint design, x402 settlement specification, client portal, and production deployment—not retail token marketing or asserted NAV.**

---

## Workstream breakdown

Each row: **what it does**, **why it is important**, **what is in this repo today**, and **indicative fee** if procured as a standalone work package.

### 1. Strategy, structure & disclosure discipline

| | |
|--|--|
| **What it does** | SPV/custody narrative, appraisal workflow (TBD), investor one-pager, deck outline, non-binding term-sheet language, valuation discipline across all materials. |
| **Why it matters** | Institutions will not underwrite opaque “$600M package” claims. Separating **target economics** from **binding NAV** reduces regulatory and reputational risk. |
| **Delivered in repo** | `docs/client-facing/` (one-pager, deck, term sheet), whitepaper draft, tracking milestones. |
| **Indicative fee** | $50,000 – $150,000 (strategy + materials); counsel and appraisal are **client/counsel pass-through** unless explicitly scoped. |

### 2. Verifiable credentials & selective disclosure (VCDM 2.0)

| | |
|--|--|
| **What it does** | `GemAssetCredential` schema, SD-JWT default issuance path, BBS+ Data Integrity for guardian/lender presentations, disclosure groups (`collateral_lending`, `regulatory_full`, `guardian_internal`, etc.). |
| **Why it matters** | Lenders and regulators need **proof without oversharing**—full GIA/Gübelin payloads and ownership history must not leak to every counterparty. BBS+ is a differentiator vs. “PDF on a website.” |
| **Delivered in repo** | `docs/vc-schemas/`, samples, BBS lender VP, explainer; **issuance runtime** in [FTHTrading/Legacy](https://github.com/FTHTrading/Legacy). |
| **Indicative fee** | $80,000 – $250,000 (schema + samples + integration); production HSM/keys add $50,000 – $150,000. |

### 3. Legacy Vault, chain anchoring & provenance

| | |
|--|--|
| **What it does** | Encrypted document storage, manifest CIDs, permissioned registry events, VC digest anchoring, audit exports. |
| **Why it matters** | Physical gems require **chain-of-custody** and **tamper-evident** records separate from public Solana state. |
| **Delivered in repo** | Architecture slices, API integration map, TypeScript stubs (`lib/integrations/legacy-vault.ts`). |
| **Indicative fee** | $100,000 – $300,000 (integration + workflows); Vault platform may be separate license if white-label. |

### 4. Solana Token-2022 & troptionsmint

| | |
|--|--|
| **What it does** | Extension matrix (transfer hooks, metadata policy), compliance gating narrative, authority revocation for immutable supply, metadata URI binding to vault proofs. |
| **Why it matters** | Retail SPL mints lack institutional **compliance hooks** and **supply finality** expected by family offices and collateral desks. |
| **Delivered in repo** | `docs/tokenization/`, transfer-hook README, troptionsmint architecture, integration stubs. |
| **Indicative fee** | $75,000 – $200,000 (spec + sandbox); mainnet mint + hook program $150,000 – $400,000. |

### 5. x402 programmable settlement

| | |
|--|--|
| **What it does** | HTTP 402 metered access, `x402-event-v1` schema, payment hooks, revenue share / collateral / onboarding event profiles (Troptions-internal rail). |
| **Why it matters** | Token issuance alone does not settle **distributions**, **collateral events**, or **metered data exports**—x402 automates machine-payable lifecycle without sharing long-lived API keys. |
| **Delivered in repo** | `docs/x402/` full v1.0 spec, sequence flows, PDF template. |
| **Indicative fee** | $60,000 – $180,000 (spec + gateway wiring); production USDF settlement depends on gateway deployment. |

### 6. Client portal, PDFs & institutional UX

| | |
|--|--|
| **What it does** | Next.js site (Troptions theme), stack map, BBS proof demo, docs hub, intake (webhook or mailto), eight PDF templates via `npm run pdfs`. |
| **Why it matters** | ICs and family offices judge credibility in **minutes**—a coherent portal signals operational maturity vs. a GitHub-only project. |
| **Delivered in repo** | `/site` (live: [fthtrading.github.io/ruby](https://fthtrading.github.io/ruby/)), `pdfs/templates/`. |
| **Indicative fee** | $40,000 – $120,000 (v1 portal + PDFs); custom CRM/Legacy wiring $25,000 – $75,000. |

### 7. Agent operations & investor journey

| | |
|--|--|
| **What it does** | Agent Mailor orchestration (intake, KYC coordination, proof packages), four-phase investor journey content, API integration brief. |
| **Why it matters** | High-touch assets do not scale on manual email alone; agents reduce RM load while preserving audit trails. |
| **Delivered in repo** | Architecture docs, invest/how-it-works pages, API guide. |
| **Indicative fee** | $50,000 – $150,000 (workflow + integrations); per-investor onboarding $5,000 – $50,000 optional. |

### 8. Integration, deployment & runbooks

| | |
|--|--|
| **What it does** | Cross-repo contracts (ruby ↔ Legacy ↔ troptionsmint), GitHub Pages/Vercel deploy, env matrices, tracking labels/milestones. |
| **Why it matters** | **Integration risk** is where most RWA programs fail—not in slide design. |
| **Delivered in repo** | `.github/workflows/deploy-github-pages.yml`, `vercel.json`, `docs/API_INTEGRATION.md`. |
| **Indicative fee** | $30,000 – $80,000 (initial); monitoring $15,000 – $75,000 / month. |

---

## Phase packaging (recommended)

### Phase 0 — Readiness *(largely reflected in current `main` branch)*

**$100,000 – $250,000** | 4–8 weeks

- Architecture + full-stack map  
- GemAssetCredential v1 + samples (SD-JWT + BBS+)  
- x402 v1.0 specification + event schema  
- Token-2022 extension specs  
- Client portal v1 + PDF pipeline  
- Client-facing materials (appraisal TBD throughout)  

**Outcome:** IC-ready narrative and technical artifacts; **not** production issuance or mainnet.

### Phase 1 — Issuance-ready

**$200,000 – $500,000** | 8–16 weeks

- Live Legacy `POST /api/vc/issue/gem-asset` (see [issue #2](https://github.com/FTHTrading/ruby/issues/2))  
- BBS+ presentation path tested with lender/regulatory groups  
- Sandbox mint on troptionsmint + metadata ↔ vault binding  
- Intake → CRM webhook; security review  
- Counsel-reviewed offering materials (client counsel)  

**Outcome:** Qualified counterparties can receive **cryptographic proofs** and **sandbox tokens** under defined policies.

### Phase 2 — Production & raise support

**$300,000 – $800,000+** | 12–24+ weeks

- Mainnet mint + authority revocation  
- x402 gateway + USDF settlement (where applicable)  
- GMIIE/oracle hooks (intelligence, not appraisal)  
- Investor onboarding waves, liquidity/collateral rails  
- Optional: success fee on raise (capped, counsel-approved)  

**Outcome:** Production rails aligned with closed offering and custody transfer.

---

## Cost comparison — alternatives vs. this program

Indicative **total** cost to reach “institutional credibility” for a flagship physical RWA (not apples-to-apples on features):

| Approach | Typical total cost | What you get | What you usually lack |
|--------|-------------------|--------------|------------------------|
| **Marketing agency + generic token launch** | $30,000 – $150,000 | Brand, website, social, basic SPL token | VC 2.0, BBS+, custody integration, compliance hooks, settlement, appraisal discipline |
| **Off-the-shelf tokenization SaaS** | $50,000 – $300,000 + % fees | Fast mint, templates, KYC widget | Custom gem credential schema, Legacy vault, permissioned chain, x402, dual-proof privacy |
| **Big-4 / strategy firm (deck only)** | $200,000 – $800,000 | Slides, market study, governance advice | Working integrations, on-chain spec, portal, issuance APIs |
| **Law firm + custodian (traditional)** | $250,000 – $1,000,000+ | SPV, docs, custody agreements | Programmable credentials, Token-2022 automation, metered settlement |
| **This program (Phase 0–1)** | **$400,000 – $900,000** | End-to-end **rails** + docs + portal + specs + integration path | Mainnet, raise execution, appraisal (scoped separately) |
| **This program (production + raise)** | **$1M – $2.5M+** (phased) | Full stack through mainnet and investor operations | Depends on jurisdiction, asset count, and counsel scope |

**Why the spread is wide:** Regulated offering type (Reg D/S), number of jurisdictions, who holds liability (vendor vs. SPV vs. platform), and whether Legacy/troptionsmint are **owned** (margin) vs. **pass-through** (cost-plus).

---

## Value comparison — cost vs. risk reduced

| Risk if under-built | Potential cost of failure | What this program mitigates |
|---------------------|---------------------------|-----------------------------|
| NAV misrepresentation | Legal exposure, deal collapse | Appraisal TBD policy across docs and VC samples |
| Data leak of cert / ownership | Reputational + regulatory harm | BBS+ / SD-JWT selective disclosure groups |
| Non-auditable custody story | Lender rejection | Legacy Vault + chain anchoring architecture |
| Non-compliant token | Secondary market blocked | Token-2022 hooks + authority revocation spec |
| Manual investor ops | RM bottleneck, errors | Portal, intake, Agent Mailor, PDF pack |
| Payment / export chaos | Revenue leakage, API key sprawl | x402 metered events and hooks |

Spending **$400k–$900k** on Phase 0–1 is often **<0.1%** of a nine-figure target package economics narrative—but it is **100%** of institutional **trust mechanics** that determine whether serious capital engages.

---

## Mapping fees to repository artifacts

Use this table in proposals to show **tangible deliverables**:

| Fee bucket | Primary repo paths | Legacy / external |
|------------|-------------------|-------------------|
| Strategy & disclosure | `docs/client-facing/`, `docs/WHITEPAPER_RWA_GEMS.md` | Counsel, appraisers |
| Credentials | `docs/vc-schemas/` | `POST /api/vc/issue/gem-asset` |
| Custody & registry | `architecture/legacy-vault.md`, `legacy-chain.md` | FTHTrading/Legacy |
| Tokenization | `docs/tokenization/` | troptionsmint.com |
| Settlement | `docs/x402/` | x402 gateway / USDF |
| Portal & PDFs | `site/`, `pdfs/` | Vercel, webhooks |
| Integration | `docs/API_INTEGRATION.md`, `lib/integrations/` | API keys, production env |
| Tracking | `tracking/` | GitHub Projects (manual setup) |

---

## Ongoing fees (after go-live)

| Item | Indicative range | Includes |
|------|------------------|----------|
| **Platform retainer** | $15,000 – $75,000 / month | Schema updates, doc refresh, deploy, incident response |
| **Per qualified investor onboarding** | $5,000 – $50,000 | KYC packet, proof delivery, VC re-issuance |
| **Per mint / corporate action** | $10,000 – $100,000 | Metadata update, hook policy change, authority events |
| **White-label license** (third parties) | Custom | Reuse rails for additional RWAs |

---

## Who signs the check (pricing posture)

| Buyer | Recommended model |
|-------|-------------------|
| **Family office / SPV** | Fixed phases + small success kicker (capped) |
| **FTHTrading / Troptions (internal)** | Cost allocation + IP on reusable rails |
| **White-label issuer** | Annual license + per-asset implementation SOW |

---

## Exclusions (always call out in SOW)

- Independent third-party **appraisal** and binding NAV  
- **Securities counsel** and filing fees  
- Physical **custody transfer**, insurance, and shipping  
- **Mainnet** gas, HSM, and production key ceremonies (unless Phase 2)  
- **GMIIE** as substitute for qualified appraisal  
- Ongoing **transfer agent** or broker-dealer services unless separately engaged  

---

## Sample proposal line items

```
Phase 0 — RWA readiness (architecture, VC v1, x402 spec, portal v1, PDFs)     $XXX,000
Phase 1 — Issuance-ready (Legacy APIs, BBS+ prod, sandbox mint, intake)        $XXX,000
Annual platform retainer (optional, month 7+)                                  $XX,000/mo
Success component (optional, capped, post-appraisal)                           X% of raise
```

---

## Related documents

- [ONE_PAGER.md](./ONE_PAGER.md) — executive summary  
- [SLIDE_DECK_OUTLINE.md](./SLIDE_DECK_OUTLINE.md) — add a “Program economics & rails” slide from this doc  
- [TERM_SHEET_LANGUAGE.md](./TERM_SHEET_LANGUAGE.md) — align fees with counsel-reviewed offering  
- [../API_INTEGRATION.md](../API_INTEGRATION.md) — technical scope behind Phase 1  
- [../../site/README.md](../../site/README.md) — portal deployment  

*Last updated: June 2026 — planning ranges only; execute formal SOW and counsel review before client distribution.*
