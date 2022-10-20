export const shopActions = {
  UPDATE_CART : 'shop/UPDATE_CART',
}

export const updateCartData = ( payload ) => {
  
  console.log(payload,'check')
  return { type: shopActions.UPDATE_CART,payload }
}

