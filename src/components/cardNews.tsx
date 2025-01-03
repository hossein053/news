'use client'
import { deleteNews, getNews } from '@/app/news/action'
import { Svg } from '@/ui/svg'
import { AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { AddNew } from './addNew'

type Props = {
  image: string
  lable: string
  title: string
  description: string
  _id: string
  createdAt: string
}

function getTimeDifference (uploadTime: string): string {
  const now = new Date()
  const uploadDate = new Date(uploadTime)

  const diffInMs = now.getTime() - uploadDate.getTime()
  const diffInSeconds = Math.floor(diffInMs / 1000)
  const diffInMinutes = Math.floor(diffInSeconds / 60)
  const diffInHours = Math.floor(diffInMinutes / 60)
  const diffInDays = Math.floor(diffInHours / 24)

  if (diffInDays > 0) {
    return `${diffInDays} ${diffInDays === 1 ? 'day' : 'days'} ago`
  } else if (diffInHours > 0) {
    return `${diffInHours} ${diffInHours === 1 ? 'hour' : 'hours'} ago`
  } else {
    return `${diffInMinutes} ${diffInMinutes === 1 ? 'minute' : 'minutes'} ago`
  }
}

export const CardNews: React.FC<Props> = props => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [options, setOptions] = React.useState(false)

  const handler = async () => {
    await deleteNews(props._id)
  }

  const handlerEdit = () => {
    setIsOpen(true)
  }

  return (
    <article className='w-full rounded-lg bg-white overflow-hidden relative group shadow-xl'>
      <figure className='w-full relative inline-block'>
        {props?.image ? (
          <Image
            alt=''
            src={props?.image}
            width={370}
            height={242}
            className='object-cover aspect-[16/9] w-full'
          />
        ) : (
          <div className='object-cover aspect-[16/9] w-full flex justify-center items-center'>
            no image
          </div>
        )}
        <figcaption className='bg-[#fabc2c] text-black inline-block absolute bottom-2 end-2 px-2 py-1 rounded-md text-sm font-bold'>
          {props.lable}
        </figcaption>
      </figure>
      <div className='p-4 flex flex-col gap-y-6 justify-between'>
        <h2 className='font-semibold text-lg leading-[120%] line-clamp-2'>{props.title}</h2>
        <div className='flex justify-between items-center gap-x-12'>
          <strong className='font-medium text-xs line-clamp-1 w-1/2'>{props.description}</strong>
          <span className='font-medium text-xs'>{getTimeDifference(props.createdAt)}</span>
        </div>
      </div>
      <div className='bg-black bg-opacity-70 w-full h-full absolute top-0 start-0 hidden group-hover:block'>
        <div className='w-full h-full flex justify-center items-center gap-x-6'>
          <Svg.Delete onClick={handler} className='cursor-pointer' />
          <Svg.Edit onClick={handlerEdit} className='cursor-pointer' />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && <AddNew values={props} OnClick={() => setIsOpen(false)} />}
      </AnimatePresence>
    </article>
  )
}
