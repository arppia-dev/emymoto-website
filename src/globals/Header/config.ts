import type { Field, GlobalConfig } from 'payload'

import { revalidateHeader } from './hooks/revalidateHeader'

const fields: Field[] = [
  {
    name: 'navItems',
    type: 'array',
    minRows: 1,
    maxRows: 8,
    fields: [
      {
        name: 'page',
        type: 'relationship',
        relationTo: 'pages',
        required: true,
      },
    ],
  },
]

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields,
  hooks: {
    afterChange: [revalidateHeader],
  },
}
