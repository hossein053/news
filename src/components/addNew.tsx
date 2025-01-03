'use client'
import { createNews, updateNews } from '@/app/news/action' // فرض بر این است که تابع updateNews وجود دارد
import { Modal } from '@/ui/modal'
import Image from 'next/image'
import React from 'react'
import { useFormStatus } from 'react-dom'

type Item = {
  image: string
  lable: string
  title: string
  description: string
  _id: string
}

interface Props {
  OnClick: () => void
  values?: Item
}

export const AddNew: React.FC<Props> = ({ OnClick, values }) => {
  const { pending } = useFormStatus()
  const [img, setImg] = React.useState<File | null | string>(
    values?.image ? values.image : null
  )

  const handler = () => {
    OnClick()
    setImg(values?.image || null)
  }

  async function handleSubmit (formData: FormData) {
    try {

      if (!img || typeof img === 'string') {
        formData.set('image', img || '')
      }

      if (values) {
        formData.append('id', values._id)
        await updateNews(formData)
      } else {
        await createNews(formData)
      }

      handler()

    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Modal style={{ padding: 32 }} onclick={handler}>
      <h3 className='text-lg font-semibold'>
        {values ? 'Edit News' : 'Create New'}
      </h3>
      <form action={handleSubmit} className='p-3 flex flex-col gap-y-3'>
        <div className='md:w-2/3 w-full h-auto aspect-video mx-auto rounded-lg relative overflow-hidden border border-zinc-200 flex justify-center items-center'>
          <input
            disabled={pending}
            type='file'
            accept='image/*'
            className='opacity-0 absolute z-[2] w-full h-full top-0'
            name='image'
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const file = event.target.files && event.target.files[0]
              if (file) {
                setImg(file)
              }
            }}
          />
          {img ? (
            <Image
              src={typeof img === 'string' ? img : URL.createObjectURL(img)}
              className='w-full h-auto rounded-xl'
              alt='image'
              width={50}
              height={50}
            />
          ) : (
            <p>Choose image...</p>
          )}
        </div>
        <label htmlFor='' className='flex flex-col items-start'>
          <input
            disabled={pending}
            type='text'
            name='title'
            className='w-full h-12 outline-none px-2 border border-zinc-200 rounded-lg'
            defaultValue={values?.title}
            placeholder='Title ...'
          />
        </label>
        <label htmlFor='' className='flex flex-col items-start'>
          <input
            disabled={pending}
            type='text'
            name='description'
            className='w-full h-12 outline-none px-2 border border-zinc-200 rounded-lg'
            defaultValue={values?.description}
            placeholder='Description ...'
          />
        </label>
        <label htmlFor='' className='flex flex-col items-start'>
          <input
            disabled={pending}
            type='text'
            name='lable'
            className='w-full h-12 outline-none px-2 border border-zinc-200 rounded-lg'
            defaultValue={values?.lable}
            placeholder='Label ...'
          />
        </label>
        <button
          type='submit'
          disabled={pending}
          className='bg-blue-400 text-white w-full py-2 rounded-lg mt-3'
        >
          {pending ? 'Waiting...' : 'Submit'}
        </button>
      </form>
    </Modal>
  )
}
