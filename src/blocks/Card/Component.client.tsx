'use client'

import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
// import * as Icons from 'lucide-react'

type CardProps = {
  typeCard?: ('simple' | 'complex') | null
  title?: string
  richText?: any
  image?: any
  // icon?: string | null
  className?: string
  imgClassName?: string
  staticImage?: any
}

export const Card: React.FC<CardProps> = ({
  typeCard = 'simple',
  title,
  richText,
  image,
  // icon,
  className,
  imgClassName,
  staticImage,
}) => {
  // const SelectedIcon = icon ? (Icons[icon as keyof typeof Icons] as React.ElementType) : null

  if (typeCard === 'complex') {
    return (
      <div className={[className, 'bg-white transition'].filter(Boolean).join(' ')}>
        {image && <Media resource={image} className={imgClassName} src={staticImage} />}
        {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
        {richText && <RichText className="mb-0" data={richText} enableGutter={false} />}
      </div>
    )
  }
  return (
    <div className="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6">
      <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-5">
        <div className="sm:order-last sm:shrink-0">
          <Media resource={image} className={imgClassName} src={staticImage} size="40px" />
        </div>

        <div className="mt-4 sm:mt-0">
          <h3 className="text-lg font-medium text-pretty text-gray-900">{title}</h3>
        </div>
      </div>
      {richText && (
        <RichText
          className="mt-4 line-clamp-4 text-sm text-pretty text-gray-700"
          data={richText}
          enableGutter={false}
        />
      )}
    </div>
  )
}
