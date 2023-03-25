import Image from 'next/image'

const Home = () => {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center gap-8 bg-[#121212] text-white'>
      <h1 className='text-4xl sm:text-7xl'>OG Image 產生器</h1>

      <div className='my-8'>
        <a
          href='https://github.com/tszhong0411/og-image'
          className='text-3xl text-blue-400 underline'
        >
          使用方法
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
