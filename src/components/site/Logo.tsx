export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        role="img"
        aria-label="Movie Camera"
        className={`leading-none select-none ${
          compact ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl"
        }`}
      >
        🎥
      </span>
      <div className="flex flex-col">
        <span
          className={`font-display font-extrabold tracking-wider text-foreground ${
            compact ? "text-base md:text-lg" : "text-xl md:text-2xl"
          }`}
        >
          SHOOTING <span className="text-amber-500">HOUSE</span>
        </span>
        <span
          className={`font-semibold uppercase tracking-widest text-muted-foreground ${
            compact ? "text-[9px]" : "text-[11px]"
          }`}
        >
          Movie & Film Shoot Property · Chennai
        </span>
      </div>
    </div>
  );
}
