import axios from 'axios'

export const enrollPlan = (payload)=>{
  return axios.post('https://cms-dev-be.theyogainstituteonline.org/v1/nutridietcourse',payload)
}

export const createNutriOrder = ( id,payload )=>{
  return axios.post(`https://cms-dev-be.theyogainstituteonline.org/v1/payment/order?enrollmentFormId=${id}`,payload)
}

export const successMail = (mail)=>{
  return axios.post('https://www.authserver-staging-be.theyogainstituteonline.org/v2/ali/mail', mail)
}