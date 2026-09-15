import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import TechHeroVisual from '@/components/TechHeroVisual'

type PageHeroProps = {
  eyebrow: string
  title: string
  titleLines?: string[]
  description: string
  proofPoints?: string[]
  primaryHref?: string
  primaryLabel?: string
  secondaryHref?: string
  secondaryLabel?: string
  metrics?: Array<{ value: string; label: string }>
}

export default function PageHero({
  eyebrow,
  title,
  titleLines,
  description,
  proofPoints = [],
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  metrics = [],
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 grid-pattern opacity-35" aria-hidden="true" />
      <div className="hero-world" aria-hidden="true">
        <div className="hero-world__globe">
          <span className="hero-world__arc hero-world__arc--one" />
          <span className="hero-world__arc hero-world__arc--two" />
          <span className="hero-world__arc hero-world__arc--three" />
          <span className="hero-world__arc hero-world__arc--four" />
          <span className="hero-world__pulse hero-world__pulse--one" />
          <span className="hero-world__pulse hero-world__pulse--two" />
          <span className="hero-world__pulse hero-world__pulse--three" />
        </div>
      </div>
      <div className="electric-grid-lines" aria-hidden="true">
        {Array.from({ length: 10 }).map((_, index) => (
          <span key={index} className="electric-line" />
        ))}
      </div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-lime/70 to-transparent" aria-hidden="true" />
      <div className="data-sweep" aria-hidden="true" />
      <div className="container-custom relative grid min-h-[680px] gap-12 py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-accent-lime shadow-[0_0_16px_rgba(56,200,255,0.7)]" />
            <p className="eyebrow text-accent-lime">{eyebrow}</p>
          </div>
          {titleLines && titleLines.length > 0 ? (
            <h1 className="hero-lockup" aria-label={title}>
              {titleLines.map((line, index) => (
                <span
                  key={line}
                  className={
                    index === 0
                      ? 'hero-lockup__brand'
                      : index === titleLines.length - 1
                        ? 'hero-lockup__outcome'
                        : 'hero-lockup__verb'
                  }
                >
                  {line}
                </span>
              ))}
            </h1>
          ) : (
            <h1 className="mt-5 text-4xl font-heading font-bold leading-tight text-white md:text-6xl">
              {title}
            </h1>
          )}
          <p className="hero-deck">
            {description}
          </p>
          {proofPoints.length > 0 && (
            <div className="mt-6 grid max-w-2xl gap-2 sm:grid-cols-3">
              {proofPoints.map((point) => (
                <div key={point} className="hero-proof">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-lime" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          )}
          {(primaryHref || secondaryHref) && (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {primaryHref && primaryLabel && (
                <Link href={primaryHref} className="btn-primary inline-flex items-center justify-center gap-2">
                  {primaryLabel}
                  <ArrowRight size={18} />
                </Link>
              )}
              {secondaryHref && secondaryLabel && (
                <Link href={secondaryHref} className="btn-secondary inline-flex items-center justify-center">
                  {secondaryLabel}
                </Link>
              )}
            </div>
          )}
        </div>

        <div className="relative min-h-[520px]">
          <TechHeroVisual />
        </div>
      </div>
      {metrics.length > 0 && (
        <div className="border-y border-white/10 bg-slate-950/40 backdrop-blur">
          <div className="container-custom grid gap-px sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="border-white/10 py-6 sm:border-r last:border-r-0">
                <p className="text-3xl font-bold text-accent-lime">{metric.value}</p>
                <p className="mt-1 text-sm text-slate-300">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
