import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://allure-ruby-rwa.vercel.app";

type PageMeta = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({ title, description, path }: PageMeta): Metadata {
  const fullTitle = `${title} | Allure Ruby RWA`;
  const url = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "Allure Ruby RWA — FTHTrading",
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    alternates: { canonical: url },
  };
}
