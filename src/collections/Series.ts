import type { CollectionConfig } from 'payload'

export const Series: CollectionConfig = {
  slug: 'series',
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
      relationTo: ['books', 'authors'],
      hasMany: true,
    },
  ],
}
