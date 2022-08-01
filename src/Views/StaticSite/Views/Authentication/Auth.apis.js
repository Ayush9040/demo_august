import axios from 'axios'
import { authBaseDomain,authServerClientId } from '../../../../Constants/appSettings'

export const loginUserAPI = (data) => {
  return axios.post(`${ authBaseDomain }/user/login?clientId=${authServerClientId}`, data)
}

export const fetchUserDataAPI = () => {
  return axios.get(`${ authBaseDomain }/user/me`)
}
