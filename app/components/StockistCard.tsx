"use client";

import { MapPin } from "lucide-react";
import { trackStockistClick } from "@/app/lib/analytics";

interface StockistCardProps {
  name: string;
  type: string;
  location: string;
}

export default function StockistCard({ name, type, location }: StockistCardProps) {
  return (
    <div
      className="flex items-center justify-between p-5 bg-gray-50 rounded-xl border border-gray-100"
      onClick={() => trackStockistClick()}
    >
      <div className="flex items-center gap-4">
        <MapPin className="w-6 h-6 text-brand-terracotta/70" />
        <div>
          <h3 className="font-bold text-brand-charcoal">{name}</h3>
          <p className="text-xs text-brand-muted uppercase tracking-wider">{type}</p>
        </div>
      </div>
      <span className="text-sm font-medium text-brand-terracotta bg-brand-terracotta/10 px-3 py-1 rounded-full">
        {location}
      </span>
    </div>
  );
}
