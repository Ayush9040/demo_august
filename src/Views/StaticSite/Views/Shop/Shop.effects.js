import { getActiveCartDataError, getActiveCartDataSuccess } from './Shop.action'
import { call, put } from 'redux-saga/effects'
import { getActiveCart } from './Shop.api'

export function* handleGetActiveCartDataEffect() {
  try {
    const { data } = yield call(getActiveCart)
    const cartData = data.data.items.map((item) => {
      return { productId: item.productId._id, quantity: item.quantity }
    })  
    yield put(getActiveCartDataSuccess({
      cartItems: cartData,
      activeCartId: data.data._id
    }))
  } catch (err) {
    yield put(getActiveCartDataError())
  }
}
