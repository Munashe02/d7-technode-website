const nodes = [
  { cx: 375, cy: 330, label: 'Americas', delay: '0s' },
  { cx: 720, cy: 305, label: 'Europe', delay: '-0.8s' },
  { cx: 865, cy: 410, label: 'Africa', delay: '-1.4s' },
  { cx: 1140, cy: 375, label: 'Asia', delay: '-2.1s' },
]

const routes = [
  'M375 330 C520 185 650 208 720 305 S1010 510 1140 375',
  'M375 330 C575 455 735 500 865 410 S1010 342 1140 375',
  'M720 305 C760 368 798 398 865 410',
]

export default function HeroWorldGlobe() {
  return (
    <svg
      className="hero-world__svg"
      viewBox="0 0 1600 760"
      role="img"
      aria-label="Animated global connectivity overlay"
    >
      <defs>
        <linearGradient id="worldRoute" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d4ff00" stopOpacity="0.05" />
          <stop offset="48%" stopColor="#d4ff00" stopOpacity="0.66" />
          <stop offset="100%" stopColor="#38c8ff" stopOpacity="0.18" />
        </linearGradient>
        <radialGradient id="worldNode" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f3ff8a" />
          <stop offset="58%" stopColor="#d4ff00" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#d4ff00" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g className="hero-world__routes">
        {routes.map((route, index) => (
          <path key={route} d={route} style={{ animationDelay: `${index * -0.9}s` }} />
        ))}
      </g>

      <g className="hero-world__nodes">
        {nodes.map((node) => (
          <g key={node.label} style={{ animationDelay: node.delay }}>
            <circle className="hero-world__node-halo" cx={node.cx} cy={node.cy} r="18" />
            <circle className="hero-world__node-ring" cx={node.cx} cy={node.cy} r="9" />
            <circle className="hero-world__node-core" cx={node.cx} cy={node.cy} r="3.5" />
          </g>
        ))}
      </g>
    </svg>
  )
}
