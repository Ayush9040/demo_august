import { call, put } from 'redux-saga/effects'
import { loginUserSuccess,fetchUserData, loginUserError } from './Auth.actions'

import setDefaultHeaders from '../../../../Utils/setDefaultHeaders'
import { clearLocal, setLocal } from '../../../../Utils/localStorage'

import { loginUserAPI, fetchUserDataAPI } from './Auth.apis'

export function* handleLoginUserEffect({ payload, navigator, course }) {
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
    if (navigator) { course.course ? navigator(`/enrollment/${course.course}/?date=${course.date}`) : navigator('/')}
  } catch (error) {
    console.log(error.data)
    yield put(loginUserError(error.data.error))
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
    yield put(loginUserError(error))
    // yield put(setAlert({ message: error.response.data.message, type: 'ERROR' }))
  }
}
