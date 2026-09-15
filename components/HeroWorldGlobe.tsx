const nodes = [
  { cx: 428, cy: 284, delay: '0s' },
  { cx: 548, cy: 244, delay: '-0.6s' },
  { cx: 682, cy: 326, delay: '-1.1s' },
  { cx: 782, cy: 404, delay: '-1.8s' },
  { cx: 596, cy: 456, delay: '-2.3s' },
  { cx: 486, cy: 398, delay: '-2.8s' },
]

export default function HeroWorldGlobe() {
  return (
    <svg
      className="hero-world__svg"
      viewBox="0 0 1280 720"
      role="img"
      aria-label="Global connected infrastructure network"
    >
      <defs>
        <radialGradient id="globeFill" cx="50%" cy="42%" r="58%">
          <stop offset="0%" stopColor="#38c8ff" stopOpacity="0.24" />
          <stop offset="48%" stopColor="#003150" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#001827" stopOpacity="0.76" />
        </radialGradient>
        <linearGradient id="globeLine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8bdfff" stopOpacity="0.16" />
          <stop offset="52%" stopColor="#38c8ff" stopOpacity="0.72" />
          <stop offset="100%" stopColor="#8bdfff" stopOpacity="0.2" />
        </linearGradient>
        <clipPath id="globeClip">
          <circle cx="640" cy="360" r="278" />
        </clipPath>
      </defs>

      <g className="hero-world__orb">
        <circle className="hero-world__outer-glow" cx="640" cy="360" r="326" />
        <circle className="hero-world__sphere" cx="640" cy="360" r="278" fill="url(#globeFill)" />

        <g className="hero-world__grid" clipPath="url(#globeClip)">
          <ellipse cx="640" cy="360" rx="278" ry="82" />
          <ellipse cx="640" cy="360" rx="278" ry="152" />
          <ellipse cx="640" cy="360" rx="278" ry="218" />
          <ellipse cx="640" cy="360" rx="94" ry="278" />
          <ellipse cx="640" cy="360" rx="168" ry="278" />
          <ellipse cx="640" cy="360" rx="238" ry="278" />
          <path d="M362 360H918" />
          <path d="M640 82V638" />
        </g>

        <g className="hero-world__continents" clipPath="url(#globeClip)">
          <path d="M410 254c36-28 82-37 128-25 22 6 30 24 16 42-14 17-39 10-52 29-10 15 2 34-10 50-13 18-43 10-55 31-9 16 4 40-17 51-25 13-63-9-76-39-19-46 20-105 66-139Z" />
          <path d="M558 428c28-6 55 12 67 42 15 37-2 85-31 109-26-25-51-70-46-108 2-17 3-31 10-43Z" />
          <path d="M612 210c42-38 112-47 159-19 28 17 29 45 6 61-22 16-54 1-70 27-11 18 10 36-3 56-14 21-50 18-63 42-11 21 10 42-6 58-20 19-64-2-76-33-18-47 16-94 53-192Z" />
          <path d="M774 292c55-20 117-6 150 36 25 32 10 67-30 70-30 2-55-24-83-11-24 11-26 43-54 45-32 2-59-36-48-73 8-28 32-54 65-67Z" />
        </g>

        <g className="hero-world__routes" clipPath="url(#globeClip)">
          <path d="M428 284C512 214 618 214 682 326S737 449 782 404" />
          <path d="M486 398C548 322 636 296 782 404" />
          <path d="M548 244C596 303 620 373 596 456" />
          <path d="M428 284C494 430 598 505 782 404" />
        </g>

        <g className="hero-world__nodes">
          {nodes.map((node) => (
            <g key={`${node.cx}-${node.cy}`} style={{ animationDelay: node.delay }}>
              <circle className="hero-world__node-ring" cx={node.cx} cy={node.cy} r="16" />
              <circle className="hero-world__node-core" cx={node.cx} cy={node.cy} r="5" />
            </g>
          ))}
        </g>
      </g>
    </svg>
  )
}
