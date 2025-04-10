import baseDomain, { extraImage, homeAssets,nutriDiet } from '../assets/images/imageAsset'
import BA_yoga_1 from './images/BA_yoga_1.jpeg'
import sattvik_img from './images/sattvik_img.jpg'

export const activityData = [

  {
    id: 11,
    title: 'MA Yoga Shastra',
    description:
        'A comprehensive two-year program designed to deepen your understanding and practice of yoga.',
    image:`${extraImage.mayogaImg}`,
    url: '/ma-yoga-shastra'
  },
  {
    id: 11,
    title: 'BA Yoga Shastra',
    description:
        'A comprehensive four-year undergraduate program designed to build a strong foundation in the philosophy, science, and practice of yoga.',
    image:`${BA_yoga_1}`,
    url: '/ba-yoga-shastra'
  },
  {
    id: 10,
    title: 'Sattvik Kitchen',
    description:
        'A curation of Sattvik recipes by Spiritual Guru Dr. Hansaji Yogendra, these are carefully designed to ensure nutrition and balance in the body.',
    image:`${baseDomain}${homeAssets.homeAsset099}`,
    url: '/shop/product/65a8f78181ad17001903ab5e'
  },
  {
    id: 5,
    title: 'Full Moon Meditation',
    description:
      'Join us on full moon nights for meditation practice with Dr. Hansaji Yogendra to let go of stress and feel your worries melt away in the cool night breeze.',
    image: `${baseDomain}${homeAssets.homeAsset14}`,
    url: '/fullmoon-meditation',
  },
  {
    id: 1,
    title:'7 Rules to Reset Mind and Body',
    description:'A definite manual for joy and harmony throughout everyday life. Achieve balance and fulfillment through power-packed lessons.',
    image:`${baseDomain}${homeAssets.homeAsset26}`,
    url:'/shop/product/63e9c6acbd45e500128569ac',
  },
  {
    id: 2,
    title: 'Nutri Diet Clinic',
    description:'Our team of nutritional health experts will support and guide you on your health concerns. Get our customized plans and incorporate holistic changes.',
    image: `${baseDomain}${nutriDiet.nutriDietMain}`,
    url: '/nutri-diet',
  },
  {
    id: 3,
    title: 'Yoga by the bay',
    description:
      'Practice Yoga amidst the mesmerizing symphony of crashing waves, chirping birds, whistling winds and serenity of the sea at Marine Drive',
    image: `${baseDomain}${homeAssets.homeAsset12}`,
    url: '/yoga-by-the-bay',
  },
  {
    id: 4,
    title: 'Couple’s class',
    description:
      'This class will help couples fortify their bond, support the relationship, build intimacy and trust among couples. Join our year-long sessions.',
    image: `${baseDomain}${homeAssets.homeAsset13}`,
    url: '/couples-classes',
  },
  {
    id: 6,
    title: '1:1 home tuition',
    description:
      ' The institute offers the opportunity for individuals or groups to receive personalized and quality yoga education within the comfort of their homes',
    image: `${baseDomain}${homeAssets.homeAsset15}`,
    url: '/home-tuitions',
  },
  {
    id: 7,
    title: 'Samattvam',
    description:
      'This personalized well-being program provides individual guidance for life management from leading health experts and yoga practitioners. ',
    image: `${baseDomain}${homeAssets.homeAsset16}`,
    url: '/samattvam',
  },
  {
    id: 8,
    title: 'Corporate workshops',
    description:
      'This workshop is designed to boost productivity, happiness, achieve work-life balance, reduce stress, enhance leadership skills at the workplace.',
    image: `${baseDomain}${homeAssets.homeAsset17}`,
    url: '/corporate-workshops',
  },
  {
    id: 9,
    title: 'Sattvik Cooking Book',
    description:
      'This book, written by Dr. Hansaji Yogendra, contains easy-to-find Sattvik ingredient-based recipes that are both nutritious and delicious.',
    image: `${sattvik_img}`,
    url: '/sattvik-cooking',
  },
  // {
  //   id: 10,
  //   title: 'Sattvik Kitchen',
  //   description:
  //       'A curation of Sattvik recipes by Spiritual Guru Dr. Hansaji Yogendra, these are carefully designed to ensure nutrition and balance in the body.',
  //   image:`${baseDomain}${homeAssets.homeAsset099}`,
  //   url: '/shop/product/65a8f78181ad17001903ab5e'
  // }
]
