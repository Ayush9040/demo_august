import React, { useRef } from 'react'
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from "react";
import ParagraphTTC from '../../../common/paragraph/ParagraphTTC';

const Reviews = () => {

    const [activeIndex, setActiveIndex] = useState(0)
    const sliderRef = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 499);
    const [slides, setSlides] = useState([
        {
            image: '/images/200-hours/2001review.jpg',
            name: 'Tram Le',
            review: 'Completing this course with TYI has been life-changing. The teachers are exceptional, knowledgeable, dedicated, and deeply committed to our well-being. The Yogendra'
        },
        {
            image: '/images/200-hours/2002review.jpg',
            name: 'Shiny Muliyil',
            review: 'Understanding the essence of both theory and practice in Yoga became a revelation, fostering a newfound calmness and positivity. The training instilled discipline, introducing timely routines, healthy eating, and Sattvik food.'
        },
        {
            image: '/images/200-hours/2003review.jpg',
            name: 'Alana Bencivengo',
            review: 'The course was a deeply transformative experience physically, mentally and emotionally. I learned important techniques that I am continuing to integrate into my life. What I learned in the course will be a great tool for my physical therapy practice.'
        },
    ])

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 499);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const settingsReviews = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: false,
        pauseOnFocus: false,
        afterChange: (currentSlide) => {
            setActiveIndex(currentSlide);
            if (sliderRef.current) {
                sliderRef.current.slickPlay();
            }
        },
    };

    const changeSlide = (index) => {
        if (sliderRef.current) {
            setActiveIndex(index);
            sliderRef.current.slickGoTo(index);
        }
    };

    const nextSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const prevSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    return (
        <div className="phase-13">

            <div className="p13-header text-gradient">Reviews</div>
            <div className="p13-description">What the people says about us</div>


            <>
                {
                    !isMobile ?
                        <div className="review-container">
                            <Slider {...settingsReviews} >
                                {
                                    slides.map((ele, index) => (
                                        <div className='review-slider' key={index}>

                                            <img className='rev-img pointer' src="/icons/200-hours/Expand_left.svg" alt="al" onClick={() => prevSlide()} />

                                            <div className='slide-block'>
                                                <img src={ele.image} alt="" />
                                                <div className='name'>{ele.name}</div>
                                                <div className='desc'>
                                                    <ParagraphTTC count='150' fontSizeProp='14px' text={ele.review} />
                                                </div>
                                            </div>

                                            <img src="/icons/200-hours/chevron_right.svg" alt="" className='pointer' onClick={() => nextSlide()} />
                                        </div>
                                    ))
                                }
                            </Slider>

                            <div className='slider-dots mg-20-mob'>
                                {
                                    slides.map((ele, index) => (
                                        <div key={index} onClick={() => changeSlide(index)} className={index === activeIndex ? 'active-dot' : 'inactive-dot'}></div>
                                    ))
                                }
                            </div>
                        </div>
                        :
                        <div className="review-container">
                            {
                                slides.map((ele, index) => (
                                    <div className='review-slider-mobile' key={index}>
                                        <div className='slide-block'>
                                            <img src={ele.image} alt="" />
                                            <div className='name'>{ele.name}</div>
                                            <div className='desc'>
                                                <ParagraphTTC count='170' text={ele.review} />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                }
            </>

        </div>
    )
}

export default Reviews
