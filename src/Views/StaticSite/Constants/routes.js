// import OurLegacyModal from '../Components/OurLegacyModal'
import MadhavJi from '../Views/About/our-legacy/paramhamsa-madhavadas-ji.jsx'
import Yogendra from '../Views/About/our-legacy/shree-yogendra-ji'
import Jayadev from '../Views/About/our-legacy/dr-jayadeva-yogendra.jsx'
import Sitadevi from '../Views/About/our-legacy/smt-sitadevi-ji.jsx'
import Hansaji from '../Views/About/our-legacy/dr-hansaji-yogendra'
import Hirish from '../Views/About/our-legacy/harish-ji'
import Blessings from '../Views/About/blessings'
import AboutUs from '../Views/About/index'
import OurLegacy from '../Views/About/our-legacy'
import Seminar from '../Views/Alumni'
import AlumniGallery from '../Views/Alumni/alumni-gallery'
import Support from '../Views/Alumni/support'
import Courses from '../Views/Courses'
import SingleCourse from '../Views/Courses/course-name'
import Facilities from '../Views/Facilities'
import FAQ from '../Components/Faq'
import Gifting from '../Views/Gifting'
import Home from '../Views/Home'
import Volunteer from '../Views/Volunteer'
import Values from '../Views/Volunteer/values'
import MediaGallery from '../Views/Media'
import MediaEvents from '../Views/Media/events'
import News from '../Views/Media/news'
import MuseumPage from '../Views/Museum/index.jsx'
import YogaTotalHealth from '../Views/Publication'
import Books from '../Views/Publication/books'
import EBooks from '../Views/Publication/e-books'
import library from '../Views/Publication/library'
import Yogasattva from '../Views/Publication/yogasattva'
import Shop from '../Views/Shop'
import SocialResponsibility from '../Views/SocialPage/index.jsx'
import BlogPage from '../Views/BlogPage/index.jsx'
import BlogAnother from '../Views/BlogPage/Blog.jsx'
import OurFacts from '../Views/Facts/index'
import AllExperience from '../Views/Experience/index.js'
import SignIn from '../Views/SignIn/index.jsx'
import Careers from '../Views/Careers/index.jsx'
import SingleJob from '../Components/SingleJobPage/index.jsx'
import VolunteerJob from '../Views/Volunteer/volunteerJob.jsx'
import BrowseCourses from '../Components/BrowseCourses/index.jsx'
import TermsCondition from '../Components/TermsandCondition/index.jsx'
import PrivacyPolicy from '../Components/PrivacyPolicy/index.jsx'
import Affiliations from '../Components/Affiliations/index.jsx'
import Enrollment from '../Components/EnrollmentForm/index.jsx'
import wellness from '../Components/Wellness/index.jsx'
import CorporateSocialResponsibilty from '../Components/CorporateSocialResponsibility/index.jsx'
import SingleCsr from '../Components/CorporateSocialResponsibility/SingleCsr/index.jsx'
import SignUp from '../Views/Signup'
import MediaVideo from '../Components/MediaVideo/index.jsx'
import SingleDonation from '../Components/SingleDonation/index.jsx'
import DonationPage from '../Views/Donation'

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
    Component: Courses,
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
    id: 'statisSiteCourses',
    routePath: '/courses/browse/:type',
    name: 'Courses',
  },
  {
    Component: SingleCourse,
    path: '/courses/:courseId',
    exact: true,
    id: 'statisSiteCourse',
    routePath: '/courses/:courseId',
    name: 'Course',
  },
  {
    Component: AboutUs,
    path: '/about',
    exact: true,
    id: 'statisSiteAbout',
    routePath: '/about',
    name: 'About',
  },
  {
    Component: OurLegacy,
    path: '/about/our-legacy',
    exact: true,
    id: 'statisSiteOurLegacy',
    routePath: '/about/our-legacy',
    name: 'OurLegacy',
  },
  {
    Component: Blessings,
    path: '/about/blessings',
    exact: true,
    id: 'statisSiteBlessings',
    routePath: '/about/blessings',
    name: 'Blessings',
  },
  {
    Component: Sitadevi,
    path: '/about/our-legacy/smt-sitadevi-ji',
    exact: true,
    id: 'statisSiteSitadeviJi',
    routePath: '/about/our-legacy/smt-sitadevi-ji',
    name: 'SitadeviJi',
  },
  {
    Component: Jayadev,
    path: '/about/our-legacy/dr-jayadeva-yogendra',
    exact: true,
    id: 'statisSiteDrJayadeva',
    routePath: '/about/our-legacy/dr-jayadeva-yogendra',
    name: 'DrJayadeva',
  },
  {
    Component: Hansaji,
    path: '/about/our-legacy/dr-hansaji-yogendra',
    exact: true,
    id: 'statisSiteDrHansaji',
    routePath: '/about/our-legacy/dr-hansaji-yogendra',
    name: 'DrHansaji',
  },
  {
    Component: Hirish,
    path: '/about/our-legacy/harish-ji',
    exact: true,
    id: 'statisSiteHarishJi',
    routePath: '/about/our-legacy/harish-ji',
    name: 'HarishJi',
  },
  {
    Component: MadhavJi,
    path: '/about/our-legacy/paramhamsa-madhavadas-ji',
    exact: true,
    id: 'statisSiteMadhavdasJi',
    routePath: '/about/our-legacy/paramhamsa-madhavadas-ji',
    name: 'MadhavdasJi',
  },
  {
    Component: Yogendra,
    path: '/about/our-legacy/shree-yogendra-ji',
    exact: true,
    id: 'statisSiteYagendraJi',
    routePath: '/about/our-legacy/shree-yogendra-ji',
    name: 'YagendraJi',
  },
  {
    Component: Yogendra,
    path: '/about/our-legacy/shree-yagendra-ji',
    exact: true,
    id: 'statisSiteYagendraJi',
    routePath: '/about/our-legacy/shree-yagendra-ji',
    name: 'YagendraJi',
  },
  {
    Component: YogaTotalHealth,
    path: '/publication',
    exact: true,
    id: 'statisSitePublication',
    routePath: '/publication',
    name: 'Publication',
  },
  {
    Component: Yogasattva,
    path: '/publication/yogasattva',
    exact: true,
    id: 'statisSiteYogasattva',
    routePath: '/publication/yogasattva',
    name: 'Yogasattva',
  },
  {
    Component: Books,
    path: '/publication/books',
    exact: true,
    id: 'statisSiteBooks',
    routePath: '/publication/books',
    name: 'Books',
  },
  {
    Component: EBooks,
    path: '/publication/e-books',
    exact: true,
    id: 'statisSiteEBooks',
    routePath: '/publication/e-books',
    name: 'EBooks',
  },
  {
    Component: library,
    path: '/publication/library',
    exact: true,
    id: 'statisSiteLibrary',
    routePath: '/publication/library',
    name: 'Library',
  },
  {
    Component: MediaGallery,
    path: '/media',
    exact: true,
    id: 'statisSiteMedia',
    routePath: '/media',
    name: 'Media',
  },
  {
    Component: News,
    path: '/media/news',
    exact: true,
    id: 'statisSiteNews',
    routePath: '/media/news',
    name: 'News',
  },
  {
    Component: MediaEvents,
    path: '/media/events',
    exact: true,
    id: 'statisSiteEvent',
    routePath: '/media/events',
    name: 'Event',
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
    Component: Seminar,
    path: '/alumni',
    exact: true,
    id: 'statisSiteUnderAlumni',
    routePath: '/alumni',
    name: 'Alumni',
  },
  {
    Component: AlumniGallery,
    path: '/alumni/alumni-gallery',
    exact: true,
    id: 'statisSiteUnderAlumniGallery',
    routePath: '/alumni/alumni-gallery',
    name: 'AlumniGallery',
  },
  {
    Component: Support,
    path: '/alumni/support',
    exact: true,
    id: 'statisSiteUnderSupport',
    routePath: '/alumni/support',
    name: 'Support',
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
    path: '/join-our-team/values',
    exact: true,
    id: 'statisSiteUnderValues',
    routePath: '/join-our-team/values',
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
    Component: BlogPage,
    path: '/blogs',
    exact: true,
    id: 'statisSiteUnderBlogs',
    routePath: '/blogs',
    name: 'Blogs',
  },
  {
    Component: BlogAnother,
    path: '/blogs/:blogId',
    exact: true,
    id: 'statisSiteUnderBlog',
    routePath: '/blogs/:blogId',
    name: 'Blog',
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
    Component: Careers,
    path: '/careers',
    exact: true,
    id: 'statisSiteUnderCareers',
    routePath: '/careers',
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
    path: '/join-our-team/:id',
    exact: true,
    id: 'statisSiteUnderVolunteerJob',
    routePath: '/join-our-team/:id',
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
    Component: MediaVideo,
    path: '/media/video',
    exact: true,
    id: 'statisSiteUnderMediaVideo',
    routePath: '/media/video',
    name: 'MediaVideo',
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
