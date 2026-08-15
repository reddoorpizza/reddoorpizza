"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

interface MenuItem {
  name: string;
  description?: string;
  price: string;
  tags: string[];
  category: string;
}

interface CategoryData {
  category: string;
  categoryNote?: string;
  promoBanner?: string;
  items: {
    name: string;
    description?: string;
    price: string;
    isVegetarian?: boolean;
  }[];
}

const menuData: CategoryData[] = [
  {
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
        description:
          "Tomato sauce, potatoes, rosemary, parmesan & rocket",
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
        description:
          "Fries, cheese, sour cream, sweet chilli sauce, spring onion",
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
    category: "Pasta",
    items: [
      { name: "House-made Beef & Pork Lasagna", price: "$28" },
      {
        name: "Beef & Pork Spaghetti Bolognese",
        description: "GF Option available (+$4)",
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
    category: "Kids/Teen/Seniors",
    categoryNote:
      "ADD KIDS juice/soft drink cup & dixie cup vanilla ice cream for $5",
    items: [
      { name: "Chicken Nuggets & Chips", price: "$13" },
      {
        name: "Margherita (approx. 10\")",
        description: "Tomato sauce, mozzarella",
        price: "$17",
      },
      {
        name: "Ham (approx. 10\")",
        description: "Tomato sauce, mozzarella & smoked ham",
        price: "$18",
      },
      {
        name: "Ham & Pineapple (approx. 10\")",
        description: "Tomato sauce, mozzarella, smoked ham & pineapple",
        price: "$19",
      },
    ],
  },
  {
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

const categories = [
  { id: "All", label: "All" },
  ...menuData.map((c) => ({ id: c.category, label: c.category })),
];

function flattenItems(): MenuItem[] {
  return menuData.flatMap((cat) =>
    cat.items.map((item) => ({
      name: item.name,
      description: item.description,
      price: item.price,
      tags: item.isVegetarian ? ["V"] : [],
      category: cat.category,
    }))
  );
}

const allItems = flattenItems();

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("Wood-Fired Pizzas");
  const [showAll, setShowAll] = useState(false);
  const MOBILE_LIMIT = 6;

  const filteredItems = allItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, MOBILE_LIMIT);

  const activeCatData = menuData.find((c) => c.category === activeCategory);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setShowAll(false);
  };

  return (
    <section id="menu" className="py-8 md:py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-[#ac511a] tracking-tight mb-3">
            Our Menu
          </h2>
          <p className="text-sm md:text-base text-[#1A1A1A]/70 max-w-xl mx-auto font-sans">
            Crafted with passion, served with pride. Every dish tells a story.
          </p>
        </motion.div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-[#ac511a] text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900 border border-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Promo Banner */}
        {activeCatData?.promoBanner && (
          <div className="bg-[#ac511a] text-[#eccb57] text-center text-xs md:text-sm font-bold uppercase tracking-wider py-2.5 px-4 rounded-lg mb-8">
            {activeCatData.promoBanner}
          </div>
        )}

        {/* Category Note */}
        {activeCatData?.categoryNote && (
          <p className="text-center text-xs text-[#ac511a] font-medium mb-8 font-sans">
            {activeCatData.categoryNote}
          </p>
        )}

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {visibleItems.map((item) => (
              <motion.div
                key={item.name}
                layout
                className="bg-white border border-[#ac511a]/15 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 antialiased"
              >
                {/* Top: Title + Price */}
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-lg md:text-xl font-serif font-bold text-[#ac511a] tracking-tight">
                    {item.name}
                  </h3>
                  <span className="shrink-0 text-sm font-bold text-[#ac511a] font-sans">
                    {item.price}
                  </span>
                </div>

                {/* Description */}
                {item.description && (
                  <p className="text-xs md:text-sm text-[#262626] font-normal leading-relaxed mt-2 font-sans">
                    {item.description}
                  </p>
                )}

                {/* Bottom: Tags + Order */}
                <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
                  <div className="flex gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#eccb57]/20 text-[#ac511a] border border-[#eccb57] text-[10px] font-bold px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="min-h-[44px] flex items-center gap-1 bg-[#ac511a] text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-sm hover:bg-[#c05c1e] transition-all duration-200">
                    <Plus className="w-3.5 h-3.5" />
                    Order
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Button - Mobile */}
        {!showAll && filteredItems.length > MOBILE_LIMIT && (
          <div className="md:hidden my-6 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="bg-[#ac511a] text-white font-bold py-3 px-8 rounded-full text-xs uppercase shadow-md hover:bg-[#c05c1e] transition-colors"
            >
              View All {activeCategory === "All" ? "Items" : activeCategory}
            </button>
          </div>
        )}

        {filteredItems.length === 0 && (
          <p className="text-center text-[#1A1A1A]/40 py-12 text-lg font-sans">
            No items in this category.
          </p>
        )}
      </div>
    </section>
  );
}
