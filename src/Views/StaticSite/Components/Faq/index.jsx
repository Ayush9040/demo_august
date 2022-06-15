import React from 'react'
import CommonBanner from '../../Components/Common-banner'
import Accordian from '../CommanAccordian'
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel,
// } from 'react-accessible-accordion'
import Heading from '../Heading'
import { useLocation } from 'react-router-dom'

import './style.scss'
import baseDomain, { background } from '../../assets/images/imageAsset'
import InnerNavComponent from '../InnerNavComponent'

const FAQ = ({ questions=[] }) => {
  const location = useLocation()
  

  const questions1 = [
    { 
      id:1,
      ques: 'Question',
      ans: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      id:2,
      ques: 'Question',
      ans: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      id:3,
      ques: 'Question',
      ans: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      id:4,
      ques: 'Question',
      ans: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      id:5,
      ques: 'Question',
      ans: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
  ]
  const FAQBan = {
    title: 'FAQ',
    color: 'white',
    menuColor: 'white',
    menuItems: [],
  }

  
  return (
    <div className="faqs-container">
      {location.pathname === '/faqs' ? (
        <>
          <CommonBanner
            isLeftContent={false}
            Logo={false}
            Navigation={true}
            PageType="faq"
            //BgImage={homeAssets + background.faqs}
            bannerImg={`${baseDomain}${background.faqs}`}
            Heading="FAQs"
            isOnlyBanner={false}
            innerNav={false}
            overlay="#348179D4"
          >
            <InnerNavComponent abc={FAQBan}  />
          </CommonBanner>

          <div className="faq-ques">
            <Accordian data={questions1} />
          </div>
        </>
      ) : (
        <>
          <Heading smallText={'FAQ'} />
          <div className="faq-ques">
            <Accordian data={questions} />
          </div>
        </>
      )}
    </div>
  )
}

export default FAQ
