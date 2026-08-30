const reviews = [
  {
    name: "Rhiannon",
    url: "https://www.google.com/maps/contrib/115102488511871542521/reviews?hl=en-GB",
    text: "A lovely Pizza restaurant.love the atmosphere and Country style. I door and outdoor eating. Wood fire Pizza.......oh my gosh.....in the Winter a wood fire...so cosy and warm.\nStaff very friendly and accommodating. Great to relax on your own as a couple, date or family.\nCheck out the lunch time special.\nCan\u2019t wait to come back.",
  },
  {
    name: "Purple Rainbow",
    url: "https://www.google.com/maps/contrib/103933397812927027234/reviews?hl=en-GB",
    text: "Feel like pizza, a short drive from Ballarat to Buninyong is Red Door PIZZA. Friendly staff and a menu with good variety of food.\nWe chose the beef and mushroom along with the Inferno pizza. Both the pizzas where delicious.\nThey had music playing in the background and the indoor fireplace going, nice setting for a lazy Sunday arvo lunch.\nAlso a great selection of gelato ice-cream for dessert \uD83C\uDF6A",
  },
  {
    name: "Isaac Stolk",
    url: "https://www.google.com/maps/contrib/110103370271408804227/reviews?hl=en-GB",
    text: "Fantastic evening.\nCheers to the crew and a great setup.\nThey have a family friendly space, and with a reservation, a pool table for a fun night out.\nNot to mention a great range of delicious Pizza \uD83C\uDF55.\nI would definitely recommend.",
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
          {reviews.map((rev) => (
            <div key={rev.name} className="bg-[#FAF8F5] p-6 rounded-2xl border border-gray-200/60 shadow-sm flex flex-col justify-between">
              <div>
                <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{rev.text}</p>
              </div>
              <div className="mt-6 border-t border-gray-200/80 pt-3">
                <a
                  href={rev.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${rev.name} — read review on Google (opens in new tab)`}
                  className="font-semibold text-[#ac511a] text-sm hover:underline"
                >
                  {rev.name}
                </a>
                <p className="text-xs text-gray-500 mt-0.5">Google Review</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
