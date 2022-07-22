import { call, put } from 'redux-saga/effects'
import { fetchCareerDataAPI } from './Career.api'
import { fetchJobDataError } from './Career.action'
import { fetchJobDataSuccess } from './Career.action'

export function* handleFetchJobDataEffect(){
  try{
    console.log('effect')
    const { data } = yield call(fetchCareerDataAPI)
    yield put (fetchJobDataSuccess(data.data))
  }
  catch {
    yield put (fetchJobDataError)
  }
}