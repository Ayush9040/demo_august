import React from 'react'
// import CommonBanner from '../../Components/Common-banner'
// import faqs from '../../assets/images/benifits.png'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import Heading from '../Heading'


import './style.scss'

const FAQ = ({ questions=[] }) => {

  // const questions = [
  //   {
  //     ques: 'Question',
  //     ans: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
  //           dummy text ever since the 1500s with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  //   },
  //   {
  //     ques: 'Question',
  //     ans: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
  //           dummy text ever since the 1500s with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  //   },
  //   {
  //     ques: 'Question',
  //     ans: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
  //           dummy text ever since the 1500s with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  //   },
  //   {
  //     ques: 'Question',
  //     ans: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
  //           dummy text ever since the 1500s with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  //   },
  //   {
  //     ques: 'Question',
  //     ans: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
  //           dummy text ever since the 1500s with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  //   },
  // ]

  return (
    <div className='faqs-container' >
      {/* <CommonBanner
        isLeftContent={false}
        Logo={false}
        Navigation={true}
        PageType="faq"
        BgImage={faqs}
        Heading="FAQs"
        isOnlyBanner={false}
        innerNav={false}
      /> */}
      <Heading smallText={'FAQ'} />
      <div className='faq-ques' >
        <Accordion preExpanded={[0]}>
          {questions && questions.map((item, i) => (
            <AccordionItem dangerouslySetExpanded={i===0 ? true:false}  uuid={i}  key={i} >
              <AccordionItemHeading>
                <AccordionItemButton>
                  <p>{item.ques}</p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  {item.ans}
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default FAQ