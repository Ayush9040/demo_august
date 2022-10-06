import axios from 'axios'
import { ecomBaseDomin } from '../../../../Constants/appSettings'

export const fetchAllProductsAPI = ({ page, limit }) => {
  return axios.get(`${ecomBaseDomin}/product/?page=${page}&limit=${limit}`)
}

export const fetchSingleProduct =( productID )=>{
  return axios.get(`${ecomBaseDomin}/product/${productID}`)
}