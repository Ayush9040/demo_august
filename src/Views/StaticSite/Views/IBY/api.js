import axios from 'axios'
import { authBaseDomain, cmsBaseDomain } from '../../../../Constants/appSettings'

export const IYBenroll = ( payload ) =>{
  return axios.post(`${cmsBaseDomain}/ib`, payload)
}

export const createIYBorder = (id, payload) =>{
  return axios.post(`${cmsBaseDomain}/payment/order?enrollmentFormId=${id}`,payload)
}

export const successMail = (mail)=>{
  return axios.post(`${ authBaseDomain }/ali/mail`, mail)
}