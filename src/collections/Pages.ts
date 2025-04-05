import type { CollectionConfig, Field } from 'payload'

import { Hero } from '@/blocks/Heros/config'
import { Content } from '../blocks/Content/config'
import { generateSlug } from '../utils/generateSlug'

const fields: Field[] = [
  {
    name: 'title',
    type: 'text',
    required: true,
  },
  {
    name: 'slug',
    type: 'text',
    required: true,
    unique: true,
    admin: {
      position: 'sidebar',
      readOnly: true,
    },
  },
  {
    type: 'tabs',
    tabs: [
      {
        label: 'Hero',
        fields: [Hero],
      },
      {
        label: 'Content',
        fields: [
          {
            name: 'layout',
            type: 'blocks',
            blocks: [Content],
            required: true,
            admin: {
              initCollapsed: true,
            },
          },
        ],
      },
    ],
  },
]

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields,
  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        if (operation === 'create' || operation === 'update') {
          if (data.title) {
            data.slug =
              data.title === 'Inicio' ? 'home' : generateSlug(data.title)
          }
        }
        return data
      },
    ],
  },
}
