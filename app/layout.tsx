import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

const baseURL = 'https://' + process.env.DOMAIN_URL || 'localhost:3000'

export const metadata = {
  metadataBase: new URL(baseURL), // Only need to set once here
  title: "MUE | Melbourne University Esports",
  description: "Your home of Esports and Gaming at Unimelb!",
  openGraph: {
    title: "MUE | Melbourne University Esports",
    description: "Your home of Esports and Gaming at Unimelb!",
    url: '/',
    siteName: 'Melbourne University Esports',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MUE | Melbourne University Esports",
    description: 'Your home of Esports and Gaming at Unimelb!',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
