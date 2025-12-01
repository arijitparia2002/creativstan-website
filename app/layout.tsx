import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Creativstan - Where Ideas Become Stunning Digital Creations',
  description: 'Professional digital creator specializing in posters, wedding invites, reels, ads, and branding. Fast delivery. Modern designs. 100% custom creative work.',
  keywords: 'digital creator, poster design, wedding invites, reels, ads, branding, graphic design',
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
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
