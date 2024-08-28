import axios from 'axios'
import { ecomBaseDomain,cmsBaseDomain } from '../../../../Constants/appSettings'

export const fetchUserOrders = ( userID ) => {
  return axios.get(`${ ecomBaseDomain }/order/user/${ userID }`)
}
export const fetchUserCourses = ( userID ) => {
  return axios.post(`${ cmsBaseDomain }/forms/course/purchase/list`,{})
}
export const fetchCartDetails = ( cartID ) => {
  return axios.get(`${ ecomBaseDomain }/cart/${ cartID }`)
}

export const fetchSingleProductById = ( productID ) => {
  return axios.get(`${ ecomBaseDomain }/product/${ productID }`)
}