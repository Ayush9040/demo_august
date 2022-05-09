import React from 'react'
import OurLegacyModal from '../../../Components/OurLegacyModal'
import leftImg from '../../../assets/images/our-legacy/dr-hansaji-yogendra/l.jpg'
import rightImg from '../../../assets/images/our-legacy/dr-hansaji-yogendra/r.jpg'
import g1 from '../../../assets/images/our-legacy/dr-hansaji-yogendra/1.jpg'
import g2 from '../../../assets/images/our-legacy/dr-hansaji-yogendra/2.jpg'
import g3 from '../../../assets/images/our-legacy/dr-hansaji-yogendra/3.jpg'
import g4 from '../../../assets/images/our-legacy/dr-hansaji-yogendra/4.jpg'
import g5 from '../../../assets/images/our-legacy/dr-hansaji-yogendra/5.jpg'
import g6 from '../../../assets/images/our-legacy/dr-hansaji-yogendra/6.jpg'

export default function HarishJi() {
  const data = {
    name: 'Dr. Hansaji Yogendra',
    route: 'dr-hansaji-yogendra',

    desc: [
      `
        Dr. Hansaji Yogendra is a globally acclaimed Spiritual Yoga Guru and the Director of The Yoga Institute, Mumbai. She is a mentor and role model to millions of lives and has conducted more than 50,000 powerful sessions on yoga, wellness, and mental health. Dr. Hansaji has enriched the world with her wisdom by authoring and co-authoring more than 100 books. 
        `,
      `An epitome of grace and wisdom, she is a global symbol of peace, balanced living, and yoga. Dr. Hansaji is on the board of multiple national and international committees in charge of devising yoga syllabi and shaping yoga policy worldwide. Using her profound knowledge and immense experience she has designed special techniques, specific health and well-being camps, unique sessions to transform the lives of people of all ages with varied life-related problems and ailments.
        `,
      `
        Dr. Hansaji was honored with the Bharat Gaurav Award at the House of Commons, British Parliament (2019), Woman of the Year Award (2000) by the American Biographical Institute, USA. Shaped under her leadership and guidance, The Yoga Institute received the prestigious PM Award in 2018.
        `,

      `
        Today, Dr. Hansaji continues her mission of spreading the goodness of Yoga with the same vigor with which she began 50 years ago. She is today harnessing the power of social media, via Facebook, Instagram, and YouTube channel, to positively influence and transform the lives of millions of individuals across the globe and fill their lives with grace and light.
        `,
    ],
    leftImg: leftImg,
    rightImg,
    gallery: [g1, g2, g3, g4, g5, g6],
  }
  return (
    <div>
      <OurLegacyModal data={data} />
    </div>
  )
}
