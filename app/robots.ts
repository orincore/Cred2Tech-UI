import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.cred2tech.com";
  const crmUrl = "https://app.cred2tech.com";
  
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        crawlDelay: 1,
        disallow: [
          "/admin/",
          "/api/",
          "/_next/",
          "/forgot-password",
          "/*.json$",
          "/login/",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin/", "/forgot-password", "/login/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/admin/", "/forgot-password", "/login/"],
      },
    ],
    sitemap: `https://www.cred2tech.com/sitemap.xml`,
    host: "www.cred2tech.com",
    // Note: CRM sitemap is at https://app.cred2tech.com/sitemap.xml
    // Cross-domain sitemap index should be submitted separately to Search Console
  };
}
