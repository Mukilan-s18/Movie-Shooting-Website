export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        role="img"
        aria-label="Movie Camera"
        className={`shrink-0 select-none leading-none ${
          compact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl"
        }`}
      >
        🎥
      </span>
      <div className="flex flex-col">
        <span
          className={`font-display font-extrabold tracking-wide text-foreground leading-tight ${
            compact ? "text-sm sm:text-base md:text-lg" : "text-base sm:text-lg md:text-xl"
          }`}
        >
          VADAPALANI <span className="text-amber-500 whitespace-nowrap">SHOOTING HOUSE</span>
        </span>
        <span
          className={`font-medium uppercase tracking-widest text-muted-foreground ${
            compact ? "text-[9px] md:text-[10px]" : "text-[10px]"
          }`}
        >
          Movie & Film Shoot Property · Chennai
        </span>
      </div>
    </div>
  );
}
