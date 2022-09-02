export const load = async ({ fetch }) => {
  const response = await fetch(`/api/pythonlang`)
  const posts = await response.json()

  return {
    posts
  }
}


