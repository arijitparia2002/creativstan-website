import type { Metadata } from 'next'
import './globals.css'
import content from '@/config/content.json'
import StructuredData from './structured-data'

export const metadata: Metadata = {
  metadataBase: new URL('https://creativstan.com'),
  title: {
    default: `${content.siteInfo.title} - ${content.siteInfo.tagline}`,
    template: `%s | ${content.siteInfo.title}`
  },
  description: content.siteInfo.description,
  keywords: [
    'digital creator',
    'poster design',
    'wedding invites',
    'Instagram reels',
    'business ads',
    'branding',
    'graphic design',
    'Canva templates',
    'social media content',
    'creative designs',
    'birthday posters',
    'event invitations',
    'custom graphics'
  ],
  authors: [{ name: 'Creativstan' }],
  creator: 'Creativstan',
  publisher: 'Creativstan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://creativstan.com',
    siteName: content.siteInfo.title,
    title: `${content.siteInfo.title} - ${content.siteInfo.tagline}`,
    description: content.siteInfo.description,
    images: [
      {
        url: '/og-image.png', // You'll need to create this
        width: 1200,
        height: 630,
        alt: content.siteInfo.title,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${content.siteInfo.title} - ${content.siteInfo.tagline}`,
    description: content.siteInfo.description,
    images: ['/og-image.png'],
    creator: '@creativstan', // Update with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <StructuredData />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
