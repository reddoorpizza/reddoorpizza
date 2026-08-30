# SEO Measurement & Reporting Framework

This document establishes the measurement framework for Red Door Pizza SEO.

---

## Page Groups

| Group | Pages | Purpose |
|---|---|---|
| **Core** | `/`, `/menu` | Brand discovery, menu browsing |
| **Location** | `/locations/buninyong`, `/locations/ballarat`, `/locations/meredith` | Local search visibility |
| **Guides** | `/guides/*` | Informational content, long-tail queries |
| **Commercial** | `/stockists`, `/contact` | Conversion-focused pages |

---

## Query Groups

| Group | Example Queries | Target Pages |
|---|---|---|
| **Pizza** | pizza Ballarat, pizza near Ballarat, wood-fired pizza | /locations/ballarat, /locations/buninyong |
| **Location** | pizza Buninyong, restaurant Buninyong, Ballarat pizza | /locations/* |
| **Italian** | Italian restaurant Ballarat, pasta Ballarat | /locations/ballarat, /menu |
| **Gluten-free** | gluten-free pizza Ballarat, GF pizza | /guides/gluten-free-pizza-ballarat |
| **Family** | family restaurant Ballarat, kids pizza | /guides/family-friendly-pizza-ballarat |
| **Functions** | function venue Ballarat, Christmas party Ballarat | /guides/work-christmas-party-venues-buninyong |
| **Dessert** | gelato Ballarat, dessert pizza | /menu |
| **Stockists** | Red Door Pizza base, take-home pizza | /stockists |

---

## Conversion Funnel

### Funnel 1: Order Online
```
Organic landing → Page engagement → Menu → Order online click → WowApps
```
**Tracked events**: `menu_item_order_click`, `order_online_click`

### Funnel 2: Book Table
```
Organic landing → Location/guide → Book table click → Contact/booking page → Enquiry form submit
```
**Tracked events**: `book_table_click`, `group_enquiry_click`

### Funnel 3: Phone/Directions
```
Organic landing → Contact info → Phone click / Directions click
```
**Tracked events**: `phone_click`, `directions_click`

---

## Search Console Data Model

### Metrics to Track
- **Clicks**: Total organic clicks
- **Impressions**: Total impressions in search results
- **CTR**: Click-through rate (clicks / impressions)
- **Average Position**: Mean ranking position
- **Queries**: Search terms triggering impressions
- **Landing Pages**: Pages receiving organic traffic

### Reporting Dimensions
- By page group (Core, Location, Guides, Commercial)
- By query group (Pizza, Location, Italian, etc.)
- By date (weekly, monthly)
- By device (desktop, mobile)

### Data Collection
- Export from Google Search Console weekly
- Store in spreadsheet for trend analysis
- Compare month-over-month and year-over-year

---

## Conversion Events (from Step 6)

| Event | Parameters | Components |
|---|---|---|
| `order_online_click` | page_path, button_location | Hero, Header, Footer, MobileNav, Contact, Menu |
| `menu_item_order_click` | page_path, menu_item, menu_category | Menu page, MenuSection |
| `book_table_click` | page_path, button_location | Hero, Header |
| `phone_click` | page_path | MobileNav, Contact, Footer, Header |
| `directions_click` | page_path | MobileNav, Contact |
| `group_enquiry_click` | page_path, form_location | EnquiryForm |

---

## WowApps Measurement

### What We CAN Track
- `order_online_click` — User clicked order button
- `menu_item_order_click` — User clicked order for specific item

### What We CANNOT Track (without WowApps integration)
- Completed orders
- Order value
- Items actually purchased
- Conversion rate from click to order

### Recommendation
Request WowApps data export or API access to close the measurement gap.

---

## Cannibalisation Monitoring

### Pages to Monitor
- `/locations/ballarat` vs `/locations/buninyong` — both target "pizza" queries
- `/guides/family-friendly-pizza-ballarat` vs `/locations/ballarat` — both mention "family"
- `/guides/gluten-free-pizza-ballarat` vs `/menu` — both mention "gluten-free"

### Signs of Cannibalisation
1. Two pages receiving impressions for the same primary query
2. URL switching in Search Console for the same query
3. One page's impressions dropping when another's rises

### Process
1. Export Search Console data by query + page
2. Identify queries where multiple Red Door pages appear
3. Assess which page better satisfies the intent
4. Consider consolidating or differentiating the pages

---

## Quick-Win Criteria

A page is a quick-win candidate if:

1. **Impressions but low CTR** (< 2%) — Improve title/meta description
2. **Average position 5–15** — Close to page 1, content improvements could push higher
3. **Strong query/page relevance** — Page already matches intent well
4. **High commercial intent** — Query indicates purchase/booking intent
5. **Existing page already matches** — No new page needed, just optimisation

### Process
1. Export Search Console query data
2. Filter by impressions > 50 and position 5–15
3. Sort by CTR (lowest first)
4. Prioritise by commercial intent
5. Improve title, meta description, and content for top candidates

---

## Monthly SEO Review Template

### 1. Technical Health
- [ ] Build passes (lint, typecheck, production build)
- [ ] No broken links
- [ ] Sitemap current
- [ ] Robots.txt correct
- [ ] Schema valid

### 2. Indexation
- [ ] All target pages indexed
- [ ] No unwanted pages indexed
- [ ] Canonical tags correct
- [ ] No noindex on important pages

### 3. Search Performance
- [ ] Total clicks (month vs previous month)
- [ ] Total impressions (month vs previous month)
- [ ] Average CTR
- [ ] Average position

### 4. Top Queries
- [ ] Top 10 queries by clicks
- [ ] Top 10 queries by impressions
- [ ] New queries appearing
- [ ] Queries with high impressions, low CTR

### 5. Top Pages
- [ ] Top 10 pages by clicks
- [ ] Top 10 pages by impressions
- [ ] Pages with declining performance

### 6. CTR Opportunities
- [ ] Queries with position < 10 and CTR < 3%
- [ ] Pages with impressions but low CTR
- [ ] Title/meta description improvements needed

### 7. Conversion Performance
- [ ] Order online clicks (GA4)
- [ ] Menu item order clicks (GA4)
- [ ] Book table clicks (GA4)
- [ ] Phone clicks (GA4)
- [ ] Directions clicks (GA4)
- [ ] Group enquiry clicks (GA4)

### 8. Cannibalisation
- [ ] Multiple pages for same query?
- [ ] URL switching observed?
- [ ] Action needed?

### 9. Content Updates
- [ ] Menu prices current?
- [ ] Opening hours correct?
- [ ] Any outdated information?

### 10. Next Month Priorities
- [ ] Quick-win targets identified
- [ ] Content improvements planned
- [ ] External opportunities pursued

---

## SEO Experimentation Procedure

1. **Identify** — Query/page opportunity from Search Console data
2. **Confirm** — Search intent matches Red Door's offering
3. **Assess** — Does existing page satisfy intent? If yes, improve it. If no, consider new content.
4. **Plan** — Determine specific changes (content, metadata, internal links)
5. **Implement** — Make changes, commit, deploy
6. **Wait** — Minimum 4 weeks for sufficient data
7. **Compare** — Before/after metrics (clicks, impressions, position, CTR)
8. **Decide** — Keep if improved, revert if worse, iterate if mixed

### Rules
- Do not make changes based on one day's data
- Do not change page targeting without evidence
- Do not make multiple changes simultaneously (isolate variables)
- Document every experiment with hypothesis, changes, and results
