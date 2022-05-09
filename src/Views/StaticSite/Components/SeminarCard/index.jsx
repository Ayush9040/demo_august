import React, { useState, useEffect } from 'react'
import './style.scss'
import { share1 } from '../../assets/icons/icon'

const SeminarCard = ({ title, bgImage, textContent }) => {
  let description = textContent
    ? textContent
    : `Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Nullam nec ante id nunc vehicula pharetra nec
    vitae est. Sed diam dui, luctus sed velit quis,
    placerat consequat felis. Vivamus cursus in mauris
    at dignissim. Etiam venenatis semper pharetra.
    Duis ut diam eros. In hac habitasse platea
    dictumst. Nam tincidunt nisi metus, et dignissim
    ligula cursus ut.`

  const [textTitle, setTextTitle] = useState(false)
  useEffect(() => {
    console.log(description.split('').length > 100)
    description.split('').length > 100
      ? setTextTitle(description.substring(0, 100) + '...')
      : setTextTitle(description)
  })
  return (
    <div className={'seminar-card'}>
      <div className="seminar-card-image">
        <img src={bgImage.default} />
      </div>
      <div className="seminar-card-content">
        <h2>
          <span className="seminar-title">{title}</span>
          <span className="seminar-date">01/01/2022</span>
        </h2>
        <p>{textTitle}</p>
        <div className="options">
          <button>View Story</button>
          <div className="share-icon">{share1}</div>
        </div>
      </div>
    </div>
  )
}

export default SeminarCard
