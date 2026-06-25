import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'D7 TechNode - Intelligent Infrastructure Systems',
  description:
    'D7 TechNode is an African digital infrastructure company delivering IoT, AI, cloud and analytics systems for connected critical infrastructure.',
  keywords:
    'D7 TechNode, digital infrastructure, IoT, AI, asset monitoring, automation, utilities, smart farming',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
