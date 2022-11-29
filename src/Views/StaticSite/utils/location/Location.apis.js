import axios from 'axios'
import { ecomBaseDomain } from '../../../../Constants/appSettings'

export const getLocationAPI = () => {
  return axios.get(`${ ecomBaseDomain }/payment/ip`)
}

