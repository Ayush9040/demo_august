import React, { useEffect } from 'react'
import CommonBanner from '../../Components/Common-banner'
import benefits from '../../assets/images/benifits.png'
import './styles.scss'
import CareerCard from '../../Components/CommonCareerCard'
import baseDomain, { background } from '../../assets/images/imageAsset'
import { volunteerData } from '../../utils/volunteerData'
import InnerNavComponent from '../../Components/InnerNavComponent'
//import VolunteerImg from '../../assets/images/volunteer_with_us.png'

const Volunteer = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const VolunteerBar = {
    title: 'volunteer-with-us',
    color: 'white',
    menuColor: 'white',
    menuItems: [
      {
        innerTitle: 'volunteer-with-us',
        url: '/join-our-team',
        name: 'Volunteer With Us',
      },
      {
        innerTitle: 'volunteer-values',
        url: '/join-our-team/values',
        name: 'Values',
      },
    ],
  }
  return (
    <>
      <div className="Benefits-container">
        <CommonBanner
          isLeftContent={false}
          Logo={false}
          Navigation={true}
          PageType="Volunteer"
          BgImage={benefits}
          Heading="Volunteer with us"
          isOnlyBanner={false}
          innerNav={true}
          bannerImg={`${baseDomain}${background.volunteer}`}
          overlay="#80729BD4"
        >
          <InnerNavComponent abc={VolunteerBar}/>
        </CommonBanner>
      </div>
      <div className="our-container pd-career">
        <div className="banner-heading bh-center">
          Volunteer Programmes
          <div className="bottom-line"></div>
        </div>
        <div className="career-cards">
          {/* <CareerCard
            link={'/join-our-team/program-id'}
            cardTitle='Annam Brahma'
            bgImg={baseDomain + volunteerAssets.volunteerAssets1}
          />
          <CareerCard
            link={'/join-our-team/program-id'}
            cardTitle='BMC Schools'
            bgImg={baseDomain + volunteerAssets.volunteerAssets2}
          />
          <CareerCard
            link={'/join-our-team/program-id'}
            cardTitle='Traffic Police'
            bgImg={baseDomain + volunteerAssets.volunteerAssets3}
          />
          <CareerCard
            link={'/join-our-team/program-id'}
            cardTitle='Tree Plantation'
            bgImg={baseDomain + volunteerAssets.volunteerAssets4}
          /> */}
          {volunteerData.map((item, i) => {
            return (
              <CareerCard
                key={i}
                link={`/join-our-team/${item.id}`}
                cardTitle={item.name}
                bgImg={item.image}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Volunteer
