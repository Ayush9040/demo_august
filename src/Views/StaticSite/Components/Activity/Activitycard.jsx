import React from 'react'
import { useNavigate } from 'react-router-dom'

const Activitycard = ({ title, description, images,url }) => {


  const navigate=useNavigate()

  return (
    <>
      <div className="card-container">
        <div className="card-image">
          <img src={images}  />
        </div>
        <div className="card-content-activity">
          <h1>{title}</h1>
          <div className='without-hover'>
            <h4 style={{ fontSize: '2rem' }}>{description.slice(0,90) }...</h4>
          </div>
          <div className='with-hover'>
            <h4 style={{ fontSize: '2rem' }}>{description}</h4>
          </div>
          <h3 className="explore" style={{ fontSize: '2rem' }} onClick={()=>navigate(url)} >
            Explore in detail &#62;&#62;
          </h3>
        </div>
      </div>
    </>
  )
}

export default Activitycard
