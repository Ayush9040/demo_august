import axios from 'axios'
export const fetchCareerDataAPI = ()=>{
  return axios.get('https://cms-dev-be.theyogainstituteonline.org/v1/JobVolunteerProfile?type=JOB')
}
export const postCareerDataAPI = ( { payload } ) => {
  return axios.post('https://cms-dev-be.theyogainstituteonline.org/v1/jobvolunteerapplicant',payload)
}