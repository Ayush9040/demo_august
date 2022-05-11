import React, { useEffect, useState } from 'react'

const Activitycard = ({ title, description, images }) => {
  const [textTitle, setTextTitle] = useState(false)
  useEffect(() => {
    console.log(description.split('').length > 100)
    description.split('').length > 100
      ? setTextTitle(description.substring(0, 100) + '...')
      : setTextTitle(description)
  })
  console.log(textTitle)

  return (
    <>
      <div className="card-container">
        <div className="card-image">
          <img src={images} />
        </div>
        <div className="card-content-activity">
          <h1>{title}</h1>
          <br />
          <h4 style={textTitle ? { fontSize: '2rem' } : {}}>{textTitle}</h4>
          <h3 className="explore" style={textTitle ? { fontSize: '2rem' } : {}}>
            Explore in detail &#62;&#62;
          </h3>
        </div>
      </div>
    </>
  )
}

export default Activitycard
