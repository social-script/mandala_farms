import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mandalafarmsarakuvalley.com'
  
  const routes = [
    '',
    '/our-story',
    '/the-farm',
    '/araku-valley',
    '/experiences',
    '/tariff',
    '/the-cottages',
    '/cafe',
    '/contact-us',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
} 