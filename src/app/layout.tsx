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
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/static/favicon/site.webmanifest',
  twitter: {
    title: site.name,
    card: 'summary_large_image',
    site: '@tszhong0411',
    creator: '@tszhong0411',
  },
  keywords: site.keywords,
  themeColor: '#000',
  creator: 'tszhong0411',
  openGraph: {
    url: `${site.url}`,
    type: 'website',
    title: site.title,
    siteName: site.title,
    description: site.description,
    locale: 'en-US',
    images: [
      {
        url: 'https://honghong.me/static/images/projects/og-image/cover.png',
        width: 1200,
        height: 630,
        alt: site.description,
        type: 'image/png',
      },
    ],
  },
  icons: {
    icon: '/static/favicon/favicon.svg',
    shortcut: '/static/favicon/favicon.svg',
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
      lang='en-US'
      className={clsx(inter.variable, notoSansTC.variable, 'scroll-smooth')}
    >
      <body className='overflow-x-hidden bg-hong-bg font-default text-white'>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
