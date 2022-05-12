import React, { useState, useRef } from 'react'
import CommonBanner from '../../Components/Common-banner'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './style.scss'

import baseDomain,{ facilitiyAssets } from '../../assets/images/imageAsset'
const Facilities = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
    centerPadding: '20%',
    swipe: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  }

  const slider = useRef(null)
  let description =
    'To ensure absolute comfort to our students and sadhakas, we provide a host of facilities. You can avail of accommodation services, relax at the gazebo, meditate peacefully in the pods, shop merchandise at the Book Store, eat a sattvic meal at the Naivedyam, and a lot more. All our facilities have been specially designed to give you a blissful and tranquil experience. Explore below!'

  return (
    <div className="facilities-page-container">
      <CommonBanner
        isLeftContent={false}
        Logo={false}
        Navigation={true}
        PageType="facilities"
        Heading="Facilities"
        isOnlyBanner={false}
        innerNav={false}
        description={description}
      />
      <div className="facilities-navigation-lg">
        <ul>
          <li
            onClick={() => {
              slider.current.slickGoTo(0, false)
            }}
          >
            <span className={activeSlide === 0 && 'active'}>Hostels</span>
          </li>
          <li
            onClick={() => {
              slider.current.slickGoTo(1, false)
            }}
          >
            <span className={activeSlide === 1 && 'active'}>
              Conference Room
            </span>
          </li>
          <li
            onClick={() => {
              slider.current.slickGoTo(2, false)
            }}
          >
            <span className={activeSlide === 2 && 'active'}>Library</span>
          </li>
          <li
            onClick={() => {
              slider.current.slickGoTo(3, false)
            }}
          >
            <span className={activeSlide === 3 && 'active'}>Book Store</span>
          </li>
          <li
            onClick={() => {
              slider.current.slickGoTo(4, false)
            }}
          >
            <span className={activeSlide === 4 && 'active'}>Yogic Halls</span>
          </li>

          <li
            onClick={() => {
              slider.current.slickGoTo(5, false)
            }}
          >
            <span className={activeSlide === 5 && 'active'}>Rooftop Space</span>
          </li>
          <li
            onClick={() => {
              slider.current.slickGoTo(6, false)
            }}
          >
            <span className={activeSlide === 6 && 'active'}>
              Dining Hall – Naivedyam
            </span>
          </li>
          <li
            onClick={() => {
              slider.current.slickGoTo(7, false)
            }}
          >
            <span className={activeSlide === 7 && 'active'}>Nature Trail</span>
          </li>
          <li
            onClick={() => {
              slider.current.slickGoTo(8, false)
            }}
          >
            <span className={activeSlide === 8 && 'active'}>Gazebo</span>
          </li>
          <li
            onClick={() => {
              slider.current.slickGoTo(9, false)
            }}
            
          >
            <span className={activeSlide ===9 && 'active'}>Kailashpati Tree
            </span>
          </li>
        </ul>
      </div>
      <div className="facilities-info">
        <Slider
          ref={slider}
          {...settings}
          beforeChange={(oldIndex, newIndex) => {
            setActiveSlide(newIndex)
          }}
        >
          <div className="facilities-slide">
            <div className="facility-image">
              <img src={baseDomain + facilitiyAssets.facilitiyAssets1} />
            </div>
            <div className="facility-description">
              <h2>Hostels</h2>
              <p>
                Explore our newly renovated rooms that are spacious, ventilated,
                well-lit and adequately furnished. We have different types of
                accommodation options to help you have an enriching learning
                experience residing in our peaceful ambience. The Institute
                ensures that the students are comfortable and are provided with
                a congenial environment to pursue their yogic interests.
              </p>
            </div>
          </div>
          <div className="facilities-slide">
            <div className="facility-image">
              <img src={baseDomain + facilitiyAssets.facilitiyAssets2} />
            </div>
            <div className="facility-description">
              <h2>Conference Room</h2>
              <p>
                The spacious and well-equipped conference room can be availed
                for conducting meetings and discussions.
              </p>
            </div>
          </div>
          <div className="facilities-slide">
            <div className="facility-image">
              <img src={baseDomain + facilitiyAssets.facilitiyAssets3} />
            </div>
            <div className="facility-description">
              <h2>Library</h2>
              <p>
                Our newly renovated library, a scientifically designed space,
                hosts the world’s largest collection of texts and books on yoga,
                spirituality, and Indian Philosophy. There are more than 6,000
                books in various languages and on various subjects Samkhya
                philosophy, Ashtanga Yoga, Bhakti Yoga, Karma Yoga, Tantra Yoga,
                human psychology, encyclopedias etc. The carefully designed
                library creates the right atmosphere for your learning and
                knowledge.
              </p>
            </div>
          </div>
          <div className="facilities-slide">
            <div className="facility-image">
              <img src={baseDomain + facilitiyAssets.facilitiyAssets4} />
            </div>
            <div className="facility-description">
              <h2>Book Store</h2>
              <p>
                Check out our book store, a storehouse of a wide selection of
                publications by The Yoga Institute. Here, you will find books on
                various subjects like yoga, nutrition, motivation, self-help,
                inspiration written by the legendary Yogendra family. The store
                also provides yogic attire and mats for easy yoga sadhana.
                Explore the huge collection of our merchandise, souvenirs and
                remembrance items.
              </p>
            </div>
          </div>

          <div className="facilities-slide">
            <div className="facility-image">
              <img src={baseDomain + facilitiyAssets.facilitiyAssets5} />
            </div>
            <div className="facility-description">
              <h2>Yogic Halls</h2>
              <p>
                Our vast halls for yogic practice reverberate with powerful
                spiritual energy of more than 100 years. Come experience this
                energy and see the change within yourself.
              </p>
            </div>
          </div>
          <div className="facilities-slide">
            <div className="facility-image">
              <img src={baseDomain + facilitiyAssets.facilitiyAssets6} />
            </div>
            <div className="facility-description">
              <h2>Rooftop Space</h2>
              <p>
                The rooftop space is an open calm space surrounded by beautiful
                flowers that will create a perfect atmosphere to meditate. It is
                a place to breathe fully and embrace the vastness of the cosmos.
              </p>
            </div>
          </div>
          <div className="facilities-slide">
            <div className="facility-image">
              <img src={baseDomain + facilitiyAssets.facilitiyAssets7} />
            </div>
            <div className="facility-description">
              <h2>Dining Hall – Naivedyam</h2>
              <p>
                At Naivedyam, wholesome Sattvik meals are specially prepared and
                served four times a day. Come try a sattvik meal to experience
                the difference! This food will heal detox your system. These are
                carefully curated to enrich the yogic experience and help with
                practice.
              </p>
            </div>
          </div>
          <div className="facilities-slide">
            <div className="facility-image">
              <img src={baseDomain + facilitiyAssets.facilitiyAssets8} />
            </div>
            <div className="facility-description">
              <h2>Nature Trail</h2>
              <p>
                Walk through the beautiful nature paths filled with more than
                1000 different species of plants, trees and flowers and have a
                blissful experience immersed in the flora and fauna of the
                Institute.
              </p>
            </div>
          </div>
          <div className="facilities-slide">
            <div className="facility-image">
              <img src={baseDomain + facilitiyAssets.facilitiyAssets9} />
            </div>
            <div className="facility-description">
              <h2>Gazebo</h2>
              <p>
                One of the most special spaces at the Institute, the gazebo is a
                great place for deep meditation practice, group study, practice
                your asanas and pranayamas, amidst the soothing sounds of
                flowing water. Overlooked by the great kailashpati tree, it is
                also great opportunity to take in the peace at this relaxation
                area.
              </p>
            </div>
          </div>
          <div className="facilities-slide">
            <div className="facility-image">
              <img src={baseDomain+facilitiyAssets.facilitiyAssets10} />
            </div>
            <div className="facility-description">
              <h2>Kailashpati Tree
              </h2>
              <p>
              The favourite spot of most sadhakas on campus, the Kailashpati tree has graced us with its presence for many years. It is the best spot to meditate at, to soak in its spiritual vibrations. The lovely fragrance of its flowers is the perfect accompaniment to whatever activity you are pursuing under the tree. Come, take the divine blessings from the tree!
              </p>
            </div>
          </div>
        </Slider>
      </div>
      <div className="additional-info">
        <ul className="additional-info-nav">
          <li style={{ fontWeight: 'bold' }}>Additional information</li>
          <li style={{ borderRight: '0' }}>Rules and regulations</li>
        </ul>
        <div className="information">
          <ul>
            <li>Separate accommodation is available for men and women.</li>
            <li>
              Arrival and departure to and from The Yoga Institute should be
              between 7.00 a.m. to 7.00 p.m. only.
            </li>
            <li>
              Each spacious room is available on triple-sharing basis with an
              attached bathroom
            </li>
            <li>24 hours hot and cold water is available in the bathrooms.</li>
            <li>
              While the facility provides bedding and blankets, members are
              requested to bring their own clothing, towels and toiletries.
            </li>
            <li>
              Under-bed space has been fitted with internal storage capacity.
            </li>
            <li>
              Separate wardrobe for storage with lock-and-key facility
              available.
            </li>
          </ul>
          <ul>
            <li>
              Residential members are strictly not allowed to stay overnight
              outside the Institute.
            </li>
            <li>
              Washing of clothes in the premises is not permitted. Members can
              avail of the laundry facility outside the Institute at their own
              cost.
            </li>
            <li>
              Refrigeration facility is offered to store medicines and permitted
              eatables.{' '}
            </li>
            <li>
              However, storage and consumption of non-vegetarian food / alcohol
              is strictly prohibited on the Institute premises.
            </li>
            <li>
              Members are advised not to keep too much cash and valuables in
              their rooms.
            </li>
            <li>
              Smoking, consumption of alcohol and drugs are strictly prohibited.
            </li>
            <li>
              Students are expected to arrange their own travel to and from the
              Institute.
            </li>
          </ul>
          <ul>
            <li>All lights must be turned off at 10.30 p.m.</li>
            <li>
              A shared computer is available with internet connection. Laptops
              may be connected through the LAN cable provided by the Institute.
              WI-FI connection is not provided at the Institute.
            </li>
            <li>
              Capris, shorts, tank-tops, low-cut shirts, short and sleeveless
              T-shirts are not permitted outside the rooms as per the Institute
              dress code.
            </li>
            <li>
              4 meals will be provided per day at regular intervals in the
              Dining Hall. (i.e. Breakfast: 8:30 am lunch 12:00pm, evening
              snacks 4:30pm with herbal tea and dinner : 7:30pm).
            </li>
            <li>
              The food served is healthy, hygienic, nutritious and cooked in a
              minimum quantity of oil and spice. The cuisine is typically
              Indian. Cool and UV-filtered drinking water is available round the{' '}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Facilities
