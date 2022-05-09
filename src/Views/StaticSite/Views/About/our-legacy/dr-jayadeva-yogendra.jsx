import React from 'react'
import baseDomain, { aboutAssets } from '../../../assets/images/imageAsset'
import OurLegacyModal from '../../../Components/OurLegacyModal'

export default function HarishJi() {
  let leftImg=baseDomain+aboutAssets.aboutAsset19
  let rightImg=baseDomain+aboutAssets.aboutAsset20
  
  let g1=baseDomain+aboutAssets.aboutAsset21
  let g2=baseDomain+aboutAssets.aboutAsset22
  let g3=baseDomain+aboutAssets.aboutAsset23
  let g4=baseDomain+aboutAssets.aboutAsset24
  let g5=baseDomain+aboutAssets.aboutAsset25
  let g6=baseDomain+aboutAssets.aboutAsset26
  const data = {
    name: 'Dr. Jayadeva Yogendra',
    route: 'dr-jayadeva-yogendra',
    desc: [
      `
          Dr. Jayadeva Yogendra, fondly known as Dr. Sahab, was a true yogi who showed the world how to live a balanced and a perfect yogic life. He served as the President of The Yoga Institute and continued his father’s legacy with aplomb until he took his samadhi in 2018.  Dr. Jayadeva’s teachings, filled with deep wisdom, shows the right path, and provides answers to all the problems of people even to this day. 
          `,

      `
          Dr. Jayadeva completed his Masters in Samkhya and Yoga in 1952 from Mumbai University. He was awarded the Hargobindas scholarship for a Ph.D. (Dr. of Philosophy), in 1955, for his thesis on 'Moksha Parvan'. He was a guru, a guide, and an ideal to millions who came to him. His uniqueness lied in his simplicity and ability to provide simple solutions to complex problems. Dr. Jayadeva was a true yogi in the middle of a bustling world. He never desired publicity for himself and yet experts from a wide array of fields thronged to him for guidance and understanding. 
  
          `,

      `
          Dr. Sahab is the architect behind the signature offerings of the institute – the teacher training courses, camps, and other wellness programs. He specially designed these for the common man and his common problems. He integrated attitude-based concepts into yoga training and life activities which was the greatest contribution to the school of yoga. He also served as the Editor of the Institute’s monthly Journal, “Yoga & Total Health.”
  
          `,

      `
            Furthermore, Dr. Jayadeva founded the International Board of Yoga in 1975 to counter the wrong teachings in the name of Yoga. He decoded the classical systems of yoga and presented them in a way which would make them actionable. He made yoga easy to follow for the 21st century man. He carried forward the main principle of the institute – application of knowledge. Dr. Sahab was a man of simple words and a perfect example of how to lead a life in modern times. It cannot be said of many that they practice what they preach but Dr. Jayadeva was the true embodiment of this saying. He never taught anything other than what he practiced himself. Students at the Institute continue to draw inspiration from his wisdom, compassion, wit, and unflinching commitment to truth.
          `,
    ],
    leftImg,
    rightImg,
    gallery: [g1, g2, g3, g4, g5, g6],
  }
  return (
    <div>
      <OurLegacyModal data={data} />
    </div>
  )
}
