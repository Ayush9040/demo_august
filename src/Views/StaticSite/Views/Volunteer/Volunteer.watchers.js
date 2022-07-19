import { takeEvery, all, fork } from 'redux-saga/effects'
import {
  handleFetchProgramDataEffect,
  handlePostApplicantDataEffect
} from './Volunteer.effects'
import { volunteerActions } from './Volunteer.action'

function* watchFetchProgramsData(){
  yield takeEvery(volunteerActions.FETCH_PROGRAMS_DATA, handleFetchProgramDataEffect)
}
function* watchPostApplicationData(){
  yield takeEvery(volunteerActions.POST_APPLICANT_DATA, handlePostApplicantDataEffect)
}
export const volunteerSagas = function* rootSaga(){
  yield all([fork(watchFetchProgramsData),fork(watchPostApplicationData)])
}