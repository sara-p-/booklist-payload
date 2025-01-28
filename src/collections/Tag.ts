import type { CollectionConfig } from 'payload'

export const Tag: CollectionConfig = {
  slug: 'tag',
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
      relationTo: 'book',
    },
  ],
}
