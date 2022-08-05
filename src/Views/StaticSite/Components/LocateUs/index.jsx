import React from 'react'
import './style.scss'
import CommonBanner from '../Common-banner'
import InnerNavComponent from '../InnerNavComponent'
import baseDomain from '../../assets/images/imageAsset'
import { useState } from 'react'
import { locateData } from './locate'
import { useEffect } from 'react'
import { locateAsset } from '../../assets/images/imageAsset'

const LocateUs = () => {
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
  return (
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
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum has been the industry\'s standard dummy text ever since the 1500s with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }
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
          <li>
            <span
              style={bold === 'Italy' ? { fontWeight: '700' } : {}}
              onClick={() => {
                setBold('Italy')
              }}
            >
              Italy
            </span>
            {bold === 'Italy' && <div className="bottom_line2"></div>}
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
              style={bold === 'France' ? { fontWeight: '700' } : {}}
              onClick={() => {
                setBold('France')
              }}
            >
              France
            </span>
            {bold === 'France' && <div className="bottom_line2"></div>}
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
        </div>
        <div className="locate_country">
          <div className="locate_flag">
            <img src={country.flag} alt="flag" />
          </div>
          <div className="locate_address">
            <div className="locate_add">{country.add}</div>
            <div className="locate_subadd"> {country.subAdd}</div>
          </div>
        </div>
        <div className="locate_sub_address_container">
          <div className="locate_container">
            {country?.branches?.map((items, i) => {
              return (
                <div className="sub_state" key={i}>
                  <div className="bold_state">{items?.state}</div>
                  <div className="not_bold">{items?.notstate}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocateUs
