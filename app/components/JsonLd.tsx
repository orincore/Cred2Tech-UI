"use client";

import Script from "next/script";

interface OrganizationJsonLdProps {
  siteUrl?: string;
}

export function OrganizationJsonLd({ siteUrl = "https://www.cred2tech.com" }: OrganizationJsonLdProps) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sunby Credtech Private Limited",
    "alternateName": ["Cred2Tech", "Sunby Credtech"],
    "brand": {
      "@type": "Brand",
      "name": "Cred2Tech"
    },
    "url": siteUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteUrl}/logos/favicon.png`,
      "width": 512,
      "height": 512,
    },
    "description": "Sunby Credtech Private Limited operates Cred2Tech, India's leading MSME credit platform. Sunby Credtech offers instant business loan eligibility checks, DSA partner network, and multi-lender matching for HDFC, Axis, Kotak, Yes Bank and IDFC First.",
    "founders": [
      {
        "@type": "Person",
        "name": "Bobby Thomas M",
        "jobTitle": "Co-Founder",
        "sameAs": "https://www.linkedin.com/in/bobby-thomas-m-7536519/",
      },
      {
        "@type": "Person",
        "name": "Sunil Agarwal",
        "jobTitle": "Co-Founder",
        "sameAs": "https://www.linkedin.com/in/sunil-agarwal-65254416/",
      },
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "A1103, Amoda Valmark",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "addressCountry": "IN",
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-8867522242",
        "email": "contact@cred2tech.com",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"],
        "areaServed": "IN",
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-9886401608",
        "email": "contact@cred2tech.com",
        "contactType": "sales",
        "availableLanguage": ["English", "Hindi"],
        "areaServed": "IN",
      },
    ],
    "sameAs": [
      "https://linkedin.com/company/cred2tech",
      "https://cred2tech.com",
    ],
    "email": "contact@cred2tech.com",
    "keywords": [
      "Sunby Credtech", "Sunby Credtech Private Limited", "Cred2Tech",
      "MSME loan", "business loan India", "DSA platform",
      "loan eligibility", "MSME credit", "Bengaluru fintech"
    ],
  };

  return (
    <Script
      id="organization-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}

interface WebsiteJsonLdProps {
  siteUrl?: string;
  searchUrl?: string;
}

export function WebsiteJsonLd({ 
  siteUrl = "https://www.cred2tech.com",
  searchUrl = "https://www.cred2tech.com/search?q={search_term_string}"
}: WebsiteJsonLdProps) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Sunby Credtech - Cred2Tech",
    "alternateName": ["Cred2Tech", "Sunby Credtech Private Limited"],
    "url": siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": searchUrl,
      },
      "query-input": "required name=search_term_string",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sunby Credtech Private Limited",
      "alternateName": "Cred2Tech",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logos/favicon.png`,
      },
    },
  };

  return (
    <Script
      id="website-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  );
}

interface ServiceJsonLdProps {
  siteUrl?: string;
}

export function ServiceJsonLd({ siteUrl = "https://www.cred2tech.com" }: ServiceJsonLdProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "Sunby Credtech MSME Loan Platform - Cred2Tech",
    "alternateName": ["Cred2Tech Loan Platform", "Sunby Credtech Business Services"],
    "description": "Sunby Credtech Private Limited offers AI-powered MSME loan eligibility through Cred2Tech platform. Connect with 50+ leading banks and NBFCs for instant business loan eligibility checks.",
    "provider": {
      "@type": "Organization",
      "name": "Sunby Credtech Private Limited",
      "alternateName": "Cred2Tech",
      "url": siteUrl,
    },
    "areaServed": {
      "@type": "Country",
      "name": "India",
    },
    "category": "Business Loan",
    "audience": {
      "@type": "Audience",
      "audienceType": "MSME Owners, DSA Agents, Business Owners",
    },
    "offers": {
      "@type": "Offer",
      "description": "Free loan eligibility check, credit packages starting from ₹1,000",
      "areaServed": "India",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "MSME Loan Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Instant Loan Eligibility Check",
            "description": "Check eligibility across 50+ lenders in 5 minutes",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DSA Partner Platform",
            "description": "Complete CRM and loan management system for DSA agents",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Multi-Lender Matching",
            "description": "Match with HDFC, Axis, Kotak, Yes Bank, IDFC First, and more",
          },
        },
      ],
    },
  };

  return (
    <Script
      id="service-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  );
}

interface LocalBusinessJsonLdProps {
  siteUrl?: string;
}

export function LocalBusinessJsonLd({ siteUrl = "https://www.cred2tech.com" }: LocalBusinessJsonLdProps) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Sunby Credtech Private Limited - Cred2Tech",
    "alternateName": ["Sunby Credtech", "Cred2Tech"],
    "image": `${siteUrl}/og-image.png`,
    "@id": siteUrl,
    "url": siteUrl,
    "telephone": ["+91-8867522242", "+91-9886401608"],
    "email": "contact@cred2tech.com",
    "sameAs": [
      "https://linkedin.com/company/cred2tech",
      "https://cred2tech.com",
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "A1103, Amoda Valmark",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560035",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9716,
      "longitude": 77.5946,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00",
      },
    ],
    "priceRange": "₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, Bank Transfer",
    "areaServed": {
      "@type": "Country",
      "name": "India",
    },
    "hasMap": "https://maps.google.com/?q=A1103+Amoda+Valmark+Bengaluru+Karnataka",
    "isAccessibleForFree": true,
  };

  return (
    <Script
      id="localbusiness-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}

interface ArticleJsonLdProps {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  keywords?: string[];
}

export function ArticleJsonLd({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName,
  keywords = [],
}: ArticleJsonLdProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Organization",
      "name": authorName,
      "url": "https://cred2tech.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Cred2Tech - Sunby Credtech",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cred2tech.com/logos/favicon.png",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url,
    },
    "keywords": keywords.join(", "),
  };

  return (
    <Script
      id="article-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  );
}

interface BreadcrumbJsonLdProps {
  items: { name: string; url: string }[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };

  return (
    <Script
      id="breadcrumb-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}
