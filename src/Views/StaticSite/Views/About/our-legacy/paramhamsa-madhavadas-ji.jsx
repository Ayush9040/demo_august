import React from 'react'
import OurLegacyModal from '../../../Components/OurLegacyModal'
import l1 from '../../../assets/images/our-legacy/l-1.jpg'

export default function HarishJi() {
  const data = {
    name: 'Paramhamsa Madhavadas ji',
    desc: [''],
    route: 'paramhamsa-madhavadas-ji',
    leftImg: l1,
    rightImg: null,
    gallery: [],
  }
  return (
    <div>
      <OurLegacyModal data={data} />
    </div>
  )
}
