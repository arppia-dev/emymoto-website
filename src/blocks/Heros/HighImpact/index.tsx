'use client'

import type { Page } from '@/payload-types'
import React from 'react'

export const HighImpactHero: React.FC<Page['hero']> = ({
  links,
  media,
  richText,
}) => {
  return (
    <div>
      HighImpactHero
      <pre>{JSON.stringify(links, null, 2)}</pre>
      <pre>{JSON.stringify(media, null, 2)}</pre>
      <pre>{JSON.stringify(richText, null, 2)}</pre>
    </div>
  )
}
