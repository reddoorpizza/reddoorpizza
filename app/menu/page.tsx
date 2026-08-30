import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import OrderButton from "@/app/components/OrderButton";

export const metadata: Metadata = {
  title: "Wood-Fired Pizza & Italian Menu",
  description:
    "Explore our authentic menu featuring imported fior di latte wood-fired pizzas, homemade pastas, gluten-free options, and local gelato in Buninyong.",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: "Wood-Fired Pizza & Italian Menu | Red Door Pizza",
    description:
      "Explore our authentic menu featuring imported fior di latte wood-fired pizzas, homemade pastas, gluten-free options, and local gelato in Buninyong.",
    url: "https://www.reddoorpizza.com.au/menu",
    siteName: "Red Door Pizza",
    type: "website",
    locale: "en_AU",
    images: [
      {
        url: "/Banner.jpg",
        width: 1200,
        height: 630,
        alt: "Red Door Pizza — Wood-Fired Pizza & Italian Menu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wood-Fired Pizza & Italian Menu | Red Door Pizza",
    description:
      "Explore our authentic menu featuring wood-fired pizzas, homemade pastas, gluten-free options, and local gelato.",
    images: ["/Banner.jpg"],
  },
};

interface MenuItem {
  name: string;
  description?: string;
  price: string;
  isVegetarian?: boolean;
}

interface CategoryData {
  id: string;
  category: string;
  categoryNote?: string;
  promoBanner?: string;
  items: MenuItem[];
}

const menuData: CategoryData[] = [
  {
    id: "pizzas",
    category: "Wood-Fired Pizzas",
    promoBanner:
      "LUNCH SPECIAL — ALL PIZZAS $23 EACH (12–3 PM FRIDAY TO SUNDAY)",
    items: [
      {
        name: "Margherita Pizza",
        price: "$23",
        isVegetarian: true,
        description: "Tomato sauce, mozzarella, & fresh basil",
      },
      {
        name: "Potato Pizza",
        price: "$24",
        isVegetarian: true,
        description: "Tomato sauce, potatoes, rosemary, parmesan & rocket",
      },
      {
        name: "Mushroom Pizza",
        price: "$26",
        isVegetarian: true,
        description:
          "Olive oil, mozzarella, mushrooms, pine nuts, Meredith goat cheese, and rocket",
      },
      {
        name: "Pumpkin Pizza",
        price: "$26",
        isVegetarian: true,
        description:
          "Onion jam, spinach, parmesan, roasted marinated pumpkin, Meredith goat cheese & pine nuts",
      },
      {
        name: "Pumpkin & Beet Pizza",
        price: "$26",
        isVegetarian: true,
        description:
          "Onion jam, spinach, parmesan, baby beetroot, roasted marinated pumpkin, Meredith goat cheese & rocket",
      },
      {
        name: "Smoked Ham Pizza",
        price: "$26",
        description: "Tomato sauce, mozzarella, smoked ham, tomato relish",
      },
      {
        name: "Ham & Pineapple Pizza",
        price: "$26",
        description: "Tomato sauce, mozzarella, smoked ham, pineapple",
      },
      {
        name: "BBQ Chicken Pizza",
        price: "$26",
        description:
          "BBQ sauce, mozzarella, seasoned chicken, red onion, fresh capsicum & spring onion",
      },
      {
        name: "Capricciosa Pizza",
        price: "$28",
        description:
          "Tomato sauce, mozzarella, shaved ham, mushrooms, olives, salt, pepper, oregano, olive oil",
      },
      {
        name: "Shredded Pork Pizza",
        price: "$29",
        description:
          "BBQ sauce, mozzarella, slow-cooked shredded pork & red onion",
      },
      {
        name: "Hot Salami Pizza",
        price: "$29",
        description:
          "Tomato sauce, mozzarella, hot salami, olives, chilli, rocket",
      },
      {
        name: "Mild Salami Pizza",
        price: "$29",
        description:
          "Tomato sauce, mozzarella, mild salami, olives, roasted red capsicum, rocket",
      },
      {
        name: "Beef & Pumpkin",
        price: "$30",
        description:
          "Onion jam, spinach, parmesan, slow-cooked beef & roasted pumpkin",
      },
      {
        name: "Beef & Mushroom Pizza",
        price: "$30",
        description:
          "Onion jam, parmesan, slow-cooked beef, mushrooms, apple, rocket & Meredith goat cheese",
      },
      {
        name: "Satay Chicken Pizza",
        price: "$30",
        description:
          "Onion jam, spinach, parmesan, seasoned chicken, house-made satay sauce, fresh capsicum, & spring onions",
      },
      {
        name: "Inferno Pizza",
        price: "$30",
        description:
          "House-made spicy tomato sauce, hot salami, hot chorizo, red peppers, mozzarella, extra virgin olive oil, chilli flakes",
      },
      {
        name: "Pollo Primavera Pizza",
        price: "$31",
        description:
          "Tomato sauce, mozzarella, spinach, chicken, chorizo, red onion, cherry tomatoes, basil",
      },
      {
        name: "The Door Pizza",
        price: "$31",
        description:
          "Tomato sauce, mozzarella, ham, hot salami, mushrooms, olives, pineapple, capsicum, onions",
      },
      {
        name: "Lamb Pizza",
        price: "$31",
        description:
          "Onion jam, mozzarella, slow-cooked shredded lamb, bok choy, tomato relish, rosemary and salt flakes",
      },
      {
        name: "Lamb & Beet Pizza",
        price: "$31",
        description:
          "Onion jam, mozzarella, slow-cooked shredded lamb, baby beetroot, Meredith goat cheese",
      },
      {
        name: "Meat Lovers Pizza",
        price: "$33",
        description:
          "Tomato sauce, mozzarella, mild salami, ham, Italian sausage, slow cooked shredded pork",
      },
      {
        name: "Garlic Prawn Pizza",
        price: "$33",
        description:
          "Onion jam, garlic, spinach, mozzarella, parmesan, prawns, fresh dill & lemon",
      },
      {
        name: "Sweet Chilli Prawn Pizza",
        price: "$33",
        description:
          "Sweet chilli sauce, mozzarella, prawns, fresh capsicum, spring onions, sour cream, parmesan & coriander",
      },
      {
        name: "Standard Dough Balls (take home)",
        price: "$4.95",
        isVegetarian: true,
        description: "Fresh take-home pizza dough balls",
      },
    ],
  },
  {
    id: "starters",
    category: "Starters & Sides",
    items: [
      { name: "Wood Fired Garlic Bread", price: "$10" },
      { name: "Marinated Warm Olives", price: "$12" },
      {
        name: "French Fries",
        description: "with tomato sauce — add cheese +$3",
        price: "$12",
      },
      { name: "Wood Fired Cheesy Garlic Bread", price: "$13" },
      { name: "Sweet Potato Fries", description: "with aioli", price: "$15" },
      {
        name: "Garlic Starter Pizza",
        description: "With oregano & parmesan",
        price: "$17",
      },
      {
        name: "Sweet Chili Starter Pizza",
        description: "Topped with sour cream",
        price: "$17",
      },
      {
        name: "Loaded Fries",
        description: "Fries, cheese, sour cream, sweet chilli sauce, spring onion",
        price: "$18",
      },
      {
        name: "Truffle Oil Starter Pizza",
        description: "With mozzarella, rosemary & oregano",
        price: "$19",
      },
      {
        name: "Red Door Salad",
        description:
          "Fresh rocket, baby spinach, cherry tomatoes, kalamata olives, red onion, silvered almonds, shaved parmesan with a balsamic dressing, and marinated Meredith goat cheese.",
        price: "$21.50",
      },
    ],
  },
  {
    id: "pasta",
    category: "Pasta",
    items: [
      { name: "House-made Beef & Pork Lasagna", price: "$28" },
      {
        name: "Gluten Free Spaghetti Bolognese",
        description:
          "House-made Beef & Pork Spaghetti Bolognese — served with premium gluten-free pasta.",
        price: "$28",
      },
      {
        name: "Lamb Ragu",
        description:
          "10-hour slow cooked lamb ragu with tomato, red wine, rosemary & fresh pappardelle",
        price: "$30",
      },
    ],
  },
  {
    id: "kids",
    category: "Kids/Teen/Seniors",
    categoryNote:
      "ADD KIDS juice/soft drink cup & dixie cup vanilla ice cream for $5",
    items: [
      { name: "Chicken Nuggets & Chips", price: "$13" },
      {
        name: 'Margherita (approx. 10")',
        description: "Tomato sauce, mozzarella",
        price: "$17",
      },
      {
        name: 'Ham (approx. 10")',
        description: "Tomato sauce, mozzarella & smoked ham",
        price: "$18",
      },
      {
        name: 'Ham & Pineapple (approx. 10")',
        description: "Tomato sauce, mozzarella, smoked ham & pineapple",
        price: "$19",
      },
    ],
  },
  {
    id: "dessert",
    category: "Dessert",
    items: [
      {
        name: "Il Piccolo Gelato (Locally Made)",
        description: "1 Scoop: $6.30 | 2 Scoops: $8 | 3 Scoops: $9",
        price: "From $6.30",
      },
      { name: "Dixie Cup Vanilla Ice Cream", price: "$3.50" },
      {
        name: "Biscoff Pizza",
        description: "Biscoff, Nutella, Biscoff biscuits",
        price: "$17",
      },
      {
        name: "Nutella & Strawberry Pizza",
        description: "Strawberries, Nutella, cream, and icing sugar",
        price: "$18",
      },
      {
        name: "Tiramisu",
        description: "Red Door house-made tiramisu",
        price: "$10",
      },
      {
        name: "Affogato",
        description:
          "Espresso coffee served over vanilla gelato with a shot of Frangelico or Kahlúa",
        price: "$16",
      },
    ],
  },
  {
    id: "drinks",
    category: "Drinks",
    items: [
      {
        name: "Juice (Kids Cup / Full)",
        description: "Apple, orange, pineapple",
        price: "$3.50 / $5",
      },
      {
        name: "Soft Drink (Glass / Jug)",
        description:
          "Coke, Coke No Sugar, Lemonade, Lemon Squash, Solo, Raspberry Lemonade",
        price: "$5 / $12 Jug",
      },
      { name: "Lemon Lime Soda & Bitters", price: "$7.50" },
      {
        name: "Sparkling Mineral Water (350ml / 750ml)",
        description: "Hepburn natural sparkling water",
        price: "$5 / $8",
      },
      {
        name: "Naturally Flavoured Sparkling Water",
        description: "Grapefruit, lemon, orange & passionfruit",
        price: "$6",
      },
      {
        name: "Hot Coffee",
        description: "Flat white, long black, espresso",
        price: "$5",
      },
      { name: "Hot Chocolate", price: "$5" },
      {
        name: "Tea",
        description: "English breakfast, earl grey, peppermint",
        price: "$4.50",
      },
    ],
  },
];

const GF_ITEM_NAMES = new Set(["Gluten Free Spaghetti Bolognese"]);

const menuJsonLd = {
  "@context": "https://schema.org",
  "@type": "Menu",
  name: "Red Door Pizza Menu",
  url: "https://www.reddoorpizza.com.au/menu",
  hasMenuItem: menuData.flatMap((cat) =>
    cat.items.map((item) => {
      const schemaItem: Record<string, unknown> = {
        "@type": "MenuItem",
        name: item.name,
        offers: {
          "@type": "Offer",
          price: item.price.replace(/[^\d.]/g, ""),
          priceCurrency: "AUD",
        },
      };
      if (item.isVegetarian) {
        schemaItem.suitableForDiet = "https://schema.org/VegetarianDiet";
      }
      if (GF_ITEM_NAMES.has(item.name)) {
        schemaItem.suitableForDiet = "https://schema.org/GlutenFreeDiet";
      }
      if (item.description) {
        schemaItem.description = item.description;
      }
      return schemaItem;
    })
  ),
};

export default function MenuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd) }}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-brand-charcoal text-white py-16 md:py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-brand-gold text-xs font-semibold uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/10">
              Red Door Pizza · Buninyong
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mt-5 tracking-tight">
              Our Menu
            </h1>
            <p className="mt-5 text-brand-muted max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Every dish is baked in our traditional wood-fired oven using
              imported fior di latte, slow-cooked meats from the Buninyong
              Butcher, and the freshest produce from Peaches Fruit Market.
            </p>
          </div>
        </section>

        {/* Jump Menu */}
        <nav
          aria-label="Menu categories"
          className="sticky top-0 z-20 bg-brand-offwhite/95 backdrop-blur border-b border-brand-terracotta/10"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-3">
            {menuData.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="inline-flex items-center bg-white text-brand-charcoal text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full border border-brand-terracotta/20 hover:bg-brand-terracotta hover:text-white transition-colors"
              >
                {cat.category}
              </a>
            ))}
          </div>
        </nav>

        {/* Menu Categories */}
        <section className="bg-brand-offwhite py-14 md:py-20 px-6">
          <div className="max-w-7xl mx-auto space-y-16">
            {menuData.map((cat, idx) => (
              <section
                key={cat.id}
                id={cat.id}
                className={`scroll-mt-24 ${idx > 0 ? "pt-8" : ""}`}
              >
                <div className="text-center mb-8 md:mb-10">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-charcoal tracking-tight">
                    {cat.category}
                  </h2>
                  {cat.promoBanner && (
                    <p className="mt-3 inline-block bg-brand-terracotta text-brand-gold text-xs md:text-sm font-bold uppercase tracking-wider py-2.5 px-4 rounded-lg">
                      {cat.promoBanner}
                    </p>
                  )}
                  {cat.categoryNote && (
                    <p className="mt-3 text-xs text-brand-terracotta font-medium">
                      {cat.categoryNote}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.items.map((item) => (
                    <article
                      key={item.name}
                      className="bg-white border border-brand-terracotta/15 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="text-lg md:text-xl font-serif font-bold text-brand-charcoal tracking-tight">
                          {item.name}
                        </h3>
                        <span className="shrink-0 text-sm font-bold text-brand-terracotta">
                          {item.price}
                        </span>
                      </div>

                      {item.description && (
                        <p className="text-xs md:text-sm text-[#262626] leading-relaxed mt-2">
                          {item.description}
                        </p>
                      )}

                      <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
                        <div className="flex gap-1.5">
                          {item.isVegetarian && (
                            <span className="bg-brand-gold/20 text-brand-terracotta border border-brand-gold text-[10px] font-bold px-2 py-0.5 rounded">
                              V
                            </span>
                          )}
                          {GF_ITEM_NAMES.has(item.name) && (
                            <span className="bg-brand-gold/20 text-brand-terracotta border border-brand-gold text-[10px] font-bold px-2 py-0.5 rounded">
                              GF
                            </span>
                          )}
                        </div>
                        <OrderButton itemName={item.name} category={cat.category} />
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        {/* Explore Red Door */}
        <section className="py-16 px-6 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-serif text-2xl font-bold text-brand-charcoal mb-3">Enjoy Red Door at Home</h2>
            <p className="text-brand-muted text-sm mb-6 max-w-xl mx-auto">
              Our vacuum-sealed, wood-fired pizza bases are stocked at local IGAs across the Ballarat region.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/stockists" className="inline-flex items-center gap-2 bg-brand-terracotta text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brand-terracotta-dark transition-colors">
                Find a Stockist <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/locations/buninyong" className="inline-flex items-center gap-2 bg-white text-brand-charcoal text-sm font-semibold px-5 py-2.5 rounded-full border border-brand-terracotta/20 hover:bg-brand-terracotta hover:text-white transition-colors">
                Visit Us in Buninyong <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-brand-charcoal text-sm font-semibold px-5 py-2.5 rounded-full border border-brand-terracotta/20 hover:bg-brand-terracotta hover:text-white transition-colors">
                Contact &amp; Bookings <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
