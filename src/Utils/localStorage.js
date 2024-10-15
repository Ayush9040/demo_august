import setDefaultHeaders from './setDefaultHeaders'

export const setLocal = (key, value) => {
  window.localStorage.setItem(key, value)
}
export const getLocal = (key) => window.localStorage.getItem(key)

export const clearLocal = () => {
  window.localStorage.clear()
}

export const isAuthorized = () => {
  const authorizationToken =  getLocal('authorizationToken')
  if (authorizationToken){
    setDefaultHeaders('authorization', `Bearer ${authorizationToken}`)
    return true
  }
  return false 
}
