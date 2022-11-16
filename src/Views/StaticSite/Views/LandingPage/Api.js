import axios from 'axios'
import { cmsBaseDomain,authBaseDomain } from '../../../../Constants/appSettings'

export const creatForm = (payload)=>{
  return axios.post(`${ cmsBaseDomain }/socialMedia`,payload)
}

export const successMail = (mail)=>{
  return axios.post(`${ authBaseDomain }/ali/mail`, mail)
}