import axios from 'axios'

export const loginUserAPI = (data) => {
  return axios.post('http://www.authserver-staging-be.theyogainstituteonline.org/v1/user/login?clientId=dev-tyi-lms-ecom', data)
}

export const fetchUserDataAPI = () => {
  return axios.get('https://www.authserver-staging-be.theyogainstituteonline.org/v1/user/me')
}
