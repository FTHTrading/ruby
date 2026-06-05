export default function OfferingPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <h1 className="font-display text-4xl text-troptions-cream">Offering overview</h1>
        <p className="max-w-3xl text-troptions-cream/85 leading-relaxed">
          The program centers on two complementary gem assets — the 54.00 carat Allure Ruby and a
          polished Siam Emerald — structured for institutional participation through an SPV and
          on-chain representation via troptionsmint.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        <article className="rounded-lg border border-troptions-gold/20 bg-troptions-slate p-6">
          <h2 className="font-display text-2xl text-troptions-gold">Allure Ruby</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-troptions-cream/85">
            <li>54.00 ct heated ruby, East Africa / Madagascar provenance narrative</li>
            <li>Third-party laboratory reports referenced in vault manifests (redacted in public repo)</li>
            <li>Title and custody status carried in GemAssetCredential claims</li>
          </ul>
        </article>
        <article className="rounded-lg border border-troptions-gold/20 bg-troptions-slate p-6">
          <h2 className="font-display text-2xl text-troptions-gold">Siam Emerald</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-troptions-cream/85">
            <li>Polished emerald positioned within Thailand / global trading hub context</li>
            <li>Market comps and treatment disclosure governed by GMIIE references where deployed</li>
            <li>Appraisal workflow aligned with ruby package — not asserted as final NAV here</li>
          </ul>
        </article>
      </section>

      <section className="rounded border border-amber-500/40 bg-amber-950/30 p-6">
        <h2 className="text-lg font-semibold text-troptions-gold">Independent appraisal</h2>
        <p className="mt-3 text-troptions-cream/90 leading-relaxed">
          Any combined package value discussed in planning materials is a{" "}
          <strong>target package subject to independent appraisal</strong>. Until appraisal references
          are bound in Legacy Vault manifests and re-issued credentials, treat valuation fields as{" "}
          <code className="text-troptions-gold">TBD</code> in verifiable claims — not as marketed fact.
        </p>
      </section>
    </div>
  );
}
