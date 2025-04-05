import { HeaderClient } from './Component.client'
import { type Header } from '@/payload-types'

async function getHeaderData() {
  const res = await fetch(`${process.env.PAYLOAD_URL}/api/globals/header`, {
    cache: 'no-store',
  })

  if (!res.ok) throw new Error('Failed to fetch header data')

  return res.json()
}

export async function Header() {
  const headerData = await getHeaderData()
  return <HeaderClient data={headerData} />
}
