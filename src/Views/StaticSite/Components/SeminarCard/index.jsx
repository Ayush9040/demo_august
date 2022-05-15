import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import { share1 } from '../../assets/icons/icon'

const SeminarCard = ({ title, bgImage, desc, url='' }) => {
  let description = desc
    ? desc
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
    description.split('').length > 80
      ? setTextTitle(description.substring(0, 80) + '...')
      : setTextTitle(description)
  })
  return (
    <div className={'seminar-card'}>
      <div className='seminar-card-image'>
        <img src={bgImage} />
      </div>
      <div className='seminar-card-content'>
        <h2>
          <span className='seminar-title'>{title}</span>
          <span className='seminar-date'>01/01/2022</span>
        </h2>
        <p>{textTitle}</p>
        <div className='options'>
          <Link to={url}>
            <button>View Story</button>
          </Link>
          <div className='share-icon'>{share1}</div>
        </div>
      </div>
    </div>
  )
}

export default SeminarCard
