import axios from 'axios'
import { authBaseDomain, cmsBaseDomain } from '../../../../../Constants/appSettings'

export const CreateForm = (payload) => {
  return axios.post(`${cmsBaseDomain}/corporateEnquiry`, payload)
}

export const successMail = (mail) => {
  return axios.post(`${authBaseDomain}/ali/mail`, mail)
}