export type CitySlug = "buninyong" | "ballarat" | "meredith";

export interface FAQ {
  question: string;
  answer: string;
}

export interface LocationData {
  name: string;
  heading: string;
  distanceHook: string;
  title: string;
  description: string;
  schemaLocality: string;
  bodyCopy: string;
  premiumHook: string;
  familyEventsCopy: string;
  faqs: FAQ[];
}

export const locationData: Record<CitySlug, LocationData> = {
  buninyong: {
    name: "Buninyong",
    heading: "Authentic Wood-Fired Pizza in Buninyong",
    distanceHook: "Located right in the heart of historic Buninyong.",
    title: "Best Wood-Fired Pizza in Buninyong | Family Friendly | Red Door Pizza",
    description: "Buninyong's premier wood-fired pizzeria. Featuring imported fior di latte, gluten-free options, a dedicated kids corner, and seating for 100 guests.",
    schemaLocality: "Buninyong",
    bodyCopy: "Join us at 401 Warrenheip St for the ultimate local dining experience. Whether you're craving our signature slow-cooked lamb ragu, a classic Margherita, or our rave-worthy gluten-free pizza bases, every dish is crafted with passion in our traditional wood-fire oven.",
    premiumHook: "We source our slow-cooked meats right down the road from the Buninyong Butcher and fresh produce from Peaches Fruit Market, perfectly paired with our imported Italian fior di latte cheese and local dessert by il piccolo gelato.",
    familyEventsCopy: "Looking for the perfect venue? Our relaxed lounge area is ideal for families, featuring a kids corner with a play kitchen, books, and coloring pages. We also host group bookings, work break-ups, and Christmas parties with a maximum capacity of 100 guests.",
    faqs: [
      { question: "Is Red Door Pizza in Buninyong family-friendly?", answer: "Yes! We have a dedicated kids corner with a play kitchen and books, plus a great Kids & Teens menu." },
      { question: "Do you offer gluten-free pizza in Buninyong?", answer: "Absolutely. Our customers rave about our premium gluten-free pizza bases and our gluten-free spaghetti bolognese." },
      { question: "Can I book a function at Red Door Pizza Buninyong?", answer: "Yes, our venue can accommodate up to 100 guests, making it perfect for Christmas parties, birthdays, and work events." }
    ]
  },
  ballarat: {
    name: "Ballarat",
    heading: "The Best Wood-Fired Pizza Near Ballarat",
    distanceHook: "Just a 12-minute scenic drive (11km) from the Ballarat CBD.",
    title: "Best Wood-Fired Pizza near Ballarat | Gluten Free & Family Friendly",
    description: "Escape the Ballarat CBD. Just a 12-minute drive to Buninyong for authentic fior di latte pizza, gluten-free pastas, and a relaxed, kid-friendly courtyard.",
    schemaLocality: "Ballarat",
    bodyCopy: "Leave the city traffic behind. Red Door Pizza offers a premium dining escape just 11km from Ballarat. Enjoy free parking, a spacious outdoor courtyard, and the finest wood-fired crust in the region, baked to perfection.",
    premiumHook: "Our commitment to quality means using authentic imported fior di latte, alongside the freshest local ingredients from Peaches Fruit Market and the Buninyong Butcher. Don't forget to try our dessert pizzas or locally made il piccolo gelato.",
    familyEventsCopy: "Finding a great family restaurant near Ballarat is easy. We offer a dedicated kids play area so parents can relax. Planning a work Christmas party or group event? We can host up to 100 guests in our rustic, festoon-lit venue.",
    faqs: [
      { question: "How far is Red Door Pizza from Ballarat?", answer: "We are just a short 12-minute drive (11km) from the Ballarat CBD, located in historic Buninyong." },
      { question: "What is the best family-friendly restaurant near Ballarat?", answer: "Red Door Pizza offers a relaxed atmosphere with a dedicated kids corner (featuring a play kitchen) and a specialized kids menu, just minutes from Ballarat." },
      { question: "Where can I buy Red Door Pizza bases in Ballarat?", answer: "Our vacuum-sealed, wood-fired pizza bases are stocked at local IGAs across the Ballarat region, including Beaufort, Creswick, and Elaine Farmgate." }
    ]
  },
  meredith: {
    name: "Meredith",
    heading: "Wood-Fired Pizza Takeaway & Dine-In Near Meredith",
    distanceHook: "A short, scenic drive straight up the Midland Hwy from Meredith.",
    title: "Wood-Fired Pizza near Meredith | Dine-In & Takeaway | Red Door Pizza",
    description: "Looking for premium food near Meredith? Drive up to Red Door Pizza in Buninyong for authentic wood-fired pizzas, homemade pastas, and a great family atmosphere.",
    schemaLocality: "Meredith",
    bodyCopy: "Skip the standard takeaway. Red Door Pizza provides a premium culinary destination just a short drive from Meredith. Pre-order your meal via Wowapps for a perfectly timed pickup, or settle into our cozy indoor lounge and outdoor beer garden.",
    premiumHook: "Taste the difference of true craftsmanship. We use imported Italian fior di latte cheese, locally sourced meats, and offer dietary options including our highly-rated gluten-free pizza bases and vegetarian selections.",
    familyEventsCopy: "Whether it's a weekend family dinner or a large gathering, our venue is designed for connection. We feature a kids corner to keep the little ones entertained and offer private event bookings for up to 100 guests—ideal for your next celebration.",
    faqs: [
      { question: "Where is the best pizza near Meredith?", answer: "Red Door Pizza in Buninyong serves authentic, wood-fired pizza just a short drive north of Meredith along the Midland Highway." },
      { question: "Can I order takeaway pizza near Meredith?", answer: "Yes, you can pre-order your wood-fired pizzas and homemade pastas via Wowapps for a quick and easy pickup." },
      { question: "Do you cater for dietary requirements?", answer: "Yes, we have extensive vegetarian options and gluten-free pizza bases that our customers highly recommend." }
    ]
  }
};

export const citySlugs = Object.keys(locationData) as CitySlug[];
