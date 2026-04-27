import { defineField, defineType } from 'sanity'

export const eventSchema = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4, validation: (r) => r.required() }),
    defineField({ name: 'date', title: 'Start Date & Time', type: 'datetime', validation: (r) => r.required() }),
    defineField({ name: 'endDate', title: 'End Date & Time', type: 'datetime' }),
    defineField({ name: 'location', title: 'Location', type: 'string', description: 'Physical address or city' }),
    defineField({ name: 'isOnline', title: 'Online Event?', type: 'boolean', initialValue: false }),
    defineField({ name: 'registrationUrl', title: 'Registration URL', type: 'url' }),
    defineField({ name: 'mainImage', title: 'Event Image', type: 'image', options: { hotspot: true }, fields: [defineField({ name: 'alt', type: 'string', title: 'Alt Text' })] }),
    defineField({ name: 'isFeatured', title: 'Feature on Homepage?', type: 'boolean', initialValue: false }),
  ],
  preview: {
    select: { title: 'title', date: 'date', media: 'mainImage' },
    prepare({ title, date, media }) {
      return { title, subtitle: date ? new Date(date).toLocaleDateString('en-GB') : 'No date set', media }
    },
  },
  orderings: [{ title: 'Event Date, Soonest', name: 'dateAsc', by: [{ field: 'date', direction: 'asc' }] }],
})
