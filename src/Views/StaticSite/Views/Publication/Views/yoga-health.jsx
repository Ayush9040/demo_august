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
              September 2022
                <div className="bottom-line"></div>
              </h2>
              <p>
                {'The journal this month focuses on techniques that one may learn to take control of the mind. Dr Jayadeva suggests the possibility of understanding, learning and cultivating practicing to “stop thinking” as they key to control the mind. Hansaji suggests to begin with concentration. One may also use the Parikarmas (from the Yoga Sutras) – Maitri (friendliness towards the happy), Karuna (compassion for the unhappy), Mudita (delight in the virtuous), Upeksha (indifference towards the wicked) as ways to cleanse the mind and bring steadiness. Devdutt Pattanaik, an Indian mythologist, shares a very interesting take on consumption being the root cause of violence. Dive in for more on the above along with our regular features on The Yoga Sutras of Patanjali, Hatha Yoga Pradipika, Thoughts on the Gita and Yogic Ahara.'}
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
