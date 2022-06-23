import setDefaultHeaders from './setDefaultHeaders'

export const setLocal = (key, value) => {
  window.localStorage.setItem(key, value)
}
export const getLocal = (key) => window.localStorage.getItem(key)

export const clearLocal = () => {
  window.localStorage.clear()
}

export const isAuthorized = () => {
  const authToken =  getLocal('authToken')
  if (authToken){
    setDefaultHeaders('authorization', `Bearer ${authToken}`)
    return true
  }
  return false 
}
