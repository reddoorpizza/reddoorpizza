export type GuideSlug = "family-friendly-pizza-ballarat" | "work-christmas-party-venues-buninyong" | "gluten-free-pizza-ballarat";

export interface GuideData {
  title: string;
  description: string;
  heading: string;
  subheading: string;
  sections: { title: string; body: string }[];
  ctaText: string;
  ctaLink: string;
  faqs: { question: string; answer: string }[];
}

export const guidesData: Record<GuideSlug, GuideData> = {
  "family-friendly-pizza-ballarat": {
    title: "Family-Friendly Pizza Near Ballarat",
    description: "Red Door Pizza near Ballarat — dedicated kids corner, kids menu, and a spacious outdoor courtyard for family dinners.",
    heading: "Family-Friendly Pizza Dining Near Ballarat",
    subheading: "A 12-minute drive from Ballarat CBD, with a kids corner, kids menu, and outdoor courtyard.",
    sections: [
      {
        title: "Built for Parents and Kids",
        body: "Red Door Pizza in Buninyong is a 12-minute drive from Ballarat CBD. Our venue has a dedicated kids corner with a wooden play kitchen, children's books, and colouring pages. Parents can see the play area from their table. Our outdoor courtyard and spacious indoor lounge work well for large families and prams."
      },
      {
        title: "The Kids Corner",
        body: "Our indoor kids corner has a wooden play kitchen, a small library of children's books, and colouring-in pages. The area is visible from the main dining room, so parents can keep an eye on little ones while enjoying their meal."
      },
      {
        title: "The Menu",
        body: "Our Kids & Teens menu has 10-inch Margherita ($17), Ham ($18), and Ham & Pineapple ($19) pizzas, plus Chicken Nuggets & Chips ($13). For adults: wood-fired pizzas with imported fior di latte, slow-cooked meats from the Buninyong Butcher, gluten-free bases, and house-made pastas. Finish with il piccolo gelato — made locally in the Ballarat region."
      }
    ],
    ctaText: "View Our Kids & Full Menu",
    ctaLink: "/menu",
    faqs: [
      { question: "Do you have a kids menu?", answer: "Yes. 10-inch Margherita ($17), Ham ($18), Ham & Pineapple ($19), and Chicken Nuggets & Chips ($13). A kids juice and ice cream combo is $5." },
      { question: "Is there space for prams and large families?", answer: "Our outdoor courtyard and indoor lounge have space for prams and large groups." },
      { question: "Do you have high chairs?", answer: "Yes. Mention you need one when booking." }
    ]
  },
  "work-christmas-party-venues-buninyong": {
    title: "Group & Christmas Functions Near Ballarat",
    description: "Book your work break-up or Christmas party at Red Door Pizza. Capacity for 100 guests, wood-fired catering, and a beer garden just outside Ballarat.",
    heading: "Work Christmas Party and Group Function Venue",
    subheading: "A rustic venue in Buninyong with capacity for up to 100 guests, 11km from Ballarat CBD.",
    sections: [
      {
        title: "A Different Kind of Function Venue",
        body: "Red Door Pizza is 11km from Ballarat CBD in historic Buninyong. Our venue is a rustically styled pizzeria with a festoon-lit outdoor beer garden and indoor lounge — a different pace from standard function rooms. We host work break-ups, Christmas parties, birthdays, and private events for groups of 30 to 100 guests."
      },
      {
        title: "Flexible Spaces for Groups",
        body: "Our indoor lounge suits winter events, while the outdoor beer garden with festoon lighting works well for warmer months. The venue holds up to 100 guests across both areas. We can configure the space for seated dining or standing events depending on your group size."
      },
      {
        title: "Wood-Fired Catering",
        body: "Our menu features wood-fired pizzas, house-made pastas, and dietary options including gluten-free bases and vegetarian selections. We offer custom group packages — pair the food with our bar options for a complete event. Enquire via our contact page for group pricing."
      }
    ],
    ctaText: "Enquire About Your Event",
    ctaLink: "/contact",
    faqs: [
      { question: "What is your maximum capacity for private functions?", answer: "Up to 100 guests across our indoor lounge and outdoor beer garden." },
      { question: "Can you cater to dietary requirements for large groups?", answer: "We have gluten-free bases, vegetarian options, and can accommodate other dietary needs. Discuss your requirements when enquiring." },
      { question: "Do we get exclusive use of the venue?", answer: "Available depending on date, time, and group size. Contact us to discuss." }
    ]
  },
  "gluten-free-pizza-ballarat": {
    title: "Gluten-Free Pizza Near Ballarat",
    description: "Gluten-free pizza bases and GF spaghetti bolognese at Red Door Pizza in Buninyong — 12 minutes from Ballarat.",
    heading: "Gluten-Free Pizza and Pasta Near Ballarat",
    subheading: "Wood-fired gluten-free pizza bases and house-made GF pasta, 12 minutes from Ballarat CBD.",
    sections: [
      {
        title: "Gluten-Free Pizza, Wood-Fired",
        body: "Our gluten-free pizza bases are cooked in the same traditional wood-fire oven as our standard pizzas. They crisp up without crumbling — a common complaint with GF bases. The menu includes Margherita, Pumpkin, and Mushroom pizzas, all available on gluten-free bases."
      },
      {
        title: "Gluten-Free Pasta",
        body: "Our house-made Beef & Pork Spaghetti Bolognese is available with gluten-free pasta. The Lamb Ragu (slow-cooked for 10 hours with tomato, red wine, rosemary, and fresh pappardelle) can also be served with GF pasta on request."
      },
      {
        title: "Cross-Contamination Note",
        body: "Our kitchen handles standard flour daily. Gluten-free bases are cooked in the same wood-fire oven as standard pizzas. For guests with severe coeliac disease, this is worth noting. For those with standard intolerances, our GF options are a reliable choice."
      }
    ],
    ctaText: "Pre-Order GF Options via Wowapps",
    ctaLink: "https://orders.wowapps.com/order/reddoorpizzeria",
    faqs: [
      { question: "Are your gluten-free bases cooked in the same oven?", answer: "Yes. Our kitchen handles standard flour daily, so we advise guests with severe coeliac disease to make an informed choice." },
      { question: "What other gluten-free options do you have?", answer: "GF pizza bases, GF Spaghetti Bolognese, and naturally gluten-free sides and salads." },
      { question: "Is there an extra charge for gluten-free bases?", answer: "Yes, a small surcharge applies to GF pizza bases and GF pasta." }
    ]
  }
};

export const guideSlugs = Object.keys(guidesData) as GuideSlug[];
