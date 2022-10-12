import axios from 'axios'
import { ecomBaseDomin } from '../../../../Constants/appSettings'

export const fetchAllProductsAPI = ( page, limit ) => {
  console.log(page,limit,'und')
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

export const createCart = (payload)=>{
  return axios.post(`${ ecomBaseDomin }/cart/`,payload)
}