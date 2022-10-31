import axios from 'axios'

import { refreshSessionAndGetData } from './refreshToken'

console.log('Initilise Interseptor')
axios.interceptors.request.use(
  (config) => {
    config.headers['x-clientId'] = 'cmsDev_qt9up36idOpBAcrrd'
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  (config) => {
    return config
  },
  (error) => {
    const errorResponse = {
      error: true,
      result: 'ERROR',
      status: null,
      data: null,
      headers: null,
      message: error.message,
      isCancel: false
    }
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx and 3xx
      
      errorResponse.error = true
      errorResponse.status = error.response.status
      errorResponse.data = error.response.data
      errorResponse.headers = error.response.headers

      if(errorResponse.status === 403 && errorResponse?.data?.error === '1001 TokenExpired'){
        const res = refreshSessionAndGetData(error.response)

        if(!res.isFailed) {
          delete res.isFailed
          return res
        }
        errorResponse.status = res.statusCode
        errorResponse.data  = res.data

      }
      
    } else if (axios.isCancel(error)) {
      // This one is intentionally canceled request
      errorResponse.error = false
      errorResponse.result = 'CANCELED'
      errorResponse.isCancel = true
    } 
    console.error(errorResponse)
    return Promise.reject(errorResponse)
  })
