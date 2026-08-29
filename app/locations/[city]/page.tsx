import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  UtensilsCrossed,
  ShoppingBag,
  ChefHat,
  Users,
  HelpCircle,
} from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import MenuSection from "@/app/components/MenuSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import {
  citySlugs,
  locationData,
  type CitySlug,
} from "@/app/config/locations";
import {
  WOWAPPS_ORDER_URL,
  PHONE_NUMBER_DISPLAY,
  PHONE_NUMBER_TEL,
  OPENING_HOURS,
} from "@/app/config/constants";

export function generateStaticParams(): { city: string }[] {
  return citySlugs.map((city) => ({ city }));
}

type Props = {
  params: Promise<{ city: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const normalizedCity = city.toLowerCase() as CitySlug;
  const data = locationData[normalizedCity];

  if (!data) {
    return {
      title: "Pizza Location Not Found | Red Door Pizza",
      description:
        "Explore our locations across Buninyong, Ballarat, and Meredith for authentic wood-fired pizza, homemade pastas, and family-friendly dining.",
    };
  }

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: `/locations/${normalizedCity}`,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  const normalizedCity = city.toLowerCase() as CitySlug;
  const data = locationData[normalizedCity];

  if (!data) {
    // 404 Fallback UI
    return (
      <>
        <Header />
        <main className="bg-brand-offwhite">
          <section className="max-w-3xl mx-auto px-6 py-24 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-charcoal">
              Location not found
            </h1>
            <p className="mt-4 text-brand-muted">
              We couldn&apos;t find that location. Explore where to find us
              near Buninyong, Ballarat, and Meredith.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {citySlugs.map((slug) => (
                <Link
                  key={slug}
                  href={`/locations/${slug}`}
                  className="inline-flex items-center gap-2 bg-brand-terracotta text-white font-semibold px-5 py-2.5 rounded-full text-xs uppercase tracking-wider hover:bg-brand-terracotta-dark transition-colors"
                >
                  {locationData[slug].name}
                </Link>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  // --- STRUCTURED DATA BLOCK ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Red Door Pizza",
    image: "https://www.reddoorpizza.com.au/logo.png",
    url: `https://www.reddoorpizza.com.au/locations/${normalizedCity}`,
    telephone: "0353418235",
    priceRange: "$$",
    servesCuisine: ["Pizza", "Italian", "Gluten-Free", "Vegetarian"],
    menu: WOWAPPS_ORDER_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "401 Warrenheip St",
      addressLocality: data.schemaLocality,
      addressRegion: "VIC",
      postalCode: "3357",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -37.6534,
      longitude: 143.8821,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // High-value Menu Schema explicitly for AI Overviews
  const menuJsonLd = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "Red Door Pizza Menu",
    hasMenuItem: [
      {
        "@type": "MenuItem",
        name: "Gluten Free Spaghetti Bolognese",
        description:
          "House-made Beef & Pork Spaghetti Bolognese served with premium gluten-free pasta.",
        suitableForDiet: "https://schema.org/GlutenFreeDiet",
      },
      {
        "@type": "MenuItem",
        name: "Pumpkin Pizza",
        description:
          "Onion jam, spinach, parmesan, roasted marinated pumpkin, Meredith goat cheese & pine nuts.",
        suitableForDiet: "https://schema.org/VegetarianDiet",
      },
      {
        "@type": "MenuItem",
        name: "Lamb Ragu",
        description: "Slow-cooked lamb sourced from Buninyong Butcher.",
      },
    ],
  };

  return (
    <>
      {/* Injecting all schemas safely into the head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd) }}
      />
      <Header />
      <main>
        {/* 1. Hero Section */}
        <section className="bg-brand-charcoal text-white py-16 md:py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-brand-gold text-xs font-semibold uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/10">
              Red Door Pizza · {data.name}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mt-5 tracking-tight">
              {data.heading}
            </h1>
            <p className="mt-5 flex items-center justify-center gap-2 text-brand-gold text-sm md:text-base">
              <MapPin className="w-4 h-4 shrink-0" />
              {data.distanceHook}
            </p>
          </div>
        </section>
        {/* 2. Conversion (Frictionless Menu) */}
        <MenuSection />
        {/* 3. Core Location Details */}
        <section className="bg-brand-offwhite py-14 md:py-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Copy & Value Props */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-charcoal mb-4">
                  Experience Authentic Comfort Food Near {data.name}
                </h2>
                <p className="text-[#262626] leading-relaxed text-lg">
                  {data.bodyCopy}
                </p>
              </div>
              {/* Keyword-Targeted Semantic Blocks */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-brand-terracotta/10">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-brand-terracotta/10 rounded-full flex items-center justify-center mb-4">
                    <ChefHat className="w-6 h-6 text-brand-terracotta" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-brand-charcoal">
                    Locally Sourced &amp; Gluten Free Options
                  </h3>
                  <p className="text-[#262626] text-sm leading-relaxed">
                    {data.premiumHook}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="w-12 h-12 bg-brand-terracotta/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-brand-terracotta" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-brand-charcoal">
                    Family Friendly &amp; Event Bookings
                  </h3>
                  <p className="text-[#262626] text-sm leading-relaxed">
                    {data.familyEventsCopy}
                  </p>
                </div>
              </div>
            </div>
            {/* Right Column: CTA, Contact & Navigation */}
            <div className="lg:col-span-5 space-y-6 sticky top-24">
              <a
                href={WOWAPPS_ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pre-order wood fired pizza online"
                className="flex items-center justify-center gap-2 w-full bg-brand-terracotta hover:bg-brand-terracotta-dark text-white font-semibold py-4 px-6 rounded-xl transition-colors text-sm uppercase tracking-wider shadow-lg shadow-brand-terracotta/20"
              >
                <ShoppingBag className="w-5 h-5" />
                Pre-Order via Wowapps
              </a>
              <Link
                aria-label="View our pizza, pasta, and dessert menu"
                className="flex items-center justify-center gap-2 w-full bg-white hover:bg-gray-50 text-brand-charcoal font-semibold py-4 px-6 rounded-xl border border-brand-terracotta/20 transition-colors text-sm uppercase tracking-wider shadow-sm"
                href="/menu"
              >
                <UtensilsCrossed className="w-5 h-5" />
                View Our Full Menu
              </Link>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-brand-terracotta/10 space-y-6">
                <h3 className="font-serif text-xl font-bold text-brand-charcoal border-b border-gray-100 pb-4">
                  Visit Red Door Pizza
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-brand-terracotta" />
                    <address className="not-italic text-sm text-[#262626] leading-relaxed">
                      401 Warrenheip St<br />
                      Buninyong VIC 3357, Australia
                    </address>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 shrink-0 text-brand-terracotta" />
                    <a
                      href={PHONE_NUMBER_TEL}
                      className="text-sm font-medium text-brand-terracotta hover:underline"
                    >
                      {PHONE_NUMBER_DISPLAY}
                    </a>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 shrink-0 mt-0.5 text-brand-terracotta" />
                    <div className="text-sm text-[#262626] space-y-1">
                      {OPENING_HOURS.map((entry) => (
                        <div key={entry.days} className="flex flex-col">
                          <span className="font-semibold text-brand-charcoal">
                            {entry.days}:
                          </span>
                          <span>{entry.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Interlinking for SEO flow */}
              <div className="bg-brand-charcoal rounded-2xl p-6 text-white shadow-sm">
                <h3 className="font-serif font-bold text-white mb-4">
                  Explore nearby locations
                </h3>
                <ul className="space-y-2">
                  {citySlugs.map((slug) => (
                    <li key={slug}>
                      <Link
                        href={`/locations/${slug}`}
                        className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                          slug === normalizedCity
                            ? "bg-brand-terracotta text-white"
                            : "text-gray-300 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        {locationData[slug].name}
                        {slug === normalizedCity ? (
                          <span className="text-[10px] uppercase tracking-wider font-bold opacity-80">
                            You&apos;re here
                          </span>
                        ) : (
                          <ArrowRight className="w-4 h-4 opacity-70" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* 3. Social Proof (Trust/EEAT) */}
        <TestimonialsSection />
        {/* 4. SEO FAQs (Semantic Content) */}
        <section className="bg-white py-16 md:py-24 px-6 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <HelpCircle className="w-8 h-8 text-brand-terracotta mx-auto mb-4" />
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-charcoal">
                Frequently Asked Questions
              </h2>
              <p className="text-brand-muted mt-2 text-sm">
                Everything you need to know about dining at Red Door Pizza near{" "}
                {data.name}.
              </p>
            </div>

            <dl className="space-y-6">
              {data.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-100"
                >
                  <dt className="font-serif font-bold text-brand-charcoal text-lg mb-2">
                    {faq.question}
                  </dt>
                  <dd className="text-[#262626] text-sm leading-relaxed">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
