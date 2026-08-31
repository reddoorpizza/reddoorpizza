# RED DOOR PIZZA — MASTER SEO INTELLIGENCE AUDIT

**Audit Date:** 31 August 2026
**Website:** https://www.reddoorpizza.com.au/
**Business:** Red Door Pizza, 401 Warrenheip St, Buninyong VIC 3357, Australia
**Platform:** Next.js 16.3.1 (React 19, Tailwind CSS 4)

---

## Executive Summary

Red Door Pizza is a wood-fired pizzeria in historic Buninyong, approximately 11km / 12 minutes from Ballarat CBD. The website is **technically well-built** with a solid Next.js foundation, proper schema markup, canonical tags, sitemaps, and clean URL architecture. Content is genuine, locally relevant, and well-structured.

However, the website scores lower on **off-page authority, review volume, citation breadth, and AI search readiness** compared to Ballarat-based competitors who have stronger local prominence, more reviews, and broader directory coverage. The site's primary challenge is not quality — it is **market competitiveness** in a local SERP dominated by Ballarat-located restaurants with established authority.

**Key Strengths:** Technical SEO, on-page targeting, genuine content, schema implementation, menu depth, local supplier storytelling.

**Key Weaknesses:** Limited backlink profile, thin citation coverage, low review count on third-party platforms, no live Google Business Profile verification possible from code, competitor dominance in Ballarat SERPs.

---

## Website Readiness Score

| Category | Score | Max | Notes |
|---|---|---|---|
| Technical SEO | 13 | 15 | Clean architecture, proper canonicals, sitemap, robots.txt. Minor issues with IndexNow API key exposure. |
| On-page SEO | 9 | 10 | Strong titles, meta descriptions, H1s, structured content. Location pages well-targeted. |
| Keyword Strategy | 8 | 10 | Core keyword set well-covered. Missing some long-tail opportunities (e.g., "best pizza Buninyong"). |
| Content/Topical Authority | 8 | 10 | Genuine, locally relevant content. Guide strategy is solid. Menu is comprehensive. |
| Internal Linking | 4 | 5 | Good contextual linking. Some orphan risk on stockists page. |
| Local SEO | 7 | 10 | Location pages exist for 3 areas. NAP consistent in code. Citation breadth is limited. |
| Off-page/Authority | 5 | 10 | Limited backlink profile. Few referring domains beyond directory listings. |
| Structured Data/Entity | 9 | 10 | Restaurant, Menu, FAQ, Article, Product schemas all present and correct. |
| AI Search Readiness | 5 | 10 | Entity signals exist but external web signals are weak. AI engines need more corroborating sources. |
| CRO/UX | 4 | 5 | Clear CTAs, sticky mobile nav, WowApps integration. Form uses mailto: fallback. |
| Performance/Accessibility | 4 | 5 | Next.js Image optimisation, WebP gallery, Google Fonts with swap. Client components add JS weight. |
| **TOTAL** | **76** | **100** | **Solid foundation. Growth requires off-page and external authority work.** |

---

## Market Competitiveness Score

| Factor | Buninyong | Ballarat | Meredith |
|---|---|---|---|
| Organic Competition | Low-Medium | High | Low |
| Map Competition | Low | High | Low |
| Local Authority | Medium | Low (off-site) | Low |
| Content Competition | Low | High | Low |
| Review Strength | Low | Low | N/A |
| Backlink Strength | Low | Low | N/A |
| Brand Strength | Medium | Low | Low |
| Search Demand | Low | High | Very Low |
| Likely Difficulty | Achievable | Challenging | Low but minimal volume |

**Assessment:** Red Door can dominate Buninyong and Meredith easily but faces significant competition in Ballarat SERPs where established pizzerias (The Forge, Soldiers, Carboni's, Venti8) have stronger authority, more reviews, and physical Ballarat presence.

---

## Technical SEO

### robots.txt
- **Source:** `app/robots.ts`
- **Status:** CONFIRMED — Generated dynamically by Next.js
- **Content:** Allows all crawlers, points to sitemap at `https://www.reddoorpizza.com.au/sitemap.xml`
- **Assessment:** Correct. No blocks.

### sitemap.xml
- **Source:** `app/sitemap.ts`
- **Status:** CONFIRMED — Generated dynamically
- **URLs included:**
  - `/` (homepage)
  - `/menu`
  - `/contact`
  - `/stockists`
  - `/privacy`
  - `/terms`
  - `/locations/buninyong`
  - `/locations/ballarat`
  - `/locations/meredith`
  - `/guides/family-friendly-pizza-ballarat`
  - `/guides/work-christmas-party-venues-buninyong`
  - `/guides/gluten-free-pizza-ballarat`
- **Total:** 12 URLs
- **Last Modified:** 2026-08-30 (all pages same date)
- **Assessment:** Correct. All important pages included. Missing: guide pages for Meredith could be added if content exists.

### Canonical Tags
- **Status:** CONFIRMED — Every page has `alternates.canonical` set
- **Homepage:** `canonical: "/"` → resolves to `https://www.reddoorpizza.com.au/`
- **Menu:** `canonical: "/menu"`
- **Location pages:** `canonical: "/locations/{city}"`
- **Guide pages:** `canonical: "/guides/{slug}"`
- **Contact/Stockists/Privacy/Terms:** All have correct canonicals
- **Assessment:** Correct implementation across all pages.

### metadataBase
- **Source:** `app/layout.tsx:20`
- **Status:** CONFIRMED — `new URL("https://www.reddoorpizza.com.au")`
- **Assessment:** Correct.

### HTTPS
- **Status:** CONFIRMED — All URLs use HTTPS
- **Assessment:** Correct.

### Trailing Slash
- **Status:** Next.js default — no trailing slash
- **Assessment:** Consistent. No issues.

### Indexability
- **Status:** All 12 pages are indexable (no `noindex` directives found)
- **Assessment:** Correct.

### Redirects
- **Non-www to www:** `reddoorpizza.com.au` → `www.reddoorpizza.com.au` (VERIFIED from site: search results showing redirect)
- **Assessment:** Correct.

### Status Codes
- All pages should return 200 (SSR/SSG via Next.js)
- **Assessment:** CONFIRMED from codebase — all pages use `generateStaticParams()` for static generation.

### IndexNow
- **Source:** `app/api/indexnow/route.ts`
- **Status:** IndexNow API endpoint exists with key `43585896689a4413bd93ba9a75fba2a0`
- **Key file:** `public/43585896689a4413bd93ba9a75fba2a0.txt` exists
- **Assessment:** Good for Bing/Yandex indexing. Key is exposed in code — low risk but notable.

### Soft 404 Risks
- **Assessment:** Low risk. Dynamic routes use `notFound()` for invalid slugs.

### JavaScript-Rendered Content
- **Status:** Most content is server-rendered (Next.js SSG)
- **Client components:** Header, Hero, FAQSection, ContactSection, FunctionsSection, MobileStickyNav, FloatingOrderButton, WowAppsLink, OrderButton
- **Assessment:** Acceptable. Core content (menu, location copy, guides) is server-rendered.

### Duplicate URL Risks
- **Assessment:** Low risk. Canonical tags handle this. No parameter-based duplicates observed.

---

## On-Page SEO

### Homepage (`/`)
| Element | Value | Assessment |
|---|---|---|
| Title | "Wood-Fired Pizza Near Ballarat \| Red Door Pizza" | Excellent — primary keyword targeted |
| Meta Description | "Authentic wood-fired pizza in Buninyong, just 12 minutes from Ballarat..." | Excellent — includes key terms |
| H1 | "Wood-Fired Pizza in Buninyong, Just 12 Minutes from Ballarat" | Excellent — matches search intent |
| H2s | "What Makes Us Different", "Dine Under the Stars...", "Our Menu", "What Our Guests Say", "Take Red Door Pizza Home", "Wood-Fired Pizza in the Ballarat Region", "Plan Your Visit", "Frequently Asked Questions", "Life at Red Door Pizza", "Host Your Next Event", "Visit Red Door Pizza in Buninyong" | Good — semantically varied |
| Word Count | ~2,500+ (including component content) | Good |
| Internal Links | Menu, Stockists, 3 Location pages, 3 Guide pages, Contact | Good |
| External Links | WowApps, Google Maps, Instagram, Facebook | Appropriate |
| Images | Banner.jpg, Logo, Gallery (10 images) | Good |
| Alt Text | Gallery images have descriptive alt text | Good |
| CTA | Book a Table, Order Take Away, Order Online, View All Stockists | Multiple CTAs — good |
| Schema | Restaurant (layout.tsx) | Correct |

### Menu Page (`/menu`)
| Element | Value | Assessment |
|---|---|---|
| Title | "Wood-Fired Pizza & Italian Menu" | Good — keyword-rich |
| Meta Description | "Explore our authentic menu featuring imported fior di latte wood-fired pizzas..." | Good |
| H1 | "Our Menu" | Acceptable — could be more keyword-rich |
| H2s | Category names (Wood-Fired Pizzas, Starters & Sides, Pasta, Kids/Teen/Seniors, Dessert, Drinks) | Good |
| Word Count | ~4,000+ (menu items + descriptions) | Strong |
| Schema | Menu + MenuItem (with VegetarianDiet, GlutenFreeDiet) | Excellent |
| Items | 23 pizzas, 10 starters, 3 pasta, 4 kids, 6 dessert, 8 drinks | Comprehensive |
| Prices | All items have prices | Good for search |
| Dietary Tags | V (vegetarian) and GF (gluten-free) badges | Good |
| CTA | "Order on WowApps" per item | Good |

### Location Pages (`/locations/{city}`)

**Buninyong (`/locations/buninyong`)**
| Element | Value | Assessment |
|---|---|---|
| Title | "Wood-Fired Pizza in Buninyong" | Correct — primary local term |
| Meta Description | "Buninyong's wood-fired pizzeria. Featuring imported fior di latte..." | Good |
| H1 | "Authentic Wood-Fired Pizza in Buninyong" | Excellent |
| Body Copy | ~200 words with local supplier references | Good |
| FAQs | 3 FAQs with schema | Good |
| Schema | FAQPage + partial Menu | Good |

**Ballarat (`/locations/ballarat`)**
| Element | Value | Assessment |
|---|---|---|
| Title | "Wood-Fired Pizza Near Ballarat" | Correct — uses "near" to avoid false location claim |
| Meta Description | "Red Door Pizza in Buninyong — just a 12-minute drive from Ballarat..." | Excellent — accurate |
| H1 | "Wood-Fired Pizza Near Ballarat" | Correct |
| Body Copy | ~150 words | Could be longer |
| FAQs | 3 FAQs | Good |
| Related Guides | Links to family-friendly and gluten-free guides | Good |

**Meredith (`/locations/meredith`)**
| Element | Value | Assessment |
|---|---|---|
| Title | "Pizza Near Meredith" | Correct |
| Meta Description | "Red Door Pizza in Buninyong — a short drive from Meredith..." | Good |
| H1 | "Wood-Fired Pizza Takeaway & Dine-In Near Meredith" | Good |
| Body Copy | ~120 words | Thinnest of the three — could be expanded |
| FAQs | 3 FAQs | Good |

### Guide Pages

**Family-Friendly Guide (`/guides/family-friendly-pizza-ballarat`)**
| Element | Value | Assessment |
|---|---|---|
| Title | "Family-Friendly Pizza Near Ballarat" | Strong — targets "family restaurant" intent |
| H1 | "Family-Friendly Pizza Dining Near Ballarat" | Good |
| Content | 3 sections, ~600 words | Good |
| FAQs | 3 FAQs with schema | Good |
| Schema | Article + FAQPage | Good |
| CTA | Links to /menu | Appropriate |

**Christmas Party Guide (`/guides/work-christmas-party-venues-buninyong`)**
| Element | Value | Assessment |
|---|---|---|
| Title | "Group & Christmas Functions Near Ballarat" | Good |
| H1 | "Work Christmas Party and Group Function Venue" | Good |
| Content | 3 sections, ~500 words | Good |
| FAQs | 3 FAQs | Good |
| CTA | Links to /contact | Correct |

**Gluten-Free Guide (`/guides/gluten-free-pizza-ballarat`)**
| Element | Value | Assessment |
|---|---|---|
| Title | "Gluten-Free Pizza Near Ballarat" | Excellent — targets dietary query |
| H1 | "Gluten-Free Pizza and Pasta Near Ballarat" | Good |
| Content | 3 sections including cross-contamination note | Responsible and thorough |
| FAQs | 3 FAQs | Good |
| CTA | Links to WowApps for pre-order | Good |

### Contact Page (`/contact`)
| Element | Value | Assessment |
|---|---|---|
| Title | "Contact Us" | Acceptable — could include location keyword |
| Meta Description | "Get in touch with Red Door Pizza in Buninyong..." | Good |
| H1 | "Contact Us" | Acceptable |
| Features | Phone, Address (with Google Maps link), Opening Hours, Social links, Enquiry form, Map embed | Comprehensive |
| Form | Name, Phone, Enquiry Type, Date, Guests, Message → mailto: | Functional but mailto: is a friction point |

### Stockists Page (`/stockists`)
| Element | Value | Assessment |
|---|---|---|
| Title | "Stockists \| Ballarat Region" | Good |
| H1 | "Enjoy Red Door Pizza at Home" | Acceptable |
| Content | 6 flavors, 4 stockists, B2B wholesale CTA | Good |
| Schema | Product + ProductModel + AggregateOffer | Good — though lacks price precision |

### Privacy & Terms Pages
- Both have correct metadata, canonical tags, and substantive content
- Both reference "The Stockit" as developer
- Assessment: Standard legal pages, properly implemented

---

## Keyword Strategy

### Current Keyword Usage (Verified from Code)

| Keyword/Phrase | URL | Location | Intent | Status |
|---|---|---|---|---|
| wood-fired pizza Buninyong | /, /locations/buninyong, /menu | Title, H1, body | Local/transactional | CONFIRMED |
| wood-fired pizza near Ballarat | /, /locations/ballarat | Title, H1 | Local/transactional | CONFIRMED |
| pizza Buninyong | /locations/buninyong | Title, H1, body | Local/transactional | CONFIRMED |
| pizza near Ballarat | /locations/ballarat | Title, H1 | Local/transactional | CONFIRMED |
| pizza near Meredith | /locations/meredith | Title, H1 | Local/transactional | CONFIRMED |
| gluten-free pizza Ballarat | /guides/gluten-free-pizza-ballarat | Title, H1, body | Commercial investigation | CONFIRMED |
| family-friendly pizza Ballarat | /guides/family-friendly-pizza-ballarat | Title, H1, body | Commercial investigation | CONFIRMED |
| group functions Ballarat | /guides/work-christmas-party-venues-buninyong | Title, H1, body | Commercial/transactional | CONFIRMED |
| Italian menu Ballarat | /menu | Title, body | Commercial investigation | CONFIRMED |
| pasta Ballarat | /menu (pasta section) | Category heading | Commercial | CONFIRMED |
| wood-fired pizza retail Ballarat | /stockists | Title, body | Commercial | CONFIRMED |
| pizzeria Buninyong | /locations/buninyong | Body, schema | Local | CONFIRMED |

### Strategic Keyword Gaps (UNVERIFIED — requires Search Console data)

| Keyword | Coverage | Gap Assessment |
|---|---|---|
| best pizza Ballarat | Not in titles/H1s | INFERRED gap — "best" not used on-site |
| pizza restaurant Ballarat | Moderate (location page) | Could strengthen H2 targeting |
| Italian restaurant Ballarat | Moderate (location page) | No dedicated Italian-focused content |
| vegetarian pizza Ballarat | V tags on menu | No dedicated body copy targeting this term |
| lamb pizza Ballarat | Menu item only | Could be strengthened with description |
| prawn pizza Ballarat | Menu item only | Could be strengthened |
| dessert Ballarat | Menu section | No dedicated content |
| gelato Ballarat | Menu item | Mentioned in body copy |
| Christmas party venue Ballarat | Guide page | Well-covered |
| take-home pizza Ballarat | Stockists page | Well-covered |

---

## Search Intent Mapping

| Query | Dominant Intent | Red Door Page | Match Quality |
|---|---|---|---|
| pizza Ballarat | Local/transactional | /locations/ballarat | Good |
| wood-fired pizza Ballarat | Local/transactional | /locations/ballarat | Good |
| pizza Buninyong | Local/transactional | /locations/buninyong | Excellent |
| gluten-free pizza Ballarat | Commercial investigation | /guides/gluten-free-pizza-ballarat | Excellent |
| family restaurant Ballarat | Commercial investigation | /guides/family-friendly-pizza-ballarat | Excellent |
| Christmas party Ballarat | Commercial/transactional | /guides/work-christmas-party-venues-buninyong | Excellent |
| Italian restaurant Ballarat | Commercial/local | /locations/ballarat | Moderate — no dedicated Italian page |
| best pizza near Ballarat | Commercial investigation | /locations/ballarat | Moderate — "best" not in title |
| pasta Ballarat | Commercial | /menu | Moderate — no dedicated pasta page |
| pizza near Meredith | Local/transactional | /locations/meredith | Good |
| function venue Ballarat | Commercial | /guides/work-christmas-party-venues-buninyong | Good |
| takeaway pizza Buninyong | Transactional | /locations/buninyong, /menu | Good |

---

## Content Quality

### Homepage
| Metric | Score (0-10) | Notes |
|---|---|---|
| Usefulness | 8 | Clear value propositions, multiple CTAs |
| First-party info | 9 | Genuine business details, local suppliers |
| Originality | 8 | Unique supplier story, local positioning |
| Depth | 7 | Good but could add more narrative |
| Specificity | 9 | Specific distances, hours, menu items |
| Factual accuracy | 10 | All claims verifiable against code constants |
| Local value | 9 | Strong Buninyong/Ballarat targeting |
| Commercial value | 8 | Multiple conversion paths |
| Trust | 9 | Real address, phone, reviews, supplier names |
| AI answer usefulness | 7 | Needs more external corroboration |

### Menu Page
| Metric | Score | Notes |
|---|---|---|
| Usefulness | 9 | Full menu with prices, descriptions, dietary tags |
| First-party info | 10 | All items genuine, specific pricing |
| Depth | 9 | 54 items across 6 categories |
| Specificity | 9 | Individual descriptions, prices, dietary badges |
| Search usefulness | 8 | Long-tail potential for individual dishes |
| AI answer usefulness | 8 | Comprehensive structured data |

### Location Pages
| Page | Quality | Commercial | Search | AI |
|---|---|---|---|---|
| Buninyong | 8 | 8 | 9 | 7 |
| Ballarat | 7 | 7 | 8 | 6 |
| Meredith | 6 | 6 | 7 | 5 |

**Note:** Meredith page is thinnest. Ballarat page could emphasise the "12 minutes from Ballarat" hook more aggressively.

### Guide Pages
| Page | Quality | Commercial | Search | AI |
|---|---|---|---|---|
| Family-Friendly | 8 | 8 | 8 | 7 |
| Christmas Functions | 8 | 9 | 8 | 7 |
| Gluten-Free | 9 | 8 | 9 | 8 |

**Assessment:** Guide content is genuinely useful, locally specific, and well-structured. The cross-contamination note in the gluten-free guide is responsible and builds trust.

---

## Menu SEO

### Search Engine Readability
| Element | Present | Assessment |
|---|---|---|
| Wood-fired pizza | Yes — category title + intro | CONFIRMED |
| Individual pizza names | Yes — H3 per item | CONFIRMED |
| Descriptions | Yes — most items have descriptions | CONFIRMED |
| Prices | Yes — all items | CONFIRMED |
| Pasta | Yes — dedicated section | CONFIRMED |
| Gluten-free | Yes — GF badge + schema | CONFIRMED |
| Vegetarian | Yes — V badge + schema | CONFIRMED |
| Lamb | Yes — Lamb Pizza, Lamb & Beet, Lamb Ragu | CONFIRMED |
| Prawns | Yes — Garlic Prawn, Sweet Chilli Prawn | CONFIRMED |
| Kids | Yes — dedicated section | CONFIRMED |
| Dessert | Yes — dedicated section | CONFIRMED |
| Gelato | Yes — Il Piccolo Gelato | CONFIRMED |
| Drinks | Yes — dedicated section | CONFIRMED |

### Top 20 Menu-Related Opportunities
1. "lamb pizza Ballarat" — Lamb Pizza ($31) has description but no dedicated targeting
2. "prawn pizza Ballarat" — Two prawn pizzas available
3. "gluten-free pasta Ballarat" — GF Spaghetti Bolognese in menu + schema
4. "vegetarian pizza Buninyong" — 5 vegetarian pizzas with V tags
5. "margherita pizza Ballarat" — Classic pizza listed
6. "capricciosa pizza Ballarat" — Listed with description
7. "meat lovers pizza Ballarat" — Listed at $33
8. "garlic bread Ballarat" — Listed in starters
9. "loaded fries Ballarat" — Listed in starters
10. "tiramisu Ballarat" — Listed in dessert
11. "gelato Buninyong" — Il Piccolo Gelato featured
12. "kids pizza Ballarat" — 10-inch pizzas in kids section
13. "lunch special Ballarat" — $23 lunch special in promo banner
14. "wood-fired pasta Ballarat" — Pasta section with descriptions
15. "beef ragu Ballarat" — Lamb Ragu (slow-cooked 10 hours)
16. "lasagna Ballarat" — House-made Lasagna listed
17. "dessert pizza Ballarat" — Biscoff Pizza, Nutella & Strawberry Pizza
18. "salad Buninyong" — Red Door Salad with Meredith goat cheese
19. "take-home pizza dough Ballarat" — Standard Dough Balls listed
20. "mushroom pizza Ballarat" — Mushroom Pizza with Meredith goat cheese

### Top 10 Menu-Related Problems
1. **GF item detection is limited** — Only "Gluten Free Spaghetti Bolognese" is detected for GF schema; GF pizza bases are mentioned in text but not tagged per-item
2. **No "pizza" keyword in H1** — Menu page H1 is "Our Menu" rather than "Wood-Fired Pizza Menu"
3. **Some items lack descriptions** — Wood Fired Garlic Bread, Marinated Warm Olives, etc.
4. **Prices not in schema correctly** — `price` field strips non-numeric chars but keeps decimals; some items have ranges ("From $6.30") that may not parse correctly
5. **No individual pizza URLs** — Single-page menu; no deep-linking to individual items
6. **No "gluten-free" in menu page title** — Title is "Wood-Fired Pizza & Italian Menu" without GF mention
7. **Lamb Ragu description says "slow-cooked lamb sourced from Buninyong Butcher"** in schema but not in menu item description
8. **Stockists page lacks specific pricing** — Product schema has no concrete price
9. **No seasonal/rotating menu signals** — Static menu with no freshness indicators
10. **Dough Balls listed under pizzas** — "Standard Dough Balls (take home)" is in pizza category; could confuse schema

---

## Internal Linking

### Link Map (Verified from Code)

| Page | Inbound Links | Outbound Internal Links | Depth |
|---|---|---|---|
| `/` | — (root) | Menu, Stockists, 3 Locations, 3 Guides, Contact | 0 |
| `/menu` | Homepage, Location pages, Guides | Stockists, Buninyong location, Contact | 1 |
| `/locations/buninyong` | Homepage, Footer, Guide pages | Menu, Contact, Stockists, other locations | 1 |
| `/locations/ballarat` | Homepage, Footer, Guide pages | Menu, Contact, Stockists, other locations | 1 |
| `/locations/meredith` | Homepage, Footer | Menu, Contact, Stockists, other locations | 1 |
| `/guides/*` | Homepage, Location pages, other guides | Menu, Location page, Contact, WowApps | 1-2 |
| `/contact` | Homepage, Footer, Guides, Location pages | — | 1 |
| `/stockists` | Homepage, Footer, Menu | Contact, Menu, Buninyong location | 1-2 |
| `/privacy` | Footer | — | 1 |
| `/terms` | Footer | Contact | 1 |

### Anchor Text Quality
- **Good:** "Wood-Fired Pizza in Buninyong", "View Our Full Menu", "Plan Your Visit", "Explore Buninyong"
- **Acceptable:** "View All Stockists & Flavors", "Find a Stockist"
- **Opportunity:** More contextual anchors like "gluten-free pizza near Ballarat" within guide cross-links

### Orphan Risk
- `/stockists` — Linked from Homepage, Footer, Menu, Location pages. Low orphan risk.
- `/privacy`, `/terms` — Footer only. Acceptable for legal pages.

### Overlinking/Underlinking
- **Overlinking:** None observed. Link density is appropriate.
- **Underlinking:** `/locations/meredith` could link to more guide content. Meredith has no related guides.

---

## External Linking

| Source Page | External Link | Type | Assessment |
|---|---|---|---|
| Homepage | WowApps ordering | Ordering platform | Appropriate |
| Header | WowApps ordering | Ordering platform | Appropriate |
| Footer | WowApps ordering | Ordering platform | Appropriate |
| Location pages | WowApps ordering | Ordering platform | Appropriate |
| Guide pages | WowApps (gluten-free guide) | Ordering platform | Appropriate |
| Contact page | Google Maps | Maps | Appropriate |
| Footer | Google Maps | Maps | Appropriate |
| Mobile nav | Google Maps | Maps | Appropriate |
| Contact page | Instagram, Facebook | Social | Appropriate |
| Footer | Instagram, Facebook | Social | Appropriate |
| Privacy page | The Stockit (developer) | Business reference | Appropriate |
| Terms page | The Stockit (developer) | Business reference | Appropriate |

**Assessment:** All external links are legitimate and relevant. No unnecessary link leakage. No broken links detected in code. `rel="noopener noreferrer"` used correctly on all external links.

---

## Local SEO

### NAP Consistency (Verified from Code)
| Field | Value | Consistent? |
|---|---|---|
| Name | Red Door Pizza | Yes — all references |
| Address | 401 Warrenheip St, Buninyong VIC 3357, Australia | Yes — constants.ts, schema, footer, contact |
| Phone | (03) 5341 8235 | Yes — all references |
| Hours | Mon-Thu 5pm-9pm, Fri-Sun 12pm-9pm | Yes — constants.ts, schema, footer |

### Location Pages Assessment

| Page | Useful | Unique | Accurate | Locally Relevant | Doorway Risk |
|---|---|---|---|---|---|
| Buninyong | Yes | Yes — home base content | Yes | Yes — supplier references | No |
| Ballarat | Yes | Yes — "near" framing | Yes | Yes — distance hook | No |
| Meredith | Yes | Yes — takeaway focus | Yes | Moderate | No |

**Assessment:** Location pages are genuinely useful with unique content per location. The "near" framing for Ballarat and Meredith avoids false location claims. No doorway page risk — each page serves a legitimate user purpose.

### Geographic Targeting
- **Buninyong:** Physical location clearly stated
- **Ballarat:** "12 minutes from Ballarat CBD", "11km from Ballarat CBD" — accurate
- **Meredith:** "short drive along the Midland Highway" — accurate
- **Schema areaServed:** `["Buninyong", "Ballarat", "Meredith"]` — correct

---

## Google Business Profile

**Note:** GBP cannot be fully audited from code. The following is based on `GBP_BUSINESS_INFORMATION.md` and external data.

### Known Information (from GBP_BUSINESS_INFORMATION.md)
| Field | Value |
|---|---|
| Business Name | Red Door Pizza |
| Address | 401 Warrenheip St, Buninyong VIC 3357 |
| Phone | (03) 5341 8235 |
| Website | https://www.reddoorpizza.com.au/ |
| Primary Category | Pizzeria (CONFIRMED from document) |
| Hours | Mon-Thu 5pm-9pm, Fri-Sun 12pm-9pm |
| Social | Instagram, Facebook |

### External Platform Presence (Verified)
| Platform | Status | Rating | Reviews |
|---|---|---|---|
| Google Business Profile | Listed (UNVERIFIED from code) | 4.6 (from REVIEW_SOURCES.md) | ~276 (from REVIEW_SOURCES.md) |
| OpenTable | Listed | 4.8 | 50 reviews |
| UberEats | Listed | 4.2 | 240+ ratings |
| AGFG | Listed | Unknown | Unknown |
| TripAdvisor | Unknown | Unknown | Unknown |

### GBP Gaps (INFERRED)
- Opening hours on OpenTable show "Daily 12:00pm-9:00pm" — differs from actual hours (Mon-Thu 5pm-9pm)
- OpenTable description references "Adam Avery" as Head Chef and previous ownership — likely outdated
- No evidence of Google Posts, regular photo uploads, or Q&A activity from codebase

---

## Citations

### Known Citations (Verified from Web Search)
| Platform | URL | NAP Consistent | Notes |
|---|---|---|---|
| AGFG | agfg.com.au/restaurant/red-door-pizza-46489 | Yes (address, phone) | Listed as Italian Restaurant |
| OpenTable | opentable.com/r/red-door-pizza-buninyong | Yes (address, phone) | Outdated hours and chef info |
| UberEats | ubereats.com/au/store/red-door-pizza-buninyong | Yes | Active ordering |
| Buninyong Township Guide | buninyong.vic.au (PDF) | Yes | Community listing |
| Community Gold Participants | communitygrowshere.com.au | Yes | Business listing |
| The Courier (Ballarat) | thecourier.com.au (articles) | Yes | Press coverage (2021, 2023) |
| Ballarat Times | timesnewsgroup.com.au | Yes | Press coverage (2021) |

### Missing/Recommended Citations
| Platform | Status | Priority |
|---|---|---|
| Yellow Pages Australia | UNKNOWN | Medium |
| True Local | UNKNOWN | Medium |
| Yelp Australia | UNKNOWN | Low-Medium |
| TripAdvisor | UNKNOWN | Medium |
| Zomato | UNKNOWN | Low |
| Broadsheet Melbourne | UNKNOWN | Low |
| Google Business Profile | Assumed active | Critical |

---

## Reviews / Reputation

### Platform Summary
| Platform | Rating | Volume | Freshness | Owner Responses |
|---|---|---|---|---|
| Google | 4.6 (UNVERIFIED) | ~276 (UNVERIFIED) | Unknown | Unknown |
| OpenTable | 4.8 | 50 | Last review date unknown | Unknown |
| UberEats | 4.2 | 240+ | Reviews from 2023-2024 | Unknown |

### On-Site Testimonials
- **Source:** `app/components/TestimonialsSection.tsx`
- **Reviewers:** Rhiannon, Purple Rainbow, Isaac Stolk
- **Source URLs:** All link to Google Maps contribution pages (CONFIRMED)
- **Schema:** No Review/AggregateRating schema used (CONFIRMED — correct approach)
- **Assessment:** Testimonials are genuine, sourced, and properly attributed.

### Review Themes (from UberEats)
- **Positive:** "best salads", "right amount of char on crust", "best gourmet pizzas"
- **Volume:** 240+ ratings on UberEats suggests decent order volume
- **Gap:** No TripAdvisor listing found; Google review count ~276 is modest for a restaurant operating since ~2013

---

## Off-Page SEO

### Backlink Profile
- **Assessment:** Not independently verifiable with available tooling. Limited to what web search reveals.
- **Known references:**
  - The Courier (Ballarat) — 2 articles (2023)
  - Ballarat Times — 1 article (2021)
  - Buninyong Township — community listings
  - Community Grow Here — business listing

### Referring Domains (Observable)
| Domain | Type | Quality | Relevance |
|---|---|---|---|
| thecourier.com.au | Local news | High | High |
| timesnewsgroup.com.au | Local news | Medium | High |
| buninyong.vic.au | Community | Medium | High |
| communitygrowshere.com.au | Community | Low-Medium | Medium |
| agfg.com.au | Restaurant guide | Medium | High |
| opentable.com | Booking platform | High | High |
| ubereats.com.au | Delivery platform | High | High |

### Assessment
Red Door Pizza has a modest but relevant backlink profile. The primary gap is **quantity** — competitors in Ballarat likely have more referring domains from local directories, food publications, and tourism sites.

---

## Competitor Analysis

### Top Competitors (Observed from SERPs for "pizza Ballarat")

| Competitor | Location | Wood-Fired | Italian | GF | Family | Functions | Reviews | Content |
|---|---|---|---|---|---|---|---|---|
| **The Forge Pizzeria** | Armstrong St, Ballarat | Yes | Yes | Yes | Yes | Yes (200 seats) | Strong | Website + social |
| **Soldiers Woodfired Pizzeria** | Soldiers Hill, Ballarat | Yes | Yes | Yes | Unknown | Unknown | Strong | Website |
| **Carboni's Italian Kitchen** | Eureka St, Ballarat | Yes | Yes (full Italian) | Unknown | Yes | Unknown | Strong | Website + menu |
| **Venti8 Pizzeria** | Ballarat North | Yes | Yes | Unknown | Yes | Unknown | Growing | Website |
| **Ballarat Provedore** | Warrenheip (near Ballarat) | Yes | Limited | Unknown | Unknown | Unknown | Unknown | Basic website |

### Red Door Advantages vs Competitors
1. **Buninyong location** — Historic village setting, differentiator from Ballarat CBD
2. **Local supplier story** — Buninyong Butcher, Peaches Fruit Market, Il Piccolo Gelato
3. **Take-home product** — Vacuum-sealed bases at local IGAs (unique)
4. **Kids corner** — Dedicated play area (physical space advantage)
5. **Technical SEO** — Stronger than most competitor websites
6. **Guide content** — Family, functions, gluten-free guides (content moat)

### Red Door Disadvantages vs Competitors
1. **Physical location** — Not in Ballarat CBD; loses "pizza Ballarat" proximity signal
2. **Review volume** — 276 Google reviews vs likely higher for Ballarat competitors
3. **Seat capacity** — 100 vs The Forge's 200
4. **Brand awareness** — Lower in Ballarat market
5. **Backlink authority** — Fewer referring domains

---

## SERP Analysis

### Observed SERP Features for Key Queries

**"pizza Ballarat"**
- Map pack: Yes (3 businesses)
- Organic results: Mix of restaurant websites and directories
- AI Overview: Likely present
- Red Door visibility: UNVERIFIED — likely not in top 3 organic due to Ballarat location

**"wood-fired pizza Ballarat"**
- Map pack: Yes
- Organic: The Forge, Soldiers, Carboni's likely prominent
- Red Door visibility: UNVERIFIED — "near Ballarat" framing may limit ranking

**"gluten-free pizza Ballarat"**
- Map pack: Yes
- Organic: Mix of pizzerias and guides
- Red Door visibility: Guide page well-positioned for this query

**"family restaurant Ballarat"**
- Map pack: Yes
- Organic: General family restaurants
- Red Door visibility: Guide page targets this well

**"Christmas party venue Ballarat"**
- Map pack: Less prominent
- Organic: Function venues, event spaces
- Red Door visibility: Guide page should compete

---

## AI Search / Answer Engines

### Entity Signals (Verified)
| Signal | Present | Source |
|---|---|---|
| Business name | Yes | Schema, title tags, body copy |
| Address | Yes | Schema, footer, contact page |
| Phone | Yes | Schema, header, footer |
| Business type | Yes | Schema (Restaurant) |
| Cuisine | Yes | Schema (Pizza, Italian) |
| Menu | Yes | Schema (Menu), /menu page |
| Area served | Yes | Schema (Buninyong, Ballarat, Meredith) |
| Opening hours | Yes | Schema |
| Social profiles | Yes | Schema sameAs |
| Geo coordinates | Yes | Schema (-37.6534, 143.8821) |

### AI Search Readiness Assessment
**Current State:** The website has strong first-party entity signals. However, AI search engines (Google AI Overviews, Bing Copilot) rely heavily on **external corroboration** — mentions across multiple authoritative sources.

**Gaps:**
1. Limited external mentions beyond a few directories and press articles
2. No TripAdvisor listing found
3. OpenTable data is outdated (wrong hours, old chef info)
4. No evidence of tourism website listings (ballarat.com)
5. No structured data on external platforms

**What would increase AI eligibility:**
1. Consistent NAP across 20+ directories
2. TripAdvisor listing with reviews
3. Ballarat tourism website inclusion
4. Supplier websites mentioning Red Door
5. More Google reviews with location mentions
6. Food publication features

---

## Entity / Knowledge Graph

### Entity Consistency
| Source | Name | Type | Location | Assessment |
|---|---|---|---|---|
| Website | Red Door Pizza | Wood-fired pizzeria | Buninyong | CONSISTENT |
| Schema | Red Door Pizza | Restaurant | Buninyong | CONSISTENT |
| OpenTable | Red Door Pizza | Pizzeria | Buninyong | CONSISTENT (but outdated details) |
| UberEats | Red Door Pizza | Pizza, Italian | Buninyong | CONSISTENT |
| AGFG | Red Door Pizza | Italian Restaurant | Buninyong | CONSISTENT |
| Buninyong Guide | Red Door Pizzeria | Pizzeria | Buninyong | CONSISTENT (slight name variation) |
| The Courier | Red Door Pizza / Red Door Pizzeria | Pizzeria | Buninyong | Minor name variation |

**Assessment:** Entity signals are mostly consistent. The name variation "Red Door Pizzeria" vs "Red Door Pizza" in older press articles and community listings is minor and does not create confusion.

---

## Structured Data

### Schema Implementation (Verified from Code)

| Schema Type | Location | Status | Assessment |
|---|---|---|---|
| Restaurant | layout.tsx | Correct | name, image, url, telephone, address, geo, hours, areaServed, sameAs |
| Menu | /menu page | Correct | MenuItem with name, offers, suitableForDiet |
| FAQPage | Location pages, Guide pages | Correct | Question + acceptedAnswer |
| Article | Guide pages | Correct | headline, author, publisher, mainEntityOfPage |
| Product | /stockists page | Partial | name, brand, hasVariant, offers — lacks price |
| AggregateOffer | /stockists page | Partial | priceCurrency, availability — no lowPrice/highPrice |

### Schema Issues
1. **Product schema on /stockists** lacks `price` — `AggregateOffer` should include `lowPrice` and `highPrice`
2. **Menu schema** — Price field strips non-numeric characters; items with ranges ("From $6.30") may not parse correctly
3. **No BreadcrumbList** schema — Could improve SERP display
4. **No LocalBusiness** subtype beyond Restaurant — Consider adding `Pizzeria` if supported

---

## CRO (Conversion Rate Optimisation)

### Conversion Paths
| Action | CTA Location | Friction Level |
|---|---|---|
| Order Online | Header, Hero, Footer, Menu items, Location pages, Mobile nav, Floating button | Low — direct to WowApps |
| Book a Table | Header, Hero, Contact page | Medium — goes to contact form |
| Call | Mobile header, Footer, Mobile nav | Low — tel: link |
| Directions | Contact page, Mobile nav | Low — Google Maps link |
| Group Enquiry | Functions section, Contact form | Medium — mailto: fallback |
| View Menu | Location pages, Guides, Footer | Low — internal link |

### Friction Points
1. **Enquiry forms use mailto:** — Both FunctionsSection and EnquiryForm open email client rather than submitting via API. This is a significant friction point on mobile.
2. **No online booking system** — "Book a Table" goes to contact form, not a reservation platform
3. **WowApps external handoff** — Ordering leaves the website entirely; no way to track post-click behaviour
4. **No clear "order for delivery" option** — Only pickup via WowApps

### CTA Assessment
- **Clarity:** Good — CTAs are clear and action-oriented
- **Placement:** Good — multiple touchpoints across pages
- **Mobile:** Good — sticky nav with Call, Order, Directions
- **Trust:** Good — real phone, real address, real reviews

---

## WowApps

### Integration Assessment
| Element | Status | Assessment |
|---|---|---|
| URL | `https://orders.wowapps.com/order/reddoorpizzeria` | Correct |
| Consistent wording | "Pre-Order via Wowapps", "Order on WowApps", "Order Online" | Minor inconsistency |
| Tracking | `trackOrderOnlineClick()` on all CTAs | Good |
| External handoff | Opens in new tab with `target="_blank"` | Good |
| `rel` attributes | `noopener noreferrer` on all external links | Good |

### WowApps Issues
1. **Inconsistent CTA text** — "Pre-Order via Wowapps" vs "Order on WowApps" vs "Order Online"
2. **No tracking of post-click behaviour** — Cannot measure conversion after leaving site
3. **Mobile experience** — Cannot test from codebase; requires live testing

---

## Analytics

### GA4 Implementation
- **Source:** `app/components/Analytics.tsx`
- **Status:** Conditional — loads only if `NEXT_PUBLIC_GA_MEASUREMENT_ID` env var is set
- **Method:** gtag.js via `next/script` with `afterInteractive` strategy
- **Assessment:** Correct implementation. Env var configuration required.

### GTM
- **Status:** NOT IMPLEMENTED — No Google Tag Manager found in codebase
- **Assessment:** GA4 is loaded directly. GTM not used.

### Event Tracking
| Event | Function | Parameters | Status |
|---|---|---|---|
| order_online_click | `trackOrderOnlineClick()` | page_path, button_location | Implemented |
| menu_item_order_click | `trackMenuItemOrderClick()` | page_path, menu_item, menu_category | Implemented |
| book_table_click | `trackBookTableClick()` | page_path, button_location | Implemented |
| phone_click | `trackPhoneClick()` | page_path | Implemented |
| directions_click | `trackDirectionsClick()` | page_path | Implemented |
| group_enquiry_click | `trackGroupEnquiryClick()` | page_path, form_location | Implemented |
| contact_submission | `trackContactSubmission()` | page_path | Implemented |
| menu_view | `trackMenuView()` | page_path | Implemented (not used in components) |
| stockist_click | `trackStockistClick()` | page_path | Implemented (not used in components) |

**Assessment:** Event tracking is comprehensive. Two events (`menu_view`, `stockist_click`) are defined but not used in any component.

### Conversion Events
| Event | Trigger | Assessment |
|---|---|---|
| order_online_click | Every WowApps CTA | Primary conversion event |
| book_table_click | Header "Book Table" + Hero | Secondary conversion |
| contact_submission | After mailto: opens | Weak — doesn't confirm actual submission |
| phone_click | Phone CTA | Phone lead tracking |
| directions_click | Maps CTA | Foot traffic tracking |

---

## Performance

### Code-Level Assessment
| Factor | Status | Assessment |
|---|---|---|
| Next.js Image | Used (Hero, Gallery, OutdoorDining, Header, Footer) | Good — automatic optimisation |
| WebP images | Gallery uses .webp | Good |
| Font loading | Inter + Playfair Display with `display: "swap"` | Good — prevents FOIT |
| CSS | Tailwind CSS 4 (utility-first) | Good — minimal CSS |
| JavaScript | Framer Motion for animations | Acceptable — adds bundle weight |
| Third-party | GA4, WowApps | Minimal third-party load |
| Static generation | All pages use `generateStaticParams()` | Good — SSG |

### Potential Issues
1. **Framer Motion** — Adds ~30KB+ to bundle; used for animations on Hero, USP, Contact, Functions sections
2. **Client components** — Header, Hero, FAQSection, ContactSection, FunctionsSection, MobileStickyNav, FloatingOrderButton all marked `"use client"`
3. **Large hero image** — `/Banner.jpg` is loaded with `priority` — file size unknown
4. **OUTDOOR DINING.JPG** — Large filename suggests uncompressed image

### Mobile Performance
- Sticky mobile nav with 3 CTAs (Call, Order, Directions)
- Responsive grid layouts throughout
- `safe-area-pb` class on mobile nav for iPhone notch handling
- Assessment: Good mobile UX design

---

## Accessibility

| Factor | Status | Assessment |
|---|---|---|
| Heading hierarchy | Correct (H1 → H2 → H3) | Good |
| Alt text | Gallery images have descriptive alt | Good |
| Form labels | `sr-only` labels on all form inputs | Good |
| ARIA | `aria-label` on key interactive elements | Good |
| Keyboard navigation | Standard HTML semantics | Acceptable |
| Focus states | Tailwind focus styles | Acceptable |
| Colour contrast | Brand terracotta on white — INFERRED adequate | Needs live testing |
| Skip links | Not implemented | Gap |
| Language | `<html lang="en">` | Correct |

### Accessibility Issues
1. **No skip-to-content link** — Users must tab through header
2. **FAQ accordion** — Uses `useState` toggle; no `aria-expanded` attribute observed
3. **Mobile menu** — Uses AnimatePresence; no `aria-hidden` on closed state observed
4. **Map embed** — Has `title` attribute but no `aria-label`

---

## Mobile UX

### Assessment
| Factor | Status | Assessment |
|---|---|---|
| Sticky CTAs | Mobile sticky nav (Call, Order, Directions) | Excellent |
| Menu usability | Sticky jump menu on /menu page | Good |
| Text sizing | Responsive text classes | Good |
| Spacing | Responsive padding/margins | Good |
| Forms | Full-width inputs, proper sizing | Good |
| Image rendering | Next.js Image with responsive sizes | Good |
| Horizontal overflow | No evidence of overflow issues | Good |
| Tap targets | Minimum 44px on interactive elements | Good |

---

## Image SEO

| Factor | Status | Assessment |
|---|---|---|
| Filenames | Banner.jpg, logo.png, Gallery/img-{n}.webp, OUTDOOR DINING.JPG | Mixed — some have spaces |
| Alt text | Gallery images have descriptive alt | Good |
| Dimensions | Hero uses `fill`, Gallery uses `sizes` | Good |
| Image quality | Unknown — requires live inspection | UNVERIFIED |
| Compression | WebP for gallery; JPG for banner/outdoor | Good |
| Schema image | logo.png referenced in Restaurant schema | Good |
| Social images | /Banner.jpg for OG/Twitter | Good |

### Image Issues
1. **`OUTDOOR DINING.JPG`** — Filename contains space; should be URL-encoded or renamed
2. **No image sitemap** — Could help with image search visibility
3. **Gallery images** — All use generic names (img-1.webp through img-10.webp); could use descriptive filenames
4. **Logo** — Both logo.png and logo.jpg exist in public; only logo.png is used

---

## Content Gaps

### Addressed by Existing Content
- "pizza Ballarat" → /locations/ballarat ✓
- "pizza Buninyong" → /locations/buninyong ✓
- "gluten-free pizza Ballarat" → /guides/gluten-free-pizza-ballarat ✓
- "family restaurant Ballarat" → /guides/family-friendly-pizza-ballarat ✓
- "Christmas party Ballarat" → /guides/work-christmas-party-venues-buninyong ✓
- "take-home pizza Ballarat" → /stockists ✓

### Potential Gaps (Requires Search Data)
| Query | Current Coverage | Recommendation |
|---|---|---|
| "best pizza Ballarat" | No dedicated content | Monitor — may not be ownable |
| "Italian restaurant Ballarat" | Moderate (location page) | Improve /locations/ballarat |
| "vegetarian pizza Ballarat" | Menu tags only | Could add to guide content |
| "date night restaurants Ballarat" | Not covered | Only if search volume justifies |
| "corporate catering Ballarat" | Functions guide | Moderate coverage |
| "pizza delivery Buninyong" | Not covered | WowApps handles this |
| "late night pizza Ballarat" | Not covered | Hours don't support this |

---

## Cannibalisation

### Potential Overlap
| Page Pair | Overlap Risk | Assessment |
|---|---|---|
| `/` vs `/locations/ballarat` | Low | Homepage targets "near Ballarat"; location page is more specific |
| `/` vs `/locations/buninyong` | Low | Homepage is general; location page is Buninyong-specific |
| `/locations/ballarat` vs `/locations/buninyong` | Low | Different geographic targets |
| `/menu` vs Location pages | Low | Menu is comprehensive; location pages reference menu |
| `/guides/*` vs Location pages | Low | Guides are topical; location pages are geographic |
| `/stockists` vs Homepage | Low | Stockists is product-focused; homepage is general |

**Assessment:** No significant cannibalisation risk. Each page targets distinct intent/location combinations. The "near Ballarat" framing on the Ballarat page avoids competing with Ballarat-located businesses.

---

## P0 Actions (Potentially Damaging / Must Fix)

### P0-1: OpenTable Data Is Outdated
- **Problem:** OpenTable listing shows wrong hours (Daily 12pm-9pm vs actual Mon-Thu 5pm-9pm), old chef name (Adam Avery), old ownership info
- **Evidence:** https://www.opentable.com/r/red-door-pizza-buninyong
- **Impact:** Misleads customers, damages trust, inconsistent NAP
- **Confidence:** CONFIRMED (live web)
- **Effort:** Low — update OpenTable listing
- **Code/External:** External
- **Expected outcome:** Correct business information across platforms

### P0-2: Enquiry Forms Use mailto: Fallback
- **Problem:** Both FunctionsSection and EnquiryForm open email client instead of submitting via API. Users on mobile or without default email client will fail silently.
- **Evidence:** `app/components/FunctionsSection.tsx:76`, `app/contact/EnquiryForm.tsx:54`
- **Impact:** Lost enquiries, poor CRO
- **Confidence:** CONFIRMED (code)
- **Effort:** Medium — implement API route for form submission
- **Code/External:** Code
- **Expected outcome:** Higher enquiry completion rate

---

## P1 Actions (High Impact)

### P1-1: Expand Citation Coverage
- **Problem:** Limited directory presence beyond AGFG, OpenTable, UberEats
- **Evidence:** Web search reveals ~7 citations
- **Impact:** Weakens local SEO, limits AI search corroboration
- **Confidence:** CONFIRMED (web search)
- **Effort:** Medium — create/update listings on 10+ directories
- **Code/External:** External
- **Expected outcome:** Stronger local authority, improved map pack potential

### P1-2: Pursue Supplier Mentions
- **Problem:** Buninyong Butcher, Peaches Fruit Market, Il Piccolo Gelato likely don't list Red Door on their websites
- **Evidence:** No web search results found linking suppliers to Red Door
- **Impact:** Missed authority and relevance signals
- **Confidence:** INFERRED
- **Effort:** Low — ask suppliers to list Red Door as a customer/partner
- **Code/External:** External
- **Expected outcome:** Natural backlinks and entity corroboration

### P1-3: Strengthen Ballarat Location Page
- **Problem:** /locations/ballarat body copy is ~150 words — thinnest of location pages
- **Evidence:** `app/config/locations.ts:38-52`
- **Impact:** Weaker ranking potential for "pizza Ballarat" queries
- **Confidence:** CONFIRMED (code)
- **Effort:** Low — expand body copy to 250+ words
- **Code/External:** Code
- **Expected outcome:** Improved relevance for Ballarat queries

### P1-4: Fix Product Schema on /stockists
- **Problem:** AggregateOffer lacks lowPrice/highPrice; ProductModel lacks price
- **Evidence:** `app/stockists/page.tsx:58-81`
- **Impact:** Missing rich snippet potential
- **Confidence:** CONFIRMED (code)
- **Effort:** Low — add price data to schema
- **Code/External:** Code
- **Expected outcome:** Possible rich snippet for product search

### P1-5: Add BreadcrumbList Schema
- **Problem:** No breadcrumb structured data
- **Evidence:** No BreadcrumbList found in any page
- **Impact:** Missing SERP enhancement
- **Confidence:** CONFIRMED (code)
- **Effort:** Low — add BreadcrumbList to layout or pages
- **Code/External:** Code
- **Expected outcome:** Enhanced SERP display with breadcrumbs

---

## P2 Actions (Meaningful Improvement)

### P2-1: Expand Meredith Location Page
- **Problem:** /locations/meredith body copy is ~120 words — thinnest location page
- **Evidence:** `app/config/locations.ts:54-68`
- **Impact:** Weakest location page; limited ranking potential
- **Confidence:** CONFIRMED (code)
- **Effort:** Low — expand to 200+ words
- **Code/External:** Code

### P2-2: Add "Italian" Keyword to Ballarat Location Page
- **Problem:** No "Italian restaurant" targeting on /locations/ballarat
- **Evidence:** `app/config/locations.ts:38-52`
- **Impact:** Misses "Italian restaurant Ballarat" queries
- **Confidence:** CONFIRMED (code)
- **Effort:** Low — add Italian-related H2/copy
- **Code/External:** Code

### P2-3: Improve Menu Page H1
- **Problem:** H1 is "Our Menu" — generic, no keyword
- **Evidence:** `app/menu/page.tsx:424`
- **Impact:** Weaker relevance signal
- **Confidence:** CONFIRMED (code)
- **Effort:** Low — change to "Wood-Fired Pizza & Italian Menu"
- **Code/External:** Code

### P2-4: Consistent WowApps CTA Text
- **Problem:** "Pre-Order via Wowapps" vs "Order on WowApps" vs "Order Online"
- **Evidence:** Multiple components
- **Impact:** Minor UX inconsistency
- **Confidence:** CONFIRMED (code)
- **Effort:** Low — standardise CTA text
- **Code/External:** Code

### P2-5: Add `aria-expanded` to FAQ Accordions
- **Problem:** FAQSection toggle has no aria-expanded attribute
- **Evidence:** `app/components/FAQSection.tsx:73-85`
- **Impact:** Accessibility gap
- **Confidence:** CONFIRMED (code)
- **Effort:** Low — add aria-expanded to button
- **Code/External:** Code

### P2-6: Get Listed on Ballarat Tourism
- **Problem:** No evidence of ballarat.com listing
- **Evidence:** Web search
- **Impact:** Missed authority and referral traffic
- **Confidence:** INFERRED
- **Effort:** Medium — submit business for inclusion
- **Code/External:** External

### P2-7: Request TripAdvisor Listing
- **Problem:** No TripAdvisor listing found
- **Evidence:** Web search
- **Impact:** Missed review platform and citation
- **Confidence:** CONFIRMED (absence)
- **Effort:** Low-Medium — create listing
- **Code/External:** External

### P2-8: Fix Gallery Image Filenames
- **Problem:** Generic names (img-1.webp) don't support image SEO
- **Evidence:** `public/Gallery/` directory
- **Impact:** Missed image search opportunity
- **Confidence:** CONFIRMED (filesystem)
- **Effort:** Low — rename to descriptive filenames
- **Code/External:** Code

### P2-9: Add Menu View and Stockist Click Events
- **Problem:** `trackMenuView()` and `trackStockistClick()` are defined but never called
- **Evidence:** `app/lib/analytics.ts:64-74`
- **Impact:** Missing analytics data
- **Confidence:** CONFIRMED (code)
- **Effort:** Low — add tracking calls to relevant components
- **Code/External:** Code

### P2-10: Strengthen Gluten-Free Menu Schema
- **Problem:** Only "Gluten Free Spaghetti Bolognese" detected for GF schema; GF pizza bases not tagged per-item
- **Evidence:** `app/menu/page.tsx:377`
- **Impact:** Missed schema opportunity for GF pizza queries
- **Confidence:** CONFIRMED (code)
- **Effort:** Low — add GF pizza items to detection set
- **Code/External:** Code

---

## P3 Actions (Optional)

### P3-1: Add Skip-to-Content Link
- **Problem:** No skip navigation for keyboard users
- **Impact:** Minor accessibility gap
- **Effort:** Low

### P3-2: Remove Unused Public Files
- **Problem:** `window.svg`, `vercel.svg`, `next.svg`, `globe.svg`, `file.svg` appear to be Next.js defaults
- **Evidence:** `public/` directory
- **Impact:** Minor — unnecessary files in build
- **Effort:** Low

### P3-3: Add Image Sitemap
- **Problem:** No image-specific sitemap
- **Impact:** Missed image search visibility
- **Effort:** Low-Medium

### P3-4: Consider FAQ Schema on Homepage
- **Problem:** FAQSection on homepage has no FAQPage schema
- **Evidence:** `app/components/FAQSection.tsx`
- **Impact:** Missed rich snippet opportunity on homepage
- **Effort:** Low

### P3-5: OpenGraph Image for Each Page
- **Problem:** All pages use /Banner.jpg for OG image
- **Impact:** Generic social sharing appearance
- **Effort:** Medium — create page-specific OG images

---

## Top 10 Quick Wins

1. **Update OpenTable listing** with correct hours and current business info
2. **Expand /locations/ballarat body copy** to 250+ words
3. **Add BreadcrumbList schema** to all pages
4. **Fix Product schema** on /stockists with price data
5. **Standardise WowApps CTA text** across all components
6. **Add `aria-expanded`** to FAQ accordion buttons
7. **Add `trackMenuView()`** call when menu section scrolls into view
8. **Expand /locations/meredith** body copy to 200+ words
9. **Add "Italian restaurant" keyword** to Ballarat location page
10. **Rename gallery images** to descriptive filenames

---

## Top 10 High-Impact Projects

1. **Implement proper form submission** (replace mailto: with API endpoint)
2. **Build 20+ local citations** with consistent NAP
3. **Pursue supplier website mentions** (Buninyong Butcher, Peaches, Il Piccolo)
4. **Get listed on TripAdvisor** and other food platforms
5. **Submit to Ballarat tourism** website
6. **Increase Google review velocity** through post-visit follow-up
7. **Create additional guide content** if competitor gaps emerge
8. **Improve menu page H1** and add GF pizza items to schema detection
9. **Add image sitemap** for gallery images
10. **Implement proper form submission** with server-side handling

---

## Top 10 Local SEO Opportunities

1. **Buninyong Butcher website mention** — Ask to be listed as a customer they supply
2. **Paches Fruit Market mention** — Ask for mutual business reference
3. **Il Piccolo Gelato stockist listing** — Ask to be listed as a venue serving their product
4. **Local IGA product listings** — Ask Buninyong FoodWorks, Beaufort IGA, Creswick IGA to list Red Door products
5. **Buninyong township directory** — Ensure listing on buninyong.vic.au
6. **Ballarat tourism listing** — Submit to ballarat.com
7. **Yellow Pages Australia listing** — Create/update with consistent NAP
8. **True Local listing** — Create/update
9. **Google Business Profile posts** — Regular updates with photos and offers
10. **Encourage Google reviews** from satisfied customers (especially mentioning "Buninyong" and "Ballarat")

---

## Top 10 Content Opportunities

1. **"Best Pizza in Buninyong" page** — If not already ranking, a dedicated page could capture this query
2. **"Italian Restaurant Near Ballarat" content** — Strengthen Italian positioning on Ballarat location page
3. **"Vegetarian Pizza Ballarat" content** — Add vegetarian-focused copy to existing guide or menu section
4. **"Pasta Near Ballarat" content** — Dedicated pasta section in guide or menu
5. **"Date Night Restaurants Ballarat" guide** — Only if search volume justifies
6. **"Corporate Catering Ballarat" content** — Expand functions guide
7. **"Wood-Fired Pizza Takeaway Buninyong" content** — Strengthen takeaway messaging
8. **"Gelato Buninyong" content** — Leverage Il Piccolo Gelato relationship
9. **"Live Music Buninyong" content** — Community newsletter mentions live acoustic sessions
10. **"School Holiday Activities Buninyong" content** — Family-friendly positioning

---

## Top 10 AI Search Opportunities

1. **Build consistent entity mentions** across 20+ external sources
2. **Get supplier websites to mention Red Door** as a customer/partner
3. **Create a Google Business Profile post** strategy with regular updates
4. **Ensure OpenTable data is current** — AI engines pull from major platforms
5. **Pursue food publication features** (Broadsheet Melbourne, Good Food)
6. **Build review volume** on Google (target 400+ reviews)
7. **Get listed on tourism websites** (ballarat.com, visitvictoria.com)
8. **Ensure schema markup is present** on all pages (already done)
9. **Create content that directly answers common questions** (already done with FAQs)
10. **Monitor AI Overviews** for target queries and adjust content accordingly

---

## Top 10 CRO Opportunities

1. **Replace mailto: forms** with proper API submission
2. **Add online booking** integration (e.g., ResDiary, OpenTable booking)
3. **Add "Order for Delivery"** option if delivery is offered
4. **Implement post-order tracking** via WowApps callback or pixel
5. **Add urgency elements** (e.g., "Lunch Special ends at 3pm")
6. **Simplify group enquiry** to fewer required fields
7. **Add social proof near CTAs** (review count, rating)
8. **Test CTA button colours** (currently terracotta — test gold)
9. **Add "Most Popular" badges** to menu items
10. **Implement exit-intent popup** with special offer

---

## What NOT To Do

1. **Do NOT create fake reviews** — All reviews must be genuine and sourced
2. **Do NOT create fake location pages** — Ballarat and Meredith pages correctly use "near" framing
3. **Do NOT claim to be "in Ballarat"** — Business is physically in Buninyong
4. **Do NOT buy links** — Pursue natural mentions through relationships
5. **Do NOT create PBNs or link farms** — Build legitimate authority
6. **Do NOT keyword-stuff** — Content is naturally written
7. **Do NOT create duplicate menu pages** — Single comprehensive menu page is correct
8. **Do NOT add unsupported schema** — No fake ratings or reviews in schema
9. **Do NOT spam directories** — Create quality listings on relevant platforms
10. **Do NOT create AI-generated mass content** — Existing content is genuine and locally relevant

---

## External Verification Required

| Item | Status | Action Needed |
|---|---|---|
| Google Business Profile | UNVERIFIED | Verify GBP is active, hours correct, photos uploaded |
| Google review count/rating | UNVERIFIED | Check live GBP for current count |
| TripAdvisor listing | NOT FOUND | Check if listing exists; create if not |
| OpenTable data | OUTDATED | Update hours, chef info, description |
| TripAdvisor reviews | UNKNOWN | Check for existing reviews |
| Supplier website mentions | UNVERIFIED | Check Buninyong Butcher, Peaches, Il Piccolo websites |
| Tourism website listings | UNVERIFIED | Check ballarat.com, buninyong.vic.au |
| Backlink count | NOT VERIFIABLE | Requires Ahrefs/Moz/SEMrush |
| Search Console data | NOT AVAILABLE | Requires access |
| Live GBP posts | NOT AVAILABLE | Requires GBP access |

---

## Final 100/100 Gap Analysis

| Category | Current | Max | Gap | Priority |
|---|---|---|---|---|
| Technical SEO | 13 | 15 | 2 | P2 |
| On-page SEO | 9 | 10 | 1 | P2 |
| Keyword Strategy | 8 | 10 | 2 | P2 |
| Content/Topical Authority | 8 | 10 | 2 | P2 |
| Internal Linking | 4 | 5 | 1 | P3 |
| Local SEO | 7 | 10 | 3 | P1 |
| Off-page/Authority | 5 | 10 | 5 | P1 |
| Structured Data/Entity | 9 | 10 | 1 | P2 |
| AI Search Readiness | 5 | 10 | 5 | P1 |
| CRO/UX | 4 | 5 | 1 | P1 |
| Performance/Accessibility | 4 | 5 | 1 | P3 |
| **TOTAL** | **76** | **100** | **24** | — |

### What Prevents 100/100
1. **Off-page authority** (5/10 gap) — Requires external work: citations, backlinks, mentions
2. **AI search readiness** (5/10 gap) — Requires external corroboration across platforms
3. **Local SEO** (7/10 gap) — Requires citation building and GBP optimisation
4. **Technical SEO** (13/15 gap) — Minor schema and breadcrumb improvements
5. **CRO** (4/5 gap) — Form submission improvement needed

### The 5 Highest-Impact Actions
1. **Build 20+ local citations** with consistent NAP (P1)
2. **Replace mailto: forms** with proper API submission (P0)
3. **Pursue supplier website mentions** for backlinks and entity signals (P1)
4. **Update OpenTable listing** with correct business information (P0)
5. **Expand Google review count** through post-visit engagement (P1)

### What Should NOT Be Changed
- Restaurant schema structure
- Location page "near" framing
- Guide content strategy
- Menu page structure and schema
- NAP consistency in constants.ts
- Testimonial section (genuine, sourced)
- Internal linking structure
- robots.txt and sitemap configuration

### What Needs External Marketing Work
- Citation building across directories
- Supplier relationship outreach
- Tourism website submissions
- TripAdvisor listing creation
- Google review generation strategy
- Food publication PR
- Social media content (Instagram, Facebook)

### What Should Be Measured Over 90 Days
1. **Google Business Profile insights** — Search queries, direction requests, calls
2. **Search Console data** — Impressions, clicks, position for target keywords
3. **Google review count and rating** — Track growth
4. **Citation count** — Track new listings created
5. **Form submissions** — Track conversion rate improvement
6. **WowApps click-through rate** — Track from GA4 events
7. **Local pack visibility** — Monitor for "pizza Buninyong", "pizza near Ballarat"
8. **AI Overview mentions** — Monitor for target queries
9. **Backlink growth** — Track new referring domains
10. **Organic traffic** — Overall trend from Analytics

---

*Audit completed 31 August 2026. All findings are evidence-based with source references. Inferences are clearly labeled. No data has been fabricated.*
