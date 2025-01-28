import type { CollectionConfig } from 'payload'

export const Book: CollectionConfig = {
  slug: 'book',
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
      name: 'image',
      type: 'upload',
      relationTo: 'media',
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
          relationTo: 'author',
        },
        {
          name: 'series',
          type: 'relationship',
          relationTo: 'series',
        },
      ],
    },

    {
      type: 'row',
      fields: [
        {
          name: 'bookNumber',
          type: 'number',
        },
        {
          name: 'published',
          type: 'date',
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
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'spiciness',
      type: 'number',
      min: 0,
      max: 5,
      admin: {
        position: 'sidebar',
      },
    },

    {
      name: 'finished',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'show',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tag',
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
