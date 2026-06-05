import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Allure Ruby RWA | FTHTrading",
  description:
    "Institutional real-world asset tokenization for the Allure Ruby and Siam Emerald gem collection.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main className="mx-auto max-w-6xl px-6 py-12">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
