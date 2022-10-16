export const donationActions = {
  FETCH_DONATIONS_DATA : 'donation/FETCH_DONATIONS_DATA',
  FETCH_DONATIONS_DATA_SUCCESS: 'donation/FETCH_DONATIONS_DATA_SUCCESS',
  FETCH_DONATIONS_DATA_ERROR: 'doantion/FETCH_DONATIONS_DATA_ERROR'
}

export const fetchDonationsData = () => {
  return { type: donationActions.FETCH_DONATIONS_DATA }
}

export const fetchDonationsDataSuccess = (payload) => {
  return { type: donationActions.FETCH_DONATIONS_DATA_SUCCESS, payload }
}

export const fetchDonationsDataError = () => {
  return { type: donationActions.FETCH_DONATIONS_DATA_ERROR }
}
