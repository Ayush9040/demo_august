import React from 'react'
import OurLegacyModal from '../../../Components/OurLegacyModal'

import baseDomain from '../../../assets/images/imageAsset'
import { aboutAssets } from '../../../assets/images/imageAsset'

export default function HarishJi() {
  let leftImg = baseDomain + aboutAssets.aboutAsset3
  let rightImg = baseDomain + aboutAssets.aboutAsset2

  let g1 = baseDomain + aboutAssets.aboutAsset3
  let g2 = baseDomain + aboutAssets.aboutAsset4
  let g3 = baseDomain + aboutAssets.aboutAsset5
  let g4 = baseDomain + aboutAssets.aboutAsset6
  let g5 = baseDomain + aboutAssets.aboutAsset7
  let g6 = baseDomain + aboutAssets.aboutAsset8

  const data = {
    name: 'Shree Yogendra ji',
    route: 'shree-yogendra-ji',
    founder: ['Founder'],
    year: '1897 - 1989',

    desc: [
      `Shri Yogendra Ji is laid down the foundation of The Yoga Institute, the oldest organized yoga center in the world, in 1918. He is the architect of the evolution of Yoga that has happened in the world in the last 100 years. Furthermore, the western world was introduced to Yoga, for the first time ever, when Yogendra Ji set up the first yoga center in New York, America in 1920. 
        `,

      `
        Yogendra Ji’s work drew the attention of researchers and scientists from all over the world. Experts and scholars from various universities began visiting the institute for further studies. He took a scientific approach to the study of yoga, which was never done before. Yogendra ji firmly believed that people must be educated about Yoga before they start practicing it. It was his scientific temperament that brought in top experts, like American virologist Mr. Jonas Salk, from world’s leading universities and organization such UNESCO and Harvard to study the founder’s discoveries. 
  
        `,
      `
        Shri Yogendraji made it his mission to introduce Yoga to the common man at a time when yoga was confined to ascetics and kept a secret. His idea to bring yoga to everyone was unique and first of its kind. He simplified the complex yoga practices so that every common individual could practice it safely. Some of his greatest works are Hatha Yoga Simplified, Asana Simplified, Hygiene Simplified, Facts about Yoga, and Guide to Meditation. 
  
        `,
      `
        He was a true yogi with total control over all aspects of being. He had been in a state of Samadhi for a considerable part of his life. Yogendra Ji learned to use his prana to heal disease in others from his mystical Guru Shri Madhavdas Ji. He was a true person of siddhi. He believed that if something is worth doing, it is worth doing well. He could foresee the future. He was a yogi who demonstrated that being a householder can also enable you to achieve mastery over your physical and mental senses.
        
        `,
      `
        Shri Yogendra Ji published the world’s first yoga journal. He pioneered the use of yoga for therapeutic purposes. His concept of breath and movement co-ordination has impacted millions. He has written many authoritative texts on yoga based on his experience, research work and ancient scriptures. Some of his books are preserved in the Crypt of Civilization for posterity; they are to be opened after 6000 years. His one thought of starting The Yoga Institute has contributed to the growth of yoga, as well as peace, harmony, wellbeing, and positivity, across nations.
        `,

      `
        Millions of lives have been touched and benefitted from this purity of vision. Generations later, the torch of yoga lit by Shri Yogendraji continues to illuminate the path of humanity. The legacy continues…
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
