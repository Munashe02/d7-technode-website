import { Metadata } from 'next'
import CTA from '@/components/CTA'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import { company, valuePillars } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'About D7 TechNode',
  description:
    'D7 TechNode is an African digital infrastructure company delivering intelligent systems for connected critical infrastructure.',
}

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="Who we are"
        title="African digital infrastructure for connected communities."
        description="D7 TechNode connects physical assets to digital platforms so organisations can monitor, manage, automate and secure critical infrastructure in real time."
        primaryHref="/contact"
        primaryLabel="Talk to Us"
        secondaryHref="/services"
        secondaryLabel="View Solutions"
      />

      <section className="section section-technical">
        <div className="container-custom relative grid gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeader
            eyebrow="Company"
            title={company.legalName}
            description={company.description}
          />
          <div className="technical-card p-8">
            <h2 className="text-2xl font-bold text-slate-950">Vision</h2>
            <p className="mt-4 leading-8 text-slate-600">{company.vision}</p>
            <h2 className="mt-8 text-2xl font-bold text-slate-950">Mission</h2>
            <p className="mt-4 leading-8 text-slate-600">{company.mission}</p>
          </div>
        </div>
      </section>

      <section className="section section-technical bg-slate-100">
        <div className="container-custom relative">
          <SectionHeader
            eyebrow="Operating standards"
            title="Designed for scale from the start."
            description="IoT, AI, cloud technologies and advanced analytics work together to improve efficiency, reduce losses, enhance security and support data-driven decisions."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {valuePillars.map((pillar) => (
              <div key={pillar} className="technical-card p-6">
                <h3 className="font-bold text-slate-950">{pillar}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  A core requirement for infrastructure teams that need dependable visibility
                  across many assets, sites and users.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  )
}
