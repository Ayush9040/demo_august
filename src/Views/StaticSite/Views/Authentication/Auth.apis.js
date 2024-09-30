import axios from 'axios'
import { authBaseDomain } from '../../../../Constants/appSettings'

export const loginUserAPI = (data) => {
  return axios.post(`${ authBaseDomain }/authdoor/login`, data)
}


export const getAuthTokenFromCookie = () => {
  const name = 'authToken=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i].trim();
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};



export const fetchUserDataAPI = () => {
  let token = localStorage.getItem('authToken');
  
  // If the token is not found in local storage, get it from cookies
  // if (!token) {
  //   const tokenss = getAuthTokenFromCookie();
  //   // Only set the token in local storage if it's not empty
  //   if (tokenss) {
  //     localStorage.setItem('authToken', tokenss);
  //     token = tokenss; // Update the token variable
  //   }
  // }

  console.log("auth token", token);
  
  return axios.get(`${ authBaseDomain }/user/me`, {
    headers: {
        //  'Authorization': `Bearer ${token}`
    }
  })

}
