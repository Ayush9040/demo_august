import axios from 'axios'
import { ecomBaseDomain } from '../../../../Constants/appSettings'

export const fetchUserOrders = ( userID ) => {
  return axios.get(`${ ecomBaseDomain }/order/user/${ userID }`)
}

export const fetchCartDetails = ( cartID ) => {
  return axios.get(`${ ecomBaseDomain }/cart/${ cartID }`)
}

export const fetchSingleProductById = ( productID ) => {
  return axios.get(`${ ecomBaseDomain }/product/${ productID }`)
}