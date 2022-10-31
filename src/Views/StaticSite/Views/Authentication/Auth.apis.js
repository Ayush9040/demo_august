import axios from 'axios'
import { authBaseDomain } from '../../../../Constants/appSettings'

export const loginUserAPI = (data) => {
  return axios.post(`${ authBaseDomain }/authdoor/login`, data)
}

export const fetchUserDataAPI = () => {
  return axios.get(`${ authBaseDomain }/user/me`)
}
