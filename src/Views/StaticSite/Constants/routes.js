import FAQ from '../Components/Faq'
import Home from '../Views/Home'
import Shop from '../Views/Shop'
import TermsCondition from '../Components/TermsandCondition/index.jsx'
import PrivacyPolicy from '../Components/PrivacyPolicy/index.jsx'
import Affiliations from '../Components/Affiliations/index.jsx'
import Enrollment from '../Components/EnrollmentForm/index.jsx'
import wellness from '../Components/Wellness/index.jsx'
import CorporateSocialResponsibilty from '../Components/CorporateSocialResponsibility/index.jsx'
import SingleCsr from '../Components/CorporateSocialResponsibility/SingleCsr/index.jsx'
import About from '../Views/About'
import Alumni from '../Views/Alumni'
import Media from '../Views/Media'
import Publication from '../Views/Publication'
import Course from '../Views/Courses'
import Blogs from '../Views/Blogs/index.jsx'
import Career from '../Views/Careers'
import Donations from '../Views/Donation'
import Experiences from '../Views/Experience'
import Facility from '../Views/Facilities'
import Facts from '../Views/Facts'
import Gift from '../Views/Gifting'
import Museum from '../Views/Museum'
import Authentication from '../Views/Authentication'
import SoicalPage from '../Views/SocialPage'
import VolunteerPage from '../Views/Volunteer'
import Thankyou from '../Components/EnrollmentForm/ThankYou'
import SattvikCooking from '../Components/Highlights/SattvikCooking'
import YogaByTheBay from '../Components/Highlights/YogaByTheBay'
import FullmoonMeditation from '../Components/Highlights/FullmoonMeditation'
import CorporateWorkshop from '../Components/Highlights/CorporateWorkshop'
import OnlineTution from '../Components/Highlights/OnlineTution'
import AboutUs from '../Views/About/Views/overview'
import OurLegacy from '../Views/About/Views/our-legacy'
import Blessings from '../Views/About/Views/blessings'
import Facilities from '../Views/Facilities/Views/facilities'
import DonationPage from '../Views/Donation/Views/donation-page'
import MediaGallery from '../Views/Media/Views/media-gallery'
import GalleryVideo from '../Views/Media/Views/media-video'
import YogaTotalHealth from '../Views/Publication/Views/yoga-health'
import Yogasattva from '../Views/Publication/Views/yogasattva'
import library from '../Views/Publication/Views/library'
import BlogPage from '../Views/Blogs/Views/blog-page'
import OurLegacyModal from '../Components/OurLegacyModal'

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
    Component: SoicalPage,
    path: '/social-initiatives',
    exact: true,
    id: 'statisSiteSocial',
    routePath: '/social-initiatives',
    name: 'Social',
  },
  //Course
  {
    Component: Course,
    path: '/courses/*',
    exact: true,
    id: 'statisSiteCourses',
    routePath: '/courses/*',
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
    id: 'statisSiteYogaHallRooftopSpace',
    routePath: '/yoga-halls-rooftop-space',
    name: 'YogaHallRooftopSpace',
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
    path: '/blog',
    exact: true,
    id: 'statisSiteBlog',
    routePath: '/blog',
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
  // {
  //   Component: VolunteerPage,
  //   path: '/volunteer/*',
  //   exact: true,
  //   id: 'statisSiteUnderJoin',
  //   routePath: '/volunteer/*',
  //   name: 'Join',
  // },
  // {
  //   Component: Blogs,
  //   path: '/blogs/*',
  //   exact: true,
  //   id: 'statisSiteUnderBlogs',
  //   routePath: '/blogs/*',
  //   name: 'Blogs',
  // },
  // {
  //   Component: Facts,
  //   path: '/our-facts/*',
  //   exact: true,
  //   id: 'statisSiteUnderFacts',
  //   routePath: '/our-facts/*',
  //   name: 'Facts',
  // },
  // {
  //   Component: Experiences,
  //   path: '/experience/*',
  //   exact: true,
  //   id: 'statisSiteUnderExperience',
  //   routePath: '/experience/*',
  //   name: 'Experience',
  // },
  // {
  //   Component: Authentication,
  //   path: '/user/*',
  //   exact: true,
  //   id: 'statisSiteUnderAuth',
  //   routePath: '/user/*',
  //   name: 'Auth',
  // },
  // {
  //   Component: Career,
  //   path: '/careers/*',
  //   exact: true,
  //   id: 'statisSiteUnderCareers',
  //   routePath: '/careers/*',
  //   name: 'Careers',
  // },

  {
    Component: TermsCondition,
    path: '/terms-and-condition',
    exact: true,
    id: 'statisSiteUnderTermsCondition',
    routePath: '/terms-and-condition',
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
    Component: YogaByTheBay,
    path: '/highlights/yoga_by_the_bay',
    exact: true,
    id: 'statisSiteUnderHighlightsYogaByTheBay',
    routePath: '/highlights/yoga_by_the_bay',
    name: 'YogaByTheBay',
  },

  {
    Component: SattvikCooking,
    path: '/highlights/sattvik_cooking',
    exact: true,
    id: 'statisSiteUnderHighlightsSattvikCooking',
    routePath: '/highlights/sattvik_cooking',
    name: 'SattvikCooking',
  },

  {
    Component: CorporateWorkshop,
    path: '/highlights/corporate_workshop',
    exact: true,
    id: 'statisSiteUnderHighlightsCorporateWorkshop',
    routePath: '/highlights/corporate_workshop',
    name: 'CorporateWorkshop',
  },

  {
    Component: FullmoonMeditation,
    path: '/highlights/fullmoon_meditation',
    exact: true,
    id: 'statisSiteUnderHighlightsFullmoonMeditation',
    routePath: '/highlights/fullmoon_meditation',
    name: 'FullmoonMeditation',
  },
  {
    Component: OnlineTution,
    path: '/highlights/online_tuition',
    exact: true,
    id: 'statisSiteUnderHighlightsOnlineTuotion',
    routePath: '/highlights/online_tuition',
    name: 'OnlineTuition',
  },
]

export default staticSiteRoutes
