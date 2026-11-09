import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://friendsinpondy.vercel.app"; // update to your custom domain once set

export const metadata: Metadata = {
  // ── Core ────────────────────────────────────────────────────────────────
  title: "Friends in Pondy - Puducherry Trip Planner",
  description:
    "Travel Pondy with 100% Safety & Zero Hassle! Personally verified safe stays, trusted yellow-board cabs, and 24/7 local buddy emergency support in Puducherry. Zero middlemen. Zero scams.",

  // ── Canonical & robots ──────────────────────────────────────────────────
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  // ── Favicon / icons ─────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/logo.jpeg", type: "image/jpeg" },
    ],
    apple: [
      { url: "/logo.jpeg", type: "image/jpeg" },
    ],
    shortcut: "/logo.jpeg",
  },

  // ── Open Graph (WhatsApp / Facebook previews) ────────────────────────────
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Friends in Pondy",
    title: "Friends in Pondy - Puducherry Trip Planner",
    description:
      "100% Personally Verified Safe Stays • Trusted Yellow-Board Cabs • 24/7 Local Buddy Emergency Support. Travel Pondy with zero hassle.",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Friends in Pondy — Your Trusted Travel Buddies",
      },
    ],
    locale: "en_IN",
  },

  // ── Twitter / X card ────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Friends in Pondy - Puducherry Trip Planner",
    description:
      "100% Personally Verified Safe Stays • Trusted Yellow-Board Cabs • 24/7 Local Buddy Support in Puducherry.",
    images: ["/logo.jpeg"],
  },

  // ── App / PWA hints ─────────────────────────────────────────────────────
  applicationName: "Friends in Pondy",
  keywords: [
    "Pondicherry trip planner",
    "Puducherry safe stays",
    "yellow board cab Pondicherry",
    "Friends in Pondy",
    "verified stays Pondy",
    "Pondy travel agency",
    "local travel buddy Puducherry",
    "safe trip Pondicherry",
  ],
  authors: [{ name: "Friends in Pondy" }],
  creator: "Friends in Pondy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Fonts — loaded via <link> to avoid next/font network calls during CI build */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Viewport — explicit for mobile rendering */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        {/* Theme colour — matches brand teal */}
        <meta name="theme-color" content="#1B4D57" />
      </head>
      <body className="antialiased min-h-screen bg-brand-cream text-brand-teal selection:bg-brand-terracotta selection:text-white">
        {children}
      </body>
    </html>
  );
}
