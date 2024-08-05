
import axios from 'axios'
import { authBaseDomain } from '../Constants/appSettings'
// import baseDomain from '../../assets/images/imageAsset'
const authServer = `${authBaseDomain}/ali/token/`
//import { secureStsCredApi,secureStsVerifyApi } from './Course.Routes'



export const getSecureStsCred = (params) => {
  return axios.get(`${authServer}`, {
    params,
  })
}

export const regenerateSecureStsToken = () => {
  return axios.get(`${authServer}`)
}

export const uploadFileS3 = (payload) => {
  return axios.post(`${authBaseDomain}/ali/upload`, payload)
}
