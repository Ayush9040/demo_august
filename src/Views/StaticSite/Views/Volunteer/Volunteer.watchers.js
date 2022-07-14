import { takeEvery, all, fork } from 'redux-saga/effects'
import {
  handleFetchProgramDataEffect
} from './Volunteer.effects'
import { volunteerActions } from './Volunteer.action'

function* watchFetchProgramsData(){
  yield takeEvery(volunteerActions.FETCH_PROGRAMS_DATA, handleFetchProgramDataEffect)
}
export const volunteerSagas = function* rootSaga(){
  yield all([fork(watchFetchProgramsData)])
}