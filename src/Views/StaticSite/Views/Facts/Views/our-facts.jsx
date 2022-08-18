import React, { useEffect } from 'react'
import Heading from '../../../Components/Heading'
import TimePeriodSelector from '../../../Components/TimePeriodSelector'
import { divider } from '../../../assets/icons/icon'
import './style.scss'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import useFacts from '../../../utils/hooks/useFacts'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../../Constants/metaData.json'

const OurFacts = () => {


  const facts={
    title:'oue-facts',
    color:'orange',
    menuColor:'orange',
    menuItems:[]
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { selectedRange } = useFacts()

  return (
    <>
      { metaDataObj['/our-facts'] && 
    <Helmet
      title={`${metaDataObj['/our-facts'].title}`}
    /> }
      <InnerNavComponent abc={ facts }/>
      <div className="ourfacts-container flex">
        <div className="ourfacts-header">
          <div className="ourfacts-header-text">
            <Heading smallText={'The Yoga Institute Facts'} />
            <TimePeriodSelector />
            <div className="our-facts-text ">
              <div className="decade-year">
                <span>
                  <div>
                    {selectedRange.start}
                  </div>
                  <div>-</div>
                  <div>
                    {selectedRange.end}
                  </div>
                </span>
              </div>
              <p className="decade-para">
                {selectedRange.description.map((desc) => {

                  return (
                    <>
                      <h3>{desc?.date}</h3>
                      <p>{desc?.data}</p>
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
                    alt={selectedRange.range}
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
