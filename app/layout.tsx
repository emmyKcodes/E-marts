import type { Metadata, Viewport } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const instrumentSans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "E-Marts | Search",
    template: "%s | E-Marts",
  },

  description:
    "E-Marts is a proudly Nigerian-owned online shopping platform. Shop fashion, electronics, groceries, and more — delivered to your door across Osun State and beyond.",
  keywords: [
    "E-Marts",
    "online shopping Nigeria",
    "Nigerian marketplace",
    "buy online Nigeria",
    "fashion Nigeria",
    "electronics Nigeria",
    "Osun State shopping",
    "ecommerce Nigeria",
  ],
  applicationName: "E-Marts",
  authors: [{ name: "E-Marts Team", url: "https://emarts.ng" }],
  creator: "E-Marts",
  publisher: "E-Marts",
  category: "Shopping",

  openGraph: {
    title: "E-Marts — Nigeria's Online Marketplace",
    description:
      "Shop thousands of products from trusted sellers. Fashion, electronics, groceries and more — delivered fast across Nigeria.",
    type: "website",
    locale: "en_NG",
    siteName: "E-Marts",
    url: "https://emarts.ng",
  },

  icons: {
    icon: "/emartlogo.svg",
    shortcut: "/emartlogo.svg",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://emarts.ng",
  },

  formatDetection: {
    address: false,
    telephone: false,
    email: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#d6ff7e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${instrumentSans.variable} antialiased`}>
        <div className="min-h-screen flex flex-col bg-background">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
