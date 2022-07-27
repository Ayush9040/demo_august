import { fetchDonationsDataSuccess, fetchDonationsDataError } from './Donation.action'
import { fetchDonationsDataAPI } from './Donation.api'
import { call, put } from 'redux-saga/effects'

export function* handleFetchDonationDataEffect(){
  try{
    const { data } = yield call(fetchDonationsDataAPI)
    yield put(fetchDonationsDataSuccess(data.data))
  }catch{
    yield put(fetchDonationsDataError)
  }
}