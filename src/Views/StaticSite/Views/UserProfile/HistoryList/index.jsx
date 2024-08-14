import React from 'react'
import HistoryCard from '../HistoryCard'
import './style.scss'

const HistoryList = ({ title,options=['a','b','c','d'], data=[] }) => {

  return (
    <div className='history-list' >
      <div className='filter-history' >
        <p>{ title ||'Title' }</p>
        <select name='filter' id='filter' >
          {options.map(item=><option key={item} >{item}</option>)}
        </select>
      </div>
      <div className='history-listitems' >
        {data.map(item=>{
          const date = new Date(item?.createdAt)
          return <HistoryCard key={item._id} order={ item.cartId } orderId={ item.orderId } timeline={ date.toLocaleDateString()  }  status={item.deliveryStatus} />
        })}
      </div>
    </div>
  )
}

export default HistoryList