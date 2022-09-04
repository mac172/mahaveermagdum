import { error } from '@sveltejs/kit'

export const load = ({ url }) => {
  try {
    const currentRoute = url.pathname

    return {
      currentRoute
    }

  }
  catch(err) {
    throw error(500,err)
  } 
}
