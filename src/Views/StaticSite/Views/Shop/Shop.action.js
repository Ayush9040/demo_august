export const shopActions = {
  UPDATE_CART : 'shop/UPDATE_CART',
  GET_ACTIVE_CART:'shop/GET_ACTIVE_CART',
  GET_ACTIVE_CART_SUCCESS:'shop/GET_ACTIVE_CART_SUCCESS',
  GET_ACTIVE_CART_ERROR:'shop/GET_ACTIVE_CART_ERROR',
  CLEAR_CART: 'shop/CLEAR_CART'
}

export const updateCartData = ( payload ) => {
  return { type: shopActions.UPDATE_CART,payload }
}

export const getActiveCartData = ()=>{
  return { type: shopActions.GET_ACTIVE_CART }
}

export const getActiveCartDataSuccess = ( payload )=>{
  return { type: shopActions.GET_ACTIVE_CART_SUCCESS, payload }
}

export const getActiveCartDataError = ( )=>{
  return { type: shopActions.GET_ACTIVE_CART_ERROR }
}

export const clearCart = () => {
  return { type: shopActions.CLEAR_CART }
};