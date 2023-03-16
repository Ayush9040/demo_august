import axios from 'axios'
import { cmsBaseDomain , authBaseDomain }  from '../../../../Constants/appSettings'


export const kidsCampData =  ( payload ) => {
  return axios.post(`${cmsBaseDomain}/kidClass`,payload)
}

export const createKidsCamp = (id, payload) =>{
  return axios.post(`${cmsBaseDomain}/payment/order?enrollmentFormId=${id}`,payload)
}

export const successMail = (mail)=>{
  return axios.post(`${ authBaseDomain }/ali/mail`, mail)
}