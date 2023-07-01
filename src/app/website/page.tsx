'use client'

import dayjs from 'dayjs'
import { useSearchParams } from 'next/navigation'
import React from 'react'

import bgImage from '@/assets/images/gradient_bg.png'

const OGImagePage = () => {
  const searchParams = useSearchParams()
  const title = searchParams.get('title') ?? ''
  const url = searchParams.get('url') ?? 'honghong.me'
  const image =
    searchParams.get('image') ?? 'https://honghong.me/static/images/avatar.png'
  const author = searchParams.get('author') ?? 'Hong'
  const date = searchParams.get('date')
    ? dayjs(searchParams.get('date')).format('YYYY-MM-DD')
    : null

  return (
    <>
      <div
        className='flex flex-col justify-between py-16 px-12 text-white'
        style={{
          width: 1200,
          height: 630,
          backgroundImage: `url(${bgImage.src})`,
        }}
      >
        <div className='flex items-center justify-start'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            width={85}
            height={85}
            src={image}
            className='rounded-full'
            alt='logo'
          />
          <div className='ml-4 text-[32px] font-semibold'>{author}</div>
        </div>
        <div className='flex flex-col'>
          <p className='text-[44px] font-semibold text-[#ecedee]'>{title}</p>
          <p className='text-4xl font-bold text-[rgba(236,237,238,0.7)]'>
            {url}
            {date && ` · ${date}`}
          </p>
        </div>
      </div>
    </>
  )
}

export default OGImagePage
