import { call, put } from 'redux-saga/effects'
import { fetchBlogsDataError, fetchBlogsDataSuccess, fetchBlogDataSuccess,fetchBlogDataError } from './Blogs.action'
import { fetchBlogsDataAPI, fetchBlogDataAPI } from './Blogs.api'


export function* handleFetchBlogsDataEffect(){
  try{
    const { data } = yield call(fetchBlogsDataAPI)
    yield put (fetchBlogsDataSuccess(data.data))
  }
  catch {
    yield put (fetchBlogsDataError)
  }
}

export function* handleFetchBlogDataEffect( { payload } ){
  try{
    const { data } = yield call(fetchBlogDataAPI, payload)
    yield put (fetchBlogDataSuccess(data.data))
  }
  catch {
    yield put (fetchBlogDataError)
  }
}