import React, { useEffect, useState } from 'react'
// import PublicationNav from '../../Components/PublicationNav'
import './style.scss'
import { breakIcon } from '../../../assets/icons/icon'
import CommonBtn from '../../../Components/commonbtn'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../../Constants/metaData.json'
import { useLocation } from 'react-router-dom'
import { getTotalHealthData } from './Api'
import { handleCTPublicationSubscribeEvent } from '../../../../../CleverTap/publicationEvent'
import { handleCTHardCopyIndiaInitiated, handleCTHardCopyInternationalInitiated } from '../../../../../CleverTap/publicationEvent'

const YogaTotalHealth = () => {

  const location = useLocation()
  const [totalHealthData, setTotalHealthData] = useState([])

  const yogaHealth = {
    title: 'yoga-health',
    color: 'white',
    menuColor: 'white',
    menuItems: [
      {
        innerTitle: 'yoga-health',
        url: '/yoga-and-total-health',
        name: 'Yoga and Total Health'
      },
      {
        innerTitle: 'yogasattva',
        url: '/yogasattva',
        name: 'Yogasattva'
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
        innerTitle: 'library',
        url: '/library',
        name: 'Library'
      }
    ]
  }

  const getAllTotalHealthData = async(queryparams) => {
    const { data } = await getTotalHealthData(queryparams)
    setTotalHealthData(data.data)
  }
  
  useEffect(() => {
    getAllTotalHealthData()
    window.scrollTo(0, 0)
  }, [])

  const handleSubscribe = () => {
    handleCTPublicationSubscribeEvent('Emagizine');
  }

  const handleHardCopyIndia = () => {
    handleCTHardCopyIndiaInitiated({
      name: '',
      emailId: '',
      phoneNumber: '',
      postalAddress: '',
      amount: '',
      paymentMode: '',
      status: '',
      productName: '',
      productUrl: ''
  })
  }

  const handleHardCopyInternational = () => {
    handleCTHardCopyInternationalInitiated({
      name: '',
      emailId: '',
      phoneNumber: '',
      postalAddress: '',
      amount: '',
      paymentMode: '',
      status: '',
      productName: '',
  })
  }
  
  
  return (
    <>
      {metaDataObj[location.pathname] &&
        <Helmet
          title={metaDataObj[location.pathname || '']?.title || ''}
        />}
      <div className="yoga-total-health">
        <div className="background">
          {/* <PublicationNav title={'yoga-health'} /> */}
          <InnerNavComponent abc={yogaHealth} />
        </div>
        {totalHealthData?.map((totalData,index) => {
          return <div className="publication-intro" key={index}>
            <div className="mag-preview">
              <img src={totalData.imageUrl} alt={totalData.title} />
            </div>
            <div className="mag-details">
              <div className="journal">
                <h2 className="jouranl-title">
                  Yoga and Total Health
                  <div className="bottom-line"></div>
                </h2>
                <p>
                  {'Yoga and Total Health’ is a monthly journal on the Yogic way of life; first issued in 1933. Edited and published by Smt. Hansaji, the magazine includes inspirational articles by the late Shri Yogendraji, the late Dr. Jayadeva, Smt. Hansaji, news, and other interesting articles by sadhakas, sattvic recipes, humour, and more.'}
                </p>
              </div>

              <div className="month-year">
                <h2 className="jouranl-title">
                  {totalData.title}
                  <div className="bottom-line"></div>
                </h2>
                <p>{totalData.description}</p>
              </div>
            </div>
          </div>
        })}
        <div className="publication-sub">
          <div className="break-icon">{breakIcon}</div>
          <p>
            {'To subscribe to ‘Yoga & Total Health Monthly Magazine’ click here.'}
          </p>
          <a href='https://www.magzter.com/IN/The_Yoga_Institute/Yoga_and_Total_Health/Health/' rel='noreferrer' target="_blank" >
            <CommonBtn text={'Subscribe Now (E-Mag)'} buttonAction={handleSubscribe}/>
          </a>
          <div className='hard-copy' >
            <a href="https://rzp.io/l/zMFTO9F0l3" rel='noreferrer' target="_blank">
              <CommonBtn text={'Hard Copy (India)'} buttonAction={handleHardCopyIndia} />
            </a>
            <a href="https://rzp.io/l/MMLnvukYe" rel='noreferrer' target="_blank">
              <CommonBtn text={'Hard Copy (International)'} buttonAction={handleHardCopyInternational} />
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
