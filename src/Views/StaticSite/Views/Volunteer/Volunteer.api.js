import axios from 'axios'

export const fetchProgramDataAPI = ()=>{
  axios.get('https://cms-dev-be.theyogainstituteonline.org/v1/JobVolunteerProfile?type=VOLUNTEER')
}