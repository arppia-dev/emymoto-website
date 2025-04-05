import type { Page } from '@/payload-types'
import React from 'react'

export const MediumImpactHero: React.FC<Page['hero']> = ({
  links,
  media,
  richText,
}) => {
  return (
    <div>
      MediumImpactHero
      <pre>{JSON.stringify(links, null, 2)}</pre>
      <pre>{JSON.stringify(media, null, 2)}</pre>
      <pre>{JSON.stringify(richText, null, 2)}</pre>
    </div>
  )
}
