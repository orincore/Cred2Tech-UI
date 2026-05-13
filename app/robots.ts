import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cred2tech.com";
  const crmUrl = "https://app.cred2tech.com";
  
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
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
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
    // Note: CRM sitemap is at https://app.cred2tech.com/sitemap.xml
    // Cross-domain sitemap index should be submitted separately to Search Console
  };
}
