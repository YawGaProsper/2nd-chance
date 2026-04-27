import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { PostCard } from '@/components/blog/PostCard'
import { getPosts } from '@/lib/sanity/queries'

export const metadata: Metadata = {
  title: 'News & Blog',
  description: 'Latest news, stories and updates from 2nd Chance.',
}

export default async function BlogPage() {
  const posts = await getPosts(20).catch(() => [])

  return (
    <>
      <section className="bg-gradient-to-br from-brand-darker to-brand-dark py-16 sm:py-20">
        <Container>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">News &amp; Blog</h1>
          <p className="text-green-200 text-lg">Stories, updates and insights from 2nd Chance.</p>
        </Container>
      </section>

      <section className="py-14 bg-brand-light min-h-[40vh]">
        <Container>
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No posts yet — check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  )
}
