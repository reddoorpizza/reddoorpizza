"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { WOWAPPS_ORDER_URL } from "@/app/config/constants";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#1A1A1A] m-0 p-0 border-none outline-none">
      {/* ── Background Banner Image ── */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/Banner.jpg"
          alt="Red Door Pizza Storefront"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* ── Dark Gradient Scrim Overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/80 z-10" />

      {/* ── Hero Content ── */}
      <div className="relative z-20 flex items-center justify-center w-full px-4 py-10 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Title */}
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white tracking-wide mb-3 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            RED DOOR PIZZA
          </h1>

          {/* Subtitle */}
          <p className="text-xs md:text-sm tracking-widest uppercase font-medium text-[#eccb57] mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Authentic Wood-Fired Pizza in Buninyong
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/contact"
                className="block bg-white text-black font-semibold px-8 py-3 rounded-full text-xs uppercase tracking-wider hover:bg-[#eccb57] transition-colors shadow-lg"
              >
                Book a Table
              </Link>
            </motion.div>
            <motion.a
              href={WOWAPPS_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#ac511a] text-white font-semibold px-8 py-3 rounded-full text-xs uppercase tracking-wider hover:bg-[#c05c1e] transition-colors shadow-lg"
            >
              Order Take Away
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
