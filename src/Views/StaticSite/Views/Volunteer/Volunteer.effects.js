import { call, put } from 'redux-saga/effects'
import { fetchProgramsDataError, fetchProgramsDataSuccess } from './Volunteer.action'
import { fetchProgramDataAPI } from './Volunteer.api'
import { postProgramDataAPI } from './Volunteer.api'



export function* handleFetchProgramDataEffect(){
  try{
    const { data } = yield call(fetchProgramDataAPI)
    yield put(fetchProgramsDataSuccess(data.data))
  }catch{
    yield put(fetchProgramsDataError)
  }
}

export function* handlePostApplicantDataEffect(payload){
  try{
    yield call(postProgramDataAPI,payload)
  } catch(error){
    console.log(error)
  }
}