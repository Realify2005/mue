import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from 'next/head'
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
      <Head>
        <title>MUE | Melbourne University Esports</title>
        <meta name="description" content="Your home of Esports and Gaming at Unimelb!" />
        <link rel="canonical" href={`${baseURL}/`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "MUE | Melbourne University Esports",
            "description": "Your home of Esports and Gaming at Unimelb!"
          })}
        </script>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <body className={`${inter.className} bg-MUE-dark-dark-blue`}>
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
