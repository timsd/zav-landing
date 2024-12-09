import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import { GA_MEASUREMENT_ID } from '@/lib/analytics'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'Renewable Energy, Furniture and Construction | Zavolah',
  description: 'Specialist in renewable energy, smart furniture and sustainable construction solutions',
  keywords: 'zavolah, zavolah ltd, zavolah limited, solar energy, renewable energy, smart furniture, space saving furniture, sustainable construction, energy solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zavolah Ltd",
              "url": "https://zavolah.com",
              "description": metadata.description,
              "sameAs": [
                "https://www.linkedin.com/company/zavolah",
                "https://twitter.com/zavolah"
              ]
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      </body>
    </html>
  )
}
