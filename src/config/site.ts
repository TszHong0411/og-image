import { IconDescriptor } from 'next/dist/lib/metadata/types/metadata-types'

type Site = {
  url: string
  title: string
  name: string
  keywords: string[]
  titleTemplate: string
  description: string
  favicons: IconDescriptor[]
}

export const site: Site = {
  url:
    process.env.NODE_ENV === 'production'
      ? 'https://og-image.honghong.me'
      : 'http://localhost:3000',
  title: '小康 - Open Graph Image Generator',
  name: '小康',
  keywords: [
    '小康',
    'Open Graph Image Generator',
    'OG Image',
    'OG Image Generator',
  ],
  titleTemplate: '- Open Graph Image Generator',
  description:
    "小康's Open Graph Image Generator is used to generate OG Images for blog articles and it allows the use of parameters to customize the output.",
  favicons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/static/favicon/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/static/favicon/favicon-32x32.png',
    },
  ],
}
