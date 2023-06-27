import React from 'react'
import CommonBanner from '../Common-banner'
import './style.scss'
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
        overlay="#E38F73"
      >
        <InnerNavComponent abc={ CSRPage } />
      </CommonBanner>
      <div className="last-container">
        {CsrOut.map((support,i) => {
          return (
            <>
              <div className = { i % 2 ===0 ? 'content-container-section-even'  : 'content-container-section' }>
                <div className="image-container " >
                  <img src={support.image} alt={support.title}/>
                </div>
                <div className="description-content">
                  <div className="header">
                    <div className="header-title">
                      <h1>{support.title}</h1>
                      <div className="bottom-line"></div>
                    </div>
                  </div>
                  <div className="description">{support.description}</div>
                  <div className="last-btn">
                    <Link to={`/csr/${support.id}`} >
                      <span className="btn-div">
                        <button className='view_btn'>Read Blog</button>
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
