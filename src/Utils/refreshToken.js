import axios from 'axios'

import { store }  from '../index'

import setDefaultHeaders from './setDefaultHeaders'
import { getLocal, setLocal } from './localStorage'

export const refreshSessionAndGetData = async(errorResponse) => {
  const requestUrl = errorResponse.config.url
  const requestData = errorResponse.config.data
  const requestMethod = errorResponse.config.method
  const refreshToken = getLocal('refreshToken')

  const failResponse = {
    isFailed: true,
    statusCode: null,
    data: null,
  }

  if (refreshToken) {
    let refreshTokenResponse = {}

    
    try {
      const { data } = await axios.get('https://www.authserver-staging-be.theyogainstituteonline.org/v1/user/refresh', {
        headers: {
          refreshToken: `Bearer ${refreshToken}`
        }
      })
      refreshTokenResponse = data
    } catch (error) {
      // Logout User
      store.dispatch({
        type: 'auth/LOGOUT_USER',
      })    
      return failResponse
    }

    if (!refreshTokenResponse.accessToken){
      store.dispatch({
        type: 'auth/LOGOUT_USER',
      })    
      return failResponse
    }
      
    setLocal('authToken', refreshTokenResponse.accessToken)
    setDefaultHeaders('authorization', `Bearer ${refreshTokenResponse.accessToken}`)

    try {
      const res = await axios({
        method: requestMethod,
        url: requestUrl,
        ...(requestData && { data: requestData }),
      })
      return {
        isFailed: false,
        ...res
      }
    } catch (error) {
      failResponse.statusCode = error.response.status
      failResponse.data = error.response.data
      return failResponse
    }
  }

  // Logout User
  store.dispatch({
    type: 'auth/LOGOUT_USER',
  })
  return failResponse
}

