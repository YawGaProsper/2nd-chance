import { sanityClient } from './client'
import type { Post, Event, TeamMember } from '@/types'

export async function getPosts(limit = 10): Promise<Post[]> {
  return sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc) [0...$limit] {
      _id, title, slug, excerpt, mainImage, publishedAt,
      "author": author->{ name, image }
    }`,
    { limit: limit - 1 }
  )
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id, title, slug, excerpt, mainImage, publishedAt, body,
      "author": author->{ name, image },
      "categories": categories[]->title
    }`,
    { slug }
  )
}

export async function getEvents(upcoming = true): Promise<Event[]> {
  const filter = upcoming
    ? `*[_type == "event" && date >= now()]`
    : `*[_type == "event"]`
  return sanityClient.fetch(
    `${filter} | order(date asc) {
      _id, title, slug, description, date, endDate, location, isOnline,
      registrationUrl, mainImage, isFeatured
    }`
  )
}

export async function getFeaturedEvents(): Promise<Event[]> {
  return sanityClient.fetch(
    `*[_type == "event" && isFeatured == true && date >= now()] | order(date asc) [0...3] {
      _id, title, slug, description, date, location, isOnline, registrationUrl, mainImage
    }`
  )
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  return sanityClient.fetch(
    `*[_type == "teamMember"] | order(order asc) {
      _id, name, role, bio, photo, country, order, linkedIn
    }`
  )
}
