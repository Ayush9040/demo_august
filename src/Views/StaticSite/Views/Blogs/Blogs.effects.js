import { call, put } from 'redux-saga/effects'
import { fetchBlogsDataError, fetchBlogsDataSuccess } from './Blogs.action'
import { fetchBlogsDataAPI } from './Blogs.api'


export function* handleFetchBlogsDataEffect(){
  try{
    const { data } = yield call(fetchBlogsDataAPI)
    yield put (fetchBlogsDataSuccess(data.data))
  }
  catch {
    yield put (fetchBlogsDataError)
  }
}