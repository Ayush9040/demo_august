import React from 'react'
import PublicationCard from '../../Components/PublicationCard'
import PublicationNav from '../../Components/PublicationNav'

const Books = () => {
  let books = [
    'Sattvik Cooking – Modern Avatars of Vedic Foods',
    'The 12 Yogic Principles for Making Marriages Work',
    'Yoga For All',
    'Yoga Sutras of Patanjali',
    'Yoga Cyclopaedia Volume 3 – Yoga for Stress & Mental Health',
    'The Householder Yogi – Life of Shri Yogendraji',
    'Yogic Life for Control of Diabetes – A Practical Guide to a Fuller Life',
    'Why Yoga',
    'Yoga for Children – Teacher’s Handbook',
    'Better Humans',
    'Shri Patanjali Yoga Sutra',
    '21 Days Better Living Course',
    'Meditation on a Guru',
    'The Call of Yoga',
    'Pranayama – Breathing is Life – Techniques of Yogic Breathing',
    'Celebration of a Yogic Life ',
    'Heart Care',
    'Yoga Cyclopedia Volume 1',
    'Yoga Cyclopedia Volume 2',
    'Stories that Stir',
    'Guide to a Fuller Life',
    'Yogic Life – A Cure for Asthma and Bronchitis',
    'Yoga Cyclopedia Volume 4',
    'Facts About Yoga',
    'Growing with Yoga',
    'Guide To Yoga Meditation',
    'Insights Through Yoga        ',
    'How to Reverse Heart Disease the Yogic Way',
    'Inspiration',
    'Yoga for Back and Joint Disorders  - black and white and colour versions',
    'Yoga at Home',
    'Rangi and an Unknown Man',
    'Teaching Yoga',
    'Life Problems',
    'Master Strokes 3',
    'Problems and Solutions',
    'Pregnancy, Parenthood and Yoga',
    'Yoga Hygiene Simplified',
    'Yoga Asanas Simplified',
    'The Yoga of Caring',
    'Yoga Therapy in Asthma, Diabetes & Heart Disease',
    'Your Words, Our Path',
    'Recipes for Happiness',
    'Yoga for Youngsters',
    'Marriage – a spiritual journey',
  ]
  return (
    <div className='books-container'>
      <div className='background'>
        <PublicationNav title={'books'} />
        <p>
          {`A massive collection of a varied range of books written by Shri
          Yogendraji, Mother Sita Devi, Dr. Jayadeva, and Dr. Hansaji. Each book
          has a wealth of information and insight that will help you transform
          your life and achieve mind-body balance in today's fast-paced world.`}
        </p>
      </div>
      <div className='books-grid'>
        {books.map((name, i) => {
          return <PublicationCard key={i} name={name} color={'#82729D'} />
        })}
      </div>
    </div>
  )
}

export default Books
