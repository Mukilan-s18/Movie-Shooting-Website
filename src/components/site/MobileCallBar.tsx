import { MessageCircle, Phone } from "lucide-react";
import { business, whatsappUrl } from "@/lib/business";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-background md:hidden">
      <a
        href={`tel:+91${business.phonePrimary}`}
        className="flex items-center justify-center gap-2 bg-amber-500 py-3 text-xs font-bold uppercase tracking-wider text-black"
      >
        <Phone className="h-4 w-4" /> Call Manager
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 bg-[#25D366] py-3 text-xs font-bold uppercase tracking-wider text-white"
      >
        <MessageCircle className="h-4 w-4" /> WhatsApp Recce
      </a>
    </div>
  );
}
