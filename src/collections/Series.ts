import type { CollectionConfig } from 'payload'

export const Series: CollectionConfig = {
  slug: 'series',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'books',
      type: 'relationship',
      relationTo: ['book', 'author'],
    },
  ],
}
