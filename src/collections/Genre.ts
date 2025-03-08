import type { CollectionConfig } from 'payload'

export const Genre: CollectionConfig = {
  slug: 'genre',
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
