import { takeEvery, all, fork, takeLatest } from 'redux-saga/effects'

import {
  handleLoginUserEffect,
  handleLogoutUserEffect,
  handleFetchUserDataEffect,
} from './Auth.effects'

import { authActions } from './Auth.actions'

function* watchLoginUser() {
  yield takeEvery(authActions.LOGIN_USER, handleLoginUserEffect)
}

function* watchLogoutUser() {
  yield takeEvery(authActions.LOGOUT_USER, handleLogoutUserEffect)
}

function* watchFetchUserData() {
  yield takeLatest(authActions.FETCH_USER_DATA, handleFetchUserDataEffect)
}

export const authSagas = function* rootSaga() {
  yield all([fork(watchLoginUser), fork(watchLogoutUser), fork(watchFetchUserData)])
}
