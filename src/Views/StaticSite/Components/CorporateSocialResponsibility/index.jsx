import React from 'react'
//import { Link } from 'react-router-dom'
import baseDomain,{ CSR } from '../../assets/images/imageAsset'
import CommonBanner from '../Common-banner'
import './style.scss'
import CsrBlock from './data'
import CsrOut from './outsideData'
import { Link } from 'react-router-dom'
import InnerNavComponent from '../InnerNavComponent'

const CorporateSocialResponsibilty = () => {

  const CSRPage = { 
    title:'scsr',
    color:'white',
    menuColor:'white',
    menuItems:[]
  }
 
  return (
    <div className="csr-main-div">
      <CommonBanner
        isLeftContent={false}
        Logo={false}
        Navigation={true}
        PageType="privacy"
        Heading="Corporate Social Responsibilty"
        description="For over many decades, The Yoga Institute has been conducting CSR initiatives on behalf of corporations and organizations who are looking to make a difference in their society and the people who are in need of it. If you are an organization looking to make an impact, please consider associating with us for the same. We are mindful to keep administrative and other organizational costs low so that a major chunk of your resources is well utilized for those who are actually in need. Our uniqueness we utilize maximum resources for maximum welfare and benefit of humanity. We focus on the Sustainable Development Goals specified by the United Nations’ General Assembly."
        // bannerImg={`${baseDomain}${background.volunteer}`}
        overlay="#E38F73"
      >
        <InnerNavComponent abc={ CSRPage } />
      </CommonBanner>
      {/* <div className="csr-main-section">
        <div className="main-top-section">
          Our Objective
          <div className="bottom-line"></div>
        </div>
        <div className="csr-svg-section">
          <div className="svg-one">
            <img src={`${baseDomain}${CSR.hunger}`} alt='hunger'/>
            <p>Zero Hunger</p>
          </div>
          <div className="svg-one">
            <img src={`${baseDomain}${CSR.health}`} alt='health'/>
            <p>Good health and well-being</p>
          </div>
          <div className="svg-one">
            <img src={`${baseDomain}${CSR.responsible}` } alt='reponsible'/>
            <p>Responsible consumption and production</p>
          </div>
          <div className="svg-one">
            <img src={`${baseDomain}${CSR.peace}`} alt='peace'/>
            <p>Peace, justice and strong institutions</p>
          </div>
        </div>
        <div className="csr-mid-last">
          <p>
            The Yoga Institute has been working selflessly for people all around
            the world in accordance with the Founder&apos;s values. We conduct
            CSR programs where a large number of volunteers and sadhakas from
            the global landscape come together for social activities. We are in
            collaboration with several non-profit organizations to create
            impact.
          </p>
          <p>Please get in touch with us so we can help you meet your goals.</p>
        </div>
      </div> */}
      <div className="last-container">
        {CsrOut.map((support,i) => {
          return (
            <>
              <div className="content-container-section" style={ i % 2 ===0 ? { flexDirection:'row-reverse' } : { } }>
                <div className="image-container " >
                  <img src={support.image} alt={support.title}/>
                </div>
                <div className="description-content">
                  <div className="header">
                    <div className="header-title">
                      <h1>{support.title}</h1>
                      <div className="bottom-line"></div>
                    </div>
                    {/* <div className="header-btn">
                      <button>Support Us</button>
                    </div> */}
                  </div>
                  <div className="description">{support.description}</div>
                  <div className="last-btn">
                    <Link to={`/csr/${support.id}`} >
                      <span className="btn-div">
                        <button className='view_btn'>View Story</button>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default CorporateSocialResponsibilty
