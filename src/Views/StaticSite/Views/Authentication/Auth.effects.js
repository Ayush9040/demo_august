import { call, put } from 'redux-saga/effects'
import { loginUserSuccess, logoutUserAction, fetchUserData } from './Auth.actions'

import setDefaultHeaders from '../../../../Utils/setDefaultHeaders'
import { clearLocal, setLocal } from '../../../../Utils/localStorage'

import { loginUserAPI, fetchUserDataAPI } from './Auth.apis'

export function* handleLoginUserEffect({ payload, navigator }) {
  try {
    const { data } = yield call(loginUserAPI, payload)
    if(!data.accessToken || !data.refreshToken) {
      return 
    }
    setLocal('authToken', data.accessToken)
    setLocal('refreshToken', data.refreshToken)
    setDefaultHeaders('authorization', `Bearer ${data.accessToken}`)

    yield put(loginUserSuccess())
    yield put(fetchUserData())
    if (navigator) navigator('/')
  } catch (error) {
    // yield put(loginUserError(error))
    // yield put(setAlert({ message: error.response.data.message, type: 'ERROR' }))
  }
}

export function handleLogoutUserEffect() {
  setDefaultHeaders('authorization')
  clearLocal()
}

export function* handleFetchUserDataEffect() {
  try {
    const { data } = yield call(fetchUserDataAPI)
    yield put(loginUserSuccess(data))
  } catch (error) {
    yield put(logoutUserAction())
    // yield put(setAlert({ message: error.response.data.message, type: 'ERROR' }))
  }
}
