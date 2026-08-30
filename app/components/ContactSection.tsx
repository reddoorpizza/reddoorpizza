"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Flame, Trees, PartyPopper, ShoppingBag } from "lucide-react";
import { WOWAPPS_ORDER_URL, PHONE_NUMBER_DISPLAY, PHONE_NUMBER_TEL, OPENING_HOURS } from "@/app/config/constants";
import { trackOrderOnlineClick, trackPhoneClick, trackDirectionsClick } from "@/app/lib/analytics";

const features = [
  { icon: Flame, label: "Fireplace Dining" },
  { icon: Trees, label: "Alfresco Beer Garden" },
  { icon: PartyPopper, label: "Private Functions" },
  { icon: ShoppingBag, label: "Takeaway Available" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#FAF8F5]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6 py-16">
        {/* ── Left: Business Info ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-serif text-[#18181B] font-bold mb-4">
            Visit Red Door Pizza in Buninyong
          </h2>

          <div className="space-y-4 mb-8">
            <a
              href="https://maps.google.com/?q=401+Warrenheip+St+Buninyong+VIC+3357"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackDirectionsClick()}
              className="flex items-start gap-3 text-[#262626] hover:text-[#ac511a] transition-colors group"
            >
              <MapPin className="w-5 h-5 mt-0.5 shrink-0 group-hover:text-[#ac511a]" />
              <span className="text-sm leading-relaxed">
                401 Warrenheip St
                <br />
                Buninyong VIC 3357, Australia
              </span>
            </a>

            <a
              href={PHONE_NUMBER_TEL}
              onClick={() => trackPhoneClick()}
              className="flex items-center gap-3 text-[#262626] hover:text-[#ac511a] transition-colors group"
            >
              <Phone className="w-5 h-5 shrink-0 group-hover:text-[#ac511a]" />
              <span className="text-sm">{PHONE_NUMBER_DISPLAY}</span>
            </a>

            <div className="flex items-center gap-3 text-[#262626]">
              <Clock className="w-5 h-5 shrink-0 text-[#ac511a]" />
              <div className="text-sm">
                {OPENING_HOURS.map((entry) => (
                  <div key={entry.days}>
                    <span className="font-medium">{entry.days}:</span> {entry.hours}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap gap-2">
            {features.map((f) => (
              <span
                key={f.label}
                className="inline-flex items-center gap-1.5 bg-[#ac511a]/10 border border-[#ac511a]/30 text-[#ac511a] text-xs font-medium px-3 py-1 rounded-full"
              >
                <f.icon className="w-3.5 h-3.5" />
                {f.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Right: Order CTA Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center"
        >
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-[#ac511a]/10 w-full">
            <h3 className="text-2xl font-serif text-[#18181B] font-bold mb-3">
              Order Pickup or Delivery
            </h3>
            <p className="text-sm text-[#262626]/70 leading-relaxed mb-6">
              Enjoy our authentic wood-fired pizzas at home via our official
              online ordering system.
            </p>
            <a
              href={WOWAPPS_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackOrderOnlineClick("contact")}
              className="inline-flex items-center justify-center w-full bg-[#ac511a] hover:bg-[#c05c1e] text-white font-semibold py-3.5 px-6 rounded-xl transition-colors duration-200 text-sm uppercase tracking-wider shadow-lg shadow-[#ac511a]/20"
            >
              Order Online Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
