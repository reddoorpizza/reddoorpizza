"use client";

import { Star } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-[#18181B] text-white py-2 px-4 text-xs md:text-sm text-center font-medium tracking-wide border-b border-white/10">
      <span className="hidden sm:inline">
        🔥 Lunch Special: $23 Wood-Fired Pizzas (Fri–Sun, 12pm–3pm){" "}
        <span className="mx-2 text-white/40">|</span>
      </span>
      <span className="sm:hidden">🔥 $23 Lunch Special (Fri–Sun)</span>
      <span className="hidden sm:inline">
        Rated{" "}
        <span className="inline-flex items-center gap-0.5">
          4.6 <Star className="w-3 h-3 fill-brand-gold text-brand-gold" />
        </span>{" "}
        in Buninyong
      </span>
      <span className="sm:hidden inline-flex items-center gap-0.5">
        4.6 <Star className="w-3 h-3 fill-brand-gold text-brand-gold" />
      </span>
    </div>
  );
}
