import { CTAButton } from "@/components/CTAButton";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Invest",
  description: "Four-phase institutional client journey for Allure Ruby RWA onboarding and mint.",
  path: "/invest",
});

const phases = [
  {
    phase: "Phase 1 — Intake & verification",
    items: [
      "KYC/AML and accredited-investor qualification per counsel",
      "Encrypted cert upload to Legacy Vault; manifest via portal intake",
      "Appraisal engagement — claims remain TBD until cleared",
    ],
  },
  {
    phase: "Phase 2 — Legal & custody",
    items: [
      "SPV formation and custody agreements",
      "Release policy and guardian mapping in vault namespace",
      "Lien and title claims prepared for credential issuance",
    ],
  },
  {
    phase: "Phase 3 — Credentials & mint",
    items: [
      "GemAssetCredential issuance (BBS+) via Legacy APIs",
      "troptionsmint Token-2022 mint with provenance URIs",
      "Authority revocation and compliance hook configuration",
    ],
  },
  {
    phase: "Phase 4 — Distribution & liquidity",
    items: [
      "Private placement documentation (Reg D/S as applicable)",
      "Secondary policy and GMIIE comp references",
      "Ongoing audit trail on Legacy Chain registry",
    ],
  },
];

export default function InvestPage() {
  return (
    <div className="space-y-12">
      <PageHero title="Client journey">
        <p>
          Institutional participants move through four gated phases. Each gate produces artifacts in
          Legacy Vault before any on-chain mint is promoted to mainnet.
        </p>
      </PageHero>

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

      <CTAButton href="/contact">Start onboarding</CTAButton>
    </div>
  );
}
