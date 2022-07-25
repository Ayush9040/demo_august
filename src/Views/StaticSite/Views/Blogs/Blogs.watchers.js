import { takeEvery } from 'redux-saga/effects'
import { all } from 'redux-saga/effects'
import { fork } from 'redux-saga/effects'
import { blogActions } from './Blogs.action'
import { handleFetchBlogsDataEffect,handleFetchBlogDataEffect } from './Blogs.effects'

function* watchFetchBlogsData() {
  yield takeEvery(blogActions.FETCH_BLOGS_DATA,handleFetchBlogsDataEffect)
}
function* watchFetchBlogData() {
  yield takeEvery(blogActions.FETCH_BLOG_DATA,handleFetchBlogDataEffect)
}
export const blogsSaga = function* rootSaga() {
  yield all([fork(watchFetchBlogsData),fork(watchFetchBlogData)])
}