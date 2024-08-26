import React, { useRef, useState } from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const YogaTeacher = () => {


    const [activeSlide, setActiveSlide] = useState(0);
    const sliderRef = useRef(null);

    const slides = [
        {
            image: 'https://s3-alpha-sig.figma.com/img/3186/7942/84fe9d8211b06b726c1adf0792072985?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qx57XKEGnJjvR9-96r-Ce~-pZXp721GoPXJiAZ2FclAvOscxQzhiZEM0d3kforPwnHT~RSKIDv7I6mCt~xWqlytVXsbtOxtwClnIqKXm5oY63uPuups5n2evTp1UGsW4figEbkVoAwrF7fs7M042yocawF32uLB40ccJ5a9ARl3uVtM8yFCzDF1bfljUT9WYsFIOKTcosqybJVf7v2oIxnb3mVQloZkqtIR8Ad6bpBW7NsaywIGjSuwdGZ1xchxhjiSUc-aAwRmzRgQB1WjWeHjRn7umMCswR4uIAGCIRKYAfxCULtpsYuvHznpyEdCmkuzoUn~3AIXF86nWqfR~Tw__',
            text: 'You can pursue advanced certifications or workshops to deepen their expertise.'
        },
        {
            image: 'https://yogajala.com/wp-content/uploads/3-49.jpg',
            text: 'Teaching fosters ongoing personal transformation and deeper self-awareness.'
        },
    ];

    const settings = {
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
        <div className="phase-8">

            <div className="p8-header text-gradient">Life of a Yoga Teacher</div>
            <div className="p8-sub-content">{slides[activeSlide].text}</div>

            <div className="slider-wrap">

                <Slider ref={sliderRef} {...settings}>
                    {
                        slides.map((slide, index) => (

                            <div key={index} className="slide">
                                <div className='slider-img-wrap'>
                                    <img className='p4-slider-img' src={slide.image} alt={`Facility ${index + 1}`} />
                                    {/* <div className="p4-slider-img-gradient"></div> */}
                                </div>
                            </div>
                            
                        ))
                    }
                </Slider>

            </div>

            {/* <div className='benefit-slide-text'>{slides[activeSlide].text}</div> */}

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

export default YogaTeacher
