export const updateLocalCart = ( productId,quantity=1)=>{
  const localCart = localStorage.getItem('cart')
  if (!localCart){ 
    const product = [{ productId:productId,quantity:quantity }]
    return product
  }
  const prevCart = JSON.parse(localCart)
  if(prevCart.some(item=>item.productId===productId)){
    prevCart.forEach(element => {
      if(element.productId===productId){
        element.quantity = element.quantity + 1
      }
    })
    return prevCart
  }
  return [...prevCart,{ productId:productId, quantity:1 }]
}