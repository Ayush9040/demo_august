import { call, put } from 'redux-saga/effects'
import { fetchProgramsDataError, fetchProgramsDataSuccess } from './Volunteer.action'
import { fetchProgramDataAPI } from './Volunteer.api'



export function* handleFetchProgramDataEffect(){
  try{
    const { data } = yield call(fetchProgramDataAPI)
    yield put(fetchProgramsDataSuccess(data))
  }catch(err){
    console.log(err)
    yield put(fetchProgramsDataError)
  }
}