import React, { useState } from 'react'
import Heading from '../Heading'
import TimePeriodSelector from './TimePeriodSelector'
import { facts, divider } from '../../assets/icons/icon'
import './style.scss'
import CommonBtn from '../commonbtn'
import { Link } from 'react-router-dom'
import Images from './imageRepo'

const Facts = () => {
  const [decade, setDecade] = useState(0)
  const imageObjMap = {
    0: 'images1990',
    1: 'images2000',
    2: 'images2010',
    3: 'images2020',
  }

  return (
    <div className="facts-container global-padding">
      <div className="facts-header">
        <TimePeriodSelector onDecadeChange={setDecade} />
        <div className="facts-header-text">
          <Heading
            logo={facts}
            smallText={'The Yoga Institute'}
            largeText={'Facts'}
          />
          <p>
            {`Uncover both ancient and new interesting facts about your very own,
            'The Yoga Institute'. Discover fascinating facts about Shri.Yogendra
            ji, Mother Sita Devi, Dr. Jayadeva, and Dr. Hansaji Yogendra, among
            others.`}
            <Link to="/our-facts/">
              <CommonBtn text="Explore More" />
            </Link>
          </p>
        </div>
      </div>
      <div className="facts-gallery">
        <div className="facts-gallery-grid">
          {Images[imageObjMap[decade]].map((img, idx) => (
            <img key={idx} src={img} className={'grid-img-' + (idx + 1)} />
          ))}
        </div>
        <div className="slider">
          <input type={'range'} min={0} max={100} value={0} />
        </div>
      </div>

      <div className="divider">{divider}</div>
    </div>
  )
}

export default Facts
