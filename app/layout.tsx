import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Growth Engineer Firecrawl',
  description: 'Growth Engineer Portfolio',
  icons: {
    icon: '/images/me.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
