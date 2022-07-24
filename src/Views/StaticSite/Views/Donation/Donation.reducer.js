import { donationActions } from './Donation.action'
import { initialState, noError } from './Donation.defaultStates'

export const donationReducer = (state = initialState, action) => {
  switch (action.type) {
  case donationActions.FETCH_DONATIONS_DATA:
    return {
      ...state,
      isLoading: true,
      donationPrograms: [],
      error: noError,
    }
  case donationActions.FETCH_DONATIONS_DATA_SUCCESS:
    return {
      ...state,
      isLoading: false,
      donationPrograms: action.payload,
      error: noError,
    }
  case donationActions.FETCH_DONATIONS_DATA_ERROR:
    return {
      ...state,
      isLoading: false,
      donationPrograms: [],
      error: true,
    }
  default:
    return { ...state }
  }
}
