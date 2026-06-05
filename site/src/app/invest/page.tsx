const phases = [
  {
    phase: "Phase 1 — Intake & verification",
    items: [
      "KYC/AML and accredited-investor qualification per counsel",
      "Encrypted cert upload to Legacy Vault; manifest stub in ruby tracking",
      "Appraisal engagement — claims remain TBD until cleared",
    ],
  },
  {
    phase: "Phase 2 — Legal & custody",
    items: [
      "SPV formation and custody agreements",
      "Release policy and guardian/executor mapping in vault namespace",
      "Lien and title claims prepared for credential issuance",
    ],
  },
  {
    phase: "Phase 3 — Credentials & mint",
    items: [
      "GemAssetCredential issuance (BBS+) via Legacy APIs",
      "troptionsmint Token-2022 mint with metadata bound to provenance URIs",
      "Authority revocation and compliance hook configuration",
    ],
  },
  {
    phase: "Phase 4 — Distribution & liquidity",
    items: [
      "Private placement documentation (Reg D/S as applicable)",
      "Secondary policy and oracle-fed comp updates via GMIIE",
      "Ongoing audit trail on Legacy Chain registry",
    ],
  },
];

export default function InvestPage() {
  return (
    <div className="space-y-10">
      <h1 className="font-display text-4xl text-troptions-cream">Client journey</h1>
      <p className="max-w-3xl text-troptions-cream/85 leading-relaxed">
        Institutional participants move through four gated phases. Each gate produces artifacts in
        Legacy Vault before any on-chain mint is promoted to mainnet.
      </p>
      <div className="space-y-8">
        {phases.map((p) => (
          <section key={p.phase} className="border-l-2 border-troptions-gold pl-6">
            <h2 className="text-xl font-semibold text-troptions-gold">{p.phase}</h2>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-troptions-cream/85">
              {p.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
