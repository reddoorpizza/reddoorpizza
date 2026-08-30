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
    title: "Wood-Fired Pizza in Buninyong",
    description: "Buninyong's wood-fired pizzeria. Featuring imported fior di latte, gluten-free options, a dedicated kids corner, and seating for 100 guests.",
    schemaLocality: "Buninyong",
    bodyCopy: "Red Door Pizza is at 401 Warrenheip St, Buninyong — our home since day one. Every pizza is baked in our traditional wood-fire oven using imported Italian fior di latte, slow-cooked meats from the Buninyong Butcher, and fresh produce from Peaches Fruit Market. Whether you're after a classic Margherita, our popular gluten-free bases, or a 10-hour slow-cooked lamb ragu, each dish is made with care in our kitchen.",
    premiumHook: "We source our slow-cooked meats from the Buninyong Butcher and fresh produce from Peaches Fruit Market, paired with imported Italian fior di latte and locally made il piccolo gelato for dessert.",
    familyEventsCopy: "Our relaxed lounge area is set up for families — a kids corner with a play kitchen, books, and colouring pages keeps the little ones busy while you enjoy your meal. We also host group bookings, work break-ups, and Christmas parties for up to 100 guests in our festoon-lit beer garden.",
    faqs: [
      { question: "Is Red Door Pizza in Buninyong family-friendly?", answer: "Yes. We have a dedicated kids corner with a play kitchen and books, plus a Kids & Teens menu with 10-inch pizzas and chicken nuggets." },
      { question: "Do you offer gluten-free pizza in Buninyong?", answer: "We do. Our gluten-free pizza bases are popular with customers, and we also serve gluten-free spaghetti bolognese." },
      { question: "Can I book a function at Red Door Pizza Buninyong?", answer: "Yes. Our venue holds up to 100 guests across indoor and outdoor areas — suitable for Christmas parties, birthdays, and work events. Enquire via our contact page." }
    ]
  },
  ballarat: {
    name: "Ballarat",
    heading: "Wood-Fired Pizza Near Ballarat",
    distanceHook: "Just a 12-minute scenic drive (11km) from the Ballarat CBD.",
    title: "Wood-Fired Pizza Near Ballarat",
    description: "Red Door Pizza in Buninyong — just a 12-minute drive from Ballarat for authentic fior di latte pizza, gluten-free pastas, and a relaxed, kid-friendly courtyard.",
    schemaLocality: "Ballarat",
    bodyCopy: "Red Door Pizza is in historic Buninyong, 11km from the Ballarat CBD. Free parking, a spacious outdoor courtyard, and a traditional wood-fire oven — a different pace from the city. Our menu features imported fior di latte, slow-cooked meats, gluten-free options, and locally made gelato.",
    premiumHook: "Our kitchen uses imported Italian fior di latte alongside local produce from Peaches Fruit Market and the Buninyong Butcher. Dessert options include il piccolo gelato, made locally.",
    familyEventsCopy: "We offer a dedicated kids play area so parents can relax. Planning a work Christmas party or group event? Our venue hosts up to 100 guests across indoor and outdoor spaces with festoon lighting.",
    faqs: [
      { question: "How far is Red Door Pizza from Ballarat?", answer: "We are 12 minutes by car (11km) from the Ballarat CBD, located in historic Buninyong." },
      { question: "Is Red Door Pizza family-friendly?", answer: "We have a dedicated kids corner with a play kitchen and books, plus a Kids & Teens menu with 10-inch pizzas and chicken nuggets." },
      { question: "Where can I buy Red Door Pizza bases in Ballarat?", answer: "Our vacuum-sealed, wood-fired pizza bases are stocked at local IGAs across the Ballarat region, including Beaufort, Creswick, and Elaine Farmgate." }
    ]
  },
  meredith: {
    name: "Meredith",
    heading: "Wood-Fired Pizza Takeaway & Dine-In Near Meredith",
    distanceHook: "A short, scenic drive straight up the Midland Hwy from Meredith.",
    title: "Pizza Near Meredith",
    description: "Red Door Pizza in Buninyong — a short drive from Meredith for authentic wood-fired pizzas, homemade pastas, and a family-friendly atmosphere.",
    schemaLocality: "Meredith",
    bodyCopy: "Red Door Pizza is a short drive from Meredith along the Midland Highway. Pre-order via Wowapps for a timed pickup, or sit in our relaxed indoor lounge and outdoor beer garden. Our wood-fired menu features imported fior di latte, slow-cooked meats, gluten-free bases, and locally made gelato.",
    premiumHook: "We use imported Italian fior di latte cheese alongside locally sourced meats. Our gluten-free pizza bases and vegetarian options are popular choices.",
    familyEventsCopy: "Our venue has a kids corner for younger guests and accommodates group bookings for up to 100 guests — suitable for family dinners, celebrations, and work events.",
    faqs: [
      { question: "Where is the best pizza near Meredith?", answer: "Red Door Pizza in Buninyong serves wood-fired pizza just a short drive north of Meredith along the Midland Highway." },
      { question: "Can I order takeaway pizza near Meredith?", answer: "Yes. Pre-order via Wowapps for a timed pickup from our Buninyong kitchen." },
      { question: "Do you cater for dietary requirements?", answer: "We have vegetarian options and gluten-free pizza bases. The gluten-free Spaghetti Bolognese is also available." }
    ]
  }
};

export const citySlugs = Object.keys(locationData) as CitySlug[];
