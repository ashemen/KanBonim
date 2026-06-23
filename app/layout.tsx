import type { Metadata } from "next";
import { Noto_Sans_Hebrew } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { site } from "@/content/site";

const hebrewFont = Noto_Sans_Hebrew({
  subsets: ["hebrew", "latin"],
  variable: "--font-hebrew",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "כאן בונים | שדכנות, אימון וליווי זוגי",
    template: "%s | כאן בונים"
  },
  description: site.description,
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  openGraph: {
    title: "כאן בונים",
    description: site.description,
    url: site.url,
    siteName: "כאן בונים",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "/images/brand/logo-color-white.png",
        width: 900,
        height: 836,
        alt: "לוגו כאן בונים - אהבה שבנויה נכון"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" data-scroll-behavior="smooth">
      <body className={hebrewFont.variable}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
