import { useState, React } from 'react'

const Faq = () => {

    const [commonStates, setCommonStates] = useState({ faqIndex: 0 })//used for all common states
    const [faqList, setFaqList] = useState([
        {
            question: ' I am a beginner. Can I attend the course?',
            answer: 'Yes, absolutely. Our course is designed with beginners in mind and will guide you through the fundamentals step by step.'
        },
        {
            question: ' What are the prerequisites for the offline and online programs?',
            answer: 'There are no prerequisites for the offline program. For the online program, you need a device (smartphone, laptop, iPad) with a basic Internet connection to use Zoom. The Zoom app is free on the Google Play Store and App Store. You must also be 18 years or older. '
        },
        {
            question: 'How will I be assessed for certification?',
            answer: 'You will be assessed based on your completion of the program, including meeting the required attendance and submitting assignments. Afterward, you will be eligible for the exam, and passing the exam will earn you the certificate.'
        },
        {
            question: 'When will I receive my certificate?',
            answer: 'For offline students, certificates are awarded the day after the exam by Dr. Hansaji Yogendra. Online participants will receive their certificates via email. If you prefer a hard copy, it will be sent by courier at an additional charge.'
        },
        {
            question: 'Why should I choose The Yoga Institute, and how will the course benefit me?',
            answer: 'The Yoga Institute, with a 105-year legacy, is recognized by the Government of India and accredited by AYUSH, YCB, and Yoga Alliance USA. This 200-hour RYT course is fully accredited and qualifies you to apply as a Registered Yoga Teacher with Yoga Alliance.'
        },
        {
            question: 'Will course materials be provided?',
            answer: 'Yes, offline students will receive three physical books for course study. Online participants will be given digital copies of the course materials, with the option to purchase physical books if desired. Shipping costs for physical books will be covered by the student.'
        },
    ])



    return (
        <div className="phase-12">
            <div className="p12-header text-gradient">FAQs</div>
            <div className="p12-content">Find answers to the most common questions about us.</div>

            <div className='faq-list'>
                {
                    faqList.map((item, index) => (
                        <div key={index}>
                            <div className={(commonStates.faqIndex == index) ? 'faq expanded' : 'expansion-panel'}>
                                
                                <div className='space-between expansion-panel-header'
                                    onClick={() => {
                                        commonStates.faqIndex == index ?
                                            setCommonStates(prevData => ({
                                                ...prevData,
                                                faqIndex: null
                                            }))
                                            :
                                            setCommonStates(prevData => ({
                                                ...prevData,
                                                faqIndex: index
                                            }))
                                    }}
                                >
                                    {item.question}
                                    {
                                        (commonStates.faqIndex == index) ?
                                            <img src="icons/200-hours/minimize.svg" alt="min" />
                                            :
                                            <img src="/icons/200-hours/add.svg" alt="plu" />
                                    }
                                </div>

                                <div className="expansion-panel-content">{item.answer}</div>
                            </div>

                        </div>
                    ))
                }
            </div>

            {/* {
                accordian?.map((question, index) => (

                    <div div className="accordian" key={index}>
                        <div className="acc-close">
                            <div className="acc-qstn"> {question.question} </div>
                            <img src="/icons/200-hours/add.svg" alt="" />
                        </div>
                    </div>

                ))
            } */}
        </div>
    )
}

export default Faq
