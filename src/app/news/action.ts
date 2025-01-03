'use server'

import { API } from '@/services/api'
import { revalidateTag } from 'next/cache'

export async function createNews (formData: FormData) {
  try {
    const result = await API('/news', {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    revalidateTag('posts')
    if (result.error) {
      throw new Error(result.error)
    }

    return { success: true, data: result }
  } catch (error) {}
}

export async function getNews () {
  try {
    
    const result = await API('/news', {
      next: {
        tags: ['posts']
      },
      cache: 'no-cache'
    })
    if (result.error) {
      throw new Error(result.error)
    }
    console.log(result)

    return { success: true, data: result }
  } catch (error) {}
}

export async function deleteNews (id: string | number) {
  try {
    const result = await API('/news', {
      method: 'DELETE',
      body: JSON.stringify({ id })
    })
    revalidateTag('posts')

    if (result.error) {
      throw new Error(result.error)
    }

    return { success: true, data: result }
  } catch (error) {}
}

export async function updateNews (formData: FormData) {
  try {
    const result = await API('/news', {
      method: 'PUT',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    revalidateTag('posts')
    if (result.error) {
      throw new Error(result.error)
    }

    return { success: true, data: result }
  } catch (error) {}
}
