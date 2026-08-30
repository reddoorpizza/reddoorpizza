"use client";

import { motion } from "framer-motion";

const usps = [
  {
    title: "Local Sourcing",
    description:
      "Slow-cooked meats from the Buninyong Butcher and fresh produce from Peaches Fruit Market, paired with imported Italian fior di latte.",
  },
  {
    title: "Indoor & Outdoor Dining",
    description:
      "Indoor lounge seating, a relaxed kids area, and a spacious outdoor beer garden with festoon lighting.",
  },
  {
    title: "Take-Home Pizza Bases",
    description:
      "Vacuum-sealed, wood-fired pizza bases — pre-cooked in our Buninyong oven and stocked at local IGAs.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function USPSection() {
  return (
    <section id="about" className="py-10 md:py-20 bg-[#FAF8F5]">
      <div className="px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-[#ac511a] text-center tracking-tight mb-3">
            What Makes Us Different
          </h2>
          <p className="text-sm md:text-base text-[#1A1A1A]/70 text-center max-w-xl mx-auto mb-16 font-sans">
            Local ingredients, traditional methods, and a wood-fire oven — that&apos;s the basis of everything we cook.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12"
        >
          {usps.map((usp) => (
            <motion.div key={usp.title} variants={itemVariants}>
              <div className="w-12 h-[2px] bg-[#ac511a] mb-4" />
              <h3 className="text-xl font-serif text-[#1A1A1A] mb-3 font-semibold">
                {usp.title}
              </h3>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed font-sans">
                {usp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
