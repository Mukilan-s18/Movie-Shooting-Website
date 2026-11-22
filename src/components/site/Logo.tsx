import { Clapperboard } from "lucide-react";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex items-center justify-center rounded-md bg-gradient-to-br from-amber-500 to-amber-700 text-black shadow-md ${
          compact ? "h-10 w-10" : "h-12 w-12"
        }`}
      >
        <Clapperboard className={compact ? "h-5 w-5" : "h-6 w-6"} />
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
