import type { CollectionConfig } from 'payload'

export const Tag: CollectionConfig = {
  slug: 'tag',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title'],
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
      hasMany: true,
    },
  ],
}
