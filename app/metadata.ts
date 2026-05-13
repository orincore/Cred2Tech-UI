import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sunby Credtech | Cred2Tech - India's #1 MSME Credit Platform",
  description: "Sunby Credtech Private Limited - India's leading MSME credit platform via Cred2Tech. Sunby Credtech offers instant business loan eligibility checks, DSA partner network, and multi-lender matching with 50+ leading banks and NBFCs. Bengaluru based fintech company specializing in MSME lending solutions.",
  keywords: [
    "Sunby Credtech", "Sunby Credtech Private Limited", "Cred2Tech", "Credtech",
    "MSME loan", "business loan India", "DSA platform", "loan eligibility check",
    "MSME credit", "business loan agent", "loan aggregator India",
    "NBFC loan", "bank loan", "digital lending platform", "MSME lending India",
    "loan matching platform", "credit marketplace", "small business loan",
    "SME finance", "direct selling agent loan", "loan CRM", "MSME loan eligibility",
    "instant business loan", "Bengaluru fintech", "Indian credit platform",
    "GST loan", "ITR based loan", "working capital loan", "business expansion loan",
    "unsecured business loan", "secured business loan", "machinery loan",
    "invoice discounting", "trade finance", "supply chain finance",
    "Sunby Credtech Bengaluru", "Sunby Credtech India"
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
    siteName: "Sunby Credtech - Cred2Tech",
    title: "Sunby Credtech | Cred2Tech - India's #1 MSME Credit Platform",
    description: "India's leading MSME credit platform by Sunby Credtech. Instant business loan eligibility checks, DSA network, multi-lender matching with 50+ banks and NBFCs.",
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
    canonical: "https://www.cred2tech.com/",
    languages: {
      'en-IN': "https://www.cred2tech.com/",
    },
  },
};
