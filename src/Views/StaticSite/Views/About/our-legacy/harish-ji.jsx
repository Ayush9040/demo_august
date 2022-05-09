import React from 'react'
import OurLegacyModal from '../../../Components/OurLegacyModal'
import leftImg from '../../../assets/images/our-legacy/harish-ji/l.jpg'
import rightImg from '../../../assets/images/our-legacy/harish-ji/r.jpg'
import g1 from '../../../assets/images/our-legacy/harish-ji/1.jpg'
import g2 from '../../../assets/images/our-legacy/harish-ji/2.jpg'
import g3 from '../../../assets/images/our-legacy/harish-ji/3.jpg'
import g4 from '../../../assets/images/our-legacy/harish-ji/4.jpg'
import g5 from '../../../assets/images/our-legacy/harish-ji/5.jpg'
import g6 from '../../../assets/images/our-legacy/harish-ji/6.jpg'

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
