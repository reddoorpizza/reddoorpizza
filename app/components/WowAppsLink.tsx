"use client";

import { ShoppingBag } from "lucide-react";
import { WOWAPPS_ORDER_URL } from "@/app/config/constants";
import { trackOrderOnlineClick } from "@/app/lib/analytics";

interface WowAppsLinkProps {
  buttonLocation: string;
  className?: string;
  children?: React.ReactNode;
}

export default function WowAppsLink({
  buttonLocation,
  className,
  children,
}: WowAppsLinkProps) {
  return (
    <a
      href={WOWAPPS_ORDER_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackOrderOnlineClick(buttonLocation)}
      className={className}
    >
      {children ?? (
        <>
          <ShoppingBag className="w-5 h-5" />
          Pre-Order via Wowapps
        </>
      )}
    </a>
  );
}
