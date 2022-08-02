import React, { useEffect } from 'react'
import CommonBanner from '../../../Components/Common-banner'
import './style.scss'
import SectionComponent from '../../../Components/SectionComponent/index'
//import baseDomain,{ giftingAssets } from '../../assets/images/imageAsset'
//import GiftingImg from '../../assets/images/gifting2a-02.png'
import { useLocation } from 'react-router-dom'
import baseDomain, {
  background,
  //giftingAssets,
} from '../../../assets/images/imageAsset'
import GiftingData from '../Constants/data'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../../Constants/metaData.json'

const Gifting = () => {
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
  // const [payment, setPayment] = useState()
  // const [details, setDetails] = useState()

  // const confirmPayment = () => {
  //   if (payment > 0) {
  //     setDetails(true)
  //   } else {
  //     setDetails(false)
  //   }
  // }
  const GiftingBan = {
    title: 'Career',
    color: 'white',
    menuColor: 'white',
    menuItems: [],
  }
  return (
    <>
      { metaDataObj[route.pathname] && 
    <Helmet
      title={metaDataObj[route.pathname || '']?.title || ''}
    /> }
      <div className="gifting-main-container">
        <CommonBanner
          isLeftContent={false}
          Logo={false}
          Navigation={true}
          PageType="gifting"
          Heading="Gifting"
          isOnlyBanner={false}
          innerNav={false}
          //bannerImg={GiftingImg}

          bannerImg={`${baseDomain}${background.gifting}`}
          overlay="#61829DD4"
        >
          <InnerNavComponent abc={GiftingBan}/>
        </CommonBanner>
        {GiftingData.map((item) => {
          return (
            <>
              <SectionComponent
                page='Gifting'
                image={item.image}
                title={item.title}
                description={item.description}
                sectionId={item.key}
              />
            </>
          )
        })}
      </div>
    </>
  )
}

export default Gifting
