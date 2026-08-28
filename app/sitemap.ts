import type { MetadataRoute } from "next";
import { citySlugs } from "@/app/config/locations";

export const BASE_URL = "https://www.reddoorpizza.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const locationRoutes: MetadataRoute.Sitemap = citySlugs.map((slug) => ({
    url: `${BASE_URL}/locations/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...locationRoutes];
}
