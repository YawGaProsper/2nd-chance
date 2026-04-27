import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity/image'
import type { PortableTextBlock } from '@/types'

const components = {
  types: {
    image: ({ value }: { value: { asset: unknown; alt?: string } }) => (
      <div className="my-8 relative rounded-xl overflow-hidden">
        <Image
          src={urlFor(value).width(800).url()}
          alt={value.alt ?? ''}
          width={800}
          height={450}
          className="w-full h-auto object-cover"
        />
        {value.alt && (
          <p className="text-center text-sm text-gray-400 mt-2 italic">{value.alt}</p>
        )}
      </div>
    ),
  },
  marks: {
    link: ({ children, value }: { children: React.ReactNode; value?: { href: string } }) => (
      <a
        href={value?.href ?? '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand-green hover:text-brand-dark underline"
      >
        {children}
      </a>
    ),
  },
}

export function PostBody({ body }: { body: PortableTextBlock[] }) {
  return (
    <div className="prose prose-lg max-w-none prose-brand prose-headings:text-brand-dark prose-p:text-gray-600 prose-li:text-gray-600">
      <PortableText value={body} components={components} />
    </div>
  )
}
