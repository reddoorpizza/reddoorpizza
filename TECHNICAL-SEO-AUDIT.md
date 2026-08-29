# Technical SEO Audit Report — Red Door Pizza

**Date:** 29 August 2026  
**Scope:** Static code analysis of `app/` directory, components, and config  
**Framework:** Next.js (App Router, SSR)

---

## 1. Title Tags & Meta Descriptions

| Route | Title | Chars | Description | Status |
|-------|-------|-------|-------------|--------|
| `/` | _(inherits root layout)_ | — | _(inherits root layout)_ | **MISSING page-level metadata** |
| `/menu` | Wood-Fired Pizza & Italian Menu \| Red Door Pizza Buninyong | 57 | Present | OK |
| `/contact` | Contact Us \| Red Door Pizza Buninyong | 38 | Present | OK |
| `/stockists` | Wood-Fired Pizza Stockists \| Beaufort, Creswick & Elaine \| Red Door Pizza | **72** | Present | **Title exceeds 60 chars** |
| `/terms` | Terms & Conditions \| Red Door Pizza Buninyong | 46 | Present | OK |
| `/privacy` | Privacy Policy \| Red Door Pizza Buninyong | 42 | Present | OK |
| `/locations/buninyong` | Best Wood-Fired Pizza in Buninyong \| Family Friendly \| Red Door Pizza | **69** | Present | **Title exceeds 60 chars** |
| `/locations/ballarat` | Best Wood-Fired Pizza near Ballarat \| Gluten Free & Family Friendly | **67** | Present | **Title exceeds 60 chars** |
| `/locations/meredith` | Wood-Fired Pizza near Meredith \| Dine-In & Takeaway \| Red Door Pizza | **69** | Present | **Title exceeds 60 chars** |
| `/locations/[invalid]` | Pizza Location Not Found \| Red Door Pizza | 42 | Present | OK (fallback) |
| `/guides/family-friendly-pizza-ballarat` | Family Friendly Pizza near Ballarat \| Kids Corner \| Red Door Pizza | **65** | Present | **Title exceeds 60 chars** |
| `/guides/work-christmas-party-venues-buninyong` | Work Christmas Party Venues Buninyong & Ballarat \| Red Door Pizza | **65** | Present | **Title exceeds 60 chars** |
| `/guides/gluten-free-pizza-ballarat` | Best Gluten-Free Pizza & Pasta near Ballarat \| Red Door Pizza | **62** | Present | **Title exceeds 60 chars** |

### Root Layout Fallback (`layout.tsx`)

| Field | Value |
|-------|-------|
| Title | `Red Door Pizza \| Wood-Fired Pizza in Buninyong, VIC` (55 chars) |
| Description | `Top-rated wood-fired pizzeria in Buninyong, Australia. Locally sourced meats, fresh Italian ingredients, and warm rustic dining. Rated 4.6 stars.` (148 chars) |
| Canonical | **MISSING** |

### Findings

- **7 titles exceed 60 characters** — will be truncated in Google SERPs. Highest risk: `/stockists` (72 chars), all 3 location pages (67–69 chars), all 3 guide pages (62–65 chars).
- **Homepage has no page-level metadata** — inherits root layout values, which is acceptable but means the homepage shares its title/description with any page that doesn't export metadata.
- **Root layout has no `metadataBase`** — canonical URLs are relative paths (`/menu`, `/stockists`). Without `metadataBase`, Next.js resolves against the request origin, which may produce incorrect canonicals in staging/preview environments.

---

## 2. Canonical Tags (`alternates.canonical`)

| Route | Canonical Defined | Value |
|-------|-------------------|-------|
| `/` | **NO** | — |
| `/menu` | YES | `/menu` |
| `/contact` | **NO** | — |
| `/stockists` | YES | `/stockists` |
| `/terms` | **NO** | — |
| `/privacy` | **NO** | — |
| `/locations/buninyong` | YES | `/locations/buninyong` |
| `/locations/ballarat` | YES | `/locations/ballarat` |
| `/locations/meredith` | YES | `/locations/meredith` |
| `/guides/family-friendly-pizza-ballarat` | YES | `/guides/family-friendly-pizza-ballarat` |
| `/guides/work-christmas-party-venues-buninyong` | YES | `/guides/work-christmas-party-venues-buninyong` |
| `/guides/gluten-free-pizza-ballarat` | YES | `/guides/gluten-free-pizza-ballarat` |

### Findings

- **4 routes missing canonical tags:** `/`, `/contact`, `/terms`, `/privacy`.
- The homepage (`/`) inherits from root layout which also lacks `alternates.canonical`.
- All dynamic routes (locations, guides) correctly define canonicals.
- **No `metadataBase`** is set in `layout.tsx`. Next.js requires this to resolve relative canonical paths into full URLs. Without it, canonicals depend on the deployment hostname at request time.

---

## 3. Orphan Page Check & Internal Linking

### Global Navigation Links (Header + Footer)

| Link Target | Header | Footer | Homepage |
|-------------|--------|--------|----------|
| `/` | ✓ | ✓ | — |
| `/menu` | ✓ | ✓ | — |
| `/contact` | ✓ | ✓ | — |
| `/guides/family-friendly-pizza-ballarat` | ✓ | ✓ | — |
| `/stockists` | — | — | ✓ |
| `/locations/buninyong` | — | — | ✓ |
| `/locations/ballarat` | — | — | ✓ |
| `/locations/meredith` | — | — | ✓ |
| `/terms` | — | ✓ | — |
| `/privacy` | — | ✓ | — |
| `/#about` | ✓ | ✓ | — |

### Orphan Analysis

| Route | Linked from Global Nav? | Linked from Homepage? | Status |
|-------|------------------------|----------------------|--------|
| `/` | ✓ Header + Footer | — | OK |
| `/menu` | ✓ Header + Footer | — | OK |
| `/contact` | ✓ Header + Footer | — | OK |
| `/stockists` | **NO** | ✓ Homepage inline | **Linked only from homepage inline section** |
| `/terms` | ✓ Footer only | — | OK (low-priority page) |
| `/privacy` | ✓ Footer only | — | OK (low-priority page) |
| `/locations/buninyong` | **NO** | ✓ Homepage Locations Hub | OK (homepage link is prominent) |
| `/locations/ballarat` | **NO** | ✓ Homepage Locations Hub | OK (homepage link is prominent) |
| `/locations/meredith` | **NO** | ✓ Homepage Locations Hub | OK (homepage link is prominent) |
| `/guides/*` (3 pages) | ✓ Header + Footer (1 guide only) | — | **Only 1 of 3 guide pages linked globally** |

### Findings

- **No true orphan pages** — every route is reachable from at least one link.
- `/stockists` is only linked from an inline section on the homepage, not from the Header or Footer nav. Consider adding it to the Footer quick links.
- **2 of 3 guide pages are not globally linked.** Only `/guides/family-friendly-pizza-ballarat` appears in Header/Footer. The other 2 guides (`work-christmas-party-venues-buninyong`, `gluten-free-pizza-ballarat`) have no global navigation entry.
- Location pages are only linked from the homepage Locations Hub section — no global nav entry.

---

## 4. Semantic Hierarchy (H1–H3)

### Homepage (`app/page.tsx` + `Hero.tsx`)

| Tag | Content | Source |
|-----|---------|--------|
| `<h1>` | `RED DOOR PIZZA` | Hero.tsx:34 |
| `<h2>` | `Take Red Door Pizza Home` | page.tsx:40 |
| `<h2>` | `Wood-Fired Pizza Across the Ballarat Region` | page.tsx:62 |
| `<h3>` | `Pizza in Buninyong` | page.tsx:80 |
| `<h3>` | `12 Minutes from Ballarat` | page.tsx:101 |
| `<h3>` | `Takeaway Near Meredith` | page.tsx:122 |

**Status:** ✓ Single `<h1>`, logical `<h2>`→`<h3>` nesting.

### Menu Page (`app/menu/page.tsx`)

| Tag | Content | Source |
|-----|---------|--------|
| `<h1>` | `Our Menu` | page.tsx:390 |
| `<h2>` | Category names (6 categories) | page.tsx:429 |
| `<h3>` | Individual menu item names | page.tsx:451 |

**Status:** ✓ Single `<h1>`, clean `<h2>`→`<h3>` hierarchy per category.

### Guide Pages (`app/guides/[slug]/page.tsx`)

| Tag | Content | Source |
|-----|---------|--------|
| `<h1>` | `{data.heading}` (dynamic) | page.tsx:96 |
| `<h2>` | `{section.title}` (per section) | page.tsx:111 |
| `<h2>` | `Common Questions` | page.tsx:146 |

**Status:** ✓ Single `<h1>`, `<h2>` for sections and FAQ. No `<h3>` used — acceptable for article structure.

### Findings

- All pages have exactly **one `<h1>`** tag.
- Heading hierarchy is logical across all audited pages.
- **Minor issue:** The homepage `<h1>` is `RED DOOR PIZZA` (brand name only). Consider making it more keyword-rich, e.g., `Authentic Wood-Fired Pizza in Buninyong`.

---

## 5. Image Alt Text & Core Web Vitals

### Image Audit

| Component | Image | `alt` | `priority` | Issue |
|-----------|-------|-------|------------|-------|
| Header.tsx | `/logo.png` (desktop) | `Red Door Pizza` | ✓ YES | — |
| Header.tsx | `/logo.png` (mobile) | `Red Door Pizza` | ✓ YES | — |
| Footer.tsx | `/logo.png` | `Red Door Pizza` | **NO** | Missing priority (LCP candidate in footer) |
| Hero.tsx | `/Banner.jpg` | `Red Door Pizza Storefront` | ✓ YES | Correct — hero banner is LCP |
| OutdoorDiningSection.tsx | `/OUTDOOR DINING.JPG` | `Red Door Pizza Outdoor Courtyard Dining` | ✓ YES | — |
| GallerySection.tsx | `/Gallery/img-1.webp` | `Red Door Pizza gallery image 1` | **NO** | Generic alt text |
| GallerySection.tsx | `/Gallery/img-2.webp` | `Red Door Pizza gallery image 2` | **NO** | Generic alt text |
| GallerySection.tsx | `/Gallery/img-3.webp` | `Red Door Pizza gallery image 3` | **NO** | Generic alt text |
| GallerySection.tsx | `/Gallery/img-4.webp` | `Red Door Pizza gallery image 4` | **NO** | Generic alt text |
| GallerySection.tsx | `/Gallery/img-5.webp` | `Red Door Pizza gallery image 5` | **NO** | Generic alt text |
| GallerySection.tsx | `/Gallery/img-6.webp` | `Red Door Pizza gallery image 6` | **NO** | Generic alt text |
| GallerySection.tsx | `/Gallery/img-7.webp` | `Red Door Pizza gallery image 7` | **NO** | Generic alt text |
| GallerySection.tsx | `/Gallery/img-8.webp` | `Red Door Pizza gallery image 8` | **NO** | Generic alt text |
| GallerySection.tsx | `/Gallery/img-9.webp` | `Red Door Pizza gallery image 9` | **NO** | Generic alt text |
| GallerySection.tsx | `/Gallery/img-10.webp` | `Red Door Pizza gallery image 10` | **NO** | Generic alt text |

### Findings

- **No empty `alt=""` or missing `alt` attributes** — all images have alt text.
- **10 gallery images use generic alt text** (`Red Door Pizza gallery image N`). These should be descriptive (e.g., `Wood-fired margherita pizza at Red Door Pizza Buninyong`).
- **Hero banner correctly uses `priority`** for LCP optimization.
- **Footer logo missing `priority`** — minor impact since it's below the fold.
- Gallery images are **below the fold** and correctly omit `priority`.

---

## 6. JSON-LD Structured Data

| Page | Schema Type(s) | Present |
|------|----------------|---------|
| `layout.tsx` (all pages) | `Restaurant` | ✓ |
| `/menu` | `Menu` (full menu with MenuItem objects, prices, dietary annotations) | ✓ |
| `/stockists` | `Product` (with `hasVariant` array for 6 flavors, `AggregateOffer`) | ✓ |
| `/locations/[city]` | `Restaurant` + `FAQPage` + `Menu` (3 featured items) | ✓ |
| `/guides/[slug]` | `Article` + `FAQPage` | ✓ |
| `/` (Homepage) | **NONE** | **MISSING** |
| `/contact` | **NONE** | **MISSING** |
| `/terms` | **NONE** | — (acceptable) |
| `/privacy` | **NONE** | — (acceptable) |

### Findings

- **8 JSON-LD blocks across 5 files** — good coverage for key SEO pages.
- The root `Restaurant` schema in `layout.tsx` is inherited by all pages, including the homepage.
- **Homepage has no page-level JSON-LD** — relies on root layout `Restaurant` schema. Consider adding `LocalBusiness` or `WebSite` schema with `SearchAction` for sitelinks search box.
- **Contact page has no JSON-LD** — consider adding `LocalBusiness` or `Organization` schema with contact points.
- The `Product` schema on `/stockists` correctly uses `hasVariant` and `AggregateOffer`.
- Guide pages correctly pair `Article` + `FAQPage` for rich snippet eligibility.

---

## 7. Additional Observations

### `metadataBase` Missing

The root layout (`layout.tsx`) does not define `metadataBase`. This means:
- All relative canonical URLs (`/menu`, `/stockists`, etc.) are resolved against the request origin.
- In staging/preview environments, canonicals may point to the wrong domain.
- **Fix:** Add `metadataBase: new URL("https://www.reddoorpizza.com.au")` to the root layout metadata.

### `keywords` Meta Tag

Only the root layout defines `keywords`. Google officially ignores this tag, so its impact is negligible. No action needed.

### Social Meta Tags (Open Graph / Twitter)

No page exports `openGraph` or `twitter` metadata. Social sharing will rely on whatever platforms scrape from the page. Consider adding `openGraph` metadata to key pages for richer social previews.

---

## Actionable Fixes (Prioritized)

### P0 — Critical

| # | Issue | Fix |
|---|-------|-----|
| 1 | **Missing `metadataBase`** in `layout.tsx` | Add `metadataBase: new URL("https://www.reddoorpizza.com.au")` to root layout metadata |
| 2 | **Missing canonical on `/`** | Export `metadata` with `alternates: { canonical: "/" }` from `app/page.tsx` |
| 3 | **Missing canonical on `/contact`** | Add `alternates: { canonical: "/contact" }` to contact page metadata |
| 4 | **Missing canonical on `/terms`** | Add `alternates: { canonical: "/terms" }` to terms page metadata |
| 5 | **Missing canonical on `/privacy`** | Add `alternates: { canonical: "/privacy" }` to privacy page metadata |

### P1 — High

| # | Issue | Fix |
|---|-------|-----|
| 6 | **7 titles exceed 60 characters** — will be truncated in SERPs | Shorten titles for `/stockists`, all 3 location pages, and all 3 guide pages |
| 7 | **2 of 3 guide pages not in global nav** | Add a guides dropdown or link all 3 guides in Footer |
| 8 | **`/stockists` not in Header/Footer nav** | Add to Footer quick links |

### P2 — Medium

| # | Issue | Fix |
|---|-------|-----|
| 9 | **10 gallery images have generic alt text** | Replace with descriptive, keyword-rich alt text per image |
| 10 | **Homepage `<h1>` is brand-only** | Consider `Authentic Wood-Fired Pizza in Buninyong` for keyword targeting |
| 11 | **No Open Graph metadata** on any page | Add `openGraph` exports to layout and key pages |
| 12 | **Contact page has no JSON-LD** | Add `LocalBusiness` schema with phone, address, hours |

### P3 — Low

| # | Issue | Fix |
|---|-------|-----|
| 13 | **Footer logo missing `priority`** | Add `priority` prop (minor, below-fold) |
| 14 | **Homepage has no page-level JSON-LD** | Add `WebSite` schema with `SearchAction` for sitelinks |
| 15 | **`keywords` meta tag** on root layout | No action needed (ignored by Google) |
