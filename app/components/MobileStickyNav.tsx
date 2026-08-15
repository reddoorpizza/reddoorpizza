"use client";

import { Phone, ShoppingBag, MapPin } from "lucide-react";

export default function MobileStickyNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-brand-terracotta border-t border-brand-terracotta-dark shadow-[0_-4px_20px_rgba(0,0,0,0.15)] safe-area-pb">
      <div className="flex items-center justify-around py-2 px-2">
        <a
          href="tel:+6353341500"
          className="flex flex-col items-center gap-1 px-4 py-2 text-brand-gold/80 hover:text-brand-gold transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">
            Call
          </span>
        </a>
        <a
          href="https://tuckerfox.com.au/red-door-pizza"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 px-6 py-2 -mt-4 bg-brand-gold text-brand-terracotta rounded-full shadow-lg"
        >
          <ShoppingBag className="w-6 h-6" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">
            Order
          </span>
        </a>
        <a
          href="https://maps.google.com/?q=401+Warrenheip+St+Buninyong+VIC+3357"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 px-4 py-2 text-brand-gold/80 hover:text-brand-gold transition-colors"
        >
          <MapPin className="w-5 h-5" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">
            Directions
          </span>
        </a>
      </div>
    </div>
  );
}
