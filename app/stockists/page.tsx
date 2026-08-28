import type { Metadata } from "next";
import Link from "next/link";
import {
  Pizza,
  Flame,
  Store,
  Package,
  MapPin,
  Building2,
  ArrowRight,
} from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Wood-Fired Pizza Stockists | Beaufort, Creswick & Elaine | Red Door Pizza",
  description:
    "Take home our authentic, vacuum-sealed wood-fired pizzas. Pre-cooked in our Buninyong oven and stocked at local IGAs in Beaufort, Creswick, and Elaine Farmgate.",
  alternates: {
    canonical: "/stockists",
  },
};

const range = [
  {
    name: "Garlic Starter",
    description: "Wood-fired garlic pizza with oregano & parmesan.",
  },
  {
    name: "Margherita",
    description: "Tomato sauce, mozzarella & fresh basil.",
  },
  {
    name: "Pumpkin",
    description: "Roasted pumpkin, onion jam & local cheese.",
  },
  {
    name: "Hot Salami",
    description: "Mozzarella, hot salami, olives & chilli.",
  },
  {
    name: "Meatlovers",
    description: "Salami, ham, Italian sausage & slow-cooked pork.",
  },
  {
    name: "Lamb",
    description: "Slow-cooked shredded lamb with rosemary & onion jam.",
  },
];

const stockists = [
  {
    name: "Buninyong FoodWorks",
    town: "Buninyong",
    detail: "Your local stockist in the heart of Buninyong.",
  },
  {
    name: "Beaufort IGA",
    town: "Beaufort",
    detail: "Grab our pizzas on your way through the Grampians region.",
  },
  {
    name: "Creswick IGA",
    town: "Creswick",
    detail: "Pick up a wood-fired favourite in historic Creswick.",
  },
  {
    name: "Elaine Farmgate",
    town: "Elaine",
    detail: "Fresh stock available at the Farmgate in Elaine.",
  },
];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Red Door Pizza Vacuum-Sealed Wood-Fired Range",
  image: "https://www.reddoorpizza.com.au/logo.png",
  description:
    "Premium vacuum-sealed wood-fired pizzas with bases pre-cooked in our traditional wood-fire oven in Buninyong. Available flavours include Garlic Starter, Margherita, Pumpkin, Hot Salami, Meatlovers, and Lamb.",
  brand: {
    "@type": "Brand",
    name: "Red Door Pizza",
  },
  category: "Frozen Pizza / Take-Home Wood-Fired Pizza",
  offers: {
    "@type": "AggregateOffer",
    availability: "https://schema.org/InStock",
    priceCurrency: "AUD",
    offerCount: "6",
  },
};

export default function StockistsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-brand-charcoal text-white py-16 md:py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-brand-gold text-xs font-semibold uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/10">
              Red Door Pizza · Take Home Range
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mt-5 tracking-tight">
              Enjoy Red Door Pizza at Home
            </h1>
            <p className="mt-5 text-brand-muted max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Take home our premium, vacuum-sealed wood-fired pizzas. Every
              base is pre-cooked in our traditional wood-fire oven in
              Buninyong, so all you need to do is finish it in your own oven
              for that authentic Red Door taste, anytime.
            </p>
            <p className="mt-4 flex items-center justify-center gap-2 text-brand-gold text-sm">
              <Flame className="w-4 h-4 shrink-0" />
              Pre-cooked in our wood-fire oven · Vacuum-sealed for freshness
            </p>
          </div>
        </section>

        {/* The Range Section */}
        <section className="bg-brand-offwhite py-14 md:py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-charcoal tracking-tight">
                The Range
              </h2>
              <p className="mt-3 text-brand-muted text-sm md:text-base max-w-xl mx-auto">
                Six of our most-loved wood-fired flavours — ready to take home
                and enjoy.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {range.map((flavor) => (
                <article
                  key={flavor.name}
                  className="bg-white border border-brand-terracotta/15 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start"
                >
                  <div className="w-12 h-12 bg-brand-terracotta/10 rounded-full flex items-center justify-center mb-4">
                    <Pizza className="w-6 h-6 text-brand-terracotta" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-brand-charcoal">
                    {flavor.name}
                  </h3>
                  <p className="text-[#262626] text-sm leading-relaxed mt-2">
                    {flavor.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Where to Buy Section */}
        <section className="bg-white py-14 md:py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-charcoal tracking-tight">
                Where to Buy
              </h2>
              <p className="mt-3 text-brand-muted text-sm md:text-base max-w-xl mx-auto">
                Find our vacuum-sealed wood-fired pizzas at these stockists
                across the region.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stockists.map((stockist) => (
                <article
                  key={stockist.name}
                  className="bg-brand-offwhite border border-brand-terracotta/15 rounded-2xl p-6 shadow-sm flex flex-col"
                >
                  <div className="w-12 h-12 bg-brand-terracotta/10 rounded-full flex items-center justify-center mb-4">
                    <Store className="w-6 h-6 text-brand-terracotta" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-brand-charcoal">
                    {stockist.name}
                  </h3>
                  <strong className="mt-1 flex items-center gap-1.5 text-brand-terracotta text-sm font-semibold uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    {stockist.town}
                  </strong>
                  <p className="text-[#262626] text-sm leading-relaxed mt-3">
                    {stockist.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* B2B Wholesale CTA Section */}
        <section className="bg-brand-charcoal text-white py-16 md:py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-14 h-14 bg-brand-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-7 h-7 text-brand-gold" />
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight">
              Want to stock Red Door Pizza in your store?
            </h2>
            <p className="mt-5 text-brand-muted max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              We love partnering with local supermarkets and delis across the
              Ballarat region. Stock our popular vacuum-sealed, wood-fired
              range and bring authentic Buninyong flavour to your customers.
              Get in touch to discuss wholesale pricing and delivery.
            </p>
            <Link
              href="/contact"
              aria-label="Contact Red Door Pizza about stocking our range"
              className="mt-8 inline-flex items-center gap-2 bg-brand-terracotta hover:bg-brand-terracotta-dark text-white font-semibold py-4 px-8 rounded-xl transition-colors text-sm uppercase tracking-wider shadow-lg shadow-brand-terracotta/20"
            >
              <Package className="w-5 h-5" />
              Enquire About Wholesale
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
