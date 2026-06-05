import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Program Pricing",
  description:
    "Indicative phase fees, market comparables vs. Securitize, Tokeny, Republic, and collectible platforms — non-binding planning ranges.",
  path: "/pricing",
});

const phases = [
  { phase: "Phase 0 — Readiness", range: "$100k – $250k", duration: "4–8 weeks", outcome: "Architecture, VC v1, x402 spec, portal, client materials" },
  { phase: "Phase 1 — Issuance-ready", range: "$200k – $500k", duration: "8–16 weeks", outcome: "Legacy issuance, BBS+ prod, sandbox mint, intake" },
  { phase: "Phase 2 — Production & raise", range: "$300k – $800k+", duration: "12–24+ weeks", outcome: "Mainnet, settlement gateway, investor operations" },
  { phase: "Annual retainer", range: "$180k – $600k/yr", duration: "Ongoing", outcome: "Ops, schema updates, monitoring" },
];

const comparables = [
  { vendor: "Tokeny (T-REX)", model: "SaaS + implementation", economics: "€3k–5k/mo published + setup + per investor", gap: "No vault, gem VC, Solana, x402" },
  { vendor: "KoreConX", model: "White-label raise", economics: "~$3.5k + $2.5k/mo + per-investor fees", gap: "Cap table strong; no BBS+ gem stack" },
  { vendor: "Republic", model: "% of raise", economics: "6–10% + ~2% equity", gap: "Distribution, not full rails" },
  { vendor: "Securitize / tZERO", model: "Enterprise issuance", economics: "~$50k–$500k+ setup + annual", gap: "US securities; not gem-specific" },
  { vendor: "ADDX", model: "Investor marketplace", economics: "1–5% per subscription", gap: "Channel, not issuer build" },
  { vendor: "Masterworks", model: "Collectible fractional", economics: "~11% + 1.5%/yr + 20% carry", gap: "Art SPV retail; no institutional VC rails" },
  { vendor: "Troptions program", model: "Fixed phases", economics: "$400k – $900k (Phase 0–1)", gap: "Integrated gem RWA stack (this program)" },
];

export default function PricingPage() {
  return (
    <div className="space-y-14">
      <PageHero eyebrow="Non-binding planning" title="Program pricing &amp; market comparables">
        <p>
          Institutional gem RWA is a <strong>multi-system trust stack</strong> — not a website plus a token.
          Figures below support IC and BD conversations. Appraisal and NAV remain{" "}
          <strong className="text-troptions-gold">TBD</strong>. Full detail lives in the repo markdown
          (MIT planning materials, not legal or securities advice).
        </p>
      </PageHero>

      <section className="space-y-4">
        <h2 className="font-display text-2xl text-troptions-gold">Our program phases</h2>
        <p className="text-troptions-cream/85">
          Reference program (Phase 0–1): <strong className="text-troptions-cream">$400,000 – $900,000</strong>{" "}
          over ~4–6 months.
        </p>
        <div className="overflow-x-auto rounded-lg border border-troptions-gold/20">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-troptions-ink/80 text-troptions-gold">
              <tr>
                <th className="px-4 py-3">Phase</th>
                <th className="px-4 py-3">Range (USD)</th>
                <th className="px-4 py-3">Duration</th>
                <th className="px-4 py-3">Outcome</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-troptions-gold/10 text-troptions-cream/90">
              {phases.map((row) => (
                <tr key={row.phase} className="bg-troptions-slate/40">
                  <td className="px-4 py-3 font-medium">{row.phase}</td>
                  <td className="px-4 py-3">{row.range}</td>
                  <td className="px-4 py-3">{row.duration}</td>
                  <td className="px-4 py-3">{row.outcome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl text-troptions-gold">Market comparables</h2>
        <p className="text-troptions-cream/85">
          Few vendors sell gem SPV + Legacy Vault + BBS+ + Solana Token-2022 + x402 as one SKU. Most sell{" "}
          <em>pieces</em> — compare total cost of ownership across vendors.
        </p>
        <div className="overflow-x-auto rounded-lg border border-troptions-gold/20">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-troptions-ink/80 text-troptions-gold">
              <tr>
                <th className="px-4 py-3">Vendor / model</th>
                <th className="px-4 py-3">Typical economics</th>
                <th className="px-4 py-3">Gap vs. Allure program</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-troptions-gold/10 text-troptions-cream/90">
              {comparables.map((row) => (
                <tr
                  key={row.vendor}
                  className={
                    row.vendor.startsWith("Troptions")
                      ? "bg-troptions-gold/10"
                      : "bg-troptions-slate/40"
                  }
                >
                  <td className="px-4 py-3">
                    <span className="font-medium">{row.vendor}</span>
                    <span className="mt-1 block text-xs text-troptions-cream/60">{row.model}</span>
                  </td>
                  <td className="px-4 py-3">{row.economics}</td>
                  <td className="px-4 py-3">{row.gap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-lg border border-troptions-gold/25 bg-troptions-slate/50 p-6 space-y-3">
        <h2 className="font-display text-xl text-troptions-gold">Illustration: $25M raise</h2>
        <ul className="list-disc space-y-2 pl-5 text-troptions-cream/90">
          <li>
            <strong>Republic-style ~7%:</strong> ~$1.75M per successful raise (plus equity allocation).
          </li>
          <li>
            <strong>Troptions Phase 0–1 (~$650k mid):</strong> one-time infrastructure; reusable across
            investors and collateral workflows.
          </li>
        </ul>
      </section>

      <section className="flex flex-wrap gap-4">
        <a
          href="https://github.com/FTHTrading/ruby/blob/main/docs/client-facing/PRICING_AND_PROGRAM_SCOPE.md"
          className="rounded border border-troptions-gold/40 px-5 py-2 text-sm font-medium text-troptions-gold no-underline hover:bg-troptions-gold/10"
          target="_blank"
          rel="noopener noreferrer"
        >
          Full program scope →
        </a>
        <a
          href="https://github.com/FTHTrading/ruby/blob/main/docs/client-facing/MARKET_COMPARABLES.md"
          className="rounded border border-troptions-gold/40 px-5 py-2 text-sm font-medium text-troptions-gold no-underline hover:bg-troptions-gold/10"
          target="_blank"
          rel="noopener noreferrer"
        >
          Market comparables (sources) →
        </a>
        <Link
          href="/contact"
          className="rounded border border-troptions-gold bg-troptions-gold/15 px-5 py-2 text-sm font-medium text-troptions-gold no-underline hover:bg-troptions-gold/25"
        >
          Request onboarding →
        </Link>
      </section>
    </div>
  );
}
