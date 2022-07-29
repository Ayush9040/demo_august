import axios from 'axios'
import { cmsBaseDomain } from '../../../../Constants/appSettings'

export const fetchDonationsDataAPI = () => {
  return axios.get(`${cmsBaseDomain}/donation`)
}