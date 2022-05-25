import React, { useEffect, useState } from 'react'

const Activitycard = ({ title, description, images }) => {

  return (
    <>
      <div className="card-container">
        <div className="card-image">
          <img src={images} />
        </div>
        <div className="card-content-activity">
          <h1>{title}</h1>
          <br />
          <h4 style={textTitle ? { fontSize: '2rem' } : {}}>{description}</h4>
          <h3 className="explore" style={{ fontSize: '2rem' }}>
            Explore in detail &#62;&#62;
          </h3>
        </div>
      </div>
    </>
  )
}

export default Activitycard
