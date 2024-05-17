import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Next.js Jobs',
    template: '%s | Next.js Jobs',
  },
  description: 'Find your next job in the Next.js community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-[350px]`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
