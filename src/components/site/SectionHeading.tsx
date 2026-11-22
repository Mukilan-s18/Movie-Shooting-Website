export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center px-4">
      <h2 className="font-display text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
        {title}
      </h2>
      <div className="mt-3 flex items-center justify-center gap-2 text-amber-500">
        <div className="h-px w-10 bg-amber-500/30" />
        <span role="img" aria-label="Movie Camera" className="text-sm select-none">
          🎥
        </span>
        <div className="h-px w-10 bg-amber-500/30" />
      </div>
      {subtitle ? (
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
