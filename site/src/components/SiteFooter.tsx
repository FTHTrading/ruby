import Link from "next/link";

const footerLinks = [
  { href: "/docs", label: "Documentation" },
  { href: "/stack", label: "Technology stack" },
  { href: "https://github.com/FTHTrading/ruby", label: "GitHub (ruby)", external: true },
  { href: "https://github.com/FTHTrading/Legacy", label: "GitHub (Legacy)", external: true },
];

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-troptions-gold/20 bg-troptions-slate px-6 py-12 text-sm text-troptions-cream/70">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        <div className="space-y-3">
          <p className="font-display text-lg text-troptions-gold">Allure Ruby &amp; Siam Emerald RWA</p>
          <p>
            Institutional materials under{" "}
            <Link href="https://github.com/FTHTrading/ruby/blob/main/LICENSE">MIT License</Link>.
            Not legal or investment advice. Appraisal and package NAV are{" "}
            <strong className="text-troptions-cream">TBD</strong> until independent clearance.
          </p>
        </div>
        <div className="flex flex-col gap-2 md:items-end">
          {footerLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-troptions-cream/80 hover:text-troptions-gold"
              >
                {link.label} →
              </a>
            ) : (
              <Link key={link.href} href={link.href} className="no-underline hover:text-troptions-gold">
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>
    </footer>
  );
}
