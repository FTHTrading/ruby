import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Documentation",
  description:
    "Master index for Allure Ruby RWA architecture, tokenization, x402, VC schemas, and client-facing materials.",
  path: "/docs",
});

const sections = [
  {
    title: "Client-facing",
    links: [
      { href: "https://github.com/FTHTrading/ruby/blob/main/docs/client-facing/ONE_PAGER.md", label: "Executive one-pager" },
      { href: "https://github.com/FTHTrading/ruby/blob/main/docs/client-facing/SLIDE_DECK_OUTLINE.md", label: "Slide deck outline" },
      { href: "https://github.com/FTHTrading/ruby/blob/main/docs/client-facing/TERM_SHEET_LANGUAGE.md", label: "Term sheet language (non-binding)" },
      {
        href: "https://github.com/FTHTrading/ruby/blob/main/docs/client-facing/PRICING_AND_PROGRAM_SCOPE.md",
        label: "Pricing & program scope (non-binding)",
      },
    ],
  },
  {
    title: "Architecture",
    links: [
      { href: "https://github.com/FTHTrading/ruby/blob/main/architecture/SYSTEM_OVERVIEW.md", label: "System overview" },
      { href: "https://github.com/FTHTrading/ruby/blob/main/architecture/FULL_STACK.md", label: "Full stack map" },
      { href: "https://github.com/FTHTrading/ruby/blob/main/architecture/bbs-vcdm.md", label: "BBS+ / VCDM 2.0" },
    ],
  },
  {
    title: "Tokenization & x402",
    links: [
      { href: "https://github.com/FTHTrading/ruby/blob/main/docs/tokenization/README.md", label: "Token-2022 index" },
      { href: "https://github.com/FTHTrading/ruby/blob/main/docs/x402/README.md", label: "x402 metered access" },
      { href: "https://github.com/FTHTrading/ruby/blob/main/docs/API_INTEGRATION.md", label: "API integration guide" },
    ],
  },
  {
    title: "Verifiable credentials",
    links: [
      { href: "https://github.com/FTHTrading/ruby/blob/main/docs/vc-schemas/README.md", label: "VC schemas README" },
      { href: "https://github.com/FTHTrading/ruby/blob/main/docs/vc-schemas/examples/bbs-lender-presentation.json", label: "BBS lender VP sample" },
      { href: "https://github.com/FTHTrading/Legacy/blob/main/docs/BBS_PLUS_INTEGRATION.md", label: "Legacy BBS+ integration" },
    ],
  },
  {
    title: "PDFs (generate locally)",
    links: [
      { href: "https://github.com/FTHTrading/ruby/blob/main/pdfs/README.md", label: "PDF pipeline — 8 templates" },
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="space-y-12">
      <PageHero eyebrow="Knowledge base" title="Documentation hub">
        <p>
          Authoritative markdown lives in the{" "}
          <a href="https://github.com/FTHTrading/ruby/tree/main/docs">ruby repo</a>. This hub links
          the sections indexed from the client portal. Valuation fields remain{" "}
          <strong className="text-troptions-gold">TBD</strong> until independent appraisal.
        </p>
      </PageHero>

      <div className="grid gap-8 md:grid-cols-2">
        {sections.map((section) => (
          <section
            key={section.title}
            className="rounded-lg border border-troptions-gold/15 bg-troptions-slate p-6"
          >
            <h2 className="font-display text-xl text-troptions-gold">{section.title}</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {section.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label} →
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="text-sm text-troptions-cream/70">
        Master index:{" "}
        <a href="https://github.com/FTHTrading/ruby/blob/main/docs/README.md">docs/README.md</a>
        {" · "}
        <Link href="/security">Security demos</Link>
      </p>
    </div>
  );
}
