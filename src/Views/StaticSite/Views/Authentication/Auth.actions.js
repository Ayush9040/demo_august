export const authActions = {
  LOGIN_USER: 'auth/LOGIN_USER',
  LOGOUT_USER: 'auth/LOGOUT_USER',
  LOGIN_USER_SUCCESS: 'auth/LOGIN_USER_SUCCESS',
  LOGIN_USER_ERROR: 'auth/LOGIN_USER_ERROR',
  FETCH_USER_DATA: 'auth/FETCH_USER_DATA',
  FETCH_USER_DATA_SUCCESS: 'auth/FETCH_USER_DATA_SUCCESS',
}

export const loginUserAction = (payload, navigator) => {
  return {
    type: authActions.LOGIN_USER,
    payload,
    navigator,
  }
}

export const loginUserSuccess = (payload) => ({
  type: authActions.LOGIN_USER_SUCCESS,
  payload
})

export const logoutUserAction = () => ({
  type: authActions.LOGOUT_USER,
})

export const fetchUserData = () => ({
  type: authActions.FETCH_USER_DATA,
})

export const loginUserError = (payload)=>{
  return {
    type:authActions.LOGIN_USER_ERROR,
    payload
  }
}



