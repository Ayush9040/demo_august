/* eslint @typescript-eslint/no-var-requires: 0 */
const express = require('express')
const cheerio = require('cheerio')
const path = require('path')
const fs = require('fs')
const metaDataObj = require('./src/Constants/metaData.json')
const axios = require('axios')
const { cmsBaseDomain } = require('./src/Constants/appSettings')
//import { cmsBaseDomain } from './src/Constants/appSettings' 

const PORT = 5500

const app = express()

const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html', 'js', 'css', 'json', 'ico', 'png', 'jpg', 'txt', 'svg', 'woff', 'woff2', 'webp', 'map'],
  index: false,
  maxAge: '0',
  redirect: 'false',
  setHeaders: (res) => {
    res.set('x-timestamp', Date.now())
  },
}



//metaDataObj[correctPath] || await getBlogsMeta(correctPath)

const getMetaData = async (path) => {
  let pathName = path.slice(1)
  try {
    const res = await axios.get(
      `${cmsBaseDomain}/seometatags/?pagePath=${pathName}`
    )
    let data = res.data.data.meta
    let headers = {
      title: '',
      links: [],
      metaData: [],
      script: '',
    }

    data = data.replace(/\\n/g, '')
    data = data.split('\n')
    data.forEach((el) => {
      if (el.includes('<meta') || el.includes('<link')) {
        let obj = {}
        let regExp = /(\S+)="[^"]*/g
        let regexMatches = el.match(regExp)

        regexMatches.map((el) => {
          let partition = el.split('="')
          obj[partition[0]] = partition[1].replace(/"/g, '')
        })

        if (el.includes('<meta')) headers.metaData.push(obj)
        if (el.includes('<link')) headers.links.push(obj)
      } else if (el.includes('<title')) {
        headers.title = el.replace('<title>', '').replace('</title>', '')
      }
      else if (el.includes('<script')) headers.script = el
    })
    return { ...headers, h1Tag: metaDataObj?.[path]?.h1Tag, h2Tags: metaDataObj?.[path?.h2Tags], pTag: res.data.data?.pTag, aTags: res.data.data?.relatedCourses }
  } catch (err) {
    if (metaDataObj[path]) return metaDataObj[path]
    try {
      const res = await axios.get(`${cmsBaseDomain}/post${path}`)
      let data = res.data.data.meta
      let headers = {
        title: '',
        links: [],
        metaData: [],
        script: '',
        h1Tag: '',
        pTagBlog: res.data.data.content
      }
      headers.h1Tag = res.data.data.title
      data = data.replace(/\\n/g, '')
      data = data.split('\n')
      data.forEach((el) => {
        if (el.includes('<meta') || el.includes('<link')) {
          let obj = {}
          let regExp = /(\S+)="[^"]*/g
          let regexMatches = el.match(regExp)

          regexMatches.map(el => {
            let partition = el.split('="')
            obj[partition[0]] = partition[1].replace(/"/g, '')
          })

          if (el.includes('<meta'))
            headers.metaData.push(obj)
          if (el.includes('<link'))
            headers.links.push(obj)
        }
        else if (el.includes('<title')) {
          headers.title = el.replace('<title>', '').replace('</title>', '')
        }
        else if (el.includes('<script'))
          headers.script = el

      })
      return headers
    } catch (err) {
      // console.log(err)
    }
  }
}
const getBogLinks = async () => {
  const { data } = await axios.get(`${cmsBaseDomain}/misc/urlsarray`)
  return data.data
}
const RemoveTrailingSlash = (url) => {

  if (url.endsWith("/") && url !== "/") {
    const newPath = url.slice(0, -1);
    return newPath;
  }

  return url;
};

const redirectPage = async (path) => {//used to redirected non existing links
  let links404 = [
    "https://theyogainstitute.org/yoganew/patanjali-yoga-sutra-ch-1-sutra-10-parisamvad",
    "https://theyogainstitute.org/yoganew/dr-jayadeva-talking-saucha-purity",
    "https://theyogainstitute.org/yoganew/how-can-yoga-help-students-alleviate-examination-stress-and-make-them-perform-better",
    "https://theyogainstitute.org/yoganew/patanjali-yoga-sutra-2-5-parisamvad",
    "https://theyogainstitute.org/yoganew/patanjali-yoga-sutra-1-51-parisamvad",
    "https://theyogainstitute.org/yoganew/can-yoga-help-in-psychosomatic-disease",
    "https://theyogainstitute.org/yoganew/3-day-holistic-wellness-yoga-retreat-france",
    "https://theyogainstitute.org/yoganew/the-yoga-institute-conducted-yoga-sessions-for-sadhu-vaswani-mission",
    "https://theyogainstitute.org/yoganew/diy-quick-top-5-yoga-tips-to-keep-the-exam-stress-at-bay",
    "https://theyogainstitute.org/yoganew/weekly-update-talks-yoga-dr-jayadeva-14th-april-17th-april",
    "https://theyogainstitute.org/yoganew/conditioning-yoga",
    "https://theyogainstitute.org/yoganew/yoga-tips-reduce-side-fat",
    "https://theyogainstitute.org/yoganew/dishonesty-is-not-the-best-policy-dr-jayadeva-yogendra",
    "https://theyogainstitute.org/yoganew/patanjali-yoga-sutra-1-30-parisamvad",
    "https://theyogainstitute.org/yoganew/corporate-workshops",
    "https://theyogainstitute.org/yoganew/importance-of-sleep-in-our-daily-life",
    "https://theyogainstitute.org/yoganew/drawing-a-line",
    "https://theyogainstitute.org/yoganew/qa-on-change-yourself",
    "https://theyogainstitute.org/yoganew/dr-jayadeva-on-paramhamsa-madhavadasji-overcoming-bad-habits-at-the-satsang-3rd-jan-2013",
    "https://theyogainstitute.org/yoganew/weekly-update-talks-on-yoga-by-dr-jayadeva-yogendra-8th-11th-june-2013",
    "https://theyogainstitute.org/yoganew/weekly-update-talks-yoga-dr-jayadeva-6th-april-10th-april",
    "https://theyogainstitute.org/yoganew/weekly-update-talks-yoga-dr-jayadeva-30th-march-4th-april",
    "https://theyogainstitute.org/yoganew/q-a-on-sanskaras-values-at-the-satsang-13th-jan-2013",
    "https://theyogainstitute.org/yoganew/hansaji-talking-saints-india",
    "https://theyogainstitute.org/yoganew/june-2011-editorial",
    "https://theyogainstitute.org/yoganew/weekly-update-talks-on-yoga-by-dr-jayadeva-18-24-may-2013",
    "https://theyogainstitute.org/yoganew/weekly-update-talks-on-yoga-by-dr-jayadeva-24th-30th-aug-2013",
    "https://theyogainstitute.org/yoganew/dr-jayadeva-on-positive-thinking-at-the-satsang",
    "https://theyogainstitute.org/yoganew/sincere-commitment",
    "https://theyogainstitute.org/yoganew/dr-jayadeva-talking-on-tension-and-relaxation",
    "https://theyogainstitute.org/yoganew/dr-jayadeva-on-sanskaras-values-at-the-satsang-13th-jan-2013",
    "https://theyogainstitute.org/yoganew/qa-on-saints-of-india-at-the-satsang-14th-april-2013",
    "https://theyogainstitute.org/yoganew/every-moment-a-wonder",
    "https://theyogainstitute.org/June",
    "https://theyogainstitute.org/Konasana%E2%80%93the-Angle-Pose-a-guide-to-konasana-benefits-and-techniques",
    "https://theyogainstitute.org/diet-workshop",
    "https://theyogainstitute.org/5th-international-day-of-yoga",
    "https://theyogainstitute.org/konasana-the-angle-pose",
    "https://theyogainstitute.org/200-hrs-part-time-ttc-online-english-nov-dec",
    "https://theyogainstitute.org/null",
    "https://theyogainstitute.org/21-days-better-living-course-batch-4",
    "https://theyogainstitute.org/Celebrating",
    "https://theyogainstitute.org/senior-citizen-workshop",
    "https://theyogainstitute.org/%E0%A5%90-aum-a-success-mantra",
    "https://theyogainstitute.org/6-relaxation-techniques-for-stress",
    "https://theyogainstitute.org/good-food-fest",
    "https://theyogainstitute.org/patanjali-yoga-sutra-1-38",
    "https://theyogainstitute.org/terms-and-condition",
    "https://theyogainstitute.org/vacation-camp-children",
    "https://theyogainstitute.org/raipur",
    "https://theyogainstitute.org/virtual-tour-the-yoga-institute-exterior",
    "https://theyogainstitute.org/free-yoga-camps",
    "https://theyogainstitute.org/can-meditation-replace-medication",
    "https://theyogainstitute.org/blog",
    "https://theyogainstitute.org/meditation-camp",
    "https://theyogainstitute.org/weekend",
    "https://theyogainstitute.org/7-days-online-yoga-camp",
    "https://theyogainstitute.org/Poses",
    "https://theyogainstitute.org/5-powerful-ways-to-hit-the-pa",
    "https://theyogainstitute.org/spain-english",
    "https://theyogainstitute.org/index.html",
    "https://theyogainstitute.org/free-yoga-online-camps",
    "https://theyogainstitute.org/print-media/Bulletins",
    "https://theyogainstitute.org/yoga-sutra-isvara-pranidhanat",
    "https://theyogainstitute.org/Boost",
    "https://theyogainstitute.org/thank-you-hindi-ttc-registration",
    "https://theyogainstitute.org/yoga-and-total-healthT",
    "https://theyogainstitute.org/italy",
    "https://theyogainstitute.org/what-is-sattvic-diet/10",
    "https://theyogainstitute.org/200-hrs-part-time-ttc-online-camp-form-lp",
    "https://theyogainstitute.org/importance-of-the-spine-in-yoga/sitting-vakrasana-twist",
    "https://theyogainstitute.org/product/how-to-train-the-subconscious-mind",
    "https://theyogainstitute.org/yoga-calendar",
    "https://theyogainstitute.org/what-is-sattvic-diet/common",
    "https://theyogainstitute.org/900-hours-advanced-teach",
    "https://theyogainstitute.org/what-is-sattvic-diet/wrestling",
    "https://theyogainstitute.org/what-is-sattvic-diet/terms",
    "https://theyogainstitute.org/Planning",
    "https://theyogainstitute.org/publications.htm",
    "https://theyogainstitute.org/about_us.htm",
    "https://theyogainstitute.org/Managing",
    "https://theyogainstitute.org/quotes",
    "https://theyogainstitute.org/Yoga%E2%80%99s",
    "https://theyogainstitute.org/The",
    "https://theyogainstitute.org/what-is-sattvic-diet/cricket",
    "https://theyogainstitute.org/Kaivalyadham",
    "https://theyogainstitute.org/Mumbai",
    "https://theyogainstitute.org/Meditative",
    "https://theyogainstitute.org/5-kleshas-root-causes-of-suffering-in-life/practice \nof yoga",
    "https://theyogainstitute.org/Yoga for painful shoulders",
    "https://theyogainstitute.org/If",
    "https://theyogainstitute.org/easy-ways-to-ease-anxiety/Dhanurasana",
    "https://theyogainstitute.org/newsletters",
    "https://theyogainstitute.org/Why",
    "https://theyogainstitute.org/what-is-unconditional-love",
    "https://theyogainstitute.org/yoga-total-health-journal-magazine",
    "https://theyogainstitute.org/certification-course-on-yoga-sutra-online",
    "https://theyogainstitute.org/3-months-superior-teacher-training-course",
    "https://theyogainstitute.org/shop/cart",
    "https://theyogainstitute.org/few-yoga-handy",
    "https://theyogainstitute.org/blog/mother-sita-devis-birth-anniversary-celebrations",
    "https://theyogainstitute.org/3-month-ttc",
    "https://theyogainstitute.org/yoga-asanas-dos",
    "https://theyogainstitute.org/Complete",
    "https://theyogainstitute.org/yoga-asanas-dos-and",
    "https://theyogainstitute.org/definition/mantra",
    "https://theyogainstitute.org/goa-ttc-camp-form",
    "https://theyogainstitute.org/full-moon-meditation",
    "https://theyogainstitute.org/blog/drawing-a-line",
    "https://theyogainstitute.org/blog/dr-jayadeva-on-yoga-for-the-golden-years-at-the-santsang-17th-feb-2013",
    "https://theyogainstitute.org/blog/dr-jayadeva-on-paramhamsa-madhavadasji-overcoming-bad-habits-at-the-satsang-3rd-jan-2013",
    "https://theyogainstitute.org/blog/hansaji-talking-on-asteya-non-stealing",
    "https://theyogainstitute.org/blog/Official",
    "https://theyogainstitute.org/yoga-therapy-course",
    "https://theyogainstitute.org/product-category/regular-classes/weekend-yoga-regular-classes",
    "https://theyogainstitute.org/counselling-service",
    "https://theyogainstitute.org/a-simple-guide-to-meditation-for-beginners",
    "https://theyogainstitute.org/kids-camp",
    "https://theyogainstitute.org/product/online-swadhyay-english",
    "https://theyogainstitute.org/thank-you-ttc-registration-on-campus-sp",
    "https://theyogainstitute.org/happy-teachers-day-2017",
    "https://theyogainstitute.org/gallery-golden-book-of-world-records",
    "https://theyogainstitute.org/payment-status",
    "https://theyogainstitute.org/Empowering",
    "https://theyogainstitute.org/yoga-poses",
    "https://theyogainstitute.org/performance-by-sukhwinder-singh",
    "https://theyogainstitute.org/product/yogic-life-for-control-of-diabetes-hansaji-armaiti-desai",
    "https://theyogainstitute.org/stable-mind-stable-health",
    "https://theyogainstitute.org/category/satsang",
    "https://theyogainstitute.org/200-hrs-part-time-ttc-online-camp-form-english",
    "https://theyogainstitute.org/high-vibration-people-definition,-signs,-and-how-to-become-one",
    "https://theyogainstitute.org/rooftop-space",
    "https://theyogainstitute.org/parisamvad",
    "https://theyogainstitute.org/curso-de-formaci",
    "https://theyogainstitute.org/ganesh-chaturthi-2017",
    "https://theyogainstitute.org/whats_new.htm",
    "https://theyogainstitute.org/the-store-of-the-yoga-institute/%3Cacessado",
    "https://theyogainstitute.org/product/7-days-camp-insight-into-yoga-non-residential-hindi-may",
    "https://theyogainstitute.org/Sign",
    "https://theyogainstitute.org/21-days-better-living",
    "https://theyogainstitute.org/Bulletins",
    "https://theyogainstitute.org/trataka.yogic.eyecare",
    "https://theyogainstitute.org/200-hrs-part-time-ttc-on",
    "https://theyogainstitute.org/900-hour",
    "https://theyogainstitute.org/900-hours-advanced",
    "https://theyogainstitute.org/yoga%20to%20increase%20immunity",
    "https://theyogainstitute.org/Yoga%20Asanas%20Do%E2%80%99s%20and%20Don%E2%80%99ts%20for%20Beginners",
    "https://theyogainstitute.org/200-hrs-part-time-ttc",
    "https://theyogainstitute.org/Sleep",
    "https://theyogainstitute.org/product/online-stress",
    "https://theyogainstitute.org/product/7-days-camp-insight-into-yoga-residential-nov",
    "https://theyogainstitute.org/parisamwad.htm",
    "https://theyogainstitute.org/Face",
    "https://theyogainstitute.org/Exploring",
    "https://theyogainstitute.org/Reputable",
    "https://theyogainstitute.org/donation/62da3b1e4b905a0012149926",
    "https://theyogainstitute.org/yoga-asanas-for-healthy-mind-and-body%3E",
    "https://theyogainstitute.org/one-mont",
    "https://theyogainstitute.org/7-days-camp/Register",
    "https://theyogainstitute.org/and",
    "https://theyogainstitute.org/one-month-ttc/Register",
    "https://theyogainstitute.org/product/online-patanjalis",
    "https://theyogainstitute.org/patanjali-yoga-sutra-2-16-paris",
    "https://theyogainstitute.org/wellness-camps",
    "https://theyogainstitute.org/product/online-swadhyay",
    "https://theyogainstitute.org/asana-regular-classes-on",
    "https://theyogainstitute.org/qwertyqwerty",
    "https://theyogainstitute.org/yoga"
  ]

  let links301 = [
    "https://theyogainstitute.org/patanjali-yoga-sutra-ch-1-sutra-10-parisamvad",
    "https://theyogainstitute.org/dr-jayadeva-talking-saucha-purity",
    "https://theyogainstitute.org/how-can-yoga-help-students-alleviate-examination-stress-and-make-them-perform-better",
    "https://theyogainstitute.org/patanjali-yoga-sutra-2-5-parisamvad",
    "https://theyogainstitute.org/patanjali-yoga-sutra-1-51-parisamvad",
    "https://theyogainstitute.org/can-yoga-help-in-psychosomatic-disease",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org/the-yoga-institute-conducted-yoga-sessions-for-sadhu-vaswani-mission",
    "https://theyogainstitute.org/diy-quick-top-5-yoga-tips-to-keep-the-exam-stress-at-bay",
    "https://theyogainstitute.org/weekly-update-talks-yoga-dr-jayadeva-14th-april-17th-april",
    "https://theyogainstitute.org/conditioning-yoga",
    "https://theyogainstitute.org/yoga-tips-reduce-side-fat",
    "https://theyogainstitute.org/dishonesty-is-not-the-best-policy-dr-jayadeva-yogendra",
    "https://theyogainstitute.org/patanjali-yoga-sutra-1-30-parisamvad",
    "https://theyogainstitute.org/corporate-workshops",
    "https://theyogainstitute.org/importance-of-sleep-in-our-daily-life",
    "https://theyogainstitute.org/drawing-a-line",
    "https://theyogainstitute.org/qa-on-change-yourself",
    "https://theyogainstitute.org/dr-jayadeva-on-paramhamsa-madhavadasji-overcoming-bad-habits-at-the-satsang-3rd-jan-2013",
    "https://theyogainstitute.org/weekly-update-talks-on-yoga-by-dr-jayadeva-yogendra-8th-11th-june-2013",
    "https://theyogainstitute.org/weekly-update-talks-yoga-dr-jayadeva-6th-april-10th-april",
    "https://theyogainstitute.org/weekly-update-talks-yoga-dr-jayadeva-30th-march-4th-april",
    "https://theyogainstitute.org/q-a-on-sanskaras-values-at-the-satsang-13th-jan-2013",
    "https://theyogainstitute.org/hansaji-talking-saints-india",
    "https://theyogainstitute.org/june-2011-editorial",
    "https://theyogainstitute.org/weekly-update-talks-on-yoga-by-dr-jayadeva-18-24-may-2013",
    "https://theyogainstitute.org/weekly-update-talks-on-yoga-by-dr-jayadeva-24th-30th-aug-2013",
    "https://theyogainstitute.org/dr-jayadeva-on-positive-thinking-at-the-satsang",
    "https://theyogainstitute.org/sincere-commitment",
    "https://theyogainstitute.org/dr-jayadeva-talking-on-tension-and-relaxation",
    "https://theyogainstitute.org/dr-jayadeva-on-sanskaras-values-at-the-satsang-13th-jan-2013",
    "https://theyogainstitute.org/qa-on-saints-of-india-at-the-satsang-14th-april-2013",
    "https://theyogainstitute.org/every-moment-a-wonder",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org/konasana-the-angle-pose-a-guide-to-konasana-benefits-and-techniques",
    "https://theyogainstitute.org/weight-management-workshop",
    "https://theyogainstitute.org/4th-international-day-of-yoga-celebrations-2018",
    "https://theyogainstitute.org/konasana-the-angle-pose-a-guide-to-konasana-benefits-and-techniques",
    "https://theyogainstitute.org/200-hrs-part-time-ttc-online-english",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org/21-days-better-living-course-batch-3",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org/success-mantra-learn-meditation",
    "https://theyogainstitute.org/practical-yogic-guidelines-to-beat-stress",
    "https://theyogainstitute.org/happy-harmony-fest-and-ringing-in-the-new-year-2019",
    "https://theyogainstitute.org/patanjali-yoga-sutra-1-38-parisamvad",
    "https://theyogainstitute.org/terms-and-conditions",
    "https://theyogainstitute.org/summer-camp-for-kids-5-to-12-years",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org/free-yoga-camps-may-june-2015",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org/blogs",
    "https://theyogainstitute.org/7-days-camp",
    "https://theyogainstitute.org/weekend-classes",
    "https://theyogainstitute.org/7-days-camp-english",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org/5-powerful-ways-to-hit-the-pause-button",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org/7-days-camp",
    "https://theyogainstitute.org/print-media",
    "https://theyogainstitute.org/yoga-sutra-isvara-pranidhanat-va-1-23",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org/yoga-and-total-health",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org/what-is-sattvic-diet",
    "https://theyogainstitute.org/200-hrs-part-time-ttc-online-english",
    "https://theyogainstitute.org/importance-of-the-spine-in-yoga",
    "https://theyogainstitute.org/the-subconscious-mind",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org/what-is-sattvic-diet",
    "https://theyogainstitute.org/900-hours-advanced-teacher-training-course",
    "https://theyogainstitute.org/what-is-sattvic-diet",
    "https://theyogainstitute.org/what-is-sattvic-diet",
    "https://theyogainstitute.org/planning-the-perfect-getaway-for-relaxation",
    "https://theyogainstitute.org/library",
    "https://theyogainstitute.org/know-us-better",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org/what-is-sattvic-diet",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org/how-to-meditate",
    "https://theyogainstitute.org/5-kleshas-root-causes-of-suffering-in-life",
    "https://theyogainstitute.org/yoga-postures-for-shoulder-pain-and-neck-pain",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org/easy-ways-to-ease-anxiety",
    "https://theyogainstitute.org/launch-of-yogasattva-monthly-e-newsletter-of-the-yoga-institute-tyi-india",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org/what-is-unconditional-love-do-you-have-it",
    "https://theyogainstitute.org/yoga-and-total-health",
    "https://theyogainstitute.org/patanjali-yoga-sutra-1-33-parisamvad",
    "https://theyogainstitute.org/3-months-advanced-teacher-training-course",
    "https://theyogainstitute.org/shop",
    "https://theyogainstitute.org/few-yoga-handy-tips-for-flight-seats",
    "https://theyogainstitute.org/mother-sita-devis-birth-anniversary-celebrations",
    "https://theyogainstitute.org/3-months-advanced-teacher-training-course",
    "https://theyogainstitute.org/yoga-asanas-dos-and-donts-for-beginners",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org/yoga-asanas-dos-and-donts-for-beginners",
    "https://theyogainstitute.org/mystic-mantra-chants",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org/fullmoon-meditation",
    "https://theyogainstitute.org/drawing-a-line",
    "https://theyogainstitute.org/dr-jayadeva-on-yoga-for-the-golden-years-at-the-santsang-17th-feb-2013",
    "https://theyogainstitute.org/dr-jayadeva-on-paramhamsa-madhavadasji-overcoming-bad-habits-at-the-satsang-3rd-jan-2013",
    "https://theyogainstitute.org/hansaji-talking-on-asteya-non-stealing",
    "https://theyogainstitute.org/blogs",
    "https://theyogainstitute.org/certificate-yoga-therapy-course-online",
    "https://theyogainstitute.org/weekend-classes",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org/guided-meditation",
    "https://theyogainstitute.org/yoga-camps-for-kids",
    "https://theyogainstitute.org/swadhyaya",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org/happy-teachers-day-2024",
    "https://theyogainstitute.org/image-gallery",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org/empowering-teenage-girls-through-yoga",
    "https://theyogainstitute.org/the-perfect-yoga-poses-to-power-up-your-mornings",
    "https://theyogainstitute.org/sukhwinder-singh-performs-at-the-yoga-institute-santacruz-on-janmashtmi-2016",
    "https://theyogainstitute.org/yoga-therapeutic-for-diabetes",
    "https://theyogainstitute.org/rejuvenating-your-mind-with-meditation",
    "https://theyogainstitute.org/satsang",
    "https://theyogainstitute.org/200-hrs-part-time-ttc-online-english",
    "https://theyogainstitute.org/high-vibration-people-definition-signs-and-how-to-become-one",
    "https://theyogainstitute.org/yoga-halls-rooftop-space",
    "https://theyogainstitute.org/yoga-sutra-1-01-parisamvad",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org/ganesh-chaturthi-2024",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org/book-store",
    "https://theyogainstitute.org/7-days-camp",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org/21-days-better-living-course",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org/trataka-yogic-eye-care",
    "https://theyogainstitute.org/200-hrs-part-time-ttc-online-english",
    "https://theyogainstitute.org/900-hours-advanced-teacher-training-course",
    "https://theyogainstitute.org/900-hours-advanced-teacher-training-course",
    "https://theyogainstitute.org/yoga-for-immunity",
    "https://theyogainstitute.org/yoga-asanas-dos-and-donts-for-beginners",
    "https://theyogainstitute.org/200-hrs-part-time-ttc-online-english",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org/stress-management-camp",
    "https://theyogainstitute.org/7-days-camp",
    "https://theyogainstitute.org/yoga-sutra-1-01-parisamvad",
    "https://theyogainstitute.org/face-yoga-for-beginners",
    "https://theyogainstitute.org/exploring-chakras-and-yoga-practices",
    "https://theyogainstitute.org/reputable-yoga-school-for-yoga-teachers-training",
    "https://theyogainstitute.org/donate",
    "https://theyogainstitute.org/yoga-asanas-for-healthy-mind-and-body",
    "https://theyogainstitute.org/one-month-ttc",
    "https://theyogainstitute.org/7-days-camp-english",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org/one-month-ttc",
    "https://theyogainstitute.org/patanjali-yoga-sutra-2-11-parisamvad",
    "https://theyogainstitute.org/patanjali-yoga-sutra-2-16-parisamvad",
    "https://theyogainstitute.org/wellness",
    "https://theyogainstitute.org/swadhyaya",
    "https://theyogainstitute.org/asana-regular-classes-online",
    "https://theyogainstitute.org",
    "https://theyogainstitute.org"
  ]

  let searchString = `https://theyogainstitute.org${path}`;//in array strings have base URLs so adding here
  let index = links404.indexOf(searchString)
  if (index !== -1) {
    //for navigation no need of base URl, so removing here
    return { isNavigate: true, path: links301[index]?.replace("https://theyogainstitute.org", "") == "" ? '/' : links301[index]?.replace("https://theyogainstitute.org", "") }
  }
  else {
    return { isNavigate: false }
  }
}

app.use(express.static('build', options))
app.get('*', async (req, res) => {
  const { path: reqPath } = req
  console.log(reqPath);

  const navigationRes = await redirectPage(reqPath);
  if (navigationRes?.isNavigate === true) {
    return res.redirect(301, navigationRes?.path)
  }

  let correctPath = reqPath
  const indexHtmlPath = path.resolve(__dirname, './build/index.html')
  const indexHtml = fs.readFileSync(indexHtmlPath)
  const $ = cheerio.load(indexHtml)
  if (reqPath.endsWith('/') && !(reqPath.length === 1 && reqPath === '/')) correctPath = reqPath.slice(0, -1)
  const metaData = await getMetaData(correctPath)

  let titleTag = null
  let metaArray = []
  let linkArray = []
  let linkArryBlogs = await getBogLinks()
  let script = ''
  let h1Tag = null
  let h2Tags = []
  let aTags = []
  let courseaTags = []
  let blogATags = []
  let pTag = ''
  let pTagBlog = ''

  if (metaData && metaData.title) titleTag = `<title>${metaData.title}</title>`
  if (metaData && metaData.links) {
    linkArray = metaData.links.map((link) => {
      if (link.rel) return `<link class="meta-heading" rel=${link.rel || ''} href=${RemoveTrailingSlash(link.href) || ''}  />`
    })
  }
  if (metaData && metaData.metaData) {
    metaArray = metaData.metaData.map((meta) => {
      if (meta.name) return `<meta name="${meta.name || ''}" content="${String(meta.content) || ''}" data-react-helmet="true" />`
      if (meta.property) return `<meta property="${meta.property || ''}" content="${String(meta.content) || ''}" data-react-helmet="true" />`
      return null
    })
  }
  if (metaData && metaData.script) script = metaData.script

  if (metaData && metaData.h1Tag) h1Tag = `<h1 class="meta-heading">${metaData.h1Tag}</h1>`
  if (metaData && metaData.h2Tags) {
    h2Tags = metaData.h2Tags.map((string) => `<h2 class="meta-heading">${string}</h2>`)
  }
  if (metaData && metaData.aTags) {
    aTags = metaData.aTags.map((url) => `<a class="meta-heading" href=${url} >${url}</a>`)
    blogATags = linkArryBlogs.map((url) => `<a class="meta-heading" href=${url} >${url}</a>`)
  }
  if (metaData && metaData.pTag) {
    pTag = `<p class="meta-heading">${metaData.pTag}</p>`
  }
  if (metaData && metaData.pTagBlog) {
    pTagBlog = `<div class="meta-heading">${metaData.pTagBlog}</div>`
  }
  if (metaData && metaData.aTag) {//added to test related courses as anchor tags
    courseaTags = metaData.aTag.map((url) => `<a  class="meta-heading" href=https://theyogainstitute.org/${url} >https://theyogainstitute.org/${url}</a>`)
  }
  let fbMeta = null
  if (reqPath == '/') {
    fbMeta='<meta name="facebook-domain-verification" content="2rnujs1l73gzsee6p372eih8c81lik" />'
  }

  $('head').append([titleTag, script, ...metaArray, ...linkArray, fbMeta])
  $('body').append([h1Tag, ...h2Tags, ...aTags, ...blogATags, pTag, pTagBlog, ...courseaTags])
  res.status(200).send($.html())
})

app.listen(PORT, () => {
  console.log('SERVER Started at port: ' + PORT)
})
