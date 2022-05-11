import React, { useState } from 'react'
import Heading from '../../Components/Heading'
import TimePeriodSelector from '../../Components/Facts/TimePeriodSelector'
import { divider } from '../../assets/icons/icon'
import './style.scss'
import Images from '../../Components/Facts/imageRepo'
import CommonBannerNavPrimary from '../../Components/CommonBannerNavPrimary'
import FactsDecadeText from '../../Components/Facts/FactsDecadeText'



const OurFacts = () => {
  const [decade, setDecade] = useState(0)
  const imageObjMap = {
    0: 'images1990',
    1: 'images2000',
    2: 'images2010',
    3: 'images2020',
  }
  const textObjMap = {
    0: 'text1990',
    1: 'text2000',
    2: 'text2010',
    3: 'text2020',
  }
  return (
    <>
      <CommonBannerNavPrimary />
      <div className="ourfacts-container global-padding flex">
        <div className="ourfacts-header">
          <div className="ourfacts-header-text">
            <Heading
              smallText={'The Yoga Institute Facts'}
            />
            <TimePeriodSelector onDecadeChange={setDecade} />
            <div className="ourfacts-text flex">
              <p>
                {`Uncover both ancient and new interesting facts about your very own,
            'The Yoga Institute'. Discover fascinating facts about Shri. Yogendra
            ji, Mother Sita Devi, Dr. Jayadeva, and Dr. Hansaji Yogendra, among
            others.`}
              </p>
              {FactsDecadeText[textObjMap[decade]].map((h2, idtxt) => {
                return (
                  <h2 key={idtxt} src={h2} />
                )
              })}
            </div>
          </div>
        </div>
        <div className="ourfacts-gallery global-padding flex">
          <div className="ourfacts-gallery-grid">
            {Images[imageObjMap[decade]].map((img, idx) => (
              <img key={idx} src={img} className={'grid-img-' + (idx + 1)} />
            ))}
          </div>
    
        </div>
        <div className="divider">{divider}</div>
      </div>
    </>
  )
}

export default OurFacts
