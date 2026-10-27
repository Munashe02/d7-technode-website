import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/metadata'
import { sectors } from '@/lib/site-data'

const routes = [
  '',
  '/about',
  '/services',
  ...sectors.map((sector) => `/services/${sector.slug}`),
  '/products',
  '/resources',
  '/contact',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/services' ? 0.9 : route.startsWith('/services/') ? 0.8 : 0.7,
  }))
}
