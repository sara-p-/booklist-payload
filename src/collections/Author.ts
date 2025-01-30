import type { CollectionConfig } from 'payload'

export const Author: CollectionConfig = {
  slug: 'author',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'books',
      type: 'relationship',
      relationTo: ['book', 'series'],
      hasMany: true,
    },
  ],
}
