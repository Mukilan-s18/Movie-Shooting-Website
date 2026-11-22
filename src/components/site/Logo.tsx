export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex items-center justify-center rounded-md bg-gradient-to-br from-amber-500 to-amber-700 text-black shadow-md ${
          compact ? "h-10 w-10 text-xl" : "h-12 w-12 text-2xl"
        }`}
      >
        <span role="img" aria-label="Movie Camera" className="leading-none select-none">
          🎥
        </span>
      </div>
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
