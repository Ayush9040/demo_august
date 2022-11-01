import React, { useEffect, useRef } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Heading from '../Heading'
import { experience } from '../../assets/icons/icon'
import './style.scss'
import CommonBtn from '../commonbtn'
import baseDomain, { homeAssets } from '../../assets/images/imageAsset'
import { Link } from 'react-router-dom'
import useOnScreen from '../../../../helpers/InterSection'

const Experience = () => {
  const expRef = useRef(null)
  const sliderRef = useRef(null)

  const isInteracting = useOnScreen(expRef, { threshold: 0.5 })

  useEffect(() => {
    if (!sliderRef.current) return
    if (isInteracting) sliderRef.current.slickPlay()
    else {
      sliderRef.current.slickPause()
      sliderRef.current.slickGoTo(0)
    }
  }, [isInteracting])

  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoPlaySpeed: 5000,
  }

  return (
    <div className="experience-container" ref={expRef}>
      <Slider
        {...settings}
        ref={(slider) => {
          sliderRef.current = slider
        }}
      >
        <div className="experience-carousel global-padding">
          <div className="carousel-content">
            <Heading
              logo={experience}
              smallText={'The Yoga Institute'}
              largeText={'Experience'}
            />
            <div className="name-status">
              <h3>Shri Narendra Modi</h3>
              <h4>Honorable Prime Minister of India</h4>
              <p>
                <q>
                  Yoga has been a traditional lifestyle in every household of
                  our country since ancient times. It enhances inner calm,
                  peace, and brotherhood among the people. Heartiest
                  congratulations and best wishes to the organizers and all the
                  people joining the Centenary celebrations of the Yoga
                  Institute.
                </q>
              </p>
            </div>
            <Link to="/testimonials">
              <CommonBtn text={'View All'} />
            </Link>
          </div>
          <div className="carousel-image">
            <img src={`${baseDomain}${homeAssets.homeAsset56}`} alt="Modiji" />
          </div>
        </div>
        <div className="experience-carousel global-padding">
          <div className="carousel-content">
            <Heading
              logo={experience}
              smallText={'The Yoga Institute'}
              largeText={'Experience'}
            />
            <div className="name-status">
              <h3>Shri Ram Nath Kovind</h3>
              <h4>Former President of India</h4>
              <p>
                We are aware that “Lifestyle diseases are increasing in India.
                Those who do yoga from childhood (in school or college) will
                build up strength and immunity.“ I wish The Yoga Institute and
                everyone connected with it, all the best in their efforts to
                spread the goodness of Yoga and also congratulate them for
                carrying on the good work for the benefit of the people silently
                for the past ten decades
              </p>
            </div>
            <Link to="/testimonials">
              <CommonBtn text={'View All'} />
            </Link>
          </div>
          <div className="carousel-image">
            <img
              src={`${baseDomain}${homeAssets.homeAsset55}`}
              alt="Shri Ramnath Kovid"
            />
          </div>
        </div>
        <div className="experience-carousel global-padding">
          <div className="carousel-content">
            <Heading
              logo={experience}
              smallText={'The Yoga Institute'}
              largeText={'Experience'}
            />
            <div className="name-status">
              <h3>Shri M Venkaiah Naidu</h3>
              <h4>Former Vice President of India</h4>
              <p>
                <q>
                  It gives me immense joy to see the stupendous work done by the
                  Institute in the last 100 years which has brought them great
                  laurels and accolades. I congratulate the entire Yogendra
                  Family for living up to this noble task of spreading yoga
                  across the globe.
                </q>
              </p>
            </div>
            <Link to="/testimonials">
              <CommonBtn text={'View All'} />
            </Link>
          </div>
          <div className="carousel-image">
            <img src={`${baseDomain}${homeAssets.homeAsset57}`} alt="Naiduji" />
          </div>
        </div>
        <div className="experience-carousel global-padding">
          <div className="carousel-content">
            <Heading
              logo={experience}
              smallText={'The Yoga Institute'}
              largeText={'Experience'}
            />
            <div className="name-status">
              <h3>Amitabh Bachchan</h3>
              <h4>Padma Vibhushan, Actor</h4>
              <p>
                <q>
                  {`The classic book, 'Yoga for All' written by Dr. Hansaji is a
                  humble recognition of the need in modern society for guidance
                  towards a way of living that is in greater harmony with our
                  natural surroundings and more synergistic with our fellow
                  beings. (Foreword for 'Yoga for All' by Shri Amitabh Bachchan)`}
                </q>
              </p>
            </div>
            <Link to="/testimonials">
              <CommonBtn text={'View All'} />
            </Link>
          </div>
          <div className="carousel-image">
            <img
              src={`${baseDomain}${homeAssets.homeAsset58}`}
              alt="Amitabh Bachchan"
            />
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Experience
