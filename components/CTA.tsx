import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section-technical py-16">
      <div className="container-custom">
        <div className="dark-grid-band rounded-lg border border-white/10 p-8 shadow-lg md:p-12">
          <div className="relative">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow text-accent-lime">Next step</p>
              <h2 className="mt-3 text-3xl font-heading font-bold md:text-4xl">
                Let us design the monitoring system around your assets.
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
                Tell us your sector, sites and assets. We will shape the right sensor, gateway,
                dashboard and alerting approach for the deployment.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                Talk to Us
                <ArrowRight size={18} />
              </Link>
              <Link href="/products" className="btn-secondary inline-flex items-center justify-center">
                View Hardware
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
