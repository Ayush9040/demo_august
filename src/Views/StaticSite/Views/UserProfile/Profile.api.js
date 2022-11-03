import axios from 'axios'
import { ecomBaseDomin } from '../../../../Constants/appSettings'

export const fetchUserOrders = ( userID ) => {
  return axios.get(`${ ecomBaseDomin }/order/user/${ userID }`)
}

export const fetchCartDetails = ( cartID ) => {
  return axios.get(`${ ecomBaseDomin }/cart/${ cartID }`)
}

export const fetchSingleProductById = ( productID ) => {
  return axios.get(`${ ecomBaseDomin }/product/${ productID }`)
}