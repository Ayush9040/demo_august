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
        {data.map(item=><HistoryCard key={item} status={item%2===0 ? 'Completed':'On-going'} />)}
      </div>
    </div>
  )
}

export default HistoryList