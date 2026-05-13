import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cred2tech.com";
  const crmUrl = "https://app.cred2tech.com";
  const currentDate = new Date();
  
  // Blog posts data with publication dates for better SEO
  const blogPosts = [
    {
      slug: "bridging-the-gap-digital-renaissance-of-indian-msmes",
      lastModified: new Date("2024-01-15"),
      publishedDate: new Date("2024-01-15"),
    },
    {
      slug: "empowering-the-engine-of-india-vital-role-of-dsas",
      lastModified: new Date("2024-02-01"),
      publishedDate: new Date("2024-02-01"),
    },
  ];

  // Main marketing pages - highest priority
  const mainPages = [
    {
      url: siteUrl,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${siteUrl}/msme`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: `${siteUrl}/dsa`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
  ];

  // Information pages - high priority
  const infoPages = [
    {
      url: `${siteUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/how-it-works`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: `${siteUrl}/blogs`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  // Engagement pages - medium priority
  const engagementPages = [
    {
      url: `${siteUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  // CRM/Portal pages - reference to subdomain (for cross-domain SEO)
  const crmPages = [
    {
      url: `${crmUrl}`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${crmUrl}/login`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${crmUrl}/register`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];

  // Generate blog post URLs
  const blogUrls = blogPosts.map((post) => ({
    url: `${siteUrl}/blogs/${post.slug}`,
    lastModified: post.lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  // Note: Main site sitemap doesn't include app.cred2tech.com pages directly
  // The CRM subdomain should have its own sitemap.xml at app.cred2tech.com/sitemap.xml
  // But we reference it in the crossdomain sitemap or robots.txt

  return [...mainPages, ...infoPages, ...engagementPages, ...blogUrls];
}

// Cross-domain sitemap index for reference
export function generateCrossDomainSitemapIndex() {
  return {
    sitemaps: [
      "https://cred2tech.com/sitemap.xml",
      "https://app.cred2tech.com/sitemap.xml", // CRM subdomain
    ],
  };
}
