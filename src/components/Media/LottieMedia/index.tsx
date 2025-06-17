'use client'

import { useLottie } from 'lottie-react'
import { StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'

import type { Props as MediaProps } from '../types'

import { getMediaUrl } from '@/utilities/getMediaUrl'

export const LottieMedia: React.FC<MediaProps> = (props) => {
  const { resource, src: srcFromProps } = props
  const [animationData, setAnimationData] = useState<any>(null)

  let src: StaticImageData | string = srcFromProps || ''

  if (!src && resource && typeof resource === 'object') {
    const { url } = resource

    const cacheTag = resource.updatedAt

    src = getMediaUrl(url, cacheTag)
  }

  useEffect(() => {
    if (src) {
      fetch(`${src}`)
        .then((res) => res.json())
        .then(setAnimationData)
    }
  }, [src])

  const { View } = useLottie({
    animationData: animationData,
    loop: true,
  })

  return <>{View}</>
}
