import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <p className="text-sm uppercase tracking-[0.2em] text-troptions-gold">Sovereign RWA Infrastructure</p>
        <h1 className="font-display text-4xl font-semibold text-troptions-cream md:text-5xl">
          Institutional gem RWA on sovereign rails
        </h1>
        <p className="max-w-3xl text-lg text-troptions-cream/85 leading-relaxed">
          The Allure Ruby program tokenizes museum-grade colored gemstones with legal custody,
          encrypted provenance, verifiable credentials, and Solana Token-2022 issuance — without
          outsourcing trust to opaque custodians or retail-grade tooling.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/offering"
            className="rounded border border-troptions-gold bg-troptions-gold/10 px-6 py-3 font-medium text-troptions-gold no-underline hover:bg-troptions-gold/20"
          >
            View offering
          </Link>
          <Link
            href="/how-it-works"
            className="rounded border border-troptions-cream/30 px-6 py-3 text-troptions-cream no-underline hover:border-troptions-gold"
          >
            Architecture
          </Link>
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
            body: "Institutional Solana Token-2022 mint with compliance hooks, metadata binding to vault proofs, and authority revocation for immutability.",
          },
          {
            title: "Selective disclosure",
            body: "BBS+ credentials over BLS12-381 let counterparties verify lien status or appraisal state without exposing full cert payloads.",
          },
        ].map((card) => (
          <article
            key={card.title}
            className="rounded-lg border border-troptions-gold/15 bg-troptions-slate p-6"
          >
            <h2 className="font-display text-xl text-troptions-gold">{card.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-troptions-cream/80">{card.body}</p>
          </article>
        ))}
      </section>

      <section className="rounded-lg border border-troptions-gold/20 bg-troptions-slate/60 p-8">
        <h2 className="font-display text-2xl text-troptions-cream">Valuation discipline</h2>
        <p className="mt-4 max-w-3xl text-troptions-cream/80 leading-relaxed">
          Package economics are presented as a <strong>target package subject to independent appraisal</strong>.
          No public materials assert a binding net asset value until qualified appraisers and counsel clear
          disclosure for your jurisdiction.
        </p>
      </section>
    </div>
  );
}
