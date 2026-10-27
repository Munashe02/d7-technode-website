import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/metadata'

const routes = ['', '/about', '/services', '/products', '/resources', '/contact']

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/services' ? 0.9 : 0.7,
  }))
}
