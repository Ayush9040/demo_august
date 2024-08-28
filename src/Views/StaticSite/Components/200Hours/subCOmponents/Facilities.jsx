import React, { useRef, useState } from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Facilities = () => {

    const [activeSlide, setActiveSlide] = useState(0);
    const sliderRef = useRef(null);

    const slides = [
        {
            image: "https://oss-lms-prod.s3.ap-south-1.amazonaws.com/200ttc-master/facility1.jpeg",
            title: 'Counselling Rooms',
            description: 'Personalized sessions with Smt. Hansaji focused on self-reliance and personal growth.',
        },
        {
            image: "https://oss-lms-prod.s3.ap-south-1.amazonaws.com/200ttc-master/facility2.jpeg", title: 'Central Lawn',
            description: 'A tranquil, sacred space with the Kailashpati tree, ideal for meditation, and group study.',
        },
        {
            image: "https://oss-lms-prod.s3.ap-south-1.amazonaws.com/200ttc-master/facility1.jpeg",
            title: 'Counselling Rooms',
            description: 'Personalized sessions with Smt. Hansaji focused on self-reliance and personal growth.',
        },
        {
            image: "https://oss-lms-prod.s3.ap-south-1.amazonaws.com/200ttc-master/facility2.jpeg", title: 'Central Lawn',
            description: 'A tranquil, sacred space with the Kailashpati tree, ideal for meditation, and group study.',
        },
    ];

    const settingsFacilities = {
        dots: false,
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
        <div className="phase-4">

            <div className="l3-header text-gradient">Facilities of the Institute </div>
            <div className="p4-description-title">{slides[activeSlide]?.title}</div>
            <div className="p4-description">{slides[activeSlide]?.description} </div>

            <div className="slider-wrap">

                <Slider ref={sliderRef} {...settingsFacilities}>
                    {
                        slides.map((slide, index) => (
                            <div key={index} className="slide">
                                <div className='slider-img-wrap'>
                                    <img className='p4-slider-img' src={slide.image} alt={`Facility ${index + 1}`} />
                                </div>
                            </div>
                        ))
                    }
                </Slider>

            </div>

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

export default Facilities
