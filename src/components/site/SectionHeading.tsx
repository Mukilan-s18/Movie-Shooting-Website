export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center px-4">
      <h2 className="font-display text-2xl font-bold tracking-tight text-primary sm:text-3xl md:text-4xl">
        {title}
      </h2>
      <div className="mt-3 flex items-center justify-center gap-3 text-gold">
        <div className="h-px w-12 bg-gold/50" />
        <span className="text-[10px] select-none text-gold font-serif">✦</span>
        <div className="h-px w-12 bg-gold/50" />
      </div>
      {subtitle ? (
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">{subtitle}</p>
      ) : null}
    </div>
  );
}
