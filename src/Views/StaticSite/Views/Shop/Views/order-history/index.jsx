import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import InnerNavComponent from '../../../../Components/InnerNavComponent'
import { getOrderByOrderId, fetchSingleProduct  } from '../../Shop.api'
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
  const { location } = useSelector(state=>state.location)


  const getOrderItems = async(products) => {
    const arr = []
    for await (let item of products) {
      console.log(item,'item')
      try {
        const { data } = await fetchSingleProduct(item.productId)
        arr.push({ ...data.data, quantity: item.quantity , trackingId: item.trackingId, deliveryStatus:item.deliveryStatus, deliveryPartner:item.deliveryPartner  })
      } catch (err) {
        console.log(err)
      }
    }
    setProducts(arr)
  }



  const getOrders = async()=>{
    const { data } = await getOrderByOrderId(orderId)
    setOrderDetails(data.data)
    setTotalAmount(data.data.cartId.totalPrice)
    getOrderItems( data.data.items )

  }

  useEffect(()=>{
    getOrders()
  },[])
  console.log(orderDetails,'order')

  return (
    <>
      <InnerNavComponent abc={order} />
      { orderDetails?.items[0].deliveryStatus!=='DELIVERED'? <InProgress orderDetails={ orderDetails } products={ products } totalAmount={ totalAmount } currency={ location==='IN' ? 'INR':'USD' }   /> : <Delivered orderDetails={ orderDetails } products={ products } totalAmount={ totalAmount } currency={ location==='IN' ? 'INR':'USD' } /> }
    </>
  )
}

export default OrderHistroy
