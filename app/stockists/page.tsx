import type { Metadata } from "next";
import Link from "next/link";
import { Store, MapPin, Package, ShoppingBag, ArrowRight } from "lucide-react";
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

const flavors = [
  { name: "Garlic Starter", desc: "Perfectly seasoned with garlic and herbs." },
  { name: "Margherita", desc: "Classic tomato, mozzarella, and fresh basil." },
  { name: "Pumpkin", desc: "Roasted pumpkin, spinach, and feta." },
  { name: "Hot Salami", desc: "Spicy salami for a classic kick." },
  { name: "Meatlovers", desc: "Packed with premium, locally sourced meats." },
  { name: "Lamb", desc: "Slow-cooked lamb with robust flavors." },
];

const stockists = [
  { name: "Buninyong FoodWorks", location: "Buninyong, VIC", type: "Supermarket" },
  { name: "Beaufort IGA", location: "Beaufort, VIC", type: "Supermarket" },
  { name: "Creswick IGA", location: "Creswick, VIC", type: "Supermarket" },
  { name: "Elaine Farmgate", location: "Elaine, VIC", type: "Farmgate Shop" },
];

export default function StockistsPage() {
  // Product Schema for Google Rich Snippets
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Red Door Pizza Vacuum-Sealed Wood-Fired Range",
    description:
      "Authentic, vacuum-sealed wood-fired pizza bases. Pre-cooked in our traditional oven in Buninyong.",
    brand: {
      "@type": "Brand",
      name: "Red Door Pizza",
    },
    hasVariant: flavors.map((flavor) => ({
      "@type": "ProductModel",
      name: `Red Door Pizza - ${flavor.name}`,
    })),
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "AUD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Red Door Pizza",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Header/>

      <main className="bg-brand-offwhite min-h-screen">
        {/* Hero Section */}
        <section className="bg-brand-charcoal text-white py-20 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block text-brand-gold text-xs font-semibold uppercase tracking-widest bg-white/5 px-4 py-1.5 rounded-full border border-white/10 mb-6">
              Retail & Bake-at-Home
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Enjoy Red Door Pizza at Home
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Our signature vacuum-sealed pizzas are pre-cooked in our traditional wood-fire oven in Buninyong, locking in that authentic flavor for you to bake fresh at home.
            </p>
          </div>
        </section>

        {/* The Range */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Package className="w-10 h-10 text-brand-terracotta mx-auto mb-4"/>
              <h2 className="font-serif text-3xl font-bold text-brand-charcoal">Our Vacuum-Sealed Range</h2>
              <p className="text-[#262626] mt-3">Available at select local supermarkets across the region.</p>
            </div>
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {flavors.map((flavor) => (
                <article key={flavor.name} className="bg-white p-6 rounded-2xl shadow-sm border border-brand-terracotta/10 flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 bg-brand-terracotta/10 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5 text-brand-terracotta"/>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-brand-charcoal">{flavor.name}</h3>
                    <p className="text-sm text-[#262626] mt-1">{flavor.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Local Entities / Where to Buy */}
        <section className="bg-white py-20 px-6 border-y border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Store className="w-10 h-10 text-brand-terracotta mx-auto mb-4"/>
              <h2 className="font-serif text-3xl font-bold text-brand-charcoal">Where to Buy</h2>
              <p className="text-[#262626] mt-3">Find our retail range at these fantastic local stockists.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stockists.map((stockist) => (
                <div key={stockist.name} className="flex items-center justify-between p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-brand-terracotta/70"/>
                    <div>
                      <h3 className="font-bold text-brand-charcoal">{stockist.name}</h3>
                      <p className="text-xs text-brand-muted uppercase tracking-wider">{stockist.type}</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-brand-terracotta bg-brand-terracotta/10 px-3 py-1 rounded-full">
                    {stockist.location}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* B2B Wholesale CTA */}
        <section className="py-24 px-6 bg-brand-charcoal text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-6">Want to stock Red Door Pizza?</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              We are actively partnering with local supermarkets, delis, and farmgates across the Ballarat and regional Victoria area. Elevate your retail offerings with authentic, locally-made wood-fired pizza.
            </p>
            <Link className="inline-flex items-center justify-center gap-2 bg-brand-terracotta hover:bg-brand-terracotta-dark text-white font-semibold py-4 px-8 rounded-xl transition-colors text-sm uppercase tracking-wider shadow-lg shadow-brand-terracotta/20" href="/contact">
              Become a Stockist <ArrowRight className="w-4 h-4"/>
            </Link>
          </div>
        </section>
      </main>

      <Footer/>
    </>
  );
}
