import { takeEvery } from 'redux-saga/effects'
import { all } from 'redux-saga/effects'
import { fork } from 'redux-saga/effects'
import { careerAction } from './Career.action'
import { handleFetchJobDataEffect, handlePostApplicantionDataEffect } from './Career.effects'
function* watchFetchJobData() {
  yield takeEvery(careerAction.FETCH_JOB_DATA, handleFetchJobDataEffect)
}
function* watchPostApplicationData(){
  yield takeEvery(careerAction.POST_APPLICATION_DATA, handlePostApplicantionDataEffect)
}
export const careerSaga = function* rootSaga() {
  yield all([fork(watchFetchJobData), fork(watchPostApplicationData)])
}