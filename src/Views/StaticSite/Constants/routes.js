// import Courses from '../Views/Courses/Views/course-page'
// import SingleCourse from '../Views/Courses/course-name'
import Facilities from '../Views/Facilities'
import FAQ from '../Components/Faq'
import Gifting from '../Views/Gifting'
import Home from '../Views/Home'
import Volunteer from '../Views/Volunteer'
import Values from '../Views/Volunteer/values'
import MuseumPage from '../Views/Museum/index.jsx'
import Shop from '../Views/Shop'
import SocialResponsibility from '../Views/SocialPage/index.jsx'
import OurFacts from '../Views/Facts/index'
import AllExperience from '../Views/Experience/index.js'
import SignIn from '../Views/SignIn/index.jsx'
import SingleJob from '../Views/Careers/Views/single-job.jsx'
import VolunteerJob from '../Views/Volunteer/volunteerJob.jsx'
import TermsCondition from '../Components/TermsandCondition/index.jsx'
import PrivacyPolicy from '../Components/PrivacyPolicy/index.jsx'
import Affiliations from '../Components/Affiliations/index.jsx'
import Enrollment from '../Components/EnrollmentForm/index.jsx'
import wellness from '../Components/Wellness/index.jsx'
import CorporateSocialResponsibilty from '../Components/CorporateSocialResponsibility/index.jsx'
import SingleCsr from '../Components/CorporateSocialResponsibility/SingleCsr/index.jsx'
import SignUp from '../Views/Signup'
import SingleDonation from '../Components/SingleDonation/index.jsx'
import DonationPage from '../Views/Donation'
import OurLegacyModal from '../Components/OurLegacyModal/index.jsx'
import About from '../Views/About'
import Alumni from '../Views/Alumni'
import Media from '../Views/Media'
import Publication from '../Views/Publication'
import Course from '../Views/Courses'
import Blogs from '../Views/BlogPage/index.jsx'
import Career from '../Views/Careers'

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
    Component: MuseumPage,
    path: '/museum',
    exact: true,
    id: 'statisSiteMuseum',
    routePath: '/museum',
    name: 'Museum',
  },
  {
    Component: Facilities,
    path: '/facilities',
    exact: true,
    id: 'statisSiteFacilities',
    routePath: '/facilities',
    name: 'Facilities',
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
    Component: Gifting,
    path: '/gifting',
    exact: true,
    id: 'statisSiteGifting',
    routePath: '/gifting',
    name: 'Gifting',
  },
  {
    Component: DonationPage,
    path: '/donation',
    exact: true,
    id: 'statisSiteDonation',
    routePath: '/donation',
    name: 'Donation',
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
    Component: OurFacts,
    path: '/our-facts',
    exact: true,
    id: 'statisSiteUnderFacts',
    routePath: '/our-facts',
    name: 'Facts',
  },
  {
    Component: AllExperience,
    path: '/experience',
    exact: true,
    id: 'statisSiteUnderExperience',
    routePath: '/experience',
    name: 'Experience',
  },
  {
    Component: SignIn,
    path: '/sign-in',
    exact: true,
    id: 'statisSiteUnderSignIn',
    routePath: '/sign-in',
    name: 'SignIn',
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
    Component: SignUp,
    path: '/sign-up',
    exact: true,
    id: 'statisSiteUnderSignUp',
    routePath: '/sign-up',
    name: 'SignUp',
  },
  {
    Component: SingleDonation,
    path: '/donation/:donationId',
    exact: true,
    id: 'statisSiteUnderSingleDonation',
    routePath: '/donation/:donationId',
    name: 'SingleDonation',
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
