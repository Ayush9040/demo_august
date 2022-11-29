import { all, fork, takeLatest } from 'redux-saga/effects'

import {
  handleFetchLocationDataEffect
} from './Location.effects'
import { locationActions } from './Location.actions'


function* watchFetchLocationData() {
  yield takeLatest(locationActions.GET_LOCATION, handleFetchLocationDataEffect)
}

export const locationSagas = function* rootSaga() {
  yield all([fork(watchFetchLocationData)])
}
