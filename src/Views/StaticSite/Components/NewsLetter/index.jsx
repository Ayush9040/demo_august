import React, { useState, useEffect, useRef } from 'react'
import Heading from '../Heading'
import { newsletter } from '../../assets/icons/icon'
import CommonBtn from '../commonbtn'
import useOnScreen from '../../../../helpers/InterSection'
import './style.scss'
import { Link } from 'react-router-dom'
import { validateEmail } from '../../../../helpers'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import axios from 'axios'
import { authBaseDomain } from '../../../../Constants/appSettings'
import { getByYearYogsattva } from '../../Views/Publication/Views/Api'
import { handleCTSubscribeNewsletterClicked } from '../../../../CleverTap/subscribeNewsLetter'
const NewsLetter = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('')
  const [err, setErr] = useState({ name: false, email: false });
  const [sucess, setSuccess] = useState(false)
  const [yogsattvaData, setYogsattvaData] = useState([])
  const [width, setWidth] = useState(window.innerWidth);
  const getByYearYogsattvaData = async(year) => {
    try {
      const { data } = await getByYearYogsattva(year)
      setYogsattvaData(data.data)
      console.log(data?.data, 'qwewvregr')
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getByYearYogsattvaData(2025)
  }, [])
  const checkMail = async() => {
    const isValidEmail = validateEmail(mail);
    const isValidName = name.trim() !== '';
  
    if (!isValidEmail || !isValidName) {
      setErr({
        name: !isValidName,
        email: !isValidEmail
      });
      return;
    } else {
      const response = await axios.post(`${authBaseDomain}/ali/newslettermail`, { email: mail })
      if (response.data.success === true) {
        handleCTSubscribeNewsletterClicked({
          email: mail,
      })
        setSuccess(true)
      }
    }
  }

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    autoPlaySpeed: 500,
  }

  return (
    <div className="newsletter-container global-padding" id='Newsletter'>
      <div className="magezines">
        <div className="images">
          <div className="image">
            {/* <Link to="/yogasattva"> */}
              {/* {
                width > 768 && (
                  <div className="row">
                {yogsattvaData.slice(0,3).map((image, i) => (
                  <div key={i} className="container" onClick={
                    () => {
                      window.open(image?.pdfUrl, "_blank"); // open in new tab
                    }
                  }>
                    <img src={image.imageUrl} alt={image.title} />
                    <p>{image.title}</p>
                  </div>
                ))}
              </div>
                )
              } */}
            {/* </Link> */}
          </div>


          


        </div>

         
            <div className="experience-container" ref={expRef}>
                <Slider
                  {...settings}
                  ref={(slider) => {
                    sliderRef.current = slider
                  }}
                >
                  <div className="experience-carousel">
                    
                    <div className="carousel-image" >
                    
                      <img src={yogsattvaData[0]?.imageUrl} alt={yogsattvaData[0]?.title} style={{ marginBottom: '10px'}} onClick={
                    () => {
                      window.open(yogsattvaData[0]?.pdfUrl, "_blank"); // open in new tab
                    }
                  } />
                      <p style={{fontSize:'1.75rem'}}>{yogsattvaData[0]?.title}</p>
                    </div>
                  </div>


                  <div className="experience-carousel">
                    
                    <div className="carousel-image">
                    <img src={yogsattvaData[1]?.imageUrl} alt={yogsattvaData[1]?.title} style={{ marginBottom: '10px'}} onClick={
                      () => {
                        window.open(yogsattvaData[1]?.pdfUrl, "_blank");
                      }
                    } />
                    <p style={{fontSize:'1.75rem'}}>{yogsattvaData[1]?.title}</p>
                    </div>
                  </div>


                  <div className="experience-carousel">
                 
                  <div className="carousel-image">
                    <img src={yogsattvaData[2]?.imageUrl} alt={yogsattvaData[2]?.title} style={{ marginBottom: '10px'}} onClick={
                      () => {
                        window.open(yogsattvaData[2]?.pdfUrl, "_blank");
                      }
                    } />
                    <p style={{fontSize:'1.75rem'}}>{yogsattvaData[2]?.title}</p>
                    </div>
                  </div>

                  <div className="experience-carousel">
                    
                    <div className="carousel-image">
                    <img src={yogsattvaData[3]?.imageUrl} alt={yogsattvaData[3]?.title} style={{ marginBottom: '10px'}} onClick={
                      () => {
                        window.open(yogsattvaData[3]?.pdfUrl, "_blank");
                      }
                    } />
                    <p style={{fontSize:'1.75rem'}}>{yogsattvaData[3]?.title}</p>
                    </div>
                  </div>


                  {/* <div className="experience-carousel global-padding">
                    
                  <div className="carousel-image">
                    <img src={yogsattvaData[0]?.imageUrl} alt={yogsattvaData[0]?.title} />
                    <p>{yogsattvaData[0]?.title}</p>
                    </div>
                  </div> */}


                </Slider>
              </div>
          
        


        <div className="description">
          <p>
            Yoga Sattva is The Yoga Institute’s FREE official newsletter aimed
            at spreading yoga philosophy to mankind. It has scholarly articles
            by Dr Jayadeva and Smt. Hansaji.
          </p>
          <Link to="/yogasattva">
            <CommonBtn text={'Explore More'} />
          </Link>
        </div>
      </div>
      <div className="subscription">
        <Heading
          logo={newsletter}
          smallText={'Subscribe To Our'}
          largeText={'Newsletter'}
        />
        <div className="subscription-form">
          {sucess === false ? (
            <div className="subs_wrapper">
            <div className="name_wrapper">
              <p className="email_label">Name</p>
              <input
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                  setErr((prev) => ({ ...prev, name: false }));
                }}
                placeholder="Enter your name"
              />
              {err.name && <small>Please enter your name</small>}
            </div>
      
            <div className="email_wrapper">
              <p className="email_label">Email Address</p>
              <input
                type="email"
                onChange={(e) => {
                  setMail(e.target.value);
                  setErr((prev) => ({ ...prev, email: false }));
                }}
                placeholder="Enter your email address"
              />
              {err.email && <small>Please enter a valid email</small>}
            </div>
          </div>
            ) : <p>Thank You for subscribing</p>}
          {/* {err && <small>Please Enter Valid Email</small>} */}
        </div>
        {sucess === false && <div onClick={checkMail} >
          <CommonBtn text={'Subscribe Now'} />
        </div>}
      </div>
    </div>
  )
}
export default NewsLetter