import axios from 'axios'
import { cmsBaseDomain } from '../../../../Constants/appSettings'
import { authBaseDomain } from '../../../../Constants/appSettings'

export const AnonymousDonation = (payload) => {
  return axios.post(`${cmsBaseDomain}/donationform/`, payload)
}

export const donationPaymentOrder = (id, payload) => {
  return axios.post(`${cmsBaseDomain}/donationform/payment?donationFormId=${id}`,payload)
}

export const successMail = (mail)=>{
  return axios.post(`${authBaseDomain}/ali/mail`, mail)
}

