type Props = {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, children }: Props) {
  return (
    <header className="space-y-4 border-b border-troptions-gold/15 pb-10">
      {eyebrow ? (
        <p className="text-sm uppercase tracking-[0.2em] text-troptions-gold">{eyebrow}</p>
      ) : null}
      <h1 className="font-display text-4xl font-semibold text-troptions-cream md:text-5xl">
        {title}
      </h1>
      {children ? (
        <div className="max-w-3xl text-lg leading-relaxed text-troptions-cream/85">{children}</div>
      ) : null}
    </header>
  );
}
