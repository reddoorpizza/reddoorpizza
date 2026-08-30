"use client";

import { ShoppingBag } from "lucide-react";
import { WOWAPPS_ORDER_URL } from "@/app/config/constants";
import { trackOrderOnlineClick } from "@/app/lib/analytics";

export default function FloatingOrderButton() {
  return (
    <a
      href={WOWAPPS_ORDER_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order Online"
      onClick={() => trackOrderOnlineClick("floating")}
      className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2 bg-[#ac511a] hover:bg-[#c05c1e] text-white font-semibold px-5 py-3 rounded-full shadow-lg shadow-[#ac511a]/30 transition-all hover:scale-105"
    >
      <ShoppingBag className="w-5 h-5" />
      <span className="text-xs uppercase tracking-wider">Order Online</span>
    </a>
  );
}
