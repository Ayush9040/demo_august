import React, { useEffect } from 'react'
import CommonBanner from '../../../Components/Common-banner'
import Virtual from '../../../assets/images/museum-1.png'
import Heading from '../../../Components/Heading'
import './style.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CommonGrid from '../../../Components/GalleryGrid'
import Location from './Location'
// import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import CommonBtn from '../../../Components/commonbtn'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../../Constants/metaData.json'
import baseDomain, {
  museumAssets,
  background,
} from '../../../assets/images/imageAsset'
import InnerNavComponent from '../../../Components/InnerNavComponent'
const MuseumPage = () => {
  const route = useLocation()

  useEffect(() => {
    if (route.hash) {
      document
        .getElementById(`${route.hash.substring(1, route.hash.length)}`)
        .scrollIntoView()
    } else {
      scrollTo(0, 0)
    }
  })
  const intro =
    'The world’s first yoga museum, Shri Yogendra Museum of Classical Yoga, defines classical yoga and its ancient and rich history. Inaugurated in 1987, by Shri Giani Zail Singh, President of India, it presents a historical and balanced view of Yoga, and takes you through a journey of it. The museum has an array of indoor and outdoor displayson the History of Yoga, sections on Raja Yoga (with special reference to Patanjali Yoga Sutra), Bhakti Yoga, Mantra Yoga, Tantra Yoga, Kriyas, ancient versus modern structure of Asanas (specially elaborated – through a long and patient study of the Asana structure of The Yoga Institute), Founder Shri Yogendra Ji’s historic personal effects and useful yogic tools.'
  // const numberofSlides = [1]
  const MuseumBan = {
    title: 'Career',
    color: 'white',
    menuColor: 'white',
    menuItems: [],
  }
  return (
    <>
      { metaDataObj[location.pathname] && 
    <Helmet
      title={metaDataObj[location.pathname || '']?.title || ''}
    /> }
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
          //bannerImg={museumBanner}
          bannerImg={`${baseDomain}${background.museum}`}
          overlay="#B08261D4"
        >
          <InnerNavComponent abc={MuseumBan}/>
        </CommonBanner>
      </div>

      <div className="museum-heading" id="virtual_tour">
        <Heading largeText={'Virtual Tour'} />
        
      </div>
      <div className="museum-container">
        <div className="museum-card-wrapper">
          <div className="museum-card">
            <img src={`${baseDomain}${museumAssets.virualAssets}`}alt="virtual gallery" />
          </div>
        </div>
        <p className="vt_text">
          Want to see what the Shri Yogendra Museum looks like from the inside?
          Here’s your chance to take on a virtual tour
        </p>
        <a href="https://artsandculture.google.com/story/QgVhfXAZr-CxIA" rel='noreferrer' target='_blank' >
          <CommonBtn text={'Take a virtual tour'} />
        </a>
      </div>
      <div id="gallery">
        <CommonGrid />
      </div>
      <div id="location">
        <Location />
      </div>
    </>
  )
}

export default MuseumPage
