import axios from 'axios'
import { authBaseDomain } from '../../../../Constants/appSettings'

export const loginUserAPI = (data) => {
  return axios.post(`${ authBaseDomain }/user/login?clientId=dev-tyi-lms-ecom`, data)
}

export const fetchUserDataAPI = () => {
  return axios.get(`${ authBaseDomain }/user/me`)
}
