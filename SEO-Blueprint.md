# Project Architecture and SEO Blueprint — Red Door Pizza

**Domain:** www.reddoorpizza.com.au | **Business:** Wood-fired pizzeria, 401 Warrenheip St, Buninyong VIC 3357, Australia

---

## 1. Project Structure

The project uses the **Next.js App Router** (`app/`) convention with a flat component folder. There is a small `config/` directory for shared constants (no separate top-level `lib/` or `utils/` folders exist).

```
reddoorpizza/
├── app/
│   ├── layout.tsx                 # Root layout — global metadata + JSON-LD
│   ├── page.tsx                   # Homepage (single-page layout with sections)
│   ├── globals.css                # Tailwind CSS v4 entry
│   ├── components/                # All UI components (flat, no sub-folders)
│   │   ├── AnnouncementBar.tsx
│   │   ├── ContactSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── FloatingOrderButton.tsx
│   │   ├── Footer.tsx
│   │   ├── FunctionsSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── MenuSection.tsx
│   │   ├── MobileStickyNav.tsx
│   │   ├── OutdoorDiningSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── USPSection.tsx
│   ├── config/
│   │   └── constants.ts           # WOWAPPS URL, phone, opening hours
│   ├── contact/
│   │   ├── page.tsx               # Contact page
│   │   └── EnquiryForm.tsx        # SMS-based enquiry form
│   ├── privacy/
│   │   └── page.tsx               # Privacy Policy
│   └── terms/
│       └── page.tsx               # Terms & Conditions
├── public/                        # Static assets (images, favicons, gallery)
│   ├── Banner.jpg
│   ├── logo.png / logo.jpg
│   ├── favicon-192x192.png / favicon-512x512.png
│   ├── OUTDOOR DINING.JPG
│   └── Gallery/img-1.webp … img-10.webp
├── next.config.ts                 # Empty (no custom config)
├── tsconfig.json
└── package.json
```

> **Note:** No dedicated `lib/` or `utils/` directories. All shared logic lives in `app/config/constants.ts`. There is **no** `robots.ts/x`, **no** `sitemap.ts/x`, and no `manifest/OG-image` configuration.

---

## 2. Routing & Pages

| Route | File | Notes |
|-------|------|-------|
| `/` (Homepage) | `app/page.tsx` | Single-page composition of 12 sections (announcement → contact) |
| `/contact` | `app/contact/page.tsx` | Contact + enquiry form + Google Maps embed |
| `/privacy` | `app/privacy/page.tsx` | Privacy Policy (10 sections) |
| `/terms` | `app/terms/page.tsx` | Terms & Conditions (11 sections) |

**Anchor routes** (not separate pages — point to homepage sections):
- `/#about` (USPSection)
- `/#menu` (MenuSection)
- `/#faq` (FAQSection)
- `/#gallery` (GallerySection)
- `/#functions` (FunctionsSection)
- `/#contact` (ContactSection)

There is **no dedicated standalone Menu page or Functions/Events page** — both exist only as homepage sections. This is a key SEO finding (single-page site + 3 subpages).

---

## 3. SEO & Metadata

### Root layout (`app/layout.tsx`)

- **`<html lang="en">`** set explicitly.
- **Google Fonts** via `next/font/google`: `Inter` + `Playfair_Display` (self-hosted, `display: swap`, proper for Core Web Vitals).
- **JSON-LD Restaurant schema** injected via a `<script type="application/ld+json">` in `<head>`.

**Global `metadata` export:**
```ts
title: "Red Door Pizza | Wood-Fired Pizza in Buninyong, VIC"
description: "Top-rated wood-fired pizzeria in Buninyong, Australia. Locally sourced meats, fresh Italian ingredients, and warm rustic dining. Rated 4.6 stars."
keywords: ["pizza","buninyong","wood-fired","red door pizza","pizzeria","victoria","ballarat"]
icons: {
  icon: [favicon-192x192.png (192x192), favicon-512x512.png (512x512)],
  apple: [favicon-192x192.png (192x192)]
}
```

> **Gap:** No `OpenGraph` tags, no `Twitter` cards, no `robots`, no `canonical`, no `alternates`, no `metadataBase`. The `<head>` is manually managed around the JSON-LD script rather than server-generated metadata.

### Per-page metadata exports

| Page | `title` | `description` |
|------|---------|---------------|
| `/contact` | `Contact Us \| Red Door Pizza Buninyong` | "Get in touch with Red Door Pizza in Buninyong. Call us, find us at 401 Warrenheip St, or send a booking, function, or general enquiry online." |
| `/privacy` | `Privacy Policy \| Red Door Pizza Buninyong` | "How Red Door Pizza collects, uses, and protects your personal information when you use our website, order online, or contact us." |
| `/terms` | `Terms & Conditions \| Red Door Pizza Buninyong` | "Terms and conditions for using the Red Door Pizza website, ordering online, and dining at our Buninyong wood-fired pizzeria." |

**Homepage (`app/page.tsx`) has NO metadata export** — it relies solely on the root layout's global metadata. No per-page `<head>`, `generateMetadata`, or `viewport` exports anywhere.

---

## 4. Structured Data (JSON-LD)

A single `application/ld+json` `Restaurant` schema is declared in `app/layout.tsx` (lines 42–69):

```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Red Door Pizza",
  "image": "https://www.reddoorpizza.com.au/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "401 Warrenheip St",
    "addressLocality": "Buninyong",
    "addressRegion": "VIC",
    "postalCode": "3357",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -37.6534,
    "longitude": 143.8821
  },
  "telephone": "0353418235",
  "priceRange": "$$",
  "servesCuisine": ["Pizza", "Italian"],
  "url": "https://www.reddoorpizza.com.au",
  "menu": "https://orders.wowapps.com/order/reddoorpizzeria",
  "sameAs": [
    "https://www.facebook.com/share/1EsfTmXM4o/?mibextid=wwXIfr",
    "https://www.instagram.com/reddoor_pizza/"
  ]
}
```

> **Gap:** No `OpeningHoursSpecification` (hours exist in code but not in schema), no `aggregateRating`/`review`, no `acceptsReservations`, no `hasMenu`/`MenuItem` entities, no `FAQPage` schema (despite a rich FAQ section), and no local `OpeningHours` structured data. The `image` URL may not resolve if `logo.png` isn't the intended OG/representative image.

---

## 5. Content & Semantic Structure

### Homepage (`app/page.tsx`) — top-level semantics

```
<div (relative hero block)>
  <AnnouncementBar/>        → div (not a banner landmark)
  <Header/>                 → <header> (desktop) + <header> (mobile)
  <Hero/>                   → <section> {h1}
</div>
<main>
  <USPSection/>             → <section id="about"> {h2}
  <OutdoorDiningSection/>   → <section> {h2}
  <MenuSection/>            → <section id="menu"> {h2 + h3s}
  <TestimonialsSection/>    → <section> {h2}
  <FAQSection/>             → <section id="faq"> {h2}
  <GallerySection/>         → <section id="gallery"> {h2}
  <FunctionsSection/>       → <section id="functions"> {h2 + h3}
  <ContactSection/>         → <section id="contact"> {h2 + h3}
</main>
<Footer/>                   → <footer>
<MobileStickyNav/>          → div
<FloatingOrderButton/>      → a
```

There is **exactly one `<h1>` on the homepage** (in Hero) — good for the homepage. Only one `<main>` element (correct).

---

### 5a. Homepage (Hero + sections) — copy

**Hero (`Hero.tsx`)**
- H1: `RED DOOR PIZZA`
- Subtitle: `Authentic Wood-Fired Pizza in Buninyong`
- CTAs: "Book a Table" (→ /contact), "Order Take Away" (→ WowApps)

**AnnouncementBar**
- "🔥 Lunch Special: $23 Wood-Fired Pizzas"
- "Open 7 Days: Mon–Thu 5pm–9pm, Fri–Sun 12pm–9pm"

**USPSection (`#about`) — "Why Buninyong Loves Us"**
- "More than just pizza — a local community hub built on authentic craft."
- **Local Buninyong Butcher:** "Slow-cooked meats sourced right down the road from Buninyong Butcher, and fresh produce from Peaches Fruit Market."
- **Outdoor Pizza Garden:** "Cosy indoor dining, relaxed lounge seating, outdoor garden, and weekend live music sessions."
- **Bake-At-Home Pizza Kits:** "Enjoy our signature wood-fired bases anytime — stocked locally at Buninyong FoodWorks."

**OutdoorDiningSection**
- Badge: "The Buninyong Courtyard"
- H2: "Dine Under the Stars in Our Rustic Beer Garden"
- Body: "Experience Buninyong's premier outdoor dining venue. Enjoy hot, wood-fired pizzas under warm festoon lighting in our spacious, family-friendly outdoor courtyard. Perfect for weekend gatherings, relaxed family dinners, and warm evening drinks."
- Feature bullets: "Family Friendly" / "Festoon Atmosphere"
- Image caption: "401 Warrenheip St Courtyard — Mon–Thu 5–9 PM · Fri–Sun 12–9 PM"
- CTA: "Book a Table"

**TestimonialsSection — "What Our Guests Say"**
- Sarah M. (Local Resident): "Hands down the best wood-fired pizza in Buninyong! The beer garden atmosphere under the fairy lights on a Friday night is unbeatable." (5★)
- David L. (Family Dinner): "Great crust, fresh toppings, and fantastic service. Kids loved sitting outdoors in the courtyard area. We'll definitely be back!" (5★)
- Emma W. (Takeaway Customer): "The Potato Pizza and Pumpkin & Beet Pizza are incredible. Fast service and always piping hot when picked up." (5★)

**FAQSection (`#faq`) — 10 Q&As** (see section 3 gap — not marked up as `FAQPage`). Highlights include: premium wood-fired quality, outdoor beer garden, family friendly, trading hours, $23 weekend lunch special, WowApps ordering, dietary options, private functions, location, courtyard reservations.

**GallerySection (`#gallery`)** — "Life at Red Door Pizza"; 10 images (`/Gallery/img-1.webp` … `img-10.webp`) with generic alt text "Red Door Pizza gallery image N".

---

### 5b. Menu Page → **MenuSection (`#menu`)** — copy & structure

No standalone menu page; the menu is one section. **Semantic structure:**
```
<section id="menu">
  {h2: "Our Menu"}
  {p: "Crafted with passion, served with pride. Every dish tells a story."}
  {button[] category filters — All, Wood-Fired Pizzas, Starters & Sides, Pasta, Kids/Teen/Seniors, Dessert, Drinks}
  {promo banner: "LUNCH SPECIAL — ALL PIZZAS $23 EACH (12–3 PM FRIDAY TO SUNDAY)"}
  {card[] → each: {h3: item name} {span: price} {p: description} {a "Order on WowApps"}}
</section>
```
> **Note:** The menu is **client-side rendered and dynamically filtered with `useState`** — on mobile only the first 6 items of the active category render until "View All" is clicked. The full menu content is NOT all present in the initial HTML/DOM for crawlers, and items are rendered via framer-motion `AnimatePresence`. **This is a significant SEO concern** (JS-dependent, partial content for bots; no separate page/slug URLs).

**Menu items (full list from code):**

*Wood-Fired Pizzas* (all $23–$33, many vegetarian-flagged): Margherita ($23), Potato ($24), Mushroom ($26), Pumpkin ($26), Pumpkin & Beet ($26), Smoked Ham ($26), Ham & Pineapple ($26), BBQ Chicken ($26), Capricciosa ($28), Shredded Pork ($29), Hot Salami ($29), Mild Salami ($29), Beef & Pumpkin ($30), Beef & Mushroom ($30), Satay Chicken ($30), Inferno ($30), Pollo Primavera ($31), The Door ($31), Lamb ($31), Lamb & Beet ($31), Meat Lovers ($33), Garlic Prawn ($33), Sweet Chilli Prawn ($33), Standard Dough Balls take-home ($4.95).

*Starters & Sides*: Wood Fired Garlic Bread ($10), Marinated Warm Olives ($12), French Fries ($12), Wood Fired Cheesy Garlic Bread ($13), Sweet Potato Fries ($15), Garlic Starter Pizza ($17), Sweet Chili Starter Pizza ($17), Loaded Fries ($18), Truffle Oil Starter Pizza ($19), Red Door Salad ($21.50).

*Pasta*: House-made Beef & Pork Lasagna ($28), Beef & Pork Spaghetti Bolognese ($28, GF +$4), Lamb Ragu ($30).

*Kids/Teen/Seniors*: Chicken Nuggets & Chips ($13), Margherita ~10" ($17), Ham ~10" ($18), Ham & Pineapple ~10" ($19).

*Dessert*: Il Piccolo Gelato (from $6.30), Dixie Cup Vanilla Ice Cream ($3.50), Biscoff Pizza ($17), Nutella & Strawberry Pizza ($18), Tiramisu ($10), Affogato ($16).

*Drinks*: Juices ($3.50/$5), Soft Drinks ($5/$12 jug), Lemon Lime Soda & Bitters ($7.50), Sparkling Mineral Water ($5/$8), Flavoured Sparkling Water ($6), Hot Coffee ($5), Hot Chocolate ($5), Tea ($4.50).

---

### 5c. Functions/Events → **FunctionsSection (`#functions`)** — copy & structure

Also a homepage section (no standalone page).

**Semantic structure:**
```
<section id="functions"> (dark bg, white text)
  {badge span: "Private Events & Functions"}
  {h2: "Host Your Next Event at Red Door"}
  {p: description}
  {ul → li[] bullet list ×4}
  {div card → {h3: "Enquire Now"} + <form> (client-side, non-functional server-side)}
</section>
```

**Copy:**
- H2: "Host Your Next Event at Red Door"
- Description: "From intimate gatherings to weddings, corporate events, and local fundraisers — our rustic venue and dedicated team will make your occasion unforgettable."
- Bullets:
  - "Flexible seating for 30–120 guests"
  - "Custom menu packages available"
  - "Full bar & beverage packages"
  - "Live music & entertainment options"
- Form card H3: "Enquire Now" with fields: Name, Email, Phone, Event Type (Wedding/Corporate/Birthday/Fundraiser/Other), Guest count, Message → "Send Enquiry" button.

> **Note:** The homepage `FunctionsSection` form is **not wired to a backend/handler** — it's a presentational form. The actual working enquiry submission is the `/contact` `EnquiryForm` which uses an **`sms:` deep-link** (`window.location.href = "sms:0353418235?&body=…"`), not an HTTP API/email. This is relevant for both UX and content crawlability.

---

## 6. External Integrations — WowApps Ordering

The WowApps ordering system (`https://orders.wowapps.com/order/reddoorpizzeria`, defined once in `app/config/constants.ts` as `WOWAPPS_ORDER_URL`) is integrated **purely via standard outbound `<a>` links with `target="_blank"` + `rel="noopener noreferrer"`** — there is **NO embedded script, iframe, widget, or API call** to WowApps.

Occurrences of the WowApps link:
1. `Hero.tsx` — "Order Take Away" button (framer-motion `<motion.a>`).
2. `MenuSection.tsx` — per-menu-item "Order on WowApps" `<a>` with `aria-label="Order {name} on WowApps"` (one per item, opening a new tab per item).
3. `Header.tsx` — desktop "Order Online" button + mobile drawer "Order Online" button.
4. `FloatingOrderButton.tsx` — floating desktop "Order Online" CTA.
5. `MobileStickyNav.tsx` — mobile sticky "Order" button.
6. `ContactSection.tsx` — "Order Online Now" button.
7. `Footer.tsx` — "Order Online" quick link.
8. `layout.tsx` — referenced in JSON-LD `menu` field.

**Key observation:** Every ordering CTA routes users **away to a third-party domain** with a generic `rel="noopener noreferrer"` (no `rel="nofollow"`). There's no internal order flow, and talented SEO opportunity exists in that the menu content is duplicated externally on WowApps.

---

## 7. Tech Stack (from `package.json`)

**Framework:**
- `next`: **16.3.1** (App Router, React 19)
- `react` / `react-dom`: **19.2.8**

**UI / animation / icons:**
- `tailwindcss`: **^4** (+ `@tailwindcss/postcss`) — CSS-first, utility classes inline in every component
- `framer-motion`: **^13.1.0** — scroll animations & layout transitions
- `lucide-react`: **^1.31.0** — icon set

**Dev tooling:**
- TypeScript `^5`, ESLint `^9` + `eslint-config-next` 16.3.1, `@types/*`

**No SEO-specific libraries** (no `next-sitemap`, no `@next/og`, no structured-data helper, no analytics/tracking, no CMS). All SEO is hand-rolled via Next metadata + manual JSON-LD.

---

## Key SEO Findings / Recommendations Summary

1. **Single-page architecture** — Menu & Functions have no dedicated crawlable URLs; consider dedicated pages (e.g. `/menu`, `/functions`) or ensure content is fully server-rendered for bots.
2. **JS-dependent menu** — `MenuSection` hides most items behind client-side filtering & "View All"; crawlers may not index the full menu text. No per-item URLs.
3. **No sitemap.xml or robots.txt** in the project.
4. **No Open Graph / Twitter / social share metadata; no `metadataBase`, `canonical`, or `alternates`.**
5. **JSON-LD under-utilized** — no `OpeningHoursSpecification`, `aggregateRating`, `acceptsReservations`, `FAQPage`, or `hasMenu`. `Restaurant` schema is solid but could be extended.
6. **Menu prices/data live in React constants**, not structured data — a full menu in schema would improve rich results.
7. **WowApps is a link-out only** — no embedded ordering; consider adding `nofollow`/analytics tracking.
8. **Contact/Function forms are SMS-based** (`sms:` deep link) or non-functional — no server/HTTP endpoint; verify support/UX.
9. **Generic gallery alt text** ("Red Door Pizza gallery image N") — replace with descriptive, keyword-relevant alts.
10. **Single H1 per page, single `<main>`** — structure is otherwise clean and semantic.
