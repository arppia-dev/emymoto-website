import React from 'react'

import type { MediaBlock as MediaBlockProps, CardBlock as CardBlockProps } from '@/payload-types'
import { Card } from './Component.client'
import { StaticImageData } from 'next/image'

type CombinedNodeTypes = MediaBlockProps | CardBlockProps

type Props = CombinedNodeTypes & {
  className?: string
  staticImage?: StaticImageData
}

export const CardBlock: React.FC<Props> = ({ className, ...props }) => {
  return (
    <div className={[className, 'not-prose'].filter(Boolean).join(' ')}>
      <Card {...props} imgClassName="" />
    </div>
  )
}
