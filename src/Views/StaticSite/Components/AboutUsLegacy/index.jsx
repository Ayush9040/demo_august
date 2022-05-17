import React, { useState } from 'react'
import './styles.scss'
import CommonBtn from '../commonbtn'
import CommonBannerNavAboutUs from '../CommonBannerNavAboutUs'
import { Link } from 'react-router-dom'
import baseDomain, { aboutAssets } from '../../assets/images/imageAsset'

const CommonBannerLegacy = ({
  Navigation,
  PageType,
  isOnlyBanner,
  innerNav,
}) => {
  const [activeFounder, setActiveFounder] = useState(0)

  let l0 = baseDomain + aboutAssets.aboutAsset44
  let l1 = baseDomain + aboutAssets.aboutAsset45
  let l2 = baseDomain + aboutAssets.aboutAsset46
  let l3 = baseDomain + aboutAssets.aboutAsset47
  let l4 = baseDomain + aboutAssets.aboutAsset48
  let l5 = baseDomain + aboutAssets.aboutAsset49

  const founderData = [
    {
      name: 'Shri Yogendra ji',
      founder: ['Founder'],
      year: '1897 - 1989',
      route: 'shree-yogendra-ji',

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
      img: l0,
    },
    {
      name: 'Paramhamsa Madhavadas ji',
      founder: ['Founders Guru'],
      year: '1798-1921',
      desc: [
        'Born in Bengal in 1798, Paramahamsa Madhavdas Ji was a true Yoga Master hailing from the Mukhopadhyaya family. During his long life of 123 years, he was notably responsible for the revival of yogic practices which had vanished from India at the time. His childhood and upbringing inspired in him a devotional faith towards yoga. He left home at the tender age of 23 to study various Hatha yoga techniques and the health advantages of Yoga practices in order to promote spiritual health and growth of consciousness.',
      ],
      route: 'paramhamsa-madhavadas-ji',
      img: l1,
    },

    {
      name: 'Smt. Sitadevi Ji',
      route: 'smt-sitadevi-ji',
      founder: ['Mother'],
      year: '1912 - 2008',
      desc: [
        `
          Smt. Sitadevi Yogendra, fondly known as Mother, married Shri Yogendraji in 1927 and joined him in his mission of spreading the knowledge of yoga in the world. Smt. Sitadevi was instrumental in the establishment of the institute. Not only did she stood along Yogendra ji in managing day-to-day activities, but she also began teaching women and children at The Yoga Institute. Sitadevi ji worked tirelessly to empower women and make them aware about the benefits of maintaining good physical and mental health.  
        `,

        `
          Through her relentless effort she managed to bring the women out to practice at the Institute. Sitadevi ji through her writings and sermons worked towards dispelling the myth that Yoga is only meant for men. Sitadevi has authored many articles and books about yoga. Her book Yoga Physical Education for Women was the first ever book written for women on the subject. The book is preserved in the Crypt of Civilization, to be opened six thousand years later. Mother Sitadevi passed away in 2008 at the age of 97. Google India honored the contribution of Smt. Sitadevi ji, towards empowering women, by featuring her amongst six women who brought change in the Indian society. 
        `,
      ],
      img: l2,
    },
    {
      name: 'Dr. Jayadeva Yogendra',
      route: 'dr-jayadeva-yogendra',
      founder: ['President'],
      year: '1929 - 2018',
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
      img: l3,
    },
    {
      name: 'Dr. Hansaji Yogendra',
      route: 'dr-hansaji-yogendra',
      founder: ['Director'],
      year: '1947',

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
      img: l4,
    },
    {
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
      img: l5,
    },
  ]
  return (
    <>
      <div className="about-us-container">
        <div
          className={`common-container legacy-content ${PageType}-container ${
            !isOnlyBanner && 'common-container-responsive'
          }`}
        >
          {Navigation && (
            <div className={'navigation-container'}>
              <CommonBannerNavAboutUs innerNav={innerNav} />
            </div>
          )}
          <div
            className={`banner-container legacy-banner ${
              !isOnlyBanner && 'banner-container-responsive'
            }`}
          >
            <div className="memberImage">
              <div
                style={{
                  backgroundSize: 'cover',
                  backgroundImage: `url(${founderData[activeFounder].img})`,
                  backgroundPosition: 'center',
                }}
              ></div>
            </div>
            <div className="why-text about-us-legacy-banner-text">
              <div className="name-title">
                <div className="banner-heading" style={{ marginLeft: '0' }}>
                  {founderData[activeFounder].name}
                  <div className="bottom-line"></div>
                </div>
                <div className="pos-date">
                  {founderData[activeFounder].founder} <br />
                  <span style={{ fontSize: '13px' }}>
                    {founderData[activeFounder].year}
                  </span>
                </div>
              </div>
              <p style={{ textAlign: 'left', paddingBottom: '30px' }}>
                {founderData[activeFounder].desc[0]}
                <br />
                <br />
                <br />
                {founderData[activeFounder].desc[1]}
                <br />
                <Link
                  to={'/about/our-legacy/' + founderData[activeFounder].route}
                >
                  <CommonBtn text={'Read More'} />
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="other-members">
          <div className="m-images">
            {founderData.map((f, idx) =>
              idx === activeFounder ? null : (
                <div
                  className="m-image"
                  style={{ backgroundImage: `url(${f.img})` }}
                  role="button"
                  onClick={() => setActiveFounder(idx)}
                  key={idx}
                ></div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default CommonBannerLegacy
