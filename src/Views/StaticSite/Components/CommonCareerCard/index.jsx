import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const CareerCard = ({ cardTitle, index, link }) => {
  return (
    <>
      <div className={`our-card-container bg-img-${index}`}>
        <h3 className="job-title">{cardTitle}</h3>
        {/* <CommonBtn text={"Explore"} /> */}
        <Link>
          <button className="our-card-btn">Explore</button>
        </Link>
      </div>
    </>
  )
}

export default CareerCard
