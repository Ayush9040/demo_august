import axios from 'axios'
import { authBaseDomain } from '../../../../Constants/appSettings'

export const loginUserAPI = (data) => {
  return axios.post(`${ authBaseDomain }/authdoor/login`, data)
}

export const fetchUserDataAPI = () => {
  let token = localStorage.getItem('authToken');
  return axios.get(`${ authBaseDomain }/user/me`, {
    headers: {
         'Authorization': `Bearer ${token}`
    }
  })

}
