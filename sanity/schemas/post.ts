import { defineField, defineType } from 'sanity'

export const postSchema = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (r) => r.required() }),
    defineField({ name: 'author', title: 'Author', type: 'reference', to: [{ type: 'teamMember' }] }),
    defineField({ name: 'mainImage', title: 'Main Image', type: 'image', options: { hotspot: true }, fields: [defineField({ name: 'alt', type: 'string', title: 'Alt Text' })] }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3, validation: (r) => r.required().max(200) }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime', initialValue: () => new Date().toISOString() }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true }, fields: [defineField({ name: 'alt', type: 'string', title: 'Alt Text' })] },
      ],
    }),
  ],
  preview: {
    select: { title: 'title', author: 'author.name', media: 'mainImage' },
    prepare({ title, author, media }) {
      return { title, subtitle: author ? `By ${author}` : '', media }
    },
  },
  orderings: [{ title: 'Published Date, Newest', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
})
