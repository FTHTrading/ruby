"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/offering", label: "Offering" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/stack", label: "Stack" },
  { href: "/security", label: "Security" },
  { href: "/docs", label: "Docs" },
  { href: "/invest", label: "Invest" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-troptions-gold/20 bg-troptions-slate/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex shrink-0 items-center gap-3 no-underline hover:opacity-90">
          <Image src="/logo-troptions.svg" alt="Troptions" width={120} height={40} priority />
        </Link>

        <button
          type="button"
          className="rounded border border-troptions-gold/30 px-3 py-1.5 text-sm text-troptions-cream md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>

        <nav
          id="mobile-nav"
          className={`${
            open ? "flex" : "hidden"
          } absolute left-0 right-0 top-full flex-col gap-1 border-b border-troptions-gold/20 bg-troptions-slate px-6 py-4 md:static md:flex md:flex-row md:flex-wrap md:justify-end md:gap-4 md:border-0 md:bg-transparent md:p-0`}
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium tracking-wide text-troptions-cream/90 no-underline hover:text-troptions-gold md:py-0"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
