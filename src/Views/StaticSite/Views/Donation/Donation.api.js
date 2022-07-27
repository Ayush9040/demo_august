import axios from 'axios'

export const fetchDonationsDataAPI = () => {
  return axios.get('https://cms-dev-be.theyogainstituteonline.org/v1/donation')
}