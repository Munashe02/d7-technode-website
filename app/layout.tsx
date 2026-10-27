import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { company } from '@/lib/site-data'
import { siteUrl } from '@/lib/metadata'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'D7 TechNode | Intelligent Infrastructure Systems',
    template: '%s | D7 TechNode',
  },
  description:
    'D7 TechNode is an African digital infrastructure company delivering IoT, AI, cloud and analytics systems for connected critical infrastructure.',
  keywords: [
    'D7 TechNode',
    'industrial IoT Africa',
    'digital infrastructure',
    'asset monitoring',
    'infrastructure automation',
    'remote telemetry',
    'smart utilities',
  ],
  authors: [{ name: 'D7 TechNode' }],
  creator: 'D7 TechNode',
  publisher: 'D7 TechNode',
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: siteUrl,
    siteName: 'D7 TechNode',
    title: 'D7 TechNode | Intelligent Infrastructure Systems',
    description:
      'Industrial IoT monitoring, alerts and automation for critical infrastructure across Africa.',
    images: [
      {
        url: '/hero/connected-infrastructure-bg.jpg',
        width: 1600,
        height: 900,
        alt: 'D7 TechNode connected infrastructure network',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'D7 TechNode | Intelligent Infrastructure Systems',
    description:
      'Industrial IoT monitoring, alerts and automation for critical infrastructure across Africa.',
    images: ['/hero/connected-infrastructure-bg.jpg'],
  },
  manifest: '/manifest.webmanifest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organisationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    legalName: company.legalName,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    email: company.email,
    telephone: company.phone,
    description: company.description,
    address: company.offices.map((office) => ({
      '@type': 'PostalAddress',
      addressCountry: office.country,
      streetAddress: office.address,
    })),
  }

  return (
    <html lang="en">
      <body className="font-sans">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }}
        />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
