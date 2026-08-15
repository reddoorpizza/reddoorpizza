import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    role: "Local Resident",
    text: "Hands down the best wood-fired pizza in Buninyong! The beer garden atmosphere under the fairy lights on a Friday night is unbeatable.",
    rating: 5,
  },
  {
    name: "David L.",
    role: "Family Dinner",
    text: "Great crust, fresh toppings, and fantastic service. Kids loved sitting outdoors in the courtyard area. We'll definitely be back!",
    rating: 5,
  },
  {
    name: "Emma W.",
    role: "Takeaway Customer",
    text: "The Potato Pizza and Pumpkin & Beet Pizza are incredible. Fast service and always piping hot when picked up.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <span className="text-[#ac511a] text-xs font-semibold uppercase tracking-widest bg-[#ac511a]/10 px-3 py-1 rounded-full">
            Local Love
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#18181B] mt-3">
            What Our Guests Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, index) => (
            <div key={index} className="bg-[#FAF8F5] p-6 rounded-2xl border border-gray-200/60 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star className="w-4 h-4 fill-current" key={i}/>
                  ))}
                </div>
                <p className="text-gray-700 text-sm italic leading-relaxed">"{rev.text}"</p>
              </div>
              <div className="mt-6 border-t border-gray-200/80 pt-3">
                <p className="font-semibold text-[#18181B] text-sm">{rev.name}</p>
                <p className="text-xs text-gray-500">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
