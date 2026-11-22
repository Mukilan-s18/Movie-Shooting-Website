import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/business";
import { useState, useEffect } from "react";

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip 4 seconds after load
    const timer = setTimeout(() => setShowTooltip(true), 4000);
    // Hide after another 10 seconds
    const hideTimer = setTimeout(() => setShowTooltip(false), 14000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 md:bottom-10 md:right-10">
      {showTooltip && (
        <div className="animate-in fade-in slide-in-from-bottom-2 relative rounded-lg bg-card p-3 text-sm shadow-xl ring-1 ring-border">
          <p className="font-semibold text-foreground">Planning a film shoot or recce?</p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Chat instantly with our Location Manager
          </p>
          <div className="absolute -bottom-2 right-6 h-4 w-4 rotate-45 border-b border-r border-border bg-card"></div>
        </div>
      )}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with our Location Manager on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
