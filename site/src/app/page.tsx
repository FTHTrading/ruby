import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Institutional Gem RWA",
  description:
    "Allure Ruby and Siam Emerald real-world asset tokenization on Legacy Vault, troptionsmint, and BBS+ credentials.",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <p className="text-sm uppercase tracking-[0.2em] text-troptions-gold">Sovereign RWA Infrastructure</p>
        <h1 className="font-display text-4xl font-semibold leading-tight text-troptions-cream md:text-5xl lg:text-6xl">
          Institutional gem RWA on sovereign rails
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-troptions-cream/85">
          The Allure Ruby program tokenizes museum-grade colored gemstones with legal custody,
          encrypted provenance, verifiable credentials, and Solana Token-2022 issuance — without
          outsourcing trust to opaque custodians or retail-grade tooling.
        </p>
        <div className="flex flex-wrap gap-4">
          <CTAButton href="/offering">View offering</CTAButton>
          <CTAButton href="/pricing" variant="secondary">
            Program pricing
          </CTAButton>
          <CTAButton href="/stack" variant="secondary">
            Explore stack
          </CTAButton>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Legacy Vault",
            body: "AES-256-GCM encryption, private IPFS manifests, W3C DID/VC 2.0, and multi-proof release policies for estate-grade custody.",
          },
          {
            title: "troptionsmint",
            body: "Institutional Solana Token-2022 mint with compliance hooks, metadata binding to vault proofs, and authority revocation.",
          },
          {
            title: "Selective disclosure",
            body: "BBS+ credentials over BLS12-381 let counterparties verify lien status or appraisal state without exposing full cert payloads.",
          },
        ].map((card) => (
          <article
            key={card.title}
            className="rounded-lg border border-troptions-gold/15 bg-troptions-slate p-6 shadow-lg shadow-black/20"
          >
            <h2 className="font-display text-xl text-troptions-gold">{card.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-troptions-cream/80">{card.body}</p>
          </article>
        ))}
      </section>

      <section className="rounded-lg border border-troptions-gold/20 bg-gradient-to-br from-troptions-slate to-troptions-ink p-8">
        <h2 className="font-display text-2xl text-troptions-cream">Valuation discipline</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-troptions-cream/80">
          Package economics are presented as a{" "}
          <strong className="text-troptions-gold">target package subject to independent appraisal</strong>.
          No public materials assert a binding net asset value until qualified appraisers and counsel
          clear disclosure for your jurisdiction.
        </p>
        <Link href="/invest" className="mt-6 inline-block text-sm font-medium">
          Client journey →
        </Link>
      </section>
    </div>
  );
}
