import type { MetadataRoute } from "next";
import { citySlugs } from "@/app/config/locations";
import { guideSlugs } from "@/app/config/guides";

export const BASE_URL = "https://www.reddoorpizza.com.au";

const LAST_MODIFIED = new Date("2026-08-30");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: LAST_MODIFIED,
    },
    {
      url: `${BASE_URL}/menu`,
      lastModified: LAST_MODIFIED,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: LAST_MODIFIED,
    },
    {
      url: `${BASE_URL}/stockists`,
      lastModified: LAST_MODIFIED,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: LAST_MODIFIED,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: LAST_MODIFIED,
    },
  ];

  const locationRoutes: MetadataRoute.Sitemap = citySlugs.map((slug) => ({
    url: `${BASE_URL}/locations/${slug}`,
    lastModified: LAST_MODIFIED,
  }));

  const guideRoutes: MetadataRoute.Sitemap = guideSlugs.map((slug) => ({
    url: `${BASE_URL}/guides/${slug}`,
    lastModified: LAST_MODIFIED,
  }));

  const routes = [
    ...staticRoutes,
    ...locationRoutes,
    ...guideRoutes,
  ];

  return Array.from(
    new Map(routes.map((route) => [route.url, route])).values()
  );
}