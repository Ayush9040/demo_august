import { takeEvery, all, fork } from 'redux-saga/effects'
import { handleFetchDonationDataEffect } from './Donation.effects'
import { donationActions } from './Donation.action'

function* watchFetchProgramsData(){
  yield takeEvery(donationActions.FETCH_DONATIONS_DATA, handleFetchDonationDataEffect)
}

export const donationSagas = function* rootSaga(){
  yield all([fork(watchFetchProgramsData)])
}
