import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kuazom Clean | Cloth ironing and shoe cleaning',
  description: 'Professional cloth ironing, sneaker cleaning and shoe polishing for busy people in Mississauga, Ontario.',
  generator: 'v0.app',
  icons: {
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kuazomclean%20logo-Nt4CcrxQYSYpONHJFtcsFkAKGr303U.jpg',
    apple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kuazomclean%20logo-Nt4CcrxQYSYpONHJFtcsFkAKGr303U.jpg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
