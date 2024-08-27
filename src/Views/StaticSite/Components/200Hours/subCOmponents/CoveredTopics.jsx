import React from 'react'
import Paragraph from '../../../common/paragraph/ParagraphTTC'

const CoveredTopics = () => {

    const chapter = [
        {
            chapterName: 'Experiential Sessions of Yoga Asanas',
        },
        {
            chapterName: 'Yoga for Wellness and Stress Management',
        },
        {
            chapterName: 'Anatomy & Physiology',
        },
        {
            chapterName: 'Learn, experience and transform yourself with Yogic',
        },
        {
            chapterName: 'Patanjali Yoga Sutras and Hatha Yoga Texts with',
        },
    ]


    return (
        <div className="l2-wrap">
            <div className="l2-header text-gradient">Topics Covered</div>

            <div className="chapters-wrap">

                {
                    chapter?.map((item, index) => (
                        <div className="chapter" key={index}>
                            <img className='asatanga-circle' src="/icons/200-hours/topicAstanga.svg" alt="" />
                            <div className="chapter-title">
                                {item?.chapterName}
                                {/* <Paragraph count="30" text={item?.chapterName}/> */}
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default CoveredTopics
