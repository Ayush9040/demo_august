import React from 'react'
import OurLegacyModal from '../../../Components/OurLegacyModal'
import baseDomain, { homeAssets } from '../../../assets/images/imageAsset.js'

export default function HarishJi() {
  const data = {
    name: 'Paramhamsa Madhavdas ji',
    founder: ['Founder Guru'],
    year: '1798-1921',
    desc: [
      `Born in Bengal in 1798, Paramahamsa Madhavdas Ji was a true Yoga Master hailing from the Mukhopadhyaya family. During his long life of 123 years, he was notably responsible for the revival of yogic practices which had vanished from India at the time. His childhood and upbringing inspired in him a devotional faith towards yoga. He left home at the tender age of 23 to study various Hatha yoga techniques and the health advantages of Yoga practices in order to promote spiritual health and growth of consciousness. At the age of 80, after 50 years of exploring India on foot and practicing yoga in the seclusion of the Himalayas (he spent a full 12 years there in solitude), he decided to start teaching on the banks of the river Narmada in Gujarat.
    Shri Yogendra Ji's guide and spiritual master, Shri Madhavdas Ji, was introduced to him by the Universe in a marvelous way.`, `Paramhamsa Madhavdas Ji was giving a talk in Madhavbaug, Mumbai, in 1916, when he met Shri Yogendra Ji. Shri Yogendra Ji was awestruck by his teacher's wisdom and eminence. Madhavdas Ji, too, noticed a special spark in Shri Yogendra Ji. The first thing he told Yogendra Ji was, “I have waited for you for all these years.” Madhavdas Ji was 118 at the time. During his lifetime, Paramahamsa Madhavdas Ji selected just 2 pupils for learning Hatha Yoga. He had a keen sense of the future of yoga and, after a long search, picked Shri Yogendra Ji to carry the "Yoga torch" around the world.
    Paramahamsa Madhavdas Ji was a master of many different Yoga traditions. He was well-versed in holy practices, but the spiritual upliftment of the masses was his most important goal. He arranged an All-India Sadhu convention in 1909 to reform the hermit order. His outstanding contribution to Yoga continues to this day. The Yoga Institute, now nearly 100 years old, continues to preach the message of humanity, peace, and goodwill by following the values established by the Founder and his holiness Paramahamsa Madhavdas Ji. 
    `,
    ],
    route: 'paramhamsa-madhavadas-ji',
    leftImg: baseDomain+homeAssets.homeAsset1,
    rightImg: null,
    gallery: [],
  }
  return (
    <div>
      <OurLegacyModal data={data} />
    </div>
  )
}
