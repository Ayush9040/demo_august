import { shopActions } from './Shop.action'
import { initialState, noError } from './Shop.defaultStates'

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
  case shopActions.UPDATE_CART:
    return {
      ...state,
      isLoading: true,
      cart: action.payload,
      error: noError,
    }
  case shopActions.GET_ACTIVE_CART:
    return {
      ...state,
      isLoading: true,
      cart: [],
      activeCartId:'',
      error: noError,
    }
  case shopActions.GET_ACTIVE_CART_SUCCESS:
    return {
      ...state,
      isLoading: true,
      cart: action.payload.cartItems,
      activeCartId:action.payload.activeCartId,
      error: noError,
    }
  case shopActions.CLEAR_CART:
      return {
        ...state,
        isLoading: true,
        cart: [],
        error: noError,
      }
  case shopActions.GET_ACTIVE_CART_ERROR:
    return {
      ...state,
      isLoading: false,
      cart: JSON.parse(localStorage.getItem('cart')) || [],
      error: true,
    }
  default:
    return { ...state }
  }
}
