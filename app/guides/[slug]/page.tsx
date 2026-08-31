import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, HelpCircle, MapPin } from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";
import { guideSlugs, guidesData, type GuideSlug } from "@/app/config/guides";
import { locationData, type CitySlug } from "@/app/config/locations";

export function generateStaticParams(): { slug: string }[] {
  return guideSlugs.map((slug) => ({
    slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const normalizedSlug = slug.toLowerCase() as GuideSlug;
  const data = guidesData[normalizedSlug];

  if (!data) return {};

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: `/guides/${normalizedSlug}`,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://www.reddoorpizza.com.au/guides/${normalizedSlug}`,
      siteName: "Red Door Pizza",
      type: "article",
      locale: "en_AU",
      images: [
        {
          url: "/Banner.jpg",
          width: 1200,
          height: 630,
          alt: `Red Door Pizza — ${data.heading}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: ["/Banner.jpg"],
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const normalizedSlug = slug.toLowerCase() as GuideSlug;
  const data = guidesData[normalizedSlug];

  if (!data) notFound();

  // JSON-LD Schemas
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.heading,
    description: data.description,
    author: {
      "@type": "Organization",
      name: "Red Door Pizza",
    },
    publisher: {
      "@type": "Organization",
      name: "Red Door Pizza",
      logo: {
        "@type": "ImageObject",
        url: "https://www.reddoorpizza.com.au/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.reddoorpizza.com.au/guides/${normalizedSlug}`,
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

  const isExternalCTA = data.ctaLink.startsWith("http");

  const guideLocationMap: Partial<Record<GuideSlug, CitySlug>> = {
    "family-friendly-pizza-ballarat": "ballarat",
    "work-christmas-party-venues-buninyong": "buninyong",
    "gluten-free-pizza-ballarat": "ballarat",
  };
  const relatedCity = guideLocationMap[normalizedSlug];

  const guideCrossLinks: Partial<Record<GuideSlug, GuideSlug[]>> = {
    "family-friendly-pizza-ballarat": ["gluten-free-pizza-ballarat", "work-christmas-party-venues-buninyong"],
    "work-christmas-party-venues-buninyong": ["family-friendly-pizza-ballarat"],
    "gluten-free-pizza-ballarat": ["family-friendly-pizza-ballarat"],
  };
  const relatedGuides = guideCrossLinks[normalizedSlug] ?? [];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Guides", url: "/guides/family-friendly-pizza-ballarat" },
          { name: data.title, url: `/guides/${normalizedSlug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header/>

      <main className="bg-brand-offwhite min-h-screen pb-20">
        {/* Hero Section */}
        <section className="bg-brand-charcoal text-white py-20 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block text-brand-gold text-xs font-semibold uppercase tracking-widest bg-white/5 px-4 py-1.5 rounded-full border border-white/10 mb-6">
              Local Guide
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-6">
              {data.heading}
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              {data.subheading}
            </p>
          </div>
        </section>

        {/* Article Content */}
        <section className="px-6 py-16 -mt-8">
          <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-brand-terracotta/10">
            <article className="prose prose-lg prose-stone max-w-none">
              {data.sections.map((section, index) => (
                <div key={index} className="mb-10 last:mb-0">
                  <h2 className="font-serif text-2xl font-bold text-brand-charcoal mb-4">
                    {section.title}
                  </h2>
                  <p className="text-[#262626] leading-relaxed text-lg">
                    {section.body}
                  </p>
                </div>
              ))}
            </article>
            <div className="mt-8 pt-8 border-t border-gray-100 text-center">
              {isExternalCTA ? (
                <a
                  href={data.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-brand-terracotta hover:bg-brand-terracotta-dark text-white font-semibold py-4 px-8 rounded-xl transition-colors text-sm uppercase tracking-wider shadow-lg shadow-brand-terracotta/20"
                >
                  {data.ctaText} <ArrowRight className="w-4 h-4"/>
                </a>
              ) : (
                <Link
                  className="inline-flex items-center justify-center gap-2 bg-brand-terracotta hover:bg-brand-terracotta-dark text-white font-semibold py-4 px-8 rounded-xl transition-colors text-sm uppercase tracking-wider shadow-lg shadow-brand-terracotta/20"
                  href={data.ctaLink}
                >
                  {data.ctaText} <ArrowRight className="w-4 h-4"/>
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Related Location */}
        {relatedCity && (
          <section className="max-w-3xl mx-auto px-6 mt-8">
            <Link
              href={`/locations/${relatedCity}`}
              className="flex items-center gap-3 bg-white p-5 rounded-xl border border-brand-terracotta/10 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-10 h-10 bg-brand-terracotta/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-brand-terracotta" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-brand-muted uppercase tracking-wider font-semibold">
                  Visit us at
                </p>
                <p className="font-serif font-bold text-brand-charcoal group-hover:text-brand-terracotta transition-colors">
                  {locationData[relatedCity].name}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-brand-muted group-hover:text-brand-terracotta transition-colors" />
            </Link>
          </section>
        )}

        {/* Related Guides */}
        {relatedGuides.length > 0 && (
          <section className="max-w-3xl mx-auto px-6 mt-6">
            <h3 className="text-sm font-semibold text-brand-muted uppercase tracking-wider mb-3">
              You might also find helpful
            </h3>
            <div className="space-y-3">
              {relatedGuides.map((guideSlug) => (
                <Link
                  key={guideSlug}
                  href={`/guides/${guideSlug}`}
                  className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <span className="font-serif font-bold text-brand-charcoal group-hover:text-brand-terracotta transition-colors text-sm">
                    {guidesData[guideSlug].title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-brand-muted group-hover:text-brand-terracotta" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto px-6 mt-8">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-6 h-6 text-brand-terracotta"/>
            <h2 className="font-serif text-2xl font-bold text-brand-charcoal">
              Common Questions
            </h2>
          </div>
          <dl className="space-y-4">
            {data.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
              >
                <dt className="font-serif font-bold text-brand-charcoal mb-2">
                  {faq.question}
                </dt>
                <dd className="text-sm text-[#262626] leading-relaxed">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </main>

      <Footer/>
    </>
  );
}
