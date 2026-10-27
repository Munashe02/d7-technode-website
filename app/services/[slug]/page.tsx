import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import CTA from '@/components/CTA'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import { createPageMetadata, siteUrl } from '@/lib/metadata'
import { sectors } from '@/lib/site-data'

type SectorPageProps = {
  params: { slug: string }
}

export const dynamicParams = false

export function generateStaticParams() {
  return sectors.map((sector) => ({ slug: sector.slug }))
}

export function generateMetadata({ params }: SectorPageProps): Metadata {
  const sector = sectors.find((item) => item.slug === params.slug)

  if (!sector) return {}

  return createPageMetadata({
    title: `${sector.title} IoT Solutions`,
    description: sector.summary,
    path: `/services/${sector.slug}`,
  })
}

export default function SectorPage({ params }: SectorPageProps) {
  const sector = sectors.find((item) => item.slug === params.slug)

  if (!sector) notFound()

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${sector.title} IoT Solutions`,
    serviceType: `${sector.title} monitoring and automation`,
    provider: {
      '@type': 'Organization',
      name: 'D7 TechNode',
      url: siteUrl,
    },
    areaServed: 'Africa',
    description: sector.summary,
    url: `${siteUrl}/services/${sector.slug}`,
  }

  return (
    <div>
      <PageHero
        eyebrow="Sector solution"
        title={`${sector.title} monitoring and automation.`}
        description={sector.summary}
        primaryHref="/contact"
        primaryLabel="Plan a Deployment"
        secondaryHref="/services"
        secondaryLabel="All Solutions"
      />

      <section className="section section-technical">
        <div className="container-custom relative">
          <nav aria-label="Breadcrumb" className="mb-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary-700 hover:text-primary-900"
            >
              <ArrowLeft className="h-4 w-4" />
              All sector solutions
            </Link>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Operational visibility"
                title={`Bring ${sector.title.toLowerCase()} assets online.`}
                description={sector.detail}
              />
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {sector.signals.map((signal) => (
                  <li key={signal} className="flex items-center gap-3 font-semibold text-slate-700">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary-600" />
                    {signal}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-slate-200 shadow-xl">
              <Image
                src={sector.image}
                alt={`${sector.title} infrastructure monitored by D7 TechNode`}
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/55 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-md bg-accent-lime text-primary-900 shadow-lg">
                <sector.icon className="h-7 w-7" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-grid-band">
        <div className="container-custom relative">
          <SectionHeader
            eyebrow="Deployment approach"
            title="Sensors, connectivity and action in one operating loop."
            description={`D7 TechNode combines field-ready devices, secure connectivity, live dashboards, alert routing and automation workflows for ${sector.title.toLowerCase()} operations.`}
            inverse
            align="center"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ['Sense', 'Capture the operating signals that reveal risk, performance and asset condition.'],
              ['Connect', 'Move readings securely from distributed sites into one cloud operations layer.'],
              ['Respond', 'Route alerts, reports and automated actions to the teams responsible for outcomes.'],
            ].map(([title, description]) => (
              <div key={title} className="blueprint-tile">
                <h2 className="text-xl font-bold text-white">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </div>
  )
}
