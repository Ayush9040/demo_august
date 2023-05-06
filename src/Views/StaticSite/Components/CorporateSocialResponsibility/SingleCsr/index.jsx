import React, { useState, useEffect } from 'react'
import './style.scss'
import { CsrIn } from '../insideData'
import { useParams } from 'react-router-dom'
import { data } from '../../AluminiCarousel/data'
import InnerNavComponent from '../../InnerNavComponent'
import Heading from '../../Heading'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

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
    autoPlaySpeed: 3500,
  }
  let sliderImage = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: '0px',
    autoplay: false,
    autoPlaySpeed: 5000,
    responsive: [
      {
        breakpoint:420,
        settings : {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:true,
          infinite:true,
          initialSlide:2,
        }
      },
      {
        breakpoint:720,
        settings : {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows:true,
          infinite:true,
          
        }
      },
      {
        breakpoint:900,
        settings : {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows:true,
          infinite:true,
          initialSlide:2,
        }
      },
      {
        breakpoint:1200,
        settings : {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows:true,
          infinite:true,
          initialSlide:2,
        }
      }
    ]
  }
  const { csrId } = useParams()
  const [pageData, setPageData] = useState({})

  useEffect(() => {
    setPageData(CsrIn.find((item) => item.id === csrId))
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="main-container">
      <InnerNavComponent abc={csr} />
      <div className="title-heading">
        <Heading className="small" smallText={pageData.title} />
      </div>
      <div className="content-container">
        <div className="text-container">{pageData.description}</div>
        <div className="image-con">
          <img src={pageData.image} alt="coverImage" />
        </div>
      </div>
      <div className="slide">
        <div className="options-conatiner">
          <Slider {...sliderImage}>
            {pageData.sliderImg &&
              pageData.sliderImg.map((items) => {
                return (
                  <div key={items.csr} className="options">
                    <img
                      className="blessing"
                      src={items}
                      alt="virtual-gallery"
                    />
                  </div>
                )
              })}
          </Slider>
        </div>
      </div>
      <div className="back-caraousel">
        <div className="carousel-text">
          <div className="carousel-heading">
            <Heading smallText={'Testimonials'} />
          </div>
          <div className="arrows">
            <Slider {...settings}>
              {data.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="alumini-carousel-data">
                      <div className="alumini-carousel-detail">
                        <div className="carousel-head">
                          {item.name},{item.post}
                        </div>
                        <div className="donate-text">{item.info}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>
      </div>
      <div className="support">
        <div className="support-head">
          <Heading smallText={'Support Our Cause'} />
        </div>
        <div className="donate-text">
          Let us be responsible and mindful for the well-being of people in our
          society.
          <div className="donate-btn">
            <Link to="/donation-form">
              <button className="donate-button">Donate</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCsr
