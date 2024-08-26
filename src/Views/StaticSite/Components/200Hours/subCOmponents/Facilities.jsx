import React, { useRef, useState } from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Facilities = () => {

    const [activeSlide, setActiveSlide] = useState(0);
    const sliderRef = useRef(null);

    const slides = [
        {
            image: 'https://s3-alpha-sig.figma.com/img/20f4/18f9/42fa68bdc68a4a108f14d10fac68394f?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p60q9w0~YaX9YXn3WQ-uDRToHzgXnr~LFsEWmuBGOgQJitMgFyXGW4Pv38O4Derj7YFCWC7tPMMWb6KwnCYyavv-2rAF~Yf4kwNAUnT4TLmMbYDLsX~Ej~MUtWCEexdPHBHgirLI-XNGiPrxOOz-VaGbEA21K4bfFqvudE4GzIdU0s7NfbmkxJf2zsRzIjZqb2Ip2Qh9XK81bm~W76MqLcLTaaNqXD63UONitCOahXcHVvCQ7tnRTfBkX~7em4ZDAF-4V6DHQkRC7GsAcI~bd9gJ5FXNBsY2aTbR3qud21vcmWVCfxv75P2tPYKyElqvevCbuSBfHPKmNL9dXvJPUQ__',
            title: 'Counselling Rooms',
            description: 'Personalized sessions with Smt. Hansaji focused on self-reliance and personal growth.',
        },
        {
            image: 'https://s3-alpha-sig.figma.com/img/8dfb/a45e/15de912fdb46ea85327f8d2592cda7cb?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pFouZa5~jn4DlWKPDVMkwiYuQKRLW~~wpSZzz8HENxtpI9~n72NFJsHty6ZgGNggbKfD6WGVp6K-4VglxMxp8d~CU6y6bTP9efCCyXeedCQrkr5tg6h40GMfyM8IsMnx4ZtdlAB7~cNFMqRmnAPD~-FadLKTQ2AWn3MAzkGG2F3W8pw15U1Trb6LGXnb6o6x1ChdYP9ldRNyT8KSJ8j8Ng5AvptvGhxxEXMrkaDarR1wtD7JwSQVtooVddT8MJoEFB4y-9fB0dVY~oJWudkNlhEZQSA2C0cdmkDzoeVPpHjJ5x-KoI27w2BiYAO9FQKfnBCSiLWeGlFhCc3oIrRHmQ__',
            title: 'Central Lawn',
            description: 'A tranquil, sacred space with the Kailashpati tree, ideal for meditation, and group study.',
        },
        {
            image: 'https://s3-alpha-sig.figma.com/img/20f4/18f9/42fa68bdc68a4a108f14d10fac68394f?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p60q9w0~YaX9YXn3WQ-uDRToHzgXnr~LFsEWmuBGOgQJitMgFyXGW4Pv38O4Derj7YFCWC7tPMMWb6KwnCYyavv-2rAF~Yf4kwNAUnT4TLmMbYDLsX~Ej~MUtWCEexdPHBHgirLI-XNGiPrxOOz-VaGbEA21K4bfFqvudE4GzIdU0s7NfbmkxJf2zsRzIjZqb2Ip2Qh9XK81bm~W76MqLcLTaaNqXD63UONitCOahXcHVvCQ7tnRTfBkX~7em4ZDAF-4V6DHQkRC7GsAcI~bd9gJ5FXNBsY2aTbR3qud21vcmWVCfxv75P2tPYKyElqvevCbuSBfHPKmNL9dXvJPUQ__',
            title: 'Counselling Rooms',
            description: 'Personalized sessions with Smt. Hansaji focused on self-reliance and personal growth.',
        },
        {
            image: 'https://s3-alpha-sig.figma.com/img/8dfb/a45e/15de912fdb46ea85327f8d2592cda7cb?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pFouZa5~jn4DlWKPDVMkwiYuQKRLW~~wpSZzz8HENxtpI9~n72NFJsHty6ZgGNggbKfD6WGVp6K-4VglxMxp8d~CU6y6bTP9efCCyXeedCQrkr5tg6h40GMfyM8IsMnx4ZtdlAB7~cNFMqRmnAPD~-FadLKTQ2AWn3MAzkGG2F3W8pw15U1Trb6LGXnb6o6x1ChdYP9ldRNyT8KSJ8j8Ng5AvptvGhxxEXMrkaDarR1wtD7JwSQVtooVddT8MJoEFB4y-9fB0dVY~oJWudkNlhEZQSA2C0cdmkDzoeVPpHjJ5x-KoI27w2BiYAO9FQKfnBCSiLWeGlFhCc3oIrRHmQ__',
            title: 'Central Lawn',
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
