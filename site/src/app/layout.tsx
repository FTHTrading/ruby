import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Allure Ruby RWA | FTHTrading",
    template: "%s | Allure Ruby RWA",
  },
  description:
    "Institutional real-world asset tokenization for the Allure Ruby and Siam Emerald gem collection.",
  openGraph: {
    siteName: "Allure Ruby RWA — FTHTrading",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans">
        <SiteHeader />
        <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
