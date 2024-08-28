import React, { useEffect, useState } from 'react'

const ParagraphTTC = ({ text, count, fontSizeProp, activeIndex }) => {

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {

    setIsExpanded(false)

  }, [activeIndex])

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p style={{ fontSize: fontSizeProp }}>
        {
          isExpanded ? text : `${text.slice(0, count)}`
        }
        {
          text.length > count ?
            <>
              {
                !isExpanded && (
                  <>...
                    <span className='read-more-21' onClick={toggleExpanded} style={{ cursor: 'pointer', color: '#CA4625' }}>
                      Read More
                    </span></>
                )
              }
              {
                isExpanded && (
                  <span className='read-more-21' onClick={toggleExpanded} style={{ cursor: 'pointer', color: '#CA4625' }}>
                    {" "} Show Less
                  </span>
                )
              }
            </>
            :
            <></>
        }
      </p>
    </div>
  )
}

export default ParagraphTTC
