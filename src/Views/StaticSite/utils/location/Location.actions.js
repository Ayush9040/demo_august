export const locationActions = {
  GET_LOCATION:'locationAcions/GET_LOCATION',
  GET_LOCATION_SUCCESS:'locationAcions/GET_LOCATION_SUCCESS',
  GET_LOCATION_ERROR:'locationAcions/GET_LOCATION_ERROR'
}

export const fetchLocationData = () => ({
  type: locationActions.GET_LOCATION,
})

export const fetchLocationDataSuccess = (payload) => ({
  type: locationActions.GET_LOCATION_SUCCESS,
  payload
})

export const fetchLocationDataError = (payload) => ({
  type: locationActions.GET_LOCATION_ERROR,
  payload
})



