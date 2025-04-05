'use client'

import type { Header } from '@/payload-types'
import Link from 'next/link'
import React from 'react'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  return (
    <header className="bg-sky-950">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <Link href="/"></Link>
        <div className="flex items-center gap-4">
          <HeaderNav data={data} />
          <button className="z-10 hidden bg-sky-800 px-6 py-4 font-semibold text-white hover:bg-amber-200 hover:text-sky-950 md:block">
            Obten una cita
          </button>
        </div>
      </div>
    </header>
  )
}
