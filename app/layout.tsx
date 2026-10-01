import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kuazom Clean | Cloth ironing and shoe cleaning',
  description: 'Professional cloth ironing and shoe polishing serving Ontario and Alberta in Canada.',
  generator: 'v0.app',
  icons: {
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kuzaom%20Clean%20red%20%20logo-S7OYuqzjQQBKAc0q2kWwrxKzPQOS31.jpg',
    apple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kuzaom%20Clean%20red%20%20logo-S7OYuqzjQQBKAc0q2kWwrxKzPQOS31.jpg',
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
