

export const getEcomRoute = (location) =>{
  let exactPath = null

  if (location.pathname.endsWith('/')) exactPath = location.pathname.slice(0, -1)
  else exactPath = location.pathname
  
  exactPath = exactPath.replace('/ecom', '')

  if (exactPath === '')  exactPath='/'
  
  return exactPath
}