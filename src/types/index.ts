export interface Post {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  mainImage?: SanityImage
  publishedAt: string
  author?: { name: string; image?: SanityImage }
  body: PortableTextBlock[]
  categories?: string[]
}

export interface Event {
  _id: string
  title: string
  slug: { current: string }
  description: string
  date: string
  endDate?: string
  location: string
  isOnline: boolean
  registrationUrl?: string
  mainImage?: SanityImage
  isFeatured: boolean
}

export interface TeamMember {
  _id: string
  name: string
  role: string
  bio?: string
  photo?: SanityImage
  country: 'uk' | 'south-sudan' | 'both'
  order: number
  linkedIn?: string
}

export interface SanityImage {
  _type: 'image'
  asset: { _ref: string; _type: 'reference' }
  alt?: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PortableTextBlock = any

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface VolunteerFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  country: string
  skills: string
  availability: string
  motivation: string
}
