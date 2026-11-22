export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <span
        role="img"
        aria-label="Movie Camera"
        className={`leading-none select-none ${
          compact ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
        }`}
      >
        🎥
      </span>
      <div className="flex flex-col">
        <span
          className={`font-display font-extrabold tracking-wide text-foreground leading-tight ${
            compact ? "text-xs sm:text-sm md:text-base" : "text-base sm:text-lg md:text-xl"
          }`}
        >
          VADAPALANI <span className="text-amber-500 whitespace-nowrap">SHOOTING HOUSE</span>
        </span>
        <span
          className={`font-medium uppercase tracking-widest text-muted-foreground ${
            compact ? "text-[8px] md:text-[9px]" : "text-[10px]"
          }`}
        >
          Movie & Film Shoot Property · Chennai
        </span>
      </div>
    </div>
  );
}
