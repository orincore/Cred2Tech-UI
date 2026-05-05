import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import { ThemeProvider } from "./components/ThemeProvider";
import theme from "./theme";

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

export const metadata: Metadata = {
  title: "Cred2Tech · Credit, Simplified.",
  description: "Cred2Tech — The complete platform for MSME lending agents",
  icons: {
    icon: "/logos/favicon.png",
    shortcut: "/logos/favicon.png",
    apple: "/logos/favicon.png",
  },
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
