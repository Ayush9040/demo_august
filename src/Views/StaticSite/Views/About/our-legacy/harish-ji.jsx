import React from 'react'
import OurLegacyModal from '../../../Components/OurLegacyModal'
import baseDomain, { aboutAssets } from '../../../assets/images/imageAsset.js'

let leftImg = `${baseDomain + aboutAssets.aboutAsset35}`
let rightImg = `${baseDomain + aboutAssets.aboutAsset36}`

let g1 = baseDomain + aboutAssets.aboutAsset37
let g2 = baseDomain + aboutAssets.aboutAsset38
let g3 = baseDomain + aboutAssets.aboutAsset39
let g4 = baseDomain + aboutAssets.aboutAsset40
let g5 = baseDomain + aboutAssets.aboutAsset41
let g6 = baseDomain + aboutAssets.aboutAsset42

export default function HarishJi() {
  const data = {
    name: 'Hrishi J Yogendra',
    route: 'harish-ji',
    founder: ['Director'],
    year: '1988',
    
    desc: [
      'Born on 5th January 1988 to two visionaries, Dr. Jayadeva and Dr. Hansaji Yogendra, Hrishi Jayadeva Hansaji Yogendra is the third generation of Yogendra lineage. As the Assistant Director & Secretory of The Yoga Institute, Hrishi is using his advantage of standing on the shoulders of giants only to further the vision and the spread the teachings of the Gurus at The Yoga Institute.'
      ,

      'After completing his Masters, Hrishi immersed himself completely in understanding the workings of the Institute and the impact its teachings have on the millions of lives over the years. He realised the immense need of utilising the fast-evolving digital landscape to spread the authentic teachings of the Founders to the furthest reaches of the world and help millions more benefit from it.'
      ,
      
      'Today, Hrishi is tirelessly spearheading all the operations at the Institute with a simple goal of creating a lasting impact on the mankind. Under his leadership the Institute accelerated its reach through various digital and social media initiatives and reforms, that have helped millions of people rise and transform their lives, mentally, emotionally, physically, and spiritually. He also serves the Yoga community as the Vice President of the International board of Yoga.',
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
