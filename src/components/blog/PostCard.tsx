import Link from 'next/link'
import Image from 'next/image'
import { Calendar } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import { urlFor } from '@/lib/sanity/image'
import type { Post } from '@/types'

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="group flex flex-col rounded-2xl overflow-hidden border border-brand-border hover:border-brand-green hover:shadow-lg transition-all duration-300 bg-white"
    >
      {post.mainImage && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={urlFor(post.mainImage).width(600).height(300).url()}
            alt={post.mainImage.alt ?? post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-1.5 text-brand-green text-sm mb-3">
          <Calendar size={13} />
          {formatDate(post.publishedAt)}
        </div>
        <h2 className="font-bold text-brand-dark text-lg mb-2 group-hover:text-brand-green transition-colors line-clamp-2">
          {post.title}
        </h2>
        <p className="text-gray-500 text-sm line-clamp-3 flex-1">{post.excerpt}</p>
        {post.author && (
          <p className="text-xs text-gray-400 mt-4">By {post.author.name}</p>
        )}
      </div>
    </Link>
  )
}
