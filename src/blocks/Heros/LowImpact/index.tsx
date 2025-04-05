import React from 'react'
import type { Page } from '@/payload-types'

type LowImpactHeroType =
  | {
      children?: React.ReactNode
      richText?: never
    }
  | (Omit<Page['hero'], 'richText'> & {
      children?: never
      richText?: Page['hero']['richText']
    })

export const LowImpactHero: React.FC<LowImpactHeroType> = ({
  children,
  richText,
}) => {
  return (
    <div>
      LowImpactHero
      <pre>{JSON.stringify(children, null, 2)}</pre>
      <pre>{JSON.stringify(richText, null, 2)}</pre>
    </div>
  )
}
