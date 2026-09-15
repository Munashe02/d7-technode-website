import { Activity, Bell, Gauge, RadioTower, ShieldCheck, Zap } from 'lucide-react'

const assets = [
  { label: 'Transformer T-14', status: 'Stable', value: '78%', icon: Zap },
  { label: 'Reservoir North', status: 'Watch', value: '61%', icon: Gauge },
  { label: 'Cold-chain Fleet', status: 'Stable', value: '69%', icon: Activity },
  { label: 'Perimeter Gate', status: 'Armed', value: '92%', icon: ShieldCheck },
]

const signals = ['LoRa', 'NB-IoT', 'GSM', 'Cloud', 'AI Alerts']

const floatingNodes = [
  ['left-[9%] top-[23%]', 'TX', 'Transformer'],
  ['right-[22%] top-[20%]', 'PV', 'Solar plant'],
  ['left-[16%] bottom-[28%]', 'WL', 'Water line'],
  ['left-[58%] top-[50%]', 'GW', 'Gateway'],
  ['right-[5%] top-[58%]', 'FL', 'Fleet'],
  ['right-[25%] bottom-[10%]', 'SC', 'Security'],
]

export default function TechHeroVisual() {
  return (
    <div className="tech-visual" aria-label="Animated IoT monitoring dashboard visual">
      <div className="tech-visual__map" aria-hidden="true">
        <svg viewBox="0 0 640 520" className="absolute inset-0 h-full w-full">
          <path className="network-path network-path--one" d="M94 108 C184 68 278 122 348 92 S504 62 558 142" />
          <path className="network-path network-path--two" d="M84 346 C164 286 254 326 326 252 S472 212 562 302" />
          <path className="network-path network-path--three" d="M148 438 C248 366 322 442 424 362 S514 262 584 238" />
          <path className="network-path network-path--four" d="M138 160 L244 246 L166 350 L326 252 L444 158 L526 284" />
        </svg>
      </div>

      <div className="tech-visual__panel">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">D7 IoT Cloud</p>
            <p className="mt-1 font-semibold text-white">Live infrastructure telemetry</p>
          </div>
          <RadioTower className="h-6 w-6 text-accent-lime" />
        </div>

        <div className="grid gap-3 p-5">
          {assets.map((asset, index) => (
            <div key={asset.label} className="asset-row" style={{ animationDelay: `${index * 0.14}s` }}>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent-lime/10 text-accent-lime">
                  <asset.icon size={20} />
                </div>
                <div>
                  <p className="font-semibold text-slate-100">{asset.label}</p>
                  <p className="text-xs text-slate-400">Signal integrity {asset.value}</p>
                </div>
              </div>
              <span className={asset.status === 'Watch' ? 'status-chip status-chip--watch' : 'status-chip'}>
                {asset.status}
              </span>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 p-5">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Automated alerts</p>
            <Bell className="h-4 w-4 text-accent-lime" />
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-sm bg-white/10">
            <div className="telemetry-bar" />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {signals.map((signal) => (
              <span key={signal} className="rounded-sm border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-semibold text-slate-300">
                {signal}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="tech-visual__floating-nodes" aria-hidden="true">
        {floatingNodes.map(([position, code, label], index) => (
          <div key={code} className={`network-node ${position}`} style={{ animationDelay: `${index * 0.18}s` }}>
            <span>{code}</span>
            <small>{label}</small>
          </div>
        ))}
      </div>
    </div>
  )
}
