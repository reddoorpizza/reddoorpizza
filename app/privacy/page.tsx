import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { PHONE_NUMBER_DISPLAY, ADDRESS } from "@/app/config/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Red Door Pizza collects, uses, and protects your personal information when you use our website, order online, or contact us.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Red Door Pizza",
    description:
      "How Red Door Pizza collects, uses, and protects your personal information when you use our website, order online, or contact us.",
    url: "https://www.reddoorpizza.com.au/privacy",
    siteName: "Red Door Pizza",
    type: "website",
    locale: "en_AU",
  },
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
        Red Door Pizza respects your privacy and is committed to protecting
        your personal information. This Privacy Policy explains how we
        collect, use, store, and disclose information when you visit our
        website (www.reddoorpizza.com.au), place an online order, or contact
        us. By using this website, you consent to the practices described in
        this policy.
      </>,
    ],
  },
  {
    title: "2. Website Ownership & Maintenance",
    paragraphs: [
      <>
        This website is designed, developed, and maintained by{" "}
        <a
          href="https://thestockit.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ac511a] font-medium hover:underline"
        >
          The Stockit
        </a>
        , which supports the technical operation of the site on our behalf.
        Any personal information collected through this website is handled in
        accordance with this policy by Red Door Pizza.
      </>,
    ],
  },
  {
    title: "3. Information We Collect",
    list: [
      "Contact details you provide voluntarily, such as your name, email address, and phone number when submitting a booking, function enquiry, or general enquiry.",
      "Order details processed through our third-party ordering platform, including items purchased, delivery address, and payment confirmation.",
      "General, non-identifying usage data such as pages visited, browser type, and device type, collected to help us improve the website.",
    ],
  },
  {
    title: "4. How We Use Your Information",
    list: [
      "To respond to your enquiries, bookings, and function requests.",
      "To process and fulfil online orders for pickup or delivery.",
      "To improve our website, menu, and customer service.",
      "To comply with legal and regulatory obligations where required.",
    ],
  },
  {
    title: "5. Third-Party Services",
    paragraphs: [
      <>
        We rely on trusted third parties to operate parts of our business,
        including WowApps for online ordering, Google Maps for location
        services, and social media platforms such as Instagram and Facebook.
        These providers may collect information in accordance with their own
        privacy policies. We encourage you to review those policies before
        using these services. We do not sell or rent your personal information
        to any third party.
      </>,
    ],
  },
  {
    title: "6. Cookies & Analytics",
    paragraphs: [
      <>
        Our website may use cookies and similar technologies to enhance your
        browsing experience and understand how the site is used. You can
        adjust your browser settings at any time to refuse cookies; however,
        some features of the website may not function correctly as a result.
      </>,
    ],
  },
  {
    title: "7. Data Storage & Security",
    paragraphs: [
      <>
        We take reasonable steps to protect the personal information we hold
        from misuse, interference, loss, and unauthorised access or disclosure.
        Information submitted through this website is transmitted securely and
        stored only for as long as necessary to fulfil the purposes outlined
        in this policy.
      </>,
    ],
  },
  {
    title: "8. Your Rights & Access",
    paragraphs: [
      <>
        Under the Australian Privacy Principles, you have the right to request
        access to the personal information we hold about you, and to request
        corrections if it is inaccurate, incomplete, or out of date. To make a
        request, please contact us using the details below, and we will
        respond within a reasonable timeframe.
      </>,
    ],
  },
  {
    title: "9. Changes to This Policy",
    paragraphs: [
      <>
        We may update this Privacy Policy from time to time to reflect changes
        in our practices or legal requirements. The latest version will always
        be available on this page, so please check back periodically.
      </>,
    ],
  },
  {
    title: "10. Contact Us",
    paragraphs: [
      <>
        If you have any questions about this Privacy Policy or how we handle
        your personal information, please contact us at {ADDRESS.display}, call
        us on {PHONE_NUMBER_DISPLAY}, or visit our{" "}
        <Link href="/contact" className="text-[#ac511a] font-medium hover:underline">
          contact page
        </Link>
        .
      </>,
    ],
  },
];

export default function PrivacyPage() {
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
              Privacy Policy
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
