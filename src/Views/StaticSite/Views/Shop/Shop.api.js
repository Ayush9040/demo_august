import axios from 'axios'
import { ecomBaseDomain,authBaseDomain } from '../../../../Constants/appSettings'

//let ecomBaseDomain = 'http://192.168.0.70:6060/v1'

export const fetchAllProductsAPI = ( page, limit ) => {
  return axios.get(`${ecomBaseDomain}/product/?page=${page}&limit=${limit}`)
}

export const fetchSingleProduct =( productID )=>{
  return axios.get(`${ecomBaseDomain}/product/${productID}`)
}

export const getProductByCategory = ( categoryId , page, limit)=>{
  return axios.get(`${ecomBaseDomain}/product/productsbycategory/${ categoryId }?page=${page}&limit=${limit}`)
}

export const getAllCategories = ()=>{
  return axios.get(`${ ecomBaseDomain }/category`)
}

export const getActiveCart = ()=>{
  const token = localStorage.getItem("authorizationToken");

  if (token && !axios.defaults.headers?.Authorization) {
    console.log('Current Request Headers: 2', axios.defaults.headers);
    axios.defaults.headers['Authorization'] = `Bearer ${token}`;
    delete axios.defaults.headers.common['authorization'];
  }

  
  return axios.get(`${ ecomBaseDomain }/cart/activeCart`,
    {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }
)
}

export const createCart = (payload)=>{
   const token = localStorage.getItem("authorizationToken");

  if (token && !axios.defaults.headers?.Authorization) {
    console.log('Current Request Headers: 2', axios.defaults.headers);
    axios.defaults.headers['Authorization'] = `Bearer ${token}`;
    delete axios.defaults.headers.common['authorization'];
  }
  return axios.post(`${ ecomBaseDomain }/cart/`,payload, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
}

export const updateCart = ( cartId,payload )=>{
  return axios.put(`${ ecomBaseDomain }/cart/${ cartId }`, payload)
}

export const getAddress = (userID)=>{
  return axios.get(`${ authBaseDomain }/address/user/${ userID }`)
}

export const addAddress = (address)=>{
  return axios.post(`${ authBaseDomain }/address`, address)
}
export const getCartById = ( cartId )=>{
  return axios.get(`${ ecomBaseDomain }/cart/${ cartId }`)
}

export const createOrder = (description)=>{
  return axios.post(`${ ecomBaseDomain }/payment/cart/`, description)
}

export const orderCallback = (payload)=>{
  return axios.post(`${ ecomBaseDomain }/payment/callback`,payload)
}

export const getCoupon = ( coupon )=>{
  return axios.get(`${ ecomBaseDomain }/coupon/search/?couponCode=${ coupon }&couponType=CART`)
}

export const searchProduct = ( searchValue )=>{
  return axios.get(`${ ecomBaseDomain }/product/searchproduct/${ searchValue }`)
}

export const getOrderByOrderId = ( orderId ) => {
  return axios.get(`${ ecomBaseDomain }/order/${ orderId }`)
}

export const getBanner = () =>{
  return axios.get(`${ecomBaseDomain}/bannerimage`)
}