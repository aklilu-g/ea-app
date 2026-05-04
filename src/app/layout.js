import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "EA Towing | 24/7 Towing & Roadside Assistance in the GTA",
  description:
    "EA Towing & Recovery provides 24/7 towing, recovery, and roadside assistance across the Greater Toronto Area.",
  openGraph: {
    title: "EA Towing | 24/7 Towing & Roadside Assistance",
    description:
      "Fast, professional towing, recovery, and roadside assistance across the Greater Toronto Area.",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "EA Towing tow truck with 24/7 towing and roadside assistance details",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EA Towing | 24/7 Towing & Roadside Assistance",
    description:
      "Fast, professional towing, recovery, and roadside assistance across the Greater Toronto Area.",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
