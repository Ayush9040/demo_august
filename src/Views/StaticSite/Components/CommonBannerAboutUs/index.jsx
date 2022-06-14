import React from 'react'
//import CommonBannerNavAboutUs from '../CommonBannerNavAboutUs'
import './styles.scss'



const CommonBannerAboutUs = ({
  Navigation,
  PageType,
  Heading,
  isOnlyBanner,
  isBlessing,
  children
}) => {
  console.log(PageType)

  const pageData = {
    blessings: `
      <p>Namaskar! 
      <i style='display:block;margin-top:20px;' >“Give every day the chance to become the most beautiful day of your life.”</i>
      </p>
      <p>
      Life is beautiful; it should be experienced with an abundance of joy and prosperity. But worry is a master-thief who constantly steals from us our moments of joy, our time with those we love most and our bliss. Caught in unending cycles of worry, we neglect what we should cherish most.  But the power to choose beauty, to choose joy, to make everyday beautiful is available to you in the art and science of Yoga. 
      With Yoga you can choose balance, invite equanimity and calibrate your life towards abundance.  
      </p>
      <p>Yoga: these four letters strung together with the matrix of your life can alter the foundations of your life and the genesis of your consciousness.  Give yoga a chance and watch it transform your life, work, relationships and your world. Timeless and perceptive, Yoga is there to bestow its grace upon you; all you have to do is embrace it. So come, enter the path of Yoga. Enter the path of balance, oneness and knowing. Yoga trains the mind towards all that is life-reinforcing, towards all that is positive.  This then allows the flow of success, prosperity and goodness into your life. Let positivity and beauty flow through every pore of your being, every single day! When you find within you happiness and peace, you find within you the consciousness to share these blessings.  Happiness flows from you to your family, to your neighborhood, to your country, to the world. </p>
      
      <p>A beautiful day within you will lead to a beautiful world outside you.</p>
     
      `,
  }

  return (
    <>
      <div
        className={`common-container ${PageType}-container ${
          !isOnlyBanner && 'common-container-responsive'
        }`}
      >
        {Navigation && (
          <div className={'navigation-container'}>
            {/* <CommonBannerNavAboutUs innerNav={true} /> */}
            {children}
          </div>
        )}
       
        {
          <div
            className={`banner-container ${
              !isOnlyBanner && 'banner-container-responsive'
            }`}
          >
            <div
              className={`why-text banner-text ${
                isBlessing ? 'blessing-text' : ''
              } `}
              style={isBlessing ? {} : { textAlign: 'center' }}
            >
              <div
                className="banner-heading about-heading"
                style={isBlessing ? {} : { margin: '0 auto' }}
              >
                {Heading}
                <div className="bottom-line"></div>
              </div>
              { Heading==='Overview' && <p>We are the oldest organized Yoga center in the world. Our legacy of over 100 years, which was started by Shri Yogendra Ji in 1918, is carried forward to this day. The Yoga Institute has incorporated the essence of all classical and traditional systems like Karma Yoga, Bhakti Yoga, Hatha Yoga, Mantra Yoga, Laya Yoga etc., so that people get the benefits of all of these rather than just one. Our beloved and esteemed Director, Dr. Hansaji Yogendra, spearheads the efforts of the Institute in her unique and powerful way. Hansama has touched the lives of millions through her graceful and simplistic teachings.</p> }
              {isBlessing && (
                <div dangerouslySetInnerHTML={{ __html: pageData[PageType] }} />
              )}
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default CommonBannerAboutUs
