import React, { useState } from 'react'
import './style.scss'
import baseDomain, { publicationAssests } from '../../../assets/images/imageAsset'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PublicationDateNav from '../../../Components/PublicationDateNav'
// import PublicationNav from '../../Components/PublicationNav'
import InnerNavComponent from '../../../Components/InnerNavComponent'

const Yogasattva = () => {
  let setting2 = {
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }
  const publicationSattva = {
    title:'yogasttav',
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
        url:'/publication/library',
        name:'Library'
      }
    ]
  } 

  // myimages
  const images = {
    2017: [
      `${baseDomain}${publicationAssests.ythAssets25}`,
      `${baseDomain}${publicationAssests.ythAssets26}`,
      `${baseDomain}${publicationAssests.ythAssets27}`,
      `${baseDomain}${publicationAssests.ythAssets28}`,
      `${baseDomain}${publicationAssests.ythAssets29}`,
      `${baseDomain}${publicationAssests.ythAssets30}`,
      `${baseDomain}${publicationAssests.ythAssets31}`,
    ],
    2018: [
      `${baseDomain}${publicationAssests.ythAssets39}`,
      `${baseDomain}${publicationAssests.ythAssets40}`,
      `${baseDomain}${publicationAssests.ythAssets41}`,
      `${baseDomain}${publicationAssests.ythAssets42}`,
      `${baseDomain}${publicationAssests.ythAssets43}`,
      `${baseDomain}${publicationAssests.ythAssets44}`,
      `${baseDomain}${publicationAssests.ythAssets45}`,
      `${baseDomain}${publicationAssests.ythAssets46}`,
      `${baseDomain}${publicationAssests.ythAssets47}`,
      `${baseDomain}${publicationAssests.ythAssets48}`,
      `${baseDomain}${publicationAssests.ythAssets49}`,
   
    ],
    2019: [
      `${baseDomain}${publicationAssests.ythAssets50}`,
      `${baseDomain}${publicationAssests.ythAssets51}`,
      `${baseDomain}${publicationAssests.ythAssets52}`,
      `${baseDomain}${publicationAssests.ythAssets53}`,
      `${baseDomain}${publicationAssests.ythAssets54}`,
      `${baseDomain}${publicationAssests.ythAssets55}`,
      `${baseDomain}${publicationAssests.ythAssets56}`,
      `${baseDomain}${publicationAssests.ythAssets57}`,
      `${baseDomain}${publicationAssests.ythAssets58}`,
      `${baseDomain}${publicationAssests.ythAssets59}`,
      `${baseDomain}${publicationAssests.ythAssets60}`,
      `${baseDomain}${publicationAssests.ythAssets61}`
    ],
    2020: [
      `${baseDomain}${publicationAssests.ythAssets73}`,
      `${baseDomain}${publicationAssests.ythAssets74}`,
      `${baseDomain}${publicationAssests.ythAssets75}`,
      `${baseDomain}${publicationAssests.ythAssets76}`,
      `${baseDomain}${publicationAssests.ythAssets77}`,
      `${baseDomain}${publicationAssests.ythAssets78}`,
      `${baseDomain}${publicationAssests.ythAssets79}`,
      `${baseDomain}${publicationAssests.ythAssets80}`,
      `${baseDomain}${publicationAssests.ythAssets81}`,
      `${baseDomain}${publicationAssests.ythAssets82}`,
      `${baseDomain}${publicationAssests.ythAssets83}`,
      `${baseDomain}${publicationAssests.ythAssets84}`
    ],
    2021: [
      `${baseDomain}${publicationAssests.ythAssets62}`,
      `${baseDomain}${publicationAssests.ythAssets63}`,
      `${baseDomain}${publicationAssests.ythAssets64}`,
      `${baseDomain}${publicationAssests.ythAssets65}`,
      `${baseDomain}${publicationAssests.ythAssets66}`,
      `${baseDomain}${publicationAssests.ythAssets67}`,
      `${baseDomain}${publicationAssests.ythAssets68}`,
      `${baseDomain}${publicationAssests.ythAssets69}`,
      `${baseDomain}${publicationAssests.ythAssets70}`,
      `${baseDomain}${publicationAssests.ythAssets71}`,
      `${baseDomain}${publicationAssests.ythAssets72}`,      
    ],
  }

  const [bold, setBold] = useState(1)

  return (
    <>
      <div className="yogasattva-container">
        <div className="background">
          {/* <PublicationNav title={'yogasattva'} /> */}
          <InnerNavComponent abc={publicationSattva} />
        </div>
      </div>
      <div className="yogasattva-content">
        <p>
          To cater to the digital era, The Yoga Institute now brings out
          YogaSattva, its monthly free e-newsletter.
        </p>
        <Slider {...setting2}>
          <div className="yogasattva-image">
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests1}`}
              alt=""
            />
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests2}`}
              alt=""
            />
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests3}`}
              alt=""
            />
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests4}`}
              alt=""
            />
          </div>
          <div className="yogasattva-image">
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests5}`}
              alt=""
            />
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests6}`}
              alt=""
            />
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests7}`}
              alt=""
            />
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests8}`}
              alt=""
            />
          </div>
          <div className="yogasattva-image">
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests9}`}
              alt=""
            />
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests10}`}
              alt=""
            />
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests11}`}
              alt=""
            />
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests12}`}
              alt=""
            />
          </div>
          <div className="yogasattva-image">
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests13}`}
              alt=""
            />
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests14}`}
              alt=""
            />
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests15}`}
              alt=""
            />
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests16}`}
              alt=""
            />
          </div>
          <div className="yogasattva-image">
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests17}`}
              alt=""
            />
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests18}`}
              alt=""
            />
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests19}`}
              alt=""
            />
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests20}`}
              alt=""
            />
          </div>
        </Slider>
      </div>
      <div className="yogasattva-text">
        <p>
          The Yoga Institute, the world’s oldest organized yoga center, is
          spreading awareness of Yoga worldwide via free subscriptions to
          YogaSattva.
        </p>

        <p>
          Conceptualised to deliver news and updates of The Yoga Institute in a
          digital format, it will also have an abundance of scholarly articles
          on Yoga along with the wisdom of Dr. Jayadeva and Hansaji.
        </p>
        <p>
          YogaSattva adds a new dimension to the world of Yoga in this digital
          era.
        </p>
      </div>
      <div className="previous-background">
        <h3>Previous issues :</h3>
        <div className="publication-nav-dates">
          <PublicationDateNav bold={bold} setBold={setBold} />
        </div>
        <div>
          <div className="previous-container">
            <div id='previous-issue-scroll'>
              {bold === 1 ? (
                <>
                  {images[2017].map((image, i) => (
                    <div key={i} className="preivous-box">
                      <img src={image} alt="root-image" />
                    </div>
                  ))}
                </>
              ) : bold === 2 ? (
                <>
                  {images[2018].map((image, i) => (
                    <div key={i} className="preivous-box">
                      <img src={image} alt="root-image" />
                    </div>
                  ))}
                </>
              ) : bold === 3 ? (
                <>
                  {images[2019].map((image, i) => (
                    <div key={i} className="preivous-box">
                      <img src={image} alt="root-image" />
                    </div>
                  ))}
                </>
              ) : bold === 4 ? (
                <>
                  {images[2020].map((image, i) => (
                    <div key={i} className="preivous-box">
                      <img src={image} alt="root-image" />
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {images[2021].map((image, i) => (
                    <div key={i} className="preivous-box">
                      <img src={image} alt="root-image" />
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>

          {/* <div className="previous-container">
            <div className="preivous-box"></div>
            <div className="preivous-box"></div>
            <div className="preivous-box"></div>
            <div className="preivous-box"></div>
            <div className="preivous-box"></div>
            <div className="preivous-box"></div>
          </div> */}
        </div>
        {/* ) */}
        {/* })} */}
        {/* </Slider> */}
      </div>
    </>
  )
}

export default Yogasattva
