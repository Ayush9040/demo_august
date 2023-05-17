import axios from 'axios'
import { cmsBaseDomain } from '../../../../../Constants/appSettings'

export const getByYearYogsattva = (year) => {
  return axios.get(`${cmsBaseDomain}/yogaSatva/getByYear/?year=${year}`)
}

export const getTotalHealthData = () => {
  return axios.get(`${cmsBaseDomain}/yogatotalhealth`)
}