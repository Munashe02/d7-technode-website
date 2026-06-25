import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

export async function getResources() {
  return client.fetch(`
    *[_type == "resource"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      category,
      description,
      "fileUrl": fileUpload.asset->url,
      "coverImage": coverImage.asset->url,
      tags,
      featured,
      publishedAt
    }
  `)
}

export async function getResourceBySlug(slug: string) {
  return client.fetch(
    `
    *[_type == "resource" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      category,
      description,
      "fileUrl": fileUpload.asset->url,
      "coverImage": coverImage.asset->url,
      tags,
      publishedAt
    }
  `,
    { slug }
  )
}

export async function getServices() {
  return client.fetch(`
    *[_type == "service"] | order(order asc) {
      _id,
      title,
      slug,
      description,
      content,
      icon,
      "image": image.asset->url,
      features,
      order
    }
  `)
}

export async function getProducts() {
  return client.fetch(`
    *[_type == "product"] {
      _id,
      title,
      slug,
      description,
      "image": image.asset->url,
      features,
      pricing,
      category,
      featured
    }
  `)
}
