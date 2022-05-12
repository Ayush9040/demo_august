import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const CareerCard = ({ cardTitle, bgImg }) => {
  return (
    <>
      <div
        className='our-card-container'
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <h3 className='job-title'>{cardTitle}</h3>
        <Link to='' >
          <button className='our-card-btn'>Explore</button>
        </Link>
      </div>
    </>
  )
}

export default CareerCard
