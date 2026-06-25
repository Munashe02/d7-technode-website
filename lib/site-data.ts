import {
  Activity,
  Bell,
  Building2,
  Cloud,
  Droplet,
  FileText,
  Hammer,
  Leaf,
  Lock,
  RadioTower,
  Shield,
  Smartphone,
  Truck,
  Zap,
} from 'lucide-react'

export const company = {
  name: 'D7 TechNode',
  legalName: 'D7TechNode Private Limited',
  email: 'info@d7technode.com',
  phone: '+27 79 614 1397',
  tagline: 'Real-time intelligence for critical infrastructure.',
  description:
    'D7 TechNode is an African digital infrastructure company delivering intelligent systems that connect physical assets to digital platforms, enabling organisations to monitor, manage, automate and secure critical infrastructure in real time.',
  vision:
    'To become a leading digital infrastructure company, enabling intelligent, secure and connected communities through innovative technology solutions.',
  mission:
    'We design and deploy reliable digital infrastructure that transforms how organisations monitor, manage, protect and optimise their assets and operations.',
  offices: [
    {
      country: 'South Africa',
      address: '472 Spionkop Avenue, Kya Sands, Johannesburg, 2161, South Africa',
      phone: '+27 79 614 1397',
    },
    {
      country: 'Zimbabwe',
      address: '6th Floor, Blue Bridge North, Eastgate Centre, Harare, Zimbabwe',
      phone: '+263 242 776530, +263 242 776559',
    },
  ],
}

export const valuePillars = [
  'Industrial-grade equipment',
  'Fast deployment',
  'Cloud dashboards',
  'Call/SMS/WhatsApp alerts',
  '24/7 support',
  'Scales across many devices',
]

export const workflow = [
  {
    title: 'Install smart sensors',
    description: 'Field devices capture temperature, vibration, pressure, flow, location and access events.',
    icon: RadioTower,
  },
  {
    title: 'Connect every site',
    description: 'Gateways stream readings from distributed assets into one operations layer.',
    icon: Cloud,
  },
  {
    title: 'Alert and report',
    description: 'Dashboards, reports and Call/SMS/WhatsApp alerts surface risk immediately.',
    icon: Bell,
  },
  {
    title: 'Automate responses',
    description: 'Rules trigger alarms, pumps, isolation workflows or field-team dispatch.',
    icon: Zap,
  },
]

export const sectors = [
  {
    title: 'Energy & Utilities',
    slug: 'energy-utilities',
    image: '/sectors/energy-utilities.jpg',
    icon: Zap,
    summary:
      'Protect transformers, substations and renewable energy assets with telemetry, tamper alerts and predictive maintenance.',
    detail:
      'D7 TechNode monitors transformer health, temperature spikes, vibration anomalies, oil levels, tampering, substation load, power quality and solar plant telemetry so utilities can reduce losses, predict maintenance needs and protect critical electricity infrastructure.',
    signals: ['Transformer health', 'Power quality', 'Solar telemetry', 'Fault isolation'],
  },
  {
    title: 'Water & Municipal Services',
    slug: 'water-municipal-services',
    image: '/sectors/water-municipal-services.jpg',
    icon: Droplet,
    summary:
      'Monitor pressure, flow, reservoirs, pumps and pipelines to reduce non-revenue water and service outages.',
    detail:
      'Water utilities and municipalities can track pressure, flow, reservoir levels, pump performance and pipeline integrity in real time, helping teams detect leaks, bursts and abnormal consumption before they become service outages.',
    signals: ['Leak detection', 'Reservoir levels', 'Pump control', 'Smart metering'],
  },
  {
    title: 'Agriculture & Smart Farming',
    slug: 'agriculture-smart-farming',
    image: '/sectors/agriculture-smart-farming.jpg',
    icon: Leaf,
    summary:
      'Use field sensors, weather stations and automated irrigation to improve yields and use resources precisely.',
    detail:
      'Smart farming deployments combine soil moisture sensors, weather stations, climate monitors and irrigation control so farmers can save water, improve crop performance, protect harvested produce and manage farm assets from any device.',
    signals: ['Soil moisture', 'Weather data', 'Irrigation control', 'Cold-chain protection'],
  },
  {
    title: 'Mining & Industrial',
    slug: 'mining-industrial',
    image: '/sectors/mining-industrial.jpg',
    icon: Hammer,
    summary:
      'Bring visibility to harsh environments with machinery, gas, air-quality, fuel and mobile asset monitoring.',
    detail:
      'Mining and industrial sites can monitor crushers, conveyors, pumps, gas, air quality, fuel consumption and high-value mobile assets, giving operators early warnings, safer working conditions and better oversight in harsh environments.',
    signals: ['Vibration', 'Gas and air quality', 'GPS assets', 'Fuel monitoring'],
  },
  {
    title: 'Logistics & Fleet',
    slug: 'logistics-fleet',
    image: '/sectors/logistics-fleet.jpg',
    icon: Truck,
    summary:
      'Track vehicles, routes, driver behaviour and cold-chain conditions across distributed fleet operations.',
    detail:
      'Fleet operations gain continuous GPS location, telematics, route intelligence, driver behaviour insights, cold-chain cargo monitoring, door/tamper events, fuel-level visibility and geofencing automation.',
    signals: ['GPS tracking', 'Telematics', 'Geofencing', 'Cargo conditions'],
  },
  {
    title: 'Security & Anti-Intrusion',
    slug: 'security-anti-intrusion',
    image: '/sectors/security-anti-intrusion.jpg',
    icon: Shield,
    summary:
      'Detect tampering, forced entry, vibration and perimeter activity before incidents become losses.',
    detail:
      'Security deployments use tamper sensors, vibration detectors, magnetic contacts, motion units, access control and automated alarms to move estates, schools, utilities, banks and industrial sites from reactive security to proactive prevention.',
    signals: ['Tamper sensors', 'Motion units', 'Access control', 'Automated alarms'],
  },
  {
    title: 'Smart Buildings & Estates',
    slug: 'smart-buildings-estates',
    image: '/sectors/smart-buildings-estates.jpg',
    icon: Building2,
    summary:
      'Run safer, more efficient properties with occupancy, energy, access, leak and equipment monitoring.',
    detail:
      'Smart buildings and estates can automate lighting and HVAC, monitor energy waste, track access, detect leaks and smoke, manage gates and give building teams one central view of property health.',
    signals: ['Energy metering', 'HVAC automation', 'Leak detection', 'Gate management'],
  },
  {
    title: 'Health & Cold Chain',
    slug: 'health-cold-chain',
    image: '/sectors/health-cold-chain.jpg',
    icon: Activity,
    summary:
      'Protect vaccines, labs, pharmacies and critical equipment with continuous environmental and power monitoring.',
    detail:
      'Health and cold-chain systems monitor vaccine fridges, pharmaceutical stores, laboratory samples, cold-chain transport, power failure, generators, storage access and critical equipment so compliance and safety are easier to maintain.',
    signals: ['Fridge temperature', 'Power failure', 'Access events', 'Compliance reports'],
  },
  {
    title: 'Environmental Monitoring',
    slug: 'environmental-monitoring',
    image: '/sectors/environmental-monitoring.jpg',
    icon: Cloud,
    summary:
      'Capture air, water, weather and flood-risk data for cities, industry, conservation and disaster readiness.',
    detail:
      'Environmental monitoring captures air quality, pollutants, water levels, water quality, rainfall, temperature, wind and humidity using connected and remote-ready devices for compliance, early warnings and smarter environmental decisions.',
    signals: ['Air quality', 'Water levels', 'Weather stations', 'Remote solar nodes'],
  },
]

export const platformCapabilities = [
  'Connects devices across all sites',
  'Aggregates data in real time',
  'Sends alerts and notifications',
  'Automates equipment and workflows',
  'Generates reports and analytics',
  'Works across web and mobile',
]

export const hardwareCategories = [
  'Products',
  'Sensors',
  'Environmental Sensors',
  'Water Sensors',
  'Security Sensors',
  'Industrial Sensors',
  'Tracking & Monitoring',
  'Controllers & Automation',
  'Connectivity & Gateways',
  'Enclosures & Accessories',
]

export const resources = [
  {
    title: 'User Guides',
    description: 'Operational guides for dashboards, alerts, devices and day-to-day monitoring.',
    icon: Smartphone,
  },
  {
    title: 'Installation Manuals',
    description: 'Deployment steps for sensors, gateways, enclosures, relays and field equipment.',
    icon: FileText,
  },
  {
    title: 'API Documentation',
    description: 'Integration references for teams connecting external systems to the platform.',
    icon: Cloud,
  },
  {
    title: 'Troubleshooting',
    description: 'Practical support material for connectivity, readings, alerts and device health.',
    icon: Lock,
  },
  {
    title: 'FAQs',
    description: 'Common answers for deployment, subscriptions, alerts, support and device operation.',
    icon: Bell,
  },
]

export const sectorsForSelect = sectors.map((sector) => ({
  value: sector.slug,
  label: sector.title,
}))
