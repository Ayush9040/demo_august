import { isAuthorized } from '../../../../Utils/localStorage'
export const noError = {
  isError: false,
}

export const initialState = {
  token: '',
  error: noError,
  isLoading: false,
  user: {},
  isLoggedIn: isAuthorized(),
}


