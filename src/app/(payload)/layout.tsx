/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import config from '@payload-config'
import '@payloadcms/next/css'
import type { ServerFunctionClient } from 'payload'
import { handleServerFunctions, RootLayout } from '@payloadcms/next/layouts'
import React from 'react'

import { importMap } from './admin/importMap.js'
import './custom.scss'

type Args = {
  children: React.ReactNode
}

const serverFunction: ServerFunctionClient = async function (args) {
  'use server'
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  })
}

const Layout = ({ children }: Args) => (
  <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
    <pre>
      {JSON.stringify(
        {
          S3_BUCKET: process.env.S3_BUCKET,
          S3_ACCESS_KEY: process.env.S3_ACCESS_KEY,
          S3_SECRET_ACCESS_KEY: process.env.S3_SECRET_ACCESS_KEY,
          S3_ENDPOINT: process.env.S3_ENDPOINT,
          S3_REGION: process.env.S3_REGION,
        },
        null,
        2,
      )}
    </pre>
    {children}
  </RootLayout>
)

export default Layout
