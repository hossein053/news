import React from 'react'
import { getNews } from './action'
import { CardNews } from '@/components/cardNews'
import Image from 'next/image'
import image from '@/assets/images/Screenshot 2025-01-01 234933.png'
export default async function Page () {
  const result = await getNews()

  return (
    <main className='container'>
      {result && Array.isArray(result.data) ? (
        result.data.length ? (
          <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 py-16'>
            {result.data?.map((item, index) => {
              return <CardNews {...item} key={index} />
            })}
          </div>
        ) : (
          <div className='w-full h-full flex justify-center items-center flex-col'>
            <Image
              src={image}
              alt='image'
              width={500}
              height={500}
              className='aspect-square object-contain'
            />
            <p className='text-3xl font-bold'>There is no content.</p>
          </div>
        )
      ) : null}
    </main>
  )
}
