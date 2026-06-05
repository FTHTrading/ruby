import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "How It Works",
  description: "Custody, credentials, and tokenization flow for Allure Ruby RWA.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <div className="space-y-10">
      <PageHero title="How it works">
        <p>
          Physical gems remain in qualified custody while digital rights flow through vault proofs,
          verifiable credentials, and token metadata. See the{" "}
          <Link href="/stack">full technology stack</Link> for per-system documentation.
        </p>
      </PageHero>

      <ol className="space-y-4 text-troptions-cream/90">
        <li className="rounded-lg border border-troptions-gold/15 bg-troptions-slate p-5">
          <strong className="text-troptions-gold">1. Custody &amp; manifest</strong> — Encrypted
          uploads, RWA manifest binding, appraisal status TBD in claims.
        </li>
        <li className="rounded-lg border border-troptions-gold/15 bg-troptions-slate p-5">
          <strong className="text-troptions-gold">2. Credentials</strong> — GemAssetCredential via
          Legacy; BBS+ lender presentations without dollar NAV.
        </li>
        <li className="rounded-lg border border-troptions-gold/15 bg-troptions-slate p-5">
          <strong className="text-troptions-gold">3. Mint</strong> — troptionsmint Token-2022 with
          metadata URI to provenance bundle.
        </li>
        <li className="rounded-lg border border-troptions-gold/15 bg-troptions-slate p-5">
          <strong className="text-troptions-gold">4. Distribution</strong> — Private placement and
          selective disclosure per counterparty policy.
        </li>
      </ol>

      <p>
        <Link href="/docs">Documentation hub</Link> ·{" "}
        <a href="https://github.com/FTHTrading/ruby/blob/main/architecture/FULL_STACK.md">
          FULL_STACK.md
        </a>
      </p>
    </div>
  );
}
