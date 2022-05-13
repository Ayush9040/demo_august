import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import baseDomain, { alumniAssets } from '../../assets/images/imageAsset'
import Heading from '../Heading'
import './style.scss'
const VolunteerGrid = () => {
  const questions = [
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

  return (
    <div className="volunteer-contents">
      <Heading smallText={'Gallery'} />
      <div className="gallery-content">
        <div className="common-gallery">
          <div className="common-gallery-grid">
            <div className="common-grid-1">
              <img
                src={baseDomain + alumniAssets.supportAssets1}
                alt=""
                className="img-main"
              />
            </div>
            <div className="common-grid-2">
              <div className="sub-grid-1">
                <img
                  src={baseDomain + alumniAssets.supportAssets2}
                  alt="gallery"
                />
              </div>
              <div className="sub-grid-2">
                <img
                  src={baseDomain + alumniAssets.supportAssets3}
                  alt="gallery"
                />
              </div>
            </div>
            <div className="common-grid-1">
              <img
                src={baseDomain + alumniAssets.supportAssets4}
                className="img-main"
              />
            </div>
            <div className="common-grid-2">
              <div className="sub-grid-1">
                <img src={baseDomain + alumniAssets.supportAssets5} alt="" />
              </div>
              <div className="sub-grid-2">
                <img src={baseDomain + alumniAssets.supportAssets6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-contents">
        <Heading smallText={'FAQs'} />
        <div className="faqs-ques">
          <Accordion allowZeroExpanded>
            {questions &&
              questions.map((item, i) => (
                <AccordionItem key={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <p>
                        {item.ques}&nbsp;{i + 1}
                      </p>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <h4>{item.ans}</h4>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default VolunteerGrid
