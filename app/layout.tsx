import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Red Door Pizza | Wood-Fired Pizza in Buninyong, VIC",
  description:
    "Top-rated wood-fired pizzeria in Buninyong, Australia. Locally sourced meats, fresh Italian ingredients, and warm rustic dining. Rated 4.6 stars.",
  keywords: [
    "pizza",
    "buninyong",
    "wood-fired",
    "red door pizza",
    "pizzeria",
    "victoria",
    "ballarat",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Red Door Pizza",
  image: "https://www.reddoorpizza.com.au/logo.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "401 Warrenheip St",
    addressLocality: "Buninyong",
    addressRegion: "VIC",
    postalCode: "3357",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -37.6534,
    longitude: 143.8821,
  },
  telephone: "+61353418235",
  priceRange: "$$",
  servesCuisine: ["Pizza", "Italian"],
  url: "https://www.reddoorpizza.com.au",
  menu: "https://orders.wowapps.com",
  sameAs: [
    "https://www.facebook.com/share/1EsfTmXM4o/?mibextid=wwXIfr",
    "https://www.instagram.com/reddoor_pizza/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-brand-gold text-brand-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
