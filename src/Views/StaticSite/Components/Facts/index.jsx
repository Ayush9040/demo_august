import React from 'react'
import Heading from '../Heading'
import TimePeriodSelector from '../TimePeriodSelector'
import { facts, divider } from '../../assets/icons/icon'
import './style.scss'
import CommonBtn from '../commonbtn'
import { Link } from 'react-router-dom'
import useFacts from '../../utils/hooks/useFacts'

const Facts = () => {
  const { rangeIndex, selectedRange, dateRange, handleNavigate } = useFacts()

  return (
    <div className='facts-container global-padding'>
      <div className='facts-header'>
        <TimePeriodSelector />
        <div className='facts-header-text'>
          <Heading
            logo={facts}
            smallText={'The Yoga Institute'}
            largeText={'Facts'}
          />
          <p>
            Uncover both ancient and new interesting facts about your very own,
            &apos;The Yoga Institute&apos;. Discover fascinating facts about Shri.Yogendra
            ji, Mother Sita Devi, Dr. Jayadeva, and Dr. Hansaji Yogendra, among
            others.
          </p>
          <div className='globalButtonParent'>
            <div>
              <Link to={`/our-facts/?range=${rangeIndex}`}>
                <CommonBtn text='Explore More' />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='slider slider-m'>
        <input
          type={'range'}
          min={0}
          max={dateRange.length - 1}
          value={rangeIndex}
          onChange={(e) => handleNavigate(e.target.value)}
        />
      </div>
      <div className='facts-gallery'>
        <div className='facts-gallery-grid'>
          {selectedRange?.images.map((img, idx) => {
            if (idx < 6) {
              return (
                <div className={'grid-img-' + (idx + 1)} >
                  <img key={idx} src={img}  />
                </div>
              )
            }
            return
          })}
        </div>
        <div className='slider'>
          <input
            type={'range'}
            min={0}
            max={dateRange.length - 1}
            value={rangeIndex}
            onChange={(e) => handleNavigate(e.target.value)}
          />
        </div>
      </div>

      <div className='divider'>{divider}</div>
    </div>
  )
}

export default Facts
