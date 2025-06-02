'use client'

import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import * as Icons from 'lucide-react'

type CardProps = {
  typeCard?: ('simple' | 'complex') | null
  title?: string
  richText?: any
  image?: any
  icon?: string | null
  className?: string
  imgClassName?: string
  staticImage?: any
}

export const Card: React.FC<CardProps> = ({
  typeCard = 'simple',
  title,
  richText,
  image,
  icon,
  className,
  imgClassName,
  staticImage,
}) => {
  const SelectedIcon = icon ? (Icons[icon as keyof typeof Icons] as React.ElementType) : null

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
    <div className="p-3 bg-white">
      <div className="border-2 border-orange-700 text-3xl p-4 mb-2 rounded w-16 h-16 flex items-center justify-center">
        {icon && SelectedIcon && <SelectedIcon size={24} className="orange-700" />}
      </div>
      <div className="">
        {title && <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>}
        {richText && (
          <RichText className="mb-0 text-gray-600" data={richText} enableGutter={false} />
        )}
      </div>
    </div>
  )
}
