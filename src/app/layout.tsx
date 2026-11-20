import type { Metadata, Viewport } from "next";
import { Anton, Montserrat } from "next/font/google";
import { site } from "@/data/site-content";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
});

const montserrat = Montserrat({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.metadata.title,
  description: site.metadata.description,
  openGraph: {
    title: site.metadata.title,
    description: site.metadata.description,
    locale: "pt_BR",
    type: "website",
    siteName: `${site.name} · ${site.org}`,
  },
  twitter: {
    card: "summary_large_image",
    title: site.metadata.title,
    description: site.metadata.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#1c1b1a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${anton.variable} ${montserrat.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
