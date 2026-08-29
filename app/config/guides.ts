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
    title: "Family Friendly Pizza near Ballarat | Kids Corner | Red Door Pizza",
    description: "Looking for a kid-friendly restaurant near Ballarat? Red Door Pizza features a dedicated kids corner, a specialized menu, and a spacious outdoor courtyard.",
    heading: "The Ultimate Family-Friendly Pizza Experience Near Ballarat",
    subheading: "Enjoy a relaxed dinner while the kids play, just a 12-minute drive from the Ballarat CBD.",
    sections: [
      {
        title: "A Restaurant Built for Parents and Kids",
        body: "Finding a dining spot that caters equally to adults craving premium food and children needing entertainment is a challenge. At Red Door Pizza in historic Buninyong, we've designed our venue to solve this. Just a short 12-minute scenic drive from Ballarat, our restaurant offers a spacious, stress-free environment where large families and prams are always welcome."
      },
      {
        title: "The Dedicated Kids Corner",
        body: "We know that keeping toddlers and young children entertained is the key to a relaxing family meal. Our indoor lounge features a dedicated kids' corner equipped with a wooden play kitchen, a library of children's books, and coloring-in pages. Parents can enjoy their meal in peace with full visibility of the play area."
      },
      {
        title: "A Menu the Whole Family Will Love",
        body: "While the adults indulge in our authentic wood-fired pizzas topped with imported fior di latte and slow-cooked meats from the Buninyong Butcher, the kids are fully catered for. Our specialized Kids & Teens menu features perfectly sized 10-inch Margherita and Ham pizzas, alongside classic favorites like Chicken Nuggets & Chips. Finish the night by sharing locally sourced il piccolo gelato!"
      }
    ],
    ctaText: "View Our Kids & Full Menu",
    ctaLink: "/menu",
    faqs: [
      { question: "Do you have a kids menu?", answer: "Yes, we offer perfectly sized 10-inch pizzas and chicken nuggets & chips for younger appetites." },
      { question: "Is there space for prams and large families?", answer: "Absolutely. Our outdoor courtyard and spacious indoor lounge are perfect for large family gatherings." },
      { question: "Do you have high chairs available?", answer: "Yes, we have high chairs available for our youngest guests. We recommend mentioning you need one when booking." }
    ]
  },
  "work-christmas-party-venues-buninyong": {
    title: "Work Christmas Party Venues Buninyong & Ballarat | Red Door Pizza",
    description: "Book your work break-up or Christmas party at Red Door Pizza. Capacity for 100 guests, custom packages, and a festive beer garden just outside Ballarat.",
    heading: "Host Your Work Christmas Party or Private Event",
    subheading: "A premium, rustic venue in Buninyong with capacity for up to 100 guests.",
    sections: [
      {
        title: "Escape the Standard Pub Function Room",
        body: "When it comes to work break-ups, Christmas parties, and private corporate celebrations, the venue sets the tone for the entire event. Red Door Pizza offers a stunning alternative to crowded city pubs. Located just 11km from the Ballarat CBD, our venue provides a relaxed, rustic atmosphere where your team can genuinely unwind and celebrate the year's achievements."
      },
      {
        title: "Flexible Spaces for up to 100 Guests",
        body: "Whether you are planning an intimate gathering for 30 or a massive end-of-year bash for 100 guests, our venue adapts to your needs. Choose between our cozy indoor lounge for winter events or our premier outdoor beer garden. Under the warm glow of festoon lighting, our family-friendly courtyard is the ultimate backdrop for festive drinks and wood-fired catering."
      },
      {
        title: "Premium Catering & Custom Packages",
        body: "Treat your staff to the best food in the region. We offer custom menu packages featuring our signature wood-fired pizzas, homemade pastas, and a full range of dietary options including gluten-free bases and vegetarian selections. Pair the catering with our flexible bar options to create a seamless, memorable night for your company."
      }
    ],
    ctaText: "Enquire About Your Event",
    ctaLink: "/contact",
    faqs: [
      { question: "What is your maximum capacity for private functions?", answer: "We can comfortably host up to 100 guests across our venue." },
      { question: "Can you cater to dietary requirements for large groups?", answer: "Yes, we provide extensive gluten-free and vegetarian options to ensure all your guests are catered for." },
      { question: "Do we get exclusive use of the venue?", answer: "Exclusive venue hire is available depending on the date, time, and group size. Contact us directly to discuss your specific needs." }
    ]
  },
  "gluten-free-pizza-ballarat": {
    title: "Best Gluten-Free Pizza & Pasta near Ballarat | Red Door Pizza",
    description: "Discover the best gluten-free pizza bases and GF spaghetti bolognese near Ballarat. Safe, delicious, and made with authentic Italian ingredients.",
    heading: "Premium Gluten-Free Pizza and Pasta Near Ballarat",
    subheading: "Dietary needs shouldn't mean compromising on taste or quality.",
    sections: [
      {
        title: "The Best Gluten-Free Base in the Region",
        body: "If you are searching for the absolute best gluten-free pizza in the Ballarat region, your search ends right here in Buninyong. We believe that a gluten intolerance shouldn't mean missing out on authentic, wood-fired flavor. Our customers constantly rave about our premium gluten-free pizza bases, which crisp up perfectly in our traditional oven without crumbling or tasting like cardboard."
      },
      {
        title: "Beyond Pizza: Gluten-Free Pastas",
        body: "We don't just stop at pizza. We understand the craving for true Italian comfort food, which is why our signature house-made Beef & Pork Spaghetti Bolognese is also available with premium gluten-free pasta. Pair it with our naturally gluten-free sides and salads for a complete, satisfying meal."
      },
      {
        title: "Our Approach to Cross-Contamination",
        body: "While we take extreme care when preparing gluten-free orders, transparency is important to us. Our gluten-free bases are cooked in the same traditional wood-fire oven as our standard pizzas. Because our kitchen handles standard flour daily, we advise guests with severe Celiac disease to make an informed choice. However, for those with standard intolerances, our GF options are a highly-rated, delicious alternative."
      }
    ],
    ctaText: "Pre-Order GF Options via Wowapps",
    ctaLink: "https://orders.wowapps.com/order/reddoorpizzeria",
    faqs: [
      { question: "Are your gluten-free bases cooked in the same oven?", answer: "Yes, they are cooked in our wood-fire oven. While we take extreme care, please note that our kitchen handles standard flour." },
      { question: "What other gluten-free options do you have?", answer: "Alongside our GF pizza bases, we offer a highly-rated GF Spaghetti Bolognese and various naturally gluten-free sides and salads." },
      { question: "Is there an extra charge for gluten-free bases?", answer: "Yes, there is a small premium surcharge for our gluten-free pizza bases and gluten-free pasta to cover the cost of these specialized, high-quality ingredients." }
    ]
  }
};

export const guideSlugs = Object.keys(guidesData) as GuideSlug[];
