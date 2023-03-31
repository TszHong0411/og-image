import { Analytics } from '@vercel/analytics/react'
import clsx from 'clsx'
import { Inter, Noto_Sans_TC } from 'next/font/google'

import '@/styles/globals.css'

import { site } from '@/config/site'

import { WithChildren } from '@/types'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const notoSansTC = Noto_Sans_TC({
  variable: '--font-noto-sans-tc',
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
})

export const metadata = {
  title: {
    default: site.title,
    template: `%s ${site.titleTemplate}`,
  },
  description: site.description,
  robots: {
    index: true,
    follow: true,
  },
  manifest: `${site.url}/static/favicon/site.webmanifest`,
  twitter: {
    title: site.name,
    card: 'summary_large_image',
    site: '@TszhongLai0411',
    creator: '@TszhongLai0411',
  },
  openGraph: {
    url: `${site.url}`,
    type: 'website',
    title: site.title,
    siteName: site.title,
    description: site.description,
    locale: 'zh-TW',
    images: [
      {
        url: 'https://honghong.me/static/images/projects/og-image/cover.png',
        width: 1600,
        height: 960,
        alt: site.description,
      },
    ],
  },
  icons: {
    icon: '/static/favicon/favicon.svg',
    apple: [
      {
        url: '/static/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [...site.favicons],
  },
}

type RootLayoutProps = WithChildren

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props

  return (
    <html
      lang='zh-TW'
      className={clsx(inter.variable, notoSansTC.variable, 'scroll-smooth')}
    >
      <body className='font-default'>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
