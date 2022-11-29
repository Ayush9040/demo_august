import axios from 'axios'
import { authBaseDomain, cmsBaseDomain } from '../../../../Constants/appSettings'

export const enrollPlan = (payload)=>{
  return axios.post(`${ cmsBaseDomain }/nutridietcourse`,payload)
}

export const createNutriOrder = ( id,payload )=>{
  return axios.post(`${ cmsBaseDomain }/payment/order?enrollmentFormId=${id}`,payload)
}

export const successMail = (mail)=>{
  return axios.post(`${ authBaseDomain }/ali/mail`, mail)
}