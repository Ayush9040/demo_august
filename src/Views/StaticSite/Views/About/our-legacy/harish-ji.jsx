import React from 'react'
import OurLegacyModal from '../../../Components/OurLegacyModal'


let leftImg=`${baseDomain+aboutAssets.aboutAsset35}`
let rightImg=`${baseDomain+aboutAssets.aboutAsset36}`
  
let g1=baseDomain+aboutAssets.aboutAsset37
let g2=baseDomain+aboutAssets.aboutAsset38
let g3=baseDomain+aboutAssets.aboutAsset39
let g4=baseDomain+aboutAssets.aboutAsset40
let g5=baseDomain+aboutAssets.aboutAsset41
let g6=baseDomain+aboutAssets.aboutAsset42

export default function HarishJi() {
  const data = {
    name: 'Harish Ji',
    route: 'harish-ji',
    desc: [''],
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
