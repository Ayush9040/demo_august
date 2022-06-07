import React, { useEffect, useState } from 'react'
import CommonBanner from '../../Components/Common-banner'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import Heading from '../Heading'
import { useLocation } from 'react-router-dom'

import './style.scss'
import baseDomain, { background } from '../../assets/images/imageAsset'

const FAQ = ({ questions = [] }) => {
  const location = useLocation()
  const [ques, setQues] = useState([])

  const questions1 = [
    {
      ques: 'Question',
      ans: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      ques: 'Question',
      ans: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      ques: 'Question',
      ans: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      ques: 'Question',
      ans: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      ques: 'Question',
      ans: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
  ]
  useEffect(() => {
    if (questions.length === 0) {
      setQues(questions1)
    } else {
      setQues(questions)
    }
  }, [])

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
          />

          <div className="faq-ques">
            <Accordion preExpanded={[0]}>
              {ques &&
                ques.map((item, i) => (
                  <AccordionItem
                    uuid={i}
                    key={i}
                  >
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <p>{item.ques}</p>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>{item.ans}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
            </Accordion>
          </div>
        </>
      ) : (
        <>
          <Heading smallText={'FAQ'} />
          <div className="faq-ques">
            <Accordion preExpanded={[0]}>
              {questions &&
                questions.map((item, i) => (
                  <AccordionItem
                    dangerouslySetExpanded={i === 0 ? true : false}
                    uuid={i}
                    key={i}
                  >
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <p>{item.ques}</p>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>{item.ans}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
            </Accordion>
          </div>
        </>
      )}
    </div>
  )
}

export default FAQ
