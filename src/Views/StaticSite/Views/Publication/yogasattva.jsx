import React, { useState } from 'react'
import './style.scss'
import { baseDomain, publicationAssests } from '../../assets/images/imageAsset'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PublicationDateNav from '../../Components/PublicationDateNav'
import PublicationNav from '../../Components/PublicationNav'

const Yogasattva = () => {
  let setting2 = {
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  // myimages
  const images = {
    2018: [
      baseDomain + publicationAssests.ythAssets1,
      baseDomain + publicationAssests.ythAssets2,
      baseDomain + publicationAssests.ythAssets3,
      baseDomain + publicationAssests.ythAssets4,
      baseDomain + publicationAssests.ythAssets5,
      baseDomain + publicationAssests.ythAssets6,
    ],
    2019: [
      baseDomain + publicationAssests.ythAssets7,
      baseDomain + publicationAssests.ythAssets8,
      baseDomain + publicationAssests.ythAssets9,
      baseDomain + publicationAssests.ythAssets10,
      baseDomain + publicationAssests.ythAssets11,
      baseDomain + publicationAssests.ythAssets12,
    ],
    2020: [
      baseDomain + publicationAssests.ythAssets13,
      baseDomain + publicationAssests.ythAssets14,
      baseDomain + publicationAssests.ythAssets15,
      baseDomain + publicationAssests.ythAssets16,
      baseDomain + publicationAssests.ythAssets17,
      baseDomain + publicationAssests.ythAssets18,
    ],
    2021: [
      baseDomain + publicationAssests.ythAssets19,
      baseDomain + publicationAssests.ythAssets20,
      baseDomain + publicationAssests.ythAssets21,
      baseDomain + publicationAssests.ythAssets22,
      baseDomain + publicationAssests.ythAssets23,
      baseDomain + publicationAssests.ythAssets24,
    ],
  }

  const [bold, setBold] = useState(1)

  return (
    <>
      <div className="yogasattva-container">
        <div className="background">
          <PublicationNav title={'yogasattva'} />
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
              src={baseDomain + publicationAssests.newsletterAssests1}
              alt=""
            />
            <img
              src={baseDomain + publicationAssests.newsletterAssests2}
              alt=""
            />
            <img
              src={baseDomain + publicationAssests.newsletterAssests3}
              alt=""
            />
            <img
              src={baseDomain + publicationAssests.newsletterAssests4}
              alt=""
            />
          </div>
          <div className="yogasattva-image">
            <img
              src={baseDomain + publicationAssests.newsletterAssests5}
              alt=""
            />
            <img
              src={baseDomain + publicationAssests.newsletterAssests6}
              alt=""
            />
            <img
              src={baseDomain + publicationAssests.newsletterAssests7}
              alt=""
            />
            <img
              src={baseDomain + publicationAssests.newsletterAssests8}
              alt=""
            />
          </div>
          <div className="yogasattva-image">
            <img
              src={baseDomain + publicationAssests.newsletterAssests9}
              alt=""
            />
            <img
              src={baseDomain + publicationAssests.newsletterAssests10}
              alt=""
            />
            <img
              src={baseDomain + publicationAssests.newsletterAssests11}
              alt=""
            />
            <img
              src={baseDomain + publicationAssests.newsletterAssests12}
              alt=""
            />
          </div>
          <div className="yogasattva-image">
            <img
              src={baseDomain + publicationAssests.newsletterAssests13}
              alt=""
            />
            <img
              src={baseDomain + publicationAssests.newsletterAssests14}
              alt=""
            />
            <img
              src={baseDomain + publicationAssests.newsletterAssests15}
              alt=""
            />
            <img
              src={baseDomain + publicationAssests.newsletterAssests16}
              alt=""
            />
          </div>
          <div className="yogasattva-image">
            <img
              src={baseDomain + publicationAssests.newsletterAssests17}
              alt=""
            />
            <img
              src={baseDomain + publicationAssests.newsletterAssests18}
              alt=""
            />
            <img
              src={baseDomain + publicationAssests.newsletterAssests19}
              alt=""
            />
            <img
              src={baseDomain + publicationAssests.newsletterAssests20}
              alt=""
            />
          </div>
        </Slider>
      </div>
      <div className="yogasattva-text">
        <p>
          The Yoga Institute, the world’s oldest organized yoga center, is
          spreading awareness of Yoga worldwide via free subscriptions to
          YogaSattva. Conceptualized to deliver news and updates of The Yoga
          Institute in a digital format, it also has an abundance of scholarly
          articles on Yoga along with the wisdom of Dr. Jayadeva and Hansaji.
          Pranee Yogendra, the editor of YogaSattva, contributes each month to
          give the classic magazine a fresh and dynamic flavor in this digital
          age.
        </p>
        <br />

        <p>
          Conceptualised to deliver news and updates of The Yoga Institute in a
          digital format, it will also have an abundance of scholarly articles
          on Yoga along with the wisdom of Dr. Jayadeva and Hansaji.
        </p>
        <p>
          <br />
          YogaSattva adds a new dimension to the world of Yoga in this digital
          era.
        </p>
      </div>
      <div className="previous-background">
        <div className="publication-nav">
          <PublicationDateNav bold={bold} setBold={setBold} />
        </div>
        <h3>Previous issues :</h3>

        {/* <Slider {...settings}> */}
        {/* {numberofSlides.map(() => { */}
        {/* return ( */}
        {/* {bold==1?{images}:<>transparse</>} */}

        <div>
          <div className="previous-container">
            {bold === 1 ? (
              <>
                {images[2018].map((image, i) => (
                  <div key={i} className="preivous-box">
                    <img src={image} alt="root-image" />
                  </div>
                ))}
              </>
            ) : bold === 2 ? (
              <>
                {images[2019].map((image, i) => (
                  <div key={i} className="preivous-box">
                    <img src={image} alt="root-image" />
                  </div>
                ))}
              </>
            ) : bold === 3 ? (
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
