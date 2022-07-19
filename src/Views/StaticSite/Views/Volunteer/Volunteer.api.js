import axios from 'axios'

export const fetchProgramDataAPI = ()=>{
  return axios.get('https://cms-dev-be.theyogainstituteonline.org/v1/JobVolunteerProfile?type=VOLUNTEER')
}

export const postProgramDataAPI =({ payload })=>{
  console.log(payload,'payload')
  return axios.post('https://cms-dev-be.theyogainstituteonline.org/v1/jobvolunteerapplicant',payload)
}