import React, { useState } from 'react'
import CommonBanner from '../../Components/Common-banner'
import './style.scss'
// import magzine from "../../assets/images/magazine-1.png"
// import magzine1 from "../../assets/images/magazine-1.png"
// import magzine2 from "../../assets/images/magazine-2.png"
// import magzine3 from "../../assets/images/magazine-3.png"

// new images
// 2017
import yogaSattava1 from '../../assets/images/yogasattva/2017/yogasattava2017-1.jpg'
import yogaSattava2 from '../../assets/images/yogasattva/2017/yogasattava2017-2.jpg'
import yogaSattava3 from '../../assets/images/yogasattva/2017/yogasattava2017-3.jpg'
import yogaSattava4 from '../../assets/images/yogasattva/2017/yogasattava2017-4.jpg'

// 2018
import yogaSattava5 from '../../assets/images/yogasattva/2018/yogasattava2018-1.jpg'
import yogaSattava6 from '../../assets/images/yogasattva/2018/yogasattava2018-2.jpg'
import yogaSattava7 from '../../assets/images/yogasattva/2018/yogasattava2018-3.jpg'
import yogaSattava8 from '../../assets/images/yogasattva/2018/yogasattava2018-4.jpg'

// 2019
import yogaSattava9 from '../../assets/images/yogasattva/2019/yogasattava2019-1.jpg'
import yogaSattava10 from '../../assets/images/yogasattva/2019/yogasattava2019-2.jpg'
import yogaSattava11 from '../../assets/images/yogasattva/2019/yogasattava2019-3.jpg'
import yogaSattava12 from '../../assets/images/yogasattva/2019/yogasattava2019-4.jpg'

// 2020

import yogaSattava13 from '../../assets/images/yogasattva/2020/yogasattava2020-1.jpg'
import yogaSattava14 from '../../assets/images/yogasattva/2020/yogasattava2020-2.jpg'
import yogaSattava15 from '../../assets/images/yogasattva/2020/yogasattava2020-3.jpg'
import yogaSattava16 from '../../assets/images/yogasattva/2020/yogasattava2020-4.jpg'

// 2021

import yogaSattava17 from '../../assets/images/yogasattva/2021/yogasattava2021-1.jpg'
import yogaSattava18 from '../../assets/images/yogasattva/2021/yogasattava2021-2.jpg'
import yogaSattava19 from '../../assets/images/yogasattva/2021/yogasattava2021-3.jpg'
import yogaSattava20 from '../../assets/images/yogasattva/2021/yogasattava2021-4.jpg'

//
//yth2018
import ythImage1 from '../../assets/images/yogasattva/yth/2018/yth2018-1.jpg'
import ythImage2 from '../../assets/images/yogasattva/yth/2018/yth2018-2.jpg'
import ythImage3 from '../../assets/images/yogasattva/yth/2018/yth2018-3.jpg'
import ythImage4 from '../../assets/images/yogasattva/yth/2018/yth2018-4.jpg'
import ythImage5 from '../../assets/images/yogasattva/yth/2018/yth2018-5.jpg'
import ythImage6 from '../../assets/images/yogasattva/yth/2018/yth2018-6.jpg'

//yth 2019
import ythImage7 from '../../assets/images/yogasattva/yth/2019/yth2019-1.jpg'
import ythImage8 from '../../assets/images/yogasattva/yth/2019/yth2019-2.jpg'
import ythImage9 from '../../assets/images/yogasattva/yth/2019/yth2019-3.jpg'
import ythImage10 from '../../assets/images/yogasattva/yth/2019/yth2019-4.jpg'
import ythImage11 from '../../assets/images/yogasattva/yth/2019/yth2019-5.jpg'
import ythImage12 from '../../assets/images/yogasattva/yth/2019/yth2019-6.jpg'

// yth 2020
import ythImage13 from '../../assets/images/yogasattva/yth/2020/yth2020-1.jpg'
import ythImage14 from '../../assets/images/yogasattva/yth/2020/yth2020-2.jpg'
import ythImage15 from '../../assets/images/yogasattva/yth/2020/yth2020-3.jpg'
import ythImage16 from '../../assets/images/yogasattva/yth/2020/yth2020-4.jpg'
import ythImage17 from '../../assets/images/yogasattva/yth/2020/yth2020-5.jpg'
import ythImage18 from '../../assets/images/yogasattva/yth/2020/yth2020-6.jpg'

// yth 2021
import ythImage19 from '../../assets/images/yogasattva/yth/2021/yth2021-1.jpg'
import ythImage20 from '../../assets/images/yogasattva/yth/2021/yth2021-2.jpg'
import ythImage21 from '../../assets/images/yogasattva/yth/2021/yth2021-3.jpg'
import ythImage22 from '../../assets/images/yogasattva/yth/2021/yth2021-4.jpg'
import ythImage23 from '../../assets/images/yogasattva/yth/2021/yth2021-5.jpg'
import ythImage24 from '../../assets/images/yogasattva/yth/2021/yth2021-6.jpg'

// images array

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PublicationDateNav from '../../Components/PublicationDateNav'
import PublicationNav from '../../Components/PublicationNav'
const Yogasattva = () => {
  let settings = {
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }
  let setting2 = {
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }
  const numberofSlides = [1, 2]

  // myimages
  const images = {
    2018: [ythImage1, ythImage2, ythImage3, ythImage4, ythImage5, ythImage6],
    2019: [ythImage7, ythImage8, ythImage9, ythImage10, ythImage11, ythImage12],
    2020: [
      ythImage13,
      ythImage14,
      ythImage15,
      ythImage16,
      ythImage17,
      ythImage18,
    ],
    2021: [
      ythImage19,
      ythImage20,
      ythImage21,
      ythImage22,
      ythImage23,
      ythImage24,
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
            <img src='http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Publications/Yogsattava/Newsletter/2017/yogasattava2017-1.jpg' alt="" />
            <img src='http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Publications/Yogsattava/Newsletter/2017/yogasattava2017-2.jpg' alt="" />
            <img src='http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Publications/Yogsattava/Newsletter/2017/yogasattava2017-3.jpg' alt="" />
            <img src='http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Publications/Yogsattava/Newsletter/2017/yogasattava2017-4.jpg' alt="" />
          </div>
          <div className="yogasattva-image">
            <img src={yogaSattava5} alt="" />
            <img src={yogaSattava6} alt="" />
            <img src={yogaSattava7} alt="" />
            <img src={yogaSattava8} alt="" />
          </div>
          <div className="yogasattva-image">
            <img src={yogaSattava9} alt="" />
            <img src={yogaSattava10} alt="" />
            <img src={yogaSattava11} alt="" />
            <img src={yogaSattava12} alt="" />
          </div>
          <div className="yogasattva-image">
            <img src={yogaSattava13} alt="" />
            <img src={yogaSattava14} alt="" />
            <img src={yogaSattava15} alt="" />
            <img src={yogaSattava16} alt="" />
          </div>
          <div className="yogasattva-image">
            <img src={yogaSattava17} alt="" />
            <img src={yogaSattava18} alt="" />
            <img src={yogaSattava19} alt="" />
            <img src={yogaSattava20} alt="" />
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
                {images[2018].map((image,i) => (
                  <div key={i} className="preivous-box">
                    <img  src={image} alt="root-image" />
                  </div>
                ))}
              </>
            ) : bold === 2 ? (
              <>
                {images[2019].map((image,i) => (
                  <div  key={i} className="preivous-box">
                    <img src={image} alt="root-image" />
                  </div>
                ))}
              </>
            ) : bold === 3 ? (
              <>
                {images[2020].map((image,i) => (
                  <div key={i} className="preivous-box">
                    <img src={image} alt="root-image" />
                  </div>
                ))}
              </>
            ) : (
              <>
                {images[2021].map((image,i) => (
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
