import axios from 'axios'

const setDefaultHeaders = (key, token) => {
  if (token) {
    axios.defaults.headers.common[key] = token
  } else {
    delete axios.defaults.headers.common[key]
  }
}

export default setDefaultHeaders
