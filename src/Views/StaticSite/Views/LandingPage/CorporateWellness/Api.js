import axios from 'axios'

export const CreateForm = (payload) => {
  return axios.post('https://cms-prod-be.theyogainstitute.org/v1/corporateEnquiry', payload)
}

export const successMail = (mail)=>{
  return axios.post('https://www.authserver-prod-be.theyogainstitute.org/v2/ali/mail' , mail)
}