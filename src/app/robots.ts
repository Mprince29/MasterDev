import type { MetadataRoute } from "next";

const SITE_URL = "https://master-dev-pi.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/blog",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
