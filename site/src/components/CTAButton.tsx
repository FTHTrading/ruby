import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function CTAButton({ href, children, variant = "primary" }: Props) {
  const base =
    "inline-block rounded px-6 py-3 font-medium no-underline transition-colors focus:outline-none focus:ring-2 focus:ring-troptions-gold/50";
  const styles =
    variant === "primary"
      ? "border border-troptions-gold bg-troptions-gold/10 text-troptions-gold hover:bg-troptions-gold/25"
      : "border border-troptions-cream/30 text-troptions-cream hover:border-troptions-gold";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
