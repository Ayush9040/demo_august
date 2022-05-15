import React from 'react'
import CommonBanner from '../Common-banner'
import Virtual from '../../assets/images/museum-1.png'
import Heading from '../Heading'
import './style.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CommonGrid from '../GalleryGrid'
import Location from './Location'
import { Link } from 'react-router-dom'
import CommonBtn from '../commonbtn'
const Museum = () => {

  const intro =
    'The world’s first yoga museum, Shri Yogendra Museum of Classical Yoga, defines classical yoga and its ancient and rich history. Inaugurated in 1987, by Shri Giani Zail Singh, then President of India, it presents a historical and balanced view of Yoga, and takes you through a journey of it. The museum has an array of indoor and outdoor displays, containing the History of Yoga, sections on Raja Yoga (with special reference to Patanjali Yoga Sutra), Bhakti Yoga, Mantra Yoga, Tantra Yoga, Kriyas, ancient versus modern structure of Asanas (specially elaborated – through a long and patient study of the Asana structure of The Yoga Institute), Founder Shri Yogendra Ji’s historic personal effects and useful yogic tools.'
  const numberofSlides = [1]
  return (
    <>
      <div>
        <CommonBanner
          isLeftContent={false}
          Logo={false}
          Navigation={true}
          PageType="museum-banner"
          BgImage={Virtual}
          Heading="Museum of Classical Yoga"
          isOnlyBanner={false}
          description={intro}
        />
      </div>

      <div className="museum-heading">
        <Heading largeText={'Virual Tour'} />
        <br />
      </div>
      <div className="museum-container">
        {numberofSlides.map((item,i) => {
          return (
            <div key={i} className="museum-card-wrapper">
              <div className="museum-card">
                <div className="museum-card-image"></div>
                <div className="museum-card-image">
                  <p>
                    Want to see what the Shri Yogendra Museum looks like from
                    the inside? Here’s your chance to take on a virtual tour;
                  </p>
                  <a href="https://artsandculture.google.com/story/QgVhfXAZr-CxIA" target='_blank' rel="noreferrer" >
                    <CommonBtn text={'Take a virtual tour'} />
                  </a>
                </div>
                <div className="museum-card-image" ></div>
              </div>
            </div>
          )
        })}
      </div>
      <CommonGrid />
      <Location />
    </>
  )
}

export default Museum
