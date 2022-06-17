import FAQ from '../Components/Faq'
import Home from '../Views/Home'
import Volunteer from '../Views/Volunteer'
import Values from '../Views/Volunteer/values'
import Shop from '../Views/Shop'
import SocialResponsibility from '../Views/SocialPage/index.jsx'
import SingleJob from '../Views/Careers/Views/single-job.jsx'
import VolunteerJob from '../Views/Volunteer/volunteerJob.jsx'
import TermsCondition from '../Components/TermsandCondition/index.jsx'
import PrivacyPolicy from '../Components/PrivacyPolicy/index.jsx'
import Affiliations from '../Components/Affiliations/index.jsx'
import Enrollment from '../Components/EnrollmentForm/index.jsx'
import wellness from '../Components/Wellness/index.jsx'
import CorporateSocialResponsibilty from '../Components/CorporateSocialResponsibility/index.jsx'
import SingleCsr from '../Components/CorporateSocialResponsibility/SingleCsr/index.jsx'
import OurLegacyModal from '../Components/OurLegacyModal/index.jsx'
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
    Component: SocialResponsibility,
    path: '/social-responsibility',
    exact: true,
    id: 'statisSiteSocial',
    routePath: '/social-responsibility',
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
    Component:About,
    path: '/about/*',
    exact: true,
    id: 'statisSiteAbout',
    routePath: '/about/*',
    name: 'About'
  },
  {
    Component: OurLegacyModal,
    path: '/about/our-legacy/:name',
    exact: true,
    id: 'statisSiteOurLegacyModal',
    routePath: '/about/our-legacy/:name',
    name: 'OurLegacyModal',
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
    Component: Volunteer,
    path: '/volunteer',
    exact: true,
    id: 'statisSiteUnderJoin',
    routePath: '/volunteer',
    name: 'Join',
  },
  {
    Component: Values,
    path: '/volunteer/values',
    exact: true,
    id: 'statisSiteUnderValues',
    routePath: '/volunteer/values',
    name: 'Values',
  },
  // {
  //   Component: FAQ,
  //   path: '/faq',
  //   exact: true,
  //   id: 'statisSiteUnderFAQ',
  //   routePath: '/faq',
  //   name: 'FAQ',
  // },
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
    Component:Experiences,
    path: '/experience/*',
    exact: true,
    id: 'statisSiteUnderExperience',
    routePath: '/experience/*',
    name: 'Experience',
  },
  {
    Component:Authentication,
    path:'/user/*',
    exact:true,
    id:'statisSiteUnderAuth',
    routePath:'/user/*',
    name:'Auth'
  },
  {
    Component: Career,
    path: '/careers/*',
    exact: true,
    id: 'statisSiteUnderCareers',
    routePath: '/careers/*',
    name: 'Careers',
  },
  {
    Component: SingleJob,
    path: '/careers/:jobid',
    exact: true,
    id: 'statisSiteUnderSingleJob',
    routePath: '/careers/:jobid',
    name: 'SingleJob',
  },
  {
    Component: VolunteerJob,
    path: '/volunteer/:id',
    exact: true,
    id: 'statisSiteUnderVolunteerJob',
    routePath: '/volunteer/:id',
    name: 'VolunteerJob',
  },
  {
    path: '/courses/:type',
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
]

export default staticSiteRoutes
