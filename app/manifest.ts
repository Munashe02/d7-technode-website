import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'D7 TechNode',
    short_name: 'D7 TechNode',
    description: 'Intelligent systems for connected critical infrastructure.',
    start_url: '/',
    display: 'standalone',
    background_color: '#001827',
    theme_color: '#003150',
    icons: [{ src: '/logo.png', sizes: '192x56', type: 'image/png' }],
  }
}
