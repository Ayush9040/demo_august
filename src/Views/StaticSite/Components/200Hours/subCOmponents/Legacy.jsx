import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick"
import Paragraph from '../../../common/paragraph/ParagraphTTC';

const Legacy = () => {

    const isMobile = window.innerWidth <= 499;
    const [activeIndex, setActiveIndex] = useState(0)
    const sliderRef = useRef(null);
    const [slides, setSlides] = useState([
        {
            image: 'https://oss-lms-prod.s3.ap-south-1.amazonaws.com/200ttc-master/yogendraji.png',
            name: 'Shri Yogendra ji (1897-1989)',
            designation: 'Founder',
            year: '1897 - 1989',
            about: 'Shri Yogendraji, guided by Paramhamsa Madhavadasji, democratized Yoga, making it accessible worldwide. Renowned as the Father of the Modern Yoga Renaissance, he introduced Dynamic Asanas and the Yogendra Rhythm, simplifying traditional techniques for everyday practitioners, including householders, and reviving ancient Upanishadic principles.'
        },
        {
            image: 'https://oss-lms-prod.s3.ap-south-1.amazonaws.com/200ttc-master/hansaji.jpeg',
            name: 'Dr. Hansaji Yogendra (1947-Present)',
            designation: 'Mother',
            year: '1912 - 2008',
            about: 'Dr. Hansaji Jayadeva Yogendra, Director of The Yoga Institute, is a leading figure in Yoga, recognized nationally and internationally. Under her leadership, the Institute became India’s first QCI-certified Yoga teacher training school. She has received accolades such as “Woman of the Year” and has influenced global Yoga practices.'
        },
        // {
        //     image: 'images/21-days/jayadeva.jpg',
        //     name: 'Dr. Jayadeva Yogendra (1929-2018)',
        //     designation: 'President',
        //     year: '1947',
        //     about: 'Dr. Jayadeva Yogendra, a dedicated Yoga scholar, pursued advanced degrees in Samkhya and Yoga. As President of The Yoga Institute, he worked to make Yoga accessible to all through publications and by integrating positive attitudes (Bhavas) into practice, inspiring many with his wisdom and compassion.'
        // },
        // {
        //     image: 'images/21-days/sitadevi.jpg',
        //     name: 'Mother Sitadevi Yogendra (1929-2008):',
        //     designation: 'Assistant Director',
        //     year: '1988',
        //     about: 'Smt. Sita Devi Yogendra, married to Shri Yogendraji, advanced Yoga for women as a medical practitioner and Secretary of the Institute. Her 1934 book, Yoga, Physical Education for Women, was pioneering, promoting inclusive Yoga practices and health education tailored for female practitioners.'
        // }
    ])

    const settingsLegacy = {
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
            // Restart autoplay after slide change
            if (sliderRef.current) {
                sliderRef.current.slickPlay();
            }
        },
    };

    const changeSlide = (index) => {

        if (sliderRef.current) {
            setActiveIndex(index)
            sliderRef.current.slickGoTo(index);
        }

    };


    return (
        <>

            <div className="phase-11">
                <div className="p11-header text-gradient">About Our Legendary Gurus</div>


                <Slider {...settingsLegacy} >
                    {
                        slides.map((ele, index) => (
                            <div className='legacy-container' key={index}>

                                <img className="gradient-overlay image-container" src={ele.image} alt="" />

                                <div className='about'>
                                    <div className='name'>{ele.name}</div>
                                    <Paragraph count={!isMobile ? '300' : '90'} text={ele.about} activeIndex={activeIndex} />
                                </div>

                            </div>
                        ))
                    }
                </Slider>

                <div className='slider-dots mg-20-mob'>
                    {
                        slides.map((ele, index) => (
                            <div key={index} onClick={() => changeSlide(index)} className={index == activeIndex ? 'active-dot' : 'inactive-dot'}></div>
                        ))
                    }
                </div>

            </div>
        </>
    );
}

export default Legacy
