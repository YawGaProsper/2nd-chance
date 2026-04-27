import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: '2nd Chance — Everyone Deserves It',
    template: '%s | 2nd Chance',
  },
  description:
    'Providing networking, mentoring and support for young people in the UK and South Sudan.',
  openGraph: {
    siteName: '2nd Chance',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
