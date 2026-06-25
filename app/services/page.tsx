import { Metadata } from 'next'
import CTA from '@/components/CTA'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import SectorGrid from '@/components/SectorGrid'
import { sectors, workflow } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Solutions - D7 TechNode',
  description:
    'IoT, AI and automation solutions for energy, water, agriculture, mining, logistics, security, buildings, health and environmental monitoring.',
}

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Solutions"
        title="IoT systems across nine critical sectors."
        description="We provide sector-specific monitoring and automation for energy, water, farms, mines, fleets, security, buildings, health cold chains and environmental operations."
        primaryHref="/contact"
        primaryLabel="Plan a Deployment"
        secondaryHref="/products"
        secondaryLabel="View Hardware"
      />

      <section className="section section-technical">
        <div className="container-custom relative">
          <SectionHeader
            eyebrow="Coverage"
            title="Sector solutions"
            description="Each solution combines field devices, connectivity, dashboards, alerts and optional automated responses."
            align="center"
          />
          <div className="mt-12">
            <SectorGrid />
          </div>
        </div>
      </section>

      <section className="section section-technical bg-slate-100">
        <div className="container-custom relative">
          <SectionHeader
            eyebrow="Deployment model"
            title="From initial assessment to live operations."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step) => (
              <div key={step.title} className="technical-card p-6">
                <step.icon className="h-8 w-8 text-primary-700" />
                <h3 className="mt-5 text-xl font-bold text-slate-950">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-technical">
        <div className="container-custom relative">
          <SectionHeader
            eyebrow="Sector briefings"
            title="What each solution brings online."
            description="The exact device mix changes by project, but every sector is built around the same goal: real-time visibility, alerting, automation and better decisions."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {sectors.map((sector) => (
              <div key={sector.slug} className="technical-card p-6">
                <h3 className="font-bold text-slate-950">{sector.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{sector.detail}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {sector.signals.map((signal) => (
                    <li key={signal} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-600" />
                      {signal}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  )
}
