import React from 'react'
import './style.scss'
import { fetchCartDetails,fetchSingleProductById } from '../Profile.api'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const HistoryCard = ({ timeline='', status='On-going', order='', orderId='' }) => {

  const [ products,setProducts ] = useState([])
  const navigate = useNavigate()

  const getProductsList = async(productList) => {
    const arr = []
    for await (let item of productList) {
      try {
        const { data } = await fetchSingleProductById(item.productId)
        arr.push({ ...data.data, quantity: item.quantity })
      } catch (err) {
        console.log(err)
      }
    }
    setProducts(arr)
  }
  
  const getOrderDetails = async()=>{
    const { data } = await fetchCartDetails( order )
    getProductsList( data.data.items )
  }

  useEffect(()=>{
    getOrderDetails()
  },[ order ])
  

  return (
    <div className='history-card' onClick={()=>{ navigate(`/user/order/${ orderId }`) }} >
      <div className='purchase-img' >
        <img  src={ products?.[0]?.productThumbnail } alt={products?.[0]?.name}/>
      </div>
      <div className='purchase-details' >
        { products.map((item,i)=><><p key={i} >{ item.name }</p><h4>Quantity:{ item.quantity }</h4></>) }
      </div>
      <h3 style={{ textAlign:'right',marginTop:'1rem' }} >Placed On:{ timeline }</h3>
      <h3 className='purchase-status' >{ status }</h3>
    </div>
  )
}

export default HistoryCard