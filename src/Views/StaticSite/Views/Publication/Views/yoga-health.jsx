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
            <img src={`${baseDomain}${publicationAssests.publicationAssests87}`}  alt='Yoga and Total Health'/>
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
              December 2022
                <div className="bottom-line"></div>
              </h2>
              <p>
              The Yoga Institute celebrates 104th year of its selfless services this month. Dr Jayadeva emphasizes the need for learning to relax and explains how cultivating very strong faith in a higher reality will help one to relax. Hansaji explains how a little inquisitiveness with a purpose is helpful and throws light on some useless customs that may still exist around us in the lack thereof. Learn how Dates, in a variety of forms and recipes, can improve our health during the current winter season. We have (in Hindi) Samkhya Karika 57 as well as an article sharing the importance of good sleep for better health. On the last page, find an extremely simple answer by Dr Jayadeva to the Question – What is the most important thing in life?
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
            <a href="https://rzp.io/l/zMFTO9F0l3" rel='noreferrer' target="_blank">
              <CommonBtn text={'Hard Copy (India)'} />
            </a>
            <a href="https://rzp.io/l/MMLnvukYe" rel='noreferrer' target="_blank">
              <CommonBtn text={'Hard Copy (International)'} />
            </a>
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
