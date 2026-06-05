import Link from "next/link";

const systems = [
  {
    name: "Legacy Vault",
    summary:
      "Encrypted document vault, IPFS manifests, release engine, and W3C DID/VC issuance for gem provenance.",
    href: "https://github.com/FTHTrading/Legacy/blob/main/docs/LEGACY_VAULT_ARCHITECTURE.md",
  },
  {
    name: "Legacy Chain",
    summary:
      "Private registry and audit anchoring for vault events; coordinates with Layer 0 proof routing (roadmap).",
    href: "https://github.com/FTHTrading/Legacy/blob/main/docs/LAYER0_OVERVIEW.md",
  },
  {
    name: "troptionsmint",
    summary:
      "Institutional Solana Token-2022 mint console — metadata URIs, transfer hooks, authority revocation.",
    href: "https://github.com/FTHTrading/ruby/blob/feat/client-portal/architecture/troptionsmint.md",
  },
  {
    name: "x402",
    summary:
      "HTTP 402 metered access for exports, compliance reports, and agent-callable vault services.",
    href: "https://github.com/FTHTrading/Legacy/blob/main/docs/X402_INTEGRATION.md",
  },
  {
    name: "Agent Mailor",
    summary:
      "Agent-orchestrated notifications and workflow handoffs between mint, vault, and compliance desks (integration stub).",
    href: "https://github.com/FTHTrading/ruby/blob/feat/client-portal/architecture/agent-mailor.md",
  },
  {
    name: "GMIIE",
    summary:
      "Market intelligence and oracle references for comps — not a substitute for legal appraisal.",
    href: "https://github.com/FTHTrading/ruby/blob/feat/client-portal/architecture/gmii.md",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="space-y-10">
      <h1 className="font-display text-4xl text-troptions-cream">How it works</h1>
      <p className="max-w-3xl text-troptions-cream/85 leading-relaxed">
        Physical gems remain in qualified custody while digital rights flow through vault proofs,
        verifiable credentials, and token metadata. Each layer has a single owner in the stack map below.
      </p>
      <ol className="space-y-6">
        {systems.map((s, i) => (
          <li key={s.name} className="flex gap-4 rounded-lg border border-troptions-gold/15 bg-troptions-slate p-6">
            <span className="font-display text-2xl text-troptions-gold">{i + 1}</span>
            <div>
              <h2 className="text-xl font-semibold text-troptions-cream">{s.name}</h2>
              <p className="mt-2 text-sm text-troptions-cream/80">{s.summary}</p>
              <a href={s.href} className="mt-2 inline-block text-sm">
                Technical reference →
              </a>
            </div>
          </li>
        ))}
      </ol>
      <p>
        Full integration map:{" "}
        <Link href="https://github.com/FTHTrading/ruby/blob/feat/client-portal/architecture/FULL_STACK.md">
          architecture/FULL_STACK.md
        </Link>
      </p>
    </div>
  );
}
