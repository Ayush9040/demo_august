import axios from 'axios'

export const fetchBlogsDataAPI = ( { page,limit } )=>{
  return axios.get(`https://cms-dev-be.theyogainstituteonline.org/v1/post?page=${page}&limit=${limit}`)
}

export const fetchBlogDataAPI = (payload)=>{
  return axios.get(`https://cms-dev-be.theyogainstituteonline.org/v1/post/${ payload }`)
}