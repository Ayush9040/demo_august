import axios from 'axios'
import { cmsBaseDomain } from '../../../../Constants/appSettings'
export const fetchCareerDataAPI = ()=>{
  return axios.get(`${cmsBaseDomain}/JobVolunteerProfile?type=JOB`)
}
export const postCareerDataAPI = ( { payload } ) => {
  return axios.post(`${cmsBaseDomain}/jobvolunteerapplicant`,payload)
}