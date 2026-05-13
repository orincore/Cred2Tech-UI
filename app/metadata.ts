import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cred2Tech | Sunby Credtech - India's #1 MSME Credit Platform",
  description: "Cred2Tech by Sunby Credtech Private Limited - India's leading MSME credit platform. Instant business loan eligibility checks, DSA partner network, multi-lender matching for HDFC, Axis, Kotak, Yes Bank, IDFC First & more. Simplify MSME lending with AI-powered technology. Bengaluru based fintech.",
  keywords: [
    "Cred2Tech", "Sunby Credtech", "Credtech", "MSME loan", "business loan India",
    "DSA platform", "loan eligibility check", "MSME credit", "business loan agent",
    "loan aggregator India", "HDFC business loan", "Axis Bank MSME loan",
    "Kotak business loan", "Yes Bank loan", "IDFC First loan", "NBFC loan",
    "digital lending platform", "MSME lending India", "loan matching platform",
    "credit marketplace", "small business loan", "SME finance",
    "direct selling agent loan", "loan CRM", "MSME loan eligibility",
    "instant business loan", "Bengaluru fintech", "Indian credit platform",
    "GST loan", "ITR based loan", "working capital loan", "business expansion loan",
    "unsecured business loan", "secured business loan", "machinery loan",
    "invoice discounting", "trade finance", "supply chain finance"
  ],
  authors: [{ name: "Sunby Credtech Private Limited" }],
  creator: "Sunby Credtech Private Limited",
  publisher: "Sunby Credtech Private Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Cred2Tech - Sunby Credtech",
    title: "Cred2Tech | Sunby Credtech - India's #1 MSME Credit Platform",
    description: "India's leading MSME credit platform by Sunby Credtech. Instant business loan eligibility checks, DSA network, multi-lender matching with HDFC, Axis, Kotak & more.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cred2Tech - India's MSME Credit Platform by Sunby Credtech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cred2Tech | Sunby Credtech - India's MSME Credit Platform",
    description: "India's leading MSME credit platform. Instant business loan eligibility checks, DSA network, multi-lender matching.",
    images: ["/og-image.png"],
    creator: "@cred2tech",
    site: "@cred2tech",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  alternates: {
    canonical: "https://cred2tech.com",
    languages: {
      'en-IN': "https://cred2tech.com",
    },
  },
};
