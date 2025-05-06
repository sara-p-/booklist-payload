import type { CollectionConfig } from 'payload'

export const Books: CollectionConfig = {
  slug: 'books',

  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'bookId', 'author', 'series', 'bookNumber', 'finishDate'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'author',
          type: 'relationship',
          relationTo: 'authors',
          required: true,
        },
        {
          name: 'series',
          type: 'relationship',
          relationTo: 'series',
          required: true,
        },
      ],
    },

    {
      type: 'row',
      fields: [
        {
          name: 'bookNumber',
          type: 'number',
          required: true,
        },
        {
          name: 'published',
          type: 'date',
          required: true,
        },
        {
          name: 'length',
          type: 'number',
        },
      ],
    },
    {
      name: 'rating',
      type: 'number',
      min: 0,
      max: 10,
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'spiciness',
      type: 'number',
      min: 0,
      max: 5,
      required: true,
      admin: {
        position: 'sidebar',
      },
    },

    {
      name: 'finished',
      type: 'checkbox',
      defaultValue: true,
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'show',
      type: 'checkbox',
      defaultValue: true,
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'genres',
      type: 'relationship',
      relationTo: 'genres',
      hasMany: true,
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'bookId',
      type: 'number',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'notes',
      type: 'richText',
    },
    {
      name: 'smell',
      type: 'textarea',
    },

    {
      type: 'row',
      fields: [
        {
          name: 'purchaseDate',
          type: 'date',
        },
        {
          name: 'finishDate',
          type: 'date',
        },
      ],
    },
  ],
}
