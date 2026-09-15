import CTA from '@/components/CTA'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import SectorGrid from '@/components/SectorGrid'
import { platformCapabilities, valuePillars, workflow } from '@/lib/site-data'

const homeMetrics = [
  { value: '9', label: 'Core Infrastructure Sectors' },
  { value: '24/7', label: 'monitoring and support posture' },
  { value: 'Cloud', label: 'web and mobile operations platform' },
]

export default function Home() {
  return (
    <div>
      <PageHero
        eyebrow="Our Technology"
        title="Connect. Monitor. Automate. Critical infrastructure."
        titleLines={['Connect.', 'Monitor.', 'Automate.', 'Critical infrastructure.']}
        description="Industrial IoT systems for assets that move, leak, vibrate, heat up, cool down or disappear when nobody is watching."
        proofPoints={['Live asset telemetry', 'Instant risk alerts', 'Automated response']}
        primaryHref="/contact"
        primaryLabel="Get a Demo"
        secondaryHref="/services"
        secondaryLabel="Explore Solutions"
      />

      <section className="section-technical border-b border-slate-200 py-8">
        <div className="container-custom relative grid gap-5 md:grid-cols-3">
          {homeMetrics.map((metric) => (
            <div key={metric.value} className="homepage-stat-card">
              <p className="text-4xl font-heading font-bold leading-none text-accent-lime md:text-5xl">
                {metric.value}
              </p>
              <p className="max-w-36 text-xs font-bold leading-5 text-slate-100">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section dark-grid-band">
        <div className="container-custom relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="Autonomous infrastructure"
            title="IoT is moving beyond basic readings."
            description="Sensors are no longer just collecting temperature or motion data. With AI, machine learning and edge intelligence, connected systems can predict failures, optimise resources and trigger action before people are forced to react."
            inverse
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Predict failures before downtime',
              'Optimise energy, water and field resources',
              'Trigger pumps, alarms and isolation workflows',
              'Turn infrastructure into a digital nervous system',
            ].map((item) => (
              <div key={item} className="blueprint-tile">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-technical">
        <div className="container-custom relative">
          <SectionHeader
            eyebrow="How it works"
            title="From field signal to operational action."
            description="A D7 deployment is not a dashboard pasted onto hardware. It is a complete monitoring loop: sense, transmit, decide and respond."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((item, index) => (
              <div key={item.title} className="technical-card p-5">
                <div className="flex items-center justify-between">
                  <item.icon className="h-8 w-8 text-primary-600" />
                  <span className="text-sm font-bold text-slate-400">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-base font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-technical bg-slate-100">
        <div className="container-custom relative">
          <SectionHeader
            eyebrow="Sector solutions"
            title="Built for infrastructure."
            description="Utilities, farms, mines, fleets and estates all fail differently. We tune the sensor mix, alert logic and automation flow around the assets at risk."
            align="center"
          />
          <div className="mt-12">
            <SectorGrid compact />
          </div>
        </div>
      </section>

      <section className="section dark-grid-band">
        <div className="container-custom relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeader
            eyebrow="IoT Cloud Platform"
            title="Your entire operation, in one dashboard."
            description="Live telemetry, alert routing, automation rules and reporting in one operating layer for distributed infrastructure."
            inverse
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {platformCapabilities.map((capability) => (
              <div key={capability} className="blueprint-tile">
                {capability}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-technical">
        <div className="container-custom relative">
          <SectionHeader
            eyebrow="Why clients choose us"
            title="Practical engineering for real-world operating conditions."
            align="center"
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {valuePillars.map((pillar) => (
              <div key={pillar} className="technical-card p-5 font-semibold text-slate-800">
                {pillar}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  )
}
