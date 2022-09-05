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
            <img src={`${baseDomain}${publicationAssests.publicationAssests85}`}  alt='Yoga and Total Health'/>
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
              August 2022
                <div className="bottom-line"></div>
              </h2>
              <p>
                {'August is the month of festivals and this month the journal\'s focus is on Yamas and Niyamas. Dr Jayadeva throws light on the state of Ananda (Joy), with progressive little steps of Vitarka (discussion & thinking) and Vichara (very concentrated thinking) by learning to think deeply. Hansaji explains the power of routines and their ability to keep one sane, especially during extremely challenging times. A Sadhaka delves into the need to make the most of ourselves by taking care of nature\'s gifts to us. Every single choice is important, make it count - An article on choices enforces one to reflect on one\'s everyday actions - active or passive - with its own set of consequences. "When one tugs at a single thing in nature, one finds it attached to the rest of the world" - John Muir. Click now for deep reflections and insights.'}
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
