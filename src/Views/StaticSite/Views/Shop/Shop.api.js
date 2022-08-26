import axios from 'axios'
import { ecomBaseDomin } from '../../../../Constants/appSettings'

export const fetchAllProductsAPI = () => {
  return axios.get(`${ecomBaseDomin}/product`)
}