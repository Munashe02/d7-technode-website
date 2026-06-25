// Seed data for D7 TechNode services
// Run this after setting up Sanity to populate initial content

export const services = [
  {
    _type: 'service',
    title: 'Energy & Utilities',
    slug: { current: 'energy-utilities' },
    description:
      'Comprehensive IoT solutions for protecting infrastructure, reducing losses, and improving operational efficiency across electricity networks.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'D7 TechNode provides a comprehensive suite of IoT solutions for the Energy & Utilities sector, designed to protect infrastructure, reduce losses, and improve operational efficiency across electricity networks. Our intelligent sensors monitor transformer health, detecting temperature spikes, vibration anomalies, oil level changes, and tampering attempts in real time, ensuring early warning before damage or theft occurs.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Substation monitoring devices track load, power quality, access control, and environmental conditions, enabling predictive maintenance and fewer outages. For solar plants and hybrid energy systems, our IoT gateways deliver continuous telemetry on generation, battery health, inverter performance, and system stability.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Every device communicates seamlessly with the Cloud platform, where utilities gain live dashboards, automated alerts, smart analytics, and the ability to automate responses such as isolating faults or dispatching field teams. In short, we bring real-time visibility, automation, and asset protection to the critical infrastructure that keeps the lights on.',
          },
        ],
      },
    ],
    icon: 'Zap',
    features: [
      'Transformer health monitoring',
      'Substation load tracking',
      'Solar plant telemetry',
      'Automated fault isolation',
      'Predictive maintenance',
      'Real-time theft detection',
    ],
    order: 1,
  },
  {
    _type: 'service',
    title: 'Water & Municipal Services',
    slug: { current: 'water-municipal' },
    description:
      'Reduce water losses, optimize distribution, and ensure reliable delivery with real-time monitoring.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'We deliver powerful IoT solutions for the Water & Municipal Services sector, helping utilities reduce losses, optimize distribution, and ensure reliable water delivery. Our sensors monitor pressure, flow, reservoir levels, pump performance, and pipeline integrity in real time, allowing municipalities to detect leaks, bursts, and abnormal consumption long before they escalate into service outages.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Smart water meters support accurate billing and reduce non-revenue water, while automated pump control systems improve energy efficiency and minimize downtime. Reservoir and borehole monitoring provides continuous insight into water availability, helping planners manage supply more sustainably.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'All data flows into the Cloud platform, giving municipal teams live dashboards, predictive alerts, historical analytics, and automated workflows that keep water systems stable and communities supplied. In short, we bring intelligence and reliability to every drop.',
          },
        ],
      },
    ],
    icon: 'Droplet',
    features: [
      'Leak detection',
      'Pressure monitoring',
      'Smart water meters',
      'Automated pump control',
      'Reservoir level tracking',
      'Non-revenue water reduction',
    ],
    order: 2,
  },
  {
    _type: 'service',
    title: 'Agriculture (Smart Farming)',
    slug: { current: 'agriculture' },
    description:
      'Optimize resources, increase yields, and make data-driven farming decisions with precision agriculture.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'D7 TechNode provides powerful IoT solutions for the Agriculture and Smart Farming sector, helping farmers optimize resources, increase yields, and make data-driven decisions. Our rugged soil moisture sensors, weather stations, and climate monitors deliver real-time insights into soil health, humidity, rainfall, and temperature, enabling precise irrigation that saves water and boosts crop performance.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Automated irrigation controllers adjust watering schedules based on actual field conditions rather than guesswork, while livestock tracking and farm asset monitors enhance security and operational efficiency. Cold-chain sensors protect harvested produce during storage and transport by preventing temperature excursions.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'All collected data flows into the Cloud platform, where farmers can view dashboards, receive alerts, and analyze trends from any device. In essence, we turn farms into intelligent, self-optimizing ecosystems that grow more with less effort.',
          },
        ],
      },
    ],
    icon: 'Sprout',
    features: [
      'Soil moisture sensing',
      'Weather station monitoring',
      'Automated irrigation',
      'Livestock tracking',
      'Cold-chain protection',
      'Crop health analytics',
    ],
    order: 3,
  },
  {
    _type: 'service',
    title: 'Mining & Industrial',
    slug: { current: 'mining-industrial' },
    description:
      'Real-time visibility and safety monitoring for heavy machinery in harsh mining environments.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'In the Mining & Industrial sector, IoT solutions bring real-time visibility, safety, and operational efficiency to some of the harshest environments. Intelligent vibration, temperature, and pressure sensors continuously monitor crushers, conveyors, pumps, and other heavy machinery, enabling early detection of faults before they cause costly downtime.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Air-quality and gas sensors help maintain safe working conditions, while rugged GPS trackers keep tabs on high-value mobile assets across expansive mine sites. Fuel monitoring systems reduce theft and ensure efficient consumption, and environmental sensors support compliance with regulatory standards.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'All data streams into the Cloud platform, delivering actionable insights, automated alerts, predictive maintenance capabilities, and full oversight of complex operations.',
          },
        ],
      },
    ],
    icon: 'Mountain',
    features: [
      'Machinery vibration monitoring',
      'Air quality sensors',
      'GPS asset tracking',
      'Fuel theft prevention',
      'Predictive maintenance',
      'Environmental compliance',
    ],
    order: 4,
  },
  {
    _type: 'service',
    title: 'Logistics & Fleet',
    slug: { current: 'logistics-fleet' },
    description:
      'Real-time fleet visibility, route optimization, and cold-chain protection for transport operations.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'In the Logistics & Fleet sector, IoT solutions empower businesses with real-time visibility, security, and operational control across their entire vehicle network. GPS and telematics trackers provide continuous location updates, route intelligence, and driver behavior insights, helping reduce fuel costs and improve delivery efficiency.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Temperature and humidity sensors safeguard cold-chain cargo by detecting deviations instantly, while door and tamper sensors protect high-value goods in transit. Fuel-level monitoring prevents theft and supports accurate consumption analysis, and geofencing automations alert managers when vehicles enter or exit designated zones.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'All this data flows into the Cloud platform, where fleet managers access live dashboards, receive automated alerts, and generate performance analytics that streamline logistics operations and enhance reliability for every trip.',
          },
        ],
      },
    ],
    icon: 'Truck',
    features: [
      'GPS fleet tracking',
      'Cold-chain monitoring',
      'Fuel theft detection',
      'Driver behavior analysis',
      'Geofencing alerts',
      'Route optimization',
    ],
    order: 5,
  },
  {
    _type: 'service',
    title: 'Security & Anti-Intrusion',
    slug: { current: 'security' },
    description:
      'Smart security with instant threat detection, automated alarms, and real-time alerts.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: "In the Security & Anti-Intrusion sector, IoT finally gives you a smarter, faster, no-nonsense way to protect what matters. Think of it as having digital guards that never blink. Tamper sensors, vibration detectors, magnetic door contacts, and motion units instantly pick up suspicious activity, whether it's someone touching your transformer, forcing open a door, or sneaking along a perimeter fence.",
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Sirens, lights, and alarms can trigger automatically, and alerts hit your phone before the intruder even realizes they have been caught. For estates, schools, utilities, banks, and industrial sites, smart access control and automated responses turn reactive security into proactive prevention.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Everything reports to the Cloud platform, where live dashboards, event logs, and video integrations help you stay one step ahead. In short: fewer surprises, faster reactions, and smarter protection.',
          },
        ],
      },
    ],
    icon: 'ShieldCheck',
    features: [
      'Tamper detection',
      'Motion sensors',
      'Automated alarms',
      'Smart access control',
      'Real-time alerts',
      'Video integration',
    ],
    order: 6,
  },
]
