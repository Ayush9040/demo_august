import React from 'react'
import Heading from '../../Components/Heading'
import TimePeriodSelector from '../../Components/TimePeriodSelector'
import { divider } from '../../assets/icons/icon'
import './style.scss'
import CommonBannerNavPrimary from '../../Components/CommonBannerNavPrimary'
import useFacts from '../../utils/hooks/useFacts'

const OurFacts = () => {
  const { selectedRange } = useFacts()

  return (
    <>
      <CommonBannerNavPrimary />
      <div className="ourfacts-container flex">
        <div className="ourfacts-header">
          <div className="ourfacts-header-text">
            <Heading smallText={'The Yoga Institute Facts'} />
            <TimePeriodSelector />
            <div className="our-facts-text ">
              <div className="decade-year">
                <span>
                  {selectedRange.start}
                  <br />-<br />
                  {selectedRange.end}
                </span>
              </div>
              <p className="decade-para">
                {selectedRange.description.map((desc) => {
                  // console.log(description, 'sahil')
                  return (
                    <>
                      <h3>{desc?.date}</h3>
                      <br />
                      <p>{desc?.data}</p>
                      <br />
                    </>
                  )
                })}
              </p>
            </div>
          </div>
        </div>
        <div className="ourfacts-gallery global-padding flex">
          <div className="ourfacts-gallery-grid">
            {selectedRange.images.map((img, idx) => (
              <>
                {idx <= 5 ? (
                  <img
                    key={idx}
                    src={img}
                    className={'grid-img-' + (idx + 1)}
                  />
                ) : (
                  ''
                )}
              </>
            ))}
          </div>
        </div>
        <div className="divider">{divider}</div>
      </div>
    </>
  )
}

export default OurFacts
