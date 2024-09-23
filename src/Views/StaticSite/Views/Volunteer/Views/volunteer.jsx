import React, { useEffect, useRef } from 'react'
import CommonBanner from '../../../Components/Common-banner'
import benefits from '../../../assets/images/benifits.png'
import './style.scss'
import CareerCard from '../../../Components/CommonCareerCard'
import baseDomain, { background } from '../../../assets/images/imageAsset'
//import { volunteerData } from '../../../utils/volunteerData'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProgramsData } from '../Volunteer.action'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../../Constants/metaData.json'
import { useLocation } from 'react-router-dom'
import { handleCTVolunteerClicked } from '../../../../../CleverTap/volunteerPageEvents'


const Volunteer = () => {

  const location = useLocation()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProgramsData())
    window.scrollTo(0, 0)
  }, [])
  const VolunteerBar = {
    title: 'volunteer-with-us',
    color: 'white',
    menuColor: 'white',
    menuItems: [
      {
        innerTitle: 'volunteer-with-us',
        url: '/volunteer',
        name: 'Volunteer With Us',
      },
      {
        innerTitle: 'volunteer-values',
        url: '/values',
        name: 'Values',
      },
    ],
  }
  const { volunteerPrograms } = useSelector(state=>state.volunteer)

  console.log(volunteerPrograms)

  // useEffect(() => {
  //   if (volunteerPrograms && volunteerPrograms.length > 0) {
  //     // Extract the names (titles) of all programs
  //     const programNames = volunteerPrograms.map((program) => program.title);
      
  //     // Call the event function with the list of program names
  //     handleCTVolunteerClicked(programNames);
  //   }
  // }, [volunteerPrograms]);


  const hasEventFired = useRef(false); // Tracks if event has been fired

  useEffect(() => {
    if (!hasEventFired.current && volunteerPrograms && volunteerPrograms.length > 0) {
      // Extract the names (titles) of all programs
      const programNames = volunteerPrograms.map((program) => program.title);
      
      // Call the event function with the list of program names
      handleCTVolunteerClicked(programNames);
      
      // Mark that the event has been fired
      hasEventFired.current = true;
    }
  }, [volunteerPrograms]);



  return (
    <>
      { metaDataObj[location.pathname] && 
    <Helmet
      title={metaDataObj[location.pathname || '']?.title || ''}
    /> }
      <div className="Benefits-container">
        <CommonBanner
          isLeftContent={false}
          Logo={false}
          Navigation={true}
          PageType="Volunteer"
          BgImage={benefits}
          Heading="Volunteer with us"
          isOnlyBanner={false}
          innerNav={false}
          description={'Volunteering is the ultimate solution if you want to give back to society in a meaningful way. Come, be a part of The Yoga Institute\’s Volunteer Family by working for our social initiatives or the Institute\'s other activities.'}
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
            link={'/volunteer/program-id'}
            cardTitle='Annam Brahma'
            bgImg={baseDomain + volunteerAssets.volunteerAssets1}
          />
          <CareerCard
            link={'/volunteer/program-id'}
            cardTitle='BMC Schools'
            bgImg={baseDomain + volunteerAssets.volunteerAssets2}
          />
          <CareerCard
            link={'/volunteer/program-id'}
            cardTitle='Traffic Police'
            bgImg={baseDomain + volunteerAssets.volunteerAssets3}
          />
          <CareerCard
            link={'/volunteer/program-id'}
            cardTitle='Tree Plantation'
            bgImg={baseDomain + volunteerAssets.volunteerAssets4}
          /> */}
          {volunteerPrograms.map((item, i) => {
            return (
              <CareerCard
                key={i}
                link={`/volunteer/${item._id}`}
                cardTitle={item.title}
                bgImg={item.thumbnail}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Volunteer
