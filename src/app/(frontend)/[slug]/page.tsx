import { RenderHero } from '@/blocks/Heros/RenderHero'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { queryPageBySlug } from '@/utils/queryPageBySlug'
import { type RequiredDataFromCollectionSlug } from 'payload'

type PageProps = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Page({ params: paramsPromise }: PageProps) {
  const { slug = 'home' } = await paramsPromise

  const page: RequiredDataFromCollectionSlug<'pages'> | null =
    await queryPageBySlug({
      slug,
    })

  if (!page) {
    return <>Not found</>
  }

  const { hero, layout } = page

  return (
    <article>
      <RenderHero {...hero} />
      <RenderBlocks blocks={layout} />
    </article>
  )
}
