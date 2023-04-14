import React, { useState, useEffect } from 'react'
import './style.scss'
//import baseDomain, { homeAssets } from '../../../assets/images/imageAsset'
// import CsrModal from '../CsrModal'
import { CsrIn } from '../insideData'
import CsrBlock from '../data'
import { useParams } from 'react-router-dom'
import { data } from '../../AluminiCarousel/data'
import InnerNavComponent from '../../InnerNavComponent'
import Heading from '../../Heading'
import Slider from 'react-slick'
// import { museumAssets } from '../../../assets/images/imageAsset'
import Blessing from '../../../assets/images/blessings.png'

const SingleCsr = () => {
  const csr = {
    title: 'single-csr',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '70px',
    autoplay: true,
    autoPlaySpeed: 5000,
  }
  const sliderImage = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerPadding: '0px',
    autoplay: false,
    autoPlaySpeed: 5000,
    
  }
  const { csrId } = useParams()
  const [pageData, setPageData] = useState({})

  useEffect(() => {
    setPageData(CsrIn.find((item) => item.id === csrId))
  }, [])

  // const [showModal, setShowModal] = useState(false)
  return (
    // <div className="csr-main-container">
    //   <InnerNavComponent abc={csr} />
    //   <div className="csr-heading">
    //     <h1>{pageData.title}</h1>
    //     <div className="csr-bottom-line"></div>
    //   </div>
    //   <div className="sub-div">
    //     <div className="sub-div-img">
    //       <img src={pageData.image} alt={pageData.title} />
    //     </div>
    //   </div>
    //   <div className="last-div">
    //     {pageData?.description?.map((item) => {
    //       return (
    //         <>
    //           <p>{item}</p>
    //         </>
    //       )
    //     })}
    //   </div>
    //   <div className="csr-single-btn">
    //     <button onClick={() => setShowModal(true)}> Support Us</button>
    //   </div>
    //   <CsrModal setShowModal={setShowModal} showModal={showModal} />
    // </div>
    <div className="main-container">
      <InnerNavComponent abc={csr} />
      <div className="content-container">
        <div className="text-container">
          <div className="title-heading">
            <Heading largeText={pageData.title} />
          </div>
          <div className="Text-box">
            <p>
              {pageData.description}
            </p>
          </div>
        </div>
        <div className="image-conatiner">
          <img src={pageData.image} alt="" />
        </div>
      </div>
      <div className="slide">
        <div className="options-conatiner">
          <Slider {...sliderImage}>
            <div className="options">
              <img className='blessing' src={Blessing}alt="virtual-gallery" />
            </div>
            <div className="options">
              <img className='blessing' src={Blessing}alt="virtual-gallery" />
            </div>
            <div className="options">
              <img className='blessing' src={Blessing}alt="virtual-gallery" />
            </div>
            <div className="options">
              <img className='blessing' src={Blessing}alt="virtual-gallery" />
            </div>
            <div className="options">
              <img className='blessing' src={Blessing}alt="virtual-gallery" />
            </div>
            <div className="options">
              <img className='blessing' src={Blessing}alt="virtual-gallery" />
            </div>
            <div className="options">
              <img className='blessing' src={Blessing}alt="virtual-gallery" />
            </div>
            <div className="options">
              <img className='blessing' src={Blessing}alt="virtual-gallery" />
            </div>
            <div className="options">
              <img className='blessing' src={Blessing}alt="virtual-gallery" />
            </div>
            <div className="options">
              <img className='blessing' src={Blessing}alt="virtual-gallery" />
            </div>
            <div className="options">
              <img className='blessing' src={Blessing}alt="virtual-gallery" />
            </div>
            <div className="options">
              <img className='blessing' src={Blessing}alt="virtual-gallery" />
            </div>
          </Slider>
        </div>
      </div>
      <div className="carousel-text">
        <div className="carousel-heading">
          <Heading largeText={'Testimonials'} />
        </div>
        <Slider {...settings}> 
          {data.map((item, idx) => {
            if (idx < 4) {
              return (
                <div key={item.id}>
                  <div className="alumini-carousel-data">
                    <div className="alumini-carousel-detail">
                      <div className="carousel-head">
                        {item.name},{item.post}
                      </div>
                      <p>{item.info}</p>
                    </div>
                  </div>
                </div>
              )
            }
          })}
        </Slider>
      </div>
      <div className="support">
        <div className="support-head">
          <Heading largeText={'Support Our Cause'} />
        </div>
        <div className="donate-text">
          <p>
            Let us be responsible and mindful for the well-being of people in
            our society.{' '}
          </p>
        </div>
        <div className="donate-btn">
          <button className="donate-button">Donate</button>
        </div>
      </div>
    </div>
  )
}

export default SingleCsr
