import React, { useEffect } from 'react'
// import PublicationNav from '../../Components/PublicationNav'
import './style.scss'
import { breakIcon } from '../../../assets/icons/icon'
import CommonBtn from '../../../Components/commonbtn'
import baseDomain, { publicationAssests } from '../../../assets/images/imageAsset'
import InnerNavComponent from '../../../Components/InnerNavComponent'
const YogaTotalHealth = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const yogaHealth = {
    title:'yoga-health',
    color:'white',
    menuColor:'white',
    menuItems:[
      {
        innerTitle:'yoga-health',
        url:'/publication/yoga-health',
        name:'Yoga and Total Health'
      },
      {
        innerTitle:'yogasttav',
        url:'/publication/yogasattva',
        name:'Yogasattava'
      },
      {
        innerTitle:'books',
        url:'/publication/books',
        name:'Books'
      },
      {
        innerTitle:'ebooks',
        url:'/publication/e-books',
        name:'E-books'
      },
      {
        innerTitle:'library',
        url:'/publication/library',
        name:'Library'
      }
    ]
  }

  return(
    <div className="yoga-total-health">
      <div className="background">
        {/* <PublicationNav title={'yoga-health'} /> */}
        <InnerNavComponent abc={yogaHealth} />
      </div>
      <div className="publication-intro">
        <div className="mag-preview">
          <img src={`${baseDomain}${publicationAssests.publicationAssests7}`} />
        </div>
        <div className="mag-details">
          <div className="journal">
            <h2 className="jouranl-title">
              Yoga and Total Health
              <div className="bottom-line"></div>
            </h2>
            <p>
              {`‘Yoga and Total Health’ is a monthly journal on the Yoga way of
              life; it was first issued in 1933. Edited and published by Smt
              Hansaji, the magazine includes inspiring write-ups by the late
              Shri Yogendraji, the late Dr. Jayadeva, Smt. Hansaji, news, and
              other interesting articles by sadhakas, sattvic recipes, humour,
              interesting pieces by Sadhakas, and more.`}
            </p>
          </div>

          <div className="month-year">
            <h2 className="jouranl-title">
              October 2021
              <div className="bottom-line"></div>
            </h2>
            <p>
              Dive in to learn the wonderful insights through our various
              articles this month – Dr Jayadeva explains the hierarchy of duties
              to help one be mindful of how one invests their time, an utmost
              precious commodity. Hansa ji encourages one to reflect on whether
              money is driving us or do we use it to run our lives? Devdutt
              Pattanaik logically shares how the human mind has the power to
              create value and also to strip value with interesting tales from
              Indian mythology and many more... We also celebrate Hansa ji’s
              birthday this month and pray for her good health and peace from
              the safety of our homes.
            </p>
          </div>
        </div>
      </div>
      <div className="publication-sub">
        <div className="break-icon">{breakIcon}</div>
        <p>
          {`To subscribe for ‘Yoga & Total Health Monthly Magazine’ click the
          button below.`}
        </p>
        <CommonBtn text={'Subscribe Now (E-Mag)'} />
        <CommonBtn text={'Hard Copy'} />
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
  )
}

export default YogaTotalHealth
