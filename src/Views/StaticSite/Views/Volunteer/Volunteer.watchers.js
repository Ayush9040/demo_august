import { takeEvery, all, fork } from 'redux-saga/effects'
import {
  handleFetchProgramDataEffect
} from './Volunteer.effects'
import { volunteerActions } from './Volunteer.action'

function* watchFetchProgramsData(){
  console.log('watcher')
  yield yield takeEvery(volunteerActions.FETCH_PROGRAMS_DATA, handleFetchProgramDataEffect)
}
export const volunteerSagas = function* rootSaga(){
  console.log('fork')
  yield all([fork(watchFetchProgramsData)])
}