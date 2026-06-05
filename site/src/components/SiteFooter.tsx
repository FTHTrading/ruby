import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-troptions-gold/20 bg-troptions-slate px-6 py-10 text-sm text-troptions-cream/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:justify-between">
        <p>
          Allure Ruby &amp; Siam Emerald RWA — institutional materials under{" "}
          <Link href="https://github.com/FTHTrading/ruby/blob/main/LICENSE">MIT License</Link>.
          Not legal or investment advice.
        </p>
        <p>
          Technical depth:{" "}
          <a href="https://github.com/FTHTrading/Legacy" target="_blank" rel="noopener noreferrer">
            FTHTrading/Legacy
          </a>
        </p>
      </div>
    </footer>
  );
}
