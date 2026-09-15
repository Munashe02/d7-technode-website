const nodes = [
  { cx: 260, cy: 410, label: 'Americas', delay: '0s' },
  { cx: 470, cy: 330, label: 'Atlantic', delay: '-0.5s' },
  { cx: 690, cy: 390, label: 'Africa', delay: '-1.1s' },
  { cx: 850, cy: 295, label: 'Europe', delay: '-1.6s' },
  { cx: 1058, cy: 362, label: 'Asia', delay: '-2.2s' },
  { cx: 1250, cy: 500, label: 'Pacific', delay: '-2.8s' },
]

const routes = [
  'M260 410 C420 235 590 260 690 390 S950 500 1250 500',
  'M260 410 C520 480 770 470 1058 362',
  'M470 330 C600 210 760 205 850 295 S1000 420 1250 500',
  'M690 390 C740 315 790 288 850 295 S980 310 1058 362',
  'M470 330 C520 425 585 450 690 390',
]

export default function HeroWorldGlobe() {
  return (
    <svg
      className="hero-world__svg"
      viewBox="0 0 1600 760"
      role="img"
      aria-label="Connected global infrastructure network"
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

      <g className="hero-world__map">
        <path d="M270 305c50-54 145-68 206-26 38 26 30 67-10 88-30 16-72 2-92 36-17 28 8 63-18 83-37 28-113-9-134-66-15-42 8-83 48-115Z" />
        <path d="M512 438c42-10 80 15 96 57 20 51-2 111-42 145-38-34-73-95-65-145 3-23 4-42 11-57Z" />
        <path d="M660 275c58-51 164-61 230-18 43 28 43 76 5 101-36 23-86 4-112 44-18 28 14 57-8 86-25 34-83 27-104 65-19 35 18 72-11 94-38 29-118-8-137-68-26-83 65-174 137-304Z" />
        <path d="M938 334c78-35 177-16 231 45 42 47 23 104-39 109-48 5-88-38-132-18-38 17-41 68-84 70-52 3-94-61-78-116 13-42 49-75 102-90Z" />
      </g>

      <g className="hero-world__routes">
        {routes.map((route, index) => (
          <path key={route} d={route} style={{ animationDelay: `${index * -0.9}s` }} />
        ))}
      </g>

      <g className="hero-world__nodes">
        {nodes.map((node) => (
          <g key={node.label} style={{ animationDelay: node.delay }}>
            <circle className="hero-world__node-halo" cx={node.cx} cy={node.cy} r="30" />
            <circle className="hero-world__node-ring" cx={node.cx} cy={node.cy} r="13" />
            <circle className="hero-world__node-core" cx={node.cx} cy={node.cy} r="5" />
          </g>
        ))}
      </g>

      <g className="hero-world__city">
        <path d="M0 692H1600V760H0Z" />
        <path d="M48 692V603h36v89h22V560h48v132h28V632h46v60h24V520h54v172h34V584h42v108h34V640h54v52h40V548h62v144h30V610h44v82h54V570h70v122h35V628h42v64h44V540h68v152h38V604h48v88h30V575h60v117h36V636h46v56h40V525h76v167h32V590h52v102h34V618h46v74h72V690H48Z" />
      </g>
    </svg>
  )
}
