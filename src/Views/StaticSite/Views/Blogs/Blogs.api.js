import axios from 'axios'
import { cmsBaseDomain } from '../../../../Constants/appSettings'

export const fetchBlogsDataAPI = ( { page,limit } )=>{
  return axios.get(`${ cmsBaseDomain }/post?page=${page}&limit=${limit}`)
}

export const fetchBlogDataAPI = (payload)=>{
  return axios.get(`${ cmsBaseDomain }/post/${ payload }`)
}