import { locationActions } from './Location.actions'

import { noError, initialState } from './Location.defaultStates'

export const locationReducer = (state = initialState, action) => {
  switch (action.type) {
  //getLocation
  case locationActions.GET_LOCATION:
    return {
      ...state,
      isLoading: false,
      error:noError,
      location:'IN'
    }
  case locationActions.GET_LOCATION_SUCCESS:
    return {
      ...state,
      isLoading: false,
      error:noError,
      location:action.payload
    }
  case locationActions.GET_LOCATION_False:
    return {
      ...state,
      isLoading: false,
      error:action.payload,
      location:'IN'
    }

  default:
    return { ...state }
  }
}
