import React from 'react'
import Slider from 'react-slick'
import './LocationDetails.scss'
import baseDomain from '../../assets/images/imageAsset.js'
import { santaCruz } from '../../assets/images/imageAsset.js'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import EnrlNowBtn from '../enrollNowBtn/index.jsx'
import CommonBtn from '../commonbtn/index.jsx'
import EnrollBtn from '../enrollBtn/index.jsx'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ReactGA from 'react-ga4';

const AlibaugCarousel = () => {
  const { isLoggedIn } = useSelector((state) => state.auth)

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    arrow: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '25%',
    cssEase: 'ease',
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          centerMode: false,

        },
      },
    ],
  }
  const addToCart = (title, extractedKey, timing) => {
    // Trigger CleverTap event on button click
    if (window?.clevertap) {
      window.clevertap.event.push("Course_Enroll_Click", {
        "Course_name": title,
        "Page_name": extractedKey,
        "Fees_Residential_OnCampus": 0,
        "Fees_Non_Residential_OnCampus": 10000,
        "Fees_Online": 0,
        "Timings": timing,
        "Page_Url": window.location.href,
        "Tenure": '2 day',
        "Course Category": 'Regular',
        "Course Mode": 'OFFLINE',
        "date_time_timestamp": new Date().toISOString()
      });
    } else {
      console.error("CleverTap is not initialized.");
    }

    ReactGA.event('add_to_cart', {
      currency: 'INR',
      value: 10000,
      items: [{
        item_name: title,
        item_id: title,
        price: 10000,
        quantity: 1
      }]
    });
    console.log('add_to_cart', {
      item_name: title,
      item_id: title,
      price: 10000,
      quantity: 1
    });
  }
  return (
    <>
      <div className="carosoul-main">
        <Slider {...settings}>
          <div className="carosoul-slide">
            <img src={`${baseDomain}${santaCruz.slide1}`} />
          </div>
          <div className="carosoul-slide">
            <img src={`${baseDomain}${santaCruz.slide2}`} />
          </div>
          <div className="carosoul-slide">
            <img src={`${baseDomain}${santaCruz.slide3}`} />
          </div>
        </Slider>
        <h2 style={{ marginTop: '32px' }}>Our Rejuvenating Retreats</h2>
      </div>
      {/* <div className="alibaug-container" style={{ marginTop: '38px' }}>
        <div className="alibaug-column alibaug-column-1">
          <img src="images/DetoxCleanse.jpg" />
        </div>
        <div className="alibaug-column alibaug-column-2">
          <h2>Detox and Cleanse Yoga Retreat</h2>
          <p>
            Start a refreshing self-care journey with calming Yoga postures meant for relaxation, along with natural, cleansing meals that focus on sattvic nutrition. Enjoy complete mind and body purification practices, supported by lessons on healthy living. Boost your well-being with energizing walks by the sea and ocean meditation sessions, creating a full detox experience that nurtures and renews you from the inside.
          </p>
          <div className="apply-address">
            <h5>Book Your Retreat Now</h5>
            {window.innerWidth <= 768 ?
              <h5>Date: <br /><span style={{ fontWeight: '400' }}>4th January 2025 to 5th January 2025 (1 Night, 2 Days)</span>
              </h5> : <h5>Date: <span style={{ fontWeight: '400' }}>4th January 2025 to 5th January 2025 (1 Night, 2 Days)</span>
              </h5>}
            <h5>
              Cost:  <span style={{ fontWeight: '400' }}>Rs. 10,000/- (Per Person – Inclusive of 8 Meals)</span>
            </h5>
            <h5>Time:  <span style={{ fontWeight: '400' }}>8:00 AM (4th) to 7:00 PM (5th)</span></h5>
            <h5>Call us at <a href='tel: + 91 7738155500'>+ 91 7738155500</a>  or email us at <a href='mailto:info@theyogainstitute.org'>info@theyogainstitute.org</a></h5>
          </div>
          <Link
            to={
              isLoggedIn
                ? `/enrollment/detox-cleanse-yoga-retreat`///?date=${selectDate}
                : `/user/sign-in?location=detox-cleanse-yoga-retreat`//&date=${selectDate}
            }
          >
            <EnrollBtn text={'Book Now'} buttonAction={() => { addToCart('Detox and Cleanse Yoga Retreat', '/detox-cleanse-yoga-retreat', '8:00 AM (14th) to 7:00 PM (15th)') }} /></Link>
        </div>
      </div> */}

      <div className="alibaug-container img-rev">
        <div className="alibaug-column alibaug-column-2">
          <h2> Deep Dive Yoga and Meditation Retreat</h2>
          <p>
            Enhance your overall health by combining
            Yoga, mindfulness, and meditation. Engage in visualization and star-gazing meditations for profound relaxation, and study yogic principles from the Patanjali Yoga Sutras and Bhagavad Gita. Evening mantra chanting will improve your mindset, while introspection fosters personal development. Stress-relief methods and emotional well-being sessions will support mental health.
          </p>
          <div className="apply-address">
            <h5>Book Your Retreat Now</h5>
            <h5>Date: <span style={{ fontWeight: '400' }}>1st March 2025 to 2nd March 2025 (1 Night, 2 Days)</span>
            </h5>
            {/* {window.innerWidth <= 768 ? <h5>Dates: <br /> <span style={{ fontWeight: '400' }}> Retreat 1 - 21st December 2024 to 22nd December 2024 (1 Night, 2 Days)</span><br />
              <span style={{ fontWeight: '400', position: 'relative', top: '10px' }}> Retreat 2 - 11th January 2025 to 12th January 2025 (1 Night, 2 Days)</span>
            </h5> :
              <h5>Dates: <span style={{ fontWeight: '400' }}> Retreat 1 - 21st December 2024 to 22nd December 2024 (1 Night, 2 Days)</span><br />
                <span style={{ fontWeight: '400', marginLeft: '59.9px', lineHeight: '30px' }}> Retreat 2 - 11th January 2025 to 12th January 2025 (1 Night, 2 Days)</span>
              </h5>} */}
            <h5>
              Cost: <span style={{ fontWeight: '400' }}>Rs. 10,000/- (Per Person – Inclusive of 8 Meals)</span>
            </h5>
            <h5>Time: <span style={{ fontWeight: '400' }}>8:00 AM (1st) to 7:00 PM (2nd)</span></h5>
            <h5>Call us at <a href='tel: + 91 7738155500'>+ 91 7738155500</a>  or email us at <a href='mailto:info@theyogainstitute.org'>info@theyogainstitute.org</a></h5>
          </div>
          <Link
            to={
              isLoggedIn
                ? `/enrollment/deep-dive-yoga-meditation-retreat`///?date=${selectDate}
                : `/user/sign-in?location=deep-dive-yoga-meditation-retreat`//&date=${selectDate}
            }
          >
            <EnrollBtn text={'Book Now'} buttonAction={() => { addToCart('Deep Dive Yoga and Meditation Retreat', '/deep-dive-yoga-meditation-retreat', '8:00 AM (1st) to 7:00 PM (2nd)') }} /></Link>
        </div>
        <div className="alibaug-column alibaug-column-1">
          <img src="images/Meditate_1.jpg" />
        </div>

      </div>

      <div className="alibaug-container">
        <div className="alibaug-column alibaug-column-1">
          <img src="images/Forest_2.jpg" />
        </div>
        <div className="alibaug-column alibaug-column-2">
          <h2>Forest Yoga Retreat</h2>
          <p>
            Reconnect with nature and find inner peace by practicing asanas, meditation, and refreshing walks in the forest. Participate in beachside classes, take a break from technology, learn deep relaxation methods, and attend workshops on emotional well-being. Evening activities inspired by nature will help improve balance, while providing a refreshing break from daily stress.
          </p>
          <div className="apply-address">
            <h5>Book Your Retreat Now</h5>
            {window.innerWidth <= 768 ? <h5>Dates: <br /> <span style={{ fontWeight: '400' }}> Retreat 1 - 1st February 2025 to 2nd February 2025 (1 Night, 2 Days)</span><br />
              <span style={{ fontWeight: '400', position: 'relative', top: '10px' }}> Retreat 2 -22nd February 2025 to 23rd February 2025 (1 Night, 2 Days)</span><br />
              <span style={{ fontWeight: '400', position: 'relative', top: '10px' }}> Retreat 3 - 8th March 2025 to 9th March 2025 (1 Night, 2 Days)</span><br />
              <span style={{ fontWeight: '400', position: 'relative', top: '10px' }}> Retreat 4 - 22nd March 2025 to 23rd March 2025 (1 Night, 2 Days)</span>
            </h5> :
              <h5>Dates: <span style={{ fontWeight: '400' }}> Retreat 1 - 1st February 2025 to 2nd February 2025 (1 Night, 2 Days)</span><br />
                <span style={{ fontWeight: '400', marginLeft: '59.9px', lineHeight: '30px' }}> Retreat 2 -22nd February 2025 to 23rd February 2025 (1 Night, 2 Days)</span><br />
                <span style={{ fontWeight: '400', marginLeft: '59.9px', lineHeight: '30px' }}> Retreat 3 - 8th March 2025 to 9th March 2025 (1 Night, 2 Days)</span><br />
                <span style={{ fontWeight: '400', marginLeft: '59.9px', lineHeight: '30px' }}> Retreat 4 - 22nd March 2025 to 23rd March 2025 (1 Night, 2 Days)</span>
              </h5>}
            <h5>
              Cost: <span style={{ fontWeight: '400' }}>Rs. 10,000/- (Per Person – Inclusive of 8 Meals)</span>
            </h5>
            <h5>Time: <span style={{ fontWeight: '400' }}>8:00 AM (Day 1) to 7:00 PM (Day 2)</span></h5>
            <h5>Call us at <a href='tel: + 91 7738155500'>+ 91 7738155500</a>  or email us at <a href='mailto:info@theyogainstitute.org'>info@theyogainstitute.org</a></h5>
          </div>
          <Link
            to={
              isLoggedIn
                ? `/enrollment/forest-yoga-retreat`///?date=${selectDate}
                : `/user/sign-in?location=forest-yoga-retreat`//&date=${selectDate}
            }
          >
            <EnrollBtn text={'Book Now'} buttonAction={() => { addToCart('Forest Yoga Retreat', '/forest-yoga-retreat', '8:00 AM (Day 1) to 7:00 PM (Day 2)') }} /></Link>
        </div>

      </div>

      <div className="alibaug-container img-rev">
        <div className="alibaug-column alibaug-column-2">
          <h2>Healthy Weight Loss & Wellness Retreat</h2>
          <p>
            Embark on a transformative journey towards sustainable weight loss and holistic wellness through a balanced approach that combines guided weight-loss focused Yoga sessions, customized pranayama and relaxation techniques, and nutritional workshops on mindful eating and sustainable weight management. Enjoy nourishing, organic, low-calorie Sattvik meals that support detoxification, while rejuvenating your mind and body with beach walks and ocean-side meditation. This comprehensive experience fosters a refreshed, mindful lifestyle that promotes lasting wellness and vitality.
          </p>
          <div className="apply-address">
            <h5>Book Your Retreat Now</h5>
            {window.innerWidth <= 768 ? <h5>Dates: <br /> <span style={{ fontWeight: '400' }}> Retreat 1 - 25th January 2025 to 26th January 2025 (1 Night, 2 Days)</span><br />
              <span style={{ fontWeight: '400', position: 'relative', top: '10px' }}> Retreat 2 - 8th February 2025 to 9th February 2025 (1 Night, 2 Days)</span><br />
              <span style={{ fontWeight: '400', position: 'relative', top: '10px' }}> Retreat 3 - 15th March 2025 to 16th March 2025 (1 Night, 2 Days)</span>
            </h5> :
              <h5>Dates: <span style={{ fontWeight: '400' }}> Retreat 1 - 25th January 2025 to 26th January 2025 (1 Night, 2 Days)</span><br />
                <span style={{ fontWeight: '400', marginLeft: '59.9px', lineHeight: '30px' }}> Retreat 2 - 8th February 2025 to 9th February 2025 (1 Night, 2 Days)</span><br />
                <span style={{ fontWeight: '400', marginLeft: '59.9px', lineHeight: '30px' }}> Retreat 3 - 15th March 2025 to 16th March 2025 (1 Night, 2 Days)</span>
              </h5>}
            <h5>
              Cost: <span style={{ fontWeight: '400' }}>Rs. 10,000/- (Per Person – Inclusive of 8 Meals)</span>
            </h5>
            <h5>Time: <span style={{ fontWeight: '400' }}>8:00 AM (Day 1) to 7:00 PM (Day 2)</span></h5>
            <h5>Call us at <a href='tel: + 91 7738155500'>+ 91 7738155500</a>  or email us at <a href='mailto:info@theyogainstitute.org'>info@theyogainstitute.org</a></h5>
          </div>
          <Link
            to={
              isLoggedIn
                ? `/enrollment/healthy-weightloss-wellness-retreat`///?date=${selectDate}
                : `/user/sign-in?location=healthy-weightloss-wellness-retreat`//&date=${selectDate}
            }
          >
            <EnrollBtn text={'Book Now'} buttonAction={() => { addToCart('Deep Dive Yoga and Meditation Retreat', '/deep-dive-yoga-meditation-retreat', '8:00 AM (Day 1) to 7:00 PM (Day 2)') }} /></Link>
        </div>
        <div className="alibaug-column alibaug-column-1">
          <img src="images/Health_3.jpg" />
        </div>

      </div>

      <div className="alibaug-container">
        <div className="alibaug-column alibaug-column-1">
          <img src="images/2-Day.jpg" />
        </div>
        <div className="alibaug-column alibaug-column-2">
          <h2>2-Days Relax & Restore Yoga Retreat</h2>
          <p>
            Our 2-day yoga retreat offers a variety of activities to promote relaxation and mindfulness. Experience sunrise pranayama and meditation at Kihim Beach, followed by gentle asanas to release tension. Enjoy deep relaxation yoga techniques, a digital detox, and a guided nature walk with breath awareness. Savor sattvik meals during mindful eating sessions, and experience silence (Mauna) for self-reflection. Engage in journaling for emotional wellness, mantra chanting for healing, and unwind with bonfire conversations. Practice pranayama to ensure restful sleep, leaving you fully restored.
          </p>
          <div className="apply-address">
            <h5>Book Your Retreat Now</h5>
            {window.innerWidth <= 768 ? <h5>Dates: <br /> <span style={{ fontWeight: '400' }}> Retreat 1 - 1st February 2025 to 2nd February 2025 (1 Night, 2 Days)</span><br />
              <span style={{ fontWeight: '400', position: 'relative', top: '10px' }}> Retreat 2 -22nd February 2025 to 23rd February 2025 (1 Night, 2 Days)</span><br />
              <span style={{ fontWeight: '400', position: 'relative', top: '10px' }}> Retreat 3 - 8th March 2025 to 9th March 2025 (1 Night, 2 Days)</span><br />
              <span style={{ fontWeight: '400', position: 'relative', top: '10px' }}> Retreat 4 - 22nd March 2025 to 23rd March 2025 (1 Night, 2 Days)</span>
            </h5> :
              <h5>Dates:
                <span style={{ fontWeight: '400' }}> 15th February 2025 to 16th February 2025 (1 Night, 2 Days)</span>
              </h5>}
            <h5>
              Cost: <span style={{ fontWeight: '400' }}>Rs. 10,000/- (Per Person – Inclusive of 8 Meals)</span>
            </h5>
            <h5>Time: <span style={{ fontWeight: '400' }}>8:00 AM (Day 1) to 7:00 PM (Day 2)</span></h5>
            <h5>Call us at <a href='tel: + 91 7738155500'>+ 91 7738155500</a>  or email us at <a href='mailto:info@theyogainstitute.org'>info@theyogainstitute.org</a></h5>
          </div>
          <Link
            to={
              isLoggedIn
                ? `/enrollment/2-days-relax-restore-yoga-retreat`///?date=${selectDate}
                : `/user/sign-in?location=2-days-relax-restore-yoga-retreat`//&date=${selectDate}
            }
          >
            <EnrollBtn text={'Book Now'} buttonAction={() => { addToCart('2-Days Relax & Restore Yoga Retreat', '/2-days-relax-restore-yoga-retreat', '8:00 AM (15th) to 7:00 PM (16th)') }} /></Link>
        </div>

      </div>

      <div className="alibaug-container">
        <div className="alibaug-column alibaug-column-1">
          <img src={`${baseDomain}${santaCruz.apply}`} />
        </div>
        <div className="alibaug-column alibaug-column-2">
          <h2>Facilities</h2>
          <div className="apply-address">
            <h5 style={{ fontSize: '2.2rem' }}>Accommodation</h5>
            <div style={{ fontSize: '2rem', marginLeft: '3rem' }}>
              <ul>
                <li>Spacious rooms with herbal décor</li>
                <li>Comfortable king-sized or dual beds</li>
                <li>Private lavatories with eco-friendly toiletries</li>
                <li>Air-conditioning and ceiling fans for added comfort</li>
                <li>Retreat prices includes accommodation on a double occupancy basis where one room is shared between 2 members
                </li>
                <li>
                  Private Room alternatives can be requested & will be subject to extra charges and availability
                </li>
              </ul>
            </div>
            <h5 style={{ fontSize: '2.2rem' }}>Dining</h5>
            <div style={{ fontSize: '2rem', marginLeft: '3rem' }}>
              <ul>
                <li>Delicious, healthy, and nourishing sattvic food </li>
                <li>Completely Plant-based, Ayurvedic-stimulated meals made with regionally sourced elements</li>
                <li>Detox juices and clean herbal teas to energize and rejuvenate
                </li>
              </ul>
            </div>
            <h5 style={{ fontSize: '2.2rem' }}>Travel</h5>
            <div style={{ fontSize: '2rem', marginLeft: '3rem' }}>
              <ul>
                <li>Close to Kihim Beach</li>
                <li>Just a ninety-minute drive from Mumbai</li>
              </ul>
            </div>
          </div>

          <h2 style={{ marginTop: '3rem' }}>Why Choose TYI Alibaug Retreat Centre? </h2>
          <div className="apply-address">
            <p style={{ fontSize: '2rem', marginBottom: '2rem' }}>At TYI Alibaug, we offer far more than just a retreat – we provide a transformative experience for the mind, body and spirit. </p>
            <div style={{ fontSize: '2rem', marginLeft: '3rem' }}>
              <ul>
                <li>Holistic Approach</li>
                <li>Experienced & Skilled Teachers</li>
                <li>Nourishing, Wholesome Sattvic Food</li>
                <li>Natural & Peaceful Environment </li>
                <li>Personalized Attention</li>
                <li>Affordable Wellness</li>
              </ul>
            </div>
          </div>

        </div>

      </div>



      <div style={{ padding: '0 7%' }}>
        <h2 style={{ marginTop: '3rem', textAlign: 'left' }}>How to Prepare for The Retreat? </h2>
        <div className="apply-address">
          <p style={{ fontSize: '2rem', marginBottom: '2rem' }}>The Yoga Institute, established more than 100 years ago in Mumbai, has now spread worldwide. Its latest retreat center in Alibaug provides a tranquil environment for intensive Yoga, meditation, and wellness activities.<br />
            In the calm surroundings of Alibaug, the Institute blends traditional methods with contemporary wellness practices, assisting you in achieving balance and tranquility. This retreat offers resources to reconnect with your authentic self and foster enduring inner peace.
          </p>
          <div style={{ fontSize: '2rem', marginLeft: '3rem' }}>
            <ul>
              <li>Mindset: Come with an open mind. Let go of stress and be in the present second.</li>
              <li>What to Pack: Comfortable clothes for Yoga, a water bottle, sunscreen, and a journal for reflection. Don’t forget to bring along your medications, if any.</li>
              <li>Dietary Preferences: If you have any unique nutritional needs, let us know in advance so we will cater for your necessities.</li>
              <li>Digital Detox: We advise turning off devices to completely immerse yourself in the retreat. Embrace mindfulness without any distractions.</li>
              <li>Arrival and Departure: Make sure to arrive on time to maximize your retreat experience.</li>
            </ul>
          </div>
        </div>

        <h2 style={{ marginTop: '3rem', textAlign: 'left', paddingBottom: '1.2rem' }}>Frequently Asked Questions (FAQs)</h2>
        <div className="apply-address">

          <div style={{ fontSize: '2rem', marginLeft: '3rem' }}>
            <ol>
              <li><b> What is included in the retreat cost?</b> <br />
                The retreat cost includes accommodation, 8 meals, all yoga and meditation sessions, workshops, and guided activities.</li>
              <br />
              <li><b>Can I attend the retreat if I’m a beginner in Yoga? </b><br />
                Our retreats are appropriate for beginners as well as yogis, experienced practitioners. Our teachers will guide you according to your stage of experience.</li>
              <br />
              <li><b>What sort of meals are provided? </b><br />
                Our meals are plant-based, Ayurvedic-stimulated, and sourced from regionally grown, natural ingredients. We focus on nourishment that supports detoxing and rejuvenation.</li>
              <br />
              <li><b>How far is TYI Alibaug from Mumbai? </b><br />
                TYI Alibaug is located just a ninety-minute drive from Mumbai, making it a convenient getaway for those looking for a relaxing and rejuvenating retreat.</li>
              <br />
              <li><b> Are the retreats appropriate for solo guests? </b><br />
                Yes, our retreats are best for solo travellers. Many of our guests come alone to enjoy self-growth and for introspection and reflection.</li>

              <br />
              <li><b> How can I get to Alibaug? </b><br />
                Alibaug is about a 90-minute drive from Mumbai. You can also take a 45-minute ferry from Gateway of India to Mandwa, and then a short drive to the centre.
              </li>
              <br />
              <li><b> Where is TYI Alibaug located?</b><br />
                TYI Alibaug is in the peaceful coastal town of Alibaug, near Mumbai. It&apos;s a quiet place surrounded by nature. The exact address is The Yoga Institute - Alibaug, Plot No. Eight/9, Kihim Beach, Navedar Navgaon, Alibaug - 402208.</li>
              <br />
              <li><b> Can I stay longer or arrive early? What will it cost?</b>
                <br />
                Yes, you can stay longer or arrive early if there is space. There will be extra charges, which you can confirm when you book.
              </li>
              <br />
              <li><b> Can my meals be adjusted for health issues?</b><br />
                Yes, we can adjust the meals to fit specific health needs or dietary requirements. Just let us know ahead of time.</li>
              <br />
              <li><b> Is this retreat good for senior citizens, children, or families?</b>
                <br />
                This retreat is best for adults. Senior citizens who are in good health are welcome, and families can also attend. </li>

            </ol>
          </div>
        </div>
        <h2 style={{ marginTop: '3rem', textAlign: 'left' }}>Contact Information</h2>
        <div style={{ fontSize: '2rem', marginLeft: '3rem', marginTop: '1rem' }}>
          <ul>
            <li><b>Phone:</b> +91-7738155500</li>
            <li><b>Email:</b> info@theyogainstitute.org</li>
            <li><b>Address:</b> The Yoga Institute - Alibaug, Plot No. Eight/9, Kihim Beach, Navedar Navgaon, Alibaug - 402208</li>
          </ul>
        </div>
      </div>
      <br />
      {/* 
      <div className="apply-main">
        <div className="apply-right">
          <h2>Facilities</h2>
          <div className="apply-duration">
            <p>
              Classes are of 1 hour duration + 15minutes of discussion on yogic
              topics and/or guidance on health conditions held on weekdays
              (Monday to Friday) and classes are for one and half hour on
              weekend (Saturday &amp; Sunday). You could opt for weekday’s
              classes and/or the weekends classes.
            </p>
            <p>
              A minimum attendance of 3 months is recommended, to experience the
              difference in your life. Participants can join on any day of the
              month.
            </p>
          </div>
          <div className="apply-timing">
            <h5>Weekdays classes</h5>
            <h5>Timings-</h5>
            <p>
              Morning Batches (6 days / 3 days a Week both option available)
            </p>
            <ol>
              <li>6:45 am - 8:00 am,</li>
              <li>8:00 am - 9:15 am,</li>
              <li>10:00 am - 11:15 am</li>
            </ol>
            <p className="apply-para">
              Evening Batches (Only 3 Days a Week available) –
            </p>
            <ol>
              <li>4:15 pm - 5:30 pm (Tuesday, Thursday, Saturday)</li>
              <li>6:15 pm - 7:30 pm (Monday, Wednesday, Friday)</li>
            </ol>
          </div>
          <div className="apply-packages">
            <h5>Fees and packages -</h5>
            <p>
              6 Days - ₹ 2,500/- (1 month), ₹ 6,700 (3 months), ₹ 13,000/-
              (6 months), ₹ 25,000/- (1 year)
            </p>
          </div>
          <div className="apply-timing">
            <h5>Weekend Classes -</h5>
            <h5>Timings -</h5>
            <p>Saturday - 9:30 am to 11:00 am</p>
            <p>Sunday - 9:30 am to 11:00 am</p>
          </div>
          <div className="apply-fees">
            <h5>Fees and packages -</h5>
            <p>
              ₹ 1,500/- (1 month), ₹ 4,000 (3 months), ₹ 7,600/- (6
              months), ₹ 15,000/- (1 year)
            </p>
          </div>
          <div className="apply-address">
            <h5>Address -</h5>
            <h5>The Yoga Institute, Matunga </h5>
            <h5>
              Sri Kanyaka Parmeshwari Temple, Plot No 403, Vasavi Nilayam,
              Telang Road, Matunga
            </h5>
            <h5>(CR),Mumbai</h5>
            <h5>Contact us - <a href='tel: + 91 9343517490'>+ 91 9343517490</a></h5>
          </div>
        </div>
        <div className="apply-details-left">
          <img src={`${baseDomain}${santaCruz.apply}`} />
        </div>
      </div> */}
    </>
  )
}

export default AlibaugCarousel
