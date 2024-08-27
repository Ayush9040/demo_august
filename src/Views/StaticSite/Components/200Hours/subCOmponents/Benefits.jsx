import React, { useRef, useState } from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Benefits = () => {

    const [activeSlide, setActiveSlide] = useState(0);
    const sliderRef = useRef(null);

    const slides = [
        {
            image: "https://oss-lms-prod.s3.ap-south-1.amazonaws.com/200ttc-master/benfit1.jpg",
            text: 'Tailored for those beginning a Yoga career or seeking profound personal growth.'
        },
        {
            image: "https://oss-lms-prod.s3.ap-south-1.amazonaws.com/200ttc-master/benefit2.jpg",
            text: 'Master the art of integrating yogic principles for effective lifestyle management.'
        },
        {
            image: "https://oss-lms-prod.s3.ap-south-1.amazonaws.com/200ttc-master/benfit1.jpg",
            text: 'Tailored for those beginning a Yoga career or seeking profound personal growth.'
        },
        {
            image: "https://oss-lms-prod.s3.ap-south-1.amazonaws.com/200ttc-master/benefit2.jpg",
            text: 'Master the art of integrating yogic principles for effective lifestyle management.'
        },
    ];

    const settingsBenefits = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1.1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '0px',
        beforeChange: (current, next) => setActiveSlide(next)
    };

    const handleDotClick = (index) => {
        setActiveSlide(index);
        sliderRef.current.slickGoTo(index);
    };

    return (
        <div className="phase-6">

            <div className="p6-header text-gradient">Benefits From the Course</div>

            <div className="slider-wrap">

                <Slider ref={sliderRef} {...settingsBenefits}>
                    {slides.map((slide, index) => (
                        <div key={index} className="slide">
                            <div className='slider-img-wrap'>
                                <img className='p4-slider-img' src={slide.image} alt={`Facility ${index + 1}`} />
                                <div className="p4-slider-img-gradient"></div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className='benefit-slide-text'>{slides[activeSlide].text}</div>

            <div className="slider-dots">
                {
                    slides.map((content, index) => (
                        <div
                            className={`slider-dot ${activeSlide === index ? 'slider-dot-active' : ''}`}
                            key={index}
                            onClick={() => handleDotClick(index)}
                        ></div>
                    ))
                }
            </div>

        </div>
    )
}

export default Benefits
