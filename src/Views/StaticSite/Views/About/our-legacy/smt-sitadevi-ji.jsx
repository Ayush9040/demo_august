import React from 'react'
import baseDomain, { aboutAssets } from '../../../assets/images/imageAsset'
import OurLegacyModal from '../../../Components/OurLegacyModal'


export default function SmtSitadeviJi() {

  let leftImg=baseDomain+aboutAssets.aboutAsset11
  let rightImg=baseDomain+aboutAssets.aboutAsset12
  
  let g1=baseDomain+aboutAssets.aboutAsset13
  let g2=baseDomain+aboutAssets.aboutAsset14
  let g3=baseDomain+aboutAssets.aboutAsset15
  let g4=baseDomain+aboutAssets.aboutAsset16
  let g5=baseDomain+aboutAssets.aboutAsset17
  let g6=baseDomain+aboutAssets.aboutAsset18

  const data = {
    name: 'Smt. Sitadevi Ji',
    route: 'smt-sitadevi-ji',
    desc: [
      `
            Smt. Sitadevi Yogendra, fondly known as Mother, married Shri Yogendraji in 1927 and joined him in his mission of spreading the knowledge of yoga in the world. Smt. Sitadevi was instrumental in the establishment of the institute. Not only did she stood along Yogendra ji in managing day-to-day activities, but she also began teaching women and children at The Yoga Institute. Sitadevi ji worked tirelessly to empower women and make them aware about the benefits of maintaining good physical and mental health.  
          `,

      `
            Through her relentless effort she managed to bring the women out to practice at the Institute. Sitadevi ji through her writings and sermons worked towards dispelling the myth that Yoga is only meant for men. Sitadevi has authored many articles and books about yoga. Her book Yoga Physical Education for Women was the first ever book written for women on the subject. The book is preserved in the Crypt of Civilization, to be opened six thousand years later. Mother Sitadevi passed away in 2008 at the age of 97. Google India honored the contribution of Smt. Sitadevi ji, towards empowering women, by featuring her amongst six women who brought change in the Indian society. 
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
