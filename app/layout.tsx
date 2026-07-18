import React from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { SOCIAL_LINKS } from "@/lib/content";

const syneFont = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | ANTONIO HERRERA",
    default: "ANTONIO HERRERA | Designer & Performing Artist, Zurich",
  },
  description:
    "Antonio Herrera, designer and performing artist in Zurich. Extraordinary design and live music experiences.",
  metadataBase: new URL("https://antonioherrera.ch"),
  openGraph: {
    title: "ANTONIO HERRERA | Designer & Performing Artist, Zurich",
    description:
      "Antonio Herrera, designer and performing artist in Zurich. Extraordinary design and live music experiences.",
    url: "https://antonioherrera.ch",
    siteName: "Antonio Herrera",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ANTONIO HERRERA",
    description: "Designer and Performing Artist, Zurich.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Antonio Herrera",
    "jobTitle": ["Designer", "Performing Artist"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Zurich",
      "addressCountry": "CH",
    },
    "url": "https://antonioherrera.ch",
    "sameAs": [
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.youtube,
      SOCIAL_LINKS.spotify,
      SOCIAL_LINKS.boutique,
    ],
  };

  return (
    <html lang="en" className={`${syneFont.variable} scroll-smooth`}>
      <body className={`${syneFont.variable} bg-black text-white font-syne min-h-screen flex flex-col antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <CustomCursor />
        <Nav />
        {/* We add a padding-top here of pt-28/pt-20 to offset the fixed headers and stripes */}
        <main className="flex-grow pt-[105px] md:pt-[105px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
