import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import type { Block } from 'payload'

export const Card: Block = {
  slug: 'card',
  interfaceName: 'CardBlock',
  fields: [
    {
      name: 'typeCard',
      type: 'select',
      defaultValue: 'simple',
      options: [
        {
          label: 'Simple',
          value: 'simple',
        },
        {
          label: 'Complex',
          value: 'complex',
        },
      ],
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
    },
    {
      name: 'icon',
      type: 'text',
      required: false,
      admin: {
        condition: (_, siblingData) => siblingData?.typeCard === 'simple',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        condition: (_, siblingData) => siblingData?.typeCard === 'complex',
      },
    },
  ],
}
