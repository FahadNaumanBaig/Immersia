import React from "react"
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Immersia | Heritage Fragrance House',
  description: 'Immersia crafts region-inspired perfumes that capture cultural identity, terroir, and botanical nuance. Experience luxury fragrances through immersive VR journeys and sustainable refill rituals.',
  keywords: ['luxury perfume', 'heritage fragrance', 'sustainable perfume', 'VR fragrance experience', 'refillable perfume', 'artisan perfumery'],
  openGraph: {
    title: 'Immersia | Heritage Fragrance House',
    description: 'Region-inspired perfumes crafted with heritage and innovation. Explore the world through scent.',
    type: 'website',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
