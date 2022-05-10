import React from 'react'
import OurLegacyModal from '../../../Components/OurLegacyModal'
import baseDomain,{ aboutAssets } from '../../../assets/images/imageAsset.js'

export default function HarishJi() {
  const data = {
    name: 'Paramhamsa Madhavadas ji',
    desc: [''],
    route: 'paramhamsa-madhavadas-ji',
    leftImg: baseDomain+aboutAssets.aboutAsset10,
    rightImg: null,
    gallery: [],
  }
  return (
    <div>
      <OurLegacyModal data={data} />
    </div>
  )
}
