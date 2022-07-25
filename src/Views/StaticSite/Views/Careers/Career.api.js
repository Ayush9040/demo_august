import axios from 'axios'

export const fetchCareerDataAPI = ()=>{
  return axios.get('https://cms-dev-be.theyogainstituteonline.org/v1/JobVolunteerProfile?type=JOB')
}