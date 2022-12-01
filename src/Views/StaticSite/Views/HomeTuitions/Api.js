import axios from 'axios'
import { cmsBaseDomain } from '../../../../Constants/appSettings'

export const createHomeTution = (payload)=>{
  return axios.post(`${cmsBaseDomain}/hometutions`,payload)
}