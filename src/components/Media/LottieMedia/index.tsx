'use client'

import { useLottie } from 'lottie-react'
import { StaticImageData } from 'next/image'

import type { Props as MediaProps } from '../types'

import animationData from '@/heros/HighImpact/moto.json'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export const LottieMedia: React.FC<MediaProps> = (props) => {
  const { resource, src: srcFromProps } = props

  let src: StaticImageData | string = srcFromProps || ''

  if (!src && resource && typeof resource === 'object') {
    const { url } = resource

    const cacheTag = resource.updatedAt

    src = getMediaUrl(url, cacheTag)
  }

  const { View } = useLottie({
    animationData: animationData,
    loop: true,
  })

  return <>{View}</>
}
