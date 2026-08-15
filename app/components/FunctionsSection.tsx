"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

const bullets = [
  "Flexible seating for 30–120 guests",
  "Custom menu packages available",
  "Full bar & beverage packages",
  "Live music & entertainment options",
];

export default function FunctionsSection() {
  return (
    <section id="functions" className="bg-[#18181B] text-white py-10 md:py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* ── Left Column ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6 text-left"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-[#ac511a]/20 border border-[#ac511a] text-[#eccb57] text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">
            Private Events & Functions
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight font-bold">
            Host Your Next Event at Red Door
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            From intimate gatherings to weddings, corporate events, and local
            fundraisers — our rustic venue and dedicated team will make your
            occasion unforgettable.
          </p>

          {/* Bullet List */}
          <ul className="space-y-3">
            {bullets.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-gray-200 text-sm font-medium"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#eccb57] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ── Right Column: Form Card ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7"
        >
          <div className="bg-white text-gray-900 rounded-3xl p-10 shadow-2xl">
            <h3 className="text-2xl font-serif text-[#18181B] mb-6 font-bold">
              Enquire Now
            </h3>

            <form className="space-y-4">
              {/* Row 1: Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-500 placeholder:font-normal rounded-xl px-4 py-3 min-h-[48px] text-sm focus:bg-white focus:border-[#ac511a] focus:ring-2 focus:ring-[#ac511a]/20 transition-all duration-200 w-full outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-500 placeholder:font-normal rounded-xl px-4 py-3 min-h-[48px] text-sm focus:bg-white focus:border-[#ac511a] focus:ring-2 focus:ring-[#ac511a]/20 transition-all duration-200 w-full outline-none"
                />
              </div>

              {/* Row 2: Phone + Event Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-500 placeholder:font-normal rounded-xl px-4 py-3 min-h-[48px] text-sm focus:bg-white focus:border-[#ac511a] focus:ring-2 focus:ring-[#ac511a]/20 transition-all duration-200 w-full outline-none"
                />
                <select className="bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-500 placeholder:font-normal rounded-xl px-4 py-3 min-h-[48px] text-sm focus:bg-white focus:border-[#ac511a] focus:ring-2 focus:ring-[#ac511a]/20 transition-all duration-200 w-full outline-none appearance-none">
                  <option value="">Event Type</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="fundraiser">Fundraiser</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Guest Count */}
              <input
                type="text"
                placeholder="Estimated Guest Count"
                className="bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-500 placeholder:font-normal rounded-xl px-4 py-3 min-h-[48px] text-sm focus:bg-white focus:border-[#ac511a] focus:ring-2 focus:ring-[#ac511a]/20 transition-all duration-200 w-full mb-4 outline-none"
              />

              {/* Message */}
              <textarea
                placeholder="Tell us about your event..."
                rows={4}
                className="bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-500 placeholder:font-normal rounded-xl px-4 py-3 min-h-[48px] text-sm focus:bg-white focus:border-[#ac511a] focus:ring-2 focus:ring-[#ac511a]/20 transition-all duration-200 w-full resize-none outline-none"
              />

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#ac511a] hover:bg-[#c05c1e] text-white font-semibold py-3.5 px-6 rounded-xl transition-colors duration-200 text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#ac511a]/20"
              >
                <Send className="w-4 h-4" />
                Send Enquiry
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
