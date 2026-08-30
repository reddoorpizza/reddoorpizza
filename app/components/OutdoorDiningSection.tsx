import Image from "next/image";
import Link from "next/link";
import { ADDRESS, OPENING_HOURS_SHORT } from "@/app/config/constants";

export default function OutdoorDiningSection() {
  return (
    <section className="py-16 bg-[#18181B] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Text Content */}
          <div className="space-y-6">
            <span className="inline-block text-[#ac511a] text-xs font-semibold uppercase tracking-widest bg-[#ac511a]/10 px-3 py-1 rounded-full border border-[#ac511a]/20">
              The Buninyong Courtyard
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight text-white">
              Dine Under the Stars in Our Rustic Beer Garden
            </h2>
            <p className="text-gray-300 text-base leading-relaxed">
              Experience Buninyong&apos;s premier outdoor dining venue. Enjoy hot, wood-fired pizzas under warm festoon lighting in our spacious, family-friendly outdoor courtyard. Perfect for weekend gatherings, relaxed family dinners, and warm evening drinks.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="border-l-2 border-[#ac511a] pl-4">
                <p className="font-semibold text-white text-sm">Family Friendly</p>
                <p className="text-xs text-gray-400 mt-1">Spacious outdoor area with kids table seating.</p>
              </div>
              <div className="border-l-2 border-[#ac511a] pl-4">
                <p className="font-semibold text-white text-sm">Festoon Atmosphere</p>
                <p className="text-xs text-gray-400 mt-1">Cozy fairy lights & rustic wooden benches.</p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link className="bg-[#ac511a] hover:bg-[#8e4215] text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-md hover:shadow-lg" href="/contact">
                Book a Table
              </Link>
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="relative group rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="relative h-[380px] sm:h-[450px] w-full">
              <Image alt="Red Door Pizza Outdoor Courtyard Dining" className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out" fill priority src="/OUTDOOR%20DINING.JPG"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 text-xs text-gray-200">
              📍 {ADDRESS.street} Courtyard — {OPENING_HOURS_SHORT.map((e) => `${e.days} ${e.hours}`).join(" · ")}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
