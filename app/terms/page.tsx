import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { PHONE_NUMBER_DISPLAY } from "@/app/config/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions | Red Door Pizza Buninyong",
  description:
    "Terms and conditions for using the Red Door Pizza website, ordering online, and dining at our Buninyong wood-fired pizzeria.",
};

type Section = {
  title: string;
  paragraphs?: React.ReactNode[];
  list?: string[];
};

const sections: Section[] = [
  {
    title: "1. Introduction",
    paragraphs: [
      <>
        These Terms &amp; Conditions govern your access to and use of the Red
        Door Pizza website (www.reddoorpizza.com.au). By browsing this site,
        placing an order through our online ordering system, or contacting us
        through any form on this website, you agree to be bound by these terms.
        If you do not agree with any part of these terms, please discontinue
        use of this website.
      </>,
    ],
  },
  {
    title: "2. Website Maintenance & Development",
    paragraphs: [
      <>
        This website was designed and developed, and is maintained by{" "}
        <a
          href="https://thestockit.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ac511a] font-medium hover:underline"
        >
          The Stockit
        </a>{" "}
        on behalf of Red Door Pizza. All operational website enquiries
        regarding development or technical maintenance should be directed to
        the developer, while enquiries regarding products, orders, and
        business operations remain with Red Door Pizza.
      </>,
    ],
  },
  {
    title: "3. Menu Items, Pricing & Availability",
    paragraphs: [
      <>
        We take great care to display our menu, pricing, and daily specials
        accurately. However, all menu items, prices, and availability are
        subject to change without notice. Seasonal ingredients and locally
        sourced produce may occasionally affect availability, and we reserve
        the right to substitute items where necessary.
      </>,
    ],
  },
  {
    title: "4. Online Orders",
    paragraphs: [
      <>
        Online orders are placed through our third-party ordering platform,
        WowApps. When you place an order, you agree to provide accurate and
        current information, including your name, contact number, and delivery
        or pickup details. Order confirmation is issued once your payment has
        been processed. If an item becomes unavailable after you place an
        order, we will contact you to arrange a suitable alternative or a
        refund of the affected item.
      </>,
    ],
  },
  {
    title: "5. Reservations & Functions",
    paragraphs: [
      <>
        Table bookings and function enquiries submitted through this website
        are requests only and are not confirmed until you receive confirmation
        from our team. For private functions and group events, a deposit may be
        required, and our functions team will confirm final arrangements with
        you directly.
      </>,
    ],
  },
  {
    title: "6. Intellectual Property",
    paragraphs: [
      <>
        All text, photography, logos, branding, graphics, and design on this
        website are the property of Red Door Pizza or used with permission, and
        are protected by applicable copyright and trademark laws. You may not
        reproduce, distribute, or use any material from this website without
        our prior written consent.
      </>,
    ],
  },
  {
    title: "7. Third-Party Links & Services",
    paragraphs: [
      <>
        This website contains links to third-party services, including our
        online ordering platform, social media pages, and mapping services.
        These links are provided for your convenience, and we are not
        responsible for the content, policies, or practices of any third-party
        websites.
      </>,
    ],
  },
  {
    title: "8. Limitation of Liability",
    paragraphs: [
      <>
        To the fullest extent permitted by law, Red Door Pizza shall not be
        liable for any indirect, incidental, or consequential loss arising from
        your use of this website or reliance on the information contained on
        it. Nothing in these terms excludes, restricts, or modifies any
        consumer guarantees under Australian Consumer Law.
      </>,
    ],
  },
  {
    title: "9. Governing Law",
    paragraphs: [
      <>
        These Terms &amp; Conditions are governed by the laws of Victoria,
        Australia. Any disputes arising in connection with this website or
        these terms shall be subject to the exclusive jurisdiction of the
        courts of Victoria.
      </>,
    ],
  },
  {
    title: "10. Changes to These Terms",
    paragraphs: [
      <>
        We may update these Terms &amp; Conditions from time to time. The most
        current version will always be published on this page, and continued
        use of the website constitutes acceptance of any changes.
      </>,
    ],
  },
  {
    title: "11. Contact Us",
    paragraphs: [
      <>
        If you have any questions about these Terms &amp; Conditions, please
        contact us at 401 Warrenheip St, Buninyong VIC 3357, call us on +61 3
        {PHONE_NUMBER_DISPLAY}, or visit our{" "}
        <Link href="/#contact" className="text-[#ac511a] font-medium hover:underline">
          contact page
        </Link>
        .
      </>,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#FAF8F5]">
        <section className="bg-[#18181B] py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-[#eccb57] text-xs font-semibold uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/10">
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 tracking-tight">
              Terms &amp; Conditions
            </h1>
            <p className="text-gray-400 text-sm mt-3">
              Last updated: August 2026
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 py-14 md:py-16 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-[#18181B] mb-3">
                {section.title}
              </h2>
              {section.paragraphs?.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-600 text-sm md:text-base leading-relaxed mb-3 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="list-disc list-inside text-gray-600 text-sm md:text-base leading-relaxed space-y-2 mt-2">
                  {section.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
