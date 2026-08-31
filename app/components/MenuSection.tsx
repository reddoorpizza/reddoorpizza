"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  UtensilsCrossed,
  WheatOff,
  Leaf,
  Flame,
  ArrowRight,
} from "lucide-react";
import { WOWAPPS_ORDER_URL } from "@/app/config/constants";
import { trackMenuItemOrderClick, trackMenuView } from "@/app/lib/analytics";

interface FeaturedItem {
  name: string;
  description: string;
  price: string;
  tag?: string;
  icon: typeof Flame;
}

const featuredItems: FeaturedItem[] = [
  {
    name: "Pumpkin & Beet Pizza",
    description:
      "Onion jam, spinach, parmesan, baby beetroot, roasted marinated pumpkin, Meredith goat cheese & rocket.",
    price: "$26",
    tag: "V",
    icon: Leaf,
  },
  {
    name: "Gluten-Free Spaghetti Bolognese",
    description:
      "House-made Beef & Pork Spaghetti Bolognese served with premium gluten-free pasta.",
    price: "$28",
    tag: "GF",
    icon: WheatOff,
  },
  {
    name: "Lamb Ragu",
    description:
      "10-hour slow cooked lamb ragu with tomato, red wine, rosemary & fresh pappardelle.",
    price: "$30",
    icon: Flame,
  },
  {
    name: "Margherita Pizza",
    description:
      "The classic — tomato sauce, mozzarella & fresh basil from our traditional wood-fire oven.",
    price: "$23",
    tag: "V",
    icon: UtensilsCrossed,
  },
];

export default function MenuSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackMenuView();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="menu" ref={sectionRef} className="py-8 md:py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-[#ac511a] tracking-tight mb-3">
            Featured Favorites
          </h2>
          <p className="text-sm md:text-base text-[#1A1A1A]/70 max-w-xl mx-auto font-sans">
            A taste of what our wood-fire oven does best — locally sourced,
            handcrafted, and made with love in Buninyong.
          </p>
        </div>

        {/* Promo Banner */}
        <div className="bg-[#ac511a] text-[#eccb57] text-center text-xs md:text-sm font-bold uppercase tracking-wider py-2.5 px-4 rounded-lg mb-8">
          LUNCH SPECIAL — ALL PIZZAS $23 EACH (12–3 PM FRIDAY TO SUNDAY)
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.name}
                className="bg-white border border-[#ac511a]/15 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="w-12 h-12 bg-[#ac511a]/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#ac511a]" />
                </div>
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-lg md:text-xl font-serif font-bold text-[#ac511a] tracking-tight">
                    {item.name}
                  </h3>
                  <span className="shrink-0 text-sm font-bold text-[#ac511a] font-sans">
                    {item.price}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-[#262626] font-normal leading-relaxed mt-2 font-sans flex-1">
                  {item.description}
                </p>
                <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
                  <div className="flex gap-1.5">
                    {item.tag && (
                      <span className="bg-[#eccb57]/20 text-[#ac511a] border border-[#eccb57] text-[10px] font-bold px-2 py-0.5 rounded">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <a
                    href={WOWAPPS_ORDER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Order ${item.name} via Wowapps`}
                    onClick={() => trackMenuItemOrderClick(item.name, "Featured Favorites")}
                    className="min-h-[44px] inline-flex items-center gap-1.5 bg-[#ac511a] hover:bg-[#8e4215] text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition-all shadow-sm hover:shadow"
                  >
                    <span>Order Online via Wowapps</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Massive CTA */}
        <div className="mt-10 md:mt-14 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-[#ac511a] hover:bg-[#8e4215] text-white font-bold text-sm md:text-base uppercase tracking-wider px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            View Full Menu &amp; Dietary Options
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
