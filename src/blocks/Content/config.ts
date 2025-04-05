import type { Block, Field } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

const fields: Field[] = [
  {
    name: 'content',
    type: 'richText',
    label: false,
    required: true,
    editor: lexicalEditor({
      features: ({ rootFeatures }) => {
        return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
      },
    }),
  },
]

export const Content: Block = {
  slug: 'content',
  interfaceName: 'Content',
  fields,
}
