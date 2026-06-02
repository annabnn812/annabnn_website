import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Anna Kolbasova | NYC Real Estate Professional & Investor',
  description: 'Licensed NY Real Estate Salesperson with ACRE NY Realty & Founder of RealPro Solutions. Navigating NYC Real Estate and delivering strategic property solutions.',
  keywords: ['NYC Real Estate', 'New York Real Estate Agent', 'Pre-Foreclosure Solutions', 'RealPro Solutions', 'Anna Kolbasova', 'ACRE NY Realty'],
  authors: [{ name: 'Anna Kolbasova' }],
  openGraph: {
    title: 'Anna Kolbasova | NYC Real Estate Professional',
    description: 'Licensed NY Real Estate Salesperson & Founder of RealPro Solutions',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#D7D3D2',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
