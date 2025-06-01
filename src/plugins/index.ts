import { revalidateRedirects } from '@/hooks/revalidateRedirects'
import { beforeSyncWithSearch } from '@/search/beforeSync'
import { searchFields } from '@/search/fieldOverrides'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'
import { redirectsPlugin } from '@payloadcms/plugin-redirects'
import { searchPlugin } from '@payloadcms/plugin-search'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'
import { FixedToolbarFeature, HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import { Plugin } from 'payload'

import { Page, Post } from '@/payload-types'
import { getServerSideURL } from '@/utilities/getURL'

const generateTitle: GenerateTitle<Post | Page> = ({ doc }) => {
  return doc?.title ? `${doc.title}` : ''
}

const generateURL: GenerateURL<Post | Page> = ({ doc }) => {
  const url = getServerSideURL()

  return doc?.slug ? `${url}/${doc.slug}` : url
}

export const plugins: Plugin[] = [
  redirectsPlugin({
    collections: ['pages', 'posts'],
    overrides: {
      // @ts-expect-error - This is a valid override, mapped fields don't resolve to the same type
      fields: ({ defaultFields }) => {
        return defaultFields.map((field) => {
          if ('name' in field && field.name === 'from') {
            return {
              ...field,
              admin: {
                description: 'You will need to rebuild the website when changing this field.',
              },
            }
          }
          return field
        })
      },
      hooks: {
        afterChange: [revalidateRedirects],
      },
    },
  }),
  nestedDocsPlugin({
    collections: ['categories'],
    generateURL: (docs: any) => docs.reduce((url: any, doc: any) => `${url}/${doc.slug}`, ''),
  }),
  seoPlugin({
    generateTitle,
    generateURL,
  }),
  formBuilderPlugin({
    fields: {
      payment: false,
    },
    formOverrides: {
      fields: ({ defaultFields }) => {
        return defaultFields.map((field) => {
          if ('name' in field && field.name === 'confirmationMessage') {
            return {
              ...field,
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    FixedToolbarFeature(),
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                  ]
                },
              }),
            }
          }
          return field
        })
      },
    },
  }),
  searchPlugin({
    collections: ['posts'],
    beforeSync: beforeSyncWithSearch,
    searchOverrides: {
      fields: ({ defaultFields }) => {
        return [...defaultFields, ...searchFields]
      },
    },
  }),
  payloadCloudPlugin(),
  s3Storage({
    collections: {
      media: true,
    },
    bucket: process.env.S3_BUCKET ?? '',
    config: {
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY ?? '',
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY ?? '',
      },
      region: process.env.S3_REGION ?? '',
      endpoint: process.env.S3_ENDPOINT ?? '',
    },
  }),
]

/*
S3_BUCKET=hafbuy-strapi-space
S3_ACCESS_KEY=DO801BKTCUXH2KCCBWHC
S3_SECRET_ACCESS_KEY=4T2feAck87go9WPAPNjo6vR8Zh4xIV7kaiv2PgfzcIU
S3_ENDPOINT=https://nyc3.digitaloceanspaces.com/hafbuy-media-library-int
S3_REGION=nyc3

 s3Storage({
    collections: {
      media: true,
    },
    bucket: 'hafbuy-strapi-space',
    config: {
      credentials: {
        accessKeyId: 'DO00T3Y66QJ7HYTDR4EX',
        secretAccessKey: 'Ja/qi4e+pQk8YCuVgVMEA0Lv8H5Kpej2/kZyT/06P7M',
      },
      region: 'nyc3',
      endpoint: 'https://nyc3.digitaloceanspaces.com/hafbuy-media-library-int',
    },
  }),
*/
