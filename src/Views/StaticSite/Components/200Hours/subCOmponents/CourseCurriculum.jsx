import React, { useEffect, useState } from 'react'

const CourseCurriculum = () => {

    const [isSeeAll, setIsSeeAll] = useState(null);

    const curriculum = [
        {
            title: 'Introduction to Teacher Training',
            img: 'https://s3-alpha-sig.figma.com/img/3a4f/71a1/ae8c2a8db31b50a925ffb644403f5b8c?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Afboi7TIqEWU8o8435DOff6vCunM5l33SPmFRYu029dqc7vfDI7Dt4eq790BkIT3hlOtUbaIHD9dDpkBbIzK1DgBsRb~AAiRVg2god-dBmS0GW0gqBNZHxdtAhCvjmshxAwbf1Nym2qqzmmVAXENKmUrbJ4ALiQ50MXxoR-nIjFIFW1eh~tvjF-fDFcEPI-pOaGkMOoAtaIfB0CgTe7lv82wJ3liTCLWK1EW3KleZR8Gq6~6UVTWu9kF80xGKVRKezIzeogLyuaKHk5A7hB9WXm21yaZeVioe~13xN~nPgIywWozkI8shjvHI1aqTQgYKv7L~VDNDPWXrqxcO5Q9vQ__',
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
            img: 'https://s3-alpha-sig.figma.com/img/875d/ad80/1eb78732349790dcb3592814600b321d?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hYhqL6uJE5q1BlViLsEtI8l0NizMhLQRTI4tIsQCztkKBNiFpH6crV0k1sv6GpBxZACjZy2myqY11BgbqBOjCsF1qWA0W77Q1DPNEdeJo3YPjckT13ffJelFcYwdqsUWhjZ~FUxOKUOQakuW8uSjlbHPgHHRCJI5PyJgi9PLFt6bhtg1lRA3JSIdDf8pjUms6M5WrPlfWy5HdCa8UJK-AFhzGup6iQYon3fPXq1EdyCa9TGApr4b~eyQb42YmjAqGDJbj~aB~Q4gDhGA2aE0hSnkaCNvECjSHDroV5EXnWY3bqT5YPH4EFrI8yKPcIlvjbwR~xchWopKhjgeOERv0A__',
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
            img: 'https://s3-alpha-sig.figma.com/img/6d0f/ae8c/e568551eee82585da40facd62f6501e1?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Re9T-~DMtAi9EGATNIyjBBSD19G~O5dhwgmwSUNsfjr3KMO9yL1xZOKkEuD2E6LORo3RniOT~dnUl~m-gtpB71P4ZX9FO5HQ1B9T1wxIHk0oW5dI9j7GhK~O1EMS5PeSw~gg82whUd8WAjKalUzFEpLLRLIOm3T2n7TDuK9ftPdKi~3vttWAgiW5hpzp4fEy2~2ATNPOkaR3vtV5JOzzrMHjrw9ejPudzT54KFc2FS5Hr1ygV5p6a6S~5wEH7T6ISI~R8KO4O8uipczipICjGH3qsxpJweC3fPgr-F3uUdojcLK3wM1hqneAixp2N-GpKfZ6WuOC~m248kaX8rj2Uw__',
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
            img: 'https://s3-alpha-sig.figma.com/img/0495/1dc3/c393b12416516fcff2c4acef2e9a6f52?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cJOyLtY2PXjOyockG0wp1j918O1nvvShfuR1Pvn7hXGcTqbQJ7emAiTfeYwB8ZF9F73qd7JqeyxwLJpuSXf6xJlpKdGoL7ToKoFxm7SI-mbT6Qp1hUcqqiTmngXfbzbJ1r8CSntnWFMPNu8G9ExRf~fh4j751IrPGqBV25ZTvmDXFYhsRImGwFmnntLhobzEMqRcq1pp6P67iLcAQalbHcAOJqnCDccxtd-bDKzBEKt-U2D7TdzmjHPqCT9X2qp6rTwo57KUseIX9fwDtjF3CGfgtvuvoUycx8OhNdVMslXVuTN1YAgz9e5TN8ADpyenoK2BiroEPxbntidNExGLcw__',
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
