import { lazy } from 'react'
import NutriDietClinic from '../Views/LandingPage/NutriDietClinic/AboutClinic'
const Home = lazy(() => import('../Views/Home'))
const TermsCondition = lazy(() => import('../Components/TermsandCondition'))
const PrivacyPolicy = lazy(() => import('../Components/PrivacyPolicy'))
const Affiliations = lazy(() => import('../Components/Affiliations'))
const Enrollment = lazy(() => import('../Components/EnrollmentForm'))
const wellness = lazy(() => import('../Components/Wellness'))
const CorporateSocialResponsibilty = lazy(() =>
  import('../Components/CorporateSocialResponsibility')
)
const Course = lazy(() => import('../Views/Courses/Views/course-page'))
const SingleCsr = lazy(() =>
  import('../Components/CorporateSocialResponsibility/SingleCsr')
)
const BrowseCourses = lazy(() =>
  import('../Views/Courses/Views/browse-courses')
)
const Experiences = lazy(() => import('../Views/Experience'))
const Museum = lazy(() => import('../Views/Museum'))
const Thankyou = lazy(() => import('../Components/EnrollmentForm/ThankYou'))
const SattvikCooking = lazy(() =>
  import('../Components/Highlights/SattvikCooking')
)
const YogaByTheBay = lazy(() => import('../Components/Highlights/YogaByTheBay'))
const FullmoonMeditation = lazy(() =>
  import('../Components/Highlights/FullmoonMeditation')
)
const CorporateWorkshop = lazy(() =>
  import('../Components/Highlights/CorporateWorkshop')
)
const OnlineTution = lazy(() => import('../Views/HomeTuitions/Tutions'))
const AboutUs = lazy(() => import('../Views/About/Views/overview'))
const OurLegacy = lazy(() => import('../Views/About/Views/our-legacy'))
const Blessings = lazy(() => import('../Views/About/Views/blessings'))
const Facilities = lazy(() => import('../Views/Facilities/Views/facilities'))
const DonationPage = lazy(() => import('../Views/Donation/Views/donation-page'))
const MediaGallery = lazy(() => import('../Views/Media/Views/media-gallery'))
const GalleryVideo = lazy(() => import('../Views/Media/Views/media-video'))
const YogaTotalHealth = lazy(() =>
  import('../Views/Publication/Views/yoga-health')
)
const Yogasattva = lazy(() => import('../Views/Publication/Views/yogasattva'))
const library = lazy(() => import('../Views/Publication/Views/library'))
const BlogPage = lazy(() => import('../Views/Blogs/Views/blog-page'))
const OurLegacyModal = lazy(() => import('../Components/OurLegacyModal'))
const SocialResponsibility = lazy(() =>
  import('../Views/SocialPage/Views/social-responsibility')
)
const VolunteerPage = lazy(() => import('../Views/Volunteer/Views/volunteer'))
const Values = lazy(() => import('../Views/Volunteer/Views/values'))
const AlumniGallery = lazy(() => import('../Views/Alumni/Views/alumni-gallery'))
const Support = lazy(() => import('../Views/Alumni/Views/support'))
const Facts = lazy(() => import('../Views/Facts/Views/our-facts'))
const Shop = lazy(()=>import('../Views/Shop/Views/shop/shop'))
const SingleProduct = lazy(()=>import('../Views/Shop/Views/single-product'))

import Authentication from '../Views/Authentication'
import OrderHistroy from '../Views/Shop/Views/order-history'
const SearchModal = lazy(()=>import( '../Views/SearchModal'))
import CampaignThankYou from '../Views/LandingPage/ThankYouPage'
import StudentExperience from '../Views/Experience/Views/StudentExperience'
// import VolunteerPage from '../Views/Volunteer'
// import VolunteerPage from '../Views/Volunteer'
// import Thankyou from '../Components/EnrollmentForm/ThankYou'
// import SattvikCooking from '../Components/Highlights/SattvikCooking'
// import YogaByTheBay from '../Components/Highlights/YogaByTheBay'
// import FullmoonMeditation from '../Components/Highlights/FullmoonMeditation'
// import CorporateWorkshop from '../Components/Highlights/CorporateWorkshop'
// import OnlineTution from '../Components/Highlights/OnlineTution'
const AddToCart  = lazy(()=>import('../Views/Shop/Views/cart'))
const ShippingAdd  = lazy(()=>import('../Views/Shop/Views/address'))
const ShopThankyou  = lazy(()=>import('../Views/Shop/Views/thankyoupage'))

const SingleJob = lazy(() => import('../Views/Careers/Views/single-job'))
const VolunteerJob = lazy(() => import('../Views/Volunteer/Views/volunteerJob'))
const PrintMedia = lazy(() =>
  import('../Views/Media/Views/Print-Digital/print-media')
)
const DigitalMedia = lazy(() =>
  import('../Views/Media/Views/Print-Digital/digital-media')
)
const SatsangThankyou = lazy(() =>
  import('../Components/EnrollmentForm/SatsangThankYou')
)
const SingleDonation = lazy(() =>
  import('../Views/Donation/Views/single-donation')
)
const News = lazy(() => import('../Views/Media/Views/news'))
const Careers = lazy(() => import('../Views/Careers/Views/careers'))
const Gifting = lazy(() => import('../Views/Gifting/Views/gifting'))
const DescisionComp = lazy(() => import('../Views/DecisionComponent'))
const JuhuVileLoc = lazy(() => import('../Components/LocateUs/JuhuVileLoc'))
const LocateUs = lazy(()=> import ('../Components/LocateUs'))
const LocateDetails = lazy(()=> import ('../Components/LocateUs/LocationDetails'))
const NutriDiet = lazy(()=>import('../Views/NutriDiet'))
const LandingPage = lazy( ()=>import('../Views/LandingPage'))
const LandingPageNew = lazy( ()=>import('../Views/LandingPage/21Days/index'))
const SevenDays = lazy( ()=>import('../Views/LandingPage/SevenDays/AboutCamp/index'))

const staticSiteRoutes = [
  //Home
  {
    Component: Home,
    path: '/',
    exact: true,
    id: 'statisSiteHome',
    routePath: '/',
    name: 'Home',
  },
  //SocialPage
  {
    Component: SocialResponsibility,
    path: '/social-initiatives',
    exact: true,
    id: 'statisSiteSocial',
    routePath: '/social-initiatives',
    name: 'Social',
  },
  //Course
  {
    Component: Course,
    path: '/courses',
    exact: true,
    id: 'statisSiteCourses',
    routePath: '/courses',
    name: 'Courses',
  },
  {
    Component: BrowseCourses,
    path: '/courses/browse/:type',
    exact: true,
    id: 'statisSiteCoursesBrowse',
    routePath: '/courses/browse/:type',
    name: 'Courses',
  },
  //About
  {
    Component: AboutUs,
    path: '/know-us-better',
    exact: true,
    id: 'statisSiteAbout',
    routePath: '/know-us-better',
    name: 'About',
  },
  {
    Component: OurLegacy,
    path: '/our-legacy',
    exact: true,
    id: 'statisSiteAbout',
    routePath: '/our-legacy',
    name: 'About',
  },
  {
    Component: Blessings,
    path: '/blessings',
    exact: true,
    id: 'statisSiteAbout',
    routePath: '/blessings',
    name: 'About',
  },
  {
    Component: OurLegacyModal,
    path: '/our-legacy/:name',
    exact: true,
    id: 'statisSiteOurLegacyModal',
    routePath: '/our-legacy/:name',
    name: 'OurLegacyModal',
  },
  //facilities
  {
    Component: Facilities,
    path: '/facilities',
    exact: true,
    id: 'statisSiteFacilites',
    routePath: '/facilities',
    name: 'Facilites',
  },
  {
    Component: Facilities,
    path: '/hostels',
    exact: true,
    id: 'statisSiteHostel',
    routePath: '/hostels',
    name: 'Hostel',
  },
  {
    Component: Facilities,
    path: '/conference-room',
    exact: true,
    id: 'statisSiteConferenceRoom',
    routePath: '/conference-room',
    name: 'ConferenceRoom',
  },
  {
    Component: Facilities,
    path: '/yoga-library',
    exact: true,
    id: 'statisSiteYogaLibrary',
    routePath: '/yoga-library',
    name: 'YogaLibrary',
  },
  {
    Component: Facilities,
    path: '/book-store',
    exact: true,
    id: 'statisSiteBookStore',
    routePath: '/book-store',
    name: 'BookStore',
  },
  {
    Component: Facilities,
    path: '/yoga-halls-rooftop-space',
    exact: true,
    id: 'statisSiteYogaHall',
    routePath: '/yoga-halls-rooftop-space',
    name: 'YogaHall',
  },
  {
    Component: Facilities,
    path: '/yoga-halls-rooftop-space',
    exact: true,
    id: 'statisSiteRooftopSpace',
    routePath: '/yoga-halls-rooftop-space',
    name: 'RooftopSpace',
  },
  {
    Component: Facilities,
    path: '/dining-hall',
    exact: true,
    id: 'statisSiteDiningHall',
    routePath: '/dining-hall',
    name: 'DiningHall',
  },
  {
    Component: Facilities,
    path: '/nature-trail',
    exact: true,
    id: 'statisSiteNatureTrail',
    routePath: '/nature-trail',
    name: 'NatureTrail',
  },
  {
    Component: Facilities,
    path: '/gazebo',
    exact: true,
    id: 'statisSiteGazebo',
    routePath: '/gazebo',
    name: 'Gazebo',
  },
  {
    Component: Facilities,
    path: '/kailaspati-tree',
    exact: true,
    id: 'statisSiteKailaspatiTree',
    routePath: '/kailaspati-tree',
    name: 'KailaspatiTree',
  },
  {
    Component: Facilities,
    path: '/Rules-and-Regulations',
    exact: true,
    id: 'statisSiteRulesAndRegulations',
    routePath: '/Rules-and-Regulations',
    name: 'Rules and Regulations',
  },
  //Museum
  {
    Component: Museum,
    path: '/museum-of-classical-yoga',
    exact: true,
    id: 'statisSiteMuseum',
    routePath: '/museum-of-classical-yoga',
    name: 'Museum',
  },
  //Donate
  {
    Component: DonationPage,
    path: '/donate',
    exact: true,
    id: 'statisSiteDonate',
    routePath: '/donate',
    name: 'Donate',
  },
  //Gifting
  //Media
  {
    Component: MediaGallery,
    path: '/image-gallery',
    exact: true,
    id: 'statisSiteImageGallery',
    routePath: '/image-gallery',
    name: 'ImageGallery',
  },
  {
    Component: News,
    path: '/media',
    exact: true,
    id: 'statisSiteNews',
    routePath: '/media',
    name: 'News',
  },
  {
    Component: PrintMedia,
    path: '/print-media',
    exact: true,
    id: 'statisSitePrintMedia',
    routePath: '/print-media',
    name: 'PrintMedia',
  },
  {
    Component: DigitalMedia,
    path: '/digital-media',
    exact: true,
    id: 'statisSiteDigitalMedia',
    routePath: '/digital-media',
    name: 'DigitalMedia',
  },
  {
    Component: GalleryVideo,
    path: '/video-gallery',
    exact: true,
    id: 'statisSiteImageVideoGallery',
    routePath: '/video-gallery',
    name: 'VideoGallery',
  },
  //Publications
  {
    Component: YogaTotalHealth,
    path: '/yoga-and-total-health/',
    exact: true,
    id: 'statisSiteYogaAndHealth',
    routePath: '/yoga-and-total-health/',
    name: 'YogaAndHealth',
  },
  {
    Component: Yogasattva,
    path: '/yogasattva',
    exact: true,
    id: 'statisSiteYogsattva',
    routePath: '/yogasattva',
    name: 'Yogasattva',
  },
  {
    Component: library,
    path: '/library',
    exact: true,
    id: 'statisSiteYogsattva',
    routePath: '/library',
    name: 'Yogasattva',
  },
  //Blogs
  {
    Component: BlogPage,
    path: '/blogs',
    exact: true,
    id: 'statisSiteBlog',
    routePath: '/blogs',
    name: 'Blog',
  },
  //Experiences/Testimonials
  {
    Component: Experiences,
    path: '/testimonials',
    exact: true,
    id: 'statisSiteTestimonials',
    routePath: '/testimonials',
    name: 'Testimonials',
  },
  {
    Component: StudentExperience,
    path: '/student-experience',
    exact: true,
    id: 'statisSitestudent-experience',
    routePath: '/student-experience',
    name: 'student-experience',
  },
  {
    Component: TermsCondition,
    path: '/terms-and-conditions',
    exact: true,
    id: 'statisSiteUnderTermsCondition',
    routePath: '/terms-and-conditions',
    name: 'TermsCondition',
  },
  {
    Component: PrivacyPolicy,
    path: '/privacy-policy',
    exact: true,
    id: 'statisSiteUnderPrivacyPolicy',
    routePath: '/privacy-policy',
    name: 'PrivacyPolicy',
  },
  {
    Component: Affiliations,
    path: '/affiliations',
    exact: true,
    id: 'statisSiteUnderAffiliations',
    routePath: '/affiliations',
    name: 'Affiliations',
  },
  {
    Component: Enrollment,
    path: '/enrollment/:courseId',
    exact: true,
    id: 'statisSiteUnderEnrollment',
    routePath: '/enrollment/:courseId',
    name: 'Enrollment',
  },
  {
    Component: wellness,
    path: '/wellness',
    exact: true,
    id: 'statisSiteUnderWellness',
    routePath: '/wellness',
    name: 'Wellness',
  },
  {
    Component: CorporateSocialResponsibilty,
    path: '/csr',
    exact: true,
    id: 'statisSiteUnderCsr',
    routePath: '/csr',
    name: 'csr',
  },
  {
    Component: SingleCsr,
    path: '/csr/:csrId',
    exact: true,
    id: 'statisSiteUnderSingleCsr',
    routePath: '/csr/:csrId',
    name: 'SingleCsr',
  },
  {
    Component: Thankyou,
    path: '/enrollment_thankyou',
    exact: true,
    id: 'statisSiteUnderEnrollmentThankyou',
    routePath: '/enrollment_thankyou',
    name: 'EnrollmentThankyou',
  },
  {
    Component: SatsangThankyou,
    path: '/satsang_thankyou',
    exact: true,
    id: 'statisSiteUnderEnrollmentThankyou',
    routePath: '/satsang_thankyou',
    name: 'EnrollmentThankyou',
  },
  {
    Component: YogaByTheBay,
    path: '/yoga-by-the-bay',
    exact: true,
    id: 'statisSiteUnderHighlightsYogaByTheBay',
    routePath: '/yoga-by-the-bay',
    name: 'YogaByTheBay',
  },
  {
    Component: SattvikCooking,
    path: '/sattvik-cooking',
    exact: true,
    id: 'statisSiteUnderHighlightsSattvikCooking',
    routePath: '/sattvik-cooking',
    name: 'SattvikCooking',
  },
  {
    Component: CorporateWorkshop,
    path: '/corporate-workshops',
    exact: true,
    id: 'statisSiteUnderHighlightsCorporateWorkshop',
    routePath: '/corporate-workshops',
    name: 'CorporateWorkshop',
  },
  {
    Component: FullmoonMeditation,
    path: '/fullmoon-meditation',
    exact: true,
    id: 'statisSiteUnderHighlightsFullmoonMeditation',
    routePath: '/fullmoon-meditation',
    name: 'FullmoonMedit3000ation',
  },
  {
    Component: OnlineTution,
    path: '/home-tuitions',
    exact: true,
    id: 'statisSiteUnderHighlightsOnlineTuotion',
    routePath: '/home-tuitions',
    name: 'OnlineTuition',
  },
  //Soci
  // {
  //   Component: Gift,
  //   path: '/gifting/*',
  //   exact: true,
  //   id: 'statisSiteGift',
  //   routePath: '/gifting/*',
  //   name: 'Gift',
  // },
  // {
  //   Component: Donations,
  //   path: '/donation/*',
  //   exact: true,
  //   id: 'statisSiteDonations',
  //   routePath: '/donation/*',
  //   name: 'Donations',
  // },
  // {
  //   Component: Alumni,
  //   path: '/alumni/*',
  //   exact: true,
  //   id: 'statisSiteUnderAlumni',
  //   routePath: '/alumni/*',
  //   name: 'Alumni',
  // },
  // {
  //   Component: FAQ,
  //   path: '/faqs',
  //   exact: true,
  //   id: 'statisSiteUnderFAQ',
  //   routePath: '/faqs',
  //   name: 'FAQ',
  // },
  {
    Component: VolunteerPage,
    path: '/volunteer',
    exact: true,
    id: 'statisSiteUnderJoin',
    routePath: '/volunteer',
    name: 'Join',
  },
  {
    Component: VolunteerJob,
    path: '/volunteer/:id',
    exact: true,
    id: 'statisSiteUnderJoin',
    routePath: '/volunteer/:id',
    name: 'Join',
  },
  {
    Component: Values,
    path: '/values',
    exact: true,
    id: 'statisSiteUnderValues',
    routePath: '/values',
    name: 'Values',
  },
  {
    Component: AlumniGallery,
    path: '/alumni-gallery',
    exact: true,
    id: 'staticSiteUnderAlumni',
    routePath: '/alumni-gallery',
    name: 'Alumni',
  },
  {
    Component: Support,
    path: '/support-your-alma-mater',
    exact: true,
    id: 'staticSiteUnderAlmaMater',
    routePath: '/support-your-alma-mater',
    name: 'AlmaMater',
  },
  {
    Component: Gifting,
    path: '/gifting',
    exact: true,
    id: 'statisSiteGifting',
    routePath: '/gifting',
    name: 'Gifting',
  },
  {
    Component: Facts,
    path: '/our-facts/*',
    exact: true,
    id: 'statisSiteUnderFacts',
    routePath: '/our-facts/*',
    name: 'Facts',
  },
  // {
  //   Component: Experiences,
  //   path: '/experience/*',
  //   exact: true,
  //   id: 'statisSiteUnderExperience',
  //   routePath: '/experience/*',
  //   name: 'Experience',
  // },
  {
    Component: Authentication,
    path: '/user/*',
    exact: true,
    id: 'statisSiteUnderAuth',
    routePath: '/user/*',
    name: 'Auth',
  },
  {
    Component: DonationPage,
    path: '/donation',
    exact: true,
    id: 'statisSiteDonations',
    routePath: '/donation',
    name: 'Donations',
  },
  {
    Component: SingleDonation,
    path: '/donation/:donationId',
    exact: true,
    id: 'statisSiteDonations',
    routePath: '/donation/:donationId',
    name: 'Donations',
  },
  {
    Component: Careers,
    path: '/careers',
    exact: true,
    id: 'statisSiteCareers',
    routePath: '/careers',
    name: 'Careers',
  },
  {
    Component: SingleJob,
    path: '/careers/:jobId',
    exact: true,
    id: 'statisSiteJob',
    routePath: '/careers/:jobId',
    name: 'Job',
  },
  {
    Component: LocateUs,
    path: '/our-branches',
    exact: true,
    id: 'statisLocateUs',
    routePath: '/our-branches',
    name: 'LocateUs',
  },

  {
    Component: JuhuVileLoc,
    path: '/Juhu',
    exact: true,
    id: 'statisLocateUs',
    routePath: '/our-branches/Juhu',
    name: 'LocateUs',
  },

  {
    Component: JuhuVileLoc,
    path: '/vileParle',
    exact: true,
    id: 'statisLocateUs',
    routePath: '/vileParle',
    name: 'LocateUs',
  },

  {
    Component: JuhuVileLoc,
    path: '/santaCruz',
    exact: true,
    id: 'statisLocateUs',
    routePath: '/santaCruz',
    name: 'LocateUs',
  },

  {
    Component: JuhuVileLoc,
    path: '/LokhandWala',
    exact: true,
    id: 'statisLocateUs',
    routePath: '/LokhandWala',
    name: 'LocateUs',
  },


  //Search
  {
    Component: SearchModal,
    path: '/search',
    id: 'staticSearch',
    routePath: '/search',
    name: 'Search',
  },
  {
    Component: LocateDetails,
    path: '/matunga',
    exact: true,
    id: 'statisMatunga',
    routePath: '/matunga',
    name: 'Matunga',
  },
  //Search
  {
    Component:SearchModal,
    path:'/search',
    id:'staticSearch',
    routePath:'/search',
    name:'Search'
  },
  {
    Component:NutriDiet,
    path:'/nutri-diet',
    id:'staticNutriDiet',
    routePath:'/nutri-diet',
    name:'NutriDiet'
  },
  {
    Component:LandingPage,
    path:'/ad-campaign',
    id:'staticLandingPage',
    routePath:'/ad-campaign',
    name:'LandingPage'
  },
  {
    Component:LandingPageNew,
    path:'/ad-campaign-21-days',
    id:'staticLandingPage',
    routePath:'/ad-campaign-21-days',
    name:'LandingPage'
  },
  {
    Component:CampaignThankYou,
    path:'/campaign-thank-you',
    id:'staticLandingPageThankYou',
    routePath:'/campaign-thank-you',
    name:'LandingPageThankYou'
  },
  //Shop
  {
    Component: Shop,
    path: '/shop',
    exact: true,
    id: 'statisSiteShop',
    routePath: '/shop',
    name: 'Shop',
  },
  {
    Component: SingleProduct,
    path: '/shop/product/:productID',
    exact: true,
    id: 'statisSiteShop',
    routePath: '/shop/product/:productID',
    name: 'Shop',
  },
  {
    Component: AddToCart,
    path: '/shop/cart',
    exact: true,
    id: 'statisSiteCart',
    routePath: '/shop/cart',
    name: 'Cart',
  },
  {
    Component: ShippingAdd,
    path: '/shop/checkout',
    exact: true,
    id: 'statisSiteCheckout',
    routePath: '/shop/checkout',
    name: 'Checkout',
  },
  {
    Component: ShopThankyou,
    path:'/shop/thank-you',
    exact:true,
    id:'statisSiteShopThanks',
    routePath:'/shop/checkout',
    name:'ShopThanks'
  },{
    Component:OrderHistroy,
    path:'/user/order/:orderId',
    exact:true,
    id:'statisSiteOrderHistory',
    routePath:'/user/order/:orderId',
    name:'OrderHistory'
  },
  {
    Component: NutriDietClinic,
    path: '/nutri-clinic-landing-page',
    exact: true,
    id: 'statisSiteNutriClinic',
    routePath: '/nutri-clinic-landing-page',
    name: 'NutriClinic',
  },
  {
    Component: SevenDays,
    path: '/seven-days-landing-page',
    exact: true,
    id: 'statisSiteNutriClinic',
    routePath: '/seven-days-landing-page',
    name: 'SevenDays',
  },
  {
    Component: DescisionComp,
    path: '/:contentId',
    exact: true,
    id: 'statisSiteCourse',
    routePath: '/:contentId',
    name: 'singleCourse',
  },
]

export default staticSiteRoutes
