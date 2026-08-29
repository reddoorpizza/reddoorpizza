"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { WOWAPPS_ORDER_URL, PHONE_NUMBER_TEL } from "@/app/config/constants";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Menu", href: "/menu" },
  { label: "Guides", href: "/guides/family-friendly-pizza-ballarat" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ─── Desktop Header ─── */}
      <header
        className={`hidden md:block sticky top-0 z-50 bg-[#18181B]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300 m-0 p-0 border-none outline-none ${
          scrolled
            ? "shadow-sm"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="grid grid-cols-3 items-center">
            {/* ── LEFT: Navigation Links ── */}
            <nav className="flex items-center gap-1 justify-start">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 text-xs uppercase tracking-widest text-white/80 hover:text-[#eccb57] transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* ── CENTER: Brand Logo ── */}
            <div className="flex items-center justify-center">
              <Link
                href="/"
                className="flex-shrink-0 block h-16 w-16 md:h-20 md:w-20"
              >
                <Image
                  src="/logo.png"
                  alt="Red Door Pizza"
                  width={80}
                  height={80}
                  className="h-16 w-16 md:h-20 md:w-20 object-contain rounded-md shadow-md transition-transform duration-300 hover:scale-105"
                  priority
                />
              </Link>
            </div>

            {/* ── RIGHT: Action CTAs ── */}
            <div className="flex items-center gap-3 justify-end">
              <Link
                href="/contact"
                className="text-xs uppercase tracking-wider text-white hover:text-[#eccb57] px-4 py-2 font-medium transition-colors"
              >
                Book Table
              </Link>
              <a
                href={WOWAPPS_ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ac511a] hover:bg-[#c05c1e] text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md transition-all"
              >
                Order Online
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Mobile Header ─── */}
      <header
        className={`md:hidden h-16 bg-[#18181B] text-white sticky top-0 z-50 transition-all duration-300 m-0 p-0 border-none outline-none ${
          scrolled
            ? "shadow-sm"
            : ""
        }`}
      >
        <div className="flex items-center justify-between px-4 h-16">
          {/* Left: Brand Logo */}
          <Link
            href="/"
            className="flex-shrink-0 block h-10 w-10"
          >
            <Image
              src="/logo.png"
              alt="Red Door Pizza"
              width={40}
              height={40}
              className="h-10 w-10 object-contain rounded-md shadow-md"
              priority
            />
          </Link>

          {/* Right: Phone + Hamburger */}
          <div className="flex items-center gap-3">
            {/* Phone Call Button */}
              <a
                href={PHONE_NUMBER_TEL}
                className="w-10 h-10 bg-[#ac511a] rounded-full flex items-center justify-center text-white hover:bg-[#c05c1e] transition-colors"
                aria-label="Call us"
              >
              <Phone className="w-4 h-4" />
            </a>

            {/* Hamburger Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-white hover:text-[#eccb57] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-black/60 backdrop-blur-md border-t border-white/10"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-xs tracking-widest uppercase text-white/80 hover:text-[#eccb57] rounded-lg transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-3 space-y-2 border-t border-white/10 mt-2">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="block text-center px-4 py-3 text-xs tracking-widest uppercase font-semibold border border-white/30 text-white rounded-full hover:bg-white hover:text-[#1A1A1A] transition-all"
                  >
                    Book a Table
                  </Link>
                  <a
                    href={WOWAPPS_ORDER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center px-4 py-3 text-xs tracking-widest uppercase font-semibold bg-[#ac511a] text-white rounded-full hover:bg-[#c05c1e] transition-colors"
                  >
                    Order Online
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
