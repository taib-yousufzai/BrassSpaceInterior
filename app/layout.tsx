import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SchemaInjector from "@/components/SchemaInjector";
import SmoothScroll from "@/components/SmoothScroll";
import { organizationSchema } from "@/lib/schema";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} - Thoughtful Interiors. Built to Last.`,
    template: `%s | ${SITE_CONFIG.name}`
  },
  description: SITE_CONFIG.description,
  keywords: ["interior design", "residential interiors", "commercial interiors", "modular kitchens", "wardrobes", "renovation", "Delhi", "NCR"],
  authors: [{ name: SITE_CONFIG.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SchemaInjector schema={organizationSchema} />
      </head>
      <body className={`${inter.className} antialiased`}>
        <SmoothScroll />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
