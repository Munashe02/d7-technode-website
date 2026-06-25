import { Metadata } from 'next'
import CTA from '@/components/CTA'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import { hardwareCategories } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Hardware - D7 TechNode',
  description:
    'Rugged IoT sensors, gateways, relays and enclosures for industrial monitoring and automation deployments.',
}

export default function ProductsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Hardware"
        title="Infrastructure hardware for mission-critical environments."
        description="D7 TechNode supplies rugged sensors, gateways, relays and enclosures that are ready for industrial, utility, agricultural and municipal deployments."
        primaryHref="/contact"
        primaryLabel="Request Hardware"
        secondaryHref="/services"
        secondaryLabel="Match to Solution"
      />

      <section className="section section-technical">
        <div className="container-custom relative">
          <SectionHeader
            eyebrow="E-commerce ready"
            title="Recommended store structure"
            description="The catalogue is structured around products, sensors, controllers, gateways and accessories so it can grow into a full hardware store."
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hardwareCategories.map((category) => (
              <div key={category} className="technical-card p-5">
                <h2 className="font-semibold text-slate-950">{category}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-grid-band">
        <div className="container-custom relative grid gap-8 lg:grid-cols-3">
          {[
            {
              title: 'Installation',
              description: 'A one-time installation fee covers site preparation, devices, setup and commissioning.',
            },
            {
              title: 'Subscription',
              description: 'Monthly or annual SaaS access keeps dashboards, alerts, reports and support active.',
            },
            {
              title: 'Project sizing',
              description: 'Prices are customised per sector, project size, device count and operating environment.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
              <h2 className="text-2xl font-bold text-white">{item.title}</h2>
              <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  )
}
