import React, { useState } from 'react'
import './style.scss'
import baseDomain, {
  publicationAssests,
} from '../../../assets/images/imageAsset'
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
    title: 'yogasttav',
    color: 'white',
    menuColor: 'white',
    menuItems: [
      {
        innerTitle: 'yoga-health',
        url: '/yoga-and-total-health',
        name: 'Yoga and Total Health',
      },
      {
        innerTitle: 'yogasttav',
        url: '/yogasattva',
        name: 'Yogasattava',
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
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2017/yogasattva-july2017.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets25}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2017/yogasattva-sep-2017.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets26}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2017/yogasattva-aug%202017.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets27}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2017/yogasattva-oct-2017.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets28}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2017/yogasattva-nov-2017.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets29}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2017/yogasattva-dec-2017.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets30}`,
      },
      // {
      //   pdf:'',
      //   img:`${baseDomain}${publicationAssests.ythAssets31}`,
      // }
    ],
    2018: [
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2018/yogasattva-april-2018.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets39}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2018/yogasattva-aug-2018.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets40}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2018/yogasattva-jan-%202018.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets41}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2018/yogasattva-july2018.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets42}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2018/yogasattva-may-2018.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets43}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2018/yogasattva-oct-2018.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets44}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2018/yogasattva-oct-2018.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets45}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2018/yogasattva-june-2018.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets46}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2018/yogasattva-march-2018.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets47}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2018/yogasattav-feb-%202018.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets48}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2018/yogasattva-nov-2018.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets49}`,
      },
    ],
    2019: [
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2019/yogasattva-apr-2019.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets50}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2019/yogasattva-aug-2019.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets51}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2019/yogasattva-feb-2019.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets52}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2019/yogasattva-jan%202019.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets53}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2019/yogasattva-july-2019.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets54}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2019/yogasattva-june-2019.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets55}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2019/yogasattva-mar-2019.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets56}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2019/yogasattva-may-2019.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets57}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2019/yogasattva-dec-2019.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets58}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2019/yogasattva-nov-2019.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets59}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2019/yogasattva-oct-2019.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets60}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2019/yogasattva-sept2019.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets61}`,
      },
    ],
    2020: [
      {
        pdf: '`${baseDomain}${publicationAssests.ythAssets73}`,',
        img: `${baseDomain}${publicationAssests.ythAssets73}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2020/yogasattva-june-2020.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets74}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2020/yogasattva-apr-2020.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets75}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2020/yogasattva-apr-2020.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets76}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2020/yogasattva-dec-2020.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets77}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2020/yogasattva-july-2020.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets78}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2020/yogasattva-jan-2020.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets79}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2020/yogasattva-may-2020.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets80}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2020/yogasattva-mar-2020.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets81}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2020/yogasattva-nov-2020.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets82}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2020/yogasattva-oct-2020.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets83}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2020/yogasattva-sep-2020.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets84}`,
      },
    ],
    2021: [
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2021/yogaSattva-mar-2021.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets62}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2021/yogasattva-apr-2021.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets63}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2021/yogasattva-aug-2021.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets64}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2021/yogasattva-dec%202021.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets65}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2021/yogasattva-feb-2021.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets66}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2021/yogasattva-jan-2021.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets67}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2021/yogasattva-july-2021.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets68}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2021/yogasattva-june-2021.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets69}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2021/yogasattva-may-2021.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets70}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2021/yogasattva-nov2021.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets71}`,
      },
      {
        pdf: 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/books/2021/yogasattva-sep-2021.pdf',
        img: `${baseDomain}${publicationAssests.ythAssets72}`,
      },
    ],
  }

  const [bold, setBold] = useState(5)

  const nextHandler = () => {
    if (bold === 1) {
      setBold(5)
    } else {
      setBold(bold - 1)
    }
  }

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
