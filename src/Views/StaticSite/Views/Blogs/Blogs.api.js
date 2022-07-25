import axios from 'axios'

export const fetchBlogsDataAPI = ()=>{
  return axios.get('https://cms-dev-be.theyogainstituteonline.org/v1/post')
}

export const fetchBlogDataAPI = (payload)=>{
  return axios.get(`https://cms-dev-be.theyogainstituteonline.org/v1/post/${ payload }`)
}