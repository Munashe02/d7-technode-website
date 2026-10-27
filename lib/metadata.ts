import type { Metadata } from 'next'

export const siteUrl = 'https://d7technode.com'

type PageMetadata = {
  title: string
  description: string
  path: string
}

export function createPageMetadata({ title, description, path }: PageMetadata): Metadata {
  const canonical = new URL(path, siteUrl).toString()
  const socialTitle = `${title} | D7 TechNode`

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: 'website',
      locale: 'en_ZA',
      url: canonical,
      siteName: 'D7 TechNode',
      title: socialTitle,
      description,
      images: [
        {
          url: '/hero/connected-infrastructure-bg.jpg',
          width: 1600,
          height: 900,
          alt: 'D7 TechNode connected infrastructure network',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: ['/hero/connected-infrastructure-bg.jpg'],
    },
  }
}
