import { Metadata } from 'next'
import CTA from '@/components/CTA'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import { resources } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Resources - D7 TechNode',
  description: 'Support resources, manuals, API documentation and troubleshooting for D7 TechNode deployments.',
}

export default function ResourcesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Support and resources"
        title="Documentation for teams running connected infrastructure."
        description="We are here 24/7 because sensors do not sleep. Field teams, operators and integrators need support material that is clear and ready when infrastructure is live."
        primaryHref="/contact"
        primaryLabel="Get Support"
        secondaryHref="/studio"
        secondaryLabel="Content Studio"
      />

      <section className="section section-technical">
        <div className="container-custom relative">
          <SectionHeader
            eyebrow="Resource library"
            title="Guides, manuals and technical references."
            description="The public library is prepared for CMS-managed uploads while showing the resource structure immediately."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {resources.map((resource) => (
              <div key={resource.title} className="technical-card p-6">
                <resource.icon className="h-8 w-8 text-primary-700" />
                <h2 className="mt-5 text-xl font-bold text-slate-950">{resource.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-technical bg-slate-100">
        <div className="container-custom relative grid gap-6 md:grid-cols-3">
          {['Deployment', 'Usage', 'Troubleshooting', 'FAQs'].map((topic) => (
            <div key={topic} className="technical-card p-7">
              <h2 className="text-2xl font-bold text-slate-950">{topic}</h2>
              <p className="mt-4 leading-7 text-slate-600">
                Structured content for operators, field teams and administrators managing D7
                TechNode infrastructure systems.
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  )
}
