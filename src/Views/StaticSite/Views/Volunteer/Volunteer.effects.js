import { call, put } from 'redux-saga/effects'
import { fetchProgramsDataError, fetchProgramsDataSuccess } from './Volunteer.action'
import { fetchProgramDataAPI } from './Volunteer.api'



export function* handleFetchProgramDataEffect(){
  console.log('effect')
  try{
    const { data } = yield call(fetchProgramDataAPI)
    yield put(fetchProgramsDataSuccess(data.data))
  }catch(err){
    console.log(err)
    yield put(fetchProgramsDataError)
  }
}