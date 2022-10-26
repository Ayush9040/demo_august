import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import InnerNavComponent from '../../../../Components/InnerNavComponent'
import { getOrderByOrderId, getCartById,fetchSingleProduct  } from '../../Shop.api'
import Delivered from './Components/delivered'
import InProgress from './Components/inProgress'

const OrderHistroy = () => {
  const order = {
    title: 'Shop',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }
  const { orderId } = useParams()
  
  const [orderDetails,setOrderDetails] = useState() 
  const [ totalAmount, setTotalAmount] = useState()
  const [ products,setProducts ] = useState([])


  const getOrderItems = async(products) => {
    const arr = []
    for await (let item of products) {
      try {
        const { data } = await fetchSingleProduct(item.productId)
        arr.push({ ...data.data, quantity: item.quantity })
      } catch (err) {
        console.log(err)
      }
    }
    setProducts(arr)
  }

  const getCart = async(cartId) => {
    const { data } = await getCartById(cartId)
    setTotalAmount(data.data.totalPrice)
    getOrderItems( data.data.items )
  }

  const getOrders = async()=>{
    const { data } = await getOrderByOrderId(orderId)
    setOrderDetails(data.data?.[0])
    getCart(data.data?.[0]?.cartId)

  }

  useEffect(()=>{
    getOrders()
  },[])

  return (
    <>
      <InnerNavComponent abc={order} />
      { order.deliveryStatus!=='DELIVERED' ? <InProgress orderDetails={ orderDetails } products={ products } totalAmount={ totalAmount }  /> : <Delivered orderDetails={ orderDetails } products={ products } totalAmount={ totalAmount } /> }
    </>
  )
}

export default OrderHistroy
