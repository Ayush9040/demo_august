import React, { useRef, useState } from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Benefits = () => {

    const [activeSlide, setActiveSlide] = useState(0);
    const sliderRef = useRef(null);

    const slides = [
        {
            image: 'https://s3-alpha-sig.figma.com/img/8926/794c/05283fc85d78f6c30f7f31d4a2190034?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QUb~uzK9xO~Cd9DrakvV1l8IAzd2SW5L8MQ~1nGHZd72AamTxa3uwQ-mXIcTawtBVvTufYv7Ga9K5V7rCPdrV4c90HDm0sHQIVu67ngGUhAN~Un3BUaYN2J9VWtw20TxRtjPS7E~XBaZzLNc9WKE-h6Y-a9YtjwpTuEEKNrACYOHcDkIgYpqBfU0ZD5w0ekgL~YpG5cAHHuKiKEQuCgVN~8Nnc4cbWbdaBXSExF~SBDtGQlO8o1yOdYMSA7JU-JPfcmT3xiwXxd70kfK1s34L2hqo5GeAzmcFaAY62a5ydkTmohOdvkkPRnfmAbMrDJg49SV5EMDfP7rGrJ92OTuLw__',
            text: 'Tailored for those beginning a Yoga career or seeking profound personal growth.'
        },
        {
            image: 'https://s3-alpha-sig.figma.com/img/82c0/d2f8/269ce71b60b996ec027304562626d2a1?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UyhQ8XmHW~HJVaFTkGIbMU88XUbUZ3rEkMYNwlIWEhDnN2xRfq2kSiVkFao60vTXkUPUVkRlHAWY~CKmQn68a0NdkXWKIZ4OLHE~kXXuzqR0XwSOrVXtFj6OHnalfKDjR8QlAXBvI1jPyX2slZR81KziofLDOB7pwHi1O~Kw0ttu4sCdJ7HBoFG7RrJpx1YpTu5eS6NUafKltQbC~bqFro5dLg4-Wkw3clRT9kzbDWq5D6bnAd8AMLCbzGjmJvNJDLMMMEcdr1-9NFB54dEhTE3wErJNc5-EqYWcvaur3Ldl~-voZGobtca7d08Sr0M8MZugVFsU8WEYWSJ1rb8wSw__',
            text: 'Master the art of integrating yogic principles for effective lifestyle management.'
        },
        {
            image: 'https://s3-alpha-sig.figma.com/img/8926/794c/05283fc85d78f6c30f7f31d4a2190034?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QUb~uzK9xO~Cd9DrakvV1l8IAzd2SW5L8MQ~1nGHZd72AamTxa3uwQ-mXIcTawtBVvTufYv7Ga9K5V7rCPdrV4c90HDm0sHQIVu67ngGUhAN~Un3BUaYN2J9VWtw20TxRtjPS7E~XBaZzLNc9WKE-h6Y-a9YtjwpTuEEKNrACYOHcDkIgYpqBfU0ZD5w0ekgL~YpG5cAHHuKiKEQuCgVN~8Nnc4cbWbdaBXSExF~SBDtGQlO8o1yOdYMSA7JU-JPfcmT3xiwXxd70kfK1s34L2hqo5GeAzmcFaAY62a5ydkTmohOdvkkPRnfmAbMrDJg49SV5EMDfP7rGrJ92OTuLw__',
            text: 'Tailored for those beginning a Yoga career or seeking profound personal growth.'
        },
        {
            image: 'https://s3-alpha-sig.figma.com/img/82c0/d2f8/269ce71b60b996ec027304562626d2a1?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UyhQ8XmHW~HJVaFTkGIbMU88XUbUZ3rEkMYNwlIWEhDnN2xRfq2kSiVkFao60vTXkUPUVkRlHAWY~CKmQn68a0NdkXWKIZ4OLHE~kXXuzqR0XwSOrVXtFj6OHnalfKDjR8QlAXBvI1jPyX2slZR81KziofLDOB7pwHi1O~Kw0ttu4sCdJ7HBoFG7RrJpx1YpTu5eS6NUafKltQbC~bqFro5dLg4-Wkw3clRT9kzbDWq5D6bnAd8AMLCbzGjmJvNJDLMMMEcdr1-9NFB54dEhTE3wErJNc5-EqYWcvaur3Ldl~-voZGobtca7d08Sr0M8MZugVFsU8WEYWSJ1rb8wSw__',
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
