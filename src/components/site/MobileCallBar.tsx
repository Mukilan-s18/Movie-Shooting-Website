import { MessageCircle, Phone } from "lucide-react";
import { business, whatsappUrl } from "@/lib/business";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-background pb-[max(0.5rem,env(safe-area-inset-bottom))] md:hidden shadow-2xl">
      <a
        href={`tel:${business.phonePrimary}`}
        className="flex items-center justify-center gap-2 bg-amber-500 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-amber-400"
      >
        <Phone className="h-4 w-4" /> Call: {business.phonePrimaryDisplay}
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 bg-[#25D366] py-3 text-xs font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-95"
      >
        <MessageCircle className="h-4 w-4" /> WhatsApp Recce
      </a>
    </div>
  );
}
