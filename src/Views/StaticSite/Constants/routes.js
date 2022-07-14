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
import SingleJob from '../Views/Careers/Views/single-job'

const staticSiteRoutes = [
  {
    Component: Home,
    path: '/',
    exact: true,
    id: 'statisSiteHome',
    routePath: '/',
    name: 'Home',
  },
  {
    Component: SoicalPage,
    path: '/social-responsibility/*',
    exact: true,
    id: 'statisSiteSocial',
    routePath: '/social-responsibility/*',
    name: 'Social',
  },
  {
    Component: Course,
    path: '/courses/*',
    exact: true,
    id: 'statisSiteCourses',
    routePath: '/courses/*',
    name: 'Courses',
  },
  {
    Component: About,
    path: '/about/*',
    exact: true,
    id: 'statisSiteAbout',
    routePath: '/about/*',
    name: 'About',
  },
  {
    Component: Publication,
    path: '/publication/*',
    exact: true,
    id: 'statisSitePublication',
    routePath: '/publication/*',
    name: 'Publication',
  },
  {
    Component: Media,
    path: '/media/*',
    exact: true,
    id: 'statisSiteMedia',
    routePath: '/media/*',
    name: 'Media',
  },
  {
    Component: Museum,
    path: '/museum/*',
    exact: true,
    id: 'statisSiteMuseum',
    routePath: '/museum/*',
    name: 'Museum',
  },
  {
    Component: Facility,
    path: '/facilities/*',
    exact: true,
    id: 'statisSiteFacily',
    routePath: '/facilities/*',
    name: 'Facility',
  },
  {
    Component: Shop,
    path: '/shop',
    exact: true,
    id: 'statisSiteShop',
    routePath: '/shop',
    name: 'Shop',
  },
  {
    Component: Gift,
    path: '/gifting/*',
    exact: true,
    id: 'statisSiteGift',
    routePath: '/gifting/*',
    name: 'Gift',
  },
  {
    Component: Donations,
    path: '/donation/*',
    exact: true,
    id: 'statisSiteDonations',
    routePath: '/donation/*',
    name: 'Donations',
  },
  {
    Component: Alumni,
    path: '/alumni/*',
    exact: true,
    id: 'statisSiteUnderAlumni',
    routePath: '/alumni/*',
    name: 'Alumni',
  },
  {
    Component: FAQ,
    path: '/faqs',
    exact: true,
    id: 'statisSiteUnderFAQ',
    routePath: '/faqs',
    name: 'FAQ',
  },
  {
    Component: VolunteerPage,
    path: '/volunteer/*',
    exact: true,
    id: 'statisSiteUnderJoin',
    routePath: '/volunteer/*',
    name: 'Join',
  },
  {
    Component: Blogs,
    path: '/blogs/*',
    exact: true,
    id: 'statisSiteUnderBlogs',
    routePath: '/blogs/*',
    name: 'Blogs',
  },
  {
    Component: Facts,
    path: '/our-facts/*',
    exact: true,
    id: 'statisSiteUnderFacts',
    routePath: '/our-facts/*',
    name: 'Facts',
  },
  {
    Component: Experiences,
    path: '/experience/*',
    exact: true,
    id: 'statisSiteUnderExperience',
    routePath: '/experience/*',
    name: 'Experience',
  },
  {
    Component: Authentication,
    path: '/user/*',
    exact: true,
    id: 'statisSiteUnderAuth',
    routePath: '/user/*',
    name: 'Auth',
  },
  {
    Component: Career,
    path: '/careers',
    exact: true,
    id: 'statisSiteUnderCareers',
    routePath: '/careers',
    name: 'Careers',
  },
  {
    Component: SingleJob,
    path: '/careers/:jobId',
    exact: true,
    id: 'statisSiteUnderCareers',
    routePath: '/careers/:jobId',
    name: 'Careers',
  },
  {
    Component: TermsCondition,
    path: '/terms&condition',
    exact: true,
    id: 'statisSiteUnderTermsCondition',
    routePath: '/terms&condition',
    name: 'TermsCondition',
  },
  {
    Component: PrivacyPolicy,
    path: '/privacy&policy',
    exact: true,
    id: 'statisSiteUnderPrivacyPolicy',
    routePath: '/privacy&policy',
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
