"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { OPENING_HOURS, ADDRESS } from "@/app/config/constants";

const faqs = [
  {
    question: "What makes Red Door Pizza different?",
    answer: "Our pizzas are cooked in a traditional wood-fire oven at 400°C using long-fermentation artisan dough, imported Italian mozzarella, and San Marzano tomato base. We source slow-cooked meats from the Buninyong Butcher and fresh produce from Peaches Fruit Market."
  },
  {
    question: "Do you have outdoor seating or a beer garden?",
    answer: "Yes. Our outdoor courtyard has festoon lighting, rustic wooden benches, and garden planters. It's open for weekend dining and group events."
  },
  {
    question: "Is Red Door Pizza family-friendly?",
    answer: "We have a dedicated kids corner with a play kitchen, books, and colouring pages. Our Kids & Teens menu has 10-inch pizzas and chicken nuggets."
  },
  {
    question: "What are your opening hours?",
    answer: `We are open ${OPENING_HOURS.map((e) => `${e.days} ${e.hours}`).join(", ")}. Our courtyard and indoor seating are available for both dine-in and takeaway.`
  },
  {
    question: "Do you offer lunch specials?",
    answer: "Yes. Our $23 All Pizzas Lunch Special runs Friday, Saturday, and Sunday from 12pm to 3pm."
  },
  {
    question: "How do I order online?",
    answer: "Click any 'Order Online' button on our website to order through WowApps for pickup."
  },
  {
    question: "Do you have vegetarian or dietary options?",
    answer: "We have vegetarian pizzas (Pumpkin & Beet, Margherita, Mushroom, Potato), gluten-free bases, and gluten-free pasta."
  },
  {
    question: "Can we host private events or group functions?",
    answer: "Yes. Our venue holds up to 100 guests across indoor and outdoor spaces. We host work break-ups, Christmas parties, and private events. Enquire via our contact page."
  },
  {
    question: "Where are you located?",
    answer: `${ADDRESS.display}. We are 11km (12 minutes) from the Ballarat CBD.`
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-[#FAF8F5] border-t border-gray-200/80">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <span className="text-[#ac511a] text-xs font-semibold uppercase tracking-widest bg-[#ac511a]/10 px-3 py-1 rounded-full border border-[#ac511a]/20">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#18181B] mt-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Everything you need to know about our wood-fired pizzas, outdoor garden, and dining experience.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                className="w-full text-left p-4 md:p-5 flex items-center justify-between gap-4 hover:bg-gray-50/80 transition-colors"
              >
                <span className="font-semibold text-[#18181B] text-sm md:text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-[#ac511a] transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 pb-5 md:px-5 md:pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
