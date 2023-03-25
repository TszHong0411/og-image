import { IconDescriptor } from 'next/dist/lib/metadata/types/metadata-types'

import { isProduction } from '@/lib/constants'

type Site = {
  url: string
  title: string
  name: string
  titleTemplate: string
  description: string
  favicons: IconDescriptor[]
}

export const site: Site = {
  url: isProduction ? 'https://og-image.honghong.me' : 'http://localhost:3000',
  title: '小康 - OG Image 產生器',
  name: '小康',
  titleTemplate: '- 小康',
  description:
    '小康的 OG Image 產生器用來產生部落格文章的 OG Image，可以使用 param 的方式傳入參數。',
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
