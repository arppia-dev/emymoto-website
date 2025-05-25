import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  return (
    <footer className="mt-auto border-t border-border bg-black dark:bg-card text-white">
      <div className="container py-8 gap-8 flex flex-col md:flex-row md:justify-between">
        <div>
          <Link className="flex items-center" href="/">
            <Logo />
          </Link>
          <div>
            <p>Calle 11, Río Abajo, al costado de Wester Union</p>
            <p>📞(+507) 6563-0899</p>
          </div>
        </div>

        <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          <ThemeSelector />
          <nav className="flex flex-col md:flex-row gap-4">
            {navItems.map(({ link }, i) => {
              return <CMSLink className="text-white" key={i} {...link} />
            })}
          </nav>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
      <div>
        <p className="text-center text-sm py-4">
          © {new Date().getFullYear()} <Link href="/">EMYMOTO</Link>. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
