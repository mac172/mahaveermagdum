export const fetchMarkdownPosts = async () => {
  const allPostFiles = import.meta.glob('/src/routes/blog/**/*.md')
  const iterablePostFiles = Object.entries(allPostFiles)
  
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const postPath = path.slice(12,-3)

      return {
        meta: metadata,
        path: postPath,
      }
    })
  )

  return allPosts
}

export const fetchCategory = async (cat) => {
  const allPostFiles = import.meta.glob(`/src/routes/blog/**/*.md`)
  const iterablePostFiles = Object.entries(allPostFiles)
  
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const postPath = path.slice(17,-3)

      return {
        meta: metadata,
        path: postPath,
      }
    })
  )

  return allPosts
}

export const fetchClang = async () => {
  const allPostFiles = import.meta.glob(`/src/routes/blog/c-lang/*.md`)
  const iterablePostFiles = Object.entries(allPostFiles)
  
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const postPath = path.slice(17,-3)

      return {
        meta: metadata,
        path: postPath,
      }
    })
  )

  return allPosts
}

export const fetchPythonlang = async () => {
  const allPostFiles = import.meta.glob(`/src/routes/blog/python-lang/*.md`)
  const iterablePostFiles = Object.entries(allPostFiles)
  
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const postPath = path.slice(17,-3)

      return {
        meta: metadata,
        path: postPath,
      }
    })
  )

  return allPosts
}
