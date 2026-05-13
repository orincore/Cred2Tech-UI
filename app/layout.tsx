import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import { ThemeProvider } from "./components/ThemeProvider";
import theme from "./theme";
import { OrganizationJsonLd, WebsiteJsonLd, ServiceJsonLd, LocalBusinessJsonLd } from "./components/JsonLd";

// Hikasami — the only typeface used across the entire site.
// All three legacy CSS variables (--font-outfit / --font-inter / --font-jb-mono)
// are mapped to Hikasami so existing utility classes resolve to it.
const hikasami = localFont({
  src: [
    { path: "../public/fonts/Hikasami-Regular.otf",  weight: "300", style: "normal" },
    { path: "../public/fonts/Hikasami-Regular.otf",  weight: "400", style: "normal" },
    { path: "../public/fonts/Hikasami-Medium.otf",   weight: "500", style: "normal" },
    { path: "../public/fonts/Hikasami-SemiBold.otf", weight: "600", style: "normal" },
    { path: "../public/fonts/Hikasami-Bold.otf",     weight: "700", style: "normal" },
    // Hikasami doesn't ship heavier cuts; alias 800/900 to Bold so font-extrabold/font-black still render in Hikasami
    { path: "../public/fonts/Hikasami-Bold.otf",     weight: "800", style: "normal" },
    { path: "../public/fonts/Hikasami-Bold.otf",     weight: "900", style: "normal" },
  ],
  variable: "--font-hikasami",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.cred2tech.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sunby Credtech | Cred2Tech - India's #1 MSME Credit Platform",
    template: "%s | Sunby Credtech - Cred2Tech",
  },
  description: "Sunby Credtech Private Limited presents Cred2Tech - India's leading MSME credit platform. Sunby Credtech offers instant business loan eligibility checks, DSA partner network, and multi-lender matching with leading banks and NBFCs. Bengaluru based fintech company specializing in MSME lending.",
  keywords: [
    "Sunby Credtech", "Sunby Credtech Private Limited", "Cred2Tech", "Credtech",
    "MSME loan", "business loan India", "DSA platform", "loan eligibility check",
    "MSME credit", "business loan agent", "loan aggregator India",
    "NBFC loan", "digital lending platform", "MSME lending India",
    "loan matching platform", "credit marketplace", "small business loan",
    "SME finance", "direct selling agent loan", "loan CRM", "MSME loan eligibility",
    "instant business loan", "Bengaluru fintech", "Indian credit platform",
    "GST loan", "ITR based loan", "working capital loan", "business expansion loan",
    "Sunby Credtech Bengaluru", "Sunby Credtech India", "Sunby fintech"
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
    url: `https://www.cred2tech.com/`,
    siteName: "Sunby Credtech - Cred2Tech",
    title: "Sunby Credtech | Cred2Tech - India's #1 MSME Credit Platform",
    description: "Sunby Credtech Private Limited - India's leading MSME credit platform through Cred2Tech. Instant business loan eligibility checks, DSA network, multi-lender matching. Bengaluru based fintech.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sunby Credtech - India's MSME Credit Platform via Cred2Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunby Credtech | Cred2Tech - India's MSME Credit Platform",
    description: "Sunby Credtech - India's leading MSME credit platform. Instant business loan eligibility checks, DSA network, multi-lender matching.",
    images: ["/og-image.png"],
    creator: "@cred2tech",
    site: "@cred2tech",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  alternates: {
    canonical: `https://www.cred2tech.com/`,
    languages: {
      'en-IN': `https://www.cred2tech.com/`,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logos/favicon.png", type: "image/png" },
    ],
    shortcut: "/logos/favicon.png",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#0a1628",
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "finance",
  classification: "Financial Services, MSME Lending, Business Loans",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (
    <html suppressHydrationWarning lang="en" className={`${hikasami.variable} font-(family-name:--font-hikasami)`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* Google Analytics 4 (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0V9EX82J7Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0V9EX82J7Z');
          `}
        </Script>
        {/* Alias every legacy font variable to Hikasami so the entire site uses one typeface. Also inject dynamic color variables from theme.ts */}
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              --font-outfit: var(--font-hikasami);
              --font-inter: var(--font-hikasami);
              --font-jb-mono: var(--font-hikasami);
              --bg: ${theme.colors.bg};
              --surface: ${theme.colors.surface};
              --surface-low: ${theme.colors.surfaceLow};
              --outline: ${theme.colors.outline};
              --on-surface: ${theme.colors.onSurface};
              --on-muted: ${theme.colors.onMuted};
            }
            body,html { font-family: var(--font-hikasami), system-ui, sans-serif; }
            
            .dark {
              --bg: ${theme.colors.dark.bg};
              --surface: ${theme.colors.dark.surface};
              --surface-low: ${theme.colors.dark.surfaceLow};
              --outline: ${theme.colors.dark.outline};
              --on-surface: ${theme.colors.dark.onSurface};
              --on-muted: ${theme.colors.dark.onMuted};
            }


          `
        }} />
      </head>
      <body suppressHydrationWarning className="min-h-screen flex flex-col transition-colors duration-300 bg-[var(--bg)] text-[var(--on-surface)]">
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          disableTransitionOnChange
        >
          {/* JSON-LD Structured Data */}
          <OrganizationJsonLd siteUrl={siteUrl} />
          <WebsiteJsonLd siteUrl={siteUrl} />
          <ServiceJsonLd siteUrl={siteUrl} />
          <LocalBusinessJsonLd siteUrl={siteUrl} />
          
          <Script src="/lottie/lottie-player.js" strategy="beforeInteractive" id="global-lottie-player" />
          <Header />
          <PageTransition>
            <main className="flex-1">{children}</main>
          </PageTransition>
          <Footer />
        </ThemeProvider>
        <style>{`
          @keyframes pageTransition {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .page-transition {
            animation: pageTransition 0.4s ease-out;
          }
        `}</style>
      </body>
    </html>
  );
}
