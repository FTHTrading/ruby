import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ManifestViewer } from "@/components/ManifestViewer";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Technology Stack",
  description:
    "Legacy Chain, Legacy Vault, troptionsmint, x402, Agent Mailor, GMIIE, and BBS+ selective disclosure for Allure Ruby RWA.",
  path: "/stack",
});

const stack = [
  {
    name: "Legacy Chain",
    role: "Private registry and audit anchoring for vault events; coordinates with Layer 0 proof routing.",
    doc: "https://github.com/FTHTrading/Legacy/blob/main/docs/LAYER0_OVERVIEW.md",
  },
  {
    name: "Legacy Vault",
    role: "AES-256-GCM encryption, IPFS manifests, W3C DID/VC 2.0, release engine, RWA manifest APIs.",
    doc: "https://github.com/FTHTrading/ruby/blob/main/architecture/legacy-vault.md",
  },
  {
    name: "troptionsmint",
    role: "Institutional Solana Token-2022 mint — metadata URIs, transfer hooks, authority revocation.",
    doc: "https://github.com/FTHTrading/ruby/blob/main/architecture/troptionsmint.md",
  },
  {
    name: "x402",
    role: "HTTP 402 metered exports for compliance reports and audit bundles.",
    doc: "https://github.com/FTHTrading/ruby/blob/main/docs/x402/README.md",
  },
  {
    name: "Agent Mailor",
    role: "Agent-orchestrated intake, notifications, and workflow handoffs (integration stub in v1).",
    doc: "https://github.com/FTHTrading/ruby/blob/main/architecture/agent-mailor.md",
  },
  {
    name: "GMIIE",
    role: "Market intelligence and oracle references — indicative comps, not legal appraisal.",
    doc: "https://github.com/FTHTrading/ruby/blob/main/architecture/gmii.md",
  },
  {
    name: "BBS+",
    role: "Selective disclosure on BLS12-381 for lender and guardian presentations.",
    doc: "https://github.com/FTHTrading/ruby/blob/main/architecture/bbs-vcdm.md",
  },
];

export default function StackPage() {
  return (
    <div className="space-y-14">
      <PageHero eyebrow="Full stack" title="Sovereign RWA rails">
        <p>
          Each layer has a single owner. Ruby documents contracts and runs the client portal; Legacy
          implements vault crypto and VC APIs; troptionsmint operates the mint console.
        </p>
      </PageHero>

      <section className="space-y-6">
        {stack.map((item, i) => (
          <article
            key={item.name}
            className="flex gap-4 rounded-lg border border-troptions-gold/15 bg-troptions-slate p-6"
          >
            <span className="font-display text-3xl text-troptions-gold/80">{i + 1}</span>
            <div>
              <h2 className="text-xl font-semibold text-troptions-cream">{item.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-troptions-cream/85">{item.role}</p>
              <a href={item.doc} className="mt-3 inline-block text-sm" target="_blank" rel="noopener noreferrer">
                Documentation →
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl text-troptions-gold">Sample manifest metadata</h2>
        <ManifestViewer />
      </section>

      <p className="text-sm">
        <Link href="/how-it-works">How it works</Link> ·{" "}
        <Link href="/docs">Documentation hub</Link>
      </p>
    </div>
  );
}
