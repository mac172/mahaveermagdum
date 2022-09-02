
export const load = async ({ fetch }) => {
  const response = await fetch(`/api/clang`)
  const posts = await response.json()

  return {
    posts
  }
}


