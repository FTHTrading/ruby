import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ProofRequestDemo } from "@/components/ProofRequestDemo";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Security & Credentials",
  description: "BBS+ selective disclosure, vault encryption, and GemAssetCredential security model.",
  path: "/security",
});

export default function SecurityPage() {
  return (
    <div className="space-y-12">
      <PageHero title="Security &amp; credentials">
        <p>
          The program separates <strong>storage security</strong> (encryption, access policy) from{" "}
          <strong>presentation security</strong> (BBS+ selective disclosure on BLS12-381). Ruby
          documents the architecture; Legacy implements issuance and verification APIs.
        </p>
      </PageHero>

      <section className="space-y-4">
        <h2 className="text-2xl text-troptions-gold">BBS+ &amp; VCDM 2.0</h2>
        <p className="max-w-3xl leading-relaxed text-troptions-cream/85">
          GemAssetCredential claims are signed with BBS+ on the BLS12-381 curve. Holders can derive
          presentations that disclose only lender-relevant fields while withholding certificate CIDs.
        </p>
        <ul className="list-inside list-disc space-y-2 text-sm text-troptions-cream/80">
          <li>Implementation: Legacy BBSService — not duplicated in ruby</li>
          <li>
            <a
              href="https://github.com/FTHTrading/Legacy/blob/main/docs/BLS12_381_CURVE.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              BLS12-381 curve guide
            </a>
          </li>
          <li>
            <a href="https://github.com/FTHTrading/ruby/blob/main/architecture/bbs-vcdm.md">
              architecture/bbs-vcdm.md
            </a>
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="font-display text-2xl text-troptions-gold">Interactive proof demo</h2>
        <ProofRequestDemo />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl text-troptions-gold">Encryption &amp; custody</h2>
        <p className="max-w-3xl leading-relaxed text-troptions-cream/85">
          Laboratory PDFs and custody receipts are encrypted client-side before private IPFS upload.
          Public GitHub indexes reference labels and hashes only.
        </p>
        <Link href="/stack" className="text-sm">
          View manifest sample on stack page →
        </Link>
      </section>
    </div>
  );
}
