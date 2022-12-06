import React from 'react'
import './style.scss'
import CommonBanner from '../Common-banner'
import InnerNavComponent from '../InnerNavComponent'
import baseDomain from '../../assets/images/imageAsset'
import { useState } from 'react'
import { locateData } from './locate'
import { useEffect } from 'react'
import { locateAsset } from '../../assets/images/imageAsset'
import { useNavigate,useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../Constants/metaData.json'


const LocateUs = () => {

  const location = useLocation()

  const Locate = {
    title: 'volunteer-with-us',
    color: 'white',
    menuColor: 'white',
    menuItems: [],
  }

  const [bold, setBold] = useState('India')
  const [country, setCountry] = useState({})

  useEffect(() => {
    setCountry(locateData.find((item) => item.country === bold))

  }, [bold])

  const navigate = useNavigate()

  return (
    <>
      {metaDataObj[location.pathname] &&
        <Helmet
          title={metaDataObj[location.pathname || '']?.title || ''}
        />}
      <div className="locate_us_main">
        <CommonBanner
          isLeftContent={false}
          Logo={false}
          Navigation={true}
          PageType="Locate_Us"
          Heading="Locate Us"
          isOnlyBanner={false}
          innerNav={false}
          description={
            'Established in 1918 by Shri Yogendraji, The Yoga Institute is the world\'s oldest government recognised Yoga Centre. The founder\'s vision and mission was to make Yoga accessible to each and everyone across the globe. His aim was to enrich people\'s lives through the goodness of Yoga. With a rich legacy of more than 100 years, The Yoga Institute stands strong and is committed to transforming people\'s lives through the education of Yogic concepts, asanas, pranayama and kriyas. Through Yoga, one can experience a self-transformation and a 360 degree change in their perspective and approach to life. In light of this objective and with the aim to reach the masses, The Yoga Institute is available in India and other countries across the world. Come, experience and achieve a balance in your life and harmony in the mind, body and soul. The Yoga Institute is your true companion in finding yourself in this journey called Life.'}
          bannerImg={`${baseDomain}${locateAsset.locate}`}
          overlay="#295e5bD4"
        >
          <InnerNavComponent abc={Locate} />
        </CommonBanner>
        <div className="locate_container">
          <div className="Locate_heading">
          Branches
            <div className="bottom_line"></div>
          </div>
          <div className="locate_ul">
            <li>
              <span
                style={bold === 'India' ? { fontWeight: '700' } : {}}
                onClick={() => {
                  setBold('India')
                }}
              >
              India
              </span>
              {bold === 'India' && <div className="bottom_line2"></div>}
            </li>
            <li
              onClick={() => {
                setBold('Costa Rica')
              }}
            >
              <span style={bold === 'Costa Rica' ? { fontWeight: '700' } : {}}>
              Costa Rica
              </span>
              {bold === 'Costa Rica' && <div className="bottom_line2"></div>}
            </li>
            <li>
              <span
                style={bold === 'France' ? { fontWeight: '700' } : {}}
                onClick={() => {
                  setBold('France')
                }}
              >
              France
              </span>
              {bold === 'France' && <div className="bottom_line2"></div>}
            </li>
            <li>
              <span
                style={bold === 'Hong Kong' ? { fontWeight: '700' } : {}}
                onClick={() => {
                  setBold('Hong Kong')
                }}
              >
              Hong Kong
              </span>
              {bold === 'Hong Kong' && <div className="bottom_line2"></div>}
            </li>
            <li
              onClick={() => {
                setBold('Thailand')
              }}
            >
              <span style={bold === 'Thailand' ? { fontWeight: '700' } : {}}>
              Thailand
              </span>
              {bold === 'Thailand' && <div className="bottom_line2"></div>}
            </li>
            <li>
              <span
                style={bold === 'U.A.E.' ? { fontWeight: '700' } : {}}
                onClick={() => {
                  setBold('U.A.E.')
                }}
              >
              U.A.E.
              </span>
              {bold === 'U.A.E.' && <div className="bottom_line2"></div>}
            </li>
            <li>
              <span
                style={bold === 'Uruguay' ? { fontWeight: '700' } : {}}
                onClick={() => {
                  setBold('Uruguay')
                }}
              >
              Uruguay
              </span>
              {bold === 'Uruguay' && <div className="bottom_line2"></div>}
            </li>
            {/* <li>
            <span
              style={bold === 'Italy' ? { fontWeight: '700' } : {}}
              onClick={() => {
                setBold('Italy')
              }}
            >
              Italy
            </span>
            {bold === 'Italy' && <div className="bottom_line2"></div>}
          </li> */}

          </div>
          <div className="locate_country">
            <a href={country?.website}>
              <div className="locate_flag">
                <img src={country?.flag} alt="flag" />
              </div>
            </a>

            <div className="locate_address">
              <div className="locate_add">{country?.add}</div>
              <div className="locate_subadd"> {country?.subAdd}</div>
              <a className="locate_subadd" href={`tel:${country?.mobile}`}>
                {country?.mobile}
              </a>
              <a className="locate_subadd" href={`mailto:${country?.email}`}>
                {country?.email}
              </a>
              <a className="locate_subadd" href={country?.website}>
                {' '}
                {country?.website}
              </a>
              {/* <button className='country-details-btn'>Details</button> */}
            </div>
          </div>
          <div className="locate_sub_address_container">
            <div className="locate_container">
              {country?.branches?.map((items, index) => {
                return (
                  <div className="sub_state" key={index}>
                    <div className="bold_state">{items?.state}</div>
                    <div className="not_bold">{items?.notstate}</div>
                    <div className="not_bold">
                      {
                        items?.phone?.map((number,i)=>i=== 0 ? <a href={`tel:${number}`}>{number}</a>:<>,&nbsp;<a href={`tel:${number}`}>{number}</a></> )
                      }
                    </div>
                    <div className="not_bold">
                      <a className="not_bold" href={`mailto:${items?.email}`}>
                        {items?.email}
                      </a>
                    </div>
                    <div className="not_bold">
                      {' '}
                      <a className="website" href={items?.website}>
                        {' '}
                        {items?.website}
                      </a>
                      <div>
                        {items?.url !== '' ? items?.toRedirect ?<a href='https://jal.theyogainstitute.org/' target='_blank' rel='noreferrer' ><button className='country-details-btn'>Details</button></a> :  <button className='country-details-btn' onClick={()=>navigate('/matunga')}>Details</button>: null}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LocateUs
