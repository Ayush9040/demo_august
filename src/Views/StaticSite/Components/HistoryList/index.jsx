import React from 'react'
import HistoryCard from '../HistoryCard'
import './style.scss'

const HistoryList = ({ title,options=['a','b','c','d'] }) => {

  let array = [1,2,3,4,5,6]

  return (
    <div className='history-list' >
      <div className='filter-history' >
        <p>{ title ||'Title' }</p>
        <select name='filter' id='filter' >
          {options.map(item=><option key={item} >{item}</option>)}
        </select>
      </div>
      <div className='history-listitems' >
        {array.map(item=><HistoryCard key={item} status={item%2===0 ? 'Completed':'On-going'} />)}
      </div>
    </div>
  )
}

export default HistoryList