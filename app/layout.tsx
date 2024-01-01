import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Andrew Liu - Frontend Engineer',
  description: 'Andrew Liu is a frontend engineer based in Irvine, CA.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
