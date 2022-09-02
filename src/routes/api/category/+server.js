
import { fetchCategory } from '$lib/utils'
import { json } from '@sveltejs/kit'

export const GET = async ({url}) => {
  const param = new URLSearchParams(url.search)
  const option = param.get('cat')
  console.log(option)
  const allPosts = await fetchCategory(option)
  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date)
  })

  return json(sortedPosts)
}
