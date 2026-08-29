import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, HelpCircle } from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { guideSlugs, guidesData, type GuideSlug } from "@/app/config/guides";

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

  return (
    <>
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
