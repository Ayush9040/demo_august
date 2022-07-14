
import axios from 'axios'
// import baseDomain from '../../assets/images/imageAsset'
const authServer = 'https://www.authserver-staging-be.theyogainstituteonline.org/v1/ali/token/'
//import { secureStsCredApi,secureStsVerifyApi } from './Course.Routes'



export const getSecureStsCred = (params) => {
  return axios.get(`${authServer}`, {
    params,
  })
}

export const regenerateSecureStsToken = () => {
  return axios.get(`${authServer}`)
}
