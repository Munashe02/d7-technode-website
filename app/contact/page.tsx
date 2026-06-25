'use client'

import { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import PageHero from '@/components/PageHero'
import { company, sectorsForSelect } from '@/lib/site-data'

const initialFormData = {
  name: '',
  company: '',
  phone: '',
  email: '',
  sector: '',
  message: '',
}

export default function ContactPage() {
  const [formData, setFormData] = useState(initialFormData)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    window.location.href = `mailto:${company.email}?subject=D7 TechNode enquiry from ${encodeURIComponent(
      formData.company || formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nSector: ${formData.sector}\n\n${formData.message}`
    )}`
  }

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Talk to D7 TechNode about your infrastructure."
        description="Share the assets, sites and risks you need to monitor. We will help you shape an IoT deployment for visibility, alerts and automation."
      />

      <section className="section section-technical">
        <div className="container-custom relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="technical-panel p-6 md:p-8">
            <h2 className="text-2xl font-bold text-slate-950">Send a message</h2>
            <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
              {[
                { id: 'name', label: 'Full Name', type: 'text', required: true },
                { id: 'company', label: 'Company', type: 'text', required: true },
                { id: 'phone', label: 'Phone', type: 'tel', required: true },
                { id: 'email', label: 'Email Address', type: 'email', required: true },
              ].map((field) => (
                <label key={field.id} htmlFor={field.id} className="grid gap-2 text-sm font-semibold text-slate-700">
                  {field.label}
                  <input
                    id={field.id}
                    type={field.type}
                    required={field.required}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={(event) => setFormData({ ...formData, [field.id]: event.target.value })}
                    className="rounded-md border border-slate-300 px-4 py-3 font-normal text-slate-900 outline-none transition focus:border-primary-700 focus:ring-2 focus:ring-primary-100"
                  />
                </label>
              ))}

              <label htmlFor="sector" className="grid gap-2 text-sm font-semibold text-slate-700">
                Sector
                <select
                  id="sector"
                  required
                  value={formData.sector}
                  onChange={(event) => setFormData({ ...formData, sector: event.target.value })}
                  className="rounded-md border border-slate-300 px-4 py-3 font-normal text-slate-900 outline-none transition focus:border-primary-700 focus:ring-2 focus:ring-primary-100"
                >
                  <option value="">Select your sector</option>
                  {sectorsForSelect.map((sector) => (
                    <option key={sector.value} value={sector.label}>
                      {sector.label}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </label>

              <label htmlFor="message" className="grid gap-2 text-sm font-semibold text-slate-700">
                Message
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                  className="resize-none rounded-md border border-slate-300 px-4 py-3 font-normal text-slate-900 outline-none transition focus:border-primary-700 focus:ring-2 focus:ring-primary-100"
                />
              </label>

              <button type="submit" className="btn-primary inline-flex items-center justify-center gap-2">
                Send Enquiry
                <Send size={18} />
              </button>
            </form>
          </div>

          <div className="space-y-5">
            <div className="technical-card p-6">
              <Mail className="h-7 w-7 text-primary-700" />
              <h2 className="mt-4 font-bold text-slate-950">Email</h2>
              <p className="mt-2 leading-7 text-slate-600">{company.email}</p>
            </div>

            {company.offices.map((office) => (
              <div key={office.country} className="technical-card p-6">
                <MapPin className="h-7 w-7 text-primary-700" />
                <h2 className="mt-4 font-bold text-slate-950">{office.country} Office</h2>
                <p className="mt-2 leading-7 text-slate-600">{office.address}</p>
                <div className="mt-4 flex items-center gap-2 text-slate-700">
                  <Phone className="h-4 w-4 text-primary-700" />
                  <span className="font-semibold">{office.phone}</span>
                </div>
              </div>
            ))}

            <div className="dark-grid-band rounded-lg border border-white/10 p-6">
              <div className="relative">
                <h2 className="text-xl font-bold text-white">Urgent monitoring support</h2>
                <p className="mt-3 leading-7 text-slate-300">
                  For active infrastructure incidents, call the team directly so the response can
                  move faster than email.
                </p>
                <a href="tel:+27796141397" className="mt-5 inline-flex btn-primary">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
