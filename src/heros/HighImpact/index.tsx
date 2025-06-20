'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <div className="relative -mt-40 pt-52 pb-20 bg-slate-900 text-white" data-theme="dark">
      <div className="container relative flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-2/4 text-center md:text-left flex items-center">
          <div className="min-w-full">
            <div className="break-words max-w-full overflow-hidden">
              {richText && <RichText data={richText} enableGutter={false} />}
            </div>
            {Array.isArray(links) && links.length > 0 && (
              <ul className="flex justify-center md:justify-start gap-4">
                {links.map(({ link }, i) => {
                  return (
                    <li key={i}>
                      <CMSLink {...link} />
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </div>
        <div className="w-full lg:w-2/4">
          <Media fill imgClassName="-z-10 object-cover" priority resource={media} />
        </div>
      </div>
    </div>
  )
}
