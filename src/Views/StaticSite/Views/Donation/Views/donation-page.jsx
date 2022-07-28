import React, { useEffect } from 'react'
import CommonBanner from '../../../Components/Common-banner'
import './style.scss'
import SectionComponent from '../../../Components/SectionComponent'
import { useLocation } from 'react-router-dom'
import baseDomain, {
  background,
} from '../../../assets/images/imageAsset'
import InnerNavComponent from '../../../Components/InnerNavComponent'

// import { data } from '../Constants/data'
import { fetchDonationsData } from '../Donation.action'
import { useDispatch, useSelector } from 'react-redux'

const DonationPage = () => {

  const dispatch = useDispatch()

  const route = useLocation()
  useEffect(() => {
    dispatch(fetchDonationsData())
    if (route.hash) {
      document
        .getElementById(`${route.hash.substring(1, route.hash.length)}`)
        .scrollIntoView()
    } else {
      scrollTo(0, 0)
    }
  },[])

  const DonationBan = {
    title: 'Career',
    color: 'white',
    menuColor: 'white',
    menuItems: [],
  }

  const { donationPrograms } = useSelector(state => state.donation)
  console.log(donationPrograms)

  return (
    <>
      <div className="brahma-container">
        <CommonBanner
          isLeftContent={false}
          Logo={false}
          Navigation={true}
          PageType="donation"
          Heading="Donation"
          isOnlyBanner={false}
          innerNav={false}
          description={
            'Come join us in spreading a health and well –being and social revolution through yoga.  Let’s be part of the change towards balanced, calm and content lives in particular and society in general. The Institute subscribes to Yoga not simple as a set of theoretical principles but as a way of life focused on healthy living, active living and spiritual well-being for all. Become a part of The Yoga Institute’s 100 year old legacy of Yoga in the service of humanity. Connect with our endeavors to reduce hunger, increase access and empower lives. Let Yoga be a matter of right for everyone.'
          }
          bannerImg={`${baseDomain}${background.donation}`}
          overlay="#CE7780E6"
        >
          <InnerNavComponent abc={DonationBan} />
        </CommonBanner>
        {donationPrograms && donationPrograms.map((point, i) => <SectionComponent
          key={i}
          url={`/donation/${point._id}`}
          image={point.image}
          title={point.title}
          page='donation'
          description={point.description}
          sectionId={point._id}
        />
        )}
      </div>
    </>
  )
}

export default DonationPage
