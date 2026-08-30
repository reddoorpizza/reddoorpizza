import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { PHONE_NUMBER_TEL, ADDRESS } from "@/app/config/constants";
import Analytics from "@/app/components/Analytics";

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
  metadataBase: new URL("https://www.reddoorpizza.com.au"),
  title: {
    default: "Red Door Pizza | Wood-Fired Pizza in Buninyong, VIC",
    template: "%s | Red Door Pizza",
  },
  description:
    "Authentic wood-fired pizza in Buninyong, just 12 minutes from Ballarat. Imported fior di latte, locally sourced ingredients, gluten-free options, and family-friendly dining.",
  keywords: [
    "pizza",
    "buninyong",
    "wood-fired",
    "red door pizza",
    "pizzeria",
    "victoria",
    "ballarat",
  ],
  icons: {
    icon: [
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  openGraph: {
    siteName: "Red Door Pizza",
    locale: "en_AU",
    type: "website",
    title: "Red Door Pizza | Wood-Fired Pizza in Buninyong",
    description:
      "Authentic wood-fired pizza in Buninyong, just 12 minutes from Ballarat. Imported fior di latte, locally sourced ingredients, and family-friendly dining.",
    url: "https://www.reddoorpizza.com.au",
    images: [
      {
        url: "/Banner.jpg",
        width: 1200,
        height: 630,
        alt: "Red Door Pizza — Wood-Fired Pizza in Buninyong",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Door Pizza | Wood-Fired Pizza in Buninyong",
    description:
      "Authentic wood-fired pizza in Buninyong, just 12 minutes from Ballarat. Imported fior di latte and locally sourced ingredients.",
    images: ["/Banner.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://www.reddoorpizza.com.au/#restaurant",
  name: "Red Door Pizza",
  image: "https://www.reddoorpizza.com.au/logo.png",
  url: "https://www.reddoorpizza.com.au",
  telephone: PHONE_NUMBER_TEL.replace("tel:", ""),
  priceRange: "$$",
  servesCuisine: ["Pizza", "Italian"],
  menu: "https://www.reddoorpizza.com.au/menu",
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.locality,
    addressRegion: ADDRESS.region,
    postalCode: ADDRESS.postcode,
    addressCountry: ADDRESS.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -37.6534,
    longitude: 143.8821,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "17:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday", "Sunday"],
      opens: "12:00",
      closes: "21:00",
    },
  ],
  areaServed: ["Buninyong", "Ballarat", "Meredith"],
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
        <Analytics />
      </head>
      <body className="min-h-screen bg-brand-gold text-brand-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
