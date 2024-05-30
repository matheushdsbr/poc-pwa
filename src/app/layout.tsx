import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sião - PWA",
  description: "PWA application with Next 13",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["church", "igreja", "sião", "paróquia", "episcopal"],
  authors: [
    { name: "Matheus Henrique" },
    {
      name: "Matheus Henrique",
      url: "https://www.linkedin.com/in/matheushds/",
    },
  ],
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  minimumScale: 1,
  initialScale: 1,
  width: "device-width",
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}