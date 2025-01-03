export async function API (url: string, options: RequestInit = {}) {
  try {
    const headers = {}

    const response = await fetch(`https://news-indol-omega.vercel.app/api/routes${url}`, {
      ...options,
      headers: headers
    })

    if (response.status === 401) {}

    const result = await response.json()

    return result;
    
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    }
  }
}
