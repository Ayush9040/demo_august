import React, { useEffect, useState } from 'react'

const CourseCurriculum = () => {

    const [isSeeAll, setIsSeeAll] = useState(null);

    const curriculum = [
        {
            title: 'Introduction to Teacher Training',
            img:"https://oss-lms-prod.s3.ap-south-1.amazonaws.com/200ttc-master/curriculum1.jpeg",
            description: 'In this Chapter you will study the importance of yoga teacher training which in very essential in today’s market  will learn and practice this yoga session.',
            keyPoints: [
                "Yoga and Yogic Practices",
                "Hatha Yoga Texts & Pradipika",
                "Patanjali Yoga Sutras",
                "Bhavas of the Buddhi – Basis of Yoga Education",
                "Anatomy and Physiology",
                "Human Systems, Yoga and Health",
                "Yoga for Wellness and Positive Health",
                "Yoga and Stress Management",
            ]
        },
        {
            title: 'Introduction to Teacher Training',
            img:"https://oss-lms-prod.s3.ap-south-1.amazonaws.com/200ttc-master/curriculum2.jpeg",
            description: 'In this Chapter you will study the importance of yoga teacher training which in very essential in today’s market  will learn and practice this yoga session.',
            keyPoints: [
                "Sahajbhava Asanas",
                "Shat Karmas",
                "Surya Namaskar",
                "Yoga Asanas (Dynamic and Static)",
                "Psychophysical and Conceptual Yoga Techniques",
                "Pranayama",
                "Yoga Meditation Practices",
                "Communication and Teaching Practice",
                "Public Speaking Skills and Teaching Methods",
                "Feedback, Progress Acknowledgment and Group Work Principles",
            ]
        },
        {
            title: 'Introduction to Teacher Training',
            img:"https://oss-lms-prod.s3.ap-south-1.amazonaws.com/200ttc-master/curriculum3.jpeg",
            description: 'In this Chapter you will study the importance of yoga teacher training which in very essential in today’s market  will learn and practice this yoga session.',
            keyPoints: [
                "Yoga and Yogic Practices",
                "Hatha Yoga Texts & Pradipika",
                "Patanjali Yoga Sutras",
                "Bhavas of the Buddhi – Basis of Yoga Education",
                "Anatomy and Physiology",
                "Human Systems, Yoga and Health",
                "Yoga for Wellness and Positive Health",
                "Yoga and Stress Management",
            ]
        },
        {
            title: 'Introduction to Teacher Training',
            img:"https://oss-lms-prod.s3.ap-south-1.amazonaws.com/200ttc-master/curriculum4.jpeg",
            description: 'In this Chapter you will study the importance of yoga teacher training which in very essential in today’s market  will learn and practice this yoga session.',
            keyPoints: [
                "Sahajbhava Asanas",
                "Shat Karmas",
                "Surya Namaskar",
                "Yoga Asanas (Dynamic and Static)",
                "Psychophysical and Conceptual Yoga Techniques",
                "Pranayama",
                "Yoga Meditation Practices",
                "Communication and Teaching Practice",
                "Public Speaking Skills and Teaching Methods",
                "Feedback, Progress Acknowledgment and Group Work Principles",
            ]
        },
    ]

    // useEffect(() => {}, [isSeeAll])

    return (
        <div className="phase-5">

            <div className="p5-title2 text-gradient">Course Curriculum</div>
            <div className="p5-t2-description">
                The curriculum covers essential knowledge and
                skills for mastering advanced concepts.
            </div>

            <div className="p4-Curriculum-card-wrap">

                {
                    curriculum?.map((item, index) => (
                        <div className="Curriculum-tile" key={index}>
                            <img className='Curriculum-tile-img' src={item?.img} alt="" />
                            <div className='curriculum-content'>
                                <div className="curriculam-title">{item?.title}</div>
                                <div className="curriculum-description">
                                    {item?.description}
                                </div>
                            </div>

                            {
                                isSeeAll == (index + 2) ?
                                    <div className='button-see-all' onClick={() => setIsSeeAll(null)}>Show less</div> :
                                    <div className='button-see-all' onClick={() => setIsSeeAll(index + 2)}>See all</div>
                            }
                        </div>
                    ))
                }
            </div>

            <div className='button-see-all-wrap'>
                {
                    isSeeAll ?
                        <div className='button-see-all' onClick={() => setIsSeeAll(null)}>Show less</div> :
                        <div className='button-see-all' onClick={() => setIsSeeAll(1)}>See all</div>
                }
            </div>

        </div>
    )
}

export default CourseCurriculum
