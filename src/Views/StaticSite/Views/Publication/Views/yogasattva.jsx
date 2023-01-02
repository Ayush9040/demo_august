import React, { useState } from 'react'
import './style.scss'
import baseDomain, {
  publicationAssests,
  homeAssets,
} from '../../../assets/images/imageAsset'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PublicationDateNav from '../../../Components/PublicationDateNav'
// import PublicationNav from '../../Components/PublicationNav'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../../Constants/metaData.json'
import { useLocation } from 'react-router-dom'

const Yogasattva = () => {
  const location = useLocation()

  let setting2 = {
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }
  const publicationSattva = {
    title: 'yogasattva',
    color: 'white',
    menuColor: 'white',
    menuItems: [
      {
        innerTitle: 'yoga-health',
        url: '/yoga-and-total-health',
        name: 'Yoga and Total Health',
      },
      {
        innerTitle: 'yogasattva',
        url: '/yogasattva',
        name: 'Yogasattva',
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
        name: 'Library',
      },
    ],
  }

  // myimages
  const images = {
    2017: [
      {
        pdf: `${baseDomain}/books/2017/yogasattva-dec-2017.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets30}`,
      },
      {
        pdf: `${baseDomain}/books/2017/yogasattva-nov-2017.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets29}`,
      },
      {
        pdf: `${baseDomain}/books/2017/yogasattva-oct-2017.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets28}`,
      },
      {
        pdf: `${baseDomain}/books/2017/yogasattva-sep-2017.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets26}`,
      },

      {
        pdf: `${baseDomain}/books/2017/yogasattva-aug%202017.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets27}`,
      },
      {
        pdf: `${baseDomain}/books/2017/yogasattva-july2017.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets25}`,
      },
    ],
    2018: [
      {
        pdf: `${baseDomain}/books/2018/yogasattva-nov-2018.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets49}`,
      },
      {
        pdf: `${baseDomain}/books/2018/yogasattva-oct-2018.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets44}`,
      },
      {
        pdf: `${baseDomain}/books/2018/yogasattva-sep-2018.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets45}`,
      },
      {
        pdf: `${baseDomain}/books/2018/yogasattva-aug-2018.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets40}`,
      },
      {
        pdf: `${baseDomain}/books/2018/yogasattva-july2018.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets42}`,
      },
      {
        pdf: `${baseDomain}/books/2018/yogasattva-june-2018.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets46}`,
      },
      {
        pdf: `${baseDomain}/books/2018/yogasattva-may-2018.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets43}`,
      },
      {
        pdf: `${baseDomain}/books/2018/yogasattva-april-2018.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets39}`,
      },
      {
        pdf: `${baseDomain}/books/2018/yogasattva-march-2018.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets47}`,
      },

      {
        pdf: `${baseDomain}/books/2018/yogasattav-feb-%202018.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets48}`,
      },
      {
        pdf: `${baseDomain}/books/2018/yogasattva-jan-%202018.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets41}`,
      },
    ],
    2019: [
      {
        pdf: `${baseDomain}/books/2019/yogasattva-dec-2019.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets58}`,
      },
      {
        pdf: `${baseDomain}/books/2019/yogasattva-nov-2019.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets59}`,
      },
      {
        pdf: `${baseDomain}/books/2019/yogasattva-oct-2019.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets60}`,
      },
      {
        pdf: `${baseDomain}/books/2019/yogasattva-sept2019.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets61}`,
      },
      {
        pdf: `${baseDomain}/books/2019/yogasattva-aug-2019.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets51}`,
      },
      {
        pdf: `${baseDomain}/books/2019/yogasattva-july-2019.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets54}`,
      },
      {
        pdf: `${baseDomain}/books/2019/yogasattva-june-2019.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets55}`,
      },
      {
        pdf: `${baseDomain}/books/2019/yogasattva-may-2019.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets57}`,
      },
      {
        pdf: `${baseDomain}/books/2019/yogasattva-apr-2019.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets50}`,
      },
      {
        pdf: `${baseDomain}/books/2019/yogasattva-mar-2019.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets56}`,
      },

      {
        pdf: `${baseDomain}/books/2019/yogasattva-feb-2019.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets52}`,
      },
      {
        pdf: `${baseDomain}/books/2019/yogasattva-jan%202019.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets53}`,
      },
    ],
    2020: [
      {
        pdf: `${baseDomain}/books/2020/yogasattva-dec-2020.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets77}`,
      },
      {
        pdf: `${baseDomain}/books/2020/yogasattva-nov-2020.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets82}`,
      },
      {
        pdf: `${baseDomain}/books/2020/yogasattva-oct-2020.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets83}`,
      },
      {
        pdf: `${baseDomain}/books/2020/yogasattva-sep-2020.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets84}`,
      },
      {
        pdf: `${baseDomain}/books/2020/yogasattva-aug-2020.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets76}`,
      },
      {
        pdf: `${baseDomain}/books/2020/yogasattva-july-2020.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets78}`,
      },
      {
        pdf: `${baseDomain}/books/2020/yogasattva-june-2020.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets74}`,
      },
      {
        pdf: `${baseDomain}/books/2020/yogasattva-may-2020.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets80}`,
      },
      {
        pdf: `${baseDomain}/books/2020/yogasattva-apr-2020.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets75}`,
      },
      {
        pdf: `${baseDomain}/books/2020/yogasattva-mar-2020.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets81}`,
      },
      {
        pdf: `${baseDomain}/books/2020/yogasattava-feb-2020.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets73}`,
      },
      {
        pdf: `${baseDomain}/books/2020/yogasattva-jan-2020.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets79}`,
      },
    ],
    2021: [
      {
        pdf: `${baseDomain}/books/2021/yogasattva-dec%202021.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets65}`,
      },
      {
        pdf: `${baseDomain}/books/2021/yogasattva-nov2021.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets71}`,
      },
      {
        pdf: `${baseDomain}/books/2021/yogasattva-sep-2021.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets72}`,
      },
      {
        pdf: `${baseDomain}/books/2021/yogasattva-aug-2021.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets64}`,
      },
      {
        pdf: `${baseDomain}/books/2021/yogasattva-july-2021.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets68}`,
      },
      {
        pdf: `${baseDomain}/books/2021/yogasattva-june-2021.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets69}`,
      },
      {
        pdf: `${baseDomain}/books/2021/yogasattva-may-2021.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets70}`,
      },
      {
        pdf: `${baseDomain}/books/2021/yogasattva-apr-2021.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets63}`,
      },
      {
        pdf: `${baseDomain}/books/2021/yogaSattva-mar-2021.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets62}`,
      },
      {
        pdf: `${baseDomain}/books/2021/yogasattva-feb-2021.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets66}`,
      },
      {
        pdf: `${baseDomain}/books/2021/yogasattva-jan-2021.pdf`,
        img: `${baseDomain}${publicationAssests.ythAssets67}`,
      },
    ],
    2022: [
      {
        img:`${baseDomain}${publicationAssests.ythAssets91}`,
        pdf:`${baseDomain}/books/2022/Yogasattva-Dec-2022-Final.pdf`,
      },
      {
        img:`${baseDomain}${publicationAssests.ythAssets90}`,
        pdf:`${baseDomain}/books/2022/Yogasattva-Nov-2022.pdf`,
      },
      {
        img:`${baseDomain}${publicationAssests.ythAssets89}`,
        pdf:`${baseDomain}/books/2022/Yogasattva-Oct-2022.pdf`,
      },
      {
        img:`${baseDomain}${publicationAssests.ythAssets88}`,
        pdf:`${baseDomain}/books/2022/Yogasattva-Sept-2022.pdf`,
      },
      {
        img: `${baseDomain}${publicationAssests.ythAssets87}`,
        pdf: `${baseDomain}/books/newsletter/Yogasattva-August2022.pdf`,
      },
      {
        img: `${baseDomain}${publicationAssests.ythAssets86}`,
        pdf: `${baseDomain}/books/newsletter/Yogasattva-July2022.pdf`,
      },
      {
        img: `${baseDomain}${publicationAssests.ythAssets85}`,
        pdf: `${baseDomain}/books/newsletter/Yogasattva-June2022-%20v3.pdf`,
      },
      {
        img: `${baseDomain}${homeAssets.homeAsset69}`,
        pdf: `${baseDomain}/books/newsletter/Yogasattva-Mar-2022.pdf`,
      },
      {
        img: `${baseDomain}${homeAssets.homeAsset68}`,
        pdf: `${baseDomain}/books/newsletter/Yogasattva-Feb-2022.pdf`,
      },
      {
        img: `${baseDomain}${homeAssets.homeAsset67}`,
        pdf: `${baseDomain}/books/newsletter/Yogasattva-Jan-2022.pdf`,
      },
    ],
    2023: [
      {
        img: `${baseDomain}${publicationAssests.ythAssets92}`,
        pdf: `${baseDomain}/books/2023/Yogasattva-Jan-2023.pdf`,
      }
    ] }

  const [bold, setBold] = useState(7)

  const nextHandler = () => {
    if (bold === 1) {
      setBold(7)
    } else {
      setBold(bold - 1)
    }
  }

  return (
    <>
      {metaDataObj[location.pathname] && (
        <Helmet title={metaDataObj[location.pathname || '']?.title || ''} />
      )}
      <div className="yogasattva-container">
        <div className="background">
          {/* <PublicationNav title={`yogasattva`} /> */}
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
              alt="yogasattava-2017"
            />
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests2}`}
              alt="yogasattava-2017"
            />
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests3}`}
              alt="yogasattava-2017"
            />
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests4}`}
              alt="yogasattava-2017"
            />
          </div>
          <div className="yogasattva-image">
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests5}`}
              alt="yogasattava-2018"
            />
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests6}`}
              alt="yogasattava-2018"
            />
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests7}`}
              alt="yogasattava-2018"
            />
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests8}`}
              alt=""
            />
          </div>
          <div className="yogasattva-image">
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests9}`}
              alt="yogasattava-2019"
            />
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests10}`}
              alt="yogasattava-2019"
            />
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests11}`}
              alt="yogasattava-2019"
            />
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests12}`}
              alt="yogasattava-2019"
            />
          </div>
          <div className="yogasattva-image">
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests13}`}
              alt="yogasattava-2020"
            />
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests14}`}
              alt="yogasattava-2020"
            />
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests15}`}
              alt="yogasattava-2020"
            />
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests16}`}
              alt="yogasattava-2020"
            />
          </div>
          <div className="yogasattva-image">
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests17}`}
              alt="yogasattava-2021"
            />
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests18}`}
              alt="yogasattava-2021"
            />
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests19}`}
              alt="yogasattava-2021"
            />
            <img
              src={`${baseDomain}${publicationAssests.newsletterAssests20}`}
              alt="yogasattava-2021"
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
            <div id="previous-issue-scroll">
              {bold === 1 ? (
                <>
                  {images[2017].map((image, i) => (
                    <div key={i} className="preivous-box">
                      <a href={image.pdf} download>
                        <img src={image.img} alt="yogasattava-2017" />
                      </a>
                    </div>
                  ))}
                </>
              ) : bold === 2 ? (
                <>
                  {images[2018].map((image, i) => (
                    <div key={i} className="preivous-box">
                      <a href={image.pdf} download>
                        <img src={image.img} alt="yogasattava-2018" />
                      </a>
                    </div>
                  ))}
                </>
              ) : bold === 3 ? (
                <>
                  {images[2019].map((image, i) => (
                    <div key={i} className="preivous-box">
                      <a href={image.pdf} download>
                        <img src={image.img} alt="yogasattava-2019" />
                      </a>
                    </div>
                  ))}
                </>
              ) : bold === 4 ? (
                <>
                  {images[2020].map((image, i) => (
                    <div key={i} className="preivous-box">
                      <a href={image.pdf} download>
                        <img src={image.img} alt="yogasattava-2020" />
                      </a>
                    </div>
                  ))}
                </>
              ) : bold === 5 ? (
                <>
                  {images[2021].map((image, i) => (
                    <div key={i} className="preivous-box">
                      <a href={image.pdf} download>
                        <img src={image.img} alt="root-image" />
                      </a>
                    </div>
                  ))}
                </>
              ) : bold === 6 ? (
                <>
                  {images[2022].map((image, i) => (
                    <div key={i} className="preivous-box">
                      <a href={image.pdf} download>
                        <img src={image.img} alt="root-image" />
                      </a>
                    </div>
                  ))}
                </>
              ) : bold === 7 ? (
                <>
                  {images[2023].map((image, i) => (
                    <div key={i} className="preivous-box">
                      <a href={image.pdf} download>
                        <img src={image.img} alt="root-image" />
                      </a>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {images[2021].map((image, i) => (
                    <div key={i} className="preivous-box">
                      <a href={image.pdf} download>
                        <img src={image.img} alt="yogasattava-2021" />
                      </a>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
          <button className="yogasattva-btn" onClick={nextHandler}>
            Next
          </button>

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
