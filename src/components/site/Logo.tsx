import { Film } from "lucide-react";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className={`flex items-center justify-center rounded border border-border bg-card text-primary shrink-0 ${
          compact ? "h-8 w-8" : "h-10 w-10"
        }`}
      >
        <Film className={compact ? "h-4 w-4" : "h-5 w-5"} />
      </div>
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
