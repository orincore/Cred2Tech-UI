import { Suspense } from "react";
import type { Metadata } from "next";
import { DM_Sans, Inter, Outfit, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import theme from "./theme";
import Header from "./components/Header";
import TransitionOverlay from "./components/TransitionOverlay";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jbMono = JetBrains_Mono({
  variable: "--font-jb-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cred2Tech · Credit, Simplified.",
  description: "Cred2Tech — The complete platform for MSME lending agents",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Build CSS variable string from theme for inline injection
  const cssVarString = Object.entries(theme.cssVars)
    .map(([k, v]) => `${k}:${v}`)
    .join(';');

  return (
    <html suppressHydrationWarning lang="en" className={`${outfit.variable} ${inter.variable} ${jbMono.variable} font-(family-name:--font-inter)`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* Inject theme CSS vars so they're always in sync with theme.ts */}
        <style>{`:root{${cssVarString}}`}</style>
      </head>
      <body suppressHydrationWarning>
        <Script src="/lottie/lottie-player.js" strategy="beforeInteractive" id="global-lottie-player" />
        <Header />
        <Suspense>
          <TransitionOverlay />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
