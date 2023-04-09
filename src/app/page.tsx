import type { Metadata } from 'next'
import Image from 'next/image'

import { site } from '@/config/site'

export const metadata: Metadata = {
  alternates: {
    canonical: site.url,
  },
}

const Home = () => {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center gap-8 px-2'>
      <h1 className='text-2xl sm:text-4xl'>Open Graph Image Generator</h1>

      <div className='my-8'>
        <a
          href='https://github.com/tszhong0411/og-image#-usage'
          className='rounded-lg border border-white bg-white px-4 py-2 text-xl font-bold text-black transition-colors duration-300 hover:bg-black hover:text-white sm:text-3xl'
        >
          Usage
        </a>
      </div>

      <Image
        src='/static/images/example.png'
        width={899}
        height={470}
        className='rounded-lg'
        alt='Example'
      />
    </div>
  )
}

export default Home
