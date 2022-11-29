import { call, put } from 'redux-saga/effects'
import { fetchLocationDataError, fetchLocationDataSuccess } from './Location.actions'
import { getLocationAPI } from './Location.apis'

export function* handleFetchLocationDataEffect() {
  try {
    const { data } = yield call(getLocationAPI)
    yield put(fetchLocationDataSuccess(data.country))
  } catch (error) {
    yield put(fetchLocationDataError(error))
  }
}
