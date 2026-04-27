import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { PostBody } from '@/components/blog/PostBody'
import { getPostBySlug, getPosts } from '@/lib/sanity/queries'
import { urlFor } from '@/lib/sanity/image'
import { formatDate } from '@/lib/utils'
import { ArrowLeft, Calendar } from 'lucide-react'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = await getPosts(100).catch(() => [])
  return posts.map((p) => ({ slug: p.slug.current }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug).catch(() => null)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug).catch(() => null)
  if (!post) notFound()

  return (
    <article className="py-12 bg-white">
      <Container className="max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-brand-green hover:text-brand-dark text-sm font-medium mb-8 transition-colors">
          <ArrowLeft size={15} /> Back to News
        </Link>

        <div className="flex items-center gap-2 text-brand-green text-sm mb-4">
          <Calendar size={13} />
          {formatDate(post.publishedAt)}
          {post.author && <> · By {post.author.name}</>}
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-6 leading-tight">
          {post.title}
        </h1>

        {post.mainImage && (
          <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden mb-10">
            <Image
              src={urlFor(post.mainImage).width(800).height(400).url()}
              alt={post.mainImage.alt ?? post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <PostBody body={post.body} />
      </Container>
    </article>
  )
}
