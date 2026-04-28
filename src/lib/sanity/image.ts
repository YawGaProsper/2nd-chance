import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { createClient } from '@sanity/client'

const projectId = (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder').trim()
const dataset = (process.env.NEXT_PUBLIC_SANITY_DATASET || 'production').trim()

let builder: ReturnType<typeof imageUrlBuilder> | null = null
try {
  const client = createClient({ projectId, dataset, apiVersion: '2024-01-01', useCdn: true })
  builder = imageUrlBuilder(client)
} catch {
  // Sanity not configured yet — image URLs will be unavailable
}

export function urlFor(source: SanityImageSource) {
  if (!builder) return { url: () => '' } as ReturnType<ReturnType<typeof imageUrlBuilder>['image']>
  return builder.image(source)
}
