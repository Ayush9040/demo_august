import axios from 'axios'
import { ecomBaseDomin,authBaseDomain } from '../../../../Constants/appSettings'

//let ecomBaseDomin = 'http://192.168.0.70:6060/v1'

export const fetchAllProductsAPI = ( page, limit ) => {
  return axios.get(`${ecomBaseDomin}/product/?page=${page}&limit=${limit}`)
}

export const fetchSingleProduct =( productID )=>{
  return axios.get(`${ecomBaseDomin}/product/${productID}`)
}

export const getProductByCategory = ( categoryId )=>{
  return axios.get(`${ecomBaseDomin}/product/productsbycategory/${ categoryId }`)
}

export const getAllCategories = ()=>{
  return axios.get(`${ ecomBaseDomin }/category`)
}

export const getActiveCart = ()=>{
  return axios.get(`${ ecomBaseDomin }/cart/activeCart`)
}

export const createCart = (payload)=>{
  return axios.post(`${ ecomBaseDomin }/cart/`,payload)
}

export const updateCart = ( cartId,payload )=>{
  return axios.put(`${ ecomBaseDomin }/cart/${ cartId }`, payload)
}

export const getAddress = (userID)=>{
  return axios.get(`${ authBaseDomain }/address/user/${ userID }`)
}

export const addAddress = (address)=>{
  return axios.post(`${ authBaseDomain }/address`, address)
}
export const getCartById = ( cartId )=>{
  return axios.get(`${ ecomBaseDomin }/cart/${ cartId }`)
}

export const createOrder = (cartId, description)=>{
  return axios.post(`${ ecomBaseDomin }/payment/order/${ cartId }`, description)
}

export const orderCallback = (payload)=>{
  return axios.post(`${ ecomBaseDomin }/payment/callback`,payload)
}

export const getCoupon = ( coupon )=>{
  return axios.get(`${ ecomBaseDomin }/coupon/search/${ coupon }`)
}

export const searchProduct = ( searchValue )=>{
  return axios.get(`${ ecomBaseDomin }/product/searchproduct/${ searchValue }`)
}

export const getOrderByOrderId = ( orderId ) => {
  return axios.get(`${ ecomBaseDomin }/order/${ orderId }`)
}