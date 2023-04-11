import axios from 'axios'
import { donationBaseDomain } from '../../../../Constants/appSettings'

export const AnonymousDonation = (payload) => {
  return axios.post(`${donationBaseDomain}/donationform/`, payload)
}

export const donationPaymentOrder = (id, payload) => {
  return axios.post(`${donationBaseDomain}/donationform/payment?donationFormId=${id}`,payload)
}

