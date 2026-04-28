import { createClient, type SanityClient } from '@sanity/client'

const rawProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const projectId = rawProjectId ? rawProjectId.trim() : ''
const dataset = (process.env.NEXT_PUBLIC_SANITY_DATASET || 'production').trim()

function makeClient(useCdn: boolean, token?: string): SanityClient | null {
  if (!projectId) return null
  try {
    return createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn,
      ...(token ? { token } : {}),
    })
  } catch {
    return null
  }
}

export const sanityClient: SanityClient | null = makeClient(true)
export const sanityClientWithToken: SanityClient | null = makeClient(
  false,
  process.env.SANITY_API_TOKEN
)
