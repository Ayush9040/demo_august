import { all } from 'redux-saga/effects'
import { authSagas } from '../Views/StaticSite/Views/Authentication/Auth.watchers'

export default function* rootSaga() {
  yield all([authSagas()])
}
