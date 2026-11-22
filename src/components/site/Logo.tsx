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
          className={`font-display font-extrabold tracking-wider text-foreground leading-tight ${
            compact ? "text-sm sm:text-base md:text-lg" : "text-base sm:text-xl md:text-2xl"
          }`}
        >
          VADAPALANI <span className="text-amber-500 whitespace-nowrap">SHOOTING HOUSE</span>
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
