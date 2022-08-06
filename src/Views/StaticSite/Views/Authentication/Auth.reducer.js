import { authActions } from './Auth.actions'

import { noError, initialState } from './Auth.defaultStates'

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
  // Login User
  case authActions.LOGIN_USER:
    return {
      ...state,
      isLoading: true,
      user: {},
      token: '',
      isLoggedIn: false,
      error: noError,
    }
  case authActions.LOGIN_USER_SUCCESS:
    return {
      ...state,
      isLoading: false,
      user: action.payload,
      token: '',
      isLoggedIn: true,
      error: noError,
    }
  case authActions.LOGIN_USER_ERROR:
    return {
      ...state,
      error: { ...noError, isError: action.payload },
    }
  case authActions.LOGOUT_USER:
    return {
      ...state,
      isLoading: false,
      user: {},
      token: '',
      isLoggedIn: false,
      error: noError,
    }

  case authActions.SIGN_UP_ERROR:
    return {
      ...state,
      error: { ...noError, isError: true },
    }
  default:
    return { ...state }
  }
}
