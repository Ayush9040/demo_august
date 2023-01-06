import axios from 'axios'
import { cmsBaseDomain } from '../../../../Constants/appSettings'

export const getBlogsByTag = (tagId)=>{
  return axios.get(`${ cmsBaseDomain}/post/tag/${ tagId }`)
}
