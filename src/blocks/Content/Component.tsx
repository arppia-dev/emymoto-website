import { Content } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { JSX } from 'react'

export function ContentBlock(block: Content): JSX.Element | undefined {
  return (
    <div className="container mx-auto px-4 py-16">
      <RichText data={block.content} />
    </div>
  )
}
