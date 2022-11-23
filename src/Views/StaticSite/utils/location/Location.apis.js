import axios from 'axios'
import { ecomBaseDomin } from '../../../../Constants/appSettings'

export const getLocationAPI = () => {
  return axios.get(`${ ecomBaseDomin }/payment/ip`)
}

