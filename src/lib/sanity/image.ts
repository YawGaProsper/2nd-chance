import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { createClient } from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

const imageClient = createClient({ projectId, dataset, apiVersion: '2024-01-01', useCdn: true })
const builder = imageUrlBuilder(imageClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
