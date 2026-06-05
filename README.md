# ruby

**Allure Ruby & Siam Emerald RWA Tokenization Project**

Institutional-grade Real World Asset (RWA) tokenization for the 54.00 carat Allure Ruby (GIA/Gübelin/GRS certified, heated East Africa) and complementary polished emerald. Package economics are presented as a **target package subject to independent appraisal** — not as binding NAV in public materials.

Part of the FTHTrading / Troptions ecosystem — leveraging troptionsmint.com (Institutional Solana Mint with Token-2022 + authority revocation), Legacy Vault Protocol for legal/docs/provenance, GMIIE (xxxiii.io) for oracles and market intelligence, and AI agents for mint orchestration and compliance.

## Client portal (v1)

```bash
cd site && npm install && npm run dev
```

See [`/site/README.md`](site/README.md), [`/architecture/`](architecture/), [`/docs/`](docs/), and [`/pdfs/`](pdfs/).

## Repository structure

- `/site` — Next.js 15 institutional client portal (Troptions dark/gold theme)
- `/architecture` — System overview, full-stack map, per-system docs
- `/pdfs` — Eight markdown PDF templates + `npm run pdfs`
- `/docs` — Whitepaper, API integration, client-facing materials, VC schemas, x402, tokenization
- `/lib/integrations` — TypeScript API client stubs for Legacy Vault and troptionsmint
- `/tokenization` — Token spec, smart contract notes, mint flow (legacy path)
- `/assets` — Redacted certs, photos, provenance packages (IPFS-ready)
- `/tracking` — GitHub Projects / Issues / Milestones setup
- `/ai-agent` — Stubs for Solana AI mint/order agent integration

## PDF generation

```bash
npm run pdfs
```

Output: `pdfs/output/` (gitignored).

## Related repos

- [FTHTrading/Legacy](https://github.com/FTHTrading/Legacy) — Vault, VC issuance, BBS+ APIs
- troptionsmint.com — Institutional Solana Token-2022 mint console
- GMIIE / xxxiii.io — Oracle and market intelligence references

## License

MIT — see [LICENSE](LICENSE).

---

*FTHTrading / Troptions institutional blockchain & AI financial infrastructure.*
