import Link from 'next/link'
import Image from 'next/image'
import { sectors } from '@/lib/site-data'

type SectorGridProps = {
  limit?: number
  compact?: boolean
}

export default function SectorGrid({ limit, compact = false }: SectorGridProps) {
  const visibleSectors = typeof limit === 'number' ? sectors.slice(0, limit) : sectors

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {visibleSectors.map((sector, index) => (
        <Link
          key={sector.slug}
          href="/services"
          className={compact ? 'sector-showcase-card group' : 'technical-card group'}
        >
          <div className={`relative overflow-hidden ${compact ? 'h-36' : 'h-44'}`}>
            <Image
              src={sector.image}
              alt={`${sector.title} infrastructure`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              priority={index < 3}
              loading={index < 3 ? 'eager' : 'lazy'}
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/10" />
            <div className="absolute inset-0 sector-image-grid" aria-hidden="true" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-md border border-accent-lime/25 bg-slate-950/75 text-accent-lime backdrop-blur">
                <sector.icon className="h-6 w-6" />
              </div>
              <span className="rounded-sm border border-accent-lime/25 bg-accent-lime/10 px-2 py-1 text-xs font-black uppercase tracking-[0.18em] text-accent-lime">
                Live sector
              </span>
            </div>
          </div>
          <div className={compact ? 'px-4 py-3 text-center' : 'p-6'}>
            {compact ? (
              <h3 className="text-sm font-bold text-primary-900 group-hover:text-primary-700">
                {sector.title}
              </h3>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <span className="h-2 w-2 rounded-full bg-accent-lime shadow-[0_0_14px_rgba(212,255,0,0.7)]" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-950 group-hover:text-primary-800">
                  {sector.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{sector.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {sector.signals.slice(0, 3).map((signal) => (
                    <span key={signal} className="signal-chip">
                      {signal}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}
