import axios from 'axios'
import { cmsBaseDomain, donationBaseDomain } from '../../../../Constants/appSettings'

export const AnonymousDonation = (payload) => {
  return axios.post(`${donationBaseDomain}/donationform/`, payload)
}
