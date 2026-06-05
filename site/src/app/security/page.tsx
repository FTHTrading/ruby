import Link from "next/link";

export default function SecurityPage() {
  return (
    <div className="space-y-10">
      <h1 className="font-display text-4xl text-troptions-cream">Security &amp; credentials</h1>
      <p className="max-w-3xl text-troptions-cream/85 leading-relaxed">
        The program separates <strong>storage security</strong> (encryption, access policy) from{" "}
        <strong>presentation security</strong> (BBS+ selective disclosure on BLS12-381). Ruby documents
        the architecture; Legacy implements issuance and verification APIs.
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl text-troptions-gold">BBS+ &amp; VCDM 2.0</h2>
        <p className="text-troptions-cream/85 leading-relaxed">
          GemAssetCredential claims are signed with BBS+ on the BLS12-381 curve. Holders can derive
          presentations that disclose only lender-relevant fields (e.g. title status, appraisal state)
          while withholding certificate CIDs and personal identifiers.
        </p>
        <ul className="list-inside list-disc space-y-2 text-sm text-troptions-cream/80">
          <li>No duplicate BBS implementation in this repo — see Legacy BBSService and docs</li>
          <li>
            Curve reference:{" "}
            <a
              href="https://github.com/FTHTrading/Legacy/blob/main/docs/BLS12_381_CURVE.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              BLS12-381 curve guide
            </a>
          </li>
          <li>
            Selective disclosure explainer:{" "}
            <Link href="/architecture/bbs-vcdm.md">architecture/bbs-vcdm.md</Link>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl text-troptions-gold">Encryption &amp; custody</h2>
        <p className="text-troptions-cream/85 leading-relaxed">
          Laboratory PDFs and custody receipts are encrypted client-side before private IPFS upload.
          Public GitHub indexes reference labels and hashes only — never live certificate numbers in
          this repository.
        </p>
      </section>
    </div>
  );
}
