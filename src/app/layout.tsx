import type { Metadata } from "next";
import { Barlow, Public_Sans } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CBI Headless",
  description: "Site institucional com WordPress + Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${publicSans.variable} ${barlow.variable} antialiased`}>
        {}
        {}
        <Layout siteName="Projeto Headless CMS">{children}</Layout>
      </body>
    </html>
  );
}
