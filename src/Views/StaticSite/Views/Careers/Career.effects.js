
import { call, put } from 'redux-saga/effects'
import { fetchCareerDataAPI } from './Career.api'
import { fetchJobDataError } from './Career.action'
import { fetchJobDataSuccess } from './Career.action'
import { postCareerDataAPI } from './Career.api'
export function* handleFetchJobDataEffect() {
  try {
    console.log('effect')
    const { data } = yield call(fetchCareerDataAPI)
    yield put(fetchJobDataSuccess(data.data))
  } catch {
    yield put(fetchJobDataError)
  }
}
export function* handlePostApplicantionDataEffect(payload) {
  try {
    yield call(postCareerDataAPI, payload)
  } catch (error) {
    console.log(error)
  }
}