import Link from 'next/link'
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { company, sectors } from '@/lib/site-data'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ink text-white">
      <div className="container-custom py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_1.2fr]">
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-bold">{company.legalName}</h3>
            <p className="max-w-xs text-slate-300">{company.description}</p>
            <div className="flex">
              <a href="#" className="text-slate-400 transition-colors hover:text-accent-lime" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-slate-400">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-slate-300 transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 transition-colors hover:text-white">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-300 transition-colors hover:text-white">
                  Hardware
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-slate-300 transition-colors hover:text-white">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-slate-400">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-300">
                <Mail size={18} className="mt-1 flex-shrink-0 text-accent-lime" />
                <span>{company.email}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <Phone size={18} className="mt-1 flex-shrink-0 text-accent-lime" />
                <span>{company.phone}</span>
              </li>
              {company.offices.map((office) => (
                <li key={office.country} className="flex items-start gap-3 text-slate-300">
                  <MapPin size={18} className="mt-1 flex-shrink-0 text-accent-lime" />
                  <span>
                    <strong className="text-white">{office.country}:</strong> {office.address}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                Sectors We Serve
              </h4>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                Nine core infrastructure environments, one connected monitoring and automation
                approach.
              </p>
            </div>
            <div className="grid flex-1 gap-2 sm:grid-cols-2 lg:max-w-4xl lg:grid-cols-3">
              {sectors.map((sector) => (
                <Link
                  key={sector.slug}
                  href="/services"
                  className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-semibold text-slate-200 transition hover:border-accent-lime/40 hover:text-accent-lime"
                >
                  {sector.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-sm text-slate-400">
          <p>&copy; {currentYear} {company.legalName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
