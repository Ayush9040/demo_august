import React, { useEffect } from 'react'
// import PublicationNav from '../../Components/PublicationNav'
import './style.scss'
import { breakIcon } from '../../../assets/icons/icon'
import CommonBtn from '../../../Components/commonbtn'
import baseDomain, {
  publicationAssests,
} from '../../../assets/images/imageAsset'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../../Constants/metaData.json'
import { useLocation } from 'react-router-dom'

const YogaTotalHealth = () => {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const yogaHealth = {
    title: 'yoga-health',
    color: 'white',
    menuColor: 'white',
    menuItems: [
      {
        innerTitle:'yoga-health',
        url:'/yoga-and-total-health',
        name:'Yoga and Total Health'
      },
      {
        innerTitle:'yogasattva',
        url:'/yogasattva',
        name:'Yogasattva'
      },
      // {
      //   innerTitle:'books',
      //   url:'/publication/books',
      //   name:'Books'
      // },
      // {
      //   innerTitle:'ebooks',
      //   url:'/publication/e-books',
      //   name:'E-books'
      // },
      {
        innerTitle:'library',
        url:'/library',
        name:'Library'
      }
    ]
  }

  return (
    <>
      { metaDataObj[location.pathname] && 
    <Helmet
      title={metaDataObj[location.pathname || '']?.title || ''}
    /> }
      <div className="yoga-total-health">
        <div className="background">
          {/* <PublicationNav title={'yoga-health'} /> */}
          <InnerNavComponent abc={yogaHealth} />
        </div>
        <div className="publication-intro">
          <div className="mag-preview">
            <img src={`${baseDomain}${publicationAssests.publicationAssests86}`}  alt='Yoga and Total Health'/>
          </div>
          <div className="mag-details">
            <div className="journal">
              <h2 className="jouranl-title">
              Yoga and Total Health
                <div className="bottom-line"></div>
              </h2>
              <p>
                {'‘Yoga and Total Health’ is a monthly journal on the Yogic way of life; first issued in 1933. Edited and published by Smt. Hansaji, the magazine includes inspirational articles by the late Shri Yogendraji, the late Dr. Jayadeva, Smt. Hansaji, news, and other interesting articles by sadhakas, sattvic recipes, humour, and more.'}
              </p>
            </div>

            <div className="month-year">
              <h2 className="jouranl-title">
              October 2022
                <div className="bottom-line"></div>
              </h2>
              <p>
                The journal this month emphasises on becoming aware of our thoughts. Dr Jayadeva prompts us to cultivate an attitude without desires through Ashukla Akrishna Actions - actions in which there is no personal benefit and there is no desire to hurt. Hansa ji emphasises on making every thought count... either think positively, or do not think at all. A Sadhaka shares the benefits of drinking lukewarm / hot water daily like flushing toxins out of the system, keeping our throat warm & protected, and aiding digestion (when having post meals). Another Sadhaka shares how the whole process of spititual science is to elevate us to an experience that is beyond the five senses. And yet another shares how one may improve one&apos;s quality of life by less consumption. Let us also wish Hansa ji a very happy 75th birthday this month before we jump into reading our regular features on The Yoga Sutras of Patanjali, Hatha Yoga Pradipika, Thoughts on the Gita and Yogic Ahara.
              </p>
            </div>
          </div>
        </div>
        <div className="publication-sub">
          <div className="break-icon">{breakIcon}</div>
          <p>
            {'To subscribe to ‘Yoga & Total Health Monthly Magazine’ click here.'}
          </p>
          <a href='https://www.magzter.com/IN/The_Yoga_Institute/Yoga_and_Total_Health/Health/' rel='noreferrer' target="_blank" >
            <CommonBtn text={'Subscribe Now (E-Mag)'} />
          </a>
          <div className='hard-copy' >
            <CommonBtn text={'Hard Copy'} />
          </div>
          <p>
          For complaints or non-receipt of journal, write to –
          bookstore@theyogainstitute.org
          </p>
          <p>
          For Letters to the Editor, contributing articles and photographs,
          write to – yogatotalhealth@theyogainstitute.org
          </p>
        </div>
      </div>
    </>
  )
}

export default YogaTotalHealth
