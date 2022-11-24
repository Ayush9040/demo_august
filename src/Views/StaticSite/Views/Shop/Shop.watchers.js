import { takeEvery, all, fork } from 'redux-saga/effects'
import { shopActions } from './Shop.action'
import { handleGetActiveCartDataEffect } from './Shop.effects'

function* watchGetActiveCartData(){
  yield takeEvery(shopActions.GET_ACTIVE_CART, handleGetActiveCartDataEffect)
}

export const shopSagas = function* rootSaga(){
  yield all([fork(watchGetActiveCartData)])
}
