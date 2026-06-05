import Image from "next/image";
import Link from "next/link";

const nav = [
  { href: "/offering", label: "Offering" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/security", label: "Security" },
  { href: "/invest", label: "Invest" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-troptions-gold/20 bg-troptions-slate/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-3 no-underline hover:opacity-90">
          <Image src="/logo-troptions.svg" alt="Troptions" width={120} height={40} priority />
        </Link>
        <nav className="flex flex-wrap justify-end gap-4 text-sm font-medium tracking-wide text-troptions-cream/90">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="no-underline hover:text-troptions-gold">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
