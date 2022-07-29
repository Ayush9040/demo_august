import axios from 'axios'
import { cmsBaseDomain } from '../../../../Constants/appSettings'

export const fetchProgramDataAPI = ()=>{
  return axios.get(`${ cmsBaseDomain }/JobVolunteerProfile?type=VOLUNTEER`)
} 

export const postProgramDataAPI =({ payload })=>{
  console.log(payload,'payload')
  return axios.post(`${ cmsBaseDomain }/jobvolunteerapplicant`,payload)
}