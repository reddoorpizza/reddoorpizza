import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import USPSection from "./components/USPSection";
import MenuSection from "./components/MenuSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FunctionsSection from "./components/FunctionsSection";
import FAQSection from "./components/FAQSection";
import GallerySection from "./components/GallerySection";
import OutdoorDiningSection from "./components/OutdoorDiningSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import MobileStickyNav from "./components/MobileStickyNav";
import FloatingOrderButton from "./components/FloatingOrderButton";
import Link from "next/link";
import { MapPin, Store, ArrowRight, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wood-Fired Pizza Near Ballarat | Red Door Pizza",
  description:
    "Authentic wood-fired pizza in Buninyong, just 12 minutes from Ballarat. Imported fior di latte, locally sourced meats, gluten-free options, and a family-friendly venue with kids corner.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Wood-Fired Pizza Near Ballarat | Red Door Pizza",
    description:
      "Authentic wood-fired pizza in Buninyong, just 12 minutes from Ballarat. Imported fior di latte, locally sourced meats, and family-friendly dining.",
    url: "https://www.reddoorpizza.com.au",
    siteName: "Red Door Pizza",
    type: "website",
    locale: "en_AU",
    images: [
      {
        url: "/Banner.jpg",
        width: 1200,
        height: 630,
        alt: "Red Door Pizza — Wood-Fired Pizza in Buninyong",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wood-Fired Pizza Near Ballarat | Red Door Pizza",
    description:
      "Authentic wood-fired pizza in Buninyong, just 12 minutes from Ballarat. Imported fior di latte and locally sourced ingredients.",
    images: ["/Banner.jpg"],
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Block - announcement + header float over this */}
      <div className="relative w-full m-0 p-0 border-none outline-none">
        <AnnouncementBar />
        <Header />
        <Hero />
      </div>

      <main>
        <USPSection />
        <OutdoorDiningSection />
        <MenuSection />
        <TestimonialsSection />

        {/* Stockists & Retail Banner */}
        <section className="bg-brand-terracotta text-white py-14 md:py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Store className="w-7 h-7 text-brand-gold" />
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight">
              Take Red Door Pizza Home
            </h2>
            <p className="mt-5 text-white/90 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Did you know our signature vacuum-sealed, wood-fired pizza bases
              are stocked at local IGAs across Beaufort, Creswick, and Elaine
              Farmgate?
            </p>
            <Link
              href="/stockists"
              className="mt-8 inline-flex items-center gap-2 bg-white text-brand-terracotta hover:bg-brand-gold hover:text-brand-charcoal font-bold text-sm md:text-base uppercase tracking-wider px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              View All Stockists &amp; Flavors
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Locations Hub */}
        <section className="bg-brand-offwhite py-16 md:py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-charcoal tracking-tight">
                Wood-Fired Pizza Across the Ballarat Region
              </h2>
              <p className="mt-3 text-brand-muted text-sm md:text-base max-w-xl mx-auto">
                Locally sourced, wood-fired, and served with pride — find Red
                Door Pizza near you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Buninyong */}
              <Link
                href="/locations/buninyong"
                className="group bg-white border border-brand-terracotta/15 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="w-12 h-12 bg-brand-terracotta/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-brand-terracotta" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-charcoal group-hover:text-brand-terracotta transition-colors">
                  Pizza in Buninyong
                </h3>
                <p className="text-[#262626] text-sm leading-relaxed mt-3">
                  Our home base — dine with 100 guests across a relaxed lounge,
                  kids&apos; corner, and outdoor beer garden.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-brand-terracotta text-sm font-semibold uppercase tracking-wider">
                  Explore Buninyong
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              {/* Card 2: Ballarat */}
              <Link
                href="/locations/ballarat"
                className="group bg-white border border-brand-terracotta/15 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="w-12 h-12 bg-brand-terracotta/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-brand-terracotta" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-charcoal group-hover:text-brand-terracotta transition-colors">
                  12 Minutes from Ballarat
                </h3>
                <p className="text-[#262626] text-sm leading-relaxed mt-3">
                  Escape the CBD for an 11km scenic drive to premium fior di
                  latte, wood-fired pizza, and free parking.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-brand-terracotta text-sm font-semibold uppercase tracking-wider">
                  Plan Your Visit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              {/* Card 3: Meredith */}
              <Link
                href="/locations/meredith"
                className="group bg-white border border-brand-terracotta/15 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="w-12 h-12 bg-brand-terracotta/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-brand-terracotta" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-charcoal group-hover:text-brand-terracotta transition-colors">
                  Takeaway Near Meredith
                </h3>
                <p className="text-[#262626] text-sm leading-relaxed mt-3">
                  Pre-order your wood-fired pizzas and homemade pastas via
                  Wowapps for a perfectly timed pickup.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-brand-terracotta text-sm font-semibold uppercase tracking-wider">
                  Pre-Order Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Guides / Discover More */}
        <section className="bg-white py-16 md:py-24 px-6 border-y border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-charcoal tracking-tight">
                Plan Your Visit
              </h2>
              <p className="mt-3 text-brand-muted text-sm md:text-base max-w-xl mx-auto">
                Helpful guides for families, groups, and dietary needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/guides/family-friendly-pizza-ballarat"
                className="group bg-brand-offwhite border border-brand-terracotta/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-brand-terracotta/10 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-5 h-5 text-brand-terracotta" />
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-charcoal group-hover:text-brand-terracotta transition-colors">
                  Family-Friendly Dining
                </h3>
                <p className="text-[#262626] text-sm leading-relaxed mt-2">
                  Kids corner, dedicated kids menu, and a relaxed courtyard — perfect for family dinners near Ballarat.
                </p>
              </Link>
              <Link
                href="/guides/gluten-free-pizza-ballarat"
                className="group bg-brand-offwhite border border-brand-terracotta/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-brand-terracotta/10 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-5 h-5 text-brand-terracotta" />
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-charcoal group-hover:text-brand-terracotta transition-colors">
                  Gluten-Free Options
                </h3>
                <p className="text-[#262626] text-sm leading-relaxed mt-2">
                  Premium gluten-free pizza bases and GF spaghetti bolognese — safe, delicious, and wood-fired.
                </p>
              </Link>
              <Link
                href="/guides/work-christmas-party-venues-buninyong"
                className="group bg-brand-offwhite border border-brand-terracotta/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-brand-terracotta/10 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-5 h-5 text-brand-terracotta" />
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-charcoal group-hover:text-brand-terracotta transition-colors">
                  Groups &amp; Functions
                </h3>
                <p className="text-[#262626] text-sm leading-relaxed mt-2">
                  Work break-ups, Christmas parties, and group bookings for up to 100 guests in our beer garden.
                </p>
              </Link>
            </div>
          </div>
        </section>

        <FAQSection />
        <GallerySection />
        <FunctionsSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileStickyNav />
      <FloatingOrderButton />
    </>
  );
}
