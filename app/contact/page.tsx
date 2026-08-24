import type { Metadata } from "next";
import { Phone, MapPin, Clock } from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import EnquiryForm from "./EnquiryForm";
import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_TEL, OPENING_HOURS } from "@/app/config/constants";

export const metadata: Metadata = {
  title: "Contact Us | Red Door Pizza Buninyong",
  description:
    "Get in touch with Red Door Pizza in Buninyong. Call us, find us at 401 Warrenheip St, or send a booking, function, or general enquiry online.",
};

const MAPS_URL =
  "https://maps.google.com/?q=401+Warrenheip+St+Buninyong+VIC+3357";

const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=401+Warrenheip+St+Buninyong+VIC+3357&output=embed";

const infoCards = [
  {
    icon: Phone,
    label: "Call Us",
    lines: [PHONE_NUMBER_DISPLAY],
    href: PHONE_NUMBER_TEL,
    external: false,
  },
  {
    icon: MapPin,
    label: "Visit Us",
    lines: ["401 Warrenheip St", "Buninyong VIC 3357, Australia"],
    href: MAPS_URL,
    external: true,
  },
  {
    icon: Clock,
    label: "Opening Hours",
    lines: OPENING_HOURS.map((e) => `${e.days}: ${e.hours}`),
    href: undefined,
    external: false,
  },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/reddoor_pizza/",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1EsfTmXM4o/?mibextid=wwXIfr",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-[#FAF8F5]">
        <section className="bg-[#18181B] py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-[#eccb57] text-xs font-semibold uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/10">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 tracking-tight">
              Contact Us
            </h1>
            <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto leading-relaxed">
              Bookings, private functions, feedback, or just a question about
              our wood-fired pizza — we&apos;d love to hear from you.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-14 md:py-16 grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2 space-y-4">
            {infoCards.map((card) => {
              const content = (
                <>
                  <span className="w-11 h-11 rounded-full bg-[#ac511a]/10 border border-[#ac511a]/30 flex items-center justify-center shrink-0">
                    <card.icon className="w-5 h-5 text-[#ac511a]" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-widest text-[#ac511a] mb-1">
                      {card.label}
                    </span>
                    <span className="block text-sm text-[#262626] leading-relaxed">
                      {card.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </span>
                  </span>
                </>
              );

              return card.href ? (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-200/80 hover:border-[#ac511a]/40 hover:shadow-md transition-all"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={card.label}
                  className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-200/80"
                >
                  {content}
                </div>
              );
            })}

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200/80 flex items-center gap-4">
              <span className="w-11 h-11 rounded-full bg-[#ac511a]/10 border border-[#ac511a]/30 flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-[#ac511a]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d={socials[0].path} />
                </svg>
              </span>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-widest text-[#ac511a] mb-1">
                  Follow Us
                </span>
                <span className="flex gap-4">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="inline-flex items-center gap-1.5 text-sm text-[#262626] hover:text-[#ac511a] transition-colors"
                    >
                      {social.label}
                    </a>
                  ))}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <EnquiryForm />
          </div>
        </div>

        <section className="border-t border-gray-200/80">
          <iframe
            src={MAPS_EMBED_URL}
            title="Red Door Pizza location map — 401 Warrenheip St, Buninyong VIC 3357"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[380px] md:h-[420px] block"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
