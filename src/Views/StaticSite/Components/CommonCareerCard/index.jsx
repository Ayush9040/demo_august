import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const CareerCard = ({ cardTitle, bgImg,link }) => {
  return (
    <>
      <div
        className='our-card-container'
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <h3 className='job-title'>{cardTitle}</h3>
        {/* <CommonBtn text={"Explore"} /> */}
        <Link to={link} >
          <button className='our-card-btn'>Explore</button>
        </Link>
      </div>
    </>
  )
}

export default CareerCard
