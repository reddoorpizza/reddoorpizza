"use client";

import { ExternalLink } from "lucide-react";
import { WOWAPPS_ORDER_URL } from "@/app/config/constants";
import { trackMenuItemOrderClick } from "@/app/lib/analytics";

interface OrderButtonProps {
  itemName: string;
  category: string;
}

export default function OrderButton({ itemName, category }: OrderButtonProps) {
  return (
    <a
      href={WOWAPPS_ORDER_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackMenuItemOrderClick(itemName, category)}
      aria-label={`Order ${itemName} on WowApps`}
      className="min-h-[44px] inline-flex items-center gap-1.5 bg-brand-terracotta hover:bg-brand-terracotta-dark text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition-all shadow-sm hover:shadow"
    >
      <span>Order on WowApps</span>
      <ExternalLink className="w-3.5 h-3.5 opacity-80" />
    </a>
  );
}
