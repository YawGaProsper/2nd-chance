import { createClient, type SanityClient } from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

function makeClient(useCdn: boolean, token?: string): SanityClient | null {
  if (!projectId) return null
  return createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    useCdn,
    ...(token ? { token } : {}),
  })
}

export const sanityClient: SanityClient | null = makeClient(true)
export const sanityClientWithToken: SanityClient | null = makeClient(
  false,
  process.env.SANITY_API_TOKEN
)
