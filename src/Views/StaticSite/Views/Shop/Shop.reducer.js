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
  default:
    return { ...state }
  }
}
