import { call, put } from 'redux-saga/effects'
import { loginUserSuccess,fetchUserData, loginUserError } from './Auth.actions'

import setDefaultHeaders from '../../../../Utils/setDefaultHeaders'
import { clearLocal, setLocal } from '../../../../Utils/localStorage'

import { loginUserAPI, fetchUserDataAPI } from './Auth.apis'
import { handleCTOnUserLoginCalled } from '../../../../CleverTap/buttonClicked'

export function* handleLoginUserEffect({ payload, navigator, path }) {
  try {
    const { data } = yield call(loginUserAPI, payload)
    if(!data.accessToken || !data.refreshToken) {
      return 
    }
    setLocal('authorizationToken', data.accessToken)
    setLocal('refreshToken', data.refreshToken)
    setDefaultHeaders('authorization', `Bearer ${data.accessToken}`)

    yield put(loginUserSuccess())
    yield put(fetchUserData())
    if (navigator) { path ? navigator(`${path}`) : navigator('/')}
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
    
    const firstName = data.data.firstName;
    const email = data.data.email;
    const phone = data.data.phoneNumber;
    const city = data.data.city;
    const country = data.data.country;
    const gender = data.data.gender;
    const dailCode = data.data.dialCode;
    

    handleCTOnUserLoginCalled({
      firstName,
      email,
      phone,
      city,
      country,
      gender,
      dailCode
    })
    localStorage.setItem('userAppId',data.data?._id)//to pass 
    yield put(loginUserSuccess(data))
  } catch (error) {
    yield put(loginUserError(error))
    // localStorage.removeItem('authorizationToken')
    // localStorage.removeItem('refreshToken')
    // yield put(setAlert({ message: error.response.data.message, type: 'ERROR' }))
  }
}
