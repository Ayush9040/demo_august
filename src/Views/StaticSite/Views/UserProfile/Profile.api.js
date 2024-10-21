import axios from 'axios'
import { ecomBaseDomain, cmsBaseDomain } from '../../../../Constants/appSettings'

export const fetchUserOrders = (userID) => {
  return axios.get(`${ecomBaseDomain}/order/user/${userID}`)
}

export const fetchUserCourses = (userID) => {
  const token = localStorage.getItem('authorizationToken');
  // console.log('Current Request Headers:', axios.defaults.headers);

  if (token && !axios.defaults.headers?.Authorization) {
    // console.log('Current Request Headers: 2', axios.defaults.headers);
    axios.defaults.headers['Authorization'] = `Bearer ${token}`;
    delete axios.defaults.headers.common['authorization'];
  }

  // console.log('Current Request Headers: 3', axios.defaults.headers);
  return axios.post(`${cmsBaseDomain}/forms/course/purchase/list`, {}, {
    headers: {
         'Authorization': `Bearer ${token}`
    }
  });
}

export const fetchCartDetails = (cartID) => {
  return axios.get(`${ecomBaseDomain}/cart/${cartID}`)
}

export const fetchSingleProductById = (productID) => {
  return axios.get(`${ecomBaseDomain}/product/${productID}`)
}