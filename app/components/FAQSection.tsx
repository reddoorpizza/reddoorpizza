"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Why is Red Door Pizza considered Buninyong's premium wood-fired pizza?",
    answer: "We focus on uncompromised quality: long-fermentation artisan dough, high-grade Italian mozzarella, imported San Marzano tomato base, and fresh local produce cooked at 400°C in our wood-fired oven. Every pizza delivers an authentic crisp crust and rich flavor that cheap conveyor-belt pizzas cannot match."
  },
  {
    question: "Do you have outdoor seating or a beer garden?",
    answer: "Yes! We feature Buninyong's premier open-air courtyard beer garden complete with cozy festoon lighting, rustic wooden bench tables, and garden planters. It's the perfect setting for relaxed weekend dining under the stars."
  },
  {
    question: "Is Red Door Pizza family and kid-friendly?",
    answer: "Absolutely. Our spacious outdoor garden area provides a safe, relaxed, and welcoming environment for families with kids. We also offer dedicated Kids/Teen menu options suited for younger tastes."
  },
  {
    question: "What are your trading hours for dine-in and takeaway?",
    answer: "We are open Friday through Sunday until 9:00 PM. Our outdoor courtyard and indoor seating cater to both dine-in guests and quick takeaway pickups."
  },
  {
    question: "Do you offer lunch specials on weekends?",
    answer: "Yes! We run our popular $23 All Pizzas Lunch Special every Friday, Saturday, and Sunday from 12:00 PM to 3:00 PM."
  },
  {
    question: "How do I order online for pickup or delivery?",
    answer: "You can easily place your order online directly through our WowApps ordering system by clicking any 'Order Online' button on our website for fast and direct kitchen submission."
  },
  {
    question: "Do you offer vegetarian, vegan, or dietary options?",
    answer: "Yes, we cater to various dietary preferences including popular vegetarian pizzas like our Pumpkin & Beet Pizza and Margherita, as well as customizable toppings upon request."
  },
  {
    question: "Can we host private events, birthdays, or group functions?",
    answer: "Yes! Our unique heritage venue and outdoor garden space make an ideal backdrop for private functions, birthdays, and group gatherings. You can fill out our website Event Inquiry form to check availability."
  },
  {
    question: "Where are you located in Buninyong?",
    answer: "We are located at 401 Warrenheip St, Buninyong VIC 3357, right in the heart of the historic township."
  },
  {
    question: "Do I need to make a reservation for outdoor dining?",
    answer: "While walk-ins are always welcome in our courtyard, we recommend booking ahead during peak Friday and Saturday dinner hours to secure your table under the fairy lights."
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
